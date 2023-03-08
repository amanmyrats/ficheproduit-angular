import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChantierDashboardComponent } from './chantier-dashboard/chantier-dashboard.component';
import { MaterialFormComponent } from './components/material-form/material-form.component';
import { MaterialListComponent } from './components/material-list/material-list.component';
import { MaterialComponent } from './components/material/material.component';

const routes: Routes = [
  {path: '', component: ChantierDashboardComponent,
    children: [
      {path:'materials/create', component: MaterialFormComponent},
      {path:'materials/list', component: MaterialListComponent},
      {path:'materials/:id', component: MaterialComponent},
      {path:'materials', component: MaterialComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChantierRoutingModule { }
