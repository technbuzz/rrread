import { Component } from '@angular/core';
import { IonItem, IonLabel, IonList, IonListHeader, IonSkeletonText, IonThumbnail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-loading-book',
  standalone: true,
  imports: [IonList, IonListHeader, IonSkeletonText, IonThumbnail, IonItem, IonLabel],
  templateUrl: './loading-book.component.html',
  styleUrl: './loading-book.component.css'
})
export class LoadingBookComponent {

}
