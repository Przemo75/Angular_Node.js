import { Component,  Input } from '@angular/core';
import { Home } from 'src/app/models/home.model';

@Component({
  selector: 'app-home-karta',
  templateUrl: './home-karta.component.html',
  styleUrls: ['./home-karta.component.scss']
})
export class HomeKartaComponent {
@Input() modelik: Home;

}