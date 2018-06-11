import { Command } from '../src/Command';
import { Counter } from './Counter';

export class AddTwoCommand extends Command {
    constructor(
        private counter: Counter
    ) {
        super();
    }

    do(): void {
        this.counter.number += 2;
    }

    undo(): void {
        this.counter.number -= 2;
    }
}