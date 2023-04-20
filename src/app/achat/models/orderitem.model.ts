import { Materialcard } from "src/app/chantier/models/materialcard.model";
import { Order } from "./order.model";
import { Materialcardmaterial } from "src/app/chantier/models/materialcardmaterial.model";
import { Unit } from "src/app/shared/models/unit.model";
import { Currency } from "src/app/shared/models/currency.model";

export class Orderitem {
    public id?: string;
    public indexNumber?: string;
    public order?: Order;
    public materialcard?: Materialcard;
    public materialcardmaterial?: Materialcardmaterial;
    public descEn?: string;
    public slug?: string;
    public quantity?: string;
    public unit?: Unit;
    public price?: string;
    public currency?: Currency;
    public totalPrice?: string;
    public createdAt?: string;
    public updatedAt?: string;
}

