import isValidSubsequence from './is-valid-subsequence'

describe('Is Valid Subsequence:', () => {
  it('[1,2,3,4], [2,4] returns true', () => {
    expect(isValidSubsequence([1, 2, 3, 4], [2, 4])).toBe(true)
  })

  it('[1, 2, 2, 2], [2, 2, 2] returns true', () => {
    expect(isValidSubsequence([1, 2, 2, 2], [2, 2, 2])).toBe(true)
  })

  it('[1, 2, 2, 2], [2, 2, 2, 2] returns false', () => {
    expect(isValidSubsequence([1, 2, 2, 2], [2, 2, 2, 2])).toBe(false)
  })

  it('[1, 2, 2, 2], [] returns true', () => {
    expect(isValidSubsequence([1, 2, 2, 2], [])).toBe(true)
  })

  it('[], [] returns true', () => {
    expect(isValidSubsequence([], [])).toBe(true)
  })
})
