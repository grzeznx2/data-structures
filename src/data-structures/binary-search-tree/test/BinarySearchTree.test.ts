import BinarySearchTree from '../BinarySearchTree'

let bst: BinarySearchTree<number>

beforeEach(() => {
  bst = new BinarySearchTree(10)

  bst.add(5)
  bst.add(15)
  bst.add(7)
  bst.add(12)
  bst.add(4)
  bst.add(18)
})

describe('BinarySearchTree', () => {
  it('properly add nodes', () => {
    expect(bst.left?.value).toBe(5)
    expect(bst.right?.value).toBe(15)
    expect(bst.left?.right?.value).toBe(7)
    expect(bst.right?.left?.value).toBe(12)
    expect(bst.left?.left?.value).toBe(4)
    expect(bst.right?.right?.value).toBe(18)
  })

  it('finds node with provided value', () => {
    expect(bst.find(15)?.value).toBe(15)
    expect(bst.find(12)?.value).toBe(12)
    expect(bst.find(18)?.value).toBe(18)
    expect(bst.find(50)).toBe(null)
  })

  it('performs breadth first search', () => {
    expect(bst.breadthFirstSearch()).toStrictEqual([10, 5, 15, 4, 7, 12, 18])
  })

  it('performs depth first search', () => {
    expect(bst.depthFirstSearch()).toStrictEqual([10, 5, 4, 7, 15, 12, 18])
  })
})
