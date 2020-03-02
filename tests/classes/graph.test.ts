import { Graph } from '../../src/classes/Graph'
import { Node } from '../../src/classes/Node'

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
})
