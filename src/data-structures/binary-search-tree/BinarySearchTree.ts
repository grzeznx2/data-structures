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
}
