import {
  chars, number, blank, Initialize, Else
} from './Lexer'

export default {
  [Initialize]: {
    ['d']: { state: 'def1' },
    ['r']: { state: 'readOrRetrun1' },
    ['f']: { state: 'funcFor' },
    ['b']: { state: 'beginBreak' },
    ['e']: { state: 'endElifElse1' },
    ['i']: { state: 'if1' },
    ['o']: { state: 'or1' },
    ['a']: { state: 'and1' },
    ['n']: { state: 'notNull1' },
    ['p']: { state: 'pass1' },
    ['w']: { state: 'while1' },
    ['c']: { state: 'continue1' },
    ['T']: { state: 'True1' },
    ['F']: { state: 'False1' },
    [chars]: { state: 'chars' },
    ['0']: { state: 'zero' },
    [number]: { state: 'number' },
    ['"']: { state: 'quotation' },
    ['(']: { state: 'leftBracket' },
    [')']: { state: 'rightBracket' },
    ['+']: { state: 'plus' },
    ['-']: { state: 'minus' },
    ['*']: { state: 'multiply' },
    ['/']: { state: 'divide' },
    ['%']: { state: 'surplus' },
    ['=']: { state: 'equalWrite' },
    [';']: { state: 'semicolon' },
    ['#']: { state: 'pound' },
    [':']: { state: 'colon' },
    [',']: { state: 'comma' },
    ['>']: { state: 'greaterWrite' },
    ['<']: { state: 'lessWrite' },
    ['{']: { state: 'leftBrace' },
    ['}']: { state: 'rightBrace' },
    [blank]: { state: Initialize }
  },
  ['chars']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['zero']: {
    [number]: { error: () => 'Numbers cannot contain leading zeros' },
    ['.']: { state: 'decimals' },
    [Else]: { state: 'literal', isTerminate: true }
  },
  ['number']: {
    [number]: { state: 'number' },
    ['.']: { state: 'decimals' },
    [Else]: { state: 'literal', isTerminate: true }
  },
  ['decimals']: {
    [number]: { state: 'decimals' },
    ['.']: { error: (char) => `Unexpected token '${char}'` },
    [Else]: { state: 'literal', isTerminate: true }
  },
  ['def1']: {
    ['e']: { state: 'def2' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['def2']: {
    ['f']: { state: 'def3' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['def3']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'defined', isTerminate: true }
  },
  ['readOrRetrun1']: {
    ['e']: { state: 'readOrRetrun2' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['readOrRetrun2']: {
    ['a']: { state: 'read3' },
    ['t']: { state: 'return3' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['read3']: {
    ['d']: { state: 'read4' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['read4']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'defined', isTerminate: true }
  },
  ['return3']: {
    ['u']: { state: 'return4' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['return4']: {
    ['r']: { state: 'return5' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['return5']: {
    ['n']: { state: 'return6' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['return6']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'return', isTerminate: true }
  },
  ['funcFor']: {
    ['u']: { state: 'func2' },
    ['o']: { state: 'for2' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['func2']: {
    ['n']: { state: 'func3' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['func3']: {
    ['c']: { state: 'func4' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['func4']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'function', isTerminate: true }
  },
  ['beginBreak']: {
    ['e']: { state: 'begin2' },
    ['r']: { state: 'break2' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['begin2']: {
    ['g']: { state: 'begin3' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['begin3']: {
    ['i']: { state: 'begin4' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['begin4']: {
    ['n']: { state: 'begin5' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['begin5']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'begin', isTerminate: true }
  },
  ['break2']: {
    ['e']: { state: 'break3' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['break3']: {
    ['a']: { state: 'break4' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['break4']: {
    ['k']: { state: 'break5' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['break5']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'break', isTerminate: true }
  },
  ['continue1']: {
    ['o']: { state: 'continue2' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['continue2']: {
    ['n']: { state: 'continue3' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['continue3']: {
    ['t']: { state: 'continue4' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['continue4']: {
    ['i']: { state: 'continue5' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['continue5']: {
    ['n']: { state: 'continue6' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['continue6']: {
    ['u']: { state: 'continue7' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['continue7']: {
    ['e']: { state: 'continue8' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['continue8']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'continue', isTerminate: true }
  },
  ['endElifElse1']: {
    ['n']: { state: 'end2' },
    ['l']: { state: 'elifElse2' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['end2']: {
    ['d']: { state: 'end3' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['end3']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'end', isTerminate: true }
  },
  ['elifElse2']: {
    ['i']: { state: 'elif3' },
    ['s']: { state: 'else3' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['elif3']: {
    ['f']: { state: 'elif4' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['elif4']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'elif', isTerminate: true }
  },
  ['else3']: {
    ['e']: { state: 'else4' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['else4']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'else', isTerminate: true }
  },
  ['if1']: {
    ['f']: { state: 'if2' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['if2']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'if', isTerminate: true }
  },
  ['or1']: {
    ['r']: { state: 'or2' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['or2']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'or', isTerminate: true }
  },
  ['and1']: {
    ['n']: { state: 'and2' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['and2']: {
    ['d']: { state: 'and3' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['and3']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'and', isTerminate: true }
  },
  ['notNull1']: {
    ['o']: { state: 'not2' },
    ['u']: { state: 'null2' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['not2']: {
    ['t']: { state: 'not3' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['not3']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'not', isTerminate: true }
  },
  ['null2']: {
    ['l']: { state: 'null3' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['null3']: {
    ['l']: { state: 'null4' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['null4']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'literal', isTerminate: true }
  },
  ['pass1']: {
    ['a']: { state: 'pass2' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['pass2']: {
    ['s']: { state: 'pass3' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['pass3']: {
    ['s']: { state: 'pass4' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['pass4']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'pass', isTerminate: true }
  },
  ['for2']: {
    ['r']: { state: 'for3' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['for3']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'for', isTerminate: true }
  },
  ['True1']: {
    ['r']: { state: 'True2' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['True2']: {
    ['u']: { state: 'True3' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['True3']: {
    ['e']: { state: 'True4' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['True4']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'literal', isTerminate: true }
  },
  ['False1']: {
    ['a']: { state: 'False2' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['False2']: {
    ['l']: { state: 'False3' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['False3']: {
    ['s']: { state: 'False4' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['False4']: {
    ['e']: { state: 'False5' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['False5']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'literal', isTerminate: true }
  },
  ['while1']: {
    ['h']: { state: 'while2' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['while2']: {
    ['i']: { state: 'while3' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['while3']: {
    ['l']: { state: 'while4' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['while4']: {
    ['e']: { state: 'while5' },
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'identifier', isTerminate: true }
  },
  ['while5']: {
    [chars + number]: { state: 'chars' },
    [Else]: { state: 'while', isTerminate: true }
  },
  ['quotation']: {
    '"': { state: 'string' },
    [Else]: { state: 'quotation' }
  },
  ['string']: {
    [Else]: { state: 'literal', isTerminate: true }
  },
  ['leftBracket']: {
    [Else]: { state: 'leftBracket', isTerminate: true }
  },
  ['rightBracket']: {
    [Else]: { state: 'rightBracket', isTerminate: true }
  },
  ['plus']: {
    [Else]: { state: 'plus', isTerminate: true }
  },
  ['minus']: {
    [Else]: { state: 'minus', isTerminate: true }
  },
  ['multiply']: {
    [Else]: { state: 'multiply', isTerminate: true }
  },
  ['divide']: {
    [Else]: { state: 'divide', isTerminate: true }
  },
  ['surplus']: {
    [Else]: { state: 'surplus', isTerminate: true }
  },
  ['equalWrite']: {
    '=': { state: 'congruent' },
    [Else]: { state: 'equal', isTerminate: true }
  },
  ['congruent']: {
    [Else]: { state: 'congruent', isTerminate: true }
  },
  ['semicolon']: {
    [Else]: { state: 'semicolon', isTerminate: true }
  },
  ['colon']: {
    [Else]: { state: 'colon', isTerminate: true }
  },
  ['comma']: {
    [Else]: { state: 'comma', isTerminate: true }
  },
  ['leftBrace']: {
    [Else]: { state: 'leftBrace', isTerminate: true }
  },
  ['rightBrace']: {
    [Else]: { state: 'rightBrace', isTerminate: true }
  },
  ['pound']: {
    '>': { state: 'comment' }
  },
  ['comment']: {
    '<': { state: 'commentReady' },
    [Else]: { state: 'comment' }
  },
  ['commentReady']: {
    '#': { state: Initialize },
    [Else]: { state: 'comment' }
  },
  ['greaterWrite']: {
    '=': { state: 'greaterEqualWrite' },
    [Else]: { state: 'greater', isTerminate: true }
  },
  ['greaterEqualWrite']: {
    [Else]: { state: 'greaterEqual', isTerminate: true }
  },
  ['lessWrite']: {
    '=': { state: 'lessEqualWrite' },
    [Else]: { state: 'less', isTerminate: true }
  },
  ['lessEqualWrite']: {
    [Else]: { state: 'lessEqual', isTerminate: true }
  },
}
