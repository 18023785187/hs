import Scanner from "../Scanner"
import error from '../error'

export const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
export const number = '0123456789'
export const symbol = `\~\`\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\[\]\}\\\|\;\:\'\"\,\<\.\>\/\?`
export const blank = ' \n\t\r'
export const space = ' \t'
export const line = '\n\r'

// 起始态
export const Initialize = '<initialize>'
// 兜底命中
export const Else = '<else>'

class Token {
  /**
   * location: {
   *  linePos,
   *  line,
   *  start,
   *  end
   * } 
   */
  constructor(source, type, value, location) {
    this.source = source
    this.type = type
    this.value = value
    this.location = location
  }
}

export default class Lexel {
  constructor(table) {
    /**
     * table {
     *  [state]: states
     * }
     * 
     * states {
     *  [matcher]: { state?, isTerminate?, error? }
     * }
     */
    this.table = table
  }

  tokenize(sentence) {
    const lineSentence = sentence.split(/[\n\r]/g)
    const tokens = []

    const table = this.table
    const scanner = new Scanner(sentence + ' ')
    let char = ''
    let fragment = ''
    let state = Initialize
    let initPos = scanner.pos
    let curLine = 1
    let curLinePos = 1
    let startLine = curLine
    let startLinePos = curLinePos
    while (char = scanner.read()) {
      // 新行
      if (line.indexOf(char) !== -1) {
        curLine++
        curLinePos = 0
      }

      const states = table[state]

      let isMatch = false
      for (const matcher in states) {
        if (matcher.indexOf(char) !== -1 || matcher === Else) {
          isMatch = true
          const match = states[matcher]
          if (match.error) {
            error(SyntaxError, match.error(char), lineSentence[curLine - 1], {
              linePos: startLinePos, line: curLine, start: initPos, end: scanner.pos - 1
            })
          }

          if (state === Initialize) {
            startLine = curLine
            startLinePos = curLinePos
          }

          state = match.state

          if (state === Initialize) {
            initPos = scanner.pos
            fragment = ''
          } else if (match.isTerminate) { // 添加 token
            if (line.indexOf(char) !== -1) {
              curLine--
            }
            curLinePos--

            const source = lineSentence[curLine - 1]
            const type = state
            const value = fragment
            const location = {}
            location.linePos = startLinePos
            location.line = startLine
            location.start = initPos
            location.end = scanner.pos - 2

            tokens.push(
              new Token(source, type, value, location)
            )

            fragment = ''
            state = Initialize

            scanner.back()

            initPos = scanner.pos
          } else {
            fragment += char
          }

          if (!table[state]) {
            error(SyntaxError, `Unexpected token '${char}'`, lineSentence[curLine - 1], {
              linePos: startLinePos, line: curLine, start: initPos, end: scanner.pos - 1
            })
          }

          break
        }
      }
      if (!isMatch) {
        error(SyntaxError, `Invalid or unexpected token`, lineSentence[curLine - 1], {
          linePos: startLinePos, line: curLine, start: initPos, end: scanner.pos - 1
        })
      }

      curLinePos++
    }

    if (state !== Initialize) {
      error(SyntaxError, 'Status not ended', lineSentence[curLine - 1], {
        linePos: startLinePos, line: curLine, start: initPos, end: scanner.pos - 1
      })
    }
    tokens.push(
      new Token(tokens[tokens.length - 1]?.source, '$', tokens[tokens.length - 1]?.value, tokens[tokens.length - 1]?.location)
    )

    return tokens
  }

  toString(tokens) {
    let tokenString = ''

    tokens.forEach(({ type }) => {
      tokenString += type + ' '
    })

    return tokenString.slice(0, -1)
  }
}
