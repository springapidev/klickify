import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../node_modules/angularfire2/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userService: AngularFireDatabase) { }
  save(user: firebase.User) {
    this.userService.object('/users/' + user.uid).update(
      {
        name: user.displayName,
        email: user.email
      }
    );
  }
}
