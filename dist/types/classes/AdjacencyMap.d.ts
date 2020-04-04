import { ObjectId } from 'bson';
import { EdgeMap } from './EdgeMap';
import { Node } from './Node';
import { WithWeight } from '../interfaces/WithWeight';
import { Edge } from './Edge';
export declare class AdjacencyMap<ND, ED extends WithWeight> {
    map: Map<ObjectId, EdgeMap<ND, ED>>;
    constructor(nodeMap?: Map<ObjectId, Node<ND>>);
    has: (id: ObjectId) => boolean;
    hasNode: (node: Node<ND>) => boolean;
    addNode: (node: Node<ND>) => Map<ObjectId, EdgeMap<ND, ED>>;
    hasEdge: (source: Node<ND>, target: Node<ND>) => boolean;
    addEdge: (source: Node<ND>, target: Node<ND>, edgeData: ED) => Map<ObjectId, Edge<ND, ED>>;
    addBiEdge: (source: Node<ND>, target: Node<ND>, edgeData: ED) => Map<ObjectId, Edge<ND, ED>>;
    addDiEdge: (source: Node<ND>, target: Node<ND>, edgeData: ED) => Map<ObjectId, Edge<ND, ED>>;
    private createMissingNodes;
    private addMissingNodes;
    private hasSourceAndTarget;
    getEdgeMap: (id: ObjectId) => EdgeMap<ND, ED>;
    getEdgeMapByNode: (node: Node<ND>) => EdgeMap<ND, ED>;
    values: () => IterableIterator<EdgeMap<ND, ED>>;
    entries: () => IterableIterator<[ObjectId, EdgeMap<ND, ED>]>;
    clear: () => void;
    removeNode: ({ _id }: Node<ND>) => void;
    removeNodeById: (id: ObjectId) => void;
    get size(): number;
}
