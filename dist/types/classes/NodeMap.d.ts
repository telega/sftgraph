import { ObjectId } from 'bson';
import { Node } from './Node';
export declare class NodeMap<ND> {
    map: Map<ObjectId, Node<ND>>;
    constructor();
    has: (id: ObjectId) => boolean;
    hasNode: (node: Node<ND>) => boolean;
    add: (id: ObjectId, node: Node<ND>) => Map<ObjectId, Node<ND>>;
    addNode: (node: Node<ND>) => Map<ObjectId, Node<ND>>;
    getNodeById: (id: ObjectId) => Node<ND>;
    values: () => IterableIterator<Node<ND>>;
    entries: () => IterableIterator<[ObjectId, Node<ND>]>;
    clear: () => void;
    get size(): number;
}
