import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Materialcardmaterialannexe5 } from 'src/app/chantier/models/materialcardmaterialannexe5.model';
import { MaterialcardmaterialService } from 'src/app/chantier/services/materialcardmaterial.service';
import { Materialcardmaterialannexe5Service } from 'src/app/chantier/services/materialcardmaterialannexe5.service';
import { Annexe5 } from 'src/app/qs/models/annexe5.model';
import { Unit } from 'src/app/shared/models/unit.model';
import { ProjectService } from 'src/app/shared/services/project.service';
import { UnitService } from 'src/app/shared/services/unit.service';

@Component({
  selector: 'app-materialcardmaterialannexe5-form',
  templateUrl: './materialcardmaterialannexe5-form.component.html',
  styleUrls: ['./materialcardmaterialannexe5-form.component.scss']
})
export class Materialcardmaterialannexe5FormComponent {

  materialCardMaterialAnnexe5Form: FormGroup;
  materialCardMaterialForm: FormGroup;
  annexe5Form: FormGroup;
  unitForm: FormGroup;
  units: Unit[];
  projectAnnexe5s: Annexe5[];
  materialCardMaterialAnnexe5s: Annexe5[];

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService, 
    private materialCardMaterialService: MaterialcardmaterialService, 
    private materialCardMaterialAnnexe5Service: Materialcardmaterialannexe5Service,
    private unitService: UnitService,
    @Optional() private dialogRef: MatDialogRef<Materialcardmaterialannexe5FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.materialCardMaterialAnnexe5Form = this.fb.group({
      id: '',
      materialCardMaterial: '',
      annexe5: '',
      quantity: '',
      unit: '',
    });

    this.materialCardMaterialForm = this.fb.group({id: ''});

    this.annexe5Form = this.fb.group({id: ''});

    this.unitForm = this.fb.group({id: ''});

    // Get Units
    this.getUnits();

    // Get Project Annexe5s
    this.getProjectAnnexe5s(this.data.projectIdFromTable);
  }

  ngOnInit(): void {
    // Get MaterialCardMaterial Annexe5s
    this.getMaterialCardMaterialAnnexe5s(this.data.materialCardMaterialFromTable.id);

    // UPDATE
    if (this.data.materialCardMaterialAnnexe5FromTable) {
      console.log("this.data.materialCardMaterialAnnexe5FromTable");
      console.log(this.data.materialCardMaterialAnnexe5FromTable);
      this.materialCardMaterialAnnexe5Form.patchValue(this.data.materialCardMaterialAnnexe5FromTable);
      this.materialCardMaterialForm.patchValue(this.data.materialCardMaterialAnnexe5FromTable.materialCardMaterial);
      this.annexe5Form.patchValue(this.data.materialCardMaterialAnnexe5FromTable.annexe5);
      this.unitForm.patchValue(this.data.materialCardMaterialAnnexe5FromTable.unit);
    }
    
    // CREATE
    if (this.data.materialCardMaterialFromTable) {
      this.materialCardMaterialForm.patchValue(this.data.materialCardMaterialFromTable);
    }

  }

  onSubmit() {
    this.materialCardMaterialAnnexe5Form.get('materialCardMaterial')?.setValue(this.materialCardMaterialForm.value);
    this.materialCardMaterialAnnexe5Form.get('annexe5')?.setValue(this.annexe5Form.value);
    this.materialCardMaterialAnnexe5Form.get('unit')?.setValue(this.unitForm.value);
    console.log("submitting");
    console.log(this.materialCardMaterialAnnexe5Form.value);
    console.log("submitting end");
    if (this.materialCardMaterialAnnexe5Form.valid) {
      if (this.data.materialCardMaterialAnnexe5FromTable) {
        // update
        this.materialCardMaterialAnnexe5Service.updateMaterialCardMaterialAnnexe5(this.materialCardMaterialAnnexe5Form.controls["id"].value, this.materialCardMaterialAnnexe5Form.value)
        .subscribe({
              next: (materialCardMaterialAnnexe5: Materialcardmaterialannexe5) => {
                console.log("Materialcardmaterialannexe5 was udpated.");
                console.log(materialCardMaterialAnnexe5);
                console.log("Materialcardmaterialannexe5 was udpated. end");
                this.dialogRef.close(true);
              },
              error: (err: any) => {
                console.log(err);
              }
            });
      } else {
        // add
        this.materialCardMaterialAnnexe5Service.createMaterialCardMaterialAnnexe5(this.materialCardMaterialAnnexe5Form.value)
          .subscribe({
            next: (materialCardMaterialAnnexe5: Materialcardmaterialannexe5) => {
              console.log("New Materialcardmaterialannexe5 was added.");
              console.log(materialCardMaterialAnnexe5);
              console.log("New Materialcardmaterialannexe5 was added. end");
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

  getProjectAnnexe5s(projectId: string): void {
    this.projectService.getProjectAnnexe5s(projectId).subscribe({
      next: (projectAnnexe5s: Annexe5[]) => {
        this.projectAnnexe5s = projectAnnexe5s;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  getMaterialCardMaterialAnnexe5s(materialCardMaterialId: string): void {
    this.materialCardMaterialService.getAnnexe5sByMaterialCardMaterial(materialCardMaterialId).subscribe({
      next: (materialCardMaterialAnnexe5s: Annexe5[]) => {
        this.materialCardMaterialAnnexe5s = materialCardMaterialAnnexe5s;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  removeDuplicates(projectAnnexe5s: Annexe5[], materialCardMaterialAnnexe5s: Annexe5[]): Annexe5[] {
    const ids = new Set(materialCardMaterialAnnexe5s.map(item => item.id));
    return projectAnnexe5s.filter(item => !ids.has(item.id));
  }
  
  shuffleAnnexe5s(): void {
    // console.log("before");
    // console.log(this.materialCardAnnexe5s);
    this.projectAnnexe5s = this.removeDuplicates(this.projectAnnexe5s, this.materialCardMaterialAnnexe5s);
    // console.log("after");
    // console.log(this.materialCardAnnexe5s);
  }

}
