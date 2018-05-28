import { Component } from '@angular/core';
import { LoggerService } from './logger.service';
import { HeroService } from './hero.service';

// 英雄简历列表
@Component({
    selector: 'app-hero-bios',
    templateUrl: './hero-bios.component.html',
    // Angular 只能在该组件及其各级子组件的实例上注入这个服务实例，而不能在其它地方注入这个服务实例。
    providers: [HeroService]
})
export class HeroBiosComponent {
    constructor(logger: LoggerService) {
        logger.logInfo('Creating HeroBiosComponent');
    }
}
