import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kd18',
  templateUrl: './kd18.component.html',
  styleUrls: ['./kd18.component.scss']
})
export class Kd18Component implements OnInit {

  @Input() CongNoTren3Thang;
  @Input() CongNoTren6Thang;
  @Input() Height;
  @Input() Width;

  constructor() { }

  ngOnInit(): void {
  }

}
