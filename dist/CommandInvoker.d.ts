import { Command } from './Command';
export declare class CommandInvoker {
    private queue;
    private cursor;
    invoke(command: Command): void;
    undo(): void;
    redo(): void;
    private clearFutureRedos;
}
