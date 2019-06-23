import {Power} from "./Power";
import {Universe} from "./Universe";


export class Hero {
    id: number;
    name: string;
    universe: Universe;
    powerList: Power[];
    created_at: Date;
    active: Boolean;
  }