const missingNumber = require('./challenge-1')
const numSwap = require('./challenge-2')
const increment = require('./challenge-3')
const withdraw = require('./challenge-4')
const arraySum = require('./challenge-5')

describe('Challenge 1 Tests', () => {
  test('basic tests', () => {
    expect(missingNumber([1, 2, 3, 4, 6, 7, 8, 9])).toBe(5)
    expect(missingNumber([1, 2, 3, 4, 5, 6, 8])).toStrictEqual([7, 9])
    expect(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBeFalsy()
  })
})

describe('Challenge 2 Tests', () => {
  test('basic tests', () => {
    expect(numSwap(1234)).toBe(2143)
    expect(numSwap(432156)).toBe(341265)
  })
})

describe('Challenge 3 Tests', () => {
  test('basic tests', () => {
    expect(increment([{ val: 1 }, { val: 2 }, { val: 3 }], 2)).toStrictEqual([
      { val: 3 },
      { val: 4 },
      { val: 5 }
    ])
    expect(increment([{ val: 10 }, { val: 20 }, { val: 30 }], 5)).toStrictEqual(
      [{ val: 15 }, { val: 25 }, { val: 35 }]
    )
  })
})

describe('Challenge 4 Tests', () => {
  test('basic tests', () => {
    expect(withdraw(250)).toStrictEqual([2, 1, 0])
    expect(withdraw(370)).toStrictEqual([3, 1, 1])
  })
})

describe('Challenge 5 Tests', () => {
  test('basic tests', () => {
    expect(arraySum([1, 2, 4, 5, 6, 2, 1], [2, 3, 5])).toStrictEqual([
      3, 5, 9, 7, 9, 7, 3
    ])
    expect(arraySum([10, 20, 30, 40, 50], [20, 40, 60])).toStrictEqual([
      30, 60, 90, 60, 90
    ])
  })
})
