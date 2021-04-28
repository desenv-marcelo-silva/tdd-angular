import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import * as dayjs from 'dayjs';

import { DataService } from './../../services/data.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less'],
})
export class BookComponent implements OnInit {
  checkIn;
  checkOut;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BookComponent>,
    private matSnackBar: MatSnackBar,
    private dataService: DataService
  ) {}

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

  bookHome() {
    this.dataService.bookHome$().subscribe(() => {
      this.dialogRef.close();
      this.matSnackBar.open('Home finally booked!!', null, { duration: 2000 });
    });
  }
}
