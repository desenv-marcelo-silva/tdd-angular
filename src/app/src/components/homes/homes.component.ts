import { Component, OnInit } from '@angular/core';

import { DialogService } from './../../services/dialog.service';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.less'],
})
export class HomesComponent implements OnInit {
  homes$;

  constructor(
    private dataService: DataService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.homes$ = this.dataService.getHomes$();
  }

  openDialog() {
    this.dialogService.open();
  }
}
