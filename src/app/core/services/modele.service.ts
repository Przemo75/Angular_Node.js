import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { AngularFireModule } from '@angular/fire';
import { Modele } from 'src/app/models/modele.model';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {

  private API_URL = '/modele';


  constructor( private db: AngularFireDatabase) { }
  getModele(): Observable<Modele[]> {
    return this.db.list<Modele>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(modele => this.assignKey(modele))));
  }
  private assignKey(modele) {
    return { ...modele.payload.val(), key: modele.key }
  }
  addModele(model: Modele) {
    return this.db.list<Modele>(this.API_URL).push(model);
   }

}

