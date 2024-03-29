import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inventoryitem } from 'src/app/chantier/models/inventoryitem.model';
import { Room } from 'src/app/chantier/models/room.model';
import { InventoryitemService } from 'src/app/chantier/services/inventoryitem.service';
import { Unit } from 'src/app/shared/models/unit.model';
import { ProjectService } from 'src/app/shared/services/project.service';
import { UnitService } from 'src/app/shared/services/unit.service';

@Component({
  selector: 'app-materialcardroom-form',
  templateUrl: './materialcardroom-form.component.html',
  styleUrls: ['./materialcardroom-form.component.scss']
})
export class MaterialcardroomFormComponent {
  
  inventoryItemForm: FormGroup;
  materialCardForm: FormGroup;
  roomForm: FormGroup;
  unitForm: FormGroup;
  units: Unit[];
  rooms: Room[];

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private inventoryItemService: InventoryitemService,
    private unitService: UnitService,
    @Optional() private dialogRef: MatDialogRef<MaterialcardroomFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.inventoryItemForm = this.fb.group({
      id: '',
      materialcard: '',
      room: '',
      quantity: '',
      unit: '',
    });

    this.materialCardForm = this.fb.group({id: ''});

    this.roomForm = this.fb.group({id: ''});

    this.unitForm = this.fb.group({id: ''});

    // Get Units
    this.getUnits();

    // Get Materials
    this.getRooms();
  }

  ngOnInit(): void {

    if (this.data.inventoryItemDataFromTable) {
      this.inventoryItemForm.patchValue(this.data.inventoryItemDataFromTable);
      this.materialCardForm.patchValue(this.data.inventoryItemDataFromTable.materialcard);
      this.roomForm.patchValue(this.data.inventoryItemDataFromTable.room);
      this.unitForm.patchValue(this.data.inventoryItemDataFromTable.unit);
    }
    
    // Initial values
    if (this.data.materialcard) {
      this.materialCardForm.patchValue(this.data.materialcard);
    }
    
    if (this.data.room) {
      this.roomForm.patchValue(this.data.room);
    }

  }

  onSubmit() {
    this.inventoryItemForm.get('materialcard')?.setValue(this.materialCardForm.value);
    this.inventoryItemForm.get('room')?.setValue(this.roomForm.value);
    this.inventoryItemForm.get('unit')?.setValue(this.unitForm.value);
    console.log("submitting");
    console.log(this.inventoryItemForm.value);
    console.log("submitting end");
    if (this.inventoryItemForm.valid) {
      if (this.data.inventoryItemDataFromTable) {
        // update
        this.inventoryItemService.updateInventoryItem(this.inventoryItemForm.controls["id"].value, this.inventoryItemForm.value)
        .subscribe({
              next: (inventoryItem: Inventoryitem) => {
                console.log("Inventoryitem was udpated.");
                console.log(inventoryItem);
                console.log("Inventoryitem was udpated. end");
                this.dialogRef.close(true);
              },
              error: (err: any) => {
                console.log(err);
              }
            });
      } else {
        // add
        console.log("creating inventoryitem");
        console.log(this.inventoryItemForm.value);
        this.inventoryItemService.createInventoryItem(this.inventoryItemForm.value)
          .subscribe({
            next: (inventoryItem: Inventoryitem) => {
              console.log("New Inventoryitem was added.");
              console.log(inventoryItem);
              console.log("New Inventoryitem was added. end");
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

  getRooms(): void {
    this.projectService.getProjectRooms(this.data.projectId).subscribe({
      next: (rooms: Room[]) => {
        this.rooms = rooms;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

}
