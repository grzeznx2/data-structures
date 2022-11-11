import { LinkedListNode } from '../../../../data-structures/linked-list/LinkedListNode'
import findValue from './find-value'

describe('Find value:', () => {
  it('returns true if value is found', () => {
    const list = new LinkedListNode(1)
    list.next = new LinkedListNode(2)
    expect(findValue(list, 2)).toBe(true)
  })

  it('returns false if no value is found', () => {
    const list = new LinkedListNode(1)
    list.next = new LinkedListNode(2)
    expect(findValue(list, 3)).toBe(false)
  })
})
