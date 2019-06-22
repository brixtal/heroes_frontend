import {Power} from "./Power";
import {Universe} from "./Universe";


export class Hero {
    id: number;
    name: string;
    universe: Universe;
    power: Power[];
    created_at: Date
  }