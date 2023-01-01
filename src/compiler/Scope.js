export default class Scope {
  constructor(parent) {
    this.parent = parent
    this.scope = new Map()
  }

  has(identifier) {
    return this.scope.has(identifier)
  }

  get(identifier) {
    let cur = this
    while (cur && !cur.has(identifier)) {
      cur = cur.parent
    }

    if (cur) {
      return cur.scope.get(identifier)
    }
  }

  set(identifier, value) {
    const scope = this.get(identifier)

    if (scope) scope.scope.set(identifier, value)
    else this.scope.set(identifier, value)
  }

  setCur(identifier, value) {
    this.scope.set(identifier, value)
  }

  clear() {
    this.scope.clear()
  }
}