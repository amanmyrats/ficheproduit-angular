import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChantierRoutingModule } from './chantier-routing.module';
import { ChantierDashboardComponent } from './chantier-dashboard/chantier-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MaterialComponent } from './components/material/material.component';
import { MaterialListComponent } from './components/material/material-list/material-list.component';
import { MaterialFormComponent } from './components/material/material-form/material-form.component';
import { MaterialCreateComponent } from './components/material/material-create/material-create.component';
import { MaterialEditComponent } from './components/material/material-edit/material-edit.component';
import { MaterialDetailComponent } from './components/material/material-detail/material-detail.component';
import { MaterialcardFormComponent } from './components/materialcard/materialcard-form/materialcard-form.component';
import { MaterialcardCreateComponent } from './components/materialcard/materialcard-create/materialcard-create.component';
import { MaterialcardEditComponent } from './components/materialcard/materialcard-edit/materialcard-edit.component';
import { MaterialcardListComponent } from './components/materialcard/materialcard-list/materialcard-list.component';
import { MaterialcardComponent } from './components/materialcard/materialcard.component';
import { MaterialcardDetailComponent } from './components/materialcard/materialcard-detail/materialcard-detail.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MaterialcardmaterialTableComponent } from './components/materialcard/materialcardmaterial-table/materialcardmaterial-table.component';
import { MaterialcardmaterialFormComponent } from './components/materialcard/materialcardmaterial-form/materialcardmaterial-form.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MaterialcardroomTableComponent } from './components/materialcard/materialcardroom-table/materialcardroom-table.component';
import { MaterialcardroomFormComponent } from './components/materialcard/materialcardroom-form/materialcardroom-form.component';
import { Inventoryitemannexe5TableComponent } from './components/shared/inventoryitemannexe5-table/inventoryitemannexe5-table.component';
import { Inventoryitemannexe5FormComponent } from './components/shared/inventoryitemannexe5-form/inventoryitemannexe5-form.component';
import { Materialcardmaterialannexe5TableComponent } from './components/materialcard/materialcardmaterialannexe5-table/materialcardmaterialannexe5-table.component';
import { Materialcardmaterialannexe5FormComponent } from './components/materialcard/materialcardmaterialannexe5-form/materialcardmaterialannexe5-form.component';
import { InventoryListComponent } from './components/inventory/inventory-list/inventory-list.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventoryDetailComponent } from './components/inventory/inventory-detail/inventory-detail.component';
import { InventoryitemFormComponent } from './components/inventory/inventoryitem-form/inventoryitem-form.component';
import { InventoryitemTableComponent } from './components/inventory/inventoryitem-table/inventoryitem-table.component';
import { Inventoryformat1TableComponent } from './components/inventory/inventoryformat1-table/inventoryformat1-table.component';
import { InventoryEditComponent } from './components/inventory/inventory-edit/inventory-edit.component';


@NgModule({
  declarations: [
    ChantierDashboardComponent,
    MaterialComponent,
    MaterialFormComponent,
    MaterialListComponent,
    MaterialCreateComponent,
    MaterialEditComponent,
    MaterialcardFormComponent,
    MaterialcardCreateComponent,
    MaterialcardEditComponent,
    MaterialcardListComponent,
    MaterialcardComponent,
    MaterialcardDetailComponent,
    MaterialDetailComponent,
    MaterialcardmaterialTableComponent,
    MaterialcardmaterialFormComponent,
    MaterialcardroomTableComponent,
    MaterialcardroomFormComponent,
    Inventoryitemannexe5TableComponent,
    Inventoryitemannexe5FormComponent,
    Materialcardmaterialannexe5TableComponent,
    Materialcardmaterialannexe5FormComponent,
    InventoryListComponent,
    InventoryComponent,
    InventoryDetailComponent,
    InventoryitemFormComponent,
    InventoryitemTableComponent,
    Inventoryformat1TableComponent,
    InventoryEditComponent,
  ],
  imports: [
    CommonModule,
    ChantierRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatChipsModule, 
  ],
  exports: [
    MaterialFormComponent,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ChantierModule { }
