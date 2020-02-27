import { NodeMap } from '../../src/classes/NodeMap'

describe('NodeMap', () => {
  it('initialises a node map', () => {
    const nodeMap = new NodeMap()

    expect(nodeMap).toBeDefined()
    expect(typeof nodeMap).toEqual('object')

    const entries = nodeMap.entries()
    expect(typeof entries).toEqual('object')
  })
})
