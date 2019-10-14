import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMorseComponent } from './input-morse.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { PipesModule } from 'src/app/pipes/pipes.module';

const routes: Routes = [{
  path: '',
  component: InputMorseComponent,
}];

@NgModule({
  declarations: [InputMorseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    PipesModule,
  ]
})
export class InputMorseModule { }
