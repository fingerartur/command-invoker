import { AddTwoCommand } from '../examples/AddTwoCommand';
import { TimesTwoCommand } from '../examples/TimesTwoCommand';
import { MultiCommand } from './MultiCommand';
import { Counter } from '../examples/Counter';
import { expect } from 'chai';
import 'mocha';

describe('MutliCommand', () => {
    let counter: Counter;
    let multiCommand: MultiCommand;
    beforeEach(() => {
        counter = new Counter();
        multiCommand = new MultiCommand([
            new AddTwoCommand(counter),
            new TimesTwoCommand(counter)
        ]);
    });

    it('does subcommands in correct order (first to last)', () => {
        expect(counter.number).to.equal(0);
        multiCommand.do();
        expect(counter.number).to.equal(4); // not 2
    });

    it('undoes subcommands in correct order (last to first)', () => {
        counter.number = 4;
        expect(counter.number).to.equal(4);
        multiCommand.undo();
        expect(counter.number).to.equal(0); // not 1
    });
});