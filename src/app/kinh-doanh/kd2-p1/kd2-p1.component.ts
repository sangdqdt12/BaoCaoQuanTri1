import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kd2-p1',
  templateUrl: './kd2-p1.component.html',
  styleUrls: ['./kd2-p1.component.scss']
})
export class Kd2P1Component implements OnInit {

  @Input() soLuongXeGiao;
  @Input() TyLeXeGiao;
  constructor() { }

  ngOnInit(): void {
  }

}
