import { UUID } from "uuidjs";
import { TypeChart } from "../types/type-chart";
import { ItMyChart } from "../interfaces/it-my-chart";

export abstract class MyChart {
  type!: TypeChart;
  id: string;

  constructor() {
    console.log('creating chart');
    this.id = UUID.generate();
  }

  abstract build(): any

  render(): ItMyChart {
    return {
      id: this.id,
      type: this.type
    }
  }
}
