"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AstType = void 0;
var AstType = {
  'Program': 'Program',
  'VariableDeclaration': 'VariableDeclaration',
  'VariableDeclarator': 'VariableDeclarator',
  'FunctionDeclaration': 'FunctionDeclaration',
  'Identifier': 'Identifier',
  'Literal': 'Literal',
  // Expression
  'EqualExpression': 'EqualExpression',
  'PlusExpression': 'PlusExpression',
  'MinusExpression': 'MinusExpression',
  'MultiplyExpression': 'MultiplyExpression',
  'DivideExpression': 'DivideExpression',
  'SurplusExpression': 'SurplusExpression',
  'CongruentExpression': 'CongruentExpression',
  'NotEqualExpression': 'NotEqualExpression',
  'NotExpression': 'NotExpression',
  'AndExpression': 'AndExpression',
  'OrExpression': 'OrExpression',
  'GreaterExpression': 'GreaterExpression',
  'GreaterEqualExpression': 'GreaterEqualExpression',
  'LessExpression': 'LessExpression',
  'LessEqualExpression': 'LessEqualExpression',
  'LogicalExpression': 'LogicalExpression',
  'UnaryExpression': 'UnaryExpression',
  'BinaryExpression': 'BinaryExpression',
  'AssignmentExpression': 'AssignmentExpression',
  "CallExpression": "CallExpression",
  "ArrayExpression": 'ArrayExpression',
  'MemberExpression': 'MemberExpression',
  // Statement
  'ExpressionStatement': 'ExpressionStatement',
  "BlockStatement": "BlockStatement",
  "ReturnStatement": "ReturnStatement",
  'IfStatement': 'IfStatement',
  "BreakStatement": 'BreakStatement',
  'ContinueStatement': 'ContinueStatement',
  'WhileStatement': 'WhileStatement',
  'ForStatement': 'ForStatement'
};
exports.AstType = AstType;