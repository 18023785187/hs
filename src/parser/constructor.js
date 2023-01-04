import { AstType } from './astType'

export function createRoot(body, location) {
  return {
    type: AstType['Program'],
    location,
    body
  }
}

export function _defined({ source, value, location }) {
  return {
    type: AstType['VariableDeclaration'],
    source,
    location,
    declarations: [],
    kind: value
  }
}

export function _identifier({ source, value, location }) {
  return {
    type: AstType['Identifier'],
    source,
    location,
    name: value
  }
}

export function _literal({ source, value, location }) {
  let result
  if(value === 'True') {
    result = true
  } else if(value === 'False') {
    result = false
  } else if(value === 'null') {
    result = null
  } else if(value[0] == '"' && value[value.length - 1] === '"') {
    result = value.slice(1, -1)
  } else {
    result = Number(value)
  }
  return {
    type: AstType['Literal'],
    source,
    location,
    value: result,
    raw: value
  }
}

export function $createVariableDeclaratorInit(astList) {
  const startIndex = astList.length - 3
  const identifier = astList[startIndex]
  const init = astList[startIndex + 2]

  const variableDeclarator = {
    type: AstType['VariableDeclarator'],
    ...mergeTokenInfo(identifier, init),
    id: identifier,
    init
  }

  astList.splice(startIndex, 3, variableDeclarator)
  astList[astList.length - 2].declarations.push(astList.pop())
}

export function $createVariableDeclarator(astList) {
  const startIndex = astList.length - 1
  const identifier = astList[startIndex]

  const variableDeclarator = {
    type: AstType['VariableDeclarator'],
    ...mergeTokenInfo(identifier),
    id: identifier,
    init: null
  }

  astList.splice(startIndex, 1, variableDeclarator)
  astList[astList.length - 2].declarations.push(astList.pop())
}

export function _begin({ source, location }) {
  return {
    type: AstType['BlockStatement'],
    source,
    location,
    body: []
  }
}
export const _pass = _begin

export function $appendBlock(astList, blocks) {
  const startIndex = astList.length - 1
  const block = astList[startIndex]
  blocks.push(block.body)
}

export function $popBlock(_, blocks) {
  blocks.pop()
}

export function _return({ source, location }) {
  return {
    type: AstType['ReturnStatement'],
    source,
    location,
    argument: null
  }
}

export function _break({ source, location }) {
  return {
    type: AstType['BreakStatement'],
    source,
    location,
    argument: null
  }
}

export function _continue({ source, location }) {
  return {
    type: AstType['ContinueStatement'],
    source,
    location,
    argument: null
  }
}

export function $mergeReturn(astList) {
  const startIndex = astList.length - 1
  if([AstType['ReturnStatement'], AstType['BreakStatement'], AstType['ContinueStatement']].includes(astList[startIndex].type)) return
  
  const returnStatement = astList[startIndex - 1]
  const statement = astList[startIndex]
  returnStatement.argument = statement

  astList.pop()
}

export function _function({ source, location }) {
  return {
    type: AstType['FunctionDeclaration'],
    source,
    location,
    id: null,
    params: [],
    body: null,
  }
}

export function $mergeFunctionId(astList) {
  const startIndex = astList.length - 2
  const func = astList[startIndex]
  const id = astList[startIndex + 1]
  func.id = id

  astList.pop()
}

export function $mergeFunctionParam(astList) {
  const startIndex = astList.length - 2
  const func = astList[startIndex]
  const id = astList[startIndex + 1]
  func.params.push(id)

  astList.pop()
}

export function $mergeFunctionBody(astList) {
  const startIndex = astList.length - 2
  const func = astList[startIndex]
  const body = astList[startIndex + 1]
  func.body = body

  astList.pop()
}

export function _if({ source, location }) {
  return {
    type: AstType['IfStatement'],
    source,
    location,
    test: null,
    consequent: null,
    alternate: null
  }
}
export const _elif = _if

export function $mergeIfTest(astList) {
  const startIndex = astList.length - 2
  const ifStatement = astList[startIndex]
  const test = astList[startIndex + 1]
  ifStatement.test = test
  astList.splice(startIndex + 1, 1)
}

export function $mergeIfConsequent(astList) {
  const startIndex = astList.length - 2
  const ifStatement = astList[startIndex]
  const consequent = astList[startIndex + 1]
  ifStatement.consequent = consequent
  astList.splice(startIndex + 1, 1)
}

export function $mergeAlternate(astList) {
  const startIndex = astList.length - 2
  const statement = astList[startIndex]
  const alternate = astList[startIndex + 1]
  let cur = statement
  while (cur.alternate && cur.alternate.type === AstType['IfStatement']) {
    cur = cur.alternate
  }
  cur.alternate = alternate
  astList.splice(startIndex + 1, 1)
}

export function _equal({ value, source, location }) {
  return {
    type: AstType['EqualExpression'],
    source,
    location,
    operator: value,
  }
}
export function _plus({ value, source, location }) {
  return {
    type: AstType['PlusExpression'],
    source,
    location,
    operator: value,
  }
}
export function _minus({ value, source, location }) {
  return {
    type: AstType['MinusExpression'],
    source,
    location,
    operator: value,
  }
}
export function _multiply({ value, source, location }) {
  return {
    type: AstType['MultiplyExpression'],
    source,
    location,
    operator: value,
  }
}
export function _divide({ value, source, location }) {
  return {
    type: AstType['DivideExpression'],
    source,
    location,
    operator: value,
  }
}
export function _surplus({ value, source, location }) {
  return {
    type: AstType['SurplusExpression'],
    source,
    location,
    operator: value,
  }
}
export function _congruent({ value, source, location }) {
  return {
    type: AstType['CongruentExpression'],
    source,
    location,
    operator: value,
  }
}
export function _notEqual({ value, source, location }) {
  return {
    type: AstType['NotEqualExpression'],
    source,
    location,
    operator: value,
  }
}
export function _not({ value, source, location }) {
  return {
    type: AstType['NotExpression'],
    source,
    location,
    operator: value,
  }
}
export function _and({ value, source, location }) {
  return {
    type: AstType['AndExpression'],
    source,
    location,
    operator: value,
  }
}
export function _or({ value, source, location }) {
  return {
    type: AstType['OrExpression'],
    source,
    location,
    operator: value,
  }
}
export function _greater({ value, source, location }) {
  return {
    type: AstType['GreaterExpression'],
    source,
    location,
    operator: value,
  }
}
export function _greaterEqual({ value, source, location }) {
  return {
    type: AstType['GreaterEqualExpression'],
    source,
    location,
    operator: value,
  }
}
export function _less({ value, source, location }) {
  return {
    type: AstType['LessExpression'],
    source,
    location,
    operator: value,
  }
}
export function _lessEqual({ value, source, location }) {
  return {
    type: AstType['LessEqualExpression'],
    source,
    location,
    operator: value,
  }
}

export function $mergeAssignment(astList) {
  const centerIndex = astList.length - 2;
  const operator = astList[centerIndex];
  const left = astList[centerIndex - 1];
  const right = astList[centerIndex + 1];
  const ast = {
    type: AstType['AssignmentExpression'],
    ...mergeTokenInfo(left, operator, right),
    left: left,
    operator: operator.operator,
    right: right
  };
  astList.splice(centerIndex - 1, 3, ast);
}

export function $binaryExpression(astList) {
  const centerIndex = astList.length - 2;
  const operator = astList[centerIndex];
  const left = astList[centerIndex - 1];
  const right = astList[centerIndex + 1];
  const ast = {
    type: AstType['BinaryExpression'],
    ...mergeTokenInfo(left, operator, right),
    left: left,
    operator: operator.operator,
    right: right
  };
  astList.splice(centerIndex - 1, 3, ast);
}

export function $logicalExpression(astList) {
  const centerIndex = astList.length - 2;
  const operator = astList[centerIndex];
  const left = astList[centerIndex - 1];
  const right = astList[centerIndex + 1];
  const ast = {
    type: AstType['LogicalExpression'],
    ...mergeTokenInfo(left, operator, right),
    left: left,
    operator: operator.operator,
    right: right
  };
  astList.splice(centerIndex - 1, 3, ast);
}

export function $unaryExpression(astList) {
  const startIndex = astList.length - 2;
  const operator = astList[startIndex];
  const right = astList[startIndex + 1];
  const ast = {
    type: AstType['UnaryExpression'],
    ...mergeTokenInfo(operator, right),
    operator: operator.operator,
    argument: right
  };
  astList.splice(startIndex, 2, ast);
}

export function $createCall(astList) {
  const startIndex = astList.length - 1
  const id = astList[startIndex]

  const ast = {
    type: AstType['CallExpression'],
    ...mergeTokenInfo(id),
    callee: id,
    arguments: []
  }
  astList.splice(startIndex, 1, ast)
}

export function $mergeCallParam(astList) {
  const startIndex = astList.length - 2
  const call = astList[startIndex]
  const id = astList[startIndex + 1]
  call.arguments.push(id)

  astList.pop()
}

export function $updateCallInfo(astList) {
  const startIndex = astList.length - 1
  const call = astList[startIndex]
  const ast = {
    ...call,
    ...mergeTokenInfo(call.callee, ...call.arguments)
  }
  astList.splice(startIndex, 1, ast)
}

export function $expressionStatement(astList) {
  astList.push(createExpressionStatement(astList.pop()))
}

export function _while({ source, location }) {
  return {
    type: AstType['WhileStatement'],
    source,
    location,
    test: null,
    body: null,
    alternate: null
  }
}

export function $mergeWhileTest(astList) {
  const startIndex = astList.length - 2
  const whileStatement = astList[startIndex]
  const test = astList[startIndex + 1]
  whileStatement.test = test
  astList.splice(startIndex + 1, 1)
}

export function $mergeWhileBody(astList) {
  const startIndex = astList.length - 2
  const whileStatement = astList[startIndex]
  const body = astList[startIndex + 1]
  whileStatement.body = body
  astList.splice(startIndex + 1, 1)
}

export function _for({ source, location }) {
  return {
    type: AstType['ForStatement'],
    source,
    location,
    init: null,
    test: null,
    update: null,
    body: null,
    alternate: null
  }
}

export function $mergeForInit(astList) {
  const tail = astList.length - 1
  if(astList[tail].type === AstType['ForStatement']) return

  const forStatement = astList[tail - 1]
  const init = astList[tail]

  forStatement.init = init
  astList.pop()
}

export function $mergeForTest(astList) {
  const tail = astList.length - 1
  if(astList[tail].type === AstType['ForStatement']) return

  const forStatement = astList[tail - 1]
  const test = astList[tail]

  forStatement.test = test
  astList.pop()
}

export function $mergeForUpdate(astList) {
  const tail = astList.length - 1
  if(astList[tail].type === AstType['ForStatement']) return

  const forStatement = astList[tail - 1]
  const update = astList[tail]

  forStatement.update = update
  astList.pop()
}

export function $mergeForBody(astList) {
  const startIndex = astList.length - 2
  const forStatement = astList[startIndex]
  const body = astList[startIndex + 1]
  forStatement.body = body
  astList.splice(startIndex + 1, 1)
}

export function _leftBrace({ source, location }) {
  return {
    type: AstType['ArrayExpression'],
    source,
    location,
    elements: []
  }
}

export function $mergeArray(astList) {
  const startIndex = astList.length - 2
  const array = astList[startIndex]
  array.elements.push(astList.pop())
}

export function $createMemberExpression(astList) {
  astList.pop()
  const id = astList.pop()

  const ast = {
    type: AstType['MemberExpression'],
    ...mergeTokenInfo(id),
    object: id,
    property: null
  }
  astList.push(ast)
}

export function $mergeMember(astList) {
  const startIndex = astList.length - 2
  const member = astList[startIndex]

  member.property = astList.pop()
}

// utils
function mergeTokenInfo(...asts) {
  let prevSource = asts[0].source
  const set = new Set()
  set.add(prevSource)
  for (let i = 1; i < asts.length; ++i) {
    const curSource = asts[i].source
    set.add(curSource)
  }
  return {
    source: [...set].join(''),
    location: {
      ...asts[0].location,
      end: asts[asts.length - 1].location.end
    }
  }
}

function createExpressionStatement(statement) {
  return {
    type: AstType['ExpressionStatement'],
    source: statement.source,
    location: statement.location,
    expression: statement
  }
}
