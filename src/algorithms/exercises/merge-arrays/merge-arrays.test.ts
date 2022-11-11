import mergeArrays from './merge-arrays'

describe('Merge Arrays:', () => {
  it('[1,2,3,4], [0] returns [0,1,2,3,4]', () => {
    expect(mergeArrays([1, 2, 3, 4], [0])).toStrictEqual([0, 1, 2, 3, 4])
  })

  it('[1,2,3,4], [] returns [1,2,3,4]', () => {
    expect(mergeArrays([1, 2, 3, 4], [])).toStrictEqual([1, 2, 3, 4])
  })

  it('[], [1,2,3,4] returns [1,2,3,4]', () => {
    expect(mergeArrays([], [1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4])
  })

  it('[1,5,10], [2,7,11] returns [1,2,5,7,10,11]', () => {
    expect(mergeArrays([1, 5, 10], [2, 7, 11])).toStrictEqual([1, 2, 5, 7, 10, 11])
  })

  it('[1,2,3,4], [-2,-1] returns [-2,-1,1,2,3,4]', () => {
    expect(mergeArrays([1, 2, 3, 4], [-2, -1])).toStrictEqual([-2, -1, 1, 2, 3, 4])
  })

  it('[-10,1,2,3,4], [-2,-1] returns [-10,-2,-1,1,2,3,4]', () => {
    expect(mergeArrays([1, 2, 3, 4], [-10, -2, -1])).toStrictEqual([-10, -2, -1, 1, 2, 3, 4])
  })

  it('[4,5,6], [0,1,2] returns [0,1,2,4,5,6]', () => {
    expect(mergeArrays([4, 5, 6], [0, 1, 2])).toStrictEqual([0, 1, 2, 4, 5, 6])
  })
})
