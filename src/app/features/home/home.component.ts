import { Component } from '@angular/core';
import { PieChart } from '../../core/models/classes/pie-chart';
import { BarChart } from '../../core/models/classes/bar-chart';
import { ChartComponent } from '../../ui/chart/chart.component';
import { ItMyChart } from '../../core/models/interfaces/it-my-chart';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ChartComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  pieChart: ItMyChart;
  barChart: ItMyChart;

  constructor() {
    const pieChart = new PieChart();
    pieChart.build();
    this.pieChart = pieChart.render();

    const barChart = new BarChart();
    barChart.build();
    this.barChart = barChart.render();
  }


}
