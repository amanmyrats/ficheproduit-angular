import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chantier', 
    loadChildren: () => import('./chantier/chantier.module').then(m => m.ChantierModule) 
  },
  { path: 'achat', 
    loadChildren: () => import('./achat/achat.module').then(m => m.AchatModule) 
  },
  { path: 'logistics', 
    loadChildren: () => import('./logistics/logistics.module').then(m => m.LogisticsModule) 
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
