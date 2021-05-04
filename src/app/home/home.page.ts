import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Book } from "../models/book";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public readList: Observable<Book[]>;
  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.readList = this.afs.collection<Book>('readings').valueChanges({ idField: 'id'})
  }

}

