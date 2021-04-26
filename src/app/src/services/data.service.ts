import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getHomes$() {
    return this.httpClient.get<any>('assets/homes.json');
  }

  bookHome$() {
    const url = 'https://run.mocky.io/v3/0fceb2e9-a0e8-48c5-9515-b71a21ab3ddc';
    return this.httpClient.post(url, { id: 1 });
  }
}
