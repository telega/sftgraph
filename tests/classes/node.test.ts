import { Node } from '../../src/classes/Node'
import { ObjectId } from 'bson'

describe('Node', () => {
  it('initialises a new node', () => {
    const node = new Node<number>(1000)
    expect(node).toBeDefined()
    expect(typeof node).toEqual('object')
    expect(ObjectId.isValid(node._id)).toBe(true)
    expect(node.data).toBe(1000)
  })
  it('sets the node data', () => {
    const node = new Node<number>(1000)
    node.data = 500
    expect(node.data).toBe(500)
  })
})
