import { log } from '../section6.Lazy/helper.js'

/**
    @params {i} 연산에 필요한 값
    @params {callback} 함수에서 하는 일이 끝났을 때 사용할 콜백함수
    @returns {undefined}
*/
function add10(i, callback) {
  const incrementValue = 10
  setTimeout(() => callback(i + incrementValue), delayTime)
}

add10(0, (res) => {
  add10(res, (res) => {
    add10(res, (res) => {
      log(res)
    })
  })
})

/**
    @params {i} 연산에 필요한 값
    @returns {Promise} 
*/

function add20(i) {
  const incrementValue = 20
  return new Promise((resolve) => setTimeout(() => resolve(i + incrementValue), delayTime))
}

add20(5).then(add20).then(add20).then(log)
