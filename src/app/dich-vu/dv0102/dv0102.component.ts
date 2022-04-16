import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dv0102',
  templateUrl: './dv0102.component.html',
  styleUrls: ['./dv0102.component.scss']
})
export class Dv0102Component implements OnInit  {
 
 
  @Input() luyKe;
  @Input() tyLeHoanThanh;
  constructor() { }

  ngOnInit(): void {
  }

} 
