import { Unit } from "src/app/shared/models/unit.model";
import { Material } from "./material.model";
import { Materialcard } from "./materialcard.model";

export class Materialcardmaterial {
    public id?: number;
    public nameEn?: string;
    public materialcard?: Materialcard;
    public material?: Material;
    public slug?: string;
    public quantity?: number;
    public unit?: Unit;
    public unitPrice?: number;
    public annexe5s?: [];
    // public [] materialcardmaterialannexe5s?: Materialcardmaterialannexe5;

    constructor() { }

    // constructor(
    //     id?: number,
    //     materialcard?: Materialcard,
    //     material?: Material,
    //     slug?: string,
    //     unit?: string,
    //     unitPrice?: number,
    //     quantity?: number,
    // ) {
    //     this.id = id;
    //     this.materialcard = materialcard;
    //     this.material = material;
    //     this.slug = slug;
    //     this.unit = unit;
    //     this.unitPrice = unitPrice;
    //     this.quantity = quantity;
    // }
}
