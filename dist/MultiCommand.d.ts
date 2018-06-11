import { Command } from './Command';
export declare class MultiCommand extends Command {
    private commands;
    constructor(commands: Command[]);
    do(): void;
    undo(): void;
}
