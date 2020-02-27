import { Graph } from '../src'
import { Node } from '../src'
import { EdgeMap } from '../src'
import { AdjacencyMap } from '../src'
import { NodeMap } from '../src'

describe('sftgraph', () => {
  test('exports', () => {
    expect(Graph).toBeDefined()
    expect(typeof Graph).toEqual('function')

    expect(Node).toBeDefined()
    expect(typeof Node).toEqual('function')

    expect(EdgeMap).toBeDefined()
    expect(typeof EdgeMap).toEqual('function')

    expect(AdjacencyMap).toBeDefined()
    expect(typeof AdjacencyMap).toEqual('function')

    expect(NodeMap).toBeDefined()
    expect(typeof NodeMap).toEqual('function')
  })
})
