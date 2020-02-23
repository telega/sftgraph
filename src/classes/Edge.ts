import { ObjectId } from 'bson'
import { WithId } from '../interfaces/WithId'
import { Node } from './Node'

export class Edge<N, D> implements WithId {
  public readonly _id: ObjectId
  public readonly weight: number
  public edgeData: D
  public targetNode: Node<N>

  constructor(node: Node<N>, data?: D, weight = 1) {
    this._id = new ObjectId()
    this.weight = weight
    this.edgeData = data
    this.targetNode = node
  }

  get id() {
    return this._id.toHexString()
  }

  get data() {
    return this.edgeData
  }

  set data(data: D) {
    this.edgeData = data
  }

  get node() {
    return this.targetNode
  }

  get nodeId() {
    return this.targetNode._id
  }
}
