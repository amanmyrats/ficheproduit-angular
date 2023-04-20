import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Materialcardmaterial } from 'src/app/chantier/models/materialcardmaterial.model';
import { OrderitemService } from '../../services/orderitem.service';
import { MaterialcardService } from 'src/app/chantier/services/materialcard.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Orderitem } from '../../models/orderitem.model';

@Component({
  selector: 'app-orderitemmaterialcardmaterial-form',
  templateUrl: './orderitemmaterialcardmaterial-form.component.html',
  styleUrls: ['./orderitemmaterialcardmaterial-form.component.scss']
})
export class OrderitemmaterialcardmaterialFormComponent {

  orderItemForm: FormGroup;
  materialCardMaterialForm: FormGroup;
  materialCardMaterials: Materialcardmaterial[];

  constructor(
    private fb: FormBuilder,
    private orderItemService: OrderitemService, 
    private materialCardService: MaterialcardService, 
    @Optional() private dialogRef: MatDialogRef<OrderitemmaterialcardmaterialFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.orderItemForm = this.fb.group({
      id: '',
      materialcardmaterial: ''
    });

    this.materialCardMaterialForm = this.fb.group({id: ''});
  }

  ngOnInit(): void {
    // Get MaterialCardMaterials
    this.getMaterialcardMaterialsByMaterialcard(this.data.materialCardIdFromTable);

    // CREATE
    if (this.data.orderItemFromTable) {
      this.orderItemForm.patchValue(this.data.orderItemFromTable);
    }

  }

  onSubmit() {
    this.orderItemForm.get('materialcardmaterial')?.setValue(this.materialCardMaterialForm.value);
    console.log("submitting");
    console.log(this.orderItemForm.value);
    console.log("submitting end");
    if (this.orderItemForm.valid) {

        this.orderItemService.addOrderItemMaterialCardMaterial(this.data.orderItemIdFromTable, this.orderItemForm.value)
          .subscribe({
            next: (orderItem: Orderitem) => {
              console.log("OrderitemMaterialCardMaterial was added.");
              console.log(orderItem);
              console.log("OrderitemMaterialCardMaterial was added. end");
              this.dialogRef.close(orderItem);
            },
            error: (err: any) => {
              console.log(err);
            }
          })
      }
  }


  getMaterialcardMaterialsByMaterialcard(materialCardId: string): void {
    this.materialCardService.getMaterialcardMaterialsByMaterialcard(materialCardId).subscribe({
      next: (materialCardMaterials: Materialcardmaterial[]) => {
        this.materialCardMaterials = materialCardMaterials;
        console.log(materialCardMaterials);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

}
