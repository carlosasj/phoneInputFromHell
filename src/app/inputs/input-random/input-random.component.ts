import { Component } from '@angular/core';
import { AbstractInput } from '../abstract-input/abastract-input.component';

@Component({
  selector: 'app-input-random',
  templateUrl: './input-random.component.html',
  styleUrls: ['./input-random.component.scss']
})
export class InputRandomComponent extends AbstractInput {
  refresh() {
    this.value = Math.floor(Math.random() * 1000000000);
  }
}
