import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchatDashboardComponent } from './achat-dashboard/achat-dashboard.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { AchatRoutingModule } from './achat-routing.module';



@NgModule({
  declarations: [
    AchatDashboardComponent,
    OrderListComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule, 
    AchatRoutingModule,
  ]
})
export class AchatModule { }
