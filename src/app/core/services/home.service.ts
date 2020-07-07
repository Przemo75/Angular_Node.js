import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { AngularFireModule } from '@angular/fire';
import { Home } from 'src/app/models/home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private API_URL = '/home';


  constructor( private db: AngularFireDatabase) { }
  getHome(): Observable<Home[]> {
    return this.db.list<Home>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(home => this.assignKey(home))));
  }
  private assignKey(home) {
    return { ...home.payload.val(), key: home.key }
  }
  addHome(model: Home) {
    return this.db.list<Home>(this.API_URL).push(model);
   }

}