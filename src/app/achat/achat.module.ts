import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchatDashboardComponent } from './achat-dashboard/achat-dashboard.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { AchatRoutingModule } from './achat-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OrderitemTableComponent } from './components/orderitem-table/orderitem-table.component';
import { MatTableModule } from '@angular/material/table';
import { OrderitemmaterialcardFormComponent } from './components/orderitemmaterialcard-form/orderitemmaterialcard-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderitemmaterialcardmaterialFormComponent } from './components/orderitemmaterialcardmaterial-form/orderitemmaterialcardmaterial-form.component';



@NgModule({
  declarations: [
    AchatDashboardComponent,
    OrderListComponent,
    OrderDetailComponent,
    OrderitemTableComponent,
    OrderitemmaterialcardFormComponent,
    OrderitemmaterialcardmaterialFormComponent,
  ],
  imports: [
    CommonModule, 
    AchatRoutingModule,
    MatCardModule, 
    MatIconModule, 
    MatButtonModule, 
    MatTableModule, 
    MatSelectModule, 
    MatOptionModule, 
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AchatModule { }
