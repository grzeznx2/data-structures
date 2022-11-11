import { LinkedListNode } from '../../../../data-structures/linked-list/LinkedListNode'
import sumNodes from './sum-nodes'

describe('Sum Nodes:', () => {
  it('sums single node', () => {
    const list = new LinkedListNode(1)
    expect(sumNodes(list)).toBe(1)
  })

  it('sums multiple nodes', () => {
    const list = new LinkedListNode(1)
    list.next = new LinkedListNode(2)
    expect(sumNodes(list)).toBe(3)
  })

  it('returns 0 if null passed', () => {
    expect(sumNodes(null)).toBe(0)
  })
})
