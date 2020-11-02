import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/pages/admin/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  // { path: '', redirectTo: 'auth/login' },
  // { path: 'auth/login', component: LoginComponent },
  { 
    path: 'register', 
    // component: RegisterationComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'forgetpassword',
    component:ForgetPasswordComponent
  },
  { 
    path: 'supplierRegistration', 
    // component: SupplierRegisterComponent
  },
  {
    path: '',
    redirectTo: '/auth/supplierRegistration',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/auth/supplierRegistration',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    LoginComponent, 
    // SupplierRegisterComponent, 
    // RegisterationComponent, 
    ForgetPasswordComponent,
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
