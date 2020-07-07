import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { AngularFireModule } from '@angular/fire';
import { Modele2 } from 'src/app/models/modele2.model';

@Injectable({
  providedIn: 'root'
})
export class Modele2Service {

  private API_URL = '/modele2';


  constructor( private db: AngularFireDatabase) { }
  getModele2(): Observable<Modele2[]> {
    return this.db.list<Modele2>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(modele2 => this.assignKey(modele2))));
  }
  private assignKey(modele2) {
    return { ...modele2.payload.val(), key: modele2.key }
  }
  addModele2(model: Modele2) {
    return this.db.list<Modele2>(this.API_URL).push(model);
   }

}

