import { Command } from './Command';

export class MultiCommand extends Command {
  constructor(
    private commands: Command[]
  ) {
    super();
  }

  do(): void {
    this.commands.forEach((command: Command) => {
      command.do();
    });
  }

  undo(): void {
    this.commands.reverse().forEach((command: Command) => {
      command.undo();
    });
  }
}
