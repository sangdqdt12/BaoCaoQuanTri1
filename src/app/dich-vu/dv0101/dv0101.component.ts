import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dv0101',
  templateUrl: './dv0101.component.html',
  styleUrls: ['./dv0101.component.scss']
})
export class Dv0101Component implements OnInit  {

  @Input() luotXe = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
