import { ObjectId } from 'bson'

export class Node<T> {
  public readonly _id: ObjectId
  public data: T
  constructor(data: T) {
    this._id = new ObjectId()
    this.data = data
  }
}
