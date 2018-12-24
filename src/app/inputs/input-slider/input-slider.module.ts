import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatCardModule, MatSliderModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputSliderComponent } from './input-slider.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: InputSliderComponent
}];

@NgModule({
  declarations: [InputSliderComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),

    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    PipesModule,
  ]
})
export class InputSliderModule { }
