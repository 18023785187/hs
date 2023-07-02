"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = error;
function error(Error, err, source, loc) {
  source = "\x1B[33;2m".concat(source, "\x1B[0m");
  var space = ' '.repeat(source.length);
  var errLength = loc.end - loc.start + 1;
  var posSymbol = space.slice(0, loc.linePos - 1) + '^'.repeat(errLength) + space.slice(loc.linePos + errLength - 1);
  throw new Error(err + "\n\t".concat(source, "\tat: ").concat(loc.line, ":").concat(loc.linePos, "\n\t").concat(posSymbol));
}