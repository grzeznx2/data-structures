export interface ILinkedListNode<T> {
  value: T
  next: ILinkedListNode<T> | null
}

export class LinkedListNode<T> implements ILinkedListNode<T> {
  value: T
  next: LinkedListNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}
