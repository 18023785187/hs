
export const packageType = {
  Literal: 'Literal',
  Function: 'Function',
  SystemFunction: 'SystemFunction',
  Array: 'Array'
};

class System {
  __system__ = true;
}

export class Literal extends System {
  __type__ = packageType['Literal'];
  constructor(isRead, value) {
    super();
    this.isRead = isRead;
    this.value = value;
  }
}

export class ArrayLiteral extends System {
  __type__ = packageType['Array'];
  constructor(array) {
    super();
    this.array = array;
  }

  append = new SystemFunction('append', (args) => {
    this.array.push(...args.map(arg => assign(arg)))
    return this
  })

  shift = new SystemFunction('shift', (args) => {
    return this.array.shift()
  })

  pop = new SystemFunction('pop', () => {
    return this.array.pop()
  })

  reverse = new SystemFunction('reverse', () => {
    this.array.reverse()
    return this
  })

  copy = new SystemFunction('copy', () => {
    return new ArrayLiteral([...this.array])
  })

  concat = new SystemFunction('concat', (args) => {
    const newArray = [...this.array]
    args.forEach(arg => {
      let arr
      if ((arr = getValue(arg))?.__type__ === packageType['Array']) {
        arr.array.length && newArray.push(...arr.array.map(item => assign(item)))
      } else if((arg)?.__type__ === packageType['Array']) {
        arg.array.length && newArray.push(...arg.array.map(item => assign(item)))
      } else {
        newArray.push(assign(arg))
      }
    })
    return new ArrayLiteral(newArray)
  })

  slice = new SystemFunction('slice', (args) => {
    return new ArrayLiteral([...this.array.slice(...args.map(arg => getValue(arg)))])
  })
}

export class Function extends System {
  __type__ = packageType['Function'];
  constructor(name, params, body) {
    super();
    this.name = name;
    this.params = params.map(param => param.name);
    this.length = params.length;
    this.body = body;
  }
}

export class SystemFunction extends System {
  __type__ = packageType['SystemFunction'];
  constructor(name, fn) {
    super();
    this.name = name;
    this.fn = fn;
  }
}

export function assign(pack) {
  if (!pack?.__type__) return pack
  if (pack.__type__ === packageType['Literal']) return new Literal(false, pack.value)
  else return pack
}

export function getValue(pack) {
  if (Array.isArray(pack)) {
    const [array, index] = pack
    return array.array[index]
  }
  if (!pack?.__type__) return pack;
  if (pack.__type__ === packageType['Literal']) {
    if (pack.value?.__type__ === packageType['Function']) {
      return pack.value;
    } else {
      return pack.value;
    }
  } else if (pack.__type__ === packageType['Function']) {
    return pack;
  }
}

export function toString(pack) {
  if (Array.isArray(pack)) {
    const [array, index] = pack
    return toString(array.array[index])
  }
  if (!pack?.__type__) return basicType(pack);
  switch (pack.__type__) {
    case packageType['Literal']: return toString(pack.value);
    case packageType['Function']: return `\x1b[36;2m${`<Function ${pack.name}>`}\x1b[0m`;
    case packageType['SystemFunction']: return `\x1b[36;2m${`<SystemFunction ${pack.name}>`}\x1b[0m`;
    case packageType['Array']: return `{${pack.array.map(item => ' ' + toString(item))} }`;
    default: return basicType(pack.value);
  }

  function basicType(value) {
    switch (value) {
      case true: return `\x1b[32;2mTrue\x1b[0m`;
      case false: return `\x1b[31;2mFalse\x1b[0m`;
      case null: return `\x1b[30;2mnull\x1b[0m`;
      case undefined: return `\x1b[30;2mnull\x1b[0m`;
      default:
        if (typeof value === 'number') return `\x1b[33;2m${value}\x1b[0m`;
        return value;
    }
  }
}

export function getType(pack) {
  if (!pack?.__type__) return basicType(pack);
  switch (pack.__type__) {
    case packageType['Literal']: return getType(pack.value);
    case packageType['Function']:
    case packageType['SystemFunction']: return `<class function>`;
    case packageType['Array']: return `<class array>`;
    default: return basicType(pack.value);
  }

  function basicType(value) {
    switch (value) {
      case true: return `<class boolean>`;
      case false: return `<class boolean>`;
      case null: return `<class null>`;
      case undefined: return `<class null>`;
      default:
        if (typeof value === 'number') return `<class number>`;
        if (typeof value === 'string') return `<class string>`;
    }
  }
}
