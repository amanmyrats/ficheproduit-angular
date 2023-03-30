import { Annexe5 } from "src/app/qs/models/annexe5.model";
import { Unit } from "src/app/shared/models/unit.model";
import { Inventoryitem } from "./inventoryitem.model";

export class Inventoryitemannexe5 {
    public id?: number;
    public inventoryItem?: Inventoryitem;
    public annexe5?: Annexe5;
    public unit?: Unit;
    public quantity?: number;
    public unitPrice?: number;
    public totalPrice?: number;
}
