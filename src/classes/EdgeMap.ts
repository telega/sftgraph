import { ObjectId } from 'bson'
import { Edge } from './Edge'
import { WithWeight } from '../interfaces/WithWeight'

export class EdgeMap<N, D extends WithWeight> {
  private map: Map<ObjectId, Edge<N, D>> = new Map()

  constructor(edge?: Edge<N, D>) {
    this.map = edge ? new Map<ObjectId, Edge<N, D>>([[edge._id, edge]]) : new Map<ObjectId, Edge<N, D>>()
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
  public getEdge = ({ _id }: Edge<N, D>) => this.get(_id)
  public has = (id: ObjectId) => this.map.get(id)
  public hasEdge = ({ _id }: Edge<N, D>) => this.has(_id)
  public forEach = (
    callbackFn: (value: Edge<N, D>, key: ObjectId, map: Map<ObjectId, Edge<N, D>>) => void,
    thisArg?: any
  ) => this.map.forEach(callbackFn, thisArg)
  public values = () => this.map.values()
  public set = (key: ObjectId, value: Edge<N, D>) => this.map.set(key, value)
  public setEdge = (edge: Edge<N, D>) => this.set(edge._id, edge)
}
