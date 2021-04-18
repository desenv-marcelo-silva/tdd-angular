import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import * as dayjs from 'dayjs';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less'],
})
export class BookComponent implements OnInit {
  checkIn;
  checkOut;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}

  calculateTotal(checkIn, checkOut) {
    if (checkIn && checkOut) {
      const price = +this.data.home.price;
      const startDate = dayjs(checkIn);
      const endDate = dayjs(checkOut);
      const numberOfDays = endDate.diff(startDate, 'd');
      return numberOfDays * price;
    }
    return '0';
  }
}
