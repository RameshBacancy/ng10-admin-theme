import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../../guard/admin.guard';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CoreModule } from 'src/app/core/core.module';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component : AdminDashboardComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
