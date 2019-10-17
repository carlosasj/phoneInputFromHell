import { Component, OnInit } from '@angular/core';
import { AbstractInput } from '../abstract-input/abastract-input.component';

export interface Chunk {
    phoneDigits: string;
}

@Component({
    selector: 'app-input-select-chunk',
    templateUrl: './input-select-chunk.component.html',
    styleUrls: ['./input-select-chunk.component.scss']
})
export class InputSelectChunkComponent extends AbstractInput {

    firstChunkValue: string;
    secondChunkValue: string;
    thirdChunkValue: string;
    chunks: Chunk[] = [];

    constructor() {
        super();
        this.chunks = Array(10000).fill(0).map((_, i) => ('000' + i).substr(-4)).map(result => ({phoneDigits: result}));
        this.chunks = shuffleArray(this.chunks);
    }


    concatenateDigits() {
        this.value = +(this.firstChunkValue + this.secondChunkValue + this.thirdChunkValue);
        this.submit();
    }

    resetForm() {
        this.firstChunkValue = '0000';
        this.secondChunkValue = '0000';
        this.thirdChunkValue = '0000';
        this.reset();
    }
}

function shuffleArray<T>(array: T[]): T[] {
    return array.sort(() => 0.5 - Math.random());
}
