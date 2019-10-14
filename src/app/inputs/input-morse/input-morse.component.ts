import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-input-morse',
  templateUrl: './input-morse.component.html',
  styleUrls: ['./input-morse.component.scss']
})
export class InputMorseComponent implements OnInit {
  longDuration = 300;
  timeBetweenChars = 2000;
  isPressed = false;
  pressStart: number;
  releaseTimeoutId: any;

  currentChar = '';
  phoneNumber = '';

  morseTable = {
    '.~': 'A',
    '~...': 'B',
    '~.~.': 'C',
    '~..': 'D',
    '.': 'E',
    '..~.': 'F',
    '~~.': 'G',
    '....': 'H',
    '..': 'I',
    '.~~~': 'J',
    '~.~': 'K',
    '.~...': 'L',
    '~~': 'M',
    '~.': 'N',
    '~~~': 'O',
    '.~~.': 'P',
    '~~.~': 'Q',
    '.~.': 'R',
    '...': 'S',
    '~': 'T',
    '..~': 'U',
    '...~': 'V',
    '.~~': 'W',
    '~..~': 'X',
    '~.~~': 'Y',
    '~~..': 'Z',

    '.~~~~': '1',
    '..~~~': '2',
    '...~~': '3',
    '....~': '4',
    '.....': '5',
    '~....': '6',
    '~~...': '7',
    '~~~..': '8',
    '~~~~.': '9',
    '~~~~~': '0',
  };

  cheatSheet: [string, string][];

  constructor() {
    this.cheatSheet = Object.entries(this.morseTable)
      .filter(([morse, ch]) => '0' <= ch && ch <= '9');

    console.log(this.cheatSheet);
  }

  ngOnInit() {
  }

  onNextChar() {
    const result = this.morseTable[this.currentChar];
    if (result) {
      this.phoneNumber += result;
    }
    this.currentChar = '';
  }

  clear() {
    this.phoneNumber = '';
    this.currentChar = '';
    this.clearTimeout();
  }

  clearTimeout() {
    if (this.releaseTimeoutId) {
      clearTimeout(this.releaseTimeoutId);
    }
  }

  pressBeep() {
    this.isPressed = true;
    this.pressStart = Date.now();
    this.clearTimeout();
  }

  @HostListener('document:mouseup')
  releaseBeep() {
    if (!this.isPressed) {
      return;
    }
    this.isPressed = false;
    const duration = Date.now() - this.pressStart;
    console.log(duration);

    this.currentChar += duration > this.longDuration ? '~' : '.';

    this.clearTimeout();
    this.releaseTimeoutId = setTimeout(() => this.onNextChar(), this.timeBetweenChars);
  }
}
