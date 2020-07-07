import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModeleFormComponent } from '../modele-form/modele-form.component';
import { ModeleService } from 'src/app/core/services/modele.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-modele',
  templateUrl: './new-modele.component.html',
  styleUrls: ['./new-modele.component.scss']
})
export class NewModeleComponent implements OnInit {
@ViewChild('modelForm') modelForm:ModeleFormComponent;
  constructor(
    private modeleService: ModeleService,
    private toast: MatSnackBar,
    private dialogRef: MatDialogRef<NewModeleComponent>, ) { }

  ngOnInit(): void {
  }
  utworzModel(){
    console.log(this.modelForm);
    this.modeleService.addModele(this.modelForm.form.value)
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
