import { EMPTY_CHAIN, $ } from 'll1-grammar'
import Scanner from "../Scanner"
import { createRoot } from './constructor'
import error from '../error'

export default class Parser {
  constructor(startSymbol, predictSet, constructor) {
    this.startSymbol = startSymbol
    this.predictSet = predictSet
    this.constructor = constructor
  }

  parse(tokens) {
    const blocks = []
    const astList = []
    const stack = []
    blocks.push(astList)
    stack.push(this.startSymbol)

    const scanner = new Scanner(tokens)

    let token
    while (stack.length || !scanner.isEnd()) {
      if (!stack.length) {
        token = scanner.peek()
        if (token.type !== $)
          error(SyntaxError, `Unexpected token '${token.value}'`, token.source, token.location)
        else
          break
      }

      token = scanner.peek()
      const terminalSymbol = token.type
      // 抛出意外的终结符错误
      if (!this.predictSet.has(terminalSymbol)) {
        error(SyntaxError, `Unexpected token '${token.value}'`, token.source, token.location)
      }

      const expressionMap = this.predictSet.get(terminalSymbol)
      const left = stack.pop()
      if (left[0] === $) {
        this.constructor[left]?.(blocks[blocks.length - 1], blocks)
        continue
      } else if (left === token.type) {
        const child = this.constructor[`_${token.type}`]?.(token)
        if (child) blocks[blocks.length - 1].push(child)
        scanner.read()
        continue
      }
      // 该终结符找不到对应产生式，说明文法不适用当前表达式，抛出语法错误
      if (!expressionMap.has(left)) {
        error(SyntaxError, `Unexpected token '${token.value}'`, token.source, token.location)
      }

      const right = expressionMap.get(left)
      if (right[0] === EMPTY_CHAIN) continue
      for (let i = right.length - 1; i >= 0; --i) {
        if (right[i] === EMPTY_CHAIN) continue
        else stack.push(right[i])
      }
    }

    const location = {
      linePos: 1,
      line: 1,
      start: 0,
      end: astList.length ? astList[astList.length - 1].location.end : 0
    }
    return createRoot(astList, location)
  }
}
