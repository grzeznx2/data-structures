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

  getLeftChildIndex(parentIndex: number) {
    return parentIndex * 2 + 1
  }

  getRightChildIndex(parentIndex: number) {
    return parentIndex * 2 + 2
  }

  getParentIndex(childIndex: number) {
    return Math.floor((childIndex - 1) / 2)
  }

  hasParent(childIndex: number) {
    return this.getParentIndex(childIndex) >= 0
  }

  hasLeftChild(parentIndex: number) {
    return this.getLeftChildIndex(parentIndex) < this.length
  }

  hasRightChild(parentIndex: number) {
    return this.getRightChildIndex(parentIndex) < this.length
  }

  getLeftChild(parentIndex: number) {
    return this.values[this.getLeftChildIndex(parentIndex)]
  }

  getRightChild(parentIndex: number) {
    return this.values[this.getRightChildIndex(parentIndex)]
  }

  getParent(childIndex: number) {
    return this.values[this.getParentIndex(childIndex)]
  }

  swap(firstIndex: number, secondIndex: number) {
    ;[this.values[firstIndex], this.values[secondIndex]] = [
      this.values[secondIndex],
      this.values[firstIndex],
    ]
  }

  isInCorrectOrder(first: T, second: T) {
    return this.comparator.isGreaterThanOrEqual(first, second)
  }

  bubbleUp() {
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

  insert(value: T) {
    this.values.push(value)
    this.bubbleUp()
  }
}
