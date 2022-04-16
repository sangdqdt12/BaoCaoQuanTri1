import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kd13-p2',
  templateUrl: './kd13-p2.component.html',
  styleUrls: ['./kd13-p2.component.scss']
})
export class Kd13P2Component implements OnInit {
  @Input() TongDoanhThuBaoHiem;
  @Input() TyLeKhaiThacBaoHiem;
  @Input() TyLeTaiTucBaoHiem;

  constructor() { }

  ngOnInit(): void {
  }

}
