import BinarySearchTree from '../BinarySearchTree'

describe('BinarySearchTree', () => {
  it('properly add nodes', () => {
    const bst = new BinarySearchTree(10)

    bst.add(5)
    bst.add(15)
    bst.add(7)
    bst.add(12)
    bst.add(4)
    bst.add(18)

    expect(bst.left?.value).toBe(5)
    expect(bst.right?.value).toBe(15)
    expect(bst.left?.right?.value).toBe(7)
    expect(bst.right?.left?.value).toBe(12)
    expect(bst.left?.left?.value).toBe(4)
    expect(bst.right?.right?.value).toBe(18)
  })
})
