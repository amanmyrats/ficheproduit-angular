import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Material } from 'src/app/chantier/models/material.model';
import { Materialcardmaterial } from 'src/app/chantier/models/materialcardmaterial.model';
import { MaterialService } from 'src/app/chantier/services/material.service';
import { MaterialcardService } from 'src/app/chantier/services/materialcard.service';
import { Unit } from 'src/app/shared/models/unit.model';
import { UnitService } from 'src/app/shared/services/unit.service';

@Component({
  selector: 'app-materialcardmaterial-form',
  templateUrl: './materialcardmaterial-form.component.html',
  styleUrls: ['./materialcardmaterial-form.component.scss']
})
export class MaterialcardmaterialFormComponent implements OnInit {
  materialcardMaterialForm: FormGroup;
  materialForm: FormGroup;
  unitForm: FormGroup;
  units: Unit[];
  materials: Material[];
  initialMaterial: any;
  initialUnit: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private materialService: MaterialService,
    private materialcardService: MaterialcardService,
    private unitService: UnitService,
    @Optional() private dialogRef: MatDialogRef<MaterialcardmaterialFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.materialcardMaterialForm = this.fb.group({
      id: '',
      quantity: '',
      material: '',
      unit: '',
      unitPrice: ''
    });

    this.materialForm = this.fb.group({
      id: '',
      nameEn: '',
    });

    this.unitForm = this.fb.group({
      id: '',
      code: '',
    });

    // Get Units
    this.getUnits();

    // Get Materials
    this.getMaterials();
  }

  ngOnInit(): void {

    if (this.data.materialcardMaterialFormData) {
      console.log("material patch value from table");
      // console.log(this.data.materialcardMaterialFormData);
      // console.log(this.data.materialFormData);
      // console.log(this.data.unitFormData);
      this.materialcardMaterialForm.patchValue(this.data.materialcardMaterialFormData);
      this.materialForm.patchValue(this.data.materialcardMaterialFormData.material);
      this.unitForm.patchValue(this.data.materialcardMaterialFormData.unit);
      this.initialMaterial = this.data.materialcardMaterialFormData.material;
      this.initialUnit = this.data.materialcardMaterialFormData.unit;
    }

  }

  onSubmit() {
    console.log(this.materialcardMaterialForm.value);
    this.materialcardMaterialForm.controls['material'].setValue(this.materialForm.value);
    this.materialcardMaterialForm.controls['unit'].setValue(this.unitForm.value);
    console.log(this.materialcardMaterialForm.value);

    if (this.materialcardMaterialForm.valid) {
      if (this.data.materialcardMaterialFormData) {
        // update
        this.materialcardService.createMaterialcardMaterial(this.data.materialcardId, this.materialcardMaterialForm.value)
          .subscribe({
            next: (materialcardMaterial: Materialcardmaterial) => {
              console.log("MaterialcardMaterial was udpated.");
              console.log(materialcardMaterial);
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.log(err);
            }
          })
      } else {
        // add
        console.log("MaterialcardId from data " + this.data.materialcardId);

        this.materialcardService.createMaterialcardMaterial(this.data.materialcardId, this.materialcardMaterialForm.value)
          .subscribe({
            next: (materialcardMaterial: Materialcardmaterial) => {
              console.log("New MaterialcardMaterial was added.");
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
