import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/pages/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthenticationModule { }
