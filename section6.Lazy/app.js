import { go, take, log } from './helper.js'
import { map, filter, range } from './immediately.js'
import { L } from './lazy.js'

// immediately
go(
  range(10),
  map((n) => n + 10),
  filter((n) => n % 2),
  take(2),
  log
)

// lazy
go(
  L.range(10),
  L.map((n) => n + 10),
  L.filter((n) => n % 2),
  take(2),
  log
)
