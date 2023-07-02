"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.symbol = exports.space = exports.number = exports.line = exports["default"] = exports.chars = exports.blank = exports.Initialize = exports.Else = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _Scanner = _interopRequireDefault(require("../Scanner"));
var _error = _interopRequireDefault(require("../error"));
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
exports.chars = chars;
var number = '0123456789';
exports.number = number;
var symbol = "~`!@#$%^&*()_-+={[]}\\|;:'\",<.>/?";
exports.symbol = symbol;
var blank = ' \n\t\r';
exports.blank = blank;
var space = ' \t';
exports.space = space;
var line = '\n\r';

// 起始态
exports.line = line;
var Initialize = '<initialize>';
// 兜底命中
exports.Initialize = Initialize;
var Else = '<else>';
exports.Else = Else;
var Token = /*#__PURE__*/(0, _createClass2["default"])(
/**
 * location: {
 *  linePos,
 *  line,
 *  start,
 *  end
 * } 
 */
function Token(source, type, value, location) {
  (0, _classCallCheck2["default"])(this, Token);
  this.source = source;
  this.type = type;
  this.value = value;
  this.location = location;
});
var Lexel = /*#__PURE__*/function () {
  function Lexel(table) {
    (0, _classCallCheck2["default"])(this, Lexel);
    /**
     * table {
     *  [state]: states
     * }
     * 
     * states {
     *  [matcher]: { state?, isTerminate?, error? }
     * }
     */
    this.table = table;
  }
  (0, _createClass2["default"])(Lexel, [{
    key: "tokenize",
    value: function tokenize(sentence) {
      var _tokens, _tokens2, _tokens3;
      var lineSentence = sentence.split(/[\n\r]/g);
      var tokens = [];
      var table = this.table;
      var scanner = new _Scanner["default"](sentence + ' ');
      var _char = '';
      var fragment = '';
      var state = Initialize;
      var initPos = scanner.pos;
      var curLine = 1;
      var curLinePos = 1;
      var startLine = curLine;
      var startLinePos = curLinePos;
      while (_char = scanner.read()) {
        // 新行
        if (line.indexOf(_char) !== -1) {
          curLine++;
          curLinePos = 0;
        }
        var states = table[state];
        var isMatch = false;
        for (var matcher in states) {
          if (matcher.indexOf(_char) !== -1 || matcher === Else) {
            isMatch = true;
            var match = states[matcher];
            if (match.error) {
              (0, _error["default"])(SyntaxError, match.error(_char), lineSentence[curLine - 1], {
                linePos: startLinePos,
                line: curLine,
                start: initPos,
                end: scanner.pos - 1
              });
            }
            if (state === Initialize) {
              startLine = curLine;
              startLinePos = curLinePos;
            }
            state = match.state;
            if (state === Initialize) {
              initPos = scanner.pos;
              fragment = '';
            } else if (match.isTerminate) {
              // 添加 token
              if (line.indexOf(_char) !== -1) {
                curLine--;
              }
              curLinePos--;
              var source = lineSentence[curLine - 1];
              var type = state;
              var value = fragment;
              var location = {};
              location.linePos = startLinePos;
              location.line = startLine;
              location.start = initPos;
              location.end = scanner.pos - 2;
              tokens.push(new Token(source, type, value, location));
              fragment = '';
              state = Initialize;
              scanner.back();
              initPos = scanner.pos;
            } else {
              fragment += _char;
            }
            if (!table[state]) {
              (0, _error["default"])(SyntaxError, "Unexpected token '".concat(_char, "'"), lineSentence[curLine - 1], {
                linePos: startLinePos,
                line: curLine,
                start: initPos,
                end: scanner.pos - 1
              });
            }
            break;
          }
        }
        if (!isMatch) {
          (0, _error["default"])(SyntaxError, "Invalid or unexpected token", lineSentence[curLine - 1], {
            linePos: startLinePos,
            line: curLine,
            start: initPos,
            end: scanner.pos - 1
          });
        }
        curLinePos++;
      }
      if (state !== Initialize) {
        (0, _error["default"])(SyntaxError, 'Status not ended', lineSentence[curLine - 1], {
          linePos: startLinePos,
          line: curLine,
          start: initPos,
          end: scanner.pos - 1
        });
      }
      tokens.push(new Token((_tokens = tokens[tokens.length - 1]) === null || _tokens === void 0 ? void 0 : _tokens.source, '$', (_tokens2 = tokens[tokens.length - 1]) === null || _tokens2 === void 0 ? void 0 : _tokens2.value, (_tokens3 = tokens[tokens.length - 1]) === null || _tokens3 === void 0 ? void 0 : _tokens3.location));
      return tokens;
    }
  }, {
    key: "toString",
    value: function toString(tokens) {
      var tokenString = '';
      tokens.forEach(function (_ref) {
        var type = _ref.type;
        tokenString += type + ' ';
      });
      return tokenString.slice(0, -1);
    }
  }]);
  return Lexel;
}();
exports["default"] = Lexel;