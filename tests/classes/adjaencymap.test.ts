import { EdgeMap } from '../../src/classes/EdgeMap'
import { AdjacencyMap } from '../../src/classes/AdjacencyMap'
import { Edge } from '../../src/classes/Edge'
import { Node } from '../../src/classes/Node'

describe('AdjacencyMap', () => {
  it('initialises an adjacency', () => {
    const adjacencyMap = new AdjacencyMap()

    expect(adjacencyMap).toBeDefined()
    expect(typeof adjacencyMap).toEqual('object')

    const entries = adjacencyMap.entries()
    expect(typeof entries).toEqual('object')
  })
})
