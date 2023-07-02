"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Lexer = _interopRequireDefault(require("./Lexer"));
var _table = _interopRequireDefault(require("./table"));
var _default = new _Lexer["default"](_table["default"]);
exports["default"] = _default;