import { Annexe5 } from "src/app/qs/models/annexe5.model";
import { Factureitem } from "./factureitem.model";
import { Unit } from "src/app/shared/models/unit.model";

export class Factureitemannexe5 {
    public id?: string;
    public factureitem?: Factureitem;
    public annexe5?: Annexe5;
    public unit?: Unit;
    public quantity?: string;
    public slug?: string;
}
