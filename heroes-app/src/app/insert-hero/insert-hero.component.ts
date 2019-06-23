import { Component, OnInit } from '@angular/core';
import {UniverseService} from "../Universe/universe.service";
import { Hero } from '../hero';

@Component({
  selector: 'app-insert-hero',
  templateUrl: './insert-hero.component.html',
  styleUrls: ['./insert-hero.component.css']
})
export class InsertHeroComponent implements OnInit {

  universes: Object;
  newHero : Object;

  constructor(private universeService: UniverseService) { 

    let hero = {
      "name" : "",
      "power" : []
    }
    this.newHero = hero;
  }

  getUniverses() {
    this.universeService.getAllUniverses().subscribe(
      data => {
        this.universes = data;
      }
  );
}

  ngOnInit() {
    this.getUniverses();
  }

}
