import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/angular/standalone";
import { FirebaseDatePipe } from '../shared/fbDate.pipe';
import { BookListComponent } from './book-list/book-list.component';
import { LoadingBookComponent } from './loading-book/loading-book.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  imports: [ FirebaseDatePipe, RouterLink, LoadingBookComponent, BookListComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon],
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

