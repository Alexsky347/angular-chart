import { EnumChart } from "../enums/enum-chart";
import { MyChart } from "./chart";

export class BarChart extends MyChart {

  constructor() {
    super();
  }

  override build(): any {
    this.type = EnumChart.Bar;
  }
}
