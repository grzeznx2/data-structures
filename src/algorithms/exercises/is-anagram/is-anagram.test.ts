import isAnagram from './is-anagram'

describe('Is Anagram:', () => {
  it('qwer, werq returns true', () => {
    expect(isAnagram('qwer', 'werq')).toBe(true)
  })

  it('ffgghh, hhggff returns true', () => {
    expect(isAnagram('ffgghh', 'hhggff')).toBe(true)
  })

  it('abc, abcc returns false', () => {
    expect(isAnagram('abc', 'abcc')).toBe(false)
  })
})
