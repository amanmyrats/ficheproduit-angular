import { Project } from "src/app/shared/models/project.model";
import { Unit } from "src/app/shared/models/unit.model";

export class Annexe5 {
    public id?: number;
    public project?: Project;
    public code?: string;
    public nameEn?: string;
    public unit?: Unit;
    public quantity?: number;
    public unitPrice?: number;
    public totalPrice?: number;
}