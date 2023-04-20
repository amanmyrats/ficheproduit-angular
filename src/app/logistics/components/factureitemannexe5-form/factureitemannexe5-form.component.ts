import { Component, Inject, Input, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Annexe5 } from 'src/app/qs/models/annexe5.model';
import { Unit } from 'src/app/shared/models/unit.model';
import { FactureitemService } from '../../services/factureitem.service';
import { Factureitemannexe5Service } from '../../services/factureitemannexe5.service';
import { ProjectService } from 'src/app/shared/services/project.service';
import { UnitService } from 'src/app/shared/services/unit.service';
import { FactureService } from '../../services/facture.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Factureitemannexe5 } from '../../models/factureitemannexe5.model';

@Component({
  selector: 'app-factureitemannexe5-form',
  templateUrl: './factureitemannexe5-form.component.html',
  styleUrls: ['./factureitemannexe5-form.component.scss']
})
export class Factureitemannexe5FormComponent {

  factureItemAnnexe5Form: FormGroup;
  factureItemForm: FormGroup;
  annexe5Form: FormGroup;
  unitForm: FormGroup;
  units: Unit[];
  allPossibleAnnexe5sOfFactureItem: Annexe5[];
  allCurrentFactureItemAnnexe5s: Factureitemannexe5[];
  factureItemAnnexe5s: Factureitemannexe5[];
  @Input() projectId: any = '';
  @Input() factureId: any = '';

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService, 
    private factureitemService: FactureitemService, 
    private factureitemannexe5Service: Factureitemannexe5Service,
    private unitService: UnitService,
    private factureService: FactureService, 
    @Optional() private dialogRef: MatDialogRef<Factureitemannexe5FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.factureItemAnnexe5Form = this.fb.group({
      id: '',
      factureitem: '',
      annexe5: '',
      quantity: '',
      unit: '',
    });

    this.factureItemForm = this.fb.group({id: ''});

    this.annexe5Form = this.fb.group({id: ''});

    this.unitForm = this.fb.group({id: ''});

    // Get Units
    this.getUnits();

    // Get Annexe5s
    this.getFactureItemAllPossibleAnnexe5s(this.data.factureId);


  }

  ngOnInit(): void {
    // this.getFactureItemFactureItemAnnexe5s(this.data.factureItem.id);
    
    if (this.data.factureItemAnnexe5DataFromTable) {
      console.log("this.data.factureItemAnnexe5DataFromTable");
      console.log(this.data.factureItemAnnexe5DataFromTable);
      this.factureItemAnnexe5Form.patchValue(this.data.factureItemAnnexe5DataFromTable);
      this.factureItemForm.patchValue(this.data.factureItem);
      this.annexe5Form.patchValue(this.data.factureItemAnnexe5DataFromTable.annexe5);
      this.unitForm.patchValue(this.data.factureItemAnnexe5DataFromTable.unit);
    }
    
    // Initial values
    if (this.data.factureItem) {
      // console.log("this.data.factureItem");
      // console.log(this.data.factureItem);
      this.factureItemForm.patchValue(this.data.factureItem);
    }

    if (this.data.annexe5) {
      this.annexe5Form.patchValue(this.data.annexe5);
    }

  }

  onSubmit() {
    this.factureItemAnnexe5Form.get('factureitem')?.setValue(this.factureItemForm.value);
    this.factureItemAnnexe5Form.get('annexe5')?.setValue(this.annexe5Form.value);
    this.factureItemAnnexe5Form.get('unit')?.setValue(this.unitForm.value);
    console.log("submitting");
    console.log(this.factureItemAnnexe5Form.value);
    console.log("submitting end");
    if (this.factureItemAnnexe5Form.valid) {
      if (this.data.factureItemAnnexe5DataFromTable) {
        // update
        this.factureitemannexe5Service.updateFactureItemAnnexe5(this.factureItemAnnexe5Form.controls["id"].value, this.factureItemAnnexe5Form.value)
        .subscribe({
              next: (factureItemAnnexe5: Factureitemannexe5) => {
                console.log("Factureitemannexe5 was udpated.");
                console.log(factureItemAnnexe5);
                console.log("Factureitemannexe5 was udpated. end");
                this.dialogRef.close(factureItemAnnexe5);
              },
              error: (err: any) => {
                console.log(err);
              }
            });
      } else {
        // add
        // console.log("creating inventoryitem");
        // console.log(this.factureItemAnnexe5Form.value);
        this.factureitemannexe5Service.createFactureItemAnnexe5(this.factureItemAnnexe5Form.value)
          .subscribe({
            next: (factureItemAnnexe5: Factureitemannexe5) => {
              console.log("New Factureitemannexe5 was added.");
              console.log(factureItemAnnexe5);
              console.log("New Factureitemannexe5 was added. end");
              this.dialogRef.close(factureItemAnnexe5);
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

  getFactureItemAllPossibleAnnexe5s(factureId: string): void {
    this.projectService.getProjectAnnexe5s('1').subscribe({
        next: (allPossibleAnnexe5sOfFactureItem: Annexe5[]) => {
          this.allPossibleAnnexe5sOfFactureItem = allPossibleAnnexe5sOfFactureItem;
        },
        error: (err: any) => {
          console.log("Error when fetching Annexe5s of MaterialCard");
          console.log(err);
        }
      });
    // this.factureitemService.getFactureItemAllPossibleAnnexe5s(factureId).subscribe({
    //   next: (allPossibleAnnexe5sOfFactureItem: Annexe5[]) => {
    //     this.allPossibleAnnexe5sOfFactureItem = allPossibleAnnexe5sOfFactureItem;
    //   },
    //   error: (err: any) => {
    //     console.log("Error when fetching Annexe5s of MaterialCard");
    //     console.log(err);
    //   }
    // });
  }

  getFactureItemFactureItemAnnexe5s(factureItemId: string): void {
    this.factureitemService.getFactureItemFactureItemAnnexe5s(factureItemId).subscribe({
      next: (factureItemAnnexe5s: Factureitemannexe5[]) => {
        this.factureItemAnnexe5s = factureItemAnnexe5s;

        console.log("two annexe5s");
        console.log(this.allCurrentFactureItemAnnexe5s);
        console.log(this.factureItemAnnexe5s);
      },
      error: (err: any) => {
        console.log("Error when fetching Annexe5s of InventoryItem");
        console.log(err);
      }
    });
  }

  // removeDuplicates(allCurrentFactureItemAnnexe5s: Factureitemannexe5[], factureItemAnnexe5: Factureitemannexe5): Factureitemannexe5[] {
  //   const ids = new Set(factureItemAnnexe5s.map(item => item.id));
  //   return allCurrentFactureItemAnnexe5s.filter(item => !ids.has(item.id));
  // }
  
  // shuffleAnnexe5s(): void {
  //   // console.log("before");
  //   // console.log(this.allCurrentFactureItemAnnexe5s);
  //   this.allCurrentFactureItemAnnexe5s = this.removeDuplicates(this.allCurrentFactureItemAnnexe5s, this.factureItemAnnexe5s);
  //   // console.log("after");
  //   // console.log(this.allCurrentFactureItemAnnexe5s);
  // }

}
