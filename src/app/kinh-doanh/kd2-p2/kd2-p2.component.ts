import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kd2-p2',
  templateUrl: './kd2-p2.component.html',
  styleUrls: ['./kd2-p2.component.scss']
})
export class Kd2P2Component implements OnInit {

  @Input()  TyLeXeGiaoCungKy;
  constructor() { }
  ngOnInit(): void {
  }
}
