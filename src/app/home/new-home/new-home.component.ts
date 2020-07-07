import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HomeFormComponent } from '../home-form/home-form.component';
import { HomeService } from 'src/app/core/services/home.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.scss']
})

export class NewHomeComponent implements OnInit {
@ViewChild('modelForm') modelForm:HomeFormComponent;
  constructor(
    private homeService: HomeService,
    private toast: MatSnackBar,
    private dialogRef: MatDialogRef<NewHomeComponent>, ) { }

  ngOnInit(): void {
  }
  utworzModel(){
    console.log(this.modelForm);
    this.homeService.addHome(this.modelForm.form.value)
    .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));
    }
    private onCreatingSuccess() {
      this.dialogRef.close();
      this.toast.open('Kategoria została dodana!', '', { panelClass: 'toast-success'});
    }
  
    private onCreatingFailure(error) {
      this.toast.open(error.message, '', { panelClass: 'toast-error'});
    }
}