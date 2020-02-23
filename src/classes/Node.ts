import { ObjectId } from 'bson'
import { WithId } from '../interfaces/WithId'

export class Node<T> implements WithId {
  public readonly _id: ObjectId
  private nodeData: T
  constructor(data: T) {
    this._id = new ObjectId()
    this.nodeData = data
  }

  get id() {
    return this._id.toHexString()
  }

  get data() {
    return this.nodeData
  }

  set data(data: T) {
    this.nodeData = data
  }
}
