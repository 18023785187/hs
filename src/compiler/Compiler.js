import lexer from '../lexer';
import parser, { AstType } from '../parser';
import Scope from './Scope';
import { packageType, Literal, ArrayLiteral, Function, SystemFunction, getValue, toString, getType } from './package';
import error from '../error';

export default class Compiler {
  constructor() {
    this.lexer = lexer;
    this.parser = parser;
    this.AstType = AstType;
  }

  getGlobalScope() {
    const globalScope = new Scope();

    globalScope.set('print', new SystemFunction('print', (args, node) => {
      console.log(...args.map(arg => toString(arg)));
    }));
    globalScope.set('type', new SystemFunction('type', (args, node) => {
      const value = unlock(args[0]);
      return `\x1b[35;2m${getType(value)}\x1b[0m`;
    }));
    globalScope.set('eval', new SystemFunction('eval', (args, node) => {
      const code = args[0];
      if (getType(code) !== '<class string>')
        error(TypeError, `<eval>: param is not string`, node.source, node.location);
      return this.compile(code);
    }));
    globalScope.set('timer', new SystemFunction('timer', (args, node) => {
      const fn = args[0];
      const time = args[1];
      if (getType(fn) !== '<class function>')
        error(TypeError, `<timer>: param is not function`, node.source, node.location);
      if (getType(time) !== '<class number>')
        error(TypeError, `<timer>: param is not number`, node.source, node.location);

      let sum = 0;
      const timer = setInterval(() => {
        const [stop, count] = fn.params;
        if (stop) {
          fn.scope.set(stop, new SystemFunction('stop', () => {
            clearInterval(timer);
          }));
        }
        if (count) {
          fn.scope.set(count, new Literal(false, ++sum));
        }
        this.handle(fn.body, fn.scope, fn.scope);
        fn.scope.clear();
      }, getValue(time));
    }));
    globalScope.set('len', new SystemFunction('len', (args, node) => {
      let array = args[0];
      if (array.__type__ === packageType['Literal']) array = array.value;
      if (array?.__type__ === packageType['Array']) return array.array.length;
      error(TypeError, `<len>: param is not array`, node.arguments[0].source, node.arguments[0].location);
    }));

    return globalScope;
  }

  compile(sentence) {
    const tokens = this.lexer.tokenize(sentence);
    const ast = this.parser.parse(tokens);

    return this.handle(ast, null, this.getGlobalScope());
  }

