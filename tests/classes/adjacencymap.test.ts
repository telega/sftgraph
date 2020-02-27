import { AdjacencyMap } from '../../src/classes/AdjacencyMap'

describe('AdjacencyMap', () => {
  it('initialises an adjacency', () => {
    const adjacencyMap = new AdjacencyMap()

    expect(adjacencyMap).toBeDefined()
    expect(typeof adjacencyMap).toEqual('object')

    const entries = adjacencyMap.entries()
    expect(typeof entries).toEqual('object')
  })
})
