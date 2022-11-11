import { LinkedListNode } from '../../../../data-structures/linked-list/LinkedListNode'
import countNodes from './count-nodes'

describe('Count Nodes:', () => {
  it('counts single node', () => {
    const list = new LinkedListNode(1)
    expect(countNodes(list)).toBe(1)
  })

  it('counts multiple nodes', () => {
    const list = new LinkedListNode(1)
    list.next = new LinkedListNode(2)
    expect(countNodes(list)).toBe(2)
  })

  it('returns 0 if null passed', () => {
    expect(countNodes(null)).toBe(0)
  })
})
