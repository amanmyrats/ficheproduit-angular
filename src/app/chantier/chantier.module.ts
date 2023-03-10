import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChantierRoutingModule } from './chantier-routing.module';
import { ChantierDashboardComponent } from './chantier-dashboard/chantier-dashboard.component';
import { MaterialComponent } from './components/material/material.component';
import { MaterialFormComponent } from './components/material-form/material-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MaterialListComponent } from './components/material-list/material-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MaterialCreateComponent } from './components/material-create/material-create.component';
import { MaterialEditComponent } from './components/material-edit/material-edit.component';


@NgModule({
  declarations: [
    ChantierDashboardComponent,
    MaterialComponent,
    MaterialFormComponent,
    MaterialListComponent,
    MaterialCreateComponent,
    MaterialEditComponent,
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
  ],
  exports: [
    MaterialFormComponent,
  ]
})
export class ChantierModule { }
