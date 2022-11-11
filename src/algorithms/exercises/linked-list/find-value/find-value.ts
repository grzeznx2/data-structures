import { LinkedListNode } from '../../../../data-structures/linked-list/LinkedListNode'

export default function findValue(node: LinkedListNode<number> | null, target: number): boolean {
  while (node) {
    if (node.value === target) {
      return true
    }
    node = node.next
  }

  return false
}
