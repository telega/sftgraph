import { ObjectId } from 'bson'
export class Edge<U> {
  public readonly _id: ObjectId
  public readonly weight: number
  public data: U

  constructor({ node, weight, data }) {
    this._id = new ObjectId()
    this.weight = weight
    this.data = data
  }
}
