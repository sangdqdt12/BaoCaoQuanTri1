import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kd1-p1',
  templateUrl: './kd1-p1.component.html',
  styleUrls: ['./kd1-p1.component.scss']
})
export class Kd1P1Component implements OnInit {
  @Input() TongXeKy;
  @Input() TongXeKyLuyKe;
  constructor() { }

  ngOnInit(): void {
  }

}
