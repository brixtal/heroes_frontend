import { Component, OnInit } from '@angular/core';
import {UniverseService} from "../Universe/universe.service";
import {PowerService} from "../Power/power.service";
import { FormControl } from '@angular/forms';
import { Hero } from '../hero';
import { Power } from '../power';

@Component({
  selector: 'app-insert-hero',
  templateUrl: './insert-hero.component.html',
  styleUrls: ['./insert-hero.component.css']
})
export class InsertHeroComponent implements OnInit {

  universes: Object;
  newHero : Object;
  powers : Object;
  selectedPower: String;
  newHeroPowers: String[];
  constructor(private universeService: UniverseService, private powerService : PowerService) { 

    let hero = {
      "name" : ""
    }
    this.newHero = hero;
    this.selectedPower = "";
    this.newHeroPowers = [];
  }

  getUniverses() {
    this.universeService.getAllUniverses().subscribe(
      data => {
        this.universes = data;
      }
  );
}


getPowers() {

  this.powerService.getAllPowers().subscribe(
    data => {
      this.powers = data;
    }
);
}

onSelectedPower(selectedPower) {
  this.newHeroPowers[this.newHeroPowers.length] = selectedPower;
  this.selectedPower = "";

  for( var i = 0; i < this.powers.length; i++){ 
    if ( this.powers[i].description == selectedPower) {
      this.powers.splice(i, 1); 
    }
 }
}


  queryField: FormControl = new FormControl();

  ngOnInit() {
    this.getUniverses();
    this.getPowers();
  }

}
