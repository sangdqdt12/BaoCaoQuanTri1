import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bctth-p17-x1',
  templateUrl: './bctth-p17-x1.component.html',
  styleUrls: ['./bctth-p17-x1.component.scss']
})
export class BctthP17X1Component implements OnInit {
  @Input() height = 300;
  @Input() dataSource;
  constructor() { }

  ngOnInit(): void {
  }

}
