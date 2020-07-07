import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modele-form',
  templateUrl: './modele-form.component.html',
  styleUrls: ['./modele-form.component.scss']
})
export class ModeleFormComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
this.buildForm();
  }

  private buildForm(){
    this.form=this.formBuilder.group({
      nazwa:['',{validators:[Validators.required]}],
      seria:['',{validators:[Validators.required]}],
      producent:['',{validators:[Validators.required]}],
      nr_katalogowy:['',{validators:[Validators.required]}],
      skala:'',
      cena:'',
      wymiary_modelu:'',
      ilosc_klockow:['',{validators:[Validators.required]}],
      obraz:'',
      opis:'',
    });
  }
}