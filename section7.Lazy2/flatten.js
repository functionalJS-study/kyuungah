import { log, pipe, take } from '../section6.Lazy/helper.js'
import { L } from '../section6.Lazy/lazy.js'

const isIterable = (a) => a && a[Symbol.iterator]

L.flatten = function* (iter) {
  for (const a of iter) {
    if (isIterable(a)) for (const b of a) yield b
    else yield a
  }
}

const TEST_ARRAY = [[1, 2], [2, 3], 5, 7, [3, 4, 5]]

const it = L.flatten(TEST_ARRAY)
log([...it])

const flatten = pipe(L.flatten, take(Infinity))
log(flatten(TEST_ARRAY))
