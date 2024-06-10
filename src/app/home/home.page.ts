import { Component, OnInit, inject } from '@angular/core';
import { Book } from "../models/book";
import { Observable, map, tap } from 'rxjs';
import { addIcons } from 'ionicons'
import { add } from 'ionicons/icons'
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { IonRouterLink } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  firestore = inject(Firestore)

  public readList!: Observable<Book[]>;
  constructor() {
    addIcons({ add, })
  }


  ngOnInit(): void {
    const readings = collection(this.firestore, 'readings')

    this.readList = collectionData<Book>(readings, { idField: 'id' }).pipe(
      // map((reading: Book[]) => readings.map(reading => ({...reading, data: this.handleDate(reading) }))),

      tap(console.log)
    )
  }

  handleDate({ date }: Book) {
    console.log(date)
    return date

  }

}

