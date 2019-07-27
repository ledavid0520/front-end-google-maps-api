import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private dataBase: AngularFirestore
  ) { }

  private collection = 'usuarios';

  getUsuarios(): Observable<firebase.firestore.QuerySnapshot> {
    return this.dataBase.collection<Usuario>(this.collection, ref => ref.orderBy('username', 'desc')).get();
  }
  postUsuario(usuario: Usuario): Promise<DocumentReference> {
    return this.dataBase.collection(this.collection).add(usuario);
  }

  getUsuario(username, pw): Observable<firebase.firestore.QuerySnapshot> {
    return this.dataBase.collection<Usuario>(this.collection,
      ref => ref
        .where('username', '==', username)
        .where('password', '==', pw))
      .get();
  }

}
