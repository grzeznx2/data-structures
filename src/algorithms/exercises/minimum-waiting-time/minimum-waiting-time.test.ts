import minimumWaitingTime from './minimum-waiting-time'

describe('Minimum Waiting Time:', () => {
  it('[3,2,1,2,6] returns 17', () => {
    expect(minimumWaitingTime([3, 2, 1, 2, 6])).toBe(17)
  })

  it('[1,1,1,1,1] returns 10', () => {
    expect(minimumWaitingTime([1, 1, 1, 1, 1])).toBe(10)
  })

  it('[4, 3, 1, 1, 3, 2, 1, 8] returns 45', () => {
    expect(minimumWaitingTime([4, 3, 1, 1, 3, 2, 1, 8])).toBe(45)
  })
})
