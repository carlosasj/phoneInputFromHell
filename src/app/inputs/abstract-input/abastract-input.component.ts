import { LeadingPipe } from 'src/app/pipes/leading.pipe';

export abstract class AbstractInput {
    value = 0;

    constructor() {
        this.reset();
    }

    reset() {
        this.value = 0;
    }

    submit() {
        alert(`Your number is ${new LeadingPipe().transform(this.value, '0', 9)}`);
    }
}
