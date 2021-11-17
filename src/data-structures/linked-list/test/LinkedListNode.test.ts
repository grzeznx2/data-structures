import { LinkedListNode } from '../LinkedListNode'

describe('LinkedListNode', () => {
  it('creates node with provided value', () => {
    const node = new LinkedListNode(2)

    expect(node).toMatchObject({ value: 2, next: null })
  })

  it('links nodes together', () => {
    const node1 = new LinkedListNode(1)
    const node2 = new LinkedListNode(2)
    node1.next = node2

    expect(node1.value).toBe(1)
    expect(node2).toMatchObject({ value: 2, next: null })
    expect(node1.next).toMatchObject(node2)
  })
})
