import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-xe-ky-hop-dong',
  templateUrl: './xe-ky-hop-dong.component.html',
  styleUrls: ['./xe-ky-hop-dong.component.scss']
})
export class XeKyHopDongComponent implements OnInit {

  @Input() TongXeKy: number;
  @Input() TongXeKyLuyKe: number;

  constructor() { }


  ngOnInit(): void {
  }

}
