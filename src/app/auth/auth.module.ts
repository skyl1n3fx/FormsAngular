import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuAuthComponent } from './components/menu-auth/menu-auth.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: 
  [
    LoginComponent,
     RegistroComponent,
     HomeComponent,
     MenuAuthComponent
    ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})

export class AuthModule { }
