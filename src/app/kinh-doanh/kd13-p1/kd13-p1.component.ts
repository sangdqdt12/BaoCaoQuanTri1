import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kd13-p1',
  templateUrl: './kd13-p1.component.html',
  styleUrls: ['./kd13-p1.component.scss']
})
export class Kd13P1Component implements OnInit {

  @Input() TongDoanhThuNoiThat;
  @Input() TyLeKhaiThacNoiThat;
  
  constructor() { }

  ngOnInit(): void {
  }

}
