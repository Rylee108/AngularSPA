import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TopPurchasesComponent } from '../Admin/top-purchases.component';
import { CreateMovieComponent } from '../Admin/create-movie.component';
import { CreateCastComponent } from '../Admin/create-cast.component';


@NgModule({
  declarations: [
    TopPurchasesComponent,
    CreateMovieComponent,
    CreateCastComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
