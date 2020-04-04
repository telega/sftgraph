import { ObjectId } from 'bson';
import { Edge } from './Edge';
import { Node } from './Node';
import { WithWeight } from '../interfaces/WithWeight';
export declare class EdgeMap<ND, ED extends WithWeight> {
    private map;
    constructor(edge?: Edge<ND, ED>);
    get size(): number;
    get length(): number;
    clear: () => void;
    entries: () => IterableIterator<[ObjectId, Edge<ND, ED>]>;
    get: (id: ObjectId) => Edge<ND, ED>;
    getEdge: ({ _id }: Edge<ND, ED>) => Edge<ND, ED>;
    has: (id: ObjectId) => boolean;
    hasEdge: ({ _id }: Edge<ND, ED>) => boolean;
    forEach: (callbackFn: (value: Edge<ND, ED>, key: ObjectId, map: Map<ObjectId, Edge<ND, ED>>) => void, thisArg?: any) => void;
    values: () => IterableIterator<Edge<ND, ED>>;
    set: (key: ObjectId, value: Edge<ND, ED>) => Map<ObjectId, Edge<ND, ED>>;
    setEdge: (edge: Edge<ND, ED>) => Map<ObjectId, Edge<ND, ED>>;
    getEdgesByTargetNodeId: (id: ObjectId) => Set<Edge<ND, ED>>;
    removeEdgesByTargetNodeId: (id: ObjectId) => void;
    removeEdges: (edges: Set<Edge<ND, ED>>) => void;
    removeEdgeById: (id: ObjectId) => boolean;
    hasEdgeToTargetNodeId: (id: ObjectId) => boolean;
    hasEdgeToTargetNode: ({ _id }: Node<ND>) => boolean;
}
