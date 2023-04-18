import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatDashboardComponent } from './achat-dashboard/achat-dashboard.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrderListComponent } from './components/order-list/order-list.component';

const routes: Routes = [
  {path: '', component: AchatDashboardComponent,
    children: [
          // Order
          // {path:'orders/edit/:id', component: MaterialEditComponent},
          // {path:'orders/create', component: MaterialCreateComponent},
          {path:'orders/:id', component: OrderDetailComponent},
          {path:'orders', component: OrderListComponent},

        ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchatRoutingModule { }
