"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommandInvoker = /** @class */ (function () {
    function CommandInvoker() {
        this.queue = [];
        this.cursor = 0; // first empty field
    }
    CommandInvoker.prototype.invoke = function (command) {
        command.do();
        this.queue.push(command);
        this.cursor++;
        this.clearFutureRedos();
    };
    CommandInvoker.prototype.undo = function () {
        if (this.cursor > 0) {
            this.cursor--;
            this.queue[this.cursor].undo();
        }
    };
    CommandInvoker.prototype.redo = function () {
        if (this.cursor < this.queue.length) {
            this.queue[this.cursor].do();
            this.cursor++;
        }
    };
    CommandInvoker.prototype.clearFutureRedos = function () {
        this.queue = this.queue.slice(0, this.cursor);
    };
    return CommandInvoker;
}());
exports.CommandInvoker = CommandInvoker;
