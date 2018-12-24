import { Component } from '@angular/core';
import { AbstractInput } from '../abstract-input/abastract-input.component';

@Component({
  selector: 'app-input-binary-search',
  templateUrl: './input-binary-search.component.html',
  styleUrls: ['./input-binary-search.component.scss']
})
export class InputBinarySearchComponent extends AbstractInput {
  upper = 0;
  lower = 0;

  constructor() {
    super();
    this.reset();
  }

  more() {
    this.lower = this.value;
    this.value = Math.floor((this.lower + this.upper) / 2);
  }

  less() {
    this.upper = this.value;
    this.value = Math.floor((this.lower + this.upper) / 2);
  }

  reset() {
    this.upper = 999999999;
    this.value = 555555555;
    this.lower = 0;
  }
}
