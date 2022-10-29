import { ILinkedListNode, LinkedListNode } from './LinkedListNode'

export interface ILinkedList<T> {
  readonly head: ILinkedListNode<T> | null
  readonly tail: ILinkedListNode<T> | null
  readonly size: number
  append: (value: T) => ILinkedList<T> //
  prepend: (value: T) => ILinkedList<T> //
  contains: (value: T) => boolean //
  delete: (value: T) => ILinkedListNode<T> | null //
  deleteAt: (index: number) => ILinkedListNode<T> | null //
  deleteHead: () => ILinkedListNode<T> | null //
  deleteTail: () => ILinkedListNode<T> | null //
  find: (value: T) => ILinkedListNode<T> | null //
  findAt: (index: number) => ILinkedListNode<T> | null //
  findIndexOf: (value: T) => number //
  fromArray: (values: T[]) => ILinkedList<T>
  insertAt: (index: number, value: T) => ILinkedListNode<T> | null
  isEmpty: () => boolean //
  removeDuplicates: () => ILinkedList<T> //
  reverse: () => ILinkedListNode<T> //
  set: (index: number, value: T) => ILinkedListNode<T> | null //
  toArray: () => T[] //
}

interface ISLL {
  size: number
}

class SLL<T> implements ILinkedList<T> {
  head: LinkedListNode<T> | null
  tail: LinkedListNode<T> | null
  size: number = 0

  constructor() {
    this.head = null
    this.tail = null
  }

  append(value: T): this {
    const newNode = new LinkedListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
      this.tail = newNode
    }

    this.size++
    return this
  }

  prepend(value: T): this {
    if (!this.head) {
      this.size++
      return this.append(value)
    }
    const newNode = new LinkedListNode(value)
    newNode.next = this.head
    this.head = newNode

    this.size++
    return this
  }

  deleteHead(): LinkedListNode<T> | null {
    const removed = this.head

    if (removed === null) {
      this.size--
      return removed
    }

    this.head = removed.next
    removed.next = null
    this.size--
    return removed
  }

  delete(value: T): LinkedListNode<T> | null {
    let removed = null
    if (!this.head) {
      return removed
    }

    if (value === this.head.value) {
      return this.deleteHead()
    }

    let currentNode: LinkedListNode<T> | null = this.head.next
    let prevNode: LinkedListNode<T> = this.head

    while (currentNode) {
      if (currentNode.value === value) {
        prevNode.next = currentNode.next
        if (currentNode.next === null) {
          this.tail = prevNode
        }
        currentNode.next = null
        this.size--
        return currentNode
      }
      prevNode = currentNode
      currentNode = currentNode.next
    }

    return removed
  }

  find(value: T): LinkedListNode<T> | null {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }

    return null
  }

  findAtIndex(index: number): LinkedListNode<T> | null {
    if (index < 0 || index >= this.size) {
      return null
    }

    let currentIndex = 0
    let currentNode = this.head

    while (currentNode) {
      if (currentIndex === index) {
        return currentNode
      }
      currentIndex++
      currentNode = currentNode.next
    }

    return null
  }

  findIndexOf(value: T): number {
    let currentIndex = 0
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === value) {
        return currentIndex
      }
      currentIndex++
      currentNode = currentNode.next
    }

    return -1
  }
}
