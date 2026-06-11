import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

import { RouterLink } from '@angular/router';
import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/angular/standalone";
import { FirebaseDatePipe } from '../shared/fbDate.pipe';
import { BookListComponent } from './book-list/book-list.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  imports: [ FirebaseDatePipe, RouterLink,  BookListComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon],
  standalone: true,
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {
    addIcons({ add, })
  }


  ngOnInit(): void {
  }

}

