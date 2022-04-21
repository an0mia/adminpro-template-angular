import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Modules
import { NgChartsModule } from 'ng2-charts';

// Components
import { ControlsProgressComponent } from './controls-progress/controls-progress.component';
import { DonutComponent } from './donut/donut.component';



@NgModule({
  declarations: [
    ControlsProgressComponent,
    DonutComponent
  ],
  exports: [
    ControlsProgressComponent,
    DonutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
  ]
})
export class ComponentsModule { }
