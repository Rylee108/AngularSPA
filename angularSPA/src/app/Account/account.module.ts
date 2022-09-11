import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from '../Account/login.component';
import { RegisterComponent } from '../Account/register.component';
import { CreateMovieComponent } from '../Admin/create-movie.component';
import { CreateCastComponent } from '../Admin/create-cast.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CreateMovieComponent,
    CreateCastComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
