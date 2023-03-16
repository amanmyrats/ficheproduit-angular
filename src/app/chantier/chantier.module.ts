import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChantierRoutingModule } from './chantier-routing.module';
import { ChantierDashboardComponent } from './chantier-dashboard/chantier-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
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
  ],
  imports: [
    CommonModule,
    ChantierRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [
    MaterialFormComponent,
  ]
})
export class ChantierModule { }
