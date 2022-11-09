# Command invoker

A simple command invoker, that can be used to implement undo/redo functionality (aka `Ctrl+Z` / `Ctrl+Shift+Z`).

## Installation

```npm i ts-command-invoker```

## Example usage

Command invoker can invoke commands and later undo or redo them. This can be useful for implementing classic undo/redo behavior such as the one you know from Google docs, etc.

```ts
import { Command, CommandInvoker } from 'ts-command-invoker';

let counter = 0;

export class AddOneCommand extends Command {
    do(): void {
        counter += 1;
    }

    undo(): void {
        counter -= 1;
    }
}

const invoker = new CommandInvoker();

invoker.invoke(new AddOneCommand());
// counter === 1

invoker.invoke(new AddOneCommand());
// counter === 2

invoker.undo()
// counter === 1

invoker.undo()
// counter === 0

invoker.redo()
// counter === 1
```

Multiple commands can be batched into one using `MultiCommand`.

```ts
import { Command, CommandInvoker, MultiCommand } from 'ts-command-invoker';

export class DeleteCommand extends Command {
    do(): void {
      // delete one item
    }

    undo(): void {
      // bring back one item
    }
}

const deleteMultiple = new MultiCommand([
    new DeleteCommand(item1),
    new DeleteCommand(item2),
]);

const invoker = new CommandInvoker();

invoker.invoke(deleteMultiple);
```

## License

Feel free to use in any way. (ISC)

## Changelog

- Unreleased
  - Improved Usage example
- v1.0.0
  - Command invoker implementation
