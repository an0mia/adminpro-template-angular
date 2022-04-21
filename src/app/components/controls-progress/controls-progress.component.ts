import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls-progress',
  templateUrl: './controls-progress.component.html',
  styles: [
  ]
})
export class ControlsProgressComponent implements OnInit {
  
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input() progreso: number =  25;
  @Input() btnClass: string = 'btn-primary';

  @Output() emiteValor: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number) {
    
    if (this.progreso >= 100 && valor >= 0) {
      this.emiteValor.emit(100);
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.emiteValor.emit(0);
      this.progreso = 0;
      return;
    }

    this.progreso =  this.progreso + valor;
    this.emiteValor.emit(this.progreso);
  }

  onChange(nuevoValor: number) {
    if(nuevoValor >= 100 ) {
      this.progreso = 100;
    } else if (nuevoValor <=  0 ) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.emiteValor.emit(this.progreso);
  }

}
