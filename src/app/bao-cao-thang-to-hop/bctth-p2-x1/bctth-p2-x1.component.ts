import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bctth-p2-x1',
  templateUrl: './bctth-p2-x1.component.html',
  styleUrls: ['./bctth-p2-x1.component.scss']
})
export class BctthP2X1Component implements OnInit {
  @Input() height = 300;
  @Input() dataSource;
  constructor() { }

  loinhuanSaubanhang : number =0 ;
  soKh : number =0 ;
  soCK : number =0 ;
  ngOnInit(): void {

    this.loinhuanSaubanhang = this.dataSource[0].Thuc_hien;
    this.soKh = this.dataSource[0].Ty_le_HTKT;
    this.soCK = this.dataSource[0].So_CK;

  }

}
