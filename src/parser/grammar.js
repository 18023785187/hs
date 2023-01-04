import { makeLL1 } from 'll1-grammar'

const grammars =
[
  `Sentence                   ->  SingleStatement Semicolon Sentence | null`,
  `SingleStatement            ->  Defined | Block | Function | Condition | Circulation | Assignment`,
  `Semicolon                  ->  SingleSemicolon Semicolon'`,
  `Semicolon'                 ->  SingleSemicolon Semicolon' | null`,
  `SingleSemicolon            ->  semicolon`,
  // 表达式 id; 1; 1+1; 1>2; 1 and 2; 1 or 2; not 2; a+b; -1;
  `BinaryExpression           ->  ArithmeticExpression1 BinaryExpression' $expressionStatement`,
  `BinaryExpression'          ->  LogicalExpression BinaryExpression' | ComparisonExpression BinaryExpression' | null`,
  `ArithmeticExpression1      ->  ArithmeticExpression2 ArithmeticExpression1'`,
  `ArithmeticExpression1'     ->  Operator1 ArithmeticExpression2 $binaryExpression ArithmeticExpression1' | null`,
  `ArithmeticExpression2      ->  UnaryExpression ArithmeticExpression2'`,
  `ArithmeticExpression2'     ->  Operator2 ArithmeticExpression2 $binaryExpression | null`,
  `UnaryExpression            ->  Operator1 Variable $unaryExpression | Variable | not Variable $unaryExpression`,
  `Variable                   ->  identifier Variable' | literal | leftBracket BinaryExpression rightBracket | Array Variable'`,
  `Variable'                  ->  ArrayMember Variable''' | CallFunc | null`,
  `Variable''                 ->  ArrayMember | null`,
  `Variable'''                ->  CallFunc | null`,
  `LogicalExpression          ->  or ArithmeticExpression1 $logicalExpression | and ArithmeticExpression1 $logicalExpression | congruent ArithmeticExpression1 $binaryExpression | notEqual ArithmeticExpression1 $binaryExpression`,
  `ComparisonExpression       ->  greater ArithmeticExpression1 $binaryExpression |
                                  greaterEqual ArithmeticExpression1 $binaryExpression | 
                                  less ArithmeticExpression1 $binaryExpression | 
                                  lessEqual ArithmeticExpression1 $binaryExpression`,
  `Operator1                  ->  plus | minus`,
  `Operator2                  ->  multiply | divide | surplus`,
  // 声明 def id; def id = 1;
  `Defined                    ->  defined identifier Defined'`,
  `Defined'                   ->  equal Value $createVariableDeclaratorInit Defined'' | $createVariableDeclarator null`,
  `Defined''                  ->  comma identifier Defined' | null`,
  // 赋值
  `Assignment                 ->  identifier Assignment'' Assignment'`,
  `Assignment'                ->  equal Value $mergeAssignment $expressionStatement | CallFunc $expressionStatement | null`,
  `Assignment''               ->  ArrayMember | null`,
  `Call                       ->  $createCall leftBracket Call' rightBracket $updateCallInfo`,
  `Call'                      ->  CallParams $mergeCallParam Call'' | null`,
  `Call''                     ->  comma CallParams $mergeCallParam Call'' | null`,
  `CallParams                 ->  BinaryExpression | Function`,
  `CallFunc                   ->  Call CallFunc'`,
  `CallFunc'                  ->  Call CallFunc' | null`,
  `Value                      ->  BinaryExpression | Function | Condition | Circulation | Block`,
  // 数组
  `Array                      ->  leftBrace Array' rightBrace`,
  `Array'                     ->  BinaryExpression $mergeArray Array'' | Function $mergeArray Array'' | null`,
  `Array''                    ->  comma Array''' | null`,
  `Array'''                   ->  BinaryExpression $mergeArray Array'' | Function $mergeArray Array''`,
  `ArrayMember                ->  leftBrace $createMemberExpression BinaryExpression $mergeMember rightBrace ArrayMember'`,
  `ArrayMember'               ->  ArrayMember | null`,
  // 方法声明 func fn(): func fn(args1, args2);
  `Function                   ->  function identifier $mergeFunctionId Params Colon SingleBlock $mergeFunctionBody`,
  `Params                     ->  leftBracket Params' rightBracket`,
  `Params'                    ->  identifier $mergeFunctionParam Params'' | null`,
  `Params''                   ->  comma identifier $mergeFunctionParam Params'' | null`,
  // 块级作用域 begin end; begin return end;
  `Block                      ->  begin $appendBlock Sentence Block'`,
  `Block'                     ->  end $popBlock | return Block'' | break Block'' | continue Block'''`,
  `Block''                    ->  BinaryExpression $mergeReturn Block''' | Function $mergeReturn Block''' | Condition $mergeReturn Block''' | Block'''`,
  `Block'''                   ->  Semicolon end $popBlock`,
  // 条件语句 if(): elif(): else:
  `Condition                  ->  If Elif`,
  `If                         ->  if leftBracket BinaryExpression rightBracket $mergeIfTest Colon SingleBlock $mergeIfConsequent`,
  `Elif                       ->  elif leftBracket BinaryExpression rightBracket $mergeIfTest Colon SingleBlock $mergeIfConsequent $mergeAlternate Elif |
                                  Else | 
                                  null`,
  `Else                       ->  else Colon SingleBlock $mergeAlternate`,
  // 循环 for():
  `Circulation                ->  For CirculationElse | While CirculationElse`,
  `For                        ->  for leftBracket ForSentence' $mergeForInit SingleSemicolon ForSentence'' $mergeForTest SingleSemicolon ForSentence''' $mergeForUpdate rightBracket Colon SingleBlock  $mergeForBody`,
  `ForSentence'               ->  Defined | Assignment | null`,
  `ForSentence''              ->  BinaryExpression | null`,
  `ForSentence'''             ->  Assignment | null`,
  `While                      ->  while leftBracket BinaryExpression rightBracket $mergeWhileTest Colon SingleBlock $mergeWhileBody`,
  `CirculationElse            ->  Else | null`,
  // 
  `SingleBlock                ->  Block | BinaryExpression | Function | pass | break SingleBlock' $mergeReturn | continue`,
  `SingleBlock'               ->  BinaryExpression | null`,
  // 单终结符
  `Colon                      ->  colon`,
];
const terminalSymbols =
  'defined|identifier|equal|congruent|notEqual|semicolon|leftBracket|rightBracket|literal|plus|minus|multiply|divide|surplus|function|begin|end|return|comma|colon|if|elif|else|or|and|not|greater|greaterEqual|less|lessEqual|pass|for|while|break|continue|leftBrace|rightBrace'
    .split('|');

const ll1 = makeLL1(grammars, terminalSymbols);

export const startSymbol = ll1.startSymbol
export const predictSet = ll1.predictSet
