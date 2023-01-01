
export default function error(Error, err, source, loc) {
  source = `\x1b[33;2m${source}\x1b[0m`
  const space = ' '.repeat(source.length)
  const errLength = loc.end - loc.start + 1
  const posSymbol = space.slice(0, loc.linePos - 1) + '^'.repeat(errLength) + space.slice(loc.linePos + errLength - 1)

  throw new Error(err + `\n\t${source}\tat: ${loc.line}:${loc.linePos}\n\t${posSymbol}`)
}
