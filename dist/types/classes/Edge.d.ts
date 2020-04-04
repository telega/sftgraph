import { ObjectId } from 'bson';
import { WithId } from '../interfaces/WithId';
import { WithWeight } from '../interfaces/WithWeight';
import { Node } from './Node';
export declare class Edge<N, D extends WithWeight> implements WithId {
    readonly _id: ObjectId;
    edgeData: D;
    targetNode: Node<N>;
    constructor(node: Node<N>, data: D);
    get id(): string;
    get data(): D;
    set data(data: D);
    get node(): Node<N>;
    get nodeId(): ObjectId;
    get weight(): number;
    set weight(weight: number);
}
