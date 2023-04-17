import { Unit } from "src/app/shared/models/unit.model";
import { Materialcard } from "./materialcard.model";
import { Room } from "./room.model";
import { Annexe5 } from "src/app/qs/models/annexe5.model";
import { Inventoryitemannexe5 } from "./inventoryitemannexe5.model";

export class Inventoryitem {
    public id?: number;
    public room?: Room;
    public materialcard?: Materialcard;
    public inventoryitemannexe5s?: Inventoryitemannexe5[];
    public factures?: any[];
    public unit?: Unit;
    public quantity?: number;
    public image?: string;
    public unitPrice?: number;
    public totalPrice?: number;

    constructor() { }
}
