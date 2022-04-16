import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bctth-p9-x1',
  templateUrl: './bctth-p9-x1.component.html',
  styleUrls: ['./bctth-p9-x1.component.scss']
})
export class BctthP9X1Component implements OnInit {
  @Input() height = 300;
  @Input() dataSource;
  constructor() { }

  ngOnInit(): void {
  }

}
