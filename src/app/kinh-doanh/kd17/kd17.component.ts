import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kd17',
  templateUrl: './kd17.component.html',
  styleUrls: ['./kd17.component.scss']
})
export class Kd17Component implements OnInit {

  @Input() DTBaoHiemTrenXe;
  @Input() BaoHiemKhuyenMai;
  @Input() BaoHiemBanLe;
  @Input() Height;
  @Input() Width;
  
  constructor() { }

  ngOnInit(): void {
  }

}
