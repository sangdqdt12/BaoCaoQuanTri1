import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kd14',
  templateUrl: './kd14.component.html',
  styleUrls: ['./kd14.component.scss']
})
export class Kd14Component implements OnInit {
  
  @Input() DTNoiThatTrenXeLK;
  @Input() NoiThatKhuyenMai;
  @Input() NoiThatBanNgoai;
  @Input() Height;
  @Input() Width;
  
  constructor() { }

  ngOnInit(): void {
  }

}
