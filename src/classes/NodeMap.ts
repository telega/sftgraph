import { ObjectId } from 'bson'
import { Node } from './Node'

export class NodeMap<ND> {
  public map: Map<ObjectId, Node<ND>>

  constructor() {
    this.map = new Map<ObjectId, Node<ND>>()
  }

  public has = (id: ObjectId) => this.map.has(id)
  public hasNode = (node: Node<ND>) => this.has(node._id)

  public add = (id: ObjectId, node: Node<ND>) => this.map.set(id, node)
  public addNode = (node: Node<ND>) => !this.hasNode(node) && this.add(node._id, node)

  public getNode = (id: ObjectId) => this.map.get(id)

  public values = () => this.map.values()
  public entries = () => this.map.entries()
  public clear = () => this.map.clear()
}
