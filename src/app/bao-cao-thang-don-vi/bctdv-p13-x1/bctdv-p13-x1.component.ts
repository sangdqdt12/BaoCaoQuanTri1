import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bctdv-p13-x1',
  templateUrl: './bctdv-p13-x1.component.html',
  styleUrls: ['./bctdv-p13-x1.component.scss']
})
export class BctdvP13X1Component implements OnInit {
  @Input() height = 300;
  @Input() dataSource;
  constructor() { }

  ngOnInit(): void {

  }

}