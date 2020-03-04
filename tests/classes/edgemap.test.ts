import { EdgeMap } from '../../src/classes/EdgeMap'
import { Edge } from '../../src/classes/Edge'
import { Node } from '../../src/classes/Node'

describe('EdgeMap', () => {
  it('initialises an edgemap', () => {
    const edgeMap = new EdgeMap()

    expect(edgeMap).toBeDefined()
    expect(typeof edgeMap).toEqual('object')

    const entries = edgeMap.entries()
    expect(typeof entries).toEqual('object')
  }),
    it('initialises an edgemap with edge data', () => {
      const edge = new Edge(new Node<number>(1), { weight: 2 })

      const edgeMap = new EdgeMap(edge)

      expect(edgeMap).toBeDefined()
      expect(typeof edgeMap).toEqual('object')

      const entries = edgeMap.entries()
      expect(typeof entries).toEqual('object')
      for (const [, value] of entries) {
        expect(value).toEqual(edge)
      }

      const values = edgeMap.values()
      for (const value of values) {
        expect(value).toEqual(edge)
      }
    })

  describe('methods', () => {
    it('getEdgesByTargetNodeId', () => {
      const node = new Node<number>(1)
      const targetNode = new Node<number>(2)

      const edge = new Edge(targetNode, { weight: 1 })
      const otherEdge = new Edge(node, { weight: 1 })

      const edgeMap = new EdgeMap()
      edgeMap.setEdge(edge)
      edgeMap.setEdge(otherEdge)

      const result = edgeMap.getEdgesByTargetNodeId(targetNode._id)
      expect(typeof result).toEqual('object')
      expect(result.has(edge)).toBeTruthy()
    })
  })
})
