import { ObjectId } from 'bson'
import { WithId } from '../interfaces/WithId'
import { WithWeight } from '../interfaces/WithWeight'
import { Node } from './Node'

export class Edge<N, D extends WithWeight> implements WithId {
  public readonly _id: ObjectId
  public edgeData: D
  public targetNode: Node<N>

  constructor(node: Node<N>, data: D) {
    this._id = new ObjectId()
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

  get weight() {
    return this.edgeData.weight
  }

  set weight(weight: number) {
    this.edgeData.weight = weight
  }
}
