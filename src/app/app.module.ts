import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroBiosComponent } from './hero-bios.component';
import { HeroBioComponent } from './hero-bio.component';
import { HighLightDirective } from './highlight.directive';
import { HeroBiosContactsComponent } from './hero-bios-contacts.component';
import { HeroContactComponent } from './hero-contact.component';
import { HeroOfTheMonthComponent } from './hero-of-the-month.component';
import { HeroesBaseComponent, SortedHeroesComponent } from './sorted-heroes.component';
import {
  AliceComponent, AlexComponent,
  BarrayComponent, BethComponent,
  BobComponent, CarolComponent, ChrisComponent, CraigComponent, CathyComponent, ParentFinderComponent
} from './parent-finders.component';

const declarations: Type<any>[] = [
  AppComponent,
  HeroBiosComponent, HeroBiosContactsComponent, HeroBioComponent, HeroContactComponent,
  HeroOfTheMonthComponent,
  HeroesBaseComponent, SortedHeroesComponent,
  HighLightDirective,
  ParentFinderComponent
];

const a_components = [AlexComponent, AliceComponent];
const b_components = [BarrayComponent, BethComponent, BobComponent];
const c_components = [CarolComponent, ChrisComponent, CraigComponent, CathyComponent];

@NgModule({
  declarations: [
    declarations,
    a_components,
    b_components,
    c_components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
