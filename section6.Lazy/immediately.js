import { curry } from './helper.js'

export const map = curry((f, iter) => {
  let res = []
  for (const a of iter) {
    res.push(f(a))
  }
  return res
})

export const filter = curry((f, iter) => {
  let res = []
  for (const a of iter) {
    if (f(a)) res.push(a)
  }
  return res
})

export const range = (length) => {
  let i = -1
  let res = []
  while (++i < length) {
    res.push(i)
  }
  return res
}
