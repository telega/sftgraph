import { ObjectId } from 'bson'
import { Edge } from './Edge'
import { Node } from './Node'
import { WithWeight } from '../interfaces/WithWeight'
import * as _ from 'lodash'
export class EdgeMap<ND, ED extends WithWeight> {
  private map: Map<ObjectId, Edge<ND, ED>> = new Map()

  constructor(edge?: Edge<ND, ED>) {
    this.map = edge ? new Map<ObjectId, Edge<ND, ED>>([[edge._id, edge]]) : new Map<ObjectId, Edge<ND, ED>>()
  }
  get size() {
    return this.map.size
  }
  get length() {
    return this.map.size
  }
  public clear = () => this.map.clear()
  public entries = () => this.map.entries()
  public get = (id: ObjectId) => this.map.get(id)
  public getEdge = ({ _id }: Edge<ND, ED>) => this.get(_id)
  public has = (id: ObjectId) => this.map.has(id)
  public hasEdge = ({ _id }: Edge<ND, ED>) => this.has(_id)
  public forEach = (
    callbackFn: (value: Edge<ND, ED>, key: ObjectId, map: Map<ObjectId, Edge<ND, ED>>) => void,
    thisArg?: any
  ) => this.map.forEach(callbackFn, thisArg)
  public values = () => this.map.values()
  public set = (key: ObjectId, value: Edge<ND, ED>) => this.map.set(key, value)
  public setEdge = (edge: Edge<ND, ED>) => this.set(edge._id, edge)

  public getEdgesByTargetNodeId = (id: ObjectId) =>
    new Set<Edge<ND, ED>>(_.filter(Object.fromEntries(this.map), (edge: Edge<ND, ED>) => edge.nodeId.equals(id)))

  public removeEdgesByTargetNodeId = (id: ObjectId) => this.removeEdges(this.getEdgesByTargetNodeId(id))

  public removeEdges = (edges: Set<Edge<ND, ED>>) => edges.forEach(({ _id }: Edge<ND, ED>) => this.removeEdgeById(_id))
  public removeEdgeById = (id: ObjectId) => this.map.delete(id)

  public hasEdgeToTargetNodeId = (id: ObjectId) => this.getEdgesByTargetNodeId(id).size > 0
  public hasEdgeToTargetNode = ({ _id }: Node<ND>) => this.hasEdgeToTargetNodeId(_id)
}
