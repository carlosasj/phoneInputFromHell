import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatButtonModule, MatCardModule, MatIconModule, MatSelectModule, MatOptionModule, MatFormFieldModule } from '@angular/material';

import { InputSelectChunkComponent } from './input-select-chunk.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: InputSelectChunkComponent
}];

@NgModule({
  declarations: [InputSelectChunkComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatCardModule,
    PipesModule,
  ]
})
export class InputSelectChunkModule { }
