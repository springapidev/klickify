import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers:[AngularFireAuth]
})
export class LogoutComponent  {

  constructor(private afAuth : AngularFireAuth) { }


}
