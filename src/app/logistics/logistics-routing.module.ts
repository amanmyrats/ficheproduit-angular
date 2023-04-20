import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogisticsDashboardComponent } from './logistics-dashboard/logistics-dashboard.component';
import { FactureDetailComponent } from './components/facture-detail/facture-detail.component';
import { FactureListComponent } from './components/facture-list/facture-list.component';

const routes: Routes = [
  {path: '', component: LogisticsDashboardComponent,
    children: [
          // Facture
          // {path:'factures/edit/:id', component: MaterialEditComponent},
          // {path:'factures/create', component: MaterialCreateComponent},
          {path:'factures/:id', component: FactureDetailComponent},
          {path:'factures', component: FactureListComponent},

        ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogisticsRoutingModule { }
