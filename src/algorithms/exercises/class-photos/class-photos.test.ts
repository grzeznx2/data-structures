import classPhotos from './class-photos'

describe('Class Photos:', () => {
  it('[1, 2, 3, 4], [7, 6, 5, 8] returns true', () => {
    expect(classPhotos([1, 2, 3, 4], [7, 6, 5, 8])).toBe(true)
  })

  it('[1, 2, 3, 4], [1, 6, 5, 8] returns true', () => {
    expect(classPhotos([1, 2, 3, 4], [1, 6, 5, 8])).toBe(false)
  })

  it('[1, 2, 3], [2, 3, 4] returns true', () => {
    expect(classPhotos([1, 2, 3], [2, 3, 4])).toBe(true)
  })
})
