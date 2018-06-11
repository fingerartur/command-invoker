import { Command } from '../src/Command';
import { Counter } from './Counter';

export class AddOneCommand extends Command {
    constructor(
        private counter: Counter
    ) {
        super();
    }

    do(): void {
        this.counter.number += 1;
    }

    undo(): void {
        this.counter.number -= 1;
    }
}