import zeroSumPair from './zero-sum-pair'

describe('Zero Sum Pair:', () => {
  it('[-1,0,1] returns [-1, 1]', () => {
    expect(zeroSumPair([-1, 0, 1])).toStrictEqual([-1, 1])
  })

  it('[-3,-2,0,1,2,3,4,5,6] returns [-3, 3]', () => {
    expect(zeroSumPair([-3, -2, 0, 1, 2, 3, 4, 5, 6])).toStrictEqual([-3, 3])
  })

  it('[-3,-2,0,1,4,5,6] returns undefined', () => {
    expect(zeroSumPair([-3, -2, 0, 1, 4, 5, 6])).toBe(undefined)
  })
})
