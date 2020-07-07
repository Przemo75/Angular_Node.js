import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modele2-form',
  templateUrl: './modele2-form.component.html',
  styleUrls: ['./modele2-form.component.scss']
})
export class Modele2FormComponent implements OnInit {
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
      skala:'',
      cena:'',
      obraz:'',
      opis:'',
    });
  }
}