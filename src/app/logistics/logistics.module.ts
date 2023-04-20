import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogisticsRoutingModule } from './logistics-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { LogisticsDashboardComponent } from './logistics-dashboard/logistics-dashboard.component';
import { FactureDetailComponent } from './components/facture-detail/facture-detail.component';
import { FactureListComponent } from './components/facture-list/facture-list.component';
import { FactureitemTableComponent } from './components/factureitem-table/factureitem-table.component';
import { FactureitemorderitemFormComponent } from './components/factureitemorderitem-form/factureitemorderitem-form.component';
import { Factureitemannexe5FormComponent } from './components/factureitemannexe5-form/factureitemannexe5-form.component';
import { Factureitemannexe5ListComponent } from './components/factureitemannexe5-list/factureitemannexe5-list.component';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    LogisticsDashboardComponent,
    FactureDetailComponent,
    FactureListComponent,
    FactureitemTableComponent,
    FactureitemorderitemFormComponent,
    Factureitemannexe5FormComponent,
    Factureitemannexe5ListComponent
  ],
  imports: [
    CommonModule,
    LogisticsRoutingModule,
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
    MatChipsModule, 
  ]
})
export class LogisticsModule { }
