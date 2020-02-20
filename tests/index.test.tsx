import { sum } from '../src'

describe('sftgraph', () => {
  test('exports', () => {
    expect(sum).toBeDefined()
    expect(typeof sum).toEqual('function')
  })
})
