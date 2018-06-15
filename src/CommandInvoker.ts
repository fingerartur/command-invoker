import { Command } from './Command';

export class CommandInvoker {
  private queue: Command[] = [];
  private cursor = 0; // first empty field

  invoke(command: Command): void {
    command.do();
    this.queue[this.cursor] = command;
    this.cursor++;
    this.clearFutureRedos();
  }

  undo(): void {
    if (this.cursor > 0) {
      this.cursor--;
      this.queue[this.cursor].undo();
    }
  }

  redo(): void {
    if (this.cursor < this.queue.length) {
      this.queue[this.cursor].do();
      this.cursor++;
    }    
  }

  private clearFutureRedos(): void {
    if (this.cursor < this.queue.length) {
      this.queue = this.queue.slice(0, this.cursor);
    }
  }
  
}
