import { Component, Input, OnInit } from '@angular/core';
import { HeroCacheService } from './hero-cache.service';

// 英雄简历组件
@Component({
    selector: 'app-hero-bio',
    templateUrl: './hero-bio.component.html',
    providers: [HeroCacheService] // 在组件中注册提供商
})
export class HeroBioComponent implements OnInit {
    @Input()
    heroId: number;

    constructor(private heroCache: HeroCacheService) { }

    ngOnInit() {
        this.heroCache.fetchCachedHero(this.heroId);
    }

    get hero() {
        return this.heroCache.hero;
    }
}
