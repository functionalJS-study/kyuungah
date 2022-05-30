import { curry } from './helper.js'

export const L = {}

L.map = curry(function* (f, iter) {
  for (const a of iter) yield f(a)
})

L.filter = curry(function* (f, iter) {
  for (const a of iter) if (f(a)) yield a
})

L.range = function* (l) {
  let i = -1
  while (++i < l) {
    yield i
  }
}
