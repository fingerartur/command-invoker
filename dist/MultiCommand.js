"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Command_1 = require("./Command");
var MultiCommand = /** @class */ (function (_super) {
    __extends(MultiCommand, _super);
    function MultiCommand(commands) {
        var _this = _super.call(this) || this;
        _this.commands = commands;
        return _this;
    }
    MultiCommand.prototype.do = function () {
        this.commands.forEach(function (command) {
            command.do();
        });
    };
    MultiCommand.prototype.undo = function () {
        this.commands.reverse().forEach(function (command) {
            command.undo();
        });
    };
    return MultiCommand;
}(Command_1.Command));
exports.MultiCommand = MultiCommand;
