import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {UniverseService} from "../Universe/universe.service";
import {HeroesService} from "../Heroes/heroes.service";
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
  newHero : Hero;
  powers : Object;
  selectedPower: String;
  newHeroPowers: String[];
  newHeroUniverse: Universe;
  public tempPower: Power;
  fixedListPowers: Object[];
  listPowers: Power[];
  selectedId: Number;


  constructor(private universeService: UniverseService, private powerService : PowerService, 
        private heroesService: HeroesService,  private route: ActivatedRoute, private router: Router) { 
    this.selectedId = 0;
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

    this.newHero.powerList = this.listPowers;
    this.newHero.universe = this.newHeroUniverse;
    this.newHero.created_at = new Date();
    this.newHero.active = true;

    if(this.newHero.powerList.length == 0){
      alert("Select at least one power!");
      return;
    } if (this.newHero.name == null || this.newHero.name.trim().length == 0) {
      alert("Insert a name to hero!");
      return;
    } if (this.newHero.universe == null){
      alert("Select a universe!");
      return;
    }

    this.heroesService.insertNewHero(this.newHero).subscribe(
       data => {
        alert("Hero inserted successfully!");
        this.router.navigate(['/list']);
       }
    )
  }

  findIdPowers(listStringPowers: String[])  {
    
    let listPowers = [];
    let findPower = false;
    listStringPowers.forEach(e => {
      
    });
  }

  onSelectedUniversed(universe:Universe) {

    this.newHeroUniverse = universe;
    this.selectedId = universe.id;
    console.log(this.newHeroUniverse.description);

  }
getPowers() {

  this.powerService.getAllPowers().subscribe(
    data => {
      this.powers = data;
      this.fixedListPowers = (data).slice();
    }
);
}

onSelectedPower(selectedPower) {
  this.newHeroPowers[this.newHeroPowers.length] = selectedPower;
  this.selectedPower = "";


  let findPower = false;
  for( var i = 0; i < this.fixedListPowers.length; i++){ 
    console.log(this.fixedListPowers[i].description," ",selectedPower)
    if ( this.fixedListPowers[i].description == selectedPower) {
      this.listPowers.push({
        "id": this.fixedListPowers[i].id,
        "description": selectedPower
      });
      findPower = true;
      break;
      }
    }
    if(findPower == false) {
      this.tempPower.description = selectedPower;
      this.powerService.insertNewPower(this.tempPower).subscribe(
      data => {
        this.listPowers.push(
          data
        );
      }
    );
     }

  for( var i = 0; i < this.powers.length; i++){ 
    if ( this.powers[i].description == selectedPower) {
      this.powers.splice(i, 1); 
    }
 }
}

  queryField: FormControl = new FormControl();

  ngOnInit() {
    this.tempPower = new Power();
    this.listPowers = [];
    this.getUniverses();
    this.getPowers();
    this.newHero = new Hero();
  }

}