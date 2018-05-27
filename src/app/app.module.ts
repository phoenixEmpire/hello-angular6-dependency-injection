import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroBiosComponent } from './hero-bios.component';
import { HeroBioComponent } from './hero-bio.component';
import { HighLightDirective } from './highlight.directive';

const declarations: Type<any>[] = [
  AppComponent,
  HeroBiosComponent, HeroBioComponent,
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
