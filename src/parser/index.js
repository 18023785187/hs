import Parser from './Parser'
import { startSymbol, predictSet } from './grammar'
import * as constructor from './constructor'

export default new Parser(startSymbol, predictSet, constructor)
export * from './astType'
