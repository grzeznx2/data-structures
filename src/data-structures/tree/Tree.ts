export default class Tree<T> {
  value: T
  left: Tree<T> | null
  right: Tree<T> | null

  constructor(value: T) {
    this.value = value
    this.left = null
    this.right = null
  }

  deepFirstSearch() {
    const values: T[] = []

    let stack: Tree<T>[] = [this]

    while (stack.length > 0) {
      const removed = stack.pop()
      values.push(removed!.value)

      if (removed?.right) {
        stack.push(removed.right)
      }

      if (removed?.left) {
        stack.push(removed.left)
      }
    }

    return values
  }
}
