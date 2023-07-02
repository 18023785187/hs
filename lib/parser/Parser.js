"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _ll1Grammar = require("ll1-grammar");
var _Scanner = _interopRequireDefault(require("../Scanner"));
var _constructor = require("./constructor");
var _error = _interopRequireDefault(require("../error"));
var Parser = /*#__PURE__*/function () {
  function Parser(startSymbol, predictSet, constructor) {
    (0, _classCallCheck2["default"])(this, Parser);
    this.startSymbol = startSymbol;
    this.predictSet = predictSet;
    this.constructor = constructor;
  }
  (0, _createClass2["default"])(Parser, [{
    key: "parse",
    value: function parse(tokens) {
      var blocks = [];
      var astList = [];
      var stack = [];
      blocks.push(astList);
      stack.push(this.startSymbol);
      var scanner = new _Scanner["default"](tokens);
      var token;
      while (stack.length || !scanner.isEnd()) {
        if (!stack.length) {
          token = scanner.peek();
          if (token.type !== _ll1Grammar.$) (0, _error["default"])(SyntaxError, "Unexpected token '".concat(token.value, "'"), token.source, token.location);else break;
        }
        token = scanner.peek();
        var terminalSymbol = token.type;
        // 抛出意外的终结符错误
        if (!this.predictSet.has(terminalSymbol)) {
          (0, _error["default"])(SyntaxError, "Unexpected token '".concat(token.value, "'"), token.source, token.location);
        }
        var expressionMap = this.predictSet.get(terminalSymbol);
        var left = stack.pop();
        if (left[0] === _ll1Grammar.$) {
          var _this$constructor$lef, _this$constructor;
          (_this$constructor$lef = (_this$constructor = this.constructor)[left]) === null || _this$constructor$lef === void 0 ? void 0 : _this$constructor$lef.call(_this$constructor, blocks[blocks.length - 1], blocks);
          continue;
        } else if (left === token.type) {
          var _this$constructor2, _this$constructor3;
          var child = (_this$constructor2 = (_this$constructor3 = this.constructor)["_".concat(token.type)]) === null || _this$constructor2 === void 0 ? void 0 : _this$constructor2.call(_this$constructor3, token);
          if (child) blocks[blocks.length - 1].push(child);
          scanner.read();
          continue;
        }
        // 该终结符找不到对应产生式，说明文法不适用当前表达式，抛出语法错误
        if (!expressionMap.has(left)) {
          (0, _error["default"])(SyntaxError, "Unexpected token '".concat(token.value, "'"), token.source, token.location);
        }
        var right = expressionMap.get(left);
        if (right[0] === _ll1Grammar.EMPTY_CHAIN) continue;
        for (var i = right.length - 1; i >= 0; --i) {
          if (right[i] === _ll1Grammar.EMPTY_CHAIN) continue;else stack.push(right[i]);
        }
      }
      var location = {
        linePos: 1,
        line: 1,
        start: 0,
        end: astList.length ? astList[astList.length - 1].location.end : 0
      };
      return (0, _constructor.createRoot)(astList, location);
    }
  }]);
  return Parser;
}();
exports["default"] = Parser;