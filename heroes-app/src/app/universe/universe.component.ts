import { Component, OnInit } from '@angular/core';
import {UniverseService} from "../Universe/universe.service";

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.css']
})
export class UniverseComponent implements OnInit {

  universes: Object;

  constructor(private universeService: UniverseService) { 

  }

  getUniverses() {
    this.universeService.getAllUniverses().subscribe(
      data => {
        this.universes = data;
        console.log(data);
      }
  );
}

  ngOnInit():void {
    this.getUniverses();
    this.getPowers();
  }
    
}
