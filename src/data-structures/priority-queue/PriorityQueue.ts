import Comparator from '../../utils/Comparator'
import MinHeap from '../heap/MinHeap'

export default class PriorityQueue<T> extends MinHeap<T> {
  priorites: Map<T, number>

  constructor() {
    super()

    this.priorites = new Map()

    this.comparator = new Comparator(this.comparePriority.bind(this))
  }

  add(value: T, priority = 0) {
    this.priorites.set(value, priority)
    super.insert(value)
    return this
  }

  poll() {
    this.priorites.delete(this.values[0])

    const removed = super.poll()

    return removed
  }

  comparePriority(first: T, second: T) {
    const firstPriority = this.priorites.get(first)
    const secondPriority = this.priorites.get(second)
    if (firstPriority === secondPriority) return 0
    return firstPriority! < secondPriority! ? -1 : 1
  }
}
