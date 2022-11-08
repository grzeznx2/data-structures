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
    const result: T[] = []

    let stack: Tree<T>[] = [this]

    while (stack.length > 0) {
      const removed = stack.pop()
      result.push(removed!.value)

      if (removed?.right) {
        stack.push(removed.right)
      }

      if (removed?.left) {
        stack.push(removed.left)
      }
    }

    return result
  }

  breadthFirstSearch() {
    const result: T[] = []

    const queue: Tree<T>[] = [this]

    while (queue.length > 0) {
      const removed = queue.shift()

      result.push(removed!.value)

      if (removed?.left) {
        queue.push(removed.left)
      }

      if (removed?.right) {
        queue.push(removed.right)
      }
    }

    return result
  }
}
