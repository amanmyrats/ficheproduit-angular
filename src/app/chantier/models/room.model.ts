import { Project } from "src/app/shared/models/project.model";

export class Room {
    public id?: number;
    public project?: Project;
    public code?: string;
    public nameEn?: string;

    constructor() { }
}
