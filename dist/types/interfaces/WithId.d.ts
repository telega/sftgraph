import { ObjectId } from 'bson';
export interface WithId {
    readonly _id: ObjectId;
}
