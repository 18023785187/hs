import lexer from '../src/lexer'

describe('test lexer', () => {
  test('tokenize', () => {
    const sentence1 = `
      def a = 1;
      read b  = 2;
      func sum(a, b):
      begin
        return a + b;
      end;
      sum(a, b);
    `

    const result1 = 'defined identifier equal literal semicolon defined identifier equal literal semicolon function identifier leftBracket identifier comma identifier rightBracket colon begin return identifier plus identifier semicolon end semicolon identifier leftBracket identifier comma identifier rightBracket semicolon $'

    expect(lexer.toString(
      lexer.tokenize(sentence1)
    )).toBe(result1)

    const sentence2 = `
      if(0.0):
      begin  end;
      elif(1):
      begin end;
      else:
      begin end;
    `

    const result2 = 'if leftBracket literal rightBracket colon begin end semicolon elif leftBracket literal rightBracket colon begin end semicolon else colon begin end semicolon $'

    expect(lexer.toString(
      lexer.tokenize(sentence2)
    )).toBe(result2)

    const sentence3 = `
      def str = "";
    `

    const result3 = 'defined identifier equal literal semicolon $'

    expect(lexer.toString(
      lexer.tokenize(sentence3)
    )).toBe(result3)

    const sentence4 = `
      #> comment <#+a=3;
    `

    const result4 = 'plus identifier equal literal semicolon $'

    expect(lexer.toString(
      lexer.tokenize(sentence4)
    )).toBe(result4)

    const sentence5 = `0012`

    expect(() => lexer.tokenize(sentence5)).toThrow(SyntaxError)

    const sentence6 = `0..012`

    expect(() => lexer.tokenize(sentence6)).toThrow(SyntaxError)

    const sentence7 = `if~`

    expect(() => lexer.tokenize(sentence7)).toThrow(SyntaxError)

    const sentence8 = `"2313`

    expect(() => lexer.tokenize(sentence8)).toThrow(SyntaxError)
  })
})