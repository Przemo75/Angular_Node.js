import { Component,  Input } from '@angular/core';
import { Modele2 } from 'src/app/models/modele2.model';

@Component({
  selector: 'app-modele2-karta',
  templateUrl: './modele2-karta.component.html',
  styleUrls: ['./modele2-karta.component.scss']
})
export class Modele2KartaComponent {
@Input() modelik: Modele2;

}