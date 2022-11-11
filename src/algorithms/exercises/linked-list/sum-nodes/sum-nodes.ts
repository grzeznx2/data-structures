import { LinkedListNode } from '../../../../data-structures/linked-list/LinkedListNode'

export default function sumNodes(node: LinkedListNode<number> | null): number {
  if (!node) return 0

  let currenNode: LinkedListNode<number> | null = node
  let sum = 0

  while (currenNode) {
    sum += currenNode.value
    currenNode = currenNode.next
  }

  return sum
}
