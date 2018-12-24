import { Component, OnInit } from '@angular/core';
import { AbstractInput } from '../abstract-input/abastract-input.component';

@Component({
  selector: 'app-input-slider',
  templateUrl: './input-slider.component.html',
  styleUrls: ['./input-slider.component.scss']
})
export class InputSliderComponent extends AbstractInput {}
