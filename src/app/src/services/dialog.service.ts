import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor() {}

  open() {
    console.log('open dialog here');
  }
}
