import maxSubArraySum from './max-subarray-sum'

describe('Max Subarray Sum:', () => {
  it('[1,2,3,4], 1 returns 4', () => {
    expect(maxSubArraySum([1, 2, 3, 4], 1)).toBe(4)
  })

  it('[1,2,3,4], 6 returns 4', () => {
    expect(maxSubArraySum([1, 2, 3, 4], 6)).toBe(10)
  })

  it('[1,2,3,4], 2 returns 7', () => {
    expect(maxSubArraySum([1, 2, 3, 4], 2)).toBe(7)
  })

  it('[1,2,3,4], 3 returns 9', () => {
    expect(maxSubArraySum([1, 2, 3, 4], 3)).toBe(9)
  })

  it('[1,2,3,4], 4 returns 10', () => {
    expect(maxSubArraySum([1, 2, 3, 4], 4)).toBe(10)
  })
})
