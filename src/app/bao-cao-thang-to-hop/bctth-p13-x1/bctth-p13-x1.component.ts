import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bctth-p13-x1',
  templateUrl: './bctth-p13-x1.component.html',
  styleUrls: ['./bctth-p13-x1.component.scss']
})
export class BctthP13X1Component implements OnInit {
  @Input() height = 300;
  @Input() dataSource;
  constructor() { }

  ngOnInit(): void {
  }

}
