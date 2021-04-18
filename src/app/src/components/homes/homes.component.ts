import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.less'],
})
export class HomesComponent implements OnInit {
  homes$;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.homes$ = this.dataService.getHomes$();
  }
}
