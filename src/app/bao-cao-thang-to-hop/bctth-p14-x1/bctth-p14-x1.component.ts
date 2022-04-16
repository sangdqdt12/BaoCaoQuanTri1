import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bctth-p14-x1',
  templateUrl: './bctth-p14-x1.component.html',
  styleUrls: ['./bctth-p14-x1.component.scss']
})
export class BctthP14X1Component implements OnInit {
  @Input() height = 300;
  @Input() dataSource;
  constructor() { }

  ngOnInit(): void {
  }

}
