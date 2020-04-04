import { ObjectId } from 'bson';
import { WithId } from '../interfaces/WithId';
export declare class Node<T> implements WithId {
    readonly _id: ObjectId;
    private nodeData;
    constructor(data: T);
    get id(): string;
    get data(): T;
    set data(data: T);
}
