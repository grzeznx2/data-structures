export type CompareFunction<T> = (a: T, b: T) => number

export default class Comparator<T> {
  compare: CompareFunction<T>

  constructor(compareFn?: CompareFunction<T>) {
    this.compare = compareFn || this.defaultCompareFunction
  }

  defaultCompareFunction(a: T, b: T) {
    if (a === b) {
      return 0
    }

    return a < b ? -1 : 1
  }

  isEqual(a: T, b: T) {
    return this.compare(a, b) === 0
  }

  isGreaterThan(a: T, b: T) {
    return this.compare(a, b) === 1
  }

  isLessThan(a: T, b: T) {
    return this.compare(a, b) === -1
  }

  isLessThanOrEqual(a: T, b: T) {
    return this.compare(a, b) !== 1
  }

  isGreaterThanOrEqual(a: T, b: T) {
    return this.compare(a, b) !== -1
  }
}
