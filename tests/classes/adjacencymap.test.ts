import { AdjacencyMap } from '../../src/classes/AdjacencyMap'
import { Node } from '../../src/classes/Node'

describe('AdjacencyMap', () => {
  it('initialises an adjacency', () => {
    const adjacencyMap = new AdjacencyMap()

    expect(adjacencyMap).toBeDefined()
    expect(typeof adjacencyMap).toEqual('object')

    const entries = adjacencyMap.entries()
    expect(typeof entries).toEqual('object')
  })
  describe('methods', () => {
    it('addEdge', () => {
      const adjacencyMap = new AdjacencyMap()

      const nodeA = new Node<string>('a')
      const nodeB = new Node<string>('b')

      adjacencyMap.addNode(nodeA)
      adjacencyMap.addNode(nodeB)

      adjacencyMap.addEdge(nodeA, nodeB, { weight: 1 })

      expect(adjacencyMap.hasNode(nodeA)).toBeTruthy()
      expect(adjacencyMap.hasNode(nodeB)).toBeTruthy()

      expect(adjacencyMap.hasEdge(nodeA, nodeB)).toBeTruthy()
      // expect(adjacencyMap.hasEdge(nodeB, nodeA)).toBeTruthy()
    })
  })
})
