import Tree from '../Tree'

describe('Tree', () => {
  it('deep first search', () => {
    const tree = new Tree(10)
    tree.left = new Tree(2)
    tree.right = new Tree(20)
    tree.left.left = new Tree(1)
    tree.left.right = new Tree(5)
    tree.right.left = new Tree(15)

    const dfsResult = tree.deepFirstSearch()

    expect(dfsResult).toStrictEqual([10, 2, 1, 5, 20, 15])
  })

  it('breadth first search', () => {
    const tree = new Tree(10)
    tree.left = new Tree(2)
    tree.right = new Tree(20)
    tree.left.left = new Tree(1)
    tree.left.right = new Tree(5)
    tree.right.left = new Tree(15)

    const bfsResult = tree.breadthFirstSearch()

    expect(bfsResult).toStrictEqual([10, 2, 20, 1, 5, 15])
  })
})
