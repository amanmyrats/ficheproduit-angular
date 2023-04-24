import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QsDashboardComponent } from './qs-dashboard/qs-dashboard.component';
import { Annexe5ListComponent } from './components/annexe5-list/annexe5-list.component';
import { Annexe5DetailComponent } from './components/annexe5-detail/annexe5-detail.component';
import { YgtableDetailComponent } from './components/ygtable-detail/ygtable-detail.component';

const routes: Routes = [
  {path: '', component: QsDashboardComponent,
    children: [
          // Annexe5s
          {path:'annexe5s', component: Annexe5ListComponent},
          {path:'projects/:id/annexe5items', component: Annexe5DetailComponent},
          {path:'projects/:id/ygtableitems', component: YgtableDetailComponent},

        ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QsRoutingModule { }
