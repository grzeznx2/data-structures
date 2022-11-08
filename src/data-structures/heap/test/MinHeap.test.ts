import MinHeap from '../MinHeap'

describe('MinHeap', () => {
  it('properly adds values', () => {
    const heap = new MinHeap<number>()

    heap.insert(1)
    heap.insert(3)
    heap.insert(5)
    heap.insert(2)
    heap.insert(7)
    heap.insert(10)

    expect(heap.values).toStrictEqual([1, 2, 5, 3, 7, 10])
  })

  it('properly removes values', () => {
    const heap = new MinHeap<number>()

    heap.insert(1)
    heap.insert(3)
    heap.insert(5)
    heap.insert(2)
    heap.insert(7)
    heap.insert(10)

    expect(heap.poll()).toBe(1)
    expect(heap.poll()).toBe(2)
    expect(heap.poll()).toBe(3)
    expect(heap.poll()).toBe(5)
    expect(heap.poll()).toBe(7)
    expect(heap.poll()).toBe(10)
    expect(heap.poll()).toBe(null)
  })
})
