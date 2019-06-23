import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Power } from '../power';
import {HeroesService} from "../Heroes/heroes.service";


@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['../insert-hero/insert-hero.component.css']
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

  getPower(powers:Power[]): String{
    let firstPower = true;
    let powerString = "";
    powers.forEach(element => {
      if(!firstPower) powerString += ", ";
      else firstPower = false;
      powerString += element.description;
      
    });
    return powerString;
  }

  }

  ngOnInit() {
    this.getHeroes();
  }

}
