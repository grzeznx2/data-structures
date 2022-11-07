import { Heap } from '../Heap'

describe('Heap', () => {
  it('properly adds values', () => {
    const heap = new Heap()

    heap.insert(1)
    heap.insert(3)
    heap.insert(5)
    heap.insert(2)
    heap.insert(7)
    heap.insert(10)

    expect(heap.values).toStrictEqual([10, 5, 7, 1, 2, 3])
  })
})
