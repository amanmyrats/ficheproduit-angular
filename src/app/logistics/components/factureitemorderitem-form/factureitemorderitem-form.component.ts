import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FactureitemService } from '../../services/factureitem.service';
import { OrderService } from 'src/app/achat/services/order.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Orderitem } from 'src/app/achat/models/orderitem.model';

@Component({
  selector: 'app-factureitemorderitem-form',
  templateUrl: './factureitemorderitem-form.component.html',
  styleUrls: ['./factureitemorderitem-form.component.scss']
})
export class FactureitemorderitemFormComponent {

  factureItemForm: FormGroup;
  factureItemOrderItemForm: FormGroup;
  orderItems: Orderitem[];

  constructor(
    private fb: FormBuilder,
    private factureItemService: FactureitemService, 
    private orderService: OrderService, 
    @Optional() private dialogRef: MatDialogRef<FactureitemorderitemFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.factureItemForm = this.fb.group({
      id: '',
      orderitem: ''
    });

    this.factureItemOrderItemForm = this.fb.group({id: ''});
  }

  ngOnInit(): void {
    // Get OrderItems
    this.getOrderOrderItems(this.data.orderIdFromTable);

    // CREATE
    if (this.data.factureItemFromTable) {
      this.factureItemForm.patchValue(this.data.factureItemFromTable);
    }

  }

  onSubmit() {
    this.factureItemForm.get('orderitem')?.setValue(this.factureItemOrderItemForm.value);
    console.log("submitting");
    console.log(this.factureItemForm.value);
    console.log("submitting end");
    if (this.factureItemForm.valid) {

        this.factureItemService.addFactureItemOrderItem(this.data.factureItemIdFromTable, this.factureItemForm.value)
          .subscribe({
            next: (factureItem: Orderitem) => {
              console.log("OrderItem was added.");
              console.log(factureItem);
              console.log("OrderItem was added. end");
              this.dialogRef.close(factureItem);
            },
            error: (err: any) => {
              console.log(err);
            }
          })
      }
  }


  getOrderOrderItems(materialCardId: string): void {
    this.orderService.getOrderOrderItems(materialCardId).subscribe({
      next: (orderItems: Orderitem[]) => {
        this.orderItems = orderItems;
        console.log(orderItems);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

}
