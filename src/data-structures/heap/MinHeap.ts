import { Heap } from './Heap'

export default class MinHeap<T> extends Heap<T> {
  areOrdered(first: T, second: T): boolean {
    return this.comparator.isLessThanOrEqual(first, second)
  }
}
