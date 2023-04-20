import { Country } from "src/app/shared/models/country.model";
import { Project } from "src/app/shared/models/project.model";
import { Factureitem } from "./factureitem.model";

export class Facture {
    public id?: string;
    public project?: Project;
    public number?: string;
    public slug?: string;
    public arrivalDate?: string;
    public shipping?: string;
    // public routages?: string;
    public exportFrom?: Country;
    public importTo?: Country;
    public description?: string;
    public note?: string;
    public factureItems?: Factureitem[];
    public createdAt?: string;
    public updatedAt?: string;
}
