import { Country } from "src/app/shared/models/country.model";
import { Facture } from "./facture.model";
import { Unit } from "src/app/shared/models/unit.model";
import { Currency } from "src/app/shared/models/currency.model";
import { Order } from "src/app/achat/models/order.model";
import { Orderitem } from "src/app/achat/models/orderitem.model";
import { Factureitemannexe5 } from "./factureitemannexe5.model";

export class Factureitem {
    public id?: string;
    public facture?: Facture;
    public no?: string;
    public descFr?: string;
    public descEn?: string;
    public descRu?: string;
    public descTm?: string;
    public supplier?: string;
    public origin?: Country;
    public unit?: Unit;
    public quantity?: string;
    public currency?: Currency;
    public unitPrice?: string;
    public totalPrice?: string;
    public order?: Order;
    public orderitem?: Orderitem;
    public factureitemannexe5s?: Factureitemannexe5[];
    public slug?: string;
}
