import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeKartaComponent } from './home-karta/home-karta.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { MaterialModule } from '../material/material.module';
import { HomeFormComponent } from './home-form/home-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  entryComponents: [NewHomeComponent],
  declarations: [HomeComponent, HomeKartaComponent, NewHomeComponent, HomeFormComponent],
  exports: [HomeComponent, HomeKartaComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }