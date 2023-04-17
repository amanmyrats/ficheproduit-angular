import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inventory } from 'src/app/chantier/models/inventory.model';
import { InventoryService } from 'src/app/chantier/services/inventory.service';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.scss']
})
export class InventoryDetailComponent implements OnInit {
  inventory: Inventory;
  inventoryId: string;
  @Input() editMode: boolean;

  constructor (
    private inventoryService: InventoryService,
    private route: ActivatedRoute, 
    private el: ElementRef, 
    private renderer: Renderer2, 
  ){
  }
  
  ngOnInit(): void {
    if (this.editMode) {
      const matcard = this.el.nativeElement.querySelector('mat-card');
      this.renderer.setStyle(matcard, 'width', '90%');
    }
    
    this.inventoryId = this.route.snapshot.params['id'];
    this.getInventoryRoom(this.inventoryId);

  }

  getInventoryRoom(roomId: string) {
    this.inventoryService.getInventoryRoom(roomId)
      .subscribe((inventory: Inventory) => {
        this.inventory = inventory;
        console.log("Retreived Inventory");
        console.log(inventory);
      })
  }
}