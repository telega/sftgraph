import { ObjectId } from 'bson'
import { WithId } from '../interfaces/WithId'
import { Edge } from './Edge'
import { EdgeMap } from './EdgeMap'
import { Node } from './Node'
import { WithWeight } from 'src/interfaces/WithWeight'

export class AdjacencyMap<ND, ED extends WithWeight> {
  public map: Map<ObjectId, EdgeMap<ND, ED>>

  constructor() {
    this.map = new Map<ObjectId, EdgeMap<ND, ED>>()
  }
}
