import { pipe, curry, go, log, reduce, take } from '../section6.Lazy/helper.js'
import { L } from '../section6.Lazy/lazy.js'

const join = curry((sep = '', iter) => reduce((a, b) => `${a}${sep}${b}`, iter))

const queryString = pipe(
  L.entries,
  L.map(([k, v]) => `${k}=${v}`),
  function (a) {
    console.log(a)
    return a
  },
  join('&')
)

queryString({ limit: 10, offset: 10, type: 'notice' })

const users = [{ age: 32 }, { age: 31 }, { age: 35 }, { age: 30 }, { age: 25 }, { age: 28 }]

const find = curry((f, iter) => go(iter, L.filter(f), take(1), ([a]) => a))

find((u) => u.age < 30, users)

go(
  users,
  L.map((u) => u.age),
  find((n) => n < 30),
  log
)

export const map = curry(pipe(L.map, take(Infinity)))
const filter = curry(pipe(L.filter, take(Infinity)))

log(map((a) => a + 10, L.range(10)))
log(filter((a) => a % 2, L.range(10)))
