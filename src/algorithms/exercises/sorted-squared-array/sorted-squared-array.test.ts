import sortedSquaredArray from './sorted-squared-array'

describe('Sorted Squared Array:', () => {
  it('[1,2,3,4] returns [1, 4, 9, 16]', () => {
    expect(sortedSquaredArray([1, 2, 3, 4])).toStrictEqual([1, 4, 9, 16])
  })

  it('[-6,-5,1,2,3,4] returns [1, 4, 9, 16, 25, 36]', () => {
    expect(sortedSquaredArray([-6, -5, 1, 2, 3, 4])).toStrictEqual([1, 4, 9, 16, 25, 36])
  })

  it('[] returns []', () => {
    expect(sortedSquaredArray([])).toStrictEqual([])
  })
})
