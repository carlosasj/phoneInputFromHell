import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './views/home/home.module#HomeModule'
  },
  {
    path: 'binary-search',
    loadChildren: './inputs/input-binary-search/input-binary-search.module#InputBinarySearchModule'
  },
  {
    path: 'plus',
    loadChildren: './inputs/input-plus/input-plus.module#InputPlusModule'
  },
  {
    path: 'random',
    loadChildren: './inputs/input-random/input-random.module#InputRandomModule'
  },
  {
    path: 'slider',
    loadChildren: './inputs/input-slider/input-slider.module#InputSliderModule'
  },
  {
    path: 'wheel',
    loadChildren: './inputs/input-wheel/input-wheel.module#InputWheelModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
