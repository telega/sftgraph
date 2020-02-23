import { Graph } from '../src'
import { Node } from '../src'

describe('sftgraph', () => {
  test('exports', () => {
    expect(Graph).toBeDefined()
    expect(typeof Graph).toEqual('function')

    expect(Node).toBeDefined()
    expect(typeof Node).toEqual('function')
  })
})
