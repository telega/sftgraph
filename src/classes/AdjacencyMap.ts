import { ObjectId } from 'bson'
import { WithId } from '../interfaces'
export class AdjacencyMap<V extends WithId, K> {
  public map: Map<ObjectId, K>
  constructor() {
    this.map = new Map<ObjectId, K>()
  }
}
