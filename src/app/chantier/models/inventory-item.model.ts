import { Unit } from "src/app/shared/models/unit.model";
import { Inventory } from "./inventory.model";
import { Materialcard } from "./materialcard.model";

export class InventoryItem {
    public id?: number;
    public inventory?: Inventory;
    public materialcard?: Materialcard;
    public unit?: Unit;
    public quantity?: number;

    constructor() { }
}
