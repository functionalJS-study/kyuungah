import { curry, go, log, pipe } from '../section6.Lazy/helper.js'
import { map } from './app.js'

const L = {}

L.flatMap = pipe(L.map, L.flatten)

const TEST = [[1, 2], 3, 4, [5, 6]]

const it = L.flatMap(
  map((a) => a * a),
  TEST
)
