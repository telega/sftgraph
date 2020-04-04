import { ObjectId } from 'bson';
import { Edge } from './Edge';
import { Node } from './Node';
import { WithId } from '../interfaces/WithId';
import { WithWeight } from 'src/interfaces/WithWeight';
import { NodeMap } from './NodeMap';
import { AdjacencyMap } from './AdjacencyMap';
export declare class Graph<GD, ND, ED extends WithWeight> implements WithId {
    readonly _id: ObjectId;
    nodeMap: NodeMap<ND>;
    adjacencyMap: AdjacencyMap<ND, ED>;
    metaData: GD;
    constructor(metaData?: GD);
    addNode: (node: Node<ND>) => Node<ND>;
    addNodes: (nodes: Node<ND>[]) => void;
    addNewNode: (nodeData: ND) => Node<ND>;
    addEdge: (source: Node<ND>, target: Node<ND>, edgeData: ED) => Map<ObjectId, Edge<ND, ED>>;
    addBiEdge: (source: Node<ND>, target: Node<ND>, edgeData: ED) => Map<ObjectId, Edge<ND, ED>>;
    addDiEdge: (source: Node<ND>, target: Node<ND>, edgeData: ED) => Map<ObjectId, Edge<ND, ED>>;
    private createMissingNodes;
    private addMissingNodes;
    private hasSourceAndTargetNodes;
    hasNode: (node: Node<ND>) => boolean;
    get nodes(): IterableIterator<[ObjectId, Node<ND>]>;
    get nodeValues(): IterableIterator<Node<ND>>;
    get size(): number;
    get edgeCount(): number;
    getNodeById(id: ObjectId): Node<ND>;
}
