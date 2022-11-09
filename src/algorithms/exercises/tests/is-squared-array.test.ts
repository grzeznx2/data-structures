import isSquaredArray from '../is-squared-array'

describe('Is squared array', () => {
  it('[1,2,3], [1,4,9] returns true', () => {
    expect(isSquaredArray([1, 2, 3], [1, 4, 9])).toBe(true)
  })

  it('[1,2,2], [1,4,4] returns true', () => {
    expect(isSquaredArray([1, 2, 2], [1, 4, 4])).toBe(true)
  })

  it('[1,2,2], [1,4,5] returns false', () => {
    expect(isSquaredArray([1, 2, 2], [1, 4, 5])).toBe(false)
  })
})
