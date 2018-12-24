import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputPlusComponent } from './input-plus.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: InputPlusComponent
}];

@NgModule({
  declarations: [InputPlusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatButtonModule,
    MatCardModule,
    PipesModule,
  ]
})
export class InputPlusModule { }
