import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kd1-p2',
  templateUrl: './kd1-p2.component.html',
  styleUrls: ['./kd1-p2.component.scss']
})
export class Kd1P2Component implements OnInit {
  @Input()  TyLeKeHoach;
  constructor() { }
  ngOnInit(): void {
  }
}
