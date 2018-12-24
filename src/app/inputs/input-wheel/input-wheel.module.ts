import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputWheelComponent } from './input-wheel.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: InputWheelComponent
}];

@NgModule({
  declarations: [InputWheelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InputWheelModule { }
