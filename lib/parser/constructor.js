"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$appendBlock = $appendBlock;
exports.$binaryExpression = $binaryExpression;
exports.$createCall = $createCall;
exports.$createMemberExpression = $createMemberExpression;
exports.$createVariableDeclarator = $createVariableDeclarator;
exports.$createVariableDeclaratorInit = $createVariableDeclaratorInit;
exports.$expressionStatement = $expressionStatement;
exports.$logicalExpression = $logicalExpression;
exports.$mergeAlternate = $mergeAlternate;
exports.$mergeArray = $mergeArray;
exports.$mergeAssignment = $mergeAssignment;
exports.$mergeCallParam = $mergeCallParam;
exports.$mergeForBody = $mergeForBody;
exports.$mergeForInit = $mergeForInit;
exports.$mergeForTest = $mergeForTest;
exports.$mergeForUpdate = $mergeForUpdate;
exports.$mergeFunctionBody = $mergeFunctionBody;
exports.$mergeFunctionId = $mergeFunctionId;
exports.$mergeFunctionParam = $mergeFunctionParam;
exports.$mergeIfConsequent = $mergeIfConsequent;
exports.$mergeIfTest = $mergeIfTest;
exports.$mergeMember = $mergeMember;
exports.$mergeReturn = $mergeReturn;
exports.$mergeWhileBody = $mergeWhileBody;
exports.$mergeWhileTest = $mergeWhileTest;
exports.$popBlock = $popBlock;
exports.$unaryExpression = $unaryExpression;
exports.$updateCallInfo = $updateCallInfo;
exports._and = _and;
exports._begin = _begin;
exports._break = _break;
exports._congruent = _congruent;
exports._continue = _continue;
exports._defined = _defined;
exports._divide = _divide;
exports._elif = void 0;
exports._equal = _equal;
exports._for = _for;
exports._function = _function;
exports._greater = _greater;
exports._greaterEqual = _greaterEqual;
exports._identifier = _identifier;
exports._if = _if;
exports._leftBrace = _leftBrace;
exports._less = _less;
exports._lessEqual = _lessEqual;
exports._literal = _literal;
exports._minus = _minus;
exports._multiply = _multiply;
exports._not = _not;
exports._notEqual = _notEqual;
exports._or = _or;
exports._pass = void 0;
exports._plus = _plus;
exports._return = _return;
exports._surplus = _surplus;
exports._while = _while;
exports.createRoot = createRoot;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _astType = require("./astType");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createRoot(body, location) {
  return {
    type: _astType.AstType['Program'],
    location: location,
    body: body
  };
}
function _defined(_ref) {
  var source = _ref.source,
    value = _ref.value,
    location = _ref.location;
  return {
    type: _astType.AstType['VariableDeclaration'],
    source: source,
    location: location,
    declarations: [],
    kind: value
  };
}
function _identifier(_ref2) {
  var source = _ref2.source,
    value = _ref2.value,
    location = _ref2.location;
  return {
    type: _astType.AstType['Identifier'],
    source: source,
    location: location,
    name: value
  };
}
function _literal(_ref3) {
  var source = _ref3.source,
    value = _ref3.value,
    location = _ref3.location;
  var result;
  if (value === 'True') {
    result = true;
  } else if (value === 'False') {
    result = false;
  } else if (value === 'null') {
    result = null;
  } else if (value[0] == '"' && value[value.length - 1] === '"') {
    result = value.slice(1, -1);
  } else {
    result = Number(value);
  }
  return {
    type: _astType.AstType['Literal'],
    source: source,
    location: location,
    value: result,
    raw: value
  };
}
function $createVariableDeclaratorInit(astList) {
  var startIndex = astList.length - 3;
  var identifier = astList[startIndex];
  var init = astList[startIndex + 2];
  var variableDeclarator = _objectSpread(_objectSpread({
    type: _astType.AstType['VariableDeclarator']
  }, mergeTokenInfo(identifier, init)), {}, {
    id: identifier,
    init: init
  });
  astList.splice(startIndex, 3, variableDeclarator);
  astList[astList.length - 2].declarations.push(astList.pop());
}
function $createVariableDeclarator(astList) {
  var startIndex = astList.length - 1;
  var identifier = astList[startIndex];
  var variableDeclarator = _objectSpread(_objectSpread({
    type: _astType.AstType['VariableDeclarator']
  }, mergeTokenInfo(identifier)), {}, {
    id: identifier,
    init: null
  });
  astList.splice(startIndex, 1, variableDeclarator);
  astList[astList.length - 2].declarations.push(astList.pop());
}
function _begin(_ref4) {
  var source = _ref4.source,
    location = _ref4.location;
  return {
    type: _astType.AstType['BlockStatement'],
    source: source,
    location: location,
    body: []
  };
}
var _pass = _begin;
exports._pass = _pass;
function $appendBlock(astList, blocks) {
  var startIndex = astList.length - 1;
  var block = astList[startIndex];
  blocks.push(block.body);
}
function $popBlock(_, blocks) {
  blocks.pop();
}
function _return(_ref5) {
  var source = _ref5.source,
    location = _ref5.location;
  return {
    type: _astType.AstType['ReturnStatement'],
    source: source,
    location: location,
    argument: null
  };
}
function _break(_ref6) {
  var source = _ref6.source,
    location = _ref6.location;
  return {
    type: _astType.AstType['BreakStatement'],
    source: source,
    location: location,
    argument: null
  };
}
function _continue(_ref7) {
  var source = _ref7.source,
    location = _ref7.location;
  return {
    type: _astType.AstType['ContinueStatement'],
    source: source,
    location: location,
    argument: null
  };
}
function $mergeReturn(astList) {
  var startIndex = astList.length - 1;
  if ([_astType.AstType['ReturnStatement'], _astType.AstType['BreakStatement'], _astType.AstType['ContinueStatement']].includes(astList[startIndex].type)) return;
  var returnStatement = astList[startIndex - 1];
  var statement = astList[startIndex];
  returnStatement.argument = statement;
  astList.pop();
}
function _function(_ref8) {
  var source = _ref8.source,
    location = _ref8.location;
  return {
    type: _astType.AstType['FunctionDeclaration'],
    source: source,
    location: location,
    id: null,
    params: [],
    body: null
  };
}
function $mergeFunctionId(astList) {
  var startIndex = astList.length - 2;
  var func = astList[startIndex];
  var id = astList[startIndex + 1];
  func.id = id;
  astList.pop();
}
function $mergeFunctionParam(astList) {
  var startIndex = astList.length - 2;
  var func = astList[startIndex];
  var id = astList[startIndex + 1];
  func.params.push(id);
  astList.pop();
}
function $mergeFunctionBody(astList) {
  var startIndex = astList.length - 2;
  var func = astList[startIndex];
  var body = astList[startIndex + 1];
  func.body = body;
  astList.pop();
}
function _if(_ref9) {
  var source = _ref9.source,
    location = _ref9.location;
  return {
    type: _astType.AstType['IfStatement'],
    source: source,
    location: location,
    test: null,
    consequent: null,
    alternate: null
  };
}
var _elif = _if;
exports._elif = _elif;
function $mergeIfTest(astList) {
  var startIndex = astList.length - 2;
  var ifStatement = astList[startIndex];
  var test = astList[startIndex + 1];
  ifStatement.test = test;
  astList.splice(startIndex + 1, 1);
}
function $mergeIfConsequent(astList) {
  var startIndex = astList.length - 2;
  var ifStatement = astList[startIndex];
  var consequent = astList[startIndex + 1];
  ifStatement.consequent = consequent;
  astList.splice(startIndex + 1, 1);
}
function $mergeAlternate(astList) {
  var startIndex = astList.length - 2;
  var statement = astList[startIndex];
  var alternate = astList[startIndex + 1];
  var cur = statement;
  while (cur.alternate && cur.alternate.type === _astType.AstType['IfStatement']) {
    cur = cur.alternate;
  }
  cur.alternate = alternate;
  astList.splice(startIndex + 1, 1);
}
function _equal(_ref10) {
  var value = _ref10.value,
    source = _ref10.source,
    location = _ref10.location;
  return {
    type: _astType.AstType['EqualExpression'],
    source: source,
    location: location,
    operator: value
  };
}
function _plus(_ref11) {
  var value = _ref11.value,
    source = _ref11.source,
    location = _ref11.location;
  return {
    type: _astType.AstType['PlusExpression'],
    source: source,
    location: location,
    operator: value
  };
}
function _minus(_ref12) {
  var value = _ref12.value,
    source = _ref12.source,
    location = _ref12.location;
  return {
    type: _astType.AstType['MinusExpression'],
    source: source,
    location: location,
    operator: value
  };
}
function _multiply(_ref13) {
  var value = _ref13.value,
    source = _ref13.source,
    location = _ref13.location;
  return {
    type: _astType.AstType['MultiplyExpression'],
    source: source,
    location: location,
    operator: value
  };
}
function _divide(_ref14) {
  var value = _ref14.value,
    source = _ref14.source,
    location = _ref14.location;
  return {
    type: _astType.AstType['DivideExpression'],
    source: source,
    location: location,
    operator: value
  };
}
function _surplus(_ref15) {
  var value = _ref15.value,
    source = _ref15.source,
    location = _ref15.location;
  return {
    type: _astType.AstType['SurplusExpression'],
    source: source,
    location: location,
    operator: value
  };
}
function _congruent(_ref16) {
  var value = _ref16.value,
    source = _ref16.source,
    location = _ref16.location;
  return {
    type: _astType.AstType['CongruentExpression'],
    source: source,
    location: location,
    operator: value
  };
}
function _notEqual(_ref17) {
  var value = _ref17.value,
    source = _ref17.source,
    location = _ref17.location;
  return {
    type: _astType.AstType['NotEqualExpression'],
    source: source,
    location: location,
    operator: value
  };
}
function _not(_ref18) {
  var value = _ref18.value,
    source = _ref18.source,
    location = _ref18.location;
  return {
    type: _astType.AstType['NotExpression'],
    source: source,
    location: location,
    operator: value
  };
}
function _and(_ref19) {
  var value = _ref19.value,
    source = _ref19.source,
    location = _ref19.location;
  return {
    type: _astType.AstType['AndExpression'],
    source: source,
    location: location,
    operator: value
  };
}
function _or(_ref20) {
  var value = _ref20.value,
    source = _ref20.source,
    location = _ref20.location;
  return {
    type: _astType.AstType['OrExpression'],
    source: source,
    location: location,
    operator: value
  };
}
function _greater(_ref21) {
  var value = _ref21.value,
    source = _ref21.source,
    location = _ref21.location;
  return {
    type: _astType.AstType['GreaterExpression'],
    source: source,
    location: location,
    operator: value
  };
}
function _greaterEqual(_ref22) {
  var value = _ref22.value,
    source = _ref22.source,
    location = _ref22.location;
  return {
    type: _astType.AstType['GreaterEqualExpression'],
    source: source,
    location: location,
    operator: value
  };
}
function _less(_ref23) {
  var value = _ref23.value,
    source = _ref23.source,
    location = _ref23.location;
  return {
    type: _astType.AstType['LessExpression'],
    source: source,
    location: location,
    operator: value
  };
}
function _lessEqual(_ref24) {
  var value = _ref24.value,
    source = _ref24.source,
    location = _ref24.location;
  return {
    type: _astType.AstType['LessEqualExpression'],
    source: source,
    location: location,
    operator: value
  };
}
function $mergeAssignment(astList) {
  var centerIndex = astList.length - 2;
  var operator = astList[centerIndex];
  var left = astList[centerIndex - 1];
  var right = astList[centerIndex + 1];
  var ast = _objectSpread(_objectSpread({
    type: _astType.AstType['AssignmentExpression']
  }, mergeTokenInfo(left, operator, right)), {}, {
    left: left,
    operator: operator.operator,
    right: right
  });
  astList.splice(centerIndex - 1, 3, ast);
}
function $binaryExpression(astList) {
  var centerIndex = astList.length - 2;
  var operator = astList[centerIndex];
  var left = astList[centerIndex - 1];
  var right = astList[centerIndex + 1];
  var ast = _objectSpread(_objectSpread({
    type: _astType.AstType['BinaryExpression']
  }, mergeTokenInfo(left, operator, right)), {}, {
    left: left,
    operator: operator.operator,
    right: right
  });
  astList.splice(centerIndex - 1, 3, ast);
}
function $logicalExpression(astList) {
  var centerIndex = astList.length - 2;
  var operator = astList[centerIndex];
  var left = astList[centerIndex - 1];
  var right = astList[centerIndex + 1];
  var ast = _objectSpread(_objectSpread({
    type: _astType.AstType['LogicalExpression']
  }, mergeTokenInfo(left, operator, right)), {}, {
    left: left,
    operator: operator.operator,
    right: right
  });
  astList.splice(centerIndex - 1, 3, ast);
}
function $unaryExpression(astList) {
  var startIndex = astList.length - 2;
  var operator = astList[startIndex];
  var right = astList[startIndex + 1];
  var ast = _objectSpread(_objectSpread({
    type: _astType.AstType['UnaryExpression']
  }, mergeTokenInfo(operator, right)), {}, {
    operator: operator.operator,
    argument: right
  });
  astList.splice(startIndex, 2, ast);
}
function $createCall(astList) {
  var startIndex = astList.length - 1;
  var id = astList[startIndex];
  var ast = _objectSpread(_objectSpread({
    type: _astType.AstType['CallExpression']
  }, mergeTokenInfo(id)), {}, {
    callee: id,
    arguments: []
  });
  astList.splice(startIndex, 1, ast);
}
function $mergeCallParam(astList) {
  var startIndex = astList.length - 2;
  var call = astList[startIndex];
  var id = astList[startIndex + 1];
  call.arguments.push(id);
  astList.pop();
}
function $updateCallInfo(astList) {
  var startIndex = astList.length - 1;
  var call = astList[startIndex];
  var ast = _objectSpread(_objectSpread({}, call), mergeTokenInfo.apply(void 0, [call.callee].concat((0, _toConsumableArray2["default"])(call.arguments))));
  astList.splice(startIndex, 1, ast);
}
function $expressionStatement(astList) {
  astList.push(createExpressionStatement(astList.pop()));
}
function _while(_ref25) {
  var source = _ref25.source,
    location = _ref25.location;
  return {
    type: _astType.AstType['WhileStatement'],
    source: source,
    location: location,
    test: null,
    body: null,
    alternate: null
  };
}
function $mergeWhileTest(astList) {
  var startIndex = astList.length - 2;
  var whileStatement = astList[startIndex];
  var test = astList[startIndex + 1];
  whileStatement.test = test;
  astList.splice(startIndex + 1, 1);
}
function $mergeWhileBody(astList) {
  var startIndex = astList.length - 2;
  var whileStatement = astList[startIndex];
  var body = astList[startIndex + 1];
  whileStatement.body = body;
  astList.splice(startIndex + 1, 1);
}
function _for(_ref26) {
  var source = _ref26.source,
    location = _ref26.location;
  return {
    type: _astType.AstType['ForStatement'],
    source: source,
    location: location,
    init: null,
    test: null,
    update: null,
    body: null,
    alternate: null
  };
}
function $mergeForInit(astList) {
  var tail = astList.length - 1;
  if (astList[tail].type === _astType.AstType['ForStatement']) return;
  var forStatement = astList[tail - 1];
  var init = astList[tail];
  forStatement.init = init;
  astList.pop();
}
function $mergeForTest(astList) {
  var tail = astList.length - 1;
  if (astList[tail].type === _astType.AstType['ForStatement']) return;
  var forStatement = astList[tail - 1];
  var test = astList[tail];
  forStatement.test = test;
  astList.pop();
}
function $mergeForUpdate(astList) {
  var tail = astList.length - 1;
  if (astList[tail].type === _astType.AstType['ForStatement']) return;
  var forStatement = astList[tail - 1];
  var update = astList[tail];
  forStatement.update = update;
  astList.pop();
}
function $mergeForBody(astList) {
  var startIndex = astList.length - 2;
  var forStatement = astList[startIndex];
  var body = astList[startIndex + 1];
  forStatement.body = body;
  astList.splice(startIndex + 1, 1);
}
function _leftBrace(_ref27) {
  var source = _ref27.source,
    location = _ref27.location;
  return {
    type: _astType.AstType['ArrayExpression'],
    source: source,
    location: location,
    elements: []
  };
}
function $mergeArray(astList) {
  var startIndex = astList.length - 2;
  var array = astList[startIndex];
  array.elements.push(astList.pop());
}
function $createMemberExpression(astList) {
  astList.pop();
  var id = astList.pop();
  var ast = _objectSpread(_objectSpread({
    type: _astType.AstType['MemberExpression']
  }, mergeTokenInfo(id)), {}, {
    object: id,
    property: null
  });
  astList.push(ast);
}
function $mergeMember(astList) {
  var startIndex = astList.length - 2;
  var member = astList[startIndex];
  member.property = astList.pop();
}

// utils
function mergeTokenInfo() {
  for (var _len = arguments.length, asts = new Array(_len), _key = 0; _key < _len; _key++) {
    asts[_key] = arguments[_key];
  }
  var prevSource = asts[0].source;
  var set = new Set();
  set.add(prevSource);
  for (var i = 1; i < asts.length; ++i) {
    var curSource = asts[i].source;
    set.add(curSource);
  }
  return {
    source: (0, _toConsumableArray2["default"])(set).join(''),
    location: _objectSpread(_objectSpread({}, asts[0].location), {}, {
      end: asts[asts.length - 1].location.end
    })
  };
}
function createExpressionStatement(statement) {
  return {
    type: _astType.AstType['ExpressionStatement'],
    source: statement.source,
    location: statement.location,
    expression: statement
  };
}