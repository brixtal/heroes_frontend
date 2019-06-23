import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {PowerService} from "./Power/power.service";
import {UniverseService} from "./Universe/universe.service";
import {HeroesService} from "./Heroes/heroes.service";


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PowerComponent } from './power/power.component';
import { UniverseComponent } from './universe/universe.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    PowerComponent,
    UniverseComponent,
    ListHeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PowerService, UniverseService, HeroesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
