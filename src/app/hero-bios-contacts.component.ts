import { Component } from '@angular/core';
import { LoggerService } from './logger.service';
import { HeroService } from './hero.service';

// 英雄简历列表组件 ( 带有联系方式 )
@Component({
    selector: 'app-hero-bios-contacts',
    templateUrl: './hero-bios-contacts.component.html',
    providers: [HeroService]
})
export class HeroBiosContactsComponent {
    constructor(logger: LoggerService) {
        logger.logInfo('Creating HeroBiosAndContactsComponent');
    }
}
