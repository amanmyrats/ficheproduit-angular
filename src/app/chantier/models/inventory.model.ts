import { Project } from "src/app/shared/models/project.model";
import { Room } from "src/app/shared/models/room.model";

export class Inventory {
    public id?: number;
    public project?: Project;
    public room?: Room;

    constructor() { }
}
