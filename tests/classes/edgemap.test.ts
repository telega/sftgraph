import { EdgeMap } from '../../src/classes/EdgeMap'

describe('EdgeMap', () => {
  it('initialises an edgemap', () => {
    const edgeMap = new EdgeMap()

    expect(edgeMap).toBeDefined()
    expect(typeof edgeMap).toEqual('object')

    const entries = edgeMap.entries()

    console.log(typeof entries)
  })
})
