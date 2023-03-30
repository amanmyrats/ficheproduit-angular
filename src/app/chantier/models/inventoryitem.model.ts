import { Unit } from "src/app/shared/models/unit.model";
import { Materialcard } from "./materialcard.model";
import { Room } from "./room.model";

export class Inventoryitem {
    public id?: number;
    public room?: Room;
    public materialcard?: Materialcard;
    public unit?: Unit;
    public quantity?: number;

    constructor() { }
}
