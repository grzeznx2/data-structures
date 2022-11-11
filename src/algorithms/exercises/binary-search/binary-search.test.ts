import binarySearch from './binary-search'

describe('Binary Search:', () => {
  it('[1,2,3,4,5,6,7,8,9], 1 returns 0', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)).toBe(0)
  })

  it('[1,2,3,4,5,6,7,8,9], 2 returns 1', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toBe(1)
  })

  it('[1,2,3,4,5,6,7,8,9], 9 returns 8', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toBe(8)
  })

  it('[1,2,3,4,5,6,7,8,9], 5 returns 4', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)).toBe(4)
  })

  it('[1,2,3,4,5,6,7,8,9], 7 returns 6', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toBe(6)
  })

  it('[1,2,3,4,5,6,7,8,9], 15 returns -1', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 15)).toBe(-1)
  })
})
