import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public readList: Observable<Readings[]>;
  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.readList = this.afs.collection<Readings>('readings').valueChanges()
  }

}

interface Readings {
  img: string;
  title: string;
  description: string;
  date: string
}
