import { ObjectId } from 'bson'
import { Edge } from './Edge'
import { Node } from './Node'

export class EdgeMap<N, D> {
  private map: Map<ObjectId, Edge<N, D>> = new Map()

  constructor(edge: Edge<N, D>) {
    this.map = new Map<ObjectId, Edge<N, D>>([[edge._id, edge]])
    // this.map = edge ? new Map<ObjectId, Edge([edge._id, edge]) : new Map<ObjectId, Edge<N, E>>()
  }
  // get size() {
  //   return this.map.size
  // }
  // get length() {
  //   return this.map.size
  // }
  // public clear = () => this.map.clear()
  // public entries = () => this.map.entries()
  // public get = (id: ObjectId) => this.map.get(id)
  // public getEdge = ({ _id }: Edge<N, E>) => this.get(_id)
  // public has = (id: ObjectId) => this.map.get(id)
  // public hasEdge = ({ _id }: Edge<N, E>) => this.has(_id)
  // public forEach = (
  //   callbackFn: (value: Edge<N, E>, key: ObjectId, map: Map<ObjectId, Edge<N, E>>) => void,
  //   thisArg?: any
  // ) => this.map.forEach(callbackFn, thisArg)
  // public values = () => this.map.values()
  // public set = (key: ObjectId, value: Edge<N, E>) => this.map.set(key, value)
  // public setEdge = (edge: Edge<N, E>) => this.set(edge._id, edge)
}
