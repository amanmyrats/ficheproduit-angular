import { Project } from "src/app/shared/models/project.model";
import { Inventoryitem } from "./inventoryitem.model";

export class Inventory {
    public id?: number;
    public project?: Project;
    public code?: string;
    public nameEn?: string;
    public nameRu?: string;
    public level?: string;
    public zone?: string;

    public inventorySignContractor?: string;
    public inventorySignClient1?: string;
    public inventorySignClient2?: string;

    public inventories? : Inventoryitem [];

    constructor() { }
}
