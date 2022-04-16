import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bctth-p3-x1',
  templateUrl: './bctth-p3-x1.component.html',
  styleUrls: ['./bctth-p3-x1.component.scss']
})
export class BctthP3X1Component implements OnInit {
  @Input() height = 300;
  @Input() dataSource;
  constructor() { }

  tongdoanhso: number = 0;
  soKH: number = 0;
  soCK: number = 0;

  ngOnInit(): void {

    // this.tongdoanhso = this.dataSource[0].Xe_ban;
    // this.soKH = this.dataSource[0].HTKH;
    // this.soCK = this.dataSource[0].So_CK;

  }

}
