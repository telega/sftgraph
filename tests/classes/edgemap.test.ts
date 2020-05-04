import { EdgeMap } from '../../src/classes/EdgeMap'
import { Edge } from '../../src/classes/Edge'
import { Node } from '../../src/classes/Node'
import { WithWeight } from '../../src/interfaces/WithWeight'

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
    it('removeEdgesByTargetNodeId', () => {
      const node = new Node<number>(1)
      const targetNode = new Node<number>(2)
      const otherNode = new Node<number>(8)

      const edge = new Edge<number, WithWeight>(targetNode, { weight: 1 })
      const otherEdge = new Edge(node, { weight: 1 })
      const thirdEdge = new Edge(otherNode, { weight: 1 })
      const fourthEdge = new Edge(targetNode, { weight: 3 })

      const edgeMap = new EdgeMap<number, WithWeight>()
      edgeMap.setEdge(edge)
      edgeMap.setEdge(otherEdge)
      edgeMap.setEdge(thirdEdge)
      edgeMap.setEdge(fourthEdge)

      edgeMap.removeEdgesByTargetNodeId(targetNode._id)

      expect(edgeMap.hasEdge(edge)).toBe(false)
      expect(edgeMap.hasEdge(fourthEdge)).toBe(false)
      expect(edgeMap.hasEdge(otherEdge)).toBe(true)
      expect(edgeMap.hasEdge(thirdEdge)).toBe(true)
    })

    it('getTargetNodes', () => {
      const node = new Node<number>(1)
      const targetNode = new Node<number>(2)
      const otherTargetNode = new Node<number>(8)

      const edge = new Edge<number, WithWeight>(targetNode, { weight: 1 })
      const otherEdge = new Edge(otherTargetNode, { weight: 1 })

      const edgeMap = new EdgeMap<number, WithWeight>()
      edgeMap.setEdge(edge)
      edgeMap.setEdge(otherEdge)

      const targetNodes = edgeMap.getTargetNodes()

      expect(targetNodes).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            data: 2,
          }),
          expect.objectContaining({ data: 8 }),
        ])
      )

      expect(targetNodes).toHaveLength(2)
    })
  })
})
