import { Edge } from '../../src/classes/Edge'
import { Node } from '../../src/classes/Node'
import { WithWeight } from '../../src/interfaces/WithWeight'

describe('Edge', () => {
  it('initialises a new edge', () => {
    const edge = new Edge<number, WithWeight>(new Node(1), { weight: 2 }, 3)
    expect(edge).toBeDefined()
    expect(typeof edge).toEqual('object')
    expect(edge.data).toEqual({ weight: 2 })
  })
  it('gets the node and node id', () => {
    const node = new Node(1)
    const edge = new Edge<number, WithWeight>(node, { weight: 2 }, 3)
    expect(node._id.equals(edge.nodeId)).toBe(true)
    expect(node).toBe(edge.node)
  })
})
