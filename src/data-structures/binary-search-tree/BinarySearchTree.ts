export default class BinarySearchTree<T> {
  value: T
  left: BinarySearchTree<T> | null
  right: BinarySearchTree<T> | null

  constructor(value: T) {
    this.value = value
    this.left = null
    this.right = null
  }

  add(value: T) {
    let current: BinarySearchTree<T> = this
    const newBST = new BinarySearchTree(value)
    while (current) {
      if (value < current.value) {
        if (current.left) {
          current = current.left
        } else {
          current.left = newBST
          break
        }
      } else {
        if (current.right) {
          current = current.right
        } else {
          current.right = newBST
          break
        }
      }
    }
  }

  find(value: T) {
    let current: BinarySearchTree<T> | null = this

    while (current) {
      if (current.value === value) {
        return current
      } else if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return null
  }

  breadthFirstSearch() {
    const results: T[] = []
    const queue: BinarySearchTree<T>[] = [this]

    while (queue.length > 0) {
      const removed = queue.shift()

      results.push(removed!.value)

      if (removed?.left) {
        queue.push(removed.left)
      }

      if (removed?.right) {
        queue.push(removed.right)
      }
    }

    return results
  }

  depthFirstSearch() {
    const results: T[] = []
    const stack: BinarySearchTree<T>[] = [this]

    while (stack.length > 0) {
      const removed = stack.pop()

      if (!removed) break

      results.push(removed.value)

      if (removed.right) {
        stack.push(removed.right)
      }

      if (removed.left) {
        stack.push(removed.left)
      }
    }

    return results
  }
}
