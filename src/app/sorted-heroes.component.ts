import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

// 英雄列表组件
@Component({
    selector: 'app-unsorted-heroes',
    template: `
        <div *ngFor="let hero of heroes">
            {{hero.name}}
        </div>
    `,
    providers: [HeroService]
})
export class HeroesBaseComponent implements OnInit {
    heroes: Array<Hero>;

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroes = this.heroService.getAllHeroes();
        this.afterGetHeroes();
    }

    // Post-process heroes in derived class override
    protected afterGetHeroes() { }
}

// 带排序的英雄列表组件
@Component({
    selector: 'app-sorted-heroes',
    template: `{{aaa}}
        <div *ngFor="let hero of heroes">
            {{hero.name}}
        </div>
    `,
    providers: [HeroService]
})
export class SortedHeroesComponent extends HeroesBaseComponent {
    constructor(heroService: HeroService) {
        super(heroService);
    }

    protected afterGetHeroes() {
        this.heroes = this.heroes.sort((heroA, heroB) => {
            return heroA.name < heroB.name ? -1 :
                heroA.name > heroB.name ? 1 : 0;
        });
    }
}
