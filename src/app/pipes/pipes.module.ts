import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadingPipe } from './leading.pipe';
import { MorsePipe } from './morse.pipe';

const exports = [
  LeadingPipe,
  MorsePipe,
];

@NgModule({
  declarations: [
    ...exports,
  ],
  imports: [
    CommonModule
  ],
  exports,
})
export class PipesModule { }
