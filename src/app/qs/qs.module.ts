import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QsRoutingModule } from './qs-routing.module';
import { QsDashboardComponent } from './qs-dashboard/qs-dashboard.component';
import { Annexe5ListComponent } from './components/annexe5-list/annexe5-list.component';
import { Annexe5DetailComponent } from './components/annexe5-detail/annexe5-detail.component';
import { YgtableDetailComponent } from './components/ygtable-detail/ygtable-detail.component';
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
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    QsDashboardComponent,
    Annexe5ListComponent,
    Annexe5DetailComponent,
    YgtableDetailComponent
  ],
  imports: [
    CommonModule,
    QsRoutingModule,
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
    MatSortModule, 
    MatPaginatorModule, 
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class QsModule { }
