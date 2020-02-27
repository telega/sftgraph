import { ObjectId } from 'bson'
import { EdgeMap } from './EdgeMap'
import { Node } from './Node'
import { WithWeight } from '../interfaces/WithWeight'
import { Edge } from './Edge'

export class AdjacencyMap<ND, ED extends WithWeight> {
  public map: Map<ObjectId, EdgeMap<ND, ED>>

  constructor(nodeMap: Map<ObjectId, Node<ND>> = new Map<ObjectId, Node<ND>>()) {
    this.map = new Map<ObjectId, EdgeMap<ND, ED>>()
    nodeMap.forEach(this.addNode)
  }

  public has = (id: ObjectId) => this.map.has(id)
  public hasNode = (node: Node<ND>) => this.has(node._id)
  public addNode = (node: Node<ND>) => !this.hasNode(node) && this.map.set(node._id, new EdgeMap<ND, ED>())

  public hasEdge = (source: Node<ND>, target: Node<ND>) =>
    this.has(source._id) && this.map.get(source._id).has(target._id)

  public addEdge = (source: Node<ND>, target: Node<ND>, edgeData: ED) => this.addBiEdge(source, target, edgeData)
  public addBiEdge = (source: Node<ND>, target: Node<ND>, edgeData: ED) =>
    this.addDiEdge(source, target, edgeData) && this.addDiEdge(target, source, edgeData)
  public addDiEdge = (source: Node<ND>, target: Node<ND>, edgeData: ED) =>
    this.hasSourceAndTarget(source._id, target._id) && this.map.get(source._id).setEdge(new Edge(target, edgeData))

  private hasSourceAndTarget = (source: ObjectId, target: ObjectId) => this.has(source) && this.has(target)

  public getEdgeMap = (id: ObjectId) => this.map.get(id)
  public getEdgeMapByNode = (node: Node<ND>) => this.getEdgeMap(node._id)

  public values = () => this.map.values()
  public entries = () => this.map.entries()
  public clear = () => this.map.clear()
}
