import { Country } from "src/app/shared/models/country.model";
import { Department } from "src/app/shared/models/department.model";
import { Lot } from "src/app/shared/models/lot.model";
import { Phase } from "src/app/shared/models/phase.model";
import { Project } from "src/app/shared/models/project.model";
import { Trade } from "src/app/shared/models/trade.model";
import { Unit } from "src/app/shared/models/unit.model";
import { Fptype } from "./fptype.model";
import { Inventoryitem } from "./inventoryitem.model";
import { Materialcardmaterial } from "./materialcardmaterial.model";

export class Materialcard {

    public id?: number;
    public number?: string;
    public slug?: string;
    public nameEn?: string;
    public nameFr?: string;
    public nameRu?: string;
    public nameTm?: string;
	public supplierEn?: string;
	public supplierRu?: string;
    public origin?: Country;
    public manufacturedIn?: Country;
    public project?: Project;
    public locationFr?: string;
    public locationRu?: string;
    public zone?: string;
    public level?: string;
    public image?: string;
    public lot?: Lot;
    public fptype?: Fptype;
    public phase?: Phase;
    public index?: string;
    public descEn?: string;
    public descFr?: string;
    public descRu?: string;
    public descTm?: string;
    public protocolFr?: string;
    public protocolRu?: string;
    public observationFr?: string;
    public observationRu?: string;
    public signContractor1?: string;
    public signContractor2?: string;
    public signTehnadzor?: string;
    public signClient?: string;
    public dateContractor?: string;
    public dateTehnadzor?: string;
    public dateClient?: string;
    public department?: Department;
    public trade?: Trade;
    public quantity?: number;
    public unit?: Unit;
    public unitPrice?: number;
    public inventoryItems?: Inventoryitem[];
    public materialcardMaterials?: Materialcardmaterial[];
    // public technicalDetailFiles?: Technicaldetailfile[];
    // public technicalDetailImages?: Technicaldetailimage[];
    public createdBy?: string;
    public createdAt?: string;
    public updatedAt?: string;
    public noteForAchat?: string;
    
}