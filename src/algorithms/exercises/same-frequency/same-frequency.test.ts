import sameFrequency from './same-frequency'

describe('Same Frequency:', () => {
  it('112, 121 returns true', () => {
    expect(sameFrequency(112, 121)).toBe(true)
  })

  it('112, 122 returns false', () => {
    expect(sameFrequency(112, 122)).toBe(false)
  })

  it('111, 111 returns true', () => {
    expect(sameFrequency(111, 111)).toBe(true)
  })

  it('1111, 111 returns true', () => {
    expect(sameFrequency(1111, 111)).toBe(false)
  })

  it('111, 1111 returns false', () => {
    expect(sameFrequency(111, 1111)).toBe(false)
  })

  it('666777, 676767 returns true', () => {
    expect(sameFrequency(666777, 676767)).toBe(true)
  })
})
