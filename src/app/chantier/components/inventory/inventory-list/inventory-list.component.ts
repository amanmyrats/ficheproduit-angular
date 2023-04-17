import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/chantier/models/inventory.model';
import { Room } from 'src/app/chantier/models/room.model';
import { InventoryService } from 'src/app/chantier/services/inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent  implements OnInit {
  inventories: Inventory [];

  constructor (
    private inventoryService: InventoryService,
  ){}

  ngOnInit(): void {
      this.getInventories();
  }

  getInventories(): void {
    this.inventoryService.getInventoryRooms()
      .subscribe((inventories: Room[]) => {
        this.inventories = inventories;
      })
  }

}
