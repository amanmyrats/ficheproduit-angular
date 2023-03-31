import { Annexe5 } from "src/app/qs/models/annexe5.model";
import { Unit } from "src/app/shared/models/unit.model";
import { Materialcardmaterial } from "./materialcardmaterial.model";

export class Materialcardmaterialannexe5 {
    public id?: number;
    public materialCardMaterial?: Materialcardmaterial;
    public annexe5?: Annexe5;
    public unit?: Unit;
    public quantity?: number;
    public unitPrice?: number;
    public totalPrice?: number;
}
