import PriorityQueue from '../PriorityQueue'

describe('PriorityQueue', () => {
  it('properly adds values', () => {
    const pq = new PriorityQueue<number>()

    pq.add(1, 6)
    pq.add(2, 5)
    pq.add(3, 4)
    pq.add(4, 3)
    pq.add(5, 2)
    pq.add(6, 1)

    expect(pq.values).toStrictEqual([6, 4, 5, 1, 3, 2])
  })

  it('properly removes values', () => {
    const pq = new PriorityQueue<number>()

    pq.add(1, 6)
    pq.add(2, 5)
    pq.add(3, 4)
    pq.add(4, 3)
    pq.add(5, 2)
    pq.add(6, 1)

    expect(pq.poll()).toBe(6)
    expect(pq.poll()).toBe(5)
    expect(pq.poll()).toBe(4)
    expect(pq.poll()).toBe(3)
    expect(pq.poll()).toBe(2)
    expect(pq.poll()).toBe(1)
    expect(pq.poll()).toBe(null)
  })
})
