import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChantierDashboardComponent } from './chantier-dashboard/chantier-dashboard.component';
import { MaterialCreateComponent } from './components/material-create/material-create.component';
import { MaterialEditComponent } from './components/material-edit/material-edit.component';
import { MaterialListComponent } from './components/material-list/material-list.component';
import { MaterialComponent } from './components/material/material.component';

const routes: Routes = [
  {path: '', component: ChantierDashboardComponent,
    children: [
      {path:'materials/edit/:id', component: MaterialEditComponent},
      {path:'materials/create', component: MaterialCreateComponent},
      {path:'materials/:id', component: MaterialComponent},
      {path:'materials', component: MaterialListComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChantierRoutingModule { }
