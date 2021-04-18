import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getHomes$() {
    return of([]);
    // return of([
    //   {
    //     title: 'Home 1',
    //     image: 'assets/listing.jpg',
    //     location: 'New York',
    //   },
    //   {
    //     title: 'Home 2',
    //     image: 'assets/listing.jpg',
    //     location: 'Boston',
    //   },
    //   {
    //     title: 'Home 3',
    //     image: 'assets/listing.jpg',
    //     location: 'Chicago',
    //   },
    // ]);
  }
}
