import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InsertHeroComponent} from './insert-hero/insert-hero.component'
import {ListHeroesComponent} from './list-heroes/list-heroes.component'


const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListHeroesComponent },
  { path: 'insert', component: InsertHeroComponent }];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
