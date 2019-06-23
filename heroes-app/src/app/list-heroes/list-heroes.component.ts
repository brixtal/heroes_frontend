import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HeroesService} from "../Heroes/heroes.service";


@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent implements OnInit {

  constructor(private heroService : HeroesService) { }

  listHeroes : Object;

  getHeroes() {

    this.heroService.getAllHeroes().subscribe(
      data => {
        this.listHeroes = data;
      }
  );

  }

  ngOnInit() {
    this.getHeroes();
  }

}
