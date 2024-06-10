import { Component, computed, input } from '@angular/core';
import { Book } from '../../models/book';
import { IonItem, IonLabel, IonThumbnail } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { FirebaseDatePipe } from '../../shared/fbDate.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [IonItem, RouterLink, IonThumbnail, IonLabel, FirebaseDatePipe, DatePipe],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  book = input.required<Book>()
}
