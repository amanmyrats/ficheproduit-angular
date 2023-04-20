import { Project } from "src/app/shared/models/project.model";
import { Orderitem } from "./orderitem.model";

export class Order {
    public id?: string;
    public prNo?: string;
    public number?: string;
    public slug?: string;
    public project?: Project;
    public company?: string;
    public deliverycenter?: string;
    public deliverycenterbilling?: string;
    public supplier?: string;
    public businessunit?: string;
    public deliverycondition?: string;
    public transporttype?: string;
    public deliveryDate?: string;
    public requestor?: string;
    public purchaser?: string;
    public validator?: string;
    public description?: string;
    public managementCode?: string;
    public status?: string;
    public paymentTerms?: string;
    public orderitems?: Orderitem[];
    public createdAt?: string;
    public updatedAt?: string;
}
