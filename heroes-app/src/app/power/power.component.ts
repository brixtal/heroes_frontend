import { Component, OnInit } from '@angular/core';
import {Power} from "../Power";
import {PowerService} from "../Power/power.service";

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  powers: Object;
  public power: Power;

  constructor(private powerService: PowerService ) { 
    
  }

  getPowers() {

      this.powerService.getAllPowers().subscribe(
        data => {
          this.powers = data;
        }
    );
  }

  addPower(desc) {
    this.power.description = desc;
    this.powerService.insertNewPower(this.power);
  }

  ngOnInit(): void {
    // Make the HTTP request:
    this.power = new Power();
    this.getPowers();
  }

}
