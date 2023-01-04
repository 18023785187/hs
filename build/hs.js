(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hs"] = factory();
	else
		root["hs"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 508:
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __nested_webpack_require_461__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_461__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_461__.o(definition, key) && !__nested_webpack_require_461__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_461__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_461__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__nested_webpack_require_461__.r(__webpack_exports__);

// EXPORTS
__nested_webpack_require_461__.d(__webpack_exports__, {
  "$": () => (/* reexport */ $),
  "EMPTY_CHAIN": () => (/* reexport */ EMPTY_CHAIN),
  "clearLeftRecursion": () => (/* reexport */ clearLeftRecursion),
  "combineLikeTerms": () => (/* reexport */ combineLikeTerms),
  "isNotIntersect": () => (/* reexport */ isNotIntersect),
  "makeFirstSet": () => (/* reexport */ makeFirstSet),
  "makeFollowSet": () => (/* reexport */ makeFollowSet),
  "makeLL1": () => (/* binding */ makeLL1),
  "makePredictSet": () => (/* reexport */ makePredictSet),
  "makeSelectSet": () => (/* reexport */ makeSelectSet),
  "makeUnionFirstSet": () => (/* reexport */ makeUnionFirstSet),
  "splitGrammars": () => (/* reexport */ splitGrammars),
  "toGrammars": () => (/* reexport */ toGrammars)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: ./src/constants.js
var EMPTY_CHAIN = null;
var OR = '|';
var $ = '$';
;// CONCATENATED MODULE: ./src/utils.js

function mergeSet(set1, set2) {
  return new Set([].concat(_toConsumableArray(set1), _toConsumableArray(set2)));
}
function isBlank(_char) {
  return _char === ' ' || _char === '\t' || _char === '\n' || _char === '\r';
}
;// CONCATENATED MODULE: ./src/splitGrammars.js





/**
 * 生成式必须以空格作为分隔符，以 | 作为或，以 null 作为空串
 * 
 * 如: 1、['E -> ( id ) | null']
 *     2、['E -> ( id )', 'E -> null']
 * 
 * 无论使用哪种写法最后返回的都会合并成一项，即合并成第一种写法的格式
 */
function splitGrammars(grammars) {
  var rules = [];
  var ruleMap = new Map(); // 用于缓存已经创建的产生式，避免重复创建相关的产生式

  for (var i = 0; i < grammars.length; ++i) {
    var grammar = grammars[i];
    var _grammar$split = grammar.split('->'),
      _grammar$split2 = _slicedToArray(_grammar$split, 2),
      left = _grammar$split2[0],
      right = _grammar$split2[1];
    if (!right || !right.trim()) throw new Error('Grammar is missing the right side');
    var isDefined = true;
    if (!ruleMap.has(left)) {
      isDefined = false;
      ruleMap.set(left, {
        left: null,
        right: []
      });
    }
    var grammarRule = ruleMap.get(left);
    grammarRule.left = left.trim();
    var fragment = [];
    var str = '';
    right += ' ';
    for (var j = 0; j < right.length; ++j) {
      var _char = right[j];
      if (isBlank(_char)) {
        if (str === 'null') {
          fragment.push(EMPTY_CHAIN);
        } else if (str) {
          fragment.push(str);
        }
        str = '';
      } else if (_char === '|') {
        grammarRule.right.push(fragment);
        fragment = [];
        str = '';
      } else {
        str += _char;
      }
    }
    if (fragment.length) grammarRule.right.push(fragment);
    !isDefined && rules.push(grammarRule);
  }
  return rules;
}
function toGrammars(rules) {
  var isExpand = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var grammars = [];
  rules.forEach(function (_ref) {
    var left = _ref.left,
      right = _ref.right;
    if (isExpand) {
      right.forEach(function (r) {
        var grammar = '';
        grammar += "".concat(left, " -> ").concat(r.map(function (chain) {
          return chain + '';
        }).join(' '));
        grammars.push(grammar);
      });
    } else {
      var grammar = '';
      grammar += "".concat(left, " -> ");
      right.forEach(function (r) {
        grammar += r.map(function (chain) {
          return chain + '';
        }).join(' ') + " ".concat(OR, " ");
      });
      grammars.push(grammar.slice(0, -3));
    }
  });
  return grammars;
}

/**
 * 基于 splitGrammars 方法返回的 rules 进行提取公共因子
 * 
 * 提取公共因子产生的新表达式用原表达式加 ' 表示，如有多个公共因子以此类推，如：
 * 
 *  E -> + a | + b | * c | * d | y
 * 
 * 提取后为
 * 
 *  E -> + E' | * E'' | y
 *  E' -> a | b
 *  E'' -> c | d
 */
function combineLikeTerms(rules) {
  var mergeRight = function mergeRight(right) {
    return _toConsumableArray(right.map(function (grammar) {
      return _toConsumableArray(grammar);
    }));
  };
  var rightToString = function rightToString(right) {
    return right.join(OR);
  };
  var newRules = [];
  var commonSuffix = new Map(); /** 复用已有产生式或提取公共因子后剩余后缀的产生式 */
  rules.forEach(function (_ref2) {
    var left = _ref2.left,
      right = _ref2.right;
    commonSuffix.set(rightToString(right), left);
  });
  rules.forEach(function (_ref3) {
    var left = _ref3.left,
      right = _ref3.right;
    handleRule(left, right, new Map());
  });
  function handleRule(left, right) {
    commonSuffix.set(rightToString(right), left);
    var repeat = 0;
    var isInsertRoot = false; // 标记新产生式是否已推入 newRules
    var grammarRule = {
      left: left,
      right: []
    };
    if (right.length === 1) {
      grammarRule.right = mergeRight(right);
      newRules.push(grammarRule);
      return;
    }
    var prefix;
    var chain;
    var skips = []; // 存储已合并的项下标
    for (var i = 0; i < right.length; ++i) {
      // 以当前产生式右边为参考系
      if (skips.includes(i)) continue;
      skips.push(i);
      if (i === right.length - 1) {
        grammarRule.right.push(right[i]);
        return;
      }
      var grammar = right[i];
      var pos = 0;
      var commonGrammars = [];
      commonGrammars.push(grammar);
      prefix = '';
      setPrefix: while (pos < grammar.length) {
        // 当前产生式右边到尽头时，结束遍历
        chain = grammar[pos];
        var isEqualChain = false;
        if (pos === 0) {
          for (var j = i + 1; j < right.length; ++j) {
            var curGrammar = right[j];
            var curChain = curGrammar[pos];
            if (!curChain) continue;
            if (curChain === chain) {
              isEqualChain = true;
              skips.push(j);
              commonGrammars.push(right[j]);
            }
          }
        } else {
          for (var _j = i + 1; _j < right.length; ++_j) {
            var _curGrammar = right[_j];
            var _curChain = _curGrammar[pos];
            if (!_curChain || _curChain !== chain || !skips.includes(_j)) continue;
            isEqualChain = true;
          }
        }
        if (!isEqualChain) break setPrefix;
        prefix += chain + OR;
        pos++;
      }
      if (prefix) {
        var suffixes = commonGrammars.map(function (exp) {
          var suffix = exp.slice(prefix.slice(0, -1).split(OR).length);
          if (!suffix.length) return [EMPTY_CHAIN];
          return suffix;
        });
        var newLeft = void 0;
        if (commonSuffix.has(rightToString(suffixes))) {
          newLeft = commonSuffix.get(rightToString(suffixes));
        } else {
          newLeft = "".concat(left).concat("'".repeat(repeat), "'");
        }
        var newRight = [].concat(_toConsumableArray(prefix.slice(0, -1).split(OR)), [newLeft]);
        grammarRule.right.push(newRight);
        if (!isInsertRoot) {
          newRules.push(grammarRule);
          repeat++;
        }
        ;
        if (!commonSuffix.has(rightToString(suffixes))) handleRule(newLeft, suffixes);
      } else {
        grammarRule.right.push(_toConsumableArray(right[i]));
        if (!isInsertRoot) {
          newRules.push(grammarRule);
        }
        ;
      }
      isInsertRoot = true;
    }
  }
  return newRules;
}

/**
 * 基于 splitGrammars 方法返回的 rules 进行消除左递归
 * 
 * 左递归分为直接左递归和间接左递归，直接左递归调用 clearDirectLeftRecursion 函数进行消除，间接左递归通过代入产生式降级为直接左递归进行消除，
 * 为了与提取公共因子进行区分，消除左递归引入的新产生式用 ` 标记，如：E -> E + T 消除后得 E -> T E`  E` -> + T E` | null
 * 
 * A -> A a1 | A a2 | ... | A an | b1 | b2 | ... | bm
 * 
 * ---->
 * 
 *  A -> b1A` | b2A` | ... | bmA`
 *  A' -> a1A` | a2A` | ... | anA` | null
 * 
 */
function clearLeftRecursion(rules) {
  var newRules = [];
  rules.forEach(function (rule) {
    newRules.push.apply(newRules, _toConsumableArray(clearDirectLeftRecursion(rule)));
  });
  function clearDirectLeftRecursion(_ref4 /** rule */) {
    var left = _ref4.left,
      right = _ref4.right;
    var rules = [];
    var newLeft = "".concat(left, "`");
    var prefixGrammars = [];
    var grammars = [];
    var isEmpty = false;
    right.forEach(function (grammar) {
      if (grammar[0] === left) {
        grammar.shift();
        grammar.push(newLeft);
        prefixGrammars.push(grammar);
      } else if (grammar[0] === EMPTY_CHAIN) {
        isEmpty = true;
      } else {
        grammar.push(newLeft);
        grammars.push(grammar);
      }
    });
    if (isEmpty) {
      grammars.push([newLeft]);
    }
    rules.push({
      left: left,
      right: [].concat(grammars)
    }, {
      left: newLeft,
      right: [].concat(prefixGrammars, [[EMPTY_CHAIN]])
    });
    return rules;
  }
  return newRules;
}
;// CONCATENATED MODULE: ./src/makeFirstSet.js




/**
  1、依次遍历所有产生式，把串首终结符加入其 FIRST 集中。
  2、如果最左串是非终结符，则把该非终结符的 FIRST 集推入到当前产生式中，如果该非终结符包含空，那么把该非终结符的 FIRST 集 - 空推入到当前产生式中，同时把该非终结符的下一个非终结符的 FIRST 集推入到当前产生式中，重复第二步直至遇到没有包含空的非终结符为止。
  3、重新遍历所有产生式，重复执行步骤 1、2，直至所有产生式均无变化。
 */
function makeFirstSet(rules, terminalSymbols) {
  var isTerminal = function isTerminal(chain) {
    return terminalSymbols.includes(chain) || chain === EMPTY_CHAIN;
  };
  var firstSet = {};
  rules.forEach(function (_ref) {
    var left = _ref.left;
    return firstSet[left] = [];
  });
  var isSetChanged;
  do {
    isSetChanged = false;
    rules.forEach(function (_ref2) {
      var left = _ref2.left,
        right = _ref2.right;
      var sets = new Set(firstSet[left]);
      var prevLength = sets.size;

      // 处理诸如 E -> A | B 的情况需要遍历
      right.forEach(function (grammar) {
        var first = 0;
        var chain = grammar[first];
        while (((_chain = chain) === null || _chain === void 0 ? void 0 : _chain[0]) === $) {
          var _chain;
          chain = grammar[++first];
        }
        if (isTerminal(chain)) sets.add(chain);else if (firstSet[chain].includes(EMPTY_CHAIN)) {
          do {
            var _firstSet$chain;
            var nextSet = new Set(firstSet[chain]);
            nextSet["delete"](EMPTY_CHAIN);
            sets = mergeSet(sets, nextSet);
            first += 1;
            chain = grammar[first];
            while (((_chain2 = chain) === null || _chain2 === void 0 ? void 0 : _chain2[0]) === $) {
              var _chain2;
              chain = grammar[++first];
            }
          } while ((_firstSet$chain = firstSet[chain]) !== null && _firstSet$chain !== void 0 && _firstSet$chain.includes(EMPTY_CHAIN));
          if (isTerminal(chain)) sets.add(chain);else if (chain) sets = mergeSet(sets, firstSet[chain]);
        } else sets = mergeSet(sets, firstSet[chain]);
      });
      firstSet[left] = _toConsumableArray(sets);
      if (prevLength !== sets.size) isSetChanged = true;
    });
  } while (isSetChanged);
  return firstSet;
}
function makeUnionFirstSet(chainSet, firstSet, terminalSymbols) {
  var isTerminal = function isTerminal(chain) {
    return terminalSymbols.includes(chain) || chain === EMPTY_CHAIN;
  };
  var unionFirstSet = [];
  chainSet.some(function (chain) {
    if (chain[0] === $) return false;
    if (isTerminal(chain)) {
      unionFirstSet.push(chain);
    } else if (!firstSet[chain].includes(EMPTY_CHAIN)) {
      unionFirstSet.push.apply(unionFirstSet, _toConsumableArray(firstSet[chain]));
    } else {
      return false;
    }
    return true;
  });
  return unionFirstSet;
}
;// CONCATENATED MODULE: ./src/makeFollowSet.js





/**
    设有式子 S -> (L) | aL | LC，规则如下：
  1、如果 L 的右边是终结符，那么把这个终结符加到 L 的 FOLLOW 集中。
  2、如果 L 的右边是非终结符，那么把这个非终结符的 FIRST 集 - 空 加到 L 的 FOLLOW 集中。
  3、如果 L 处在末尾，那么把 -> 左边符号的 FOLLOW 集 加入到 L 的 FOLLOW 集中。
  4、当 L 的式子包含空时，对 L 的左边非终结符采用 1、2、3 规则，依次类推。

  推导过程

  1、在第一个产生式加入 $ 作为终止符。
  2、依次遍历产生式，依序遍历产生式右边，对每个串运用规则。
  3、重复执行步骤 2，直至所有产生式均无变化。
 */
function makeFollowSet(rules, terminalSymbols) {
  var firstSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : makeFirstSet(rules, terminalSymbols);
  var isTerminal = function isTerminal(chain) {
    return terminalSymbols.includes(chain) || chain === EMPTY_CHAIN;
  };
  var followSet = {};
  rules.forEach(function (_ref) {
    var left = _ref.left;
    return followSet[left] = [];
  });
  followSet[rules[0].left].push($);
  var emptySet = new Set();
  for (var tag in firstSet) firstSet[tag].includes(EMPTY_CHAIN) && emptySet.add(tag);
  var isSetChanged;
  do {
    isSetChanged = false;
    rules.forEach(function (_ref2) {
      var left = _ref2.left,
        right = _ref2.right;
      right.forEach(function (grammar) {
        for (var i = grammar.length - 1; i >= 0; --i) {
          var chain = grammar[i];
          if (isTerminal(chain) || chain[0] === $) continue;
          var prevLength = followSet[chain].length;
          if (i === grammar.length - 1) {
            followSet[chain] = _toConsumableArray(mergeSet(followSet[chain], followSet[left]));
          } else {
            var j = i + 1;
            var nextChain = grammar[j];
            while (j < grammar.length && nextChain[0] === $) {
              nextChain = grammar[++j];
            }
            if (isTerminal(nextChain)) {
              followSet[chain] = _toConsumableArray(mergeSet(followSet[chain], [nextChain]));
            } else {
              var nextSet = new Set(firstSet[nextChain]);
              nextSet["delete"](EMPTY_CHAIN);
              followSet[chain] = _toConsumableArray(mergeSet(followSet[chain], nextSet));
              while (j < grammar.length && (emptySet.has(nextChain) || nextChain[0] === $)) nextChain = grammar[++j];
              if (j === grammar.length) followSet[chain] = _toConsumableArray(mergeSet(followSet[chain], followSet[left]));
            }
          }
          if (followSet[chain].length !== prevLength) isSetChanged = true;
        }
      });
    });
  } while (isSetChanged);
  return followSet;
}
;// CONCATENATED MODULE: ./src/makeSelectSet.js

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = makeSelectSet_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function makeSelectSet_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return makeSelectSet_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return makeSelectSet_arrayLikeToArray(o, minLen); }
function makeSelectSet_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





/**
  对于形似 A -> ab 的产生式，其 SELECT 集为 FIRST(ab)。
  对于形似 A -> null 的产生式，其 SELECT 集为 FOLLOW(A)。

  推导过程

    1、对每个产生式进行拆分，如：
    E -> id | null 拆分成 E -> id，E -> null。
    2、运用规则求出每个产生式的 SELECT 集。
 */
function makeSelectSet(rules, terminalSymbols) {
  var firstSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : makeFirstSet(rules, terminalSymbols);
  var followSet = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : makeFollowSet(rules, terminalSymbols);
  var selectSet = new Map();
  rules.forEach(function (_ref) {
    var left = _ref.left,
      right = _ref.right;
    right.forEach(function (chainSet) {
      var pos = 0;
      var chain = chainSet[pos];
      var newRule = {
        left: left,
        right: chainSet
      };
      while (pos < chainSet.length && chain && chain[0] === $) {
        chain = chainSet[++pos];
      }
      if (chain === EMPTY_CHAIN) {
        selectSet.set(newRule, followSet[left]);
      } else {
        selectSet.set(newRule, makeUnionFirstSet(chainSet, firstSet, terminalSymbols));
      }
    });
  });
  return selectSet;
}
function isNotIntersect(selectSet) {
  var map = new Map();
  var _iterator = _createForOfIteratorHelper(selectSet),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        left = _step$value[0].left,
        sets = _step$value[1];
      if (map.has(left)) {
        var prevSets = map.get(left);
        var newSets = mergeSet(prevSets, sets);
        if (newSets.size !== prevSets.size + sets.length) {
          return false;
        }
        map.set(left, newSets);
      } else {
        map.set(left, new Set(sets));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
}
;// CONCATENATED MODULE: ./src/makePredictSet.js

function makePredictSet_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = makePredictSet_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function makePredictSet_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return makePredictSet_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return makePredictSet_arrayLikeToArray(o, minLen); }
function makePredictSet_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function makePredictSet(selectSet) {
  if (!isNotIntersect(selectSet)) throw new Error('Select set does not satisfy the LL(1) grammar');
  var predictSet = new Map();
  var _iterator = makePredictSet_createForOfIteratorHelper(selectSet),
    _step;
  try {
    var _loop = function _loop() {
      var _step$value = _slicedToArray(_step.value, 2),
        _step$value$ = _step$value[0],
        left = _step$value$.left,
        right = _step$value$.right,
        sets = _step$value[1];
      sets.forEach(function (chain) {
        if (!predictSet.has(chain)) predictSet.set(chain, new Map());
        var chainMap = predictSet.get(chain);
        chainMap.set(left, right);
      });
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return predictSet;
}
;// CONCATENATED MODULE: ./src/index.js

function src_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = src_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function src_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return src_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return src_arrayLikeToArray(o, minLen); }
function src_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// run npx babel-node index.js






function makeLL1(grammars, terminalSymbols) {
  var rules = splitGrammars(grammars);
  var firstSet = makeFirstSet(rules, terminalSymbols);
  var followSet = makeFollowSet(rules, terminalSymbols, firstSet);
  var selectSet = makeSelectSet(rules, terminalSymbols, firstSet, followSet);
  var predictSet = makePredictSet(selectSet);
  return {
    startSymbol: rules[0].left,
    firstSet: firstSet,
    followSet: followSet,
    selectSet: selectSet,
    predictSet: predictSet,
    print: function print() {
      var leftSet = [];
      var chainSet = [];
      var indent = 2;
      var maxLength = indent;
      var _iterator = src_createForOfIteratorHelper(predictSet),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 1),
            chain = _step$value[0];
          chainSet.push(chain);
          maxLength = Math.max(maxLength, chain.length + indent);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      for (var left in firstSet) {
        leftSet.push(left);
        maxLength = Math.max(maxLength, left.length + indent);
      }
      var result = new Array(leftSet.length + 1).fill([]).map(function () {
        return new Array(chainSet.length + 1).fill('');
      });
      for (var i = 0; i < chainSet.length; ++i) {
        result[0][i + 1] = chainSet[i];
      }
      for (var _i = 0; _i < leftSet.length; ++_i) {
        result[_i + 1][0] = leftSet[_i];
      }
      var _iterator2 = src_createForOfIteratorHelper(predictSet),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            _chain = _step2$value[0],
            ruleMap = _step2$value[1];
          var col = result[0].indexOf(_chain);
          var row = void 0;
          var _iterator3 = src_createForOfIteratorHelper(ruleMap),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _step3$value = _slicedToArray(_step3.value, 2),
                _left = _step3$value[0],
                right = _step3$value[1];
              for (var _i3 = 0; _i3 < leftSet.length; ++_i3) {
                if (result[_i3 + 1][0] === _left) {
                  row = _i3 + 1;
                  break;
                }
              }
              result[row][col] = "-> ".concat(right.map(function (item) {
                return item + '';
              }).join(' '));
              maxLength = Math.max(maxLength, result[row][col].length + indent);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var colLength = maxLength + indent;
      var logStr = '';
      var splitStr = '\n' + ('|' + '-'.repeat(colLength)).repeat(chainSet.length + 1) + '|\n';
      for (var _i2 = 0; _i2 < result.length; ++_i2) {
        logStr += splitStr + '|';
        for (var j = 0; j < result[_i2].length; ++j) {
          var term = _i2 === 0 || j === 0 ? " \x1b[33;1m " + result[_i2][j] + " \x1b[0m " : " \x1b[32;1m " + result[_i2][j] + " \x1b[0m ";
          logStr += term + ' '.repeat(maxLength + 13 - term.length) + '|';
        }
      }
      logStr += splitStr;
      console.log(logStr);
    }
  };
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=ll1.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// NAMESPACE OBJECT: ./src/parser/constructor.js
var constructor_namespaceObject = {};
__webpack_require__.r(constructor_namespaceObject);
__webpack_require__.d(constructor_namespaceObject, {
  "$appendBlock": () => ($appendBlock),
  "$binaryExpression": () => ($binaryExpression),
  "$createCall": () => ($createCall),
  "$createMemberExpression": () => ($createMemberExpression),
  "$createVariableDeclarator": () => ($createVariableDeclarator),
  "$createVariableDeclaratorInit": () => ($createVariableDeclaratorInit),
  "$expressionStatement": () => ($expressionStatement),
  "$logicalExpression": () => ($logicalExpression),
  "$mergeAlternate": () => ($mergeAlternate),
  "$mergeArray": () => ($mergeArray),
  "$mergeAssignment": () => ($mergeAssignment),
  "$mergeCallParam": () => ($mergeCallParam),
  "$mergeForBody": () => ($mergeForBody),
  "$mergeForInit": () => ($mergeForInit),
  "$mergeForTest": () => ($mergeForTest),
  "$mergeForUpdate": () => ($mergeForUpdate),
  "$mergeFunctionBody": () => ($mergeFunctionBody),
  "$mergeFunctionId": () => ($mergeFunctionId),
  "$mergeFunctionParam": () => ($mergeFunctionParam),
  "$mergeIfConsequent": () => ($mergeIfConsequent),
  "$mergeIfTest": () => ($mergeIfTest),
  "$mergeMember": () => ($mergeMember),
  "$mergeReturn": () => ($mergeReturn),
  "$mergeWhileBody": () => ($mergeWhileBody),
  "$mergeWhileTest": () => ($mergeWhileTest),
  "$popBlock": () => ($popBlock),
  "$unaryExpression": () => ($unaryExpression),
  "$updateCallInfo": () => ($updateCallInfo),
  "_and": () => (constructor_and),
  "_begin": () => (constructor_begin),
  "_break": () => (constructor_break),
  "_congruent": () => (_congruent),
  "_continue": () => (constructor_continue),
  "_defined": () => (_defined),
  "_divide": () => (_divide),
  "_elif": () => (constructor_elif),
  "_equal": () => (_equal),
  "_for": () => (constructor_for),
  "_function": () => (_function),
  "_greater": () => (_greater),
  "_greaterEqual": () => (_greaterEqual),
  "_identifier": () => (_identifier),
  "_if": () => (constructor_if),
  "_leftBrace": () => (_leftBrace),
  "_less": () => (_less),
  "_lessEqual": () => (_lessEqual),
  "_literal": () => (_literal),
  "_minus": () => (_minus),
  "_multiply": () => (_multiply),
  "_not": () => (constructor_not),
  "_notEqual": () => (_notEqual),
  "_or": () => (constructor_or),
  "_pass": () => (constructor_pass),
  "_plus": () => (_plus),
  "_return": () => (constructor_return),
  "_surplus": () => (_surplus),
  "_while": () => (constructor_while),
  "createRoot": () => (createRoot)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
;// CONCATENATED MODULE: ./src/Scanner.js


var Scanner = /*#__PURE__*/function () {
  function Scanner(stream) {
    _classCallCheck(this, Scanner);
    this.stream = stream;
    this.pos = 0;
  }
  _createClass(Scanner, [{
    key: "isEnd",
    value: function isEnd() {
      return this.pos >= this.stream.length;
    }
  }, {
    key: "peek",
    value: function peek() {
      if (!this.isEnd()) return this.stream[this.pos];
    }
  }, {
    key: "read",
    value: function read() {
      if (!this.isEnd()) return this.stream[this.pos++];
    }
  }, {
    key: "back",
    value: function back() {
      if (!this.isEnd()) return this.stream[--this.pos];
    }
  }]);
  return Scanner;
}();

;// CONCATENATED MODULE: ./src/error.js
function error(Error, err, source, loc) {
  source = "\x1B[33;2m".concat(source, "\x1B[0m");
  var space = ' '.repeat(source.length);
  var errLength = loc.end - loc.start + 1;
  var posSymbol = space.slice(0, loc.linePos - 1) + '^'.repeat(errLength) + space.slice(loc.linePos + errLength - 1);
  throw new Error(err + "\n\t".concat(source, "\tat: ").concat(loc.line, ":").concat(loc.linePos, "\n\t").concat(posSymbol));
}
;// CONCATENATED MODULE: ./src/lexer/Lexer.js




var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var symbol = "~`!@#$%^&*()_-+={[]}\\|;:'\",<.>/?";
var blank = ' \n\t\r';
var space = ' \t';
var line = '\n\r';

// 起始态
var Initialize = '<initialize>';
// 兜底命中
var Else = '<else>';
var Token = /*#__PURE__*/_createClass(
/**
 * location: {
 *  linePos,
 *  line,
 *  start,
 *  end
 * } 
 */
function Token(source, type, value, location) {
  _classCallCheck(this, Token);
  this.source = source;
  this.type = type;
  this.value = value;
  this.location = location;
});
var Lexel = /*#__PURE__*/function () {
  function Lexel(table) {
    _classCallCheck(this, Lexel);
    /**
     * table {
     *  [state]: states
     * }
     * 
     * states {
     *  [matcher]: { state?, isTerminate?, error? }
     * }
     */
    this.table = table;
  }
  _createClass(Lexel, [{
    key: "tokenize",
    value: function tokenize(sentence) {
      var _tokens, _tokens2, _tokens3;
      var lineSentence = sentence.split(/[\n\r]/g);
      var tokens = [];
      var table = this.table;
      var scanner = new Scanner(sentence + ' ');
      var _char = '';
      var fragment = '';
      var state = Initialize;
      var initPos = scanner.pos;
      var curLine = 1;
      var curLinePos = 1;
      var startLine = curLine;
      var startLinePos = curLinePos;
      while (_char = scanner.read()) {
        // 新行
        if (line.indexOf(_char) !== -1) {
          curLine++;
          curLinePos = 0;
        }
        var states = table[state];
        var isMatch = false;
        for (var matcher in states) {
          if (matcher.indexOf(_char) !== -1 || matcher === Else) {
            isMatch = true;
            var match = states[matcher];
            if (match.error) {
              error(SyntaxError, match.error(_char), lineSentence[curLine - 1], {
                linePos: startLinePos,
                line: curLine,
                start: initPos,
                end: scanner.pos - 1
              });
            }
            if (state === Initialize) {
              startLine = curLine;
              startLinePos = curLinePos;
            }
            state = match.state;
            if (state === Initialize) {
              initPos = scanner.pos;
              fragment = '';
            } else if (match.isTerminate) {
              // 添加 token
              if (line.indexOf(_char) !== -1) {
                curLine--;
              }
              curLinePos--;
              var source = lineSentence[curLine - 1];
              var type = state;
              var value = fragment;
              var location = {};
              location.linePos = startLinePos;
              location.line = startLine;
              location.start = initPos;
              location.end = scanner.pos - 2;
              tokens.push(new Token(source, type, value, location));
              fragment = '';
              state = Initialize;
              scanner.back();
              initPos = scanner.pos;
            } else {
              fragment += _char;
            }
            if (!table[state]) {
              error(SyntaxError, "Unexpected token '".concat(_char, "'"), lineSentence[curLine - 1], {
                linePos: startLinePos,
                line: curLine,
                start: initPos,
                end: scanner.pos - 1
              });
            }
            break;
          }
        }
        if (!isMatch) {
          error(SyntaxError, "Invalid or unexpected token", lineSentence[curLine - 1], {
            linePos: startLinePos,
            line: curLine,
            start: initPos,
            end: scanner.pos - 1
          });
        }
        curLinePos++;
      }
      if (state !== Initialize) {
        error(SyntaxError, 'Status not ended', lineSentence[curLine - 1], {
          linePos: startLinePos,
          line: curLine,
          start: initPos,
          end: scanner.pos - 1
        });
      }
      tokens.push(new Token((_tokens = tokens[tokens.length - 1]) === null || _tokens === void 0 ? void 0 : _tokens.source, '$', (_tokens2 = tokens[tokens.length - 1]) === null || _tokens2 === void 0 ? void 0 : _tokens2.value, (_tokens3 = tokens[tokens.length - 1]) === null || _tokens3 === void 0 ? void 0 : _tokens3.location));
      return tokens;
    }
  }, {
    key: "toString",
    value: function toString(tokens) {
      var tokenString = '';
      tokens.forEach(function (_ref) {
        var type = _ref.type;
        tokenString += type + ' ';
      });
      return tokenString.slice(0, -1);
    }
  }]);
  return Lexel;
}();

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
;// CONCATENATED MODULE: ./src/lexer/table.js

var _Initialize, _chars, _zero, _number, _decimals, _def, _def2, _def3, _readOrRetrun, _readOrRetrun2, _read, _read2, _return, _return2, _return3, _return4, _funcFor, _func, _func2, _func3, _beginBreak, _begin, _begin2, _begin3, _begin4, _break, _break2, _break3, _break4, _continue, _continue2, _continue3, _continue4, _continue5, _continue6, _continue7, _continue8, _endElifElse, _end, _end2, _elifElse, _elif, _elif2, _else, _else2, _if, _if2, _or, _or2, _and, _and2, _and3, _notNull, _not, _not2, _null, _null2, _null3, _pass, _pass2, _pass3, _pass4, _for, _for2, _True, _True2, _True3, _True4, _False, _False2, _False3, _False4, _False5, _while, _while2, _while3, _while4, _while5, _Initialize$chars$zer;

/* harmony default export */ const table = (_Initialize$chars$zer = {}, _defineProperty(_Initialize$chars$zer, Initialize, (_Initialize = {}, _defineProperty(_Initialize, 'd', {
  state: 'def1'
}), _defineProperty(_Initialize, 'r', {
  state: 'readOrRetrun1'
}), _defineProperty(_Initialize, 'f', {
  state: 'funcFor'
}), _defineProperty(_Initialize, 'b', {
  state: 'beginBreak'
}), _defineProperty(_Initialize, 'e', {
  state: 'endElifElse1'
}), _defineProperty(_Initialize, 'i', {
  state: 'if1'
}), _defineProperty(_Initialize, 'o', {
  state: 'or1'
}), _defineProperty(_Initialize, 'a', {
  state: 'and1'
}), _defineProperty(_Initialize, 'n', {
  state: 'notNull1'
}), _defineProperty(_Initialize, 'p', {
  state: 'pass1'
}), _defineProperty(_Initialize, 'w', {
  state: 'while1'
}), _defineProperty(_Initialize, 'c', {
  state: 'continue1'
}), _defineProperty(_Initialize, 'T', {
  state: 'True1'
}), _defineProperty(_Initialize, 'F', {
  state: 'False1'
}), _defineProperty(_Initialize, chars, {
  state: 'chars'
}), _defineProperty(_Initialize, '0', {
  state: 'zero'
}), _defineProperty(_Initialize, number, {
  state: 'number'
}), _defineProperty(_Initialize, '"', {
  state: 'quotation'
}), _defineProperty(_Initialize, '(', {
  state: 'leftBracket'
}), _defineProperty(_Initialize, ')', {
  state: 'rightBracket'
}), _defineProperty(_Initialize, '+', {
  state: 'plus'
}), _defineProperty(_Initialize, '-', {
  state: 'minus'
}), _defineProperty(_Initialize, '*', {
  state: 'multiply'
}), _defineProperty(_Initialize, '/', {
  state: 'divide'
}), _defineProperty(_Initialize, '%', {
  state: 'surplus'
}), _defineProperty(_Initialize, '=', {
  state: 'equalWrite'
}), _defineProperty(_Initialize, ';', {
  state: 'semicolon'
}), _defineProperty(_Initialize, '#', {
  state: 'pound'
}), _defineProperty(_Initialize, ':', {
  state: 'colon'
}), _defineProperty(_Initialize, ',', {
  state: 'comma'
}), _defineProperty(_Initialize, '>', {
  state: 'greaterWrite'
}), _defineProperty(_Initialize, '<', {
  state: 'lessWrite'
}), _defineProperty(_Initialize, '{', {
  state: 'leftBrace'
}), _defineProperty(_Initialize, '}', {
  state: 'rightBrace'
}), _defineProperty(_Initialize, blank, {
  state: Initialize
}), _Initialize)), _defineProperty(_Initialize$chars$zer, 'chars', (_chars = {}, _defineProperty(_chars, chars + number, {
  state: 'chars'
}), _defineProperty(_chars, Else, {
  state: 'identifier',
  isTerminate: true
}), _chars)), _defineProperty(_Initialize$chars$zer, 'zero', (_zero = {}, _defineProperty(_zero, number, {
  error: function error() {
    return 'Numbers cannot contain leading zeros';
  }
}), _defineProperty(_zero, '.', {
  state: 'decimals'
}), _defineProperty(_zero, Else, {
  state: 'literal',
  isTerminate: true
}), _zero)), _defineProperty(_Initialize$chars$zer, 'number', (_number = {}, _defineProperty(_number, number, {
  state: 'number'
}), _defineProperty(_number, '.', {
  state: 'decimals'
}), _defineProperty(_number, Else, {
  state: 'literal',
  isTerminate: true
}), _number)), _defineProperty(_Initialize$chars$zer, 'decimals', (_decimals = {}, _defineProperty(_decimals, number, {
  state: 'decimals'
}), _defineProperty(_decimals, '.', {
  error: function error(_char) {
    return "Unexpected token '".concat(_char, "'");
  }
}), _defineProperty(_decimals, Else, {
  state: 'literal',
  isTerminate: true
}), _decimals)), _defineProperty(_Initialize$chars$zer, 'def1', (_def = {}, _defineProperty(_def, 'e', {
  state: 'def2'
}), _defineProperty(_def, chars + number, {
  state: 'chars'
}), _defineProperty(_def, Else, {
  state: 'identifier',
  isTerminate: true
}), _def)), _defineProperty(_Initialize$chars$zer, 'def2', (_def2 = {}, _defineProperty(_def2, 'f', {
  state: 'def3'
}), _defineProperty(_def2, chars + number, {
  state: 'chars'
}), _defineProperty(_def2, Else, {
  state: 'identifier',
  isTerminate: true
}), _def2)), _defineProperty(_Initialize$chars$zer, 'def3', (_def3 = {}, _defineProperty(_def3, chars + number, {
  state: 'chars'
}), _defineProperty(_def3, Else, {
  state: 'defined',
  isTerminate: true
}), _def3)), _defineProperty(_Initialize$chars$zer, 'readOrRetrun1', (_readOrRetrun = {}, _defineProperty(_readOrRetrun, 'e', {
  state: 'readOrRetrun2'
}), _defineProperty(_readOrRetrun, chars + number, {
  state: 'chars'
}), _defineProperty(_readOrRetrun, Else, {
  state: 'identifier',
  isTerminate: true
}), _readOrRetrun)), _defineProperty(_Initialize$chars$zer, 'readOrRetrun2', (_readOrRetrun2 = {}, _defineProperty(_readOrRetrun2, 'a', {
  state: 'read3'
}), _defineProperty(_readOrRetrun2, 't', {
  state: 'return3'
}), _defineProperty(_readOrRetrun2, chars + number, {
  state: 'chars'
}), _defineProperty(_readOrRetrun2, Else, {
  state: 'identifier',
  isTerminate: true
}), _readOrRetrun2)), _defineProperty(_Initialize$chars$zer, 'read3', (_read = {}, _defineProperty(_read, 'd', {
  state: 'read4'
}), _defineProperty(_read, chars + number, {
  state: 'chars'
}), _defineProperty(_read, Else, {
  state: 'identifier',
  isTerminate: true
}), _read)), _defineProperty(_Initialize$chars$zer, 'read4', (_read2 = {}, _defineProperty(_read2, chars + number, {
  state: 'chars'
}), _defineProperty(_read2, Else, {
  state: 'defined',
  isTerminate: true
}), _read2)), _defineProperty(_Initialize$chars$zer, 'return3', (_return = {}, _defineProperty(_return, 'u', {
  state: 'return4'
}), _defineProperty(_return, chars + number, {
  state: 'chars'
}), _defineProperty(_return, Else, {
  state: 'identifier',
  isTerminate: true
}), _return)), _defineProperty(_Initialize$chars$zer, 'return4', (_return2 = {}, _defineProperty(_return2, 'r', {
  state: 'return5'
}), _defineProperty(_return2, chars + number, {
  state: 'chars'
}), _defineProperty(_return2, Else, {
  state: 'identifier',
  isTerminate: true
}), _return2)), _defineProperty(_Initialize$chars$zer, 'return5', (_return3 = {}, _defineProperty(_return3, 'n', {
  state: 'return6'
}), _defineProperty(_return3, chars + number, {
  state: 'chars'
}), _defineProperty(_return3, Else, {
  state: 'identifier',
  isTerminate: true
}), _return3)), _defineProperty(_Initialize$chars$zer, 'return6', (_return4 = {}, _defineProperty(_return4, chars + number, {
  state: 'chars'
}), _defineProperty(_return4, Else, {
  state: 'return',
  isTerminate: true
}), _return4)), _defineProperty(_Initialize$chars$zer, 'funcFor', (_funcFor = {}, _defineProperty(_funcFor, 'u', {
  state: 'func2'
}), _defineProperty(_funcFor, 'o', {
  state: 'for2'
}), _defineProperty(_funcFor, chars + number, {
  state: 'chars'
}), _defineProperty(_funcFor, Else, {
  state: 'identifier',
  isTerminate: true
}), _funcFor)), _defineProperty(_Initialize$chars$zer, 'func2', (_func = {}, _defineProperty(_func, 'n', {
  state: 'func3'
}), _defineProperty(_func, chars + number, {
  state: 'chars'
}), _defineProperty(_func, Else, {
  state: 'identifier',
  isTerminate: true
}), _func)), _defineProperty(_Initialize$chars$zer, 'func3', (_func2 = {}, _defineProperty(_func2, 'c', {
  state: 'func4'
}), _defineProperty(_func2, chars + number, {
  state: 'chars'
}), _defineProperty(_func2, Else, {
  state: 'identifier',
  isTerminate: true
}), _func2)), _defineProperty(_Initialize$chars$zer, 'func4', (_func3 = {}, _defineProperty(_func3, chars + number, {
  state: 'chars'
}), _defineProperty(_func3, Else, {
  state: 'function',
  isTerminate: true
}), _func3)), _defineProperty(_Initialize$chars$zer, 'beginBreak', (_beginBreak = {}, _defineProperty(_beginBreak, 'e', {
  state: 'begin2'
}), _defineProperty(_beginBreak, 'r', {
  state: 'break2'
}), _defineProperty(_beginBreak, chars + number, {
  state: 'chars'
}), _defineProperty(_beginBreak, Else, {
  state: 'identifier',
  isTerminate: true
}), _beginBreak)), _defineProperty(_Initialize$chars$zer, 'begin2', (_begin = {}, _defineProperty(_begin, 'g', {
  state: 'begin3'
}), _defineProperty(_begin, chars + number, {
  state: 'chars'
}), _defineProperty(_begin, Else, {
  state: 'identifier',
  isTerminate: true
}), _begin)), _defineProperty(_Initialize$chars$zer, 'begin3', (_begin2 = {}, _defineProperty(_begin2, 'i', {
  state: 'begin4'
}), _defineProperty(_begin2, chars + number, {
  state: 'chars'
}), _defineProperty(_begin2, Else, {
  state: 'identifier',
  isTerminate: true
}), _begin2)), _defineProperty(_Initialize$chars$zer, 'begin4', (_begin3 = {}, _defineProperty(_begin3, 'n', {
  state: 'begin5'
}), _defineProperty(_begin3, chars + number, {
  state: 'chars'
}), _defineProperty(_begin3, Else, {
  state: 'identifier',
  isTerminate: true
}), _begin3)), _defineProperty(_Initialize$chars$zer, 'begin5', (_begin4 = {}, _defineProperty(_begin4, chars + number, {
  state: 'chars'
}), _defineProperty(_begin4, Else, {
  state: 'begin',
  isTerminate: true
}), _begin4)), _defineProperty(_Initialize$chars$zer, 'break2', (_break = {}, _defineProperty(_break, 'e', {
  state: 'break3'
}), _defineProperty(_break, chars + number, {
  state: 'chars'
}), _defineProperty(_break, Else, {
  state: 'identifier',
  isTerminate: true
}), _break)), _defineProperty(_Initialize$chars$zer, 'break3', (_break2 = {}, _defineProperty(_break2, 'a', {
  state: 'break4'
}), _defineProperty(_break2, chars + number, {
  state: 'chars'
}), _defineProperty(_break2, Else, {
  state: 'identifier',
  isTerminate: true
}), _break2)), _defineProperty(_Initialize$chars$zer, 'break4', (_break3 = {}, _defineProperty(_break3, 'k', {
  state: 'break5'
}), _defineProperty(_break3, chars + number, {
  state: 'chars'
}), _defineProperty(_break3, Else, {
  state: 'identifier',
  isTerminate: true
}), _break3)), _defineProperty(_Initialize$chars$zer, 'break5', (_break4 = {}, _defineProperty(_break4, chars + number, {
  state: 'chars'
}), _defineProperty(_break4, Else, {
  state: 'break',
  isTerminate: true
}), _break4)), _defineProperty(_Initialize$chars$zer, 'continue1', (_continue = {}, _defineProperty(_continue, 'o', {
  state: 'continue2'
}), _defineProperty(_continue, chars + number, {
  state: 'chars'
}), _defineProperty(_continue, Else, {
  state: 'identifier',
  isTerminate: true
}), _continue)), _defineProperty(_Initialize$chars$zer, 'continue2', (_continue2 = {}, _defineProperty(_continue2, 'n', {
  state: 'continue3'
}), _defineProperty(_continue2, chars + number, {
  state: 'chars'
}), _defineProperty(_continue2, Else, {
  state: 'identifier',
  isTerminate: true
}), _continue2)), _defineProperty(_Initialize$chars$zer, 'continue3', (_continue3 = {}, _defineProperty(_continue3, 't', {
  state: 'continue4'
}), _defineProperty(_continue3, chars + number, {
  state: 'chars'
}), _defineProperty(_continue3, Else, {
  state: 'identifier',
  isTerminate: true
}), _continue3)), _defineProperty(_Initialize$chars$zer, 'continue4', (_continue4 = {}, _defineProperty(_continue4, 'i', {
  state: 'continue5'
}), _defineProperty(_continue4, chars + number, {
  state: 'chars'
}), _defineProperty(_continue4, Else, {
  state: 'identifier',
  isTerminate: true
}), _continue4)), _defineProperty(_Initialize$chars$zer, 'continue5', (_continue5 = {}, _defineProperty(_continue5, 'n', {
  state: 'continue6'
}), _defineProperty(_continue5, chars + number, {
  state: 'chars'
}), _defineProperty(_continue5, Else, {
  state: 'identifier',
  isTerminate: true
}), _continue5)), _defineProperty(_Initialize$chars$zer, 'continue6', (_continue6 = {}, _defineProperty(_continue6, 'u', {
  state: 'continue7'
}), _defineProperty(_continue6, chars + number, {
  state: 'chars'
}), _defineProperty(_continue6, Else, {
  state: 'identifier',
  isTerminate: true
}), _continue6)), _defineProperty(_Initialize$chars$zer, 'continue7', (_continue7 = {}, _defineProperty(_continue7, 'e', {
  state: 'continue8'
}), _defineProperty(_continue7, chars + number, {
  state: 'chars'
}), _defineProperty(_continue7, Else, {
  state: 'identifier',
  isTerminate: true
}), _continue7)), _defineProperty(_Initialize$chars$zer, 'continue8', (_continue8 = {}, _defineProperty(_continue8, chars + number, {
  state: 'chars'
}), _defineProperty(_continue8, Else, {
  state: 'continue',
  isTerminate: true
}), _continue8)), _defineProperty(_Initialize$chars$zer, 'endElifElse1', (_endElifElse = {}, _defineProperty(_endElifElse, 'n', {
  state: 'end2'
}), _defineProperty(_endElifElse, 'l', {
  state: 'elifElse2'
}), _defineProperty(_endElifElse, chars + number, {
  state: 'chars'
}), _defineProperty(_endElifElse, Else, {
  state: 'identifier',
  isTerminate: true
}), _endElifElse)), _defineProperty(_Initialize$chars$zer, 'end2', (_end = {}, _defineProperty(_end, 'd', {
  state: 'end3'
}), _defineProperty(_end, chars + number, {
  state: 'chars'
}), _defineProperty(_end, Else, {
  state: 'identifier',
  isTerminate: true
}), _end)), _defineProperty(_Initialize$chars$zer, 'end3', (_end2 = {}, _defineProperty(_end2, chars + number, {
  state: 'chars'
}), _defineProperty(_end2, Else, {
  state: 'end',
  isTerminate: true
}), _end2)), _defineProperty(_Initialize$chars$zer, 'elifElse2', (_elifElse = {}, _defineProperty(_elifElse, 'i', {
  state: 'elif3'
}), _defineProperty(_elifElse, 's', {
  state: 'else3'
}), _defineProperty(_elifElse, chars + number, {
  state: 'chars'
}), _defineProperty(_elifElse, Else, {
  state: 'identifier',
  isTerminate: true
}), _elifElse)), _defineProperty(_Initialize$chars$zer, 'elif3', (_elif = {}, _defineProperty(_elif, 'f', {
  state: 'elif4'
}), _defineProperty(_elif, chars + number, {
  state: 'chars'
}), _defineProperty(_elif, Else, {
  state: 'identifier',
  isTerminate: true
}), _elif)), _defineProperty(_Initialize$chars$zer, 'elif4', (_elif2 = {}, _defineProperty(_elif2, chars + number, {
  state: 'chars'
}), _defineProperty(_elif2, Else, {
  state: 'elif',
  isTerminate: true
}), _elif2)), _defineProperty(_Initialize$chars$zer, 'else3', (_else = {}, _defineProperty(_else, 'e', {
  state: 'else4'
}), _defineProperty(_else, chars + number, {
  state: 'chars'
}), _defineProperty(_else, Else, {
  state: 'identifier',
  isTerminate: true
}), _else)), _defineProperty(_Initialize$chars$zer, 'else4', (_else2 = {}, _defineProperty(_else2, chars + number, {
  state: 'chars'
}), _defineProperty(_else2, Else, {
  state: 'else',
  isTerminate: true
}), _else2)), _defineProperty(_Initialize$chars$zer, 'if1', (_if = {}, _defineProperty(_if, 'f', {
  state: 'if2'
}), _defineProperty(_if, chars + number, {
  state: 'chars'
}), _defineProperty(_if, Else, {
  state: 'identifier',
  isTerminate: true
}), _if)), _defineProperty(_Initialize$chars$zer, 'if2', (_if2 = {}, _defineProperty(_if2, chars + number, {
  state: 'chars'
}), _defineProperty(_if2, Else, {
  state: 'if',
  isTerminate: true
}), _if2)), _defineProperty(_Initialize$chars$zer, 'or1', (_or = {}, _defineProperty(_or, 'r', {
  state: 'or2'
}), _defineProperty(_or, chars + number, {
  state: 'chars'
}), _defineProperty(_or, Else, {
  state: 'identifier',
  isTerminate: true
}), _or)), _defineProperty(_Initialize$chars$zer, 'or2', (_or2 = {}, _defineProperty(_or2, chars + number, {
  state: 'chars'
}), _defineProperty(_or2, Else, {
  state: 'or',
  isTerminate: true
}), _or2)), _defineProperty(_Initialize$chars$zer, 'and1', (_and = {}, _defineProperty(_and, 'n', {
  state: 'and2'
}), _defineProperty(_and, chars + number, {
  state: 'chars'
}), _defineProperty(_and, Else, {
  state: 'identifier',
  isTerminate: true
}), _and)), _defineProperty(_Initialize$chars$zer, 'and2', (_and2 = {}, _defineProperty(_and2, 'd', {
  state: 'and3'
}), _defineProperty(_and2, chars + number, {
  state: 'chars'
}), _defineProperty(_and2, Else, {
  state: 'identifier',
  isTerminate: true
}), _and2)), _defineProperty(_Initialize$chars$zer, 'and3', (_and3 = {}, _defineProperty(_and3, chars + number, {
  state: 'chars'
}), _defineProperty(_and3, Else, {
  state: 'and',
  isTerminate: true
}), _and3)), _defineProperty(_Initialize$chars$zer, 'notNull1', (_notNull = {}, _defineProperty(_notNull, 'o', {
  state: 'not2'
}), _defineProperty(_notNull, 'u', {
  state: 'null2'
}), _defineProperty(_notNull, chars + number, {
  state: 'chars'
}), _defineProperty(_notNull, Else, {
  state: 'identifier',
  isTerminate: true
}), _notNull)), _defineProperty(_Initialize$chars$zer, 'not2', (_not = {}, _defineProperty(_not, 't', {
  state: 'not3'
}), _defineProperty(_not, chars + number, {
  state: 'chars'
}), _defineProperty(_not, Else, {
  state: 'identifier',
  isTerminate: true
}), _not)), _defineProperty(_Initialize$chars$zer, 'not3', (_not2 = {}, _defineProperty(_not2, chars + number, {
  state: 'chars'
}), _defineProperty(_not2, '=', {
  state: 'notEqual'
}), _defineProperty(_not2, Else, {
  state: 'not',
  isTerminate: true
}), _not2)), _defineProperty(_Initialize$chars$zer, 'notEqual', _defineProperty({}, Else, {
  state: 'notEqual',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'null2', (_null = {}, _defineProperty(_null, 'l', {
  state: 'null3'
}), _defineProperty(_null, chars + number, {
  state: 'chars'
}), _defineProperty(_null, Else, {
  state: 'identifier',
  isTerminate: true
}), _null)), _defineProperty(_Initialize$chars$zer, 'null3', (_null2 = {}, _defineProperty(_null2, 'l', {
  state: 'null4'
}), _defineProperty(_null2, chars + number, {
  state: 'chars'
}), _defineProperty(_null2, Else, {
  state: 'identifier',
  isTerminate: true
}), _null2)), _defineProperty(_Initialize$chars$zer, 'null4', (_null3 = {}, _defineProperty(_null3, chars + number, {
  state: 'chars'
}), _defineProperty(_null3, Else, {
  state: 'literal',
  isTerminate: true
}), _null3)), _defineProperty(_Initialize$chars$zer, 'pass1', (_pass = {}, _defineProperty(_pass, 'a', {
  state: 'pass2'
}), _defineProperty(_pass, chars + number, {
  state: 'chars'
}), _defineProperty(_pass, Else, {
  state: 'identifier',
  isTerminate: true
}), _pass)), _defineProperty(_Initialize$chars$zer, 'pass2', (_pass2 = {}, _defineProperty(_pass2, 's', {
  state: 'pass3'
}), _defineProperty(_pass2, chars + number, {
  state: 'chars'
}), _defineProperty(_pass2, Else, {
  state: 'identifier',
  isTerminate: true
}), _pass2)), _defineProperty(_Initialize$chars$zer, 'pass3', (_pass3 = {}, _defineProperty(_pass3, 's', {
  state: 'pass4'
}), _defineProperty(_pass3, chars + number, {
  state: 'chars'
}), _defineProperty(_pass3, Else, {
  state: 'identifier',
  isTerminate: true
}), _pass3)), _defineProperty(_Initialize$chars$zer, 'pass4', (_pass4 = {}, _defineProperty(_pass4, chars + number, {
  state: 'chars'
}), _defineProperty(_pass4, Else, {
  state: 'pass',
  isTerminate: true
}), _pass4)), _defineProperty(_Initialize$chars$zer, 'for2', (_for = {}, _defineProperty(_for, 'r', {
  state: 'for3'
}), _defineProperty(_for, chars + number, {
  state: 'chars'
}), _defineProperty(_for, Else, {
  state: 'identifier',
  isTerminate: true
}), _for)), _defineProperty(_Initialize$chars$zer, 'for3', (_for2 = {}, _defineProperty(_for2, chars + number, {
  state: 'chars'
}), _defineProperty(_for2, Else, {
  state: 'for',
  isTerminate: true
}), _for2)), _defineProperty(_Initialize$chars$zer, 'True1', (_True = {}, _defineProperty(_True, 'r', {
  state: 'True2'
}), _defineProperty(_True, chars + number, {
  state: 'chars'
}), _defineProperty(_True, Else, {
  state: 'identifier',
  isTerminate: true
}), _True)), _defineProperty(_Initialize$chars$zer, 'True2', (_True2 = {}, _defineProperty(_True2, 'u', {
  state: 'True3'
}), _defineProperty(_True2, chars + number, {
  state: 'chars'
}), _defineProperty(_True2, Else, {
  state: 'identifier',
  isTerminate: true
}), _True2)), _defineProperty(_Initialize$chars$zer, 'True3', (_True3 = {}, _defineProperty(_True3, 'e', {
  state: 'True4'
}), _defineProperty(_True3, chars + number, {
  state: 'chars'
}), _defineProperty(_True3, Else, {
  state: 'identifier',
  isTerminate: true
}), _True3)), _defineProperty(_Initialize$chars$zer, 'True4', (_True4 = {}, _defineProperty(_True4, chars + number, {
  state: 'chars'
}), _defineProperty(_True4, Else, {
  state: 'literal',
  isTerminate: true
}), _True4)), _defineProperty(_Initialize$chars$zer, 'False1', (_False = {}, _defineProperty(_False, 'a', {
  state: 'False2'
}), _defineProperty(_False, chars + number, {
  state: 'chars'
}), _defineProperty(_False, Else, {
  state: 'identifier',
  isTerminate: true
}), _False)), _defineProperty(_Initialize$chars$zer, 'False2', (_False2 = {}, _defineProperty(_False2, 'l', {
  state: 'False3'
}), _defineProperty(_False2, chars + number, {
  state: 'chars'
}), _defineProperty(_False2, Else, {
  state: 'identifier',
  isTerminate: true
}), _False2)), _defineProperty(_Initialize$chars$zer, 'False3', (_False3 = {}, _defineProperty(_False3, 's', {
  state: 'False4'
}), _defineProperty(_False3, chars + number, {
  state: 'chars'
}), _defineProperty(_False3, Else, {
  state: 'identifier',
  isTerminate: true
}), _False3)), _defineProperty(_Initialize$chars$zer, 'False4', (_False4 = {}, _defineProperty(_False4, 'e', {
  state: 'False5'
}), _defineProperty(_False4, chars + number, {
  state: 'chars'
}), _defineProperty(_False4, Else, {
  state: 'identifier',
  isTerminate: true
}), _False4)), _defineProperty(_Initialize$chars$zer, 'False5', (_False5 = {}, _defineProperty(_False5, chars + number, {
  state: 'chars'
}), _defineProperty(_False5, Else, {
  state: 'literal',
  isTerminate: true
}), _False5)), _defineProperty(_Initialize$chars$zer, 'while1', (_while = {}, _defineProperty(_while, 'h', {
  state: 'while2'
}), _defineProperty(_while, chars + number, {
  state: 'chars'
}), _defineProperty(_while, Else, {
  state: 'identifier',
  isTerminate: true
}), _while)), _defineProperty(_Initialize$chars$zer, 'while2', (_while2 = {}, _defineProperty(_while2, 'i', {
  state: 'while3'
}), _defineProperty(_while2, chars + number, {
  state: 'chars'
}), _defineProperty(_while2, Else, {
  state: 'identifier',
  isTerminate: true
}), _while2)), _defineProperty(_Initialize$chars$zer, 'while3', (_while3 = {}, _defineProperty(_while3, 'l', {
  state: 'while4'
}), _defineProperty(_while3, chars + number, {
  state: 'chars'
}), _defineProperty(_while3, Else, {
  state: 'identifier',
  isTerminate: true
}), _while3)), _defineProperty(_Initialize$chars$zer, 'while4', (_while4 = {}, _defineProperty(_while4, 'e', {
  state: 'while5'
}), _defineProperty(_while4, chars + number, {
  state: 'chars'
}), _defineProperty(_while4, Else, {
  state: 'identifier',
  isTerminate: true
}), _while4)), _defineProperty(_Initialize$chars$zer, 'while5', (_while5 = {}, _defineProperty(_while5, chars + number, {
  state: 'chars'
}), _defineProperty(_while5, Else, {
  state: 'while',
  isTerminate: true
}), _while5)), _defineProperty(_Initialize$chars$zer, 'quotation', _defineProperty({
  '"': {
    state: 'string'
  }
}, Else, {
  state: 'quotation'
})), _defineProperty(_Initialize$chars$zer, 'string', _defineProperty({}, Else, {
  state: 'literal',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'leftBracket', _defineProperty({}, Else, {
  state: 'leftBracket',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'rightBracket', _defineProperty({}, Else, {
  state: 'rightBracket',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'plus', _defineProperty({}, Else, {
  state: 'plus',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'minus', _defineProperty({}, Else, {
  state: 'minus',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'multiply', _defineProperty({}, Else, {
  state: 'multiply',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'divide', _defineProperty({}, Else, {
  state: 'divide',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'surplus', _defineProperty({}, Else, {
  state: 'surplus',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'equalWrite', _defineProperty({
  '=': {
    state: 'congruent'
  }
}, Else, {
  state: 'equal',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'congruent', _defineProperty({}, Else, {
  state: 'congruent',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'semicolon', _defineProperty({}, Else, {
  state: 'semicolon',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'colon', _defineProperty({}, Else, {
  state: 'colon',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'comma', _defineProperty({}, Else, {
  state: 'comma',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'leftBrace', _defineProperty({}, Else, {
  state: 'leftBrace',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'rightBrace', _defineProperty({}, Else, {
  state: 'rightBrace',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'pound', {
  '>': {
    state: 'comment'
  }
}), _defineProperty(_Initialize$chars$zer, 'comment', _defineProperty({
  '<': {
    state: 'commentReady'
  }
}, Else, {
  state: 'comment'
})), _defineProperty(_Initialize$chars$zer, 'commentReady', _defineProperty({
  '#': {
    state: Initialize
  }
}, Else, {
  state: 'comment'
})), _defineProperty(_Initialize$chars$zer, 'greaterWrite', _defineProperty({
  '=': {
    state: 'greaterEqualWrite'
  }
}, Else, {
  state: 'greater',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'greaterEqualWrite', _defineProperty({}, Else, {
  state: 'greaterEqual',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'lessWrite', _defineProperty({
  '=': {
    state: 'lessEqualWrite'
  }
}, Else, {
  state: 'less',
  isTerminate: true
})), _defineProperty(_Initialize$chars$zer, 'lessEqualWrite', _defineProperty({}, Else, {
  state: 'lessEqual',
  isTerminate: true
})), _Initialize$chars$zer);
;// CONCATENATED MODULE: ./src/lexer/index.js


/* harmony default export */ const lexer = (new Lexel(table));
// EXTERNAL MODULE: ./node_modules/ll1-grammar/build/ll1.js
var ll1 = __webpack_require__(508);
;// CONCATENATED MODULE: ./src/parser/astType.js
var AstType = {
  'Program': 'Program',
  'VariableDeclaration': 'VariableDeclaration',
  'VariableDeclarator': 'VariableDeclarator',
  'FunctionDeclaration': 'FunctionDeclaration',
  'Identifier': 'Identifier',
  'Literal': 'Literal',
  // Expression
  'EqualExpression': 'EqualExpression',
  'PlusExpression': 'PlusExpression',
  'MinusExpression': 'MinusExpression',
  'MultiplyExpression': 'MultiplyExpression',
  'DivideExpression': 'DivideExpression',
  'SurplusExpression': 'SurplusExpression',
  'CongruentExpression': 'CongruentExpression',
  'NotEqualExpression': 'NotEqualExpression',
  'NotExpression': 'NotExpression',
  'AndExpression': 'AndExpression',
  'OrExpression': 'OrExpression',
  'GreaterExpression': 'GreaterExpression',
  'GreaterEqualExpression': 'GreaterEqualExpression',
  'LessExpression': 'LessExpression',
  'LessEqualExpression': 'LessEqualExpression',
  'LogicalExpression': 'LogicalExpression',
  'UnaryExpression': 'UnaryExpression',
  'BinaryExpression': 'BinaryExpression',
  'AssignmentExpression': 'AssignmentExpression',
  "CallExpression": "CallExpression",
  "ArrayExpression": 'ArrayExpression',
  'MemberExpression': 'MemberExpression',
  // Statement
  'ExpressionStatement': 'ExpressionStatement',
  "BlockStatement": "BlockStatement",
  "ReturnStatement": "ReturnStatement",
  'IfStatement': 'IfStatement',
  "BreakStatement": 'BreakStatement',
  'ContinueStatement': 'ContinueStatement',
  'WhileStatement': 'WhileStatement',
  'ForStatement': 'ForStatement'
};
;// CONCATENATED MODULE: ./src/parser/constructor.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function createRoot(body, location) {
  return {
    type: AstType.Program,
    location: location,
    body: body
  };
}
function _defined(_ref) {
  var source = _ref.source,
    value = _ref.value,
    location = _ref.location;
  return {
    type: AstType.VariableDeclaration,
    source: source,
    location: location,
    declarations: [],
    kind: value
  };
}
function _identifier(_ref2) {
  var source = _ref2.source,
    value = _ref2.value,
    location = _ref2.location;
  return {
    type: AstType.Identifier,
    source: source,
    location: location,
    name: value
  };
}
function _literal(_ref3) {
  var source = _ref3.source,
    value = _ref3.value,
    location = _ref3.location;
  var result;
  if (value === 'True') {
    result = true;
  } else if (value === 'False') {
    result = false;
  } else if (value === 'null') {
    result = null;
  } else if (value[0] == '"' && value[value.length - 1] === '"') {
    result = value.slice(1, -1);
  } else {
    result = Number(value);
  }
  return {
    type: AstType.Literal,
    source: source,
    location: location,
    value: result,
    raw: value
  };
}
function $createVariableDeclaratorInit(astList) {
  var startIndex = astList.length - 3;
  var identifier = astList[startIndex];
  var init = astList[startIndex + 2];
  var variableDeclarator = _objectSpread(_objectSpread({
    type: AstType.VariableDeclarator
  }, mergeTokenInfo(identifier, init)), {}, {
    id: identifier,
    init: init
  });
  astList.splice(startIndex, 3, variableDeclarator);
  astList[astList.length - 2].declarations.push(astList.pop());
}
function $createVariableDeclarator(astList) {
  var startIndex = astList.length - 1;
  var identifier = astList[startIndex];
  var variableDeclarator = _objectSpread(_objectSpread({
    type: AstType.VariableDeclarator
  }, mergeTokenInfo(identifier)), {}, {
    id: identifier,
    init: null
  });
  astList.splice(startIndex, 1, variableDeclarator);
  astList[astList.length - 2].declarations.push(astList.pop());
}
function constructor_begin(_ref4) {
  var source = _ref4.source,
    location = _ref4.location;
  return {
    type: AstType.BlockStatement,
    source: source,
    location: location,
    body: []
  };
}
var constructor_pass = constructor_begin;
function $appendBlock(astList, blocks) {
  var startIndex = astList.length - 1;
  var block = astList[startIndex];
  blocks.push(block.body);
}
function $popBlock(_, blocks) {
  blocks.pop();
}
function constructor_return(_ref5) {
  var source = _ref5.source,
    location = _ref5.location;
  return {
    type: AstType.ReturnStatement,
    source: source,
    location: location,
    argument: null
  };
}
function constructor_break(_ref6) {
  var source = _ref6.source,
    location = _ref6.location;
  return {
    type: AstType.BreakStatement,
    source: source,
    location: location,
    argument: null
  };
}
function constructor_continue(_ref7) {
  var source = _ref7.source,
    location = _ref7.location;
  return {
    type: AstType.ContinueStatement,
    source: source,
    location: location,
    argument: null
  };
}
function $mergeReturn(astList) {
  var startIndex = astList.length - 1;
  if ([AstType.ReturnStatement, AstType.BreakStatement, AstType.ContinueStatement].includes(astList[startIndex].type)) return;
  var returnStatement = astList[startIndex - 1];
  var statement = astList[startIndex];
  returnStatement.argument = statement;
  astList.pop();
}
function _function(_ref8) {
  var source = _ref8.source,
    location = _ref8.location;
  return {
    type: AstType.FunctionDeclaration,
    source: source,
    location: location,
    id: null,
    params: [],
    body: null
  };
}
function $mergeFunctionId(astList) {
  var startIndex = astList.length - 2;
  var func = astList[startIndex];
  var id = astList[startIndex + 1];
  func.id = id;
  astList.pop();
}
function $mergeFunctionParam(astList) {
  var startIndex = astList.length - 2;
  var func = astList[startIndex];
  var id = astList[startIndex + 1];
  func.params.push(id);
  astList.pop();
}
function $mergeFunctionBody(astList) {
  var startIndex = astList.length - 2;
  var func = astList[startIndex];
  var body = astList[startIndex + 1];
  func.body = body;
  astList.pop();
}
function constructor_if(_ref9) {
  var source = _ref9.source,
    location = _ref9.location;
  return {
    type: AstType.IfStatement,
    source: source,
    location: location,
    test: null,
    consequent: null,
    alternate: null
  };
}
var constructor_elif = constructor_if;
function $mergeIfTest(astList) {
  var startIndex = astList.length - 2;
  var ifStatement = astList[startIndex];
  var test = astList[startIndex + 1];
  ifStatement.test = test;
  astList.splice(startIndex + 1, 1);
}
function $mergeIfConsequent(astList) {
  var startIndex = astList.length - 2;
  var ifStatement = astList[startIndex];
  var consequent = astList[startIndex + 1];
  ifStatement.consequent = consequent;
  astList.splice(startIndex + 1, 1);
}
function $mergeAlternate(astList) {
  var startIndex = astList.length - 2;
  var statement = astList[startIndex];
  var alternate = astList[startIndex + 1];
  var cur = statement;
  while (cur.alternate && cur.alternate.type === AstType.IfStatement) {
    cur = cur.alternate;
  }
  cur.alternate = alternate;
  astList.splice(startIndex + 1, 1);
}
function _equal(_ref10) {
  var value = _ref10.value,
    source = _ref10.source,
    location = _ref10.location;
  return {
    type: AstType.EqualExpression,
    source: source,
    location: location,
    operator: value
  };
}
function _plus(_ref11) {
  var value = _ref11.value,
    source = _ref11.source,
    location = _ref11.location;
  return {
    type: AstType.PlusExpression,
    source: source,
    location: location,
    operator: value
  };
}
function _minus(_ref12) {
  var value = _ref12.value,
    source = _ref12.source,
    location = _ref12.location;
  return {
    type: AstType.MinusExpression,
    source: source,
    location: location,
    operator: value
  };
}
function _multiply(_ref13) {
  var value = _ref13.value,
    source = _ref13.source,
    location = _ref13.location;
  return {
    type: AstType.MultiplyExpression,
    source: source,
    location: location,
    operator: value
  };
}
function _divide(_ref14) {
  var value = _ref14.value,
    source = _ref14.source,
    location = _ref14.location;
  return {
    type: AstType.DivideExpression,
    source: source,
    location: location,
    operator: value
  };
}
function _surplus(_ref15) {
  var value = _ref15.value,
    source = _ref15.source,
    location = _ref15.location;
  return {
    type: AstType.SurplusExpression,
    source: source,
    location: location,
    operator: value
  };
}
function _congruent(_ref16) {
  var value = _ref16.value,
    source = _ref16.source,
    location = _ref16.location;
  return {
    type: AstType.CongruentExpression,
    source: source,
    location: location,
    operator: value
  };
}
function _notEqual(_ref17) {
  var value = _ref17.value,
    source = _ref17.source,
    location = _ref17.location;
  return {
    type: AstType.NotEqualExpression,
    source: source,
    location: location,
    operator: value
  };
}
function constructor_not(_ref18) {
  var value = _ref18.value,
    source = _ref18.source,
    location = _ref18.location;
  return {
    type: AstType.NotExpression,
    source: source,
    location: location,
    operator: value
  };
}
function constructor_and(_ref19) {
  var value = _ref19.value,
    source = _ref19.source,
    location = _ref19.location;
  return {
    type: AstType.AndExpression,
    source: source,
    location: location,
    operator: value
  };
}
function constructor_or(_ref20) {
  var value = _ref20.value,
    source = _ref20.source,
    location = _ref20.location;
  return {
    type: AstType.OrExpression,
    source: source,
    location: location,
    operator: value
  };
}
function _greater(_ref21) {
  var value = _ref21.value,
    source = _ref21.source,
    location = _ref21.location;
  return {
    type: AstType.GreaterExpression,
    source: source,
    location: location,
    operator: value
  };
}
function _greaterEqual(_ref22) {
  var value = _ref22.value,
    source = _ref22.source,
    location = _ref22.location;
  return {
    type: AstType.GreaterEqualExpression,
    source: source,
    location: location,
    operator: value
  };
}
function _less(_ref23) {
  var value = _ref23.value,
    source = _ref23.source,
    location = _ref23.location;
  return {
    type: AstType.LessExpression,
    source: source,
    location: location,
    operator: value
  };
}
function _lessEqual(_ref24) {
  var value = _ref24.value,
    source = _ref24.source,
    location = _ref24.location;
  return {
    type: AstType.LessEqualExpression,
    source: source,
    location: location,
    operator: value
  };
}
function $mergeAssignment(astList) {
  var centerIndex = astList.length - 2;
  var operator = astList[centerIndex];
  var left = astList[centerIndex - 1];
  var right = astList[centerIndex + 1];
  var ast = _objectSpread(_objectSpread({
    type: AstType.AssignmentExpression
  }, mergeTokenInfo(left, operator, right)), {}, {
    left: left,
    operator: operator.operator,
    right: right
  });
  astList.splice(centerIndex - 1, 3, ast);
}
function $binaryExpression(astList) {
  var centerIndex = astList.length - 2;
  var operator = astList[centerIndex];
  var left = astList[centerIndex - 1];
  var right = astList[centerIndex + 1];
  var ast = _objectSpread(_objectSpread({
    type: AstType.BinaryExpression
  }, mergeTokenInfo(left, operator, right)), {}, {
    left: left,
    operator: operator.operator,
    right: right
  });
  astList.splice(centerIndex - 1, 3, ast);
}
function $logicalExpression(astList) {
  var centerIndex = astList.length - 2;
  var operator = astList[centerIndex];
  var left = astList[centerIndex - 1];
  var right = astList[centerIndex + 1];
  var ast = _objectSpread(_objectSpread({
    type: AstType.LogicalExpression
  }, mergeTokenInfo(left, operator, right)), {}, {
    left: left,
    operator: operator.operator,
    right: right
  });
  astList.splice(centerIndex - 1, 3, ast);
}
function $unaryExpression(astList) {
  var startIndex = astList.length - 2;
  var operator = astList[startIndex];
  var right = astList[startIndex + 1];
  var ast = _objectSpread(_objectSpread({
    type: AstType.UnaryExpression
  }, mergeTokenInfo(operator, right)), {}, {
    operator: operator.operator,
    argument: right
  });
  astList.splice(startIndex, 2, ast);
}
function $createCall(astList) {
  var startIndex = astList.length - 1;
  var id = astList[startIndex];
  var ast = _objectSpread(_objectSpread({
    type: AstType.CallExpression
  }, mergeTokenInfo(id)), {}, {
    callee: id,
    arguments: []
  });
  astList.splice(startIndex, 1, ast);
}
function $mergeCallParam(astList) {
  var startIndex = astList.length - 2;
  var call = astList[startIndex];
  var id = astList[startIndex + 1];
  call.arguments.push(id);
  astList.pop();
}
function $updateCallInfo(astList) {
  var startIndex = astList.length - 1;
  var call = astList[startIndex];
  var ast = _objectSpread(_objectSpread({}, call), mergeTokenInfo.apply(void 0, [call.callee].concat(_toConsumableArray(call.arguments))));
  astList.splice(startIndex, 1, ast);
}
function $expressionStatement(astList) {
  astList.push(createExpressionStatement(astList.pop()));
}
function constructor_while(_ref25) {
  var source = _ref25.source,
    location = _ref25.location;
  return {
    type: AstType.WhileStatement,
    source: source,
    location: location,
    test: null,
    body: null,
    alternate: null
  };
}
function $mergeWhileTest(astList) {
  var startIndex = astList.length - 2;
  var whileStatement = astList[startIndex];
  var test = astList[startIndex + 1];
  whileStatement.test = test;
  astList.splice(startIndex + 1, 1);
}
function $mergeWhileBody(astList) {
  var startIndex = astList.length - 2;
  var whileStatement = astList[startIndex];
  var body = astList[startIndex + 1];
  whileStatement.body = body;
  astList.splice(startIndex + 1, 1);
}
function constructor_for(_ref26) {
  var source = _ref26.source,
    location = _ref26.location;
  return {
    type: AstType.ForStatement,
    source: source,
    location: location,
    init: null,
    test: null,
    update: null,
    body: null,
    alternate: null
  };
}
function $mergeForInit(astList) {
  var tail = astList.length - 1;
  if (astList[tail].type === AstType.ForStatement) return;
  var forStatement = astList[tail - 1];
  var init = astList[tail];
  forStatement.init = init;
  astList.pop();
}
function $mergeForTest(astList) {
  var tail = astList.length - 1;
  if (astList[tail].type === AstType.ForStatement) return;
  var forStatement = astList[tail - 1];
  var test = astList[tail];
  forStatement.test = test;
  astList.pop();
}
function $mergeForUpdate(astList) {
  var tail = astList.length - 1;
  if (astList[tail].type === AstType.ForStatement) return;
  var forStatement = astList[tail - 1];
  var update = astList[tail];
  forStatement.update = update;
  astList.pop();
}
function $mergeForBody(astList) {
  var startIndex = astList.length - 2;
  var forStatement = astList[startIndex];
  var body = astList[startIndex + 1];
  forStatement.body = body;
  astList.splice(startIndex + 1, 1);
}
function _leftBrace(_ref27) {
  var source = _ref27.source,
    location = _ref27.location;
  return {
    type: AstType.ArrayExpression,
    source: source,
    location: location,
    elements: []
  };
}
function $mergeArray(astList) {
  var startIndex = astList.length - 2;
  var array = astList[startIndex];
  array.elements.push(astList.pop());
}
function $createMemberExpression(astList) {
  astList.pop();
  var id = astList.pop();
  var ast = _objectSpread(_objectSpread({
    type: AstType.MemberExpression
  }, mergeTokenInfo(id)), {}, {
    object: id,
    property: null
  });
  astList.push(ast);
}
function $mergeMember(astList) {
  var startIndex = astList.length - 2;
  var member = astList[startIndex];
  member.property = astList.pop();
}

// utils
function mergeTokenInfo() {
  for (var _len = arguments.length, asts = new Array(_len), _key = 0; _key < _len; _key++) {
    asts[_key] = arguments[_key];
  }
  var prevSource = asts[0].source;
  var set = new Set();
  set.add(prevSource);
  for (var i = 1; i < asts.length; ++i) {
    var curSource = asts[i].source;
    set.add(curSource);
  }
  return {
    source: _toConsumableArray(set).join(''),
    location: _objectSpread(_objectSpread({}, asts[0].location), {}, {
      end: asts[asts.length - 1].location.end
    })
  };
}
function createExpressionStatement(statement) {
  return {
    type: AstType.ExpressionStatement,
    source: statement.source,
    location: statement.location,
    expression: statement
  };
}
;// CONCATENATED MODULE: ./src/parser/Parser.js






var Parser = /*#__PURE__*/function () {
  function Parser(startSymbol, predictSet, constructor) {
    _classCallCheck(this, Parser);
    this.startSymbol = startSymbol;
    this.predictSet = predictSet;
    this.constructor = constructor;
  }
  _createClass(Parser, [{
    key: "parse",
    value: function parse(tokens) {
      var blocks = [];
      var astList = [];
      var stack = [];
      blocks.push(astList);
      stack.push(this.startSymbol);
      var scanner = new Scanner(tokens);
      var token;
      while (stack.length || !scanner.isEnd()) {
        if (!stack.length) {
          token = scanner.peek();
          if (token.type !== ll1.$) error(SyntaxError, "Unexpected token '".concat(token.value, "'"), token.source, token.location);else break;
        }
        token = scanner.peek();
        var terminalSymbol = token.type;
        // 抛出意外的终结符错误
        if (!this.predictSet.has(terminalSymbol)) {
          error(SyntaxError, "Unexpected token '".concat(token.value, "'"), token.source, token.location);
        }
        var expressionMap = this.predictSet.get(terminalSymbol);
        var left = stack.pop();
        if (left[0] === ll1.$) {
          var _this$constructor$lef, _this$constructor;
          (_this$constructor$lef = (_this$constructor = this.constructor)[left]) === null || _this$constructor$lef === void 0 ? void 0 : _this$constructor$lef.call(_this$constructor, blocks[blocks.length - 1], blocks);
          continue;
        } else if (left === token.type) {
          var _this$constructor2, _this$constructor3;
          var child = (_this$constructor2 = (_this$constructor3 = this.constructor)["_".concat(token.type)]) === null || _this$constructor2 === void 0 ? void 0 : _this$constructor2.call(_this$constructor3, token);
          if (child) blocks[blocks.length - 1].push(child);
          scanner.read();
          continue;
        }
        // 该终结符找不到对应产生式，说明文法不适用当前表达式，抛出语法错误
        if (!expressionMap.has(left)) {
          error(SyntaxError, "Unexpected token '".concat(token.value, "'"), token.source, token.location);
        }
        var right = expressionMap.get(left);
        if (right[0] === ll1.EMPTY_CHAIN) continue;
        for (var i = right.length - 1; i >= 0; --i) {
          if (right[i] === ll1.EMPTY_CHAIN) continue;else stack.push(right[i]);
        }
      }
      var location = {
        linePos: 1,
        line: 1,
        start: 0,
        end: astList.length ? astList[astList.length - 1].location.end : 0
      };
      return createRoot(astList, location);
    }
  }]);
  return Parser;
}();

;// CONCATENATED MODULE: ./src/parser/grammar.js

var grammars = ["Sentence                   ->  SingleStatement Semicolon Sentence | null", "SingleStatement            ->  Defined | Block | Function | Condition | Circulation | Assignment", "Semicolon                  ->  SingleSemicolon Semicolon'", "Semicolon'                 ->  SingleSemicolon Semicolon' | null", "SingleSemicolon            ->  semicolon", // 表达式 id; 1; 1+1; 1>2; 1 and 2; 1 or 2; not 2; a+b; -1;
"BinaryExpression           ->  ArithmeticExpression1 BinaryExpression' $expressionStatement", "BinaryExpression'          ->  LogicalExpression BinaryExpression' | ComparisonExpression BinaryExpression' | null", "ArithmeticExpression1      ->  ArithmeticExpression2 ArithmeticExpression1'", "ArithmeticExpression1'     ->  Operator1 ArithmeticExpression2 $binaryExpression ArithmeticExpression1' | null", "ArithmeticExpression2      ->  UnaryExpression ArithmeticExpression2'", "ArithmeticExpression2'     ->  Operator2 ArithmeticExpression2 $binaryExpression | null", "UnaryExpression            ->  Operator1 Variable $unaryExpression | Variable | not Variable $unaryExpression", "Variable                   ->  identifier Variable' | literal | leftBracket BinaryExpression rightBracket | Array Variable'", "Variable'                  ->  ArrayMember Variable''' | CallFunc | null", "Variable''                 ->  ArrayMember | null", "Variable'''                ->  CallFunc | null", "LogicalExpression          ->  or ArithmeticExpression1 $logicalExpression | and ArithmeticExpression1 $logicalExpression | congruent ArithmeticExpression1 $binaryExpression | notEqual ArithmeticExpression1 $binaryExpression", "ComparisonExpression       ->  greater ArithmeticExpression1 $binaryExpression |\n                                  greaterEqual ArithmeticExpression1 $binaryExpression | \n                                  less ArithmeticExpression1 $binaryExpression | \n                                  lessEqual ArithmeticExpression1 $binaryExpression", "Operator1                  ->  plus | minus", "Operator2                  ->  multiply | divide | surplus", // 声明 def id; def id = 1;
"Defined                    ->  defined identifier Defined'", "Defined'                   ->  equal Value $createVariableDeclaratorInit Defined'' | $createVariableDeclarator null", "Defined''                  ->  comma identifier Defined' | null", // 赋值
"Assignment                 ->  identifier Assignment'' Assignment'", "Assignment'                ->  equal Value $mergeAssignment $expressionStatement | CallFunc $expressionStatement | null", "Assignment''               ->  ArrayMember | null", "Call                       ->  $createCall leftBracket Call' rightBracket $updateCallInfo", "Call'                      ->  CallParams $mergeCallParam Call'' | null", "Call''                     ->  comma CallParams $mergeCallParam Call'' | null", "CallParams                 ->  BinaryExpression | Function", "CallFunc                   ->  Call CallFunc'", "CallFunc'                  ->  Call CallFunc' | null", "Value                      ->  BinaryExpression | Function | Condition | Circulation | Block", // 数组
"Array                      ->  leftBrace Array' rightBrace", "Array'                     ->  BinaryExpression $mergeArray Array'' | Function $mergeArray Array'' | null", "Array''                    ->  comma Array''' | null", "Array'''                   ->  BinaryExpression $mergeArray Array'' | Function $mergeArray Array''", "ArrayMember                ->  leftBrace $createMemberExpression BinaryExpression $mergeMember rightBrace ArrayMember'", "ArrayMember'               ->  ArrayMember | null", // 方法声明 func fn(): func fn(args1, args2);
"Function                   ->  function identifier $mergeFunctionId Params Colon SingleBlock $mergeFunctionBody", "Params                     ->  leftBracket Params' rightBracket", "Params'                    ->  identifier $mergeFunctionParam Params'' | null", "Params''                   ->  comma identifier $mergeFunctionParam Params'' | null", // 块级作用域 begin end; begin return end;
"Block                      ->  begin $appendBlock Sentence Block'", "Block'                     ->  end $popBlock | return Block'' | break Block'' | continue Block'''", "Block''                    ->  BinaryExpression $mergeReturn Block''' | Function $mergeReturn Block''' | Condition $mergeReturn Block''' | Block'''", "Block'''                   ->  Semicolon end $popBlock", // 条件语句 if(): elif(): else:
"Condition                  ->  If Elif", "If                         ->  if leftBracket BinaryExpression rightBracket $mergeIfTest Colon SingleBlock $mergeIfConsequent", "Elif                       ->  elif leftBracket BinaryExpression rightBracket $mergeIfTest Colon SingleBlock $mergeIfConsequent $mergeAlternate Elif |\n                                  Else | \n                                  null", "Else                       ->  else Colon SingleBlock $mergeAlternate", // 循环 for():
"Circulation                ->  For CirculationElse | While CirculationElse", "For                        ->  for leftBracket ForSentence' $mergeForInit SingleSemicolon ForSentence'' $mergeForTest SingleSemicolon ForSentence''' $mergeForUpdate rightBracket Colon SingleBlock  $mergeForBody", "ForSentence'               ->  Defined | Assignment | null", "ForSentence''              ->  BinaryExpression | null", "ForSentence'''             ->  Assignment | null", "While                      ->  while leftBracket BinaryExpression rightBracket $mergeWhileTest Colon SingleBlock $mergeWhileBody", "CirculationElse            ->  Else | null", // 
"SingleBlock                ->  Block | BinaryExpression | Function | pass | break SingleBlock' $mergeReturn | continue", "SingleBlock'               ->  BinaryExpression | null", // 单终结符
"Colon                      ->  colon"];
var terminalSymbols = 'defined|identifier|equal|congruent|notEqual|semicolon|leftBracket|rightBracket|literal|plus|minus|multiply|divide|surplus|function|begin|end|return|comma|colon|if|elif|else|or|and|not|greater|greaterEqual|less|lessEqual|pass|for|while|break|continue|leftBrace|rightBrace'.split('|');
var grammar_ll1 = (0,ll1.makeLL1)(grammars, terminalSymbols);
var startSymbol = grammar_ll1.startSymbol;
var predictSet = grammar_ll1.predictSet;
;// CONCATENATED MODULE: ./src/parser/index.js



/* harmony default export */ const parser = (new Parser(startSymbol, predictSet, constructor_namespaceObject));

;// CONCATENATED MODULE: ./src/compiler/Scope.js


var Scope = /*#__PURE__*/function () {
  function Scope(parent) {
    _classCallCheck(this, Scope);
    this.parent = parent;
    this.scope = new Map();
  }
  _createClass(Scope, [{
    key: "has",
    value: function has(identifier) {
      return this.scope.has(identifier);
    }
  }, {
    key: "get",
    value: function get(identifier) {
      var cur = this;
      while (cur && !cur.has(identifier)) {
        cur = cur.parent;
      }
      if (cur) {
        return cur.scope.get(identifier);
      }
    }
  }, {
    key: "set",
    value: function set(identifier, value) {
      var scope = this.get(identifier);
      if (scope) scope.scope.set(identifier, value);else this.scope.set(identifier, value);
    }
  }, {
    key: "setCur",
    value: function setCur(identifier, value) {
      this.scope.set(identifier, value);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.scope.clear();
    }
  }]);
  return Scope;
}();

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
;// CONCATENATED MODULE: ./src/compiler/package.js









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var packageType = {
  Literal: 'Literal',
  Function: 'Function',
  SystemFunction: 'SystemFunction',
  Array: 'Array'
};
var System = /*#__PURE__*/_createClass(function System() {
  _classCallCheck(this, System);
  _defineProperty(this, "__system__", true);
});
var Literal = /*#__PURE__*/function (_System) {
  _inherits(Literal, _System);
  var _super = _createSuper(Literal);
  function Literal(isRead, value) {
    var _this;
    _classCallCheck(this, Literal);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "__type__", packageType['Literal']);
    _this.isRead = isRead;
    _this.value = value;
    return _this;
  }
  return _createClass(Literal);
}(System);
var ArrayLiteral = /*#__PURE__*/function (_System2) {
  _inherits(ArrayLiteral, _System2);
  var _super2 = _createSuper(ArrayLiteral);
  function ArrayLiteral(array) {
    var _this2;
    _classCallCheck(this, ArrayLiteral);
    _this2 = _super2.call(this);
    _defineProperty(_assertThisInitialized(_this2), "__type__", packageType['Array']);
    _defineProperty(_assertThisInitialized(_this2), "append", new SystemFunction('append', function (args) {
      var _this2$array;
      (_this2$array = _this2.array).push.apply(_this2$array, _toConsumableArray(args.map(function (arg) {
        return package_assign(arg);
      })));
      return _assertThisInitialized(_this2);
    }));
    _defineProperty(_assertThisInitialized(_this2), "pop", new SystemFunction('pop', function () {
      return _this2.array.pop();
    }));
    _defineProperty(_assertThisInitialized(_this2), "reverse", new SystemFunction('reverse', function () {
      _this2.array.reverse();
      return _assertThisInitialized(_this2);
    }));
    _defineProperty(_assertThisInitialized(_this2), "copy", new SystemFunction('copy', function () {
      return new ArrayLiteral(_toConsumableArray(_this2.array));
    }));
    _this2.array = array;
    return _this2;
  }
  return _createClass(ArrayLiteral);
}(System);
var Function = /*#__PURE__*/function (_System3) {
  _inherits(Function, _System3);
  var _super3 = _createSuper(Function);
  function Function(name, params, body, scope) {
    var _this3;
    _classCallCheck(this, Function);
    _this3 = _super3.call(this);
    _defineProperty(_assertThisInitialized(_this3), "__type__", packageType['Function']);
    _this3.name = name;
    _this3.params = params.map(function (param) {
      return param.name;
    });
    _this3.length = params.length;
    _this3.body = body;
    _this3.scope = scope;
    return _this3;
  }
  return _createClass(Function);
}(System);
var SystemFunction = /*#__PURE__*/function (_System4) {
  _inherits(SystemFunction, _System4);
  var _super4 = _createSuper(SystemFunction);
  function SystemFunction(name, fn) {
    var _this4;
    _classCallCheck(this, SystemFunction);
    _this4 = _super4.call(this);
    _defineProperty(_assertThisInitialized(_this4), "__type__", packageType['SystemFunction']);
    _this4.name = name;
    _this4.fn = fn;
    return _this4;
  }
  return _createClass(SystemFunction);
}(System);
function package_assign(pack) {
  if (!(pack !== null && pack !== void 0 && pack.__type__)) return pack;
  if (pack.__type__ === packageType['Literal']) return new Literal(false, pack.value);else return pack;
}
function getValue(pack) {
  if (Array.isArray(pack)) {
    var _pack = _slicedToArray(pack, 2),
      array = _pack[0],
      index = _pack[1];
    return array.array[index];
  }
  if (!(pack !== null && pack !== void 0 && pack.__type__)) return pack;
  if (pack.__type__ === packageType['Literal']) {
    var _pack$value;
    if (((_pack$value = pack.value) === null || _pack$value === void 0 ? void 0 : _pack$value.__type__) === packageType['Function']) {
      return pack.value;
    } else {
      return pack.value;
    }
  } else if (pack.__type__ === packageType['Function']) {
    return pack;
  }
}
function package_toString(pack) {
  if (Array.isArray(pack)) {
    var _pack2 = _slicedToArray(pack, 2),
      array = _pack2[0],
      index = _pack2[1];
    return package_toString(array.array[index]);
  }
  if (!(pack !== null && pack !== void 0 && pack.__type__)) return basicType(pack);
  switch (pack.__type__) {
    case packageType['Literal']:
      return package_toString(pack.value);
    case packageType['Function']:
      return "\x1B[36;2m".concat("<Function ".concat(pack.name, ">"), "\x1B[0m");
    case packageType['SystemFunction']:
      return "\x1B[36;2m".concat("<SystemFunction ".concat(pack.name, ">"), "\x1B[0m");
    case packageType['Array']:
      return "{".concat(pack.array.map(function (item) {
        return ' ' + package_toString(item);
      }), " }");
    default:
      return basicType(pack.value);
  }
  function basicType(value) {
    switch (value) {
      case true:
        return "\x1B[32;2mTrue\x1B[0m";
      case false:
        return "\x1B[31;2mFalse\x1B[0m";
      case null:
        return "\x1B[30;2mnull\x1B[0m";
      case undefined:
        return "\x1B[30;2mnull\x1B[0m";
      default:
        if (typeof value === 'number') return "\x1B[33;2m".concat(value, "\x1B[0m");
        return value;
    }
  }
}
function getType(pack) {
  if (!(pack !== null && pack !== void 0 && pack.__type__)) return basicType(pack);
  switch (pack.__type__) {
    case packageType['Literal']:
      return getType(pack.value);
    case packageType['Function']:
    case packageType['SystemFunction']:
      return "<class function>";
    case packageType['Array']:
      return "<class array>";
    default:
      return basicType(pack.value);
  }
  function basicType(value) {
    switch (value) {
      case true:
        return "<class boolean>";
      case false:
        return "<class boolean>";
      case null:
        return "<class null>";
      case undefined:
        return "<class null>";
      default:
        if (typeof value === 'number') return "<class number>";
        if (typeof value === 'string') return "<class string>";
    }
  }
}
;// CONCATENATED MODULE: ./src/compiler/Compiler.js









var Compiler = /*#__PURE__*/function () {
  function Compiler() {
    _classCallCheck(this, Compiler);
    this.lexer = lexer;
    this.parser = parser;
    this.AstType = AstType;
  }
  _createClass(Compiler, [{
    key: "getGlobalScope",
    value: function getGlobalScope() {
      var _this = this;
      var globalScope = new Scope();
      globalScope.set('print', new SystemFunction('print', function (args, node) {
        var _console;
        (_console = console).log.apply(_console, _toConsumableArray(args.map(function (arg) {
          return package_toString(arg);
        })));
      }));
      globalScope.set('type', new SystemFunction('type', function (args, node) {
        var value = unlock(args[0]);
        return "\x1B[35;2m".concat(getType(value), "\x1B[0m");
      }));
      globalScope.set('eval', new SystemFunction('eval', function (args, node) {
        var code = args[0];
        if (getType(code) !== '<class string>') error(TypeError, "<eval>: param is not string", node.source, node.location);
        return _this.compile(code);
      }));
      globalScope.set('timer', new SystemFunction('timer', function (args, node) {
        var fn = args[0];
        var time = args[1];
        if (getType(fn) !== '<class function>') error(TypeError, "<timer>: param is not function", node.source, node.location);
        if (getType(time) !== '<class number>') error(TypeError, "<timer>: param is not number", node.source, node.location);
        var sum = 0;
        var timer = setInterval(function () {
          var _fn$params = _slicedToArray(fn.params, 2),
            stop = _fn$params[0],
            count = _fn$params[1];
          if (stop) {
            fn.scope.set(stop, new SystemFunction('stop', function () {
              clearInterval(timer);
            }));
          }
          if (count) {
            fn.scope.set(count, new Literal(false, ++sum));
          }
          _this.handle(fn.body, fn.scope, fn.scope);
          fn.scope.clear();
        }, getValue(time));
      }));
      globalScope.set('len', new SystemFunction('len', function (args, node) {
        var _array;
        var array = args[0];
        if (array.__type__ === packageType.Literal) array = array.value;
        if (((_array = array) === null || _array === void 0 ? void 0 : _array.__type__) === packageType.Array) return array.array.length;
        error(TypeError, "<len>: param is not array", node.arguments[0].source, node.arguments[0].location);
      }));
      return globalScope;
    }
  }, {
    key: "compile",
    value: function compile(sentence) {
      var tokens = this.lexer.tokenize(sentence);
      var ast = this.parser.parse(tokens);
      return this.handle(ast, null, this.getGlobalScope());
    }
  }, {
    key: "handle",
    value: function handle(root, gist, scope) {
      var _this2 = this;
      switch (root.type) {
        case AstType.Program:
          {
            var body = root.body;
            for (var i = 0; i < body.length; ++i) {
              var node = body[i];
              this.handle(node, null, scope);
            }
          }
          break;
        case AstType.BlockStatement:
          {
            var _body = root.body;
            scope = (gist === null || gist === void 0 ? void 0 : gist.constructor) === Scope ? gist : new Scope(scope);
            for (var _i = 0; _i < _body.length; ++_i) {
              var _node = _body[_i];
              var type = _node.type;
              if (type === AstType.ReturnStatement) {
                if ((gist === null || gist === void 0 ? void 0 : gist.constructor) === Scope) {
                  return unlock(this.handle(_node, null, scope));
                } else {
                  return this.handle(_node, null, scope);
                }
              } else if (type === AstType.BreakStatement) {
                return this.handle(_node, null, scope);
              } else if (type === AstType.ContinueStatement) {
                return this.handle(_node, null, scope);
              }
              var curRes = this.handle(_node, null, scope);
              if (Array.isArray(curRes)) {
                if (['return', 'break', 'continue'].includes(curRes[1])) {
                  if ((gist === null || gist === void 0 ? void 0 : gist.constructor) === Scope) {
                    return curRes[0];
                  } else {
                    return curRes;
                  }
                }
              }
            }
          }
          break;
        case AstType.VariableDeclaration:
          {
            var declarations = root.declarations,
              kind = root.kind;
            declarations.forEach(function (declaration) {
              return _this2.handle(declaration, kind, scope);
            });
          }
          break;
        case AstType.VariableDeclarator:
          {
            var id = root.id,
              init = root.init;
            var name = id.name;
            if (!scope.has(name)) {
              if (gist === 'def') {
                // def
                var result;
                if (init) {
                  var _result;
                  result = unlock(this.handle(init, null, scope));
                  result = ((_result = result) === null || _result === void 0 ? void 0 : _result.__type__) === packageType.Literal ? result.value : result;
                } else {
                  result = null;
                }
                scope.setCur(name, new Literal(false, result));
              } else {
                // read
                if (init) {
                  var _result3;
                  var _result2 = unlock(this.handle(init, null, scope));
                  _result2 = ((_result3 = _result2) === null || _result3 === void 0 ? void 0 : _result3.__type__) === packageType.Literal ? _result2.value : _result2;
                  scope.setCur(name, new Literal(true, _result2));
                } else {
                  error(SyntaxError, "Missing initializer in read declaration", root.source, root.location);
                }
              }
            } else {
              // 已存在着该变量
              error(SyntaxError, "Identifier '".concat(id.name, "' has already been declared"), id.source, id.location);
            }
          }
          break;
        case AstType.Identifier:
          {
            var _result4 = scope.get(root.name);
            if (_result4) {
              return _result4;
            } else {
              error(ReferenceError, "'".concat(root.name, "' is not defined"), root.source, root.location);
            }
          }
        case AstType.Literal:
          {
            return root.value;
          }
        case AstType.ExpressionStatement:
          {
            var expression = root.expression;
            return this.handle(expression, null, scope);
          }
        case AstType.BinaryExpression:
          {
            var left = root.left,
              operator = root.operator,
              right = root.right;
            switch (operator) {
              case '+':
                return unlock(getValue(this.handle(left, null, scope))) + unlock(getValue(this.handle(right, null, scope)));
              case '-':
                return unlock(getValue(this.handle(left, null, scope))) - unlock(getValue(this.handle(right, null, scope)));
              case '*':
                return unlock(getValue(this.handle(left, null, scope))) * unlock(getValue(this.handle(right, null, scope)));
              case '/':
                return unlock(getValue(this.handle(left, null, scope))) / unlock(getValue(this.handle(right, null, scope)));
              case '%':
                return unlock(getValue(this.handle(left, null, scope))) % unlock(getValue(this.handle(right, null, scope)));
              case '>':
                return unlock(getValue(this.handle(left, null, scope))) > unlock(getValue(this.handle(right, null, scope)));
              case '>=':
                return unlock(getValue(this.handle(left, null, scope))) >= unlock(getValue(this.handle(right, null, scope)));
              case '<':
                return unlock(getValue(this.handle(left, null, scope))) < unlock(getValue(this.handle(right, null, scope)));
              case '<=':
                return unlock(getValue(this.handle(left, null, scope))) <= unlock(getValue(this.handle(right, null, scope)));
              case '==':
                return unlock(getValue(this.handle(left, null, scope))) === unlock(getValue(this.handle(right, null, scope)));
              case 'not=':
                return unlock(getValue(this.handle(left, null, scope))) !== unlock(getValue(this.handle(right, null, scope)));
            }
          }
        case AstType.LogicalExpression:
          {
            var _left = root.left,
              _operator = root.operator,
              _right = root.right;
            switch (_operator) {
              case 'and':
                return unlock(getValue(this.handle(_left, null, scope))) && unlock(getValue(this.handle(_right, null, scope)));
              case 'or':
                return unlock(getValue(this.handle(_left, null, scope))) || unlock(getValue(this.handle(_right, null, scope)));
            }
          }
        case AstType.UnaryExpression:
          {
            var _operator2 = root.operator,
              argument = root.argument;
            switch (_operator2) {
              case '+':
                return +unlock(getValue(this.handle(argument, null, scope)));
              case '-':
                return -unlock(getValue(this.handle(argument, null, scope)));
              case 'not':
                return !unlock(getValue(this.handle(argument, null, scope)));
            }
          }
        case AstType.AssignmentExpression:
          {
            var _left2 = root.left,
              _right2 = root.right;
            if (_left2.type === AstType.Identifier) {
              var _result5 = scope.get(_left2.name);
              if (_result5) {
                if (_result5.__type__ === packageType.Function) {
                  error(TypeError, "Function is not variable", root.source, root.location);
                }
                if (_result5.__type__ === packageType.Literal) {
                  if (!_result5.isRead) {
                    var _thisRes;
                    var thisRes = unlock(this.handle(_right2, null, scope));
                    thisRes = ((_thisRes = thisRes) === null || _thisRes === void 0 ? void 0 : _thisRes.__type__) === packageType.Literal ? thisRes.value : thisRes;
                    _result5.value = thisRes;
                  } else {
                    error(TypeError, "Assignment to constant variable", root.source, root.location);
                  }
                }
              } else {
                error(SyntaxError, "Identifier '".concat(_left2.name, "' is not declared"), _left2.source, _left2.location);
              }
            } else {
              var _thisRes3;
              var _this$handle = this.handle(_left2, null, scope),
                _this$handle2 = _slicedToArray(_this$handle, 2),
                array = _this$handle2[0],
                index = _this$handle2[1];
              var _thisRes2 = unlock(this.handle(_right2, null, scope));
              _thisRes2 = ((_thisRes3 = _thisRes2) === null || _thisRes3 === void 0 ? void 0 : _thisRes3.__type__) === packageType.Literal ? _thisRes2.value : _thisRes2;
              array.array[index] = _thisRes2;
            }
          }
          break;
        case AstType.FunctionDeclaration:
          {
            var _id = root.id,
              params = root.params,
              _body2 = root.body;
            var _name = _id.name;
            var set = new Set();
            params.some(function (param) {
              // 检查是否有重复的参数名
              if (!set.has(param.name)) {
                set.add(param.name);
              } else {
                error(SyntaxError, "Identifier not repeatable params: ".concat(param.name), param.source, param.location);
              }
            });
            if (!scope.has(_name)) {
              scope.set(_name, new Function(_name, params, _body2, new Scope(scope)));
              return scope.get(_name);
            } else {
              error(SyntaxError, "Identifier '".concat(_name, "' has already been declared"), _id.source, _id.location);
            }
          }
          break;
        case AstType.CallExpression:
          {
            var _func;
            var callee = root.callee,
              args = root.arguments;
            var func = unlock(this.handle(callee, null, scope));
            if (((_func = func) === null || _func === void 0 ? void 0 : _func.__type__) === packageType.SystemFunction) {
              return func.fn.apply(null, [args.map(function (arg) {
                return _this2.handle(arg, null, scope);
              }), root, scope]);
            } else {
              var _func2, _func3;
              if (((_func2 = func) === null || _func2 === void 0 ? void 0 : _func2.__type__) === packageType.Literal) {
                func = func.value;
              }
              if (![packageType.Function, packageType.SystemFunction].includes((_func3 = func) === null || _func3 === void 0 ? void 0 : _func3.__type__)) {
                var identifier = callee;
                var isChained = false;
                while (identifier.type === AstType.CallExpression) {
                  identifier = identifier.callee;
                  isChained = true;
                }
                error(TypeError, "".concat(identifier.name + (isChained && '(...)'), " is not a function"), identifier.source, identifier.location);
              }
              if (func.__type__ === packageType.SystemFunction) {
                return func.fn.apply(null, [args.map(function (arg) {
                  return _this2.handle(arg, null, scope);
                }), root, scope]);
              }
              func.params.forEach(function (param, i) {
                if (args[i] == null) {
                  func.scope.setCur(param, new Literal(false, null));
                } else {
                  var _result6 = _this2.handle(args[i], null, scope);
                  var arg;
                  if (_result6.__type__) {
                    switch (_result6.__type__) {
                      case packageType.Literal:
                        arg = new Literal(false, _result6.value);
                        break;
                      default:
                        arg = _result6;
                    }
                  } else {
                    arg = new Literal(false, _result6);
                  }
                  func.scope.setCur(param, arg);
                }
              });
              var fnReturn = this.handle(func.body, func.scope, func.scope);
              func.scope.clear();
              return unlock(fnReturn);
            }
          }
        case AstType.ReturnStatement:
          {
            var _argument = root.argument;
            return [_argument ? unlock(this.handle(_argument, null, scope)) : null, 'return'];
          }
        case AstType.BreakStatement:
          {
            var _argument2 = root.argument;
            return [_argument2 ? unlock(this.handle(_argument2, null, scope)) : null, 'break'];
          }
        case AstType.ContinueStatement:
          {
            var _argument3 = root.argument;
            return [_argument3 ? unlock(this.handle(_argument3, null, scope)) : null, 'continue'];
          }
        case AstType.IfStatement:
          {
            var test = getValue(this.handle(root.test, null, scope));
            if (test) return this.handle(root['consequent'], null, scope);else if (root['alternate']) return this.handle(root['alternate'], null, scope);
            return null;
          }
        case AstType.WhileStatement:
          {
            while (getValue(this.handle(root.test, null, scope))) {
              var _thisRes4 = this.handle(root['body'], null, scope);
              if (Array.isArray(_thisRes4)) {
                if (_thisRes4[1] === 'break') return _thisRes4[0];else if (_thisRes4[1] === 'return') return _thisRes4;else if (_thisRes4[1] === 'continue') continue;
              }
            }
            if (root['alternate']) return this.handle(root['alternate'], null, scope);
          }
          break;
        case AstType.ForStatement:
          {
            var _init = root.init,
              _test = root.test,
              update = root.update,
              _body3 = root.body,
              alternate = root.alternate;
            var newScope = new Scope(scope);
            _init && this.handle(_init, null, newScope);
            while (!_test || getValue(this.handle(_test, null, newScope))) {
              var _thisRes5 = this.handle(_body3, null, newScope);
              update && this.handle(update, null, newScope);
              if (Array.isArray(_thisRes5)) {
                if (_thisRes5[1] === 'break') return _thisRes5[0];else if (_thisRes5[1] === 'return') return _thisRes5;else if (_thisRes5[1] === 'continue') continue;
              }
            }
            if (alternate) return this.handle(alternate, null, scope);
          }
          break;
        case AstType.ArrayExpression:
          {
            var elements = root.elements;
            return new ArrayLiteral(elements.map(function (elm) {
              return _this2.handle(elm, null, scope);
            }));
          }
        case AstType.MemberExpression:
          {
            var _array3;
            var object = root.object,
              property = root.property;
            var _array2 = this.handle(object, null, scope);
            var _index = this.handle(property, null, scope);
            if (_array2.__type__ === packageType.Literal) _array2 = _array2.value;
            if (((_array3 = _array2) === null || _array3 === void 0 ? void 0 : _array3.__type__) !== packageType.Array) {
              if (object.name) {
                error(TypeError, "".concat(object.name, " is not array"), object.source, object.location);
              } else {
                error(TypeError, "Cannot read properties of ".concat(package_toString(_array2), " (reading '").concat(package_toString(_index), "')"), property.source, property.location);
              }
            }
            if (_index.__type__ === packageType.Literal) _index = _index.value;
            var indexType = getType(_index);
            var key = package_toString(_index);
            if (indexType === "<class string>") {
              var arrayFunc = _array2[key];
              if (!arrayFunc) {
                error(TypeError, "".concat(key, " is not function"), property.source, property.location);
              }
              return arrayFunc;
            } else if (indexType !== "<class number>") {
              error(TypeError, "".concat(key, " is not number"), property.source, property.location);
            }
            return [_array2, _index];
          }
      }
    }
  }]);
  return Compiler;
}();

function unlock(result) {
  if (Array.isArray(result)) {
    if (['return', 'break'].includes(result[1])) return result[0];else {
      var _result7 = _slicedToArray(result, 2),
        array = _result7[0],
        index = _result7[1];
      return array.array[index];
    }
  } else {
    return result;
  }
}
;// CONCATENATED MODULE: ./src/compiler/index.js

/* harmony default export */ const compiler = (Compiler);
;// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ const src = (compiler);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=hs.js.map