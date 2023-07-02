"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var Scanner = /*#__PURE__*/function () {
  function Scanner(stream) {
    (0, _classCallCheck2["default"])(this, Scanner);
    this.stream = stream;
    this.pos = 0;
  }
  (0, _createClass2["default"])(Scanner, [{
    key: "isEnd",
    value: function isEnd() {
      return this.pos >= this.stream.length;
    }
  }, {
    key: "peek",
    value: function peek() {
      if (!this.isEnd()) return this.stream[this.pos];
    }
  }, {
    key: "read",
    value: function read() {
      if (!this.isEnd()) return this.stream[this.pos++];
    }
  }, {
    key: "back",
    value: function back() {
      if (!this.isEnd()) return this.stream[--this.pos];
    }
  }]);
  return Scanner;
}();
exports["default"] = Scanner;