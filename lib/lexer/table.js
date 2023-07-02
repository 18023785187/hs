"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Lexer = require("./Lexer");
var _Initialize, _chars, _zero, _number, _decimals, _def, _def2, _def3, _readOrRetrun, _readOrRetrun2, _read, _read2, _return, _return2, _return3, _return4, _funcFor, _func, _func2, _func3, _beginBreak, _begin, _begin2, _begin3, _begin4, _break, _break2, _break3, _break4, _continue, _continue2, _continue3, _continue4, _continue5, _continue6, _continue7, _continue8, _endElifElse, _end, _end2, _elifElse, _elif, _elif2, _else, _else2, _if, _if2, _or, _or2, _and, _and2, _and3, _notNull, _not, _not2, _null, _null2, _null3, _pass, _pass2, _pass3, _pass4, _for, _for2, _True, _True2, _True3, _True4, _False, _False2, _False3, _False4, _False5, _while, _while2, _while3, _while4, _while5, _Initialize$chars$zer;
var _default = (_Initialize$chars$zer = {}, (0, _defineProperty2["default"])(_Initialize$chars$zer, _Lexer.Initialize, (_Initialize = {}, (0, _defineProperty2["default"])(_Initialize, 'd', {
  state: 'def1'
}), (0, _defineProperty2["default"])(_Initialize, 'r', {
  state: 'readOrRetrun1'
}), (0, _defineProperty2["default"])(_Initialize, 'f', {
  state: 'funcFor'
}), (0, _defineProperty2["default"])(_Initialize, 'b', {
  state: 'beginBreak'
}), (0, _defineProperty2["default"])(_Initialize, 'e', {
  state: 'endElifElse1'
}), (0, _defineProperty2["default"])(_Initialize, 'i', {
  state: 'if1'
}), (0, _defineProperty2["default"])(_Initialize, 'o', {
  state: 'or1'
}), (0, _defineProperty2["default"])(_Initialize, 'a', {
  state: 'and1'
}), (0, _defineProperty2["default"])(_Initialize, 'n', {
  state: 'notNull1'
}), (0, _defineProperty2["default"])(_Initialize, 'p', {
  state: 'pass1'
}), (0, _defineProperty2["default"])(_Initialize, 'w', {
  state: 'while1'
}), (0, _defineProperty2["default"])(_Initialize, 'c', {
  state: 'continue1'
}), (0, _defineProperty2["default"])(_Initialize, 'T', {
  state: 'True1'
}), (0, _defineProperty2["default"])(_Initialize, 'F', {
  state: 'False1'
}), (0, _defineProperty2["default"])(_Initialize, _Lexer.chars, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_Initialize, '0', {
  state: 'zero'
}), (0, _defineProperty2["default"])(_Initialize, _Lexer.number, {
  state: 'number'
}), (0, _defineProperty2["default"])(_Initialize, '"', {
  state: 'quotation'
}), (0, _defineProperty2["default"])(_Initialize, '(', {
  state: 'leftBracket'
}), (0, _defineProperty2["default"])(_Initialize, ')', {
  state: 'rightBracket'
}), (0, _defineProperty2["default"])(_Initialize, '+', {
  state: 'plus'
}), (0, _defineProperty2["default"])(_Initialize, '-', {
  state: 'minus'
}), (0, _defineProperty2["default"])(_Initialize, '*', {
  state: 'multiply'
}), (0, _defineProperty2["default"])(_Initialize, '/', {
  state: 'divide'
}), (0, _defineProperty2["default"])(_Initialize, '%', {
  state: 'surplus'
}), (0, _defineProperty2["default"])(_Initialize, '=', {
  state: 'equalWrite'
}), (0, _defineProperty2["default"])(_Initialize, ';', {
  state: 'semicolon'
}), (0, _defineProperty2["default"])(_Initialize, '#', {
  state: 'pound'
}), (0, _defineProperty2["default"])(_Initialize, ':', {
  state: 'colon'
}), (0, _defineProperty2["default"])(_Initialize, ',', {
  state: 'comma'
}), (0, _defineProperty2["default"])(_Initialize, '>', {
  state: 'greaterWrite'
}), (0, _defineProperty2["default"])(_Initialize, '<', {
  state: 'lessWrite'
}), (0, _defineProperty2["default"])(_Initialize, '{', {
  state: 'leftBrace'
}), (0, _defineProperty2["default"])(_Initialize, '}', {
  state: 'rightBrace'
}), (0, _defineProperty2["default"])(_Initialize, _Lexer.blank, {
  state: _Lexer.Initialize
}), _Initialize)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'chars', (_chars = {}, (0, _defineProperty2["default"])(_chars, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_chars, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _chars)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'zero', (_zero = {}, (0, _defineProperty2["default"])(_zero, _Lexer.number, {
  error: function error() {
    return 'Numbers cannot contain leading zeros';
  }
}), (0, _defineProperty2["default"])(_zero, '.', {
  state: 'decimals'
}), (0, _defineProperty2["default"])(_zero, _Lexer.Else, {
  state: 'literal',
  isTerminate: true
}), _zero)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'number', (_number = {}, (0, _defineProperty2["default"])(_number, _Lexer.number, {
  state: 'number'
}), (0, _defineProperty2["default"])(_number, '.', {
  state: 'decimals'
}), (0, _defineProperty2["default"])(_number, _Lexer.Else, {
  state: 'literal',
  isTerminate: true
}), _number)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'decimals', (_decimals = {}, (0, _defineProperty2["default"])(_decimals, _Lexer.number, {
  state: 'decimals'
}), (0, _defineProperty2["default"])(_decimals, '.', {
  error: function error(_char) {
    return "Unexpected token '".concat(_char, "'");
  }
}), (0, _defineProperty2["default"])(_decimals, _Lexer.Else, {
  state: 'literal',
  isTerminate: true
}), _decimals)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'def1', (_def = {}, (0, _defineProperty2["default"])(_def, 'e', {
  state: 'def2'
}), (0, _defineProperty2["default"])(_def, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_def, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _def)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'def2', (_def2 = {}, (0, _defineProperty2["default"])(_def2, 'f', {
  state: 'def3'
}), (0, _defineProperty2["default"])(_def2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_def2, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _def2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'def3', (_def3 = {}, (0, _defineProperty2["default"])(_def3, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_def3, _Lexer.Else, {
  state: 'defined',
  isTerminate: true
}), _def3)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'readOrRetrun1', (_readOrRetrun = {}, (0, _defineProperty2["default"])(_readOrRetrun, 'e', {
  state: 'readOrRetrun2'
}), (0, _defineProperty2["default"])(_readOrRetrun, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_readOrRetrun, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _readOrRetrun)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'readOrRetrun2', (_readOrRetrun2 = {}, (0, _defineProperty2["default"])(_readOrRetrun2, 'a', {
  state: 'read3'
}), (0, _defineProperty2["default"])(_readOrRetrun2, 't', {
  state: 'return3'
}), (0, _defineProperty2["default"])(_readOrRetrun2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_readOrRetrun2, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _readOrRetrun2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'read3', (_read = {}, (0, _defineProperty2["default"])(_read, 'd', {
  state: 'read4'
}), (0, _defineProperty2["default"])(_read, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_read, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _read)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'read4', (_read2 = {}, (0, _defineProperty2["default"])(_read2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_read2, _Lexer.Else, {
  state: 'defined',
  isTerminate: true
}), _read2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'return3', (_return = {}, (0, _defineProperty2["default"])(_return, 'u', {
  state: 'return4'
}), (0, _defineProperty2["default"])(_return, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_return, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _return)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'return4', (_return2 = {}, (0, _defineProperty2["default"])(_return2, 'r', {
  state: 'return5'
}), (0, _defineProperty2["default"])(_return2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_return2, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _return2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'return5', (_return3 = {}, (0, _defineProperty2["default"])(_return3, 'n', {
  state: 'return6'
}), (0, _defineProperty2["default"])(_return3, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_return3, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _return3)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'return6', (_return4 = {}, (0, _defineProperty2["default"])(_return4, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_return4, _Lexer.Else, {
  state: 'return',
  isTerminate: true
}), _return4)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'funcFor', (_funcFor = {}, (0, _defineProperty2["default"])(_funcFor, 'u', {
  state: 'func2'
}), (0, _defineProperty2["default"])(_funcFor, 'o', {
  state: 'for2'
}), (0, _defineProperty2["default"])(_funcFor, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_funcFor, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _funcFor)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'func2', (_func = {}, (0, _defineProperty2["default"])(_func, 'n', {
  state: 'func3'
}), (0, _defineProperty2["default"])(_func, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_func, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _func)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'func3', (_func2 = {}, (0, _defineProperty2["default"])(_func2, 'c', {
  state: 'func4'
}), (0, _defineProperty2["default"])(_func2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_func2, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _func2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'func4', (_func3 = {}, (0, _defineProperty2["default"])(_func3, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_func3, _Lexer.Else, {
  state: 'function',
  isTerminate: true
}), _func3)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'beginBreak', (_beginBreak = {}, (0, _defineProperty2["default"])(_beginBreak, 'e', {
  state: 'begin2'
}), (0, _defineProperty2["default"])(_beginBreak, 'r', {
  state: 'break2'
}), (0, _defineProperty2["default"])(_beginBreak, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_beginBreak, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _beginBreak)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'begin2', (_begin = {}, (0, _defineProperty2["default"])(_begin, 'g', {
  state: 'begin3'
}), (0, _defineProperty2["default"])(_begin, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_begin, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _begin)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'begin3', (_begin2 = {}, (0, _defineProperty2["default"])(_begin2, 'i', {
  state: 'begin4'
}), (0, _defineProperty2["default"])(_begin2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_begin2, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _begin2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'begin4', (_begin3 = {}, (0, _defineProperty2["default"])(_begin3, 'n', {
  state: 'begin5'
}), (0, _defineProperty2["default"])(_begin3, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_begin3, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _begin3)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'begin5', (_begin4 = {}, (0, _defineProperty2["default"])(_begin4, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_begin4, _Lexer.Else, {
  state: 'begin',
  isTerminate: true
}), _begin4)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'break2', (_break = {}, (0, _defineProperty2["default"])(_break, 'e', {
  state: 'break3'
}), (0, _defineProperty2["default"])(_break, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_break, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _break)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'break3', (_break2 = {}, (0, _defineProperty2["default"])(_break2, 'a', {
  state: 'break4'
}), (0, _defineProperty2["default"])(_break2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_break2, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _break2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'break4', (_break3 = {}, (0, _defineProperty2["default"])(_break3, 'k', {
  state: 'break5'
}), (0, _defineProperty2["default"])(_break3, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_break3, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _break3)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'break5', (_break4 = {}, (0, _defineProperty2["default"])(_break4, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_break4, _Lexer.Else, {
  state: 'break',
  isTerminate: true
}), _break4)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'continue1', (_continue = {}, (0, _defineProperty2["default"])(_continue, 'o', {
  state: 'continue2'
}), (0, _defineProperty2["default"])(_continue, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_continue, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _continue)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'continue2', (_continue2 = {}, (0, _defineProperty2["default"])(_continue2, 'n', {
  state: 'continue3'
}), (0, _defineProperty2["default"])(_continue2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_continue2, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _continue2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'continue3', (_continue3 = {}, (0, _defineProperty2["default"])(_continue3, 't', {
  state: 'continue4'
}), (0, _defineProperty2["default"])(_continue3, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_continue3, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _continue3)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'continue4', (_continue4 = {}, (0, _defineProperty2["default"])(_continue4, 'i', {
  state: 'continue5'
}), (0, _defineProperty2["default"])(_continue4, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_continue4, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _continue4)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'continue5', (_continue5 = {}, (0, _defineProperty2["default"])(_continue5, 'n', {
  state: 'continue6'
}), (0, _defineProperty2["default"])(_continue5, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_continue5, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _continue5)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'continue6', (_continue6 = {}, (0, _defineProperty2["default"])(_continue6, 'u', {
  state: 'continue7'
}), (0, _defineProperty2["default"])(_continue6, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_continue6, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _continue6)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'continue7', (_continue7 = {}, (0, _defineProperty2["default"])(_continue7, 'e', {
  state: 'continue8'
}), (0, _defineProperty2["default"])(_continue7, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_continue7, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _continue7)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'continue8', (_continue8 = {}, (0, _defineProperty2["default"])(_continue8, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_continue8, _Lexer.Else, {
  state: 'continue',
  isTerminate: true
}), _continue8)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'endElifElse1', (_endElifElse = {}, (0, _defineProperty2["default"])(_endElifElse, 'n', {
  state: 'end2'
}), (0, _defineProperty2["default"])(_endElifElse, 'l', {
  state: 'elifElse2'
}), (0, _defineProperty2["default"])(_endElifElse, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_endElifElse, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _endElifElse)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'end2', (_end = {}, (0, _defineProperty2["default"])(_end, 'd', {
  state: 'end3'
}), (0, _defineProperty2["default"])(_end, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_end, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _end)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'end3', (_end2 = {}, (0, _defineProperty2["default"])(_end2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_end2, _Lexer.Else, {
  state: 'end',
  isTerminate: true
}), _end2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'elifElse2', (_elifElse = {}, (0, _defineProperty2["default"])(_elifElse, 'i', {
  state: 'elif3'
}), (0, _defineProperty2["default"])(_elifElse, 's', {
  state: 'else3'
}), (0, _defineProperty2["default"])(_elifElse, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_elifElse, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _elifElse)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'elif3', (_elif = {}, (0, _defineProperty2["default"])(_elif, 'f', {
  state: 'elif4'
}), (0, _defineProperty2["default"])(_elif, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_elif, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _elif)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'elif4', (_elif2 = {}, (0, _defineProperty2["default"])(_elif2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_elif2, _Lexer.Else, {
  state: 'elif',
  isTerminate: true
}), _elif2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'else3', (_else = {}, (0, _defineProperty2["default"])(_else, 'e', {
  state: 'else4'
}), (0, _defineProperty2["default"])(_else, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_else, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _else)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'else4', (_else2 = {}, (0, _defineProperty2["default"])(_else2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_else2, _Lexer.Else, {
  state: 'else',
  isTerminate: true
}), _else2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'if1', (_if = {}, (0, _defineProperty2["default"])(_if, 'f', {
  state: 'if2'
}), (0, _defineProperty2["default"])(_if, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_if, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _if)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'if2', (_if2 = {}, (0, _defineProperty2["default"])(_if2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_if2, _Lexer.Else, {
  state: 'if',
  isTerminate: true
}), _if2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'or1', (_or = {}, (0, _defineProperty2["default"])(_or, 'r', {
  state: 'or2'
}), (0, _defineProperty2["default"])(_or, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_or, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _or)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'or2', (_or2 = {}, (0, _defineProperty2["default"])(_or2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_or2, _Lexer.Else, {
  state: 'or',
  isTerminate: true
}), _or2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'and1', (_and = {}, (0, _defineProperty2["default"])(_and, 'n', {
  state: 'and2'
}), (0, _defineProperty2["default"])(_and, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_and, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _and)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'and2', (_and2 = {}, (0, _defineProperty2["default"])(_and2, 'd', {
  state: 'and3'
}), (0, _defineProperty2["default"])(_and2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_and2, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _and2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'and3', (_and3 = {}, (0, _defineProperty2["default"])(_and3, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_and3, _Lexer.Else, {
  state: 'and',
  isTerminate: true
}), _and3)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'notNull1', (_notNull = {}, (0, _defineProperty2["default"])(_notNull, 'o', {
  state: 'not2'
}), (0, _defineProperty2["default"])(_notNull, 'u', {
  state: 'null2'
}), (0, _defineProperty2["default"])(_notNull, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_notNull, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _notNull)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'not2', (_not = {}, (0, _defineProperty2["default"])(_not, 't', {
  state: 'not3'
}), (0, _defineProperty2["default"])(_not, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_not, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _not)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'not3', (_not2 = {}, (0, _defineProperty2["default"])(_not2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_not2, '=', {
  state: 'notEqual'
}), (0, _defineProperty2["default"])(_not2, _Lexer.Else, {
  state: 'not',
  isTerminate: true
}), _not2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'notEqual', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'notEqual',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'null2', (_null = {}, (0, _defineProperty2["default"])(_null, 'l', {
  state: 'null3'
}), (0, _defineProperty2["default"])(_null, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_null, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _null)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'null3', (_null2 = {}, (0, _defineProperty2["default"])(_null2, 'l', {
  state: 'null4'
}), (0, _defineProperty2["default"])(_null2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_null2, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _null2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'null4', (_null3 = {}, (0, _defineProperty2["default"])(_null3, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_null3, _Lexer.Else, {
  state: 'literal',
  isTerminate: true
}), _null3)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'pass1', (_pass = {}, (0, _defineProperty2["default"])(_pass, 'a', {
  state: 'pass2'
}), (0, _defineProperty2["default"])(_pass, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_pass, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _pass)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'pass2', (_pass2 = {}, (0, _defineProperty2["default"])(_pass2, 's', {
  state: 'pass3'
}), (0, _defineProperty2["default"])(_pass2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_pass2, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _pass2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'pass3', (_pass3 = {}, (0, _defineProperty2["default"])(_pass3, 's', {
  state: 'pass4'
}), (0, _defineProperty2["default"])(_pass3, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_pass3, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _pass3)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'pass4', (_pass4 = {}, (0, _defineProperty2["default"])(_pass4, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_pass4, _Lexer.Else, {
  state: 'pass',
  isTerminate: true
}), _pass4)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'for2', (_for = {}, (0, _defineProperty2["default"])(_for, 'r', {
  state: 'for3'
}), (0, _defineProperty2["default"])(_for, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_for, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _for)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'for3', (_for2 = {}, (0, _defineProperty2["default"])(_for2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_for2, _Lexer.Else, {
  state: 'for',
  isTerminate: true
}), _for2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'True1', (_True = {}, (0, _defineProperty2["default"])(_True, 'r', {
  state: 'True2'
}), (0, _defineProperty2["default"])(_True, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_True, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _True)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'True2', (_True2 = {}, (0, _defineProperty2["default"])(_True2, 'u', {
  state: 'True3'
}), (0, _defineProperty2["default"])(_True2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_True2, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _True2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'True3', (_True3 = {}, (0, _defineProperty2["default"])(_True3, 'e', {
  state: 'True4'
}), (0, _defineProperty2["default"])(_True3, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_True3, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _True3)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'True4', (_True4 = {}, (0, _defineProperty2["default"])(_True4, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_True4, _Lexer.Else, {
  state: 'literal',
  isTerminate: true
}), _True4)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'False1', (_False = {}, (0, _defineProperty2["default"])(_False, 'a', {
  state: 'False2'
}), (0, _defineProperty2["default"])(_False, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_False, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _False)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'False2', (_False2 = {}, (0, _defineProperty2["default"])(_False2, 'l', {
  state: 'False3'
}), (0, _defineProperty2["default"])(_False2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_False2, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _False2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'False3', (_False3 = {}, (0, _defineProperty2["default"])(_False3, 's', {
  state: 'False4'
}), (0, _defineProperty2["default"])(_False3, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_False3, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _False3)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'False4', (_False4 = {}, (0, _defineProperty2["default"])(_False4, 'e', {
  state: 'False5'
}), (0, _defineProperty2["default"])(_False4, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_False4, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _False4)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'False5', (_False5 = {}, (0, _defineProperty2["default"])(_False5, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_False5, _Lexer.Else, {
  state: 'literal',
  isTerminate: true
}), _False5)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'while1', (_while = {}, (0, _defineProperty2["default"])(_while, 'h', {
  state: 'while2'
}), (0, _defineProperty2["default"])(_while, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_while, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _while)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'while2', (_while2 = {}, (0, _defineProperty2["default"])(_while2, 'i', {
  state: 'while3'
}), (0, _defineProperty2["default"])(_while2, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_while2, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _while2)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'while3', (_while3 = {}, (0, _defineProperty2["default"])(_while3, 'l', {
  state: 'while4'
}), (0, _defineProperty2["default"])(_while3, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_while3, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _while3)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'while4', (_while4 = {}, (0, _defineProperty2["default"])(_while4, 'e', {
  state: 'while5'
}), (0, _defineProperty2["default"])(_while4, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_while4, _Lexer.Else, {
  state: 'identifier',
  isTerminate: true
}), _while4)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'while5', (_while5 = {}, (0, _defineProperty2["default"])(_while5, _Lexer.chars + _Lexer.number, {
  state: 'chars'
}), (0, _defineProperty2["default"])(_while5, _Lexer.Else, {
  state: 'while',
  isTerminate: true
}), _while5)), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'quotation', (0, _defineProperty2["default"])({
  '"': {
    state: 'string'
  }
}, _Lexer.Else, {
  state: 'quotation'
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'string', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'literal',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'leftBracket', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'leftBracket',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'rightBracket', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'rightBracket',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'plus', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'plus',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'minus', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'minus',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'multiply', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'multiply',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'divide', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'divide',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'surplus', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'surplus',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'equalWrite', (0, _defineProperty2["default"])({
  '=': {
    state: 'congruent'
  }
}, _Lexer.Else, {
  state: 'equal',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'congruent', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'congruent',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'semicolon', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'semicolon',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'colon', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'colon',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'comma', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'comma',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'leftBrace', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'leftBrace',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'rightBrace', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'rightBrace',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'pound', {
  '>': {
    state: 'comment'
  }
}), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'comment', (0, _defineProperty2["default"])({
  '<': {
    state: 'commentReady'
  }
}, _Lexer.Else, {
  state: 'comment'
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'commentReady', (0, _defineProperty2["default"])({
  '#': {
    state: _Lexer.Initialize
  }
}, _Lexer.Else, {
  state: 'comment'
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'greaterWrite', (0, _defineProperty2["default"])({
  '=': {
    state: 'greaterEqualWrite'
  }
}, _Lexer.Else, {
  state: 'greater',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'greaterEqualWrite', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'greaterEqual',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'lessWrite', (0, _defineProperty2["default"])({
  '=': {
    state: 'lessEqualWrite'
  }
}, _Lexer.Else, {
  state: 'less',
  isTerminate: true
})), (0, _defineProperty2["default"])(_Initialize$chars$zer, 'lessEqualWrite', (0, _defineProperty2["default"])({}, _Lexer.Else, {
  state: 'lessEqual',
  isTerminate: true
})), _Initialize$chars$zer);
exports["default"] = _default;