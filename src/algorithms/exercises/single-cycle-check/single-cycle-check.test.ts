import singleCycleCheck from './single-cycle-check'

describe('Single Cycle Check:', () => {
  it('[1,1,1] returns true', () => {
    expect(singleCycleCheck([1, 1, 1])).toBe(true)
  })

  it('[0,1,2] returns false', () => {
    expect(singleCycleCheck([0, 1, 2])).toBe(false)
  })

  it('[2,1,2] returns false', () => {
    expect(singleCycleCheck([2, 1, 2])).toBe(false)
  })

  it('[3,1,2,2] returns true', () => {
    expect(singleCycleCheck([3, 1, 2, 2])).toBe(true)
  })
})
