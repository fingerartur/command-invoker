import { AddTwoCommand } from '../examples/AddTwoCommand';
import { AddOneCommand } from '../examples/AddOneCommand';
import { Counter } from '../examples/Counter';
import { CommandInvoker } from './CommandInvoker';
import { expect } from 'chai';
import 'mocha';

describe('Command invoker', () => {
  let counter: Counter;
  let commandAddTwo: AddTwoCommand;
  let commandAddOne: AddOneCommand;
  let invoker: CommandInvoker;
  beforeEach(() => {
    counter = new Counter();
    commandAddTwo = new AddTwoCommand(counter);
    commandAddOne = new AddOneCommand(counter);
    invoker = new CommandInvoker();
  });

  it('can invoke a command', () => {
    expect(counter.number).to.equal(0);

    invoker.invoke(commandAddTwo);

    expect(counter.number).to.equal(2);
  });

  it('can undo commands in correct order', () => {
    expect(counter.number).to.equal(0);

    invoker.invoke(commandAddOne);

    expect(counter.number).to.equal(1);

    invoker.invoke(commandAddTwo);

    expect(counter.number).to.equal(3);

    invoker.undo();

    expect(counter.number).to.equal(1);

    invoker.undo();

    expect(counter.number).to.equal(0);
  });

  it('does nothing when there is nothing to undo', () => {
    expect(counter.number).to.equal(0);

    invoker.invoke(commandAddOne);

    expect(counter.number).to.equal(1);

    invoker.undo();

    expect(counter.number).to.equal(0);

    invoker.undo();
    invoker.undo();

    expect(counter.number).to.equal(0);
  });

  it('can redo commands in correct order', () => {
    expect(counter.number).to.equal(0);

    invoker.invoke(commandAddOne);
    invoker.invoke(commandAddTwo);

    expect(counter.number).to.equal(3);

    invoker.undo();

    expect(counter.number).to.equal(1);

    invoker.undo();

    expect(counter.number).to.equal(0);

    invoker.redo();

    expect(counter.number).to.equal(1);

    invoker.redo();

    expect(counter.number).to.equal(3);
  });

  it('does nothing when there is nothing to redo', () => {
    expect(counter.number).to.equal(0);

    invoker.invoke(commandAddOne);

    expect(counter.number).to.equal(1);

    invoker.redo();
    invoker.redo();
    invoker.redo();

    expect(counter.number).to.equal(1);

    invoker.undo();

    expect(counter.number).to.equal(0);

    invoker.redo();

    expect(counter.number).to.equal(1);

    invoker.redo();

    expect(counter.number).to.equal(1);
  });

  it('deletes all redos when not everything is redone, but a new command is invoked', () => {
    expect(counter.number).to.equal(0);

    invoker.invoke(commandAddOne);
    invoker.invoke(commandAddTwo);
    invoker.invoke(commandAddTwo);

    expect(counter.number).to.equal(5);

    invoker.undo();
    invoker.undo();
    invoker.undo();

    expect(counter.number).to.equal(0);

    invoker.invoke(commandAddTwo);

    expect(counter.number).to.equal(2);

    invoker.redo();

    expect(counter.number).to.equal(2);

    invoker.redo();

    expect(counter.number).to.equal(2);

    invoker.undo();

    expect(counter.number).to.equal(0);
  });

});
