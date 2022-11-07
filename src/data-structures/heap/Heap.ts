import Comparator, { CompareFunction } from '../../utils/Comparator'

export class Heap<T> {
  values: T[] = []
  comparator: Comparator<T>

  constructor(compareFn?: CompareFunction<T>) {
    this.comparator = new Comparator(compareFn)
  }

  get length() {
    return this.values.length
  }

  private getLeftChildIndex(parentIndex: number) {
    return parentIndex * 2 + 1
  }

  private getRightChildIndex(parentIndex: number) {
    return parentIndex * 2 + 2
  }

  private getParentIndex(childIndex: number) {
    return Math.floor((childIndex - 1) / 2)
  }

  private hasParent(childIndex: number) {
    return this.getParentIndex(childIndex) >= 0
  }

  private hasLeftChild(parentIndex: number) {
    return this.getLeftChildIndex(parentIndex) < this.length
  }

  private hasRightChild(parentIndex: number) {
    return this.getRightChildIndex(parentIndex) < this.length
  }

  private getLeftChild(parentIndex: number) {
    return this.values[this.getLeftChildIndex(parentIndex)]
  }

  private getRightChild(parentIndex: number) {
    return this.values[this.getRightChildIndex(parentIndex)]
  }

  private getParent(childIndex: number) {
    return this.values[this.getParentIndex(childIndex)]
  }

  private swap(firstIndex: number, secondIndex: number) {
    ;[this.values[firstIndex], this.values[secondIndex]] = [
      this.values[secondIndex],
      this.values[firstIndex],
    ]
  }

  private isInCorrectOrder(first: T, second: T) {
    return this.comparator.isGreaterThanOrEqual(first, second)
  }

  private bubbleUp() {
    let currentIndex = this.length - 1
    let parentIndex = this.getParentIndex(currentIndex)

    while (
      this.hasParent(currentIndex) &&
      !this.isInCorrectOrder(this.values[parentIndex], this.values[currentIndex])
    ) {
      this.swap(currentIndex, parentIndex)
      currentIndex = parentIndex
      parentIndex = this.getParentIndex(currentIndex)
    }
  }

  private bubbleDown() {
    let currentIndex = 0
    let nextIndex = null

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        this.isInCorrectOrder(this.getRightChild(currentIndex), this.getLeftChild(currentIndex))
      ) {
        nextIndex = this.getRightChildIndex(currentIndex)
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex)
      }

      if (this.isInCorrectOrder(this.values[currentIndex], this.values[nextIndex])) {
        break
      }

      this.swap(currentIndex, nextIndex)

      currentIndex = nextIndex
    }
  }

  insert(value: T) {
    this.values.push(value)
    this.bubbleUp()
  }

  poll() {
    if (this.length === 0) return null
    if (this.length === 1) return this.values.pop()

    const removed = this.values[0]

    this.values[0] = this.values.pop()!

    this.bubbleDown()

    return removed
  }

  peek() {
    if (this.length === 0) return null

    return this.values[0]
  }

  find(value: T) {
    const indices: number[] = []

    for (let i = 0; i < this.length; i++) {
      if (this.comparator.isEqual(this.values[i], value)) {
        indices.push(i)
      }
    }

    return indices
  }
}
