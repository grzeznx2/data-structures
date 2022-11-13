import isMonotonic from './is-monotonic'

describe('Is Anagram:', () => {
  it('[1,2,3,4] returns true', () => {
    expect(isMonotonic([1, 2, 3, 4])).toBe(true)
  })

  it('[1,2,2,3,4] returns true', () => {
    expect(isMonotonic([1, 2, 2, 3, 4])).toBe(true)
  })

  it('[-1,-2,-3,-4] returns true', () => {
    expect(isMonotonic([-1, -2, -3, -4])).toBe(true)
  })

  it('[-1,-2, -2, -3,-4] returns true', () => {
    expect(isMonotonic([-1, -2, -2, -3, -4])).toBe(true)
  })

  it('[-1,-2,0, -2, -3,-4] returns false', () => {
    expect(isMonotonic([-1, -2, 0, -2, -3, -4])).toBe(false)
  })

  it('[-1] returns true', () => {
    expect(isMonotonic([-1])).toBe(true)
  })

  it('[] returns true', () => {
    expect(isMonotonic([])).toBe(true)
  })

  it('[4,3,2,-1] returns true', () => {
    expect(isMonotonic([4, 3, 2, -1])).toBe(true)
  })
})
