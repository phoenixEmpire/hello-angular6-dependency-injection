import { Injectable } from '@angular/core';
import { Hero } from './hero';

// 英雄服务
@Injectable()
export class HeroService {
    private heroes: Array<Hero> = [
        new Hero(1, 'RubberMan', 'Hero of many talents', '123-456-789'),
        new Hero(2, 'Magma', 'Hero of all trades', '555-555-555'),
        new Hero(3, 'Mr. Nice', 'The name says it all', '111-222-333')
    ];

    getHeroById(id: number): Hero {
        return this.heroes.find(hero => hero.id === id);
    }

    getAllHeroes(): Array<Hero> {
        return this.heroes;
    }
}
