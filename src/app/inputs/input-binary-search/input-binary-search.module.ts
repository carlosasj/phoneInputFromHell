import { PipesModule } from 'src/app/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputBinarySearchComponent } from './input-binary-search.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: InputBinarySearchComponent
}];

@NgModule({
  declarations: [InputBinarySearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatButtonModule,
    MatCardModule,
    PipesModule,
  ]
})
export class InputBinarySearchModule { }
