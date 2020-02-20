import { Graph } from '../src'

describe('sftgraph', () => {
  test('exports', () => {
    expect(Graph).toBeDefined()
    expect(typeof Graph).toEqual('function')
  })
})
