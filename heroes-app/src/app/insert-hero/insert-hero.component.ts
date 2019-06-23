import { Component, OnInit } from '@angular/core';
import {UniverseService} from "../Universe/universe.service";
import {PowerService} from "../Power/power.service";
import { FormControl } from '@angular/forms';
import { Hero } from '../Hero';
import { Power } from '../Power';
import { Universe } from '../Universe';

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
  newHeroUniverse: Universe;
  public tempPower: Power;
  fixedListPowers: Object;


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

  submit() {
    console.log("Name: ", this.newHero.name);
    console.log("Power: ", this.newHeroPowers);
    console.log("Universe: ", this.newHeroUniverse);

    let powers = this.findIdPowers(this.newHeroPowers);

    console.log(powers);

  }

  findIdPowers(listStringPowers: String[])  {
    
    let listPowers = [];
    let findPower = false;
    console.log
    listStringPowers.forEach(e => {
      findPower = false;
      for( var i = 0; i < this.fixedListPowers.length; i++){ 
        console.log(this.fixedListPowers[i].description," ",e)
        if ( this.fixedListPowers[i].description == e) {
          console.log("entrei")
          listPowers.push({
            "id": this.fixedListPowers[i].id
          });
          findPower = true;
          break;
        }
     }
     if(findPower == false) {
       console.log("adicionando...");
       this.tempPower.description = e;
       this.powerService.insertNewPower(this.tempPower).subscribe(
        data => {
          listPowers.push({
            "id": data.id
          });
        }
    );;
     }
      
    });


    return listPowers;
  }

  onSelectedUniversed(universe:Universe) {

    this.newHeroUniverse = universe;
    console.log(this.newHeroUniverse.description);

  }
getPowers() {

  this.powerService.getAllPowers().subscribe(
    data => {
      this.powers = data;
      this.fixedListPowers = data.slice();
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
    this.tempPower = new Power();
    this.getUniverses();
    this.getPowers();
  }

}