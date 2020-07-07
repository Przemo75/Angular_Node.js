import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})
export class HomeFormComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
this.buildForm();
  }

  private buildForm(){
    this.form=this.formBuilder.group({
      producent:['',{validators:[Validators.required]}],
      obraz:'',
      opis:'',
      link:'',
    });
  }
}