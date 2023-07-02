"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var Scope = /*#__PURE__*/function () {
  function Scope(parent) {
    (0, _classCallCheck2["default"])(this, Scope);
    this.parent = parent;
    this.scope = new Map();
  }
  (0, _createClass2["default"])(Scope, [{
    key: "has",
    value: function has(identifier) {
      return this.scope.has(identifier);
    }
  }, {
    key: "get",
    value: function get(identifier) {
      var cur = this;
      while (cur && !cur.has(identifier)) {
        cur = cur.parent;
      }
      if (cur) {
        return cur.scope.get(identifier);
      }
    }
  }, {
    key: "set",
    value: function set(identifier, value) {
      var scope = this.get(identifier);
      if (scope) scope.scope.set(identifier, value);else this.scope.set(identifier, value);
    }
  }, {
    key: "setCur",
    value: function setCur(identifier, value) {
      this.scope.set(identifier, value);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.scope.clear();
    }
  }]);
  return Scope;
}();
exports["default"] = Scope;