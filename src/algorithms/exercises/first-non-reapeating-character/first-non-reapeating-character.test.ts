import firstNonRepeatingCharacter from './first-non-reapeating-character'

describe('First Non Repeating Character:', () => {
  it('aabbc returns 4', () => {
    expect(firstNonRepeatingCharacter('aabbc')).toBe(4)
  })

  it('faabbc returns 0', () => {
    expect(firstNonRepeatingCharacter('faabbc')).toBe(0)
  })

  it('ffaabbcx returns -1', () => {
    expect(firstNonRepeatingCharacter('ffaabbcc')).toBe(-1)
  })

  it('aabbcde returns 4', () => {
    expect(firstNonRepeatingCharacter('aabbcde')).toBe(4)
  })
})
