import { Component, inject } from '@angular/core';
import { BookItemComponent } from '../book-item/book-item.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Book } from '../../models/book';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookItemComponent, AsyncPipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  firestore = inject(Firestore)

  public readList!: Observable<Book[]>;

  ngOnInit() {

    const readings = collection(this.firestore, 'readings')

    this.readList = collectionData<Book>(readings, { idField: 'id' })

  }
}
