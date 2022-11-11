/*
Given an unsorted linked list, count the number of elements (iteratively or recursively).
*/

import { LinkedListNode } from '../../../../data-structures/linked-list/LinkedListNode'

export default function countNodes<T>(list: LinkedListNode<T> | null): number {
  if (!list) return 0

  let nodeCount = 1
  let currenNode = list

  while (currenNode?.next) {
    nodeCount++
    currenNode = currenNode.next
  }

  return nodeCount
}
