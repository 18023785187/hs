"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SystemFunction = exports.Literal = exports.Function = exports.ArrayLiteral = void 0;
exports.assign = assign;
exports.getType = getType;
exports.getValue = getValue;
exports.packageType = void 0;
exports.toString = toString;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var packageType = {
  Literal: 'Literal',
  Function: 'Function',
  SystemFunction: 'SystemFunction',
  Array: 'Array'
};
exports.packageType = packageType;
var System = /*#__PURE__*/(0, _createClass2["default"])(function System() {
  (0, _classCallCheck2["default"])(this, System);
  (0, _defineProperty2["default"])(this, "__system__", true);
});
var Literal = /*#__PURE__*/function (_System) {
  (0, _inherits2["default"])(Literal, _System);
  var _super = _createSuper(Literal);
  function Literal(isRead, value) {
    var _this;
    (0, _classCallCheck2["default"])(this, Literal);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "__type__", packageType['Literal']);
    _this.isRead = isRead;
    _this.value = value;
    return _this;
  }
  return (0, _createClass2["default"])(Literal);
}(System);
exports.Literal = Literal;
var ArrayLiteral = /*#__PURE__*/function (_System2) {
  (0, _inherits2["default"])(ArrayLiteral, _System2);
  var _super2 = _createSuper(ArrayLiteral);
  function ArrayLiteral(array) {
    var _this2;
    (0, _classCallCheck2["default"])(this, ArrayLiteral);
    _this2 = _super2.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "__type__", packageType['Array']);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "append", new SystemFunction('append', function (args) {
      var _this2$array;
      (_this2$array = _this2.array).push.apply(_this2$array, (0, _toConsumableArray2["default"])(args.map(function (arg) {
        return assign(arg);
      })));
      return (0, _assertThisInitialized2["default"])(_this2);
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "shift", new SystemFunction('shift', function (args) {
      return _this2.array.shift();
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "pop", new SystemFunction('pop', function () {
      return _this2.array.pop();
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "reverse", new SystemFunction('reverse', function () {
      _this2.array.reverse();
      return (0, _assertThisInitialized2["default"])(_this2);
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "copy", new SystemFunction('copy', function () {
      return new ArrayLiteral((0, _toConsumableArray2["default"])(_this2.array));
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "concat", new SystemFunction('concat', function (args) {
      var newArray = (0, _toConsumableArray2["default"])(_this2.array);
      args.forEach(function (arg) {
        var _arr;
        var arr;
        if (((_arr = arr = getValue(arg)) === null || _arr === void 0 ? void 0 : _arr.__type__) === packageType['Array']) {
          arr.array.length && newArray.push.apply(newArray, (0, _toConsumableArray2["default"])(arr.array.map(function (item) {
            return assign(item);
          })));
        } else if ((arg === null || arg === void 0 ? void 0 : arg.__type__) === packageType['Array']) {
          arg.array.length && newArray.push.apply(newArray, (0, _toConsumableArray2["default"])(arg.array.map(function (item) {
            return assign(item);
          })));
        } else {
          newArray.push(assign(arg));
        }
      });
      return new ArrayLiteral(newArray);
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "slice", new SystemFunction('slice', function (args) {
      var _this2$array2;
      return new ArrayLiteral((0, _toConsumableArray2["default"])((_this2$array2 = _this2.array).slice.apply(_this2$array2, (0, _toConsumableArray2["default"])(args.map(function (arg) {
        return getValue(arg);
      })))));
    }));
    _this2.array = array;
    return _this2;
  }
  return (0, _createClass2["default"])(ArrayLiteral);
}(System);
exports.ArrayLiteral = ArrayLiteral;
var Function = /*#__PURE__*/function (_System3) {
  (0, _inherits2["default"])(Function, _System3);
  var _super3 = _createSuper(Function);
  function Function(name, params, body) {
    var _this3;
    (0, _classCallCheck2["default"])(this, Function);
    _this3 = _super3.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "__type__", packageType['Function']);
    _this3.name = name;
    _this3.params = params.map(function (param) {
      return param.name;
    });
    _this3.length = params.length;
    _this3.body = body;
    return _this3;
  }
  return (0, _createClass2["default"])(Function);
}(System);
exports.Function = Function;
var SystemFunction = /*#__PURE__*/function (_System4) {
  (0, _inherits2["default"])(SystemFunction, _System4);
  var _super4 = _createSuper(SystemFunction);
  function SystemFunction(name, fn) {
    var _this4;
    (0, _classCallCheck2["default"])(this, SystemFunction);
    _this4 = _super4.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this4), "__type__", packageType['SystemFunction']);
    _this4.name = name;
    _this4.fn = fn;
    return _this4;
  }
  return (0, _createClass2["default"])(SystemFunction);
}(System);
exports.SystemFunction = SystemFunction;
function assign(pack) {
  if (!(pack !== null && pack !== void 0 && pack.__type__)) return pack;
  if (pack.__type__ === packageType['Literal']) return new Literal(false, pack.value);else return pack;
}
function getValue(pack) {
  if (Array.isArray(pack)) {
    var _pack = (0, _slicedToArray2["default"])(pack, 2),
      array = _pack[0],
      index = _pack[1];
    return array.array[index];
  }
  if (!(pack !== null && pack !== void 0 && pack.__type__)) return pack;
  if (pack.__type__ === packageType['Literal']) {
    var _pack$value;
    if (((_pack$value = pack.value) === null || _pack$value === void 0 ? void 0 : _pack$value.__type__) === packageType['Function']) {
      return pack.value;
    } else {
      return pack.value;
    }
  } else if (pack.__type__ === packageType['Function']) {
    return pack;
  }
}
function toString(pack) {
  if (Array.isArray(pack)) {
    var _pack2 = (0, _slicedToArray2["default"])(pack, 2),
      array = _pack2[0],
      index = _pack2[1];
    return toString(array.array[index]);
  }
  if (!(pack !== null && pack !== void 0 && pack.__type__)) return basicType(pack);
  switch (pack.__type__) {
    case packageType['Literal']:
      return toString(pack.value);
    case packageType['Function']:
      return "\x1B[36;2m".concat("<Function ".concat(pack.name, ">"), "\x1B[0m");
    case packageType['SystemFunction']:
      return "\x1B[36;2m".concat("<SystemFunction ".concat(pack.name, ">"), "\x1B[0m");
    case packageType['Array']:
      return "{".concat(pack.array.map(function (item) {
        return ' ' + toString(item);
      }), " }");
    default:
      return basicType(pack.value);
  }
  function basicType(value) {
    switch (value) {
      case true:
        return "\x1B[32;2mTrue\x1B[0m";
      case false:
        return "\x1B[31;2mFalse\x1B[0m";
      case null:
        return "\x1B[30;2mnull\x1B[0m";
      case undefined:
        return "\x1B[30;2mnull\x1B[0m";
      default:
        if (typeof value === 'number') return "\x1B[33;2m".concat(value, "\x1B[0m");
        return value;
    }
  }
}
function getType(pack) {
  if (!(pack !== null && pack !== void 0 && pack.__type__)) return basicType(pack);
  switch (pack.__type__) {
    case packageType['Literal']:
      return getType(pack.value);
    case packageType['Function']:
    case packageType['SystemFunction']:
      return "<class function>";
    case packageType['Array']:
      return "<class array>";
    default:
      return basicType(pack.value);
  }
  function basicType(value) {
    switch (value) {
      case true:
        return "<class boolean>";
      case false:
        return "<class boolean>";
      case null:
        return "<class null>";
      case undefined:
        return "<class null>";
      default:
        if (typeof value === 'number') return "<class number>";
        if (typeof value === 'string') return "<class string>";
    }
  }
}