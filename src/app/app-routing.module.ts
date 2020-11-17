import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
