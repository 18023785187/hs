export default class Scanner {
  constructor(stream) {
    this.stream = stream
    this.pos = 0
  }

  isEnd() {
    return this.pos >= this.stream.length
  }

  peek() {
    if(!this.isEnd()) return this.stream[this.pos]
  }

  read() {
    if(!this.isEnd()) return this.stream[this.pos++]
  }

  back() {
    if(!this.isEnd()) return this.stream[--this.pos]
  }
}
