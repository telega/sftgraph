import { ObjectId } from 'bson'
export class AdjacencyMap<V, K> {
  public map: Map<ObjectId, K>
  constructor() {
    this.map = new Map<ObjectId, K>()
  }
}
