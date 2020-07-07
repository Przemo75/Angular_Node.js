import { Component, OnInit } from '@angular/core';
import { Modele2Service } from '../core/services/modele2.service';
import { Observable } from 'rxjs';
import { Modele2 } from '../models/modele2.model';
import { MatDialog } from '@angular/material/dialog';
import { NewModele2Component } from './new-modele2/new-modele2.component';

@Component({
  selector: 'app-modele2',
  templateUrl: './modele2.component.html',
  styleUrls: ['./modele2.component.scss']
})
export class Modele2Component implements OnInit {
modele2s$: Observable<Modele2[]> =this.modele2Service.getModele2();

  constructor(private modele2Service: Modele2Service, private dialog: MatDialog ) { }
  
  ngOnInit(){
  }
  openNewModelModal(){
    this.dialog.open(NewModele2Component); 
  }
}