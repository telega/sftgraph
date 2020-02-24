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
      const edge = new Edge(new Node(1), 2, 3)

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
})
