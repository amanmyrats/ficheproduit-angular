import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { InventoryItem } from 'src/app/chantier/models/inventory-item.model';
import { InventoryitemService } from 'src/app/chantier/services/inventoryitem.service';
import { MaterialcardService } from 'src/app/chantier/services/materialcard.service';
import { Room } from 'src/app/shared/models/room.model';
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
  roomForm: FormGroup;
  unitForm: FormGroup;
  units: Unit[];
  rooms: Room[];
  initialRoom: any;
  initialUnit: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private materialcardService: MaterialcardService, 
    private projectService: ProjectService, 
    private inventoryItemService: InventoryitemService,
    private unitService: UnitService,
    @Optional() private dialogRef: MatDialogRef<MaterialcardroomFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.inventoryItemForm = this.fb.group({
      id: '',
      room: '',
      quantity: '',
      unit: '',
    });

    this.roomForm = this.fb.group({
      id: '',
      code: '',
      nameEn:'',
    });

    this.unitForm = this.fb.group({
      id: '',
      code: '',
    });

    // Get Units
    this.getUnits();

    // Get Materials
    this.getRooms();
  }

  ngOnInit(): void {

    if (this.data.materialcardRoomFormData) {
      console.log("material patch value from table");
      // console.log(this.data.materialcardRoomFormData);
      // console.log(this.data.materialFormData);
      // console.log(this.data.unitFormData);
      this.inventoryItemForm.patchValue(this.data.materialcardRoomFormData);
      this.roomForm.patchValue(this.data.materialcardRoomFormData.room);
      this.unitForm.patchValue(this.data.materialcardRoomFormData.unit);
      this.initialRoom = this.data.materialcardRoomFormData.room;
      this.initialUnit = this.data.materialcardRoomFormData.unit;
    }

  }

  onSubmit() {
    console.log(this.inventoryItemForm.value);
    this.inventoryItemForm.controls['room']
      .setValue(this.roomForm.value);
    this.inventoryItemForm.controls['unit']
      .setValue(this.unitForm.value);
    console.log(this.inventoryItemForm.value);

    if (this.inventoryItemForm.valid) {
      if (this.data.materialcardRoomFormData) {
        // update
        this.inventoryItemService.updateInventoryItem(this.data.materialcardRoomFormData.controls['id'].value, this.inventoryItemForm.value)
          .subscribe({
            next: (inventoryItem: InventoryItem) => {
              console.log("InventoryItem was udpated.");
              console.log(inventoryItem);
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.log(err);
            }
          })
      } else {
        // add
        console.log("MaterialcardId from data " + this.data.materialcardId);

        this.materialcardService.createInventoryItemByMaterialcard(this.data.materialcardId, this.roomForm.controls['id'].value, this.data.projectId, this.inventoryItemForm.value)
          .subscribe({
            next: (inventoryItem: InventoryItem) => {
              console.log("New InventoryItem was added.");
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
