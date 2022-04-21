import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType, } from 'chart.js';

@Component({
  selector: 'app-grafic1',
  templateUrl: './grafic1.component.html',
  styles: [
  ]
})
export class Grafic1Component {

  public labels1: string[] = ['Label01', 'Label02', 'Label03'];
  public data1 = {
    labels: this.labels1,
    datasets: [
      { data: [ 99, 50, 60 ] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 160, 70 ] }
    ]
  };

  public labels2: string[] = ['Label01', 'Label02', 'Label03'];
  public data2 = {
    labels: this.labels2,
    datasets: [
      { data: [ 99, 50, 60 ] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 160, 70 ] }
    ]
  };

}
