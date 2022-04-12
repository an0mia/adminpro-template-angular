import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsProgressComponent } from './controls-progress/controls-progress.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ControlsProgressComponent
  ],
  exports: [
    ControlsProgressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class ComponentsModule { }
