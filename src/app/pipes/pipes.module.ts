import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadingPipe } from './leading.pipe';

@NgModule({
  declarations: [
    LeadingPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LeadingPipe,
  ]
})
export class PipesModule { }
