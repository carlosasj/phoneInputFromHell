import { Component } from '@angular/core';
import { AbstractInput } from '../abstract-input/abastract-input.component';

@Component({
  selector: 'app-input-plus',
  templateUrl: './input-plus.component.html',
  styleUrls: ['./input-plus.component.scss']
})
export class InputPlusComponent extends AbstractInput {
  more() {
    this.value += 1;
  }
}
