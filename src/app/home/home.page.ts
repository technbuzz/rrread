import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

import { AsyncPipe, DatePipe } from '@angular/common';
import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonList, IonLoading, IonTitle, IonToolbar } from "@ionic/angular/standalone";
import { FirebaseDatePipe } from '../shared/fbDate.pipe';
import { BookListComponent } from './book-list/book-list.component';
import { LoadingBookComponent } from './loading-book/loading-book.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  imports: [ FirebaseDatePipe, LoadingBookComponent, BookListComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLoading,  IonFab, IonFabButton, IonIcon, DatePipe, AsyncPipe, ],
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

