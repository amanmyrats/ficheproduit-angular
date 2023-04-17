import { Component, EventEmitter, Inject, Input, OnInit, Optional, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Material } from 'src/app/chantier/models/material.model';
import { Materialcardmaterial } from 'src/app/chantier/models/materialcardmaterial.model';
import { MaterialService } from 'src/app/chantier/services/material.service';
import { MaterialcardmaterialService } from 'src/app/chantier/services/materialcardmaterial.service';
import { Unit } from 'src/app/shared/models/unit.model';
import { UnitService } from 'src/app/shared/services/unit.service';

@Component({
  selector: 'app-materialcardmaterial-form',
  templateUrl: './materialcardmaterial-form.component.html',
  styleUrls: ['./materialcardmaterial-form.component.scss']
})
export class MaterialcardmaterialFormComponent implements OnInit {
  // @Output() materialCardMaterialCreated: EventEmitter<Materialcardmaterial> = new EventEmitter<Materialcardmaterial>();
  materialcardMaterialForm: FormGroup;
  materialcardForm: FormGroup;
  materialForm: FormGroup;
  unitForm: FormGroup;
  units: Unit[];
  materials: Material[];

  constructor(
    private fb: FormBuilder,
    private materialService: MaterialService,
    private materialcardMaterialService: MaterialcardmaterialService, 
    private unitService: UnitService,
    @Optional() private dialogRef: MatDialogRef<MaterialcardmaterialFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.materialcardMaterialForm = this.fb.group({
      id: '',
      materialcard: '',
      material: '',
      quantity: '',
      unit: '',
      unitPrice: ''
    });

    this.materialcardForm = this.fb.group({
      id: '',
    });

    this.materialForm = this.fb.group({
      id: '',
      // nameEn: '',
    });

    this.unitForm = this.fb.group({
      id: '',
      // code: '',
    });

    // Get Units
    this.getUnits();

    // Get Materials
    this.getMaterials();
  }

  ngOnInit(): void {
    
    // UPDATE
    if (this.data.materialcardMaterialFromTable) {
      this.materialcardMaterialForm.patchValue(this.data.materialcardMaterialFromTable);
      this.materialcardForm.patchValue(this.data.materialcardMaterialFromTable.materialcard);
      this.materialForm.patchValue(this.data.materialcardMaterialFromTable.material);
      this.unitForm.patchValue(this.data.materialcardMaterialFromTable.unit);
    }
    
    // CREATE
    if (this.data.materialcardFromTable) {
      this.materialcardForm.patchValue(this.data.materialcardFromTable);
    }

  }

  onSubmit() {
    this.materialcardMaterialForm.controls['materialcard'].setValue(this.materialcardForm.value);
    this.materialcardMaterialForm.controls['material'].setValue(this.materialForm.value);
    this.materialcardMaterialForm.controls['unit'].setValue(this.unitForm.value);
    console.log("submitting");
    console.log(this.materialcardMaterialForm.value);
    console.log("submitting end");

    if (this.materialcardMaterialForm.valid) {
      if (this.data.materialcardMaterialFromTable) {
        // update
        this.materialcardMaterialService.updateMaterialCardMaterial(this.materialcardMaterialForm.controls['id'].value, this.materialcardMaterialForm.value)
          .subscribe({
            next: (materialcardMaterial: Materialcardmaterial) => {
              console.log("MaterialcardMaterial was updated.");
              console.log(materialcardMaterial);
              console.log("MaterialcardMaterial was updated.");
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.log(err);
            }
          })
      } else {
        // add
        this.materialcardMaterialService.createMaterialCardMaterial(this.materialcardMaterialForm.value)
          .subscribe({
            next: (materialcardMaterial: Materialcardmaterial) => {
              console.log("New MaterialcardMaterial was added.");
              console.log(materialcardMaterial);
              console.log("New MaterialcardMaterial was added.");

              this.dialogRef.close(materialcardMaterial);
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

  getMaterials(): void {
    this.materialService.getMaterials().subscribe({
      next: (materials: Material[]) => {
        this.materials = materials;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

}
