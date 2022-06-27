import { log } from '../section6.Lazy/helper.js'

/**
 * @function delayTime : 100ms 이후에 받아둔 값을 그대로 반환하는 함수
 * @param {value} 받고 그대로 반환할 값
 */
const delay100 = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 100))

const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a))
const add5 = (a) => a + 5

const result = go1(delay100(10), add5)

go1(go1(10, add5), log)
go1(go1(delay100(10), add5), log)