  handle(root, gist, scope) {
    switch (root.type) {
      case AstType['Program']: {
        const { body } = root;
        for (let i = 0; i < body.length; ++i) {
          const node = body[i];
          this.handle(node, null, scope);
        }
      }
        break;
      case AstType['BlockStatement']: {
        const { body } = root;

        scope = gist?.constructor === Scope ? gist : new Scope(scope);

        for (let i = 0; i < body.length; ++i) {
          const node = body[i];
          const type = node.type;
          if (type === AstType['ReturnStatement']) {
            if (gist?.constructor === Scope) {
              return unlock(this.handle(node, null, scope));
            } else {
              return this.handle(node, null, scope);
            }
          } else if (type === AstType['BreakStatement']) {
            return this.handle(node, null, scope);
          } else if (type === AstType['ContinueStatement']) {
            return this.handle(node, null, scope);
          }
          const curRes = this.handle(node, null, scope);
          if (Array.isArray(curRes)) {
            if (['return', 'break', 'continue'].includes(curRes[1])) {
              if (gist?.constructor === Scope) {
                return curRes[0];
              } else {
                return curRes;
              }
            }
          }
        }
      }
        break;
      case AstType['VariableDeclaration']: {
        const { declarations, kind } = root;
        declarations.forEach(declaration => this.handle(declaration, kind, scope));
      }
        break;
      case AstType['VariableDeclarator']: {
        const { id, init } = root;
        const { name } = id;
        if (!scope.has(name)) {
          if (gist === 'def') { // def
            let result;
            if (init) {
              result = unlock(this.handle(init, null, scope));
              result = result?.__type__ === packageType['Literal'] ? result.value : result;
            } else {
              result = null;
            }
            scope.setCur(name, new Literal(false, result));
          } else { // read
            if (init) {
              let result = unlock(this.handle(init, null, scope));
              result = result?.__type__ === packageType['Literal'] ? result.value : result;
              scope.setCur(name, new Literal(true, result));
            } else {
              error(SyntaxError, `Missing initializer in read declaration`, root.source, root.location);
            }
          }
        } else { // 已存在着该变量
          error(SyntaxError, `Identifier '${id.name}' has already been declared`, id.source, id.location);
        }
      }
        break;
      case AstType['Identifier']: {
        const result = scope.get(root.name);
        if (result) {
          return result;
        } else {
          error(ReferenceError, `'${root.name}' is not defined`, root.source, root.location);
        }
      }
      case AstType['Literal']: {
        return root.value;
      }
      case AstType['ExpressionStatement']: {
        const { expression } = root;
        return this.handle(expression, null, scope);
      }
      case AstType['BinaryExpression']: {
        const { left, operator, right } = root;
        switch (operator) {
          case '+': return unlock(getValue(this.handle(left, null, scope))) + unlock(getValue(this.handle(right, null, scope)));
          case '-': return unlock(getValue(this.handle(left, null, scope))) - unlock(getValue(this.handle(right, null, scope)));
          case '*': return unlock(getValue(this.handle(left, null, scope))) * unlock(getValue(this.handle(right, null, scope)));
          case '/': return unlock(getValue(this.handle(left, null, scope))) / unlock(getValue(this.handle(right, null, scope)));
          case '%': return unlock(getValue(this.handle(left, null, scope))) % unlock(getValue(this.handle(right, null, scope)));
          case '>': return unlock(getValue(this.handle(left, null, scope))) > unlock(getValue(this.handle(right, null, scope)));
          case '>=': return unlock(getValue(this.handle(left, null, scope))) >= unlock(getValue(this.handle(right, null, scope)));
          case '<': return unlock(getValue(this.handle(left, null, scope))) < unlock(getValue(this.handle(right, null, scope)));
          case '<=': return unlock(getValue(this.handle(left, null, scope))) <= unlock(getValue(this.handle(right, null, scope)));
          case '==': return unlock(getValue(this.handle(left, null, scope))) === unlock(getValue(this.handle(right, null, scope)));
          case 'not=': return unlock(getValue(this.handle(left, null, scope))) !== unlock(getValue(this.handle(right, null, scope)));
        }
      }
      case AstType['LogicalExpression']: {
        const { left, operator, right } = root;
        switch (operator) {
          case 'and': return unlock(getValue(this.handle(left, null, scope))) && unlock(getValue(this.handle(right, null, scope)));
          case 'or': return unlock(getValue(this.handle(left, null, scope))) || unlock(getValue(this.handle(right, null, scope)));
        }
      }
      case AstType['UnaryExpression']: {
        const { operator, argument } = root;
        switch (operator) {
          case '+': return + unlock(getValue(this.handle(argument, null, scope)));
          case '-': return - unlock(getValue(this.handle(argument, null, scope)));
          case 'not': return !unlock(getValue(this.handle(argument, null, scope)));
        }
      }
      case AstType['AssignmentExpression']: {
        const { left, right } = root;
        if (left.type === AstType['Identifier']) {
          const result = scope.get(left.name);
          if (result) {
            if (result.__type__ === packageType['Function']) {
              error(TypeError, `Function is not variable`, root.source, root.location);
            }
            if (result.__type__ === packageType['Literal']) {
              if (!result.isRead) {
                let thisRes = unlock(this.handle(right, null, scope));
                thisRes = thisRes?.__type__ === packageType['Literal'] ? thisRes.value : thisRes;
                result.value = thisRes;
              } else {
                error(TypeError, `Assignment to constant variable`, root.source, root.location);
              }
            }
          } else {
            error(SyntaxError, `Identifier '${left.name}' is not declared`, left.source, left.location);
          }
        } else {
          const [array, index] = this.handle(left, null, scope);
          let thisRes = unlock(this.handle(right, null, scope));
          thisRes = thisRes?.__type__ === packageType['Literal'] ? thisRes.value : thisRes;
          array.array[index] = thisRes
        }
      }
        break;
      case AstType['FunctionDeclaration']: {
        const { id, params, body } = root;
        const { name } = id;
        const set = new Set();
        params.some(param => { // 检查是否有重复的参数名
          if (!set.has(param.name)) {
            set.add(param.name);
          } else {
            error(SyntaxError, `Identifier not repeatable params: ${param.name}`, param.source, param.location);
          }
        });
        if (!scope.has(name)) {
          scope.set(name, new Function(name, params, body, new Scope(scope)));
          return scope.get(name);
        } else {
          error(SyntaxError, `Identifier '${name}' has already been declared`, id.source, id.location);
        }
      }
        break;
      case AstType['CallExpression']: {
        const { callee, arguments: args } = root;
        let func = unlock(this.handle(callee, null, scope));
        if (func?.__type__ === packageType['SystemFunction']) {
          return func.fn.apply(null, [args.map(arg => this.handle(arg, null, scope)), root, scope]);
        } else {
          if (func?.__type__ === packageType['Literal']) {
            func = func.value;
          }

          if (![packageType['Function'], packageType['SystemFunction']].includes(func?.__type__)) {
            let identifier = callee;
            let isChained = false;
            while (identifier.type === AstType['CallExpression']) {
              identifier = identifier.callee;
              isChained = true;
            }
            error(TypeError, `${identifier.name + (isChained && '(...)')} is not a function`, identifier.source, identifier.location);
          }

          if (func.__type__ === packageType['SystemFunction']) {
            return func.fn.apply(null, [args.map(arg => this.handle(arg, null, scope)), root, scope]);
          }

          func.params.forEach((param, i) => {
            if (args[i] == null) {
              func.scope.setCur(param, new Literal(false, null));
            } else {
              const result = this.handle(args[i], null, scope);
              let arg;
              if (result.__type__) {
                switch (result.__type__) {
                  case packageType['Literal']:
                    arg = new Literal(false, result.value);
                    break;
                  default:
                    arg = result;
                }
              } else {
                arg = new Literal(false, result);
              }
              func.scope.setCur(param, arg);
            }
          });

          const fnReturn = this.handle(func.body, func.scope, func.scope);
          func.scope.clear();
          return unlock(fnReturn);
        }
      }
      case AstType['ReturnStatement']: {
        const { argument } = root;
        return [argument ? unlock(this.handle(argument, null, scope)) : null, 'return'];
      }
      case AstType['BreakStatement']: {
        const { argument } = root;
        return [argument ? unlock(this.handle(argument, null, scope)) : null, 'break'];
      }
      case AstType['ContinueStatement']: {
        const { argument } = root;
        return [argument ? unlock(this.handle(argument, null, scope)) : null, 'continue'];
      }
      case AstType['IfStatement']: {
        const test = getValue(this.handle(root.test, null, scope));
        if (test) return this.handle(root['consequent'], null, scope);
        else if (root['alternate']) return this.handle(root['alternate'], null, scope);
        return null;
      }
      case AstType['WhileStatement']: {
        while (getValue(this.handle(root.test, null, scope))) {
          const thisRes = this.handle(root['body'], null, scope);
          if (Array.isArray(thisRes)) {
            if (thisRes[1] === 'break') return thisRes[0];
            else if (thisRes[1] === 'return') return thisRes;
            else if (thisRes[1] === 'continue') continue;
          }
        }
        if (root['alternate']) return this.handle(root['alternate'], null, scope);
      }
        break;
      case AstType['ForStatement']: {
        const { init, test, update, body, alternate } = root;
        const newScope = new Scope(scope);
        init && this.handle(init, null, newScope);
        while (!test || getValue(this.handle(test, null, newScope))) {
          const thisRes = this.handle(body, null, newScope);
          update && this.handle(update, null, newScope);
          if (Array.isArray(thisRes)) {
            if (thisRes[1] === 'break') return thisRes[0];
            else if (thisRes[1] === 'return') return thisRes;
            else if (thisRes[1] === 'continue') continue;
          }
        }
        if (alternate) return this.handle(alternate, null, scope);
      }
        break;
      case AstType['ArrayExpression']: {
        const { elements } = root;
        return new ArrayLiteral(elements.map(elm => this.handle(elm, null, scope)));
      }
      case AstType['MemberExpression']: {
        const { object, property } = root;
        let array = this.handle(object, null, scope);
        let index = this.handle(property, null, scope);
        if (array.__type__ === packageType['Literal']) array = array.value;
        if (array?.__type__ !== packageType['Array']) {
          if (object.name) {
            error(TypeError, `${object.name} is not array`, object.source, object.location);
          } else {
            error(TypeError, `Cannot read properties of ${toString(array)} (reading '${toString(index)}')`, property.source, property.location);
          }
        }
        if (index.__type__ === packageType['Literal']) index = index.value;
        const indexType = getType(index)
        const key = toString(index)
        if(indexType === `<class string>`) {
          const arrayFunc = array[key]
          if(!arrayFunc) {
            error(TypeError, `${key} is not function`, property.source, property.location)
          }
          return arrayFunc
        } else if (indexType !== `<class number>`) {
          error(TypeError, `${key} is not number`, property.source, property.location);
        }
        return [array, index];
      }
    }
  }
}

function unlock(result) {
  if (Array.isArray(result)) {
    if(['return', 'break'].includes(result[1])) return result[0];
    else {
      const [array, index] = result
      return array.array[index]
    }
  } else {
    return result;
  }
}