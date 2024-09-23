import { Component, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { TypeChart } from '../../core/models/types/type-chart';
import { ItMyChart } from '../../core/models/interfaces/it-my-chart';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnChanges {
  protected chart?: Chart<ChartType, number[], string>;

  @ViewChild('chartContainer', { static: true }) chartContainerRef!: ElementRef<HTMLDivElement>;

  @Input() myChart!: ItMyChart;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['myChart'] && this.myChart) {
      this.renderChart();
    }
  }

  renderChart() {
    const { id, type } = this.myChart;

    const canvas = document.createElement('canvas');
    canvas.id = id;
    this.chartContainerRef.nativeElement.appendChild(canvas);

    this.chart = new Chart(canvas, {
      type: type as ChartType,
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
