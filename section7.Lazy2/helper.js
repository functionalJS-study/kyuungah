export const log = (...args) => console.log(...args)

export const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._)

export const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]()
    acc = iter.next().value
  } else {
    iter = iter[Symbol.iterator]()
  }
  let cur
  while (!(cur = iter.next()).done) {
    const a = cur.value
    acc = f(acc, a)
  }
  // for (const a of iter) {
  //   acc = f(acc, a)
  // }
  return acc
})

export const go = (...args) => reduce((a, f) => f(a), args)

export const take = curry((limit, iter) => {
  let res = []

  iter = iter[Symbol.iterator]()
  let cur
  while (!(cur = iter.next()).done) {
    const a = cur.value
    res.push(a)
    if (res.length == limit) return res
  }

  // for (const a of iter) {
  //   res.push(a)
  //   if (res.length == limit) return res
  // }
  return res
})

export function test(name, time, f) {
  console.time(name)
  while (time--) f()
  console.timeEnd(name)
}

export const add = (a, b) => a + b
