import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Materialcard } from 'src/app/chantier/models/materialcard.model';
import { OrderitemService } from '../../services/orderitem.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Orderitem } from '../../models/orderitem.model';

@Component({
  selector: 'app-orderitemmaterialcard-form',
  templateUrl: './orderitemmaterialcard-form.component.html',
  styleUrls: ['./orderitemmaterialcard-form.component.scss']
})
export class OrderitemmaterialcardFormComponent {

  orderItemForm: FormGroup;
  materialCardForm: FormGroup;
  materialCards: Materialcard[];
  projectMaterialCards: Materialcard[];

  constructor(
    private fb: FormBuilder,
    private orderItemService: OrderitemService, 
    private projectService: ProjectService, 
    @Optional() private dialogRef: MatDialogRef<OrderitemmaterialcardFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.orderItemForm = this.fb.group({
      id: '',
      materialcard: ''
    });

    this.materialCardForm = this.fb.group({id: ''});
  }

  ngOnInit(): void {
    // Get MaterialCardMaterial Annexe5s
    this.getProjectMaterialCards(this.data.projectIdFromTable);

    // CREATE
    if (this.data.orderItemFromTable) {
      this.orderItemForm.patchValue(this.data.orderItemFromTable);
    }

  }

  onSubmit() {
    this.orderItemForm.get('materialcard')?.setValue(this.materialCardForm.value);
    console.log("submitting");
    console.log(this.orderItemForm.value);
    console.log("submitting end");
    if (this.orderItemForm.valid) {

        this.orderItemService.addOrderItemMaterialCard(this.data.orderItemIdFromTable, this.orderItemForm.value)
          .subscribe({
            next: (orderItem: Orderitem) => {
              console.log("New OrderitemMaterialCard was added.");
              console.log(orderItem);
              console.log("New OrderitemMaterialCard was added. end");
              this.dialogRef.close(orderItem);
            },
            error: (err: any) => {
              console.log(err);
            }
          })
      }
  }


  getProjectMaterialCards(projectId: string): void {
    this.projectService.getProjectMaterialCards(projectId).subscribe({
      next: (materialCards: Materialcard[]) => {
        this.materialCards = materialCards;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

}
