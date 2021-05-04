import { Component } from '@angular/core';
import firebase from "firebase/app";
import { environment } from "src/environments/environment";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    const firebaseApp = firebase.initializeApp(environment.firebase)
  }
}
