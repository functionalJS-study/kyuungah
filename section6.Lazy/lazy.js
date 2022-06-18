import { curry } from './helper.js'

export const L = {}

L.map = curry(function* (f, iter) {
  iter = iter[Symbol.iterator]()
  let cur
  while (!(cur = iter.next()).done) {
    const a = cur.value
    yield f(a)
  }
  // for (const a of iter) yield f(a)
})

L.filter = curry(function* (f, iter) {
  iter = iter[Symbol.iterator]()
  let cur
  while (!(cur = iter.next()).done) {
    const a = cur.value
    if (f(a)) yield a
  }
  // for (const a of iter) if (f(a)) yield a
})

L.range = function* (l) {
  let i = -1
  while (++i < l) {
    yield i
  }
}

L.entries = function* (obj) {
  for (const k in obj) yield [k, obj[k]]
}
