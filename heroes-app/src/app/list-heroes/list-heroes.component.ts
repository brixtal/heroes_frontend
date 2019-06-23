import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Power } from '../power';
import {HeroesService} from "../Heroes/heroes.service";

import * as moment from 'moment';


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

  formatTime(time: string): String{
    let timeDate = moment(time, "DD/MM/YYYY HH:mm");
    let timeString = timeDate.fromNow();
    if(timeString.indexOf("years") != -1){
      timeString = timeDate.format("MM/DD/YYYY");
    }
    return timeString;
  }

  deleteHero(hero:Hero) {
    if(confirm("Are you sure to delete hero "+hero.name)){
      this.heroService.deleteHero(hero).subscribe(
        data => {
          this.getHeroes();
        }
      )
    }
  }

  ngOnInit() {
    this.getHeroes();
  }

}
