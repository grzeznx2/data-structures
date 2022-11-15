import { LinkedListNode } from '../../../../data-structures/linked-list/LinkedListNode'
import findLoop from './find-loop'

describe('Find Loop:', () => {
  it('returns proper loop origin', () => {
    const first = new LinkedListNode(1)
    const second = new LinkedListNode(2)
    const third = new LinkedListNode(3)
    const loopOrigin = new LinkedListNode(4)
    const fifth = new LinkedListNode(5)
    const sixth = new LinkedListNode(6)

    first.next = second
    second.next = third
    third.next = loopOrigin
    loopOrigin.next = fifth
    fifth.next = sixth
    sixth.next = loopOrigin

    expect(findLoop(first)).toBe(loopOrigin)
  })
})
