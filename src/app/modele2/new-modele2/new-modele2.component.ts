import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Modele2FormComponent } from '../modele2-form/modele2-form.component';
import { Modele2Service } from 'src/app/core/services/modele2.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-modele2',
  templateUrl: './new-modele2.component.html',
  styleUrls: ['./new-modele2.component.scss']
})

export class NewModele2Component implements OnInit {
@ViewChild('modelForm') modelForm:Modele2FormComponent;
  constructor(
    private modele2Service: Modele2Service,
    private toast: MatSnackBar,
    private dialogRef: MatDialogRef<NewModele2Component>, ) { }

  ngOnInit(): void {
  }
  utworzModel(){
    console.log(this.modelForm);
    this.modele2Service.addModele2(this.modelForm.form.value)
    .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));
    }
    private onCreatingSuccess() {
      this.dialogRef.close();
      this.toast.open('Model zostały dodany!', '', { panelClass: 'toast-success'});
    }
  
    private onCreatingFailure(error) {
      this.toast.open(error.message, '', { panelClass: 'toast-error'});
    }
}