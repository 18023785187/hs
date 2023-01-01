
export const packageType = {
  Literal: 'Literal',
  Function: 'Function',
  SystemFunction: 'SystemFunction'
}

class System {
  __system__ = true
}

export class Literal extends System {
  __type__ = packageType['Literal']
  constructor(isRead, value) {
    super()
    this.isRead = isRead
    this.value = value
  }
}

export class Function extends System {
  __type__ = packageType['Function']
  constructor(name, params, body, scope) {
    super()
    this.name = name
    this.params = params.map(param => param.name)
    this.length = params.length
    this.body = body
    this.scope = scope
  }
}

export class SystemFunction extends System {
  __type__ = packageType['SystemFunction']
  constructor(name, fn) {
    super()
    this.name = name
    this.fn = fn
  }
}

export function getValue(pack) {
  if (!pack?.__type__) return pack
  if (pack.__type__ === packageType['Literal']) {
    if (pack.value?.__type__ === packageType['Function']) {
      return ''
    } else {
      return pack.value
    }
  } else if (pack.__type__ === packageType['Function']) {
    return ''
  }
}

export function toString(pack) {
  if (!pack?.__type__) return basicType(pack)
  if (pack.__type__ === packageType['Literal']) {
    if ([packageType['Function']].includes(pack.value?.__type__)) {
      return `\x1b[36;2m${`<Function ${pack.value.name}>`}\x1b[0m`
    } else if ([packageType['SystemFunction']].includes(pack.value?.__type__)) {
      return `\x1b[36;2m${`<SystemFunction ${pack.value.name}>`}\x1b[0m`
    } else {
      return basicType(pack.value)
    }
  } else if (pack.__type__ === packageType['Function']) {
    return `\x1b[36;2m${`<Function ${pack.name}>`}\x1b[0m`
  } else if (pack.__type__ === packageType['SystemFunction']) {
    return `\x1b[36;2m${`<SystemFunction ${pack.name}>`}\x1b[0m`
  }

  function basicType(value) {
    switch (value) {
      case true: return `\x1b[32;2mTrue\x1b[0m`
      case false: return `\x1b[31;2mFalse\x1b[0m`
      case null: return `\x1b[30;2mnull\x1b[0m`
      case undefined: return `\x1b[30;2mnull\x1b[0m`
      default: return value
    }
  }
}

export function getType(pack) {
  if (!pack?.__type__) return basicType(pack)
  if (pack.__type__ === packageType['Literal']) {
    if ([packageType['Function'], packageType['SystemFunction']].includes(pack.value?.__type__)) {
      return `<class function>`
    } else {
      return basicType(pack.value)
    }
  } else if ([packageType['Function'], packageType['SystemFunction']].includes(pack.__type__)) {
    return `<class function>`
  }

  function basicType(value) {
    switch (value) {
      case true: return `<class boolean>`
      case false: return `<class boolean>`
      case null: return `<class null>`
      case undefined: return `<class null>`
      default:
        if(typeof value === 'number') return `<class number>`
        if(typeof value === 'string') return `<class string>`
    }
  }
}
