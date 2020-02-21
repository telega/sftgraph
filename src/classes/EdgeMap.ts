import { ObjectId } from 'bson'
import { WithId } from '../interfaces'

export class EdgeMap<V extends WithId> {
  map: Map<ObjectId, V> = new Map()
  constructor() {
    this.map = new Map<ObjectId, V>()
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
  public getEdge = ({ _id }: V) => this.get(_id)

  public has = (id: ObjectId) => this.map.get(id)
  public hasEdge = ({ _id }: V) => this.has(_id)

  public forEach = (callbackFn: (value: V, key: ObjectId, map: Map<ObjectId, V>) => void, thisArg?: any) =>
    this.map.forEach(callbackFn, thisArg)

  public values = () => this.map.values()

  public set = (key: ObjectId, value: V) => this.map.set(key, value)
  public setEdge = (edge: V) => this.set(edge._id, edge)
}
