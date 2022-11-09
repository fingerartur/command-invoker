# Command invoker

A very simple command invoker + memento pattern implementation in Typescript. *Actions are broken down into commands. Invoker invokes commands. Invoker remembers invoked commands and allows undo, redo.*
- there is no upper limit on the amount of commands the invoker remembers
- when you do multiple ```undo()``` and then ```invoke()```, all redos vanish *(i.e. classic behavior)*
- when there is nothing else to undo, the ```undo()``` method simply does nothing *(the same goes for ```redo()```, i.e. classic behavior)*

## Install

```npm i ts-command-invoker```

# API

```js
import { Command, CommandInvoker, MultiCommand } from 'ts-command-invoker';

/**
 * Your commands inherit from it.
 * You pass your data to the command via your custom constructor.
 */
Command
    .do()
    .redo()

/**
 * Invokes commands and remembers them in order to provide undo and redo.
 * Throws if undo is called when there is nothing to undo (same for redo).
 */
CommandInvoker
    .invoke(command)
    .undo()
    .redo()

/**
 * Sometimes you want multiple commands executed at once (eg. delete and unselect),
 * MultiCommand takes this array of commands and executes them in the correct order (same for undo)
 */
MultiCommand
    constructor(command[])

```



## Examples and tests

Everything is nicely tested. If you want to learn more, look at examples in ```/examples``` and test in ```/src/*test.ts```.

## License

Feel free to use in any way. (ISC)

## Changelog

- Unreleased
- v1.0.0
  - Command invoker implementation
