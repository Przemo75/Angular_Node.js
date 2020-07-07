import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeleComponent } from './modele.component';
import { ModeleKartaComponent } from './modele-karta/modele-karta.component';
import { NewModeleComponent } from './new-modele/new-modele.component';
import { MaterialModule } from '../material/material.module';
import { ModeleFormComponent } from './modele-form/modele-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  entryComponents: [NewModeleComponent],
  declarations: [ModeleComponent, ModeleKartaComponent, NewModeleComponent, ModeleFormComponent],
  exports: [ModeleComponent, ModeleKartaComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModeleModule { }
