import { Component, OnInit } from '@angular/core';
import { ModeleService } from '../core/services/modele.service';
import { Observable } from 'rxjs';
import { Modele } from '../models/modele.model';
import { MatDialog } from '@angular/material/dialog';
import { NewModeleComponent } from './new-modele/new-modele.component';

@Component({
  selector: 'app-modele',
  templateUrl: './modele.component.html',
  styleUrls: ['./modele.component.scss']
})
export class ModeleComponent implements OnInit {
modeles$: Observable<Modele[]> =this.modeleService.getModele();

  constructor(private modeleService: ModeleService, private dialog: MatDialog ) { }
  
  ngOnInit(){
  }
  openNewModelModal(){
    this.dialog.open(NewModeleComponent); 
  }
}