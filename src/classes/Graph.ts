import { ObjectId } from 'bson'
import { Edge } from './Edge'
import { Node } from './Node'

// export interface AdjacencyList<U> {
//   [Key: string]: Set<Edge<U>>;
// }

interface WithId {
  readonly _id: ObjectId
}

// export type AdjacencySet<U> = Edge<>

export class Graph<U, T> {
  public nodes: Map<ObjectId, Node<T>> = new Map<ObjectId, Node<T>>()
  // adjacencyList: AdjacencyList<U> = {};
  // public adjacencyList: Map<ObjectId, Set<AdjacencySet<U>>> = new Map<ObjectId, Set<AdjacencySet<U>>>()
  public addNode = (object: T) => {
    const node = new Node(object)
    this.nodes.set(node._id, node)
    // this.adjacencyList.set(node._id, new Set<AdjacencySet<U>>())
    return node
  }
  public addEdge = (source: ObjectId, target: ObjectId, weight: number = 1, data: U) => {
    // this.validEdgeIds(source, target) &&
    //   this.adjacencyList[source.toHexString()].push(new Edge({ node: target, weight, data }))
  }

  public validEdgeIds = (source: ObjectId, target: ObjectId) => this.validNodeId(source) && this.validNodeId(target)
  public validNodeId = (id: ObjectId) => this.nodes.has(id)
  //  public getAdjacencyList = () => this.adjacencyList
}
