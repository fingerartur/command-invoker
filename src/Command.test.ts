import { AddTwoCommand } from '../examples/AddTwoCommand';
import { Counter } from '../examples/Counter';
import { expect } from 'chai';
import 'mocha';

describe('Command', () => {
  let counter: Counter;
  let command: AddTwoCommand;
  beforeEach(() => {
    counter = new Counter();
    command = new AddTwoCommand(counter);
  });

  it('can do an action', () => {
    expect(counter.number).to.equal(0);
    command.do();
    expect(counter.number).to.equal(2);
  });

  it('can undo an action', () => {
    expect(counter.number).to.equal(0);
    command.undo();
    expect(counter.number).to.equal(-2);
  });
});
