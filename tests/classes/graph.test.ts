import { Graph } from '../../src/classes/Graph'
import { Node } from '../../src/classes/Node'
import { WithWeight } from '../../src/interfaces/WithWeight'

describe('Graph', () => {
  it('initialises a new graph ', () => {
    const graph = new Graph()
    expect(graph).toBeDefined()
    expect(typeof graph).toEqual('object')
  })

  it('adds a node', () => {
    const graph = new Graph()
    const node = new Node({ foo: 'bar' })
    graph.addNode(node)
    graph.addNewNode({ foo: 'baz' })
    const values = [...graph.nodeValues]

    expect(values).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ nodeData: { foo: 'bar' } }),
        expect.objectContaining({ nodeData: { foo: 'baz' } }),
      ])
    )
  })
  it('addEdge', () => {
    const graph = new Graph<{}, number, WithWeight>()
    const graphTwo = new Graph<{}, number, WithWeight>()

    const nodeA = new Node<number>(1)
    const nodeB = new Node<number>(2)
    graph.addNodes([nodeA, nodeB])
    graph.addEdge(nodeA, nodeB, { weight: 1 })

    expect(graph.size).toBe(2)
    expect(graph.edgeCount).toBe(2)

    graphTwo.addEdge(nodeA, nodeB, { weight: 1 })
    expect(graphTwo.size).toBe(2)
    expect(graphTwo.edgeCount).toBe(2)
  })

  it('getNeighborsByNode', () => {
    const graph = new Graph<{}, number, WithWeight>()

    const nodeA = new Node<number>(1)
    const nodeB = new Node<number>(2)

    graph.addNodes([nodeA, nodeB])
    graph.addEdge(nodeA, nodeB, { weight: 1 })

    const nodeANeighbors = graph.getNeighborsByNode(nodeA)
    const nodeBNeighbors = graph.getNeighborsById(nodeB._id)

    expect(nodeANeighbors).toHaveLength(1)
    expect(nodeBNeighbors).toHaveLength(1)

    expect(nodeANeighbors).toEqual(expect.arrayContaining([expect.objectContaining({ data: 2 })]))

    expect(nodeBNeighbors).toEqual(expect.arrayContaining([expect.objectContaining({ data: 1 })]))
  })
})
