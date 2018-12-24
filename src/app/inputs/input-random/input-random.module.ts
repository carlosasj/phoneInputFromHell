import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRandomComponent } from './input-random.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: InputRandomComponent
}];

@NgModule({
  declarations: [InputRandomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatIconModule,
    MatButtonModule,
    MatCardModule,
    PipesModule,
  ]
})
export class InputRandomModule { }
