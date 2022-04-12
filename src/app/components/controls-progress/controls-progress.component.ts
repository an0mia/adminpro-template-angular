import { Component } from '@angular/core';

@Component({
  selector: 'app-controls-progress',
  templateUrl: './controls-progress.component.html',
  styles: [
  ]
})
export class ControlsProgressComponent {

  progreso: number =  25;

  get getPorcentaje() {
    return `${this.progreso}%`;
  }

  cambiarValor(valor: number) {
    
    if (this.progreso >= 100 && valor >= 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso =  this.progreso + valor;
  }

}
