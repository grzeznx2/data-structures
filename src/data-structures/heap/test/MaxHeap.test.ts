import MaxHeap from '../MaxHeap'

describe('MaxHeap', () => {
  it('properly adds values', () => {
    const heap = new MaxHeap()

    heap.insert(1)
    heap.insert(3)
    heap.insert(5)
    heap.insert(2)
    heap.insert(7)
    heap.insert(10)

    expect(heap.values).toStrictEqual([10, 5, 7, 1, 2, 3])
  })

  it('properly removes values', () => {
    const heap = new MaxHeap()

    heap.insert(1)
    heap.insert(3)
    heap.insert(5)
    heap.insert(2)
    heap.insert(7)
    heap.insert(10)

    expect(heap.poll()).toBe(10)
    expect(heap.poll()).toBe(7)
    expect(heap.poll()).toBe(5)
    expect(heap.poll()).toBe(3)
    expect(heap.poll()).toBe(2)
    expect(heap.poll()).toBe(1)
    expect(heap.poll()).toBe(null)
  })
})
