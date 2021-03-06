import { ObjectId } from 'bson'
import { Edge } from './Edge'
import { Node } from './Node'
import { Queue } from './Queue'
import { WithId } from '../interfaces/WithId'
import { WithWeight } from '../interfaces/WithWeight'
import { NodeMap } from './NodeMap'
import { AdjacencyMap } from './AdjacencyMap'
import * as _ from 'lodash'
export class Graph<GD, ND, ED extends WithWeight> implements WithId {
  readonly _id: ObjectId
  public nodeMap: NodeMap<ND>
  public adjacencyMap: AdjacencyMap<ND, ED>
  public metaData: GD

  constructor(metaData?: GD) {
    this._id = new ObjectId()
    this.nodeMap = new NodeMap<ND>()
    this.adjacencyMap = new AdjacencyMap<ND, ED>()
    this.metaData = metaData
  }

  public addNode = (node: Node<ND>) => {
    this.nodeMap.addNode(node)
    this.adjacencyMap.addNode(node)
    return node
  }

  public addNodes = (nodes: Array<Node<ND>>) => nodes.forEach(node => this.addNode(node))

  public addNewNode = (nodeData: ND) => this.addNode(new Node(nodeData))

  public addEdge = (source: Node<ND>, target: Node<ND>, edgeData: ED) =>
    this.createMissingNodes(source, target) && this.adjacencyMap.addEdge(source, target, edgeData)

  public addBiEdge = (source: Node<ND>, target: Node<ND>, edgeData: ED) => this.addEdge(source, target, edgeData)

  public addDiEdge = (source: Node<ND>, target: Node<ND>, edgeData: ED) =>
    this.createMissingNodes(source, target) && this.adjacencyMap.addDiEdge(source, target, edgeData)

  private createMissingNodes = (source: Node<ND>, target: Node<ND>) =>
    this.hasSourceAndTargetNodes(source, target) || this.addMissingNodes(source, target)

  private addMissingNodes = (source: Node<ND>, target: Node<ND>) => {
    !this.hasNode(source) && this.addNode(source)
    !this.hasNode(target) && this.addNode(target)
  }
  private hasSourceAndTargetNodes = (source: Node<ND>, target: Node<ND>) => this.hasNode(source) && this.hasNode(target)
  public hasNode = (node: Node<ND>) => this.nodeMap.hasNode(node)

  get nodes() {
    return this.nodeMap.entries()
  }

  get nodeValues() {
    return this.nodeMap.values()
  }

  get size() {
    return this.nodeMap.size
  }

  get edgeCount() {
    return this.adjacencyMap.size
  }

  getNodeById(id: ObjectId) {
    return this.nodeMap.getNodeById(id)
  }

  getRandomNode = () => _.sample(Array.from(this.nodeMap.values()))

  getEdgeMapById(id: ObjectId) {
    return this.adjacencyMap.has(id) && this.adjacencyMap.getEdgeMap(id)
  }

  getEdgeMapByNode(node: Node<ND>) {
    return this.adjacencyMap.hasNode(node) && this.adjacencyMap.getEdgeMapByNode(node)
  }

  getNeighborsById = (id: ObjectId) => this.getEdgeMapById(id).getTargetNodes()
  getNeighborsByNode = (node: Node<ND>) => this.getNeighborsById(node._id)

  nodesMatch = (a: Node<ND>, b: Node<ND>) => a._id.equals(b._id)

  bfs(start: Node<ND> = this.getRandomNode(), target: Node<ND> = null) {
    const queue = new Queue<Node<ND>>([start])
    const visited = new Map<Node<ND>, number>()
    const count = 0

    if (this.nodesMatch(start, target)) {
      return target
    } else {
      !visited.has(target) && visited.set(target, count)
    }
  }
}
