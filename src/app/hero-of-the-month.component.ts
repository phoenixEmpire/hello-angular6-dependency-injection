import { Hero } from './hero';
import { Component, InjectionToken, Inject } from '@angular/core';
import { HeroService } from './hero.service';
import { LoggerService } from './logger.service';
import { DateLoggerService } from './date-logger.service';
import { MinimalLogger } from './minimal-logger.service';
import { RUNNERS_UP, runnersUpFactory } from './runners-up.factory';

// InjectionToken is parameterized on T which is the type of object which will be returned by the Injector.
// This provides additional level of type safety.
const TITLE = new InjectionToken<string>('title');
const someHero = new Hero(42, 'Magma', 'Had a great month!', '555-555-555');

@Component({
    selector: 'app-hero-of-the-month',
    templateUrl: './hero-of-the-month.component.html',
    providers: [
        { provide: Hero, useValue: someHero },
        { provide: TITLE, useValue: 'Hero of the Month' },
        { provide: HeroService, useClass: HeroService },
        { provide: LoggerService, useClass: DateLoggerService },
        // 通过使用别名接口来把一个 API 变窄 （ 仅限于TypeScript静态检查阶段，编译生成的JavaScript代码中仍然能访问 ）
        { provide: MinimalLogger, useExisting: LoggerService },
        { provide: RUNNERS_UP, useFactory: runnersUpFactory(2), deps: [Hero, HeroService] }
    ]
})
export class HeroOfTheMonthComponent {
    logs: string[] = [];

    constructor(
        public heroOfTheMonth: Hero,
        @Inject(TITLE)
        public title: string,
        logger: MinimalLogger,
        @Inject(RUNNERS_UP)
        public runnersUp: string
    ) {
        this.logs = logger.logs;
        logger.logInfo('starting up');
    }
}
