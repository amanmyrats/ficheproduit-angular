import { Project } from "src/app/shared/models/project.model";

export class Materialcard {
    public id?: number;
    public number: string;
    public slug?: string;
    public nameEn?: string;
    public nameFr?: string;
    public nameRu?: string;
    public nameTm?: string;
    // public supplier?: Supplier;
    // public origin?: Country;
    // public manufacturedIn?: Country;
    public project?: Project;
    public locationFr?: string;
    public locationRu?: string;
    public zone?: string;
    public level?: string;
    public image?: string;
    // public lot?: Lot;
    // public fptype?: FpType;
    // public phase?: Phase;
    public index?: string;
    public descEn?: string;
    public descFr?: string;
    public descRu?: string;
    public descTm?: string;
    public protocolFr?: string;
    public protocolRu?: string;
    public observationFr?: string;
    public observationRu?: string;
    // public signContractor1?: Employee;
    // public signContractor2?: Employee;
    public signTehnadzor?: string;
    public signClient?: string;
    // public dateContractor?: LocalDate;
    // public dateTehnadzor?: LocalDate;
    // public dateClient?: LocalDate;
    // public department?: Department;
    // public trade?: Trade;
    // public quantity?: BigDecimal;
    // public unit?: Unit;
    // public unitPrice?: BigDecimal;
    // public<MaterialCardRoom> materialcardrooms?: List;
    // public<MaterialCardAnnexe5> materialcardAnnexe5s?: List;
    // public<MaterialCardMaterial> materialcardMaterials?: List;
    // public<TechnicalDetailFile> technicalDetailFiles?: List;
    // public<TechnicalDetailImage> technicalDetailImages?: List;
    // public createdBy?: User;
    // public createdAt?: Date;
    // public updatedAt?: Date; public noteForAchat?: string;
}