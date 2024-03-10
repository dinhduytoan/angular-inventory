import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent, DashboardComponent, LayoutComponent } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { CreateComponent } from './components/users/create/create.component';
import { UpdateComponent } from './components/users/update/update.component';

export const tokenGetter = () => {
  return localStorage.getItem('access_token');
};
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    LayoutComponent,
    UsersComponent,
    RolesComponent,
    SupplierComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }
