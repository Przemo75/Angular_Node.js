import { Component,  Input } from '@angular/core';
import { Modele } from 'src/app/models/modele.model';

@Component({
  selector: 'app-modele-karta',
  templateUrl: './modele-karta.component.html',
  styleUrls: ['./modele-karta.component.scss']
})
export class ModeleKartaComponent {
@Input() modelik: Modele;

}