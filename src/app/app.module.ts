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

const declarations: Type<any>[] = [
  AppComponent,
  HeroBiosComponent, HeroBiosContactsComponent, HeroBioComponent, HeroContactComponent,
  HeroOfTheMonthComponent,
  HeroesBaseComponent, SortedHeroesComponent,
  HighLightDirective
];

@NgModule({
  declarations: [
    declarations
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
