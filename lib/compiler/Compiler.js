"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _lexer = _interopRequireDefault(require("../lexer"));
var _parser = _interopRequireWildcard(require("../parser"));
var _Scope = _interopRequireDefault(require("./Scope"));
var _package = require("./package");
var _error = _interopRequireDefault(require("../error"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Compiler = /*#__PURE__*/function () {
  function Compiler() {
    (0, _classCallCheck2["default"])(this, Compiler);
    this.lexer = _lexer["default"];
    this.parser = _parser["default"];
    this.AstType = _parser.AstType;
  }
  (0, _createClass2["default"])(Compiler, [{
    key: "getGlobalScope",
    value: function getGlobalScope() {
      var _this = this;
      var globalScope = new _Scope["default"]();
      globalScope.set('print', new _package.SystemFunction('print', function (args, node) {
        var _console;
        (_console = console).log.apply(_console, (0, _toConsumableArray2["default"])(args.map(function (arg) {
          return (0, _package.toString)(arg);
        })));
      }));
      globalScope.set('type', new _package.SystemFunction('type', function (args, node) {
        var value = unlock(args[0]);
        return "\x1B[35;2m".concat((0, _package.getType)(value), "\x1B[0m");
      }));
      globalScope.set('eval', new _package.SystemFunction('eval', function (args, node) {
        var code = args[0];
        if ((0, _package.getType)(code) !== '<class string>') (0, _error["default"])(TypeError, "<eval>: param is not string", node.source, node.location);
        return _this.compile(code);
      }));
      globalScope.set('timer', new _package.SystemFunction('timer', function (args, node) {
        var fn = args[0];
        var time = args[1];
        if ((0, _package.getType)(fn) !== '<class function>') (0, _error["default"])(TypeError, "<timer>: param is not function", node.source, node.location);
        if ((0, _package.getType)(time) !== '<class number>') (0, _error["default"])(TypeError, "<timer>: param is not number", node.source, node.location);
        var sum = 0;
        var timer = setInterval(function () {
          var _fn$params = (0, _slicedToArray2["default"])(fn.params, 2),
            stop = _fn$params[0],
            count = _fn$params[1];
          if (stop) {
            fn.scope.set(stop, new _package.SystemFunction('stop', function () {
              clearInterval(timer);
            }));
          }
          if (count) {
            fn.scope.set(count, new _package.Literal(false, ++sum));
          }
          _this.handle(fn.body, fn.scope, fn.scope);
          fn.scope.clear();
        }, (0, _package.getValue)(time));
      }));
      globalScope.set('len', new _package.SystemFunction('len', function (args, node) {
        var _array;
        var array = args[0];
        if (array.__type__ === _package.packageType['Literal']) array = array.value;
        if (((_array = array) === null || _array === void 0 ? void 0 : _array.__type__) === _package.packageType['Array']) return array.array.length;
        (0, _error["default"])(TypeError, "<len>: param is not array", node.arguments[0].source, node.arguments[0].location);
      }));
      return globalScope;
    }
  }, {
    key: "compile",
    value: function compile(sentence) {
      var tokens = this.lexer.tokenize(sentence);
      var ast = this.parser.parse(tokens);
      return this.handle(ast, null, this.getGlobalScope());
    }
  }, {
    key: "handle",
    value: function handle(root, gist, scope) {
      var _this2 = this;
      switch (root.type) {
        case _parser.AstType['Program']:
          {
            var body = root.body;
            for (var i = 0; i < body.length; ++i) {
              var node = body[i];
              this.handle(node, null, scope);
            }
          }
          break;
        case _parser.AstType['BlockStatement']:
          {
            var _body = root.body;
            scope = (gist === null || gist === void 0 ? void 0 : gist.constructor) === _Scope["default"] ? gist : new _Scope["default"](scope);
            for (var _i = 0; _i < _body.length; ++_i) {
              var _node = _body[_i];
              var type = _node.type;
              if (type === _parser.AstType['ReturnStatement']) {
                if ((gist === null || gist === void 0 ? void 0 : gist.constructor) === _Scope["default"]) {
                  return unlock(this.handle(_node, null, scope));
                } else {
                  return this.handle(_node, null, scope);
                }
              } else if (type === _parser.AstType['BreakStatement']) {
                return this.handle(_node, null, scope);
              } else if (type === _parser.AstType['ContinueStatement']) {
                return this.handle(_node, null, scope);
              }
              var curRes = this.handle(_node, null, scope);
              if (Array.isArray(curRes)) {
                if (['return', 'break', 'continue'].includes(curRes[1])) {
                  if ((gist === null || gist === void 0 ? void 0 : gist.constructor) === _Scope["default"]) {
                    return curRes[0];
                  } else {
                    return curRes;
                  }
                }
              }
            }
          }
          break;
        case _parser.AstType['VariableDeclaration']:
          {
            var declarations = root.declarations,
              kind = root.kind;
            declarations.forEach(function (declaration) {
              return _this2.handle(declaration, kind, scope);
            });
          }
          break;
        case _parser.AstType['VariableDeclarator']:
          {
            var id = root.id,
              init = root.init;
            var name = id.name;
            if (!scope.has(name)) {
              if (gist === 'def') {
                // def
                var result;
                if (init) {
                  var _result;
                  result = unlock(this.handle(init, null, scope));
                  result = ((_result = result) === null || _result === void 0 ? void 0 : _result.__type__) === _package.packageType['Literal'] ? result.value : result;
                } else {
                  result = null;
                }
                scope.setCur(name, new _package.Literal(false, result));
              } else {
                // read
                if (init) {
                  var _result3;
                  var _result2 = unlock(this.handle(init, null, scope));
                  _result2 = ((_result3 = _result2) === null || _result3 === void 0 ? void 0 : _result3.__type__) === _package.packageType['Literal'] ? _result2.value : _result2;
                  scope.setCur(name, new _package.Literal(true, _result2));
                } else {
                  (0, _error["default"])(SyntaxError, "Missing initializer in read declaration", root.source, root.location);
                }
              }
            } else {
              // 已存在着该变量
              (0, _error["default"])(SyntaxError, "Identifier '".concat(id.name, "' has already been declared"), id.source, id.location);
            }
          }
          break;
        case _parser.AstType['Identifier']:
          {
            var _result4 = scope.get(root.name);
            if (_result4) {
              return _result4;
            } else {
              (0, _error["default"])(ReferenceError, "'".concat(root.name, "' is not defined"), root.source, root.location);
            }
          }
        case _parser.AstType['Literal']:
          {
            return root.value;
          }
        case _parser.AstType['ExpressionStatement']:
          {
            var expression = root.expression;
            return this.handle(expression, null, scope);
          }
        case _parser.AstType['BinaryExpression']:
          {
            var left = root.left,
              operator = root.operator,
              right = root.right;
            switch (operator) {
              case '+':
                return unlock((0, _package.getValue)(this.handle(left, null, scope))) + unlock((0, _package.getValue)(this.handle(right, null, scope)));
              case '-':
                return unlock((0, _package.getValue)(this.handle(left, null, scope))) - unlock((0, _package.getValue)(this.handle(right, null, scope)));
              case '*':
                return unlock((0, _package.getValue)(this.handle(left, null, scope))) * unlock((0, _package.getValue)(this.handle(right, null, scope)));
              case '/':
                return unlock((0, _package.getValue)(this.handle(left, null, scope))) / unlock((0, _package.getValue)(this.handle(right, null, scope)));
              case '%':
                return unlock((0, _package.getValue)(this.handle(left, null, scope))) % unlock((0, _package.getValue)(this.handle(right, null, scope)));
              case '>':
                return unlock((0, _package.getValue)(this.handle(left, null, scope))) > unlock((0, _package.getValue)(this.handle(right, null, scope)));
              case '>=':
                return unlock((0, _package.getValue)(this.handle(left, null, scope))) >= unlock((0, _package.getValue)(this.handle(right, null, scope)));
              case '<':
                return unlock((0, _package.getValue)(this.handle(left, null, scope))) < unlock((0, _package.getValue)(this.handle(right, null, scope)));
              case '<=':
                return unlock((0, _package.getValue)(this.handle(left, null, scope))) <= unlock((0, _package.getValue)(this.handle(right, null, scope)));
              case '==':
                return unlock((0, _package.getValue)(this.handle(left, null, scope))) === unlock((0, _package.getValue)(this.handle(right, null, scope)));
              case 'not=':
                return unlock((0, _package.getValue)(this.handle(left, null, scope))) !== unlock((0, _package.getValue)(this.handle(right, null, scope)));
            }
          }
        case _parser.AstType['LogicalExpression']:
          {
            var _left = root.left,
              _operator = root.operator,
              _right = root.right;
            switch (_operator) {
              case 'and':
                return unlock((0, _package.getValue)(this.handle(_left, null, scope))) && unlock((0, _package.getValue)(this.handle(_right, null, scope)));
              case 'or':
                return unlock((0, _package.getValue)(this.handle(_left, null, scope))) || unlock((0, _package.getValue)(this.handle(_right, null, scope)));
            }
          }
        case _parser.AstType['UnaryExpression']:
          {
            var _operator2 = root.operator,
              argument = root.argument;
            switch (_operator2) {
              case '+':
                return +unlock((0, _package.getValue)(this.handle(argument, null, scope)));
              case '-':
                return -unlock((0, _package.getValue)(this.handle(argument, null, scope)));
              case 'not':
                return !unlock((0, _package.getValue)(this.handle(argument, null, scope)));
            }
          }
        case _parser.AstType['AssignmentExpression']:
          {
            var _left2 = root.left,
              _right2 = root.right;
            if (_left2.type === _parser.AstType['Identifier']) {
              var _result5 = scope.get(_left2.name);
              if (_result5) {
                if (_result5.__type__ === _package.packageType['Function']) {
                  (0, _error["default"])(TypeError, "Function is not variable", root.source, root.location);
                }
                if (_result5.__type__ === _package.packageType['Literal']) {
                  if (!_result5.isRead) {
                    var _thisRes;
                    var thisRes = unlock(this.handle(_right2, null, scope));
                    thisRes = ((_thisRes = thisRes) === null || _thisRes === void 0 ? void 0 : _thisRes.__type__) === _package.packageType['Literal'] ? thisRes.value : thisRes;
                    _result5.value = thisRes;
                  } else {
                    (0, _error["default"])(TypeError, "Assignment to constant variable", root.source, root.location);
                  }
                }
              } else {
                (0, _error["default"])(SyntaxError, "Identifier '".concat(_left2.name, "' is not declared"), _left2.source, _left2.location);
              }
            } else {
              var _thisRes3;
              var _this$handle = this.handle(_left2, null, scope),
                _this$handle2 = (0, _slicedToArray2["default"])(_this$handle, 2),
                array = _this$handle2[0],
                index = _this$handle2[1];
              var _thisRes2 = unlock(this.handle(_right2, null, scope));
              _thisRes2 = ((_thisRes3 = _thisRes2) === null || _thisRes3 === void 0 ? void 0 : _thisRes3.__type__) === _package.packageType['Literal'] ? _thisRes2.value : _thisRes2;
              array.array[index] = _thisRes2;
            }
          }
          break;
        case _parser.AstType['FunctionDeclaration']:
          {
            var _id = root.id,
              params = root.params,
              _body2 = root.body;
            var _name = _id.name;
            var set = new Set();
            params.some(function (param) {
              // 检查是否有重复的参数名
              if (!set.has(param.name)) {
                set.add(param.name);
              } else {
                (0, _error["default"])(SyntaxError, "Identifier not repeatable params: ".concat(param.name), param.source, param.location);
              }
            });
            if (!scope.has(_name)) {
              scope.set(_name, new _package.Function(_name, params, _body2));
              return scope.get(_name);
            } else {
              (0, _error["default"])(SyntaxError, "Identifier '".concat(_name, "' has already been declared"), _id.source, _id.location);
            }
          }
          break;
        case _parser.AstType['CallExpression']:
          {
            var _func;
            var callee = root.callee,
              args = root.arguments;
            var func = unlock(this.handle(callee, null, scope));
            if (((_func = func) === null || _func === void 0 ? void 0 : _func.__type__) === _package.packageType['SystemFunction']) {
              return func.fn.apply(null, [args.map(function (arg) {
                return _this2.handle(arg, null, scope);
              }), root, scope]);
            } else {
              var _func2, _func3;
              if (((_func2 = func) === null || _func2 === void 0 ? void 0 : _func2.__type__) === _package.packageType['Literal']) {
                func = func.value;
              }
              if (![_package.packageType['Function'], _package.packageType['SystemFunction']].includes((_func3 = func) === null || _func3 === void 0 ? void 0 : _func3.__type__)) {
                var identifier = callee;
                var isChained = false;
                while (identifier.type === _parser.AstType['CallExpression']) {
                  identifier = identifier.callee;
                  isChained = true;
                }
                (0, _error["default"])(TypeError, "".concat(identifier.name + (isChained && '(...)'), " is not a function"), identifier.source, identifier.location);
              }
              if (func.__type__ === _package.packageType['SystemFunction']) {
                return func.fn.apply(null, [args.map(function (arg) {
                  return _this2.handle(arg, null, scope);
                }), root, scope]);
              }
              var funcScope = new _Scope["default"](scope);
              func.params.forEach(function (param, i) {
                if (args[i] == null) {
                  funcScope.setCur(param, new _package.Literal(false, null));
                } else {
                  var _result6 = _this2.handle(args[i], null, scope);
                  var arg;
                  if (_result6.__type__) {
                    switch (_result6.__type__) {
                      case _package.packageType['Literal']:
                        arg = new _package.Literal(false, _result6.value);
                        break;
                      default:
                        arg = _result6;
                    }
                  } else {
                    arg = new _package.Literal(false, _result6);
                  }
                  funcScope.setCur(param, arg);
                }
              });
              var fnReturn = this.handle(func.body, funcScope, funcScope, funcScope);
              funcScope.clear();
              return unlock(fnReturn);
            }
          }
        case _parser.AstType['ReturnStatement']:
          {
            var _argument = root.argument;
            return [_argument ? unlock(this.handle(_argument, null, scope)) : null, 'return'];
          }
        case _parser.AstType['BreakStatement']:
          {
            var _argument2 = root.argument;
            return [_argument2 ? unlock(this.handle(_argument2, null, scope)) : null, 'break'];
          }
        case _parser.AstType['ContinueStatement']:
          {
            var _argument3 = root.argument;
            return [_argument3 ? unlock(this.handle(_argument3, null, scope)) : null, 'continue'];
          }
        case _parser.AstType['IfStatement']:
          {
            var test = (0, _package.getValue)(this.handle(root.test, null, scope));
            if (test) return this.handle(root['consequent'], null, scope);else if (root['alternate']) return this.handle(root['alternate'], null, scope);
            return null;
          }
        case _parser.AstType['WhileStatement']:
          {
            while ((0, _package.getValue)(this.handle(root.test, null, scope))) {
              var _thisRes4 = this.handle(root['body'], null, scope);
              if (Array.isArray(_thisRes4)) {
                if (_thisRes4[1] === 'break') return _thisRes4[0];else if (_thisRes4[1] === 'return') return _thisRes4;else if (_thisRes4[1] === 'continue') continue;
              }
            }
            if (root['alternate']) return this.handle(root['alternate'], null, scope);
          }
          break;
        case _parser.AstType['ForStatement']:
          {
            var _init = root.init,
              _test = root.test,
              update = root.update,
              _body3 = root.body,
              alternate = root.alternate;
            var newScope = new _Scope["default"](scope);
            _init && this.handle(_init, null, newScope);
            while (!_test || (0, _package.getValue)(this.handle(_test, null, newScope))) {
              var _thisRes5 = this.handle(_body3, null, newScope);
              update && this.handle(update, null, newScope);
              if (Array.isArray(_thisRes5)) {
                if (_thisRes5[1] === 'break') return _thisRes5[0];else if (_thisRes5[1] === 'return') return _thisRes5;else if (_thisRes5[1] === 'continue') continue;
              }
            }
            if (alternate) return this.handle(alternate, null, scope);
          }
          break;
        case _parser.AstType['ArrayExpression']:
          {
            var elements = root.elements;
            return new _package.ArrayLiteral(elements.map(function (elm) {
              return _this2.handle(elm, null, scope);
            }));
          }
        case _parser.AstType['MemberExpression']:
          {
            var _array3;
            var object = root.object,
              property = root.property;
            var _array2 = this.handle(object, null, scope);
            var _index = this.handle(property, null, scope);
            if (_array2.__type__ === _package.packageType['Literal']) _array2 = _array2.value;
            if (((_array3 = _array2) === null || _array3 === void 0 ? void 0 : _array3.__type__) !== _package.packageType['Array']) {
              if (object.name) {
                (0, _error["default"])(TypeError, "".concat(object.name, " is not array"), object.source, object.location);
              } else {
                (0, _error["default"])(TypeError, "Cannot read properties of ".concat((0, _package.toString)(_array2), " (reading '").concat((0, _package.toString)(_index), "')"), property.source, property.location);
              }
            }
            if (_index.__type__ === _package.packageType['Literal']) _index = _index.value;
            var indexType = (0, _package.getType)(_index);
            var key = (0, _package.toString)(_index);
            if (indexType === "<class string>") {
              var arrayFunc = _array2[key];
              if (!arrayFunc) {
                (0, _error["default"])(TypeError, "".concat(key, " is not function"), property.source, property.location);
              }
              return arrayFunc;
            } else if (indexType !== "<class number>") {
              (0, _error["default"])(TypeError, "".concat(key, " is not number"), property.source, property.location);
            }
            return [_array2, _index];
          }
      }
    }
  }]);
  return Compiler;
}();
exports["default"] = Compiler;
function unlock(result) {
  if (Array.isArray(result)) {
    if (['return', 'break'].includes(result[1])) return result[0];else {
      var _result7 = (0, _slicedToArray2["default"])(result, 2),
        array = _result7[0],
        index = _result7[1];
      return array.array[index];
    }
  } else {
    return result;
  }
}