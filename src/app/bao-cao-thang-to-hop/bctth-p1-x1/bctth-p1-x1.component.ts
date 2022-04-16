import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bctth-p1-x1',
  templateUrl: './bctth-p1-x1.component.html',
  styleUrls: ['./bctth-p1-x1.component.scss']
})
export class BctthP1X1Component implements OnInit {
  @Input() height = 300;
  @Input() dataSource;
  constructor() { }
  tongnhansu: number = 0;
  nhansura: number  = 0;
  nhansuvao: number  = 0;

  ngOnInit(): void {
   // this.tongnhansu = this.dataSource[0].Ns_cuoi_ky;
  //  this.nhansura = this.dataSource[0].Ns_ra;
   // this.nhansuvao = this.dataSource[0].Ns_vao;

  }

}
