import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modele2Component } from './modele2.component';
import { Modele2KartaComponent } from './modele2-karta/modele2-karta.component';
import { NewModele2Component } from './new-modele2/new-modele2.component';
import { MaterialModule } from '../material/material.module';
import { Modele2FormComponent } from './modele2-form/modele2-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  entryComponents: [NewModele2Component],
  declarations: [Modele2Component, Modele2KartaComponent, NewModele2Component, Modele2FormComponent],
  exports: [Modele2Component, Modele2KartaComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Modele2Module { }