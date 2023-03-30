import { Component, Inject, Input, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inventoryitemannexe5 } from 'src/app/chantier/models/inventoryitemannexe5.model';
import { Inventoryitemannexe5Service } from 'src/app/chantier/services/inventoryitemannexe5.service';
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
  unitForm: FormGroup;
  units: Unit[];
  annexe5s: Annexe5[];
  @Input() projectId: any = '';

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService, 
    private inventoryItemAnnexe5Service: Inventoryitemannexe5Service,
    private unitService: UnitService,
    @Optional() private dialogRef: MatDialogRef<Inventoryitemannexe5FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.inventoryItemAnnexe5Form = this.fb.group({
      id: '',
      inventoryItem: '',
      annexe5: '',
      quantity: '',
      unit: '',
    });

    this.inventoryItemForm = this.fb.group({id: ''});

    this.annexe5Form = this.fb.group({id: ''});

    this.unitForm = this.fb.group({id: ''});

    // Get Units
    this.getUnits();

    // Get Materials
    this.getAnnexe5s(this.data.projectId);
  }

  ngOnInit(): void {

    if (this.data.inventoryItemAnnexe5DataFromTable) {
      console.log("this.data.inventoryItemAnnexe5DataFromTable");
      console.log(this.data.inventoryItemAnnexe5DataFromTable);
      this.inventoryItemAnnexe5Form.patchValue(this.data.inventoryItemAnnexe5DataFromTable);
      this.inventoryItemForm.patchValue(this.data.inventoryItem);
      this.annexe5Form.patchValue(this.data.inventoryItemAnnexe5DataFromTable.annexe5);
      this.unitForm.patchValue(this.data.inventoryItemAnnexe5DataFromTable.unit);
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
    this.inventoryItemAnnexe5Form.get('unit')?.setValue(this.unitForm.value);
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

  getUnits(): void {
    this.unitService.getUnits().subscribe({
      next: (units: any) => {
        this.units = units;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  getAnnexe5s(projectId: string): void {
    this.projectService.getProjectAnnexe5s(projectId).subscribe({
      next: (annexe5s: Annexe5[]) => {
        this.annexe5s = annexe5s;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
