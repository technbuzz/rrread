import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';

@Pipe({
  standalone: true,
  name: 'fbDate'
})

export class FirebaseDatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!value) {
      return
    }

    if (value instanceof Timestamp) {
      return value.toDate()
    } else {
      return value
    }
    
  }
}
