import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public readList: Readings[] = [];
  constructor() {}

  ngOnInit(): void {
    this.readList = [
      {
        img: 'http://placehold.it/100x100',
        title: 'Sami Birthday!',
        description: 'Its my Birthday! 🎉',
        date: 'July 27'
      },
      {
        img: 'http://placehold.it/100x100',
        title: 'Momina Birthday!',
        description: 'Its my Birthday! 🎉',
        date: 'August 21'
      },
      {
        img: 'http://placehold.it/100x100',
        title: 'Maryam Birthday!',
        description: 'Its my Birthday! 🎉',
        date: 'April 10'
      },
      {
        img: 'http://placehold.it/100x100',
        title: 'Meerab Birthday!',
        description: 'Its my Birthday! 🎉',
        date: 'September 18'
      }
    ]
  }

}

interface Readings {
  img: string;
  title: string;
  description: string;
  date: string
}
