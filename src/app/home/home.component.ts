import { Component, OnInit } from '@angular/core';
import { HomeService } from '../core/services/home.service';
import { Observable } from 'rxjs';
import { Home } from '../models/home.model';
import { MatDialog } from '@angular/material/dialog';
import { NewHomeComponent } from './new-home/new-home.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
homes$: Observable<Home[]> =this.homeService.getHome();

  constructor(private homeService: HomeService, private dialog: MatDialog ) { }
  
  ngOnInit(){
  }
  openNewModelModal(){
    this.dialog.open(NewHomeComponent); 
  }
}