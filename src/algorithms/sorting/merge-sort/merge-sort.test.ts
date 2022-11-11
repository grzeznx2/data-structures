import mergeSort from './merge-sort'

describe('Merge Sort:', () => {
  it('[1,2,3,4] returns [1,2,3,4]', () => {
    expect(mergeSort([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4])
  })

  it('[1,2,3,4,2,3] returns [1,2,2,3,3,4]', () => {
    expect(mergeSort([1, 2, 3, 4, 2, 3])).toStrictEqual([1, 2, 2, 3, 3, 4])
  })

  it('[0,-1,-2,-3,-4] returns [-4,-3,-2,-1,0]', () => {
    expect(mergeSort([0, -1, -2, -3, -4])).toStrictEqual([-4, -3, -2, -1, 0])
  })

  it('[1,10,2,9,3,8,4,7,5,6,0] returns [0,1,2,3,4,5,6,7,8,9,10]', () => {
    expect(mergeSort([1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 0])).toStrictEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ])
  })
})
