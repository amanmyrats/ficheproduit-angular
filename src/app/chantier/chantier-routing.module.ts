import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChantierDashboardComponent } from './chantier-dashboard/chantier-dashboard.component';
import { InventoryDetailComponent } from './components/inventory/inventory-detail/inventory-detail.component';
import { InventoryListComponent } from './components/inventory/inventory-list/inventory-list.component';
import { MaterialCreateComponent } from './components/material/material-create/material-create.component';
import { MaterialDetailComponent } from './components/material/material-detail/material-detail.component';
import { MaterialEditComponent } from './components/material/material-edit/material-edit.component';
import { MaterialListComponent } from './components/material/material-list/material-list.component';
import { MaterialComponent } from './components/material/material.component';
import { MaterialcardCreateComponent } from './components/materialcard/materialcard-create/materialcard-create.component';
import { MaterialcardDetailComponent } from './components/materialcard/materialcard-detail/materialcard-detail.component';
import { MaterialcardEditComponent } from './components/materialcard/materialcard-edit/materialcard-edit.component';
import { MaterialcardListComponent } from './components/materialcard/materialcard-list/materialcard-list.component';
import { MaterialcardComponent } from './components/materialcard/materialcard.component';
import { InventoryEditComponent } from './components/inventory/inventory-edit/inventory-edit.component';

const routes: Routes = [
  {path: '', component: ChantierDashboardComponent,
    children: [
          // Material
          {path:'materials/edit/:id', component: MaterialEditComponent},
          {path:'materials/create', component: MaterialCreateComponent},
          {path:'materials/:id', component: MaterialDetailComponent},
          {path:'materials', component: MaterialListComponent},

          // MaterialCard
          {path:'materialcards/edit/:id', component: MaterialcardEditComponent},
          {path:'materialcards/create', component: MaterialcardCreateComponent},
          {path:'materialcards/:id', component: MaterialcardDetailComponent},
          {path:'materialcards', component: MaterialcardListComponent},

          // Inventory
          {path:'inventories/edit/:id', component: InventoryEditComponent},
          // {path:'inventories/create', component: MaterialcardCreateComponent},
          {path:'inventories/:id', component: InventoryDetailComponent},
          {path:'inventories', component: InventoryListComponent},
        ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChantierRoutingModule { }
