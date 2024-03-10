import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent, DashboardComponent, LayoutComponent, RolesComponent, UsersComponent } from './components';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
      }, 
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [authGuard]
      },
      {
        path: 'roles',
        component: RolesComponent,
        canActivate: [authGuard]
      }
    ]
  },
  { path: '**', redirectTo: '/auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
