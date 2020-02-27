import { ObjectId } from 'bson'
import { Edge } from './Edge'
import { Node } from './Node'
import { EdgeMap } from './EdgeMap'
import { WithId } from '../interfaces/WithId'
import { WithWeight } from 'src/interfaces/WithWeight'
import { NodeMap } from './NodeMap'
import { AdjacencyMap } from './AdjacencyMap'
export class Graph<GD, ND, ED extends WithWeight> implements WithId {
  readonly _id: ObjectId
  public nodeMap: NodeMap<ND>
  public adjacencyMap: AdjacencyMap<ND, ED>

  constructor() {
    this._id = new ObjectId()
    this.nodeMap = new NodeMap<ND>()
    this.adjacencyMap = new AdjacencyMap<ND, ED>()
  }

  public addNode = (nodeData: ND) => {
    const node = new Node(nodeData)
    this.nodeMap.addNode(node)
    this.adjacencyMap.addNode(node)
    return node
  }

  public addEdge = (source: Node<ND>, target: Node<ND>, edgeData: ED) =>
    this.adjacencyMap.addEdge(source, target, edgeData)

  get nodes() {
    return this.nodeMap.entries()
  }

  // public nodes: Map<ObjectId, Node<T>> = new Map<ObjectId, Node<T>>()
  // adjacencyList: AdjacencyList<U> = {};
  // public adjacencyList: Map<ObjectId, Set<AdjacencySet<U>>> = new Map<ObjectId, Set<AdjacencySet<U>>>()

  // public addEdge = (source: ObjectId, target: ObjectId, weight: number = 1, data: U) => {
  //   // this.validEdgeIds(source, target) &&
  //   //   this.adjacencyList[source.toHexString()].push(new Edge({ node: target, weight, data }))
  // }

  // public validEdgeIds = (source: ObjectId, target: ObjectId) => this.validNodeId(source) && this.validNodeId(target)
  // public validNodeId = (id: ObjectId) => this.nodes.has(id)
  //  public getAdjacencyList = () => this.adjacencyList
}
