/*

  Write a function that takes in the head of a Singly Linked List that contains
  a loop (in other words, the list's tail node points to some node in the list
  instead of null). ). The function should return the node (the actual node--not just its value) from which the loop originates
  in constant space.

  O(n) time | O(1) space
*/

import { LinkedListNode } from '../../../../data-structures/linked-list/LinkedListNode'

export default function findLoop<T>(node: LinkedListNode<T>): LinkedListNode<T> {
  let first = node.next!
  let second = node.next!.next!

  while (first !== second) {
    first = first.next!
    second = second.next!.next!
  }

  first = node

  while (first !== second) {
    first = first.next!
    second = second.next!.next!
  }

  return first!
}
