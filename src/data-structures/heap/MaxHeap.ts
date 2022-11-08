import { Heap } from './Heap'

export default class MaxHeap<T> extends Heap<T> {
  areOrdered(first: T, second: T) {
    return this.comparator.isGreaterThanOrEqual(first, second)
  }
}
