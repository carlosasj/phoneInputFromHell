import { Component, OnInit } from '@angular/core';
import { AbstractInput } from '../abstract-input/abastract-input.component';
import { NgForm } from '@angular/forms';

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
        let phoneDigits = 0;
        while (phoneDigits < 10) {
            this.chunks.push({phoneDigits: "00"+phoneDigits});
            phoneDigits++;
        }
        while (phoneDigits < 100) {
            this.chunks.push({phoneDigits: "0"+phoneDigits});
            phoneDigits++;
        }
        while (phoneDigits < 1000) {
            this.chunks.push({phoneDigits: ""+phoneDigits});
            phoneDigits++;
        }
        shuffleArray(this.chunks);
    }


    concatenateDigits() {
        this.value = +(this.firstChunkValue+this.secondChunkValue+this.thirdChunkValue);
        this.submit();
    }

    resetForm(){
        this.firstChunkValue = "0000"
        this.secondChunkValue = "0000"
        this.thirdChunkValue = "0000"
        this.reset();
    }

    ngOnInit() {
    }

}

function shuffleArray(array : Chunk[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}