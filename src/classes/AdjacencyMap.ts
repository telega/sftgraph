import { ObjectId } from 'bson'
import { WithId } from '../interfaces/WithId'
import { Edge } from './Edge'
import { EdgeMap } from './EdgeMap'
import { Node } from './Node'
import { WithWeight } from 'src/interfaces/WithWeight'

export class AdjacencyMap<ND, ED extends WithWeight> {
  public map: Map<ObjectId, EdgeMap<ND, ED>>

  constructor(nodeMap: Map<ObjectId, Node<ND>> = new Map<ObjectId, Node<ND>>()) {
    this.map = new Map<ObjectId, EdgeMap<ND, ED>>()
    nodeMap.forEach(this.addNode)
  }

  public has = (id: ObjectId) => this.map.has(id)
  public hasNode = (node: Node<ND>) => this.has(node._id)
  public addNode = (node: Node<ND>) => !this.hasNode(node) && this.map.set(node._id, new EdgeMap())

  public getEdgeMap = (id: ObjectId) => this.map.get(id)
  public getEdgeMapByNode = (node: Node<ND>) => this.getEdgeMap(node._id)

  public values = () => this.map.values()
  public entries = () => this.map.entries()
  public clear = () => this.map.clear()
}
