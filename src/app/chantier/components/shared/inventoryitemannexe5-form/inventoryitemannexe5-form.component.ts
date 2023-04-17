import { Component, Inject, Input, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inventoryitemannexe5 } from 'src/app/chantier/models/inventoryitemannexe5.model';
import { InventoryitemService } from 'src/app/chantier/services/inventoryitem.service';
import { Inventoryitemannexe5Service } from 'src/app/chantier/services/inventoryitemannexe5.service';
import { MaterialcardService } from 'src/app/chantier/services/materialcard.service';
import { Annexe5 } from 'src/app/qs/models/annexe5.model';
import { Unit } from 'src/app/shared/models/unit.model';
import { ProjectService } from 'src/app/shared/services/project.service';
import { UnitService } from 'src/app/shared/services/unit.service';

@Component({
  selector: 'app-inventoryitemannexe5-form',
  templateUrl: './inventoryitemannexe5-form.component.html',
  styleUrls: ['./inventoryitemannexe5-form.component.scss']
})
export class Inventoryitemannexe5FormComponent {

  inventoryItemAnnexe5Form: FormGroup;
  inventoryItemForm: FormGroup;
  annexe5Form: FormGroup;
  // unitForm: FormGroup;
  // units: Unit[];
  materialCardAnnexe5s: Annexe5[];
  inventoryItemAnnexe5s: Annexe5[];
  @Input() projectId: any = '';
  @Input() materialCardId: any = '';

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService, 
    private inventoryItemServcie: InventoryitemService, 
    private inventoryItemAnnexe5Service: Inventoryitemannexe5Service,
    private unitService: UnitService,
    private materialCardService: MaterialcardService, 
    @Optional() private dialogRef: MatDialogRef<Inventoryitemannexe5FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.inventoryItemAnnexe5Form = this.fb.group({
      id: '',
      inventoryItem: '',
      annexe5: '',
      // quantity: '',
      // unit: '',
    });

    this.inventoryItemForm = this.fb.group({id: ''});

    this.annexe5Form = this.fb.group({id: ''});

    // this.unitForm = this.fb.group({id: ''});

    // Get Units
    // this.getUnits();

    // Get Annexe5s
    this.getAnnexe5sByMaterialCard(this.data.materialCardId);


  }

  ngOnInit(): void {
    this.getAnnexe5sByInventoryItem(this.data.inventoryItem.id);
    
    if (this.data.inventoryItemAnnexe5DataFromTable) {
      console.log("this.data.inventoryItemAnnexe5DataFromTable");
      console.log(this.data.inventoryItemAnnexe5DataFromTable);
      this.inventoryItemAnnexe5Form.patchValue(this.data.inventoryItemAnnexe5DataFromTable);
      this.inventoryItemForm.patchValue(this.data.inventoryItem);
      this.annexe5Form.patchValue(this.data.inventoryItemAnnexe5DataFromTable.annexe5);
      // this.unitForm.patchValue(this.data.inventoryItemAnnexe5DataFromTable.unit);
    }
    
    // Initial values
    if (this.data.inventoryItem) {
      // console.log("this.data.inventoryItem");
      // console.log(this.data.inventoryItem);
      this.inventoryItemForm.patchValue(this.data.inventoryItem);
    }

    if (this.data.annexe5) {
      this.annexe5Form.patchValue(this.data.annexe5);
    }

  }

  onSubmit() {
    this.inventoryItemAnnexe5Form.get('inventoryItem')?.setValue(this.inventoryItemForm.value);
    this.inventoryItemAnnexe5Form.get('annexe5')?.setValue(this.annexe5Form.value);
    // this.inventoryItemAnnexe5Form.get('unit')?.setValue(this.unitForm.value);
    console.log("submitting");
    console.log(this.inventoryItemAnnexe5Form.value);
    console.log("submitting end");
    if (this.inventoryItemAnnexe5Form.valid) {
      if (this.data.inventoryItemAnnexe5DataFromTable) {
        // update
        this.inventoryItemAnnexe5Service.updateInventoryItemAnnexe5(this.inventoryItemAnnexe5Form.controls["id"].value, this.inventoryItemAnnexe5Form.value)
        .subscribe({
              next: (inventoryItemAnnexe5: Inventoryitemannexe5) => {
                console.log("Inventoryitemannexe5 was udpated.");
                console.log(inventoryItemAnnexe5);
                console.log("Inventoryitemannexe5 was udpated. end");
                this.dialogRef.close(true);
              },
              error: (err: any) => {
                console.log(err);
              }
            });
      } else {
        // add
        // console.log("creating inventoryitem");
        // console.log(this.inventoryItemAnnexe5Form.value);
        this.inventoryItemAnnexe5Service.createInventoryItemAnnexe5(this.inventoryItemAnnexe5Form.value)
          .subscribe({
            next: (inventoryItemAnnexe5: Inventoryitemannexe5) => {
              console.log("New Inventoryitemannexe5 was added.");
              console.log(inventoryItemAnnexe5);
              console.log("New Inventoryitemannexe5 was added. end");
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.log(err);
            }
          })
      }
    }
  }

  // getUnits(): void {
  //   this.unitService.getUnits().subscribe({
  //     next: (units: any) => {
  //       this.units = units;
  //     },
  //     error: (err: any) => {
  //       console.log(err);
  //     }
  //   });
  // }

  getAnnexe5sByMaterialCard(materialCardId: string): void {
    this.materialCardService.getAnnexe5sByMaterialCard(materialCardId).subscribe({
      next: (materialCardAnnexe5s: Annexe5[]) => {
        this.materialCardAnnexe5s = materialCardAnnexe5s;
      },
      error: (err: any) => {
        console.log("Error when fetching Annexe5s of MaterialCard");
        console.log(err);
      }
    });
  }

  getAnnexe5sByInventoryItem(inventoryItemId: string): void {
    this.inventoryItemServcie.getAnnexe5sByInventoryItem(inventoryItemId).subscribe({
      next: (inventoryItemAnnexe5s: Annexe5[]) => {
        this.inventoryItemAnnexe5s = inventoryItemAnnexe5s;

    console.log("two annexe5s");
    console.log(this.materialCardAnnexe5s);
    console.log(this.inventoryItemAnnexe5s);
      },
      error: (err: any) => {
        console.log("Error when fetching Annexe5s of InventoryItem");
        console.log(err);
      }
    });
  }

  removeDuplicates(materialCardAnnexe5s: Annexe5[], inventoryItemAnnexe5s: Annexe5[]): Annexe5[] {
    const ids = new Set(inventoryItemAnnexe5s.map(item => item.id));
    return materialCardAnnexe5s.filter(item => !ids.has(item.id));
  }
  
  shuffleAnnexe5s(): void {
    // console.log("before");
    // console.log(this.materialCardAnnexe5s);
    this.materialCardAnnexe5s = this.removeDuplicates(this.materialCardAnnexe5s, this.inventoryItemAnnexe5s);
    // console.log("after");
    // console.log(this.materialCardAnnexe5s);
  }

}
