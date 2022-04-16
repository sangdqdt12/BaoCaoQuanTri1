import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bctdv-p6-x1',
  templateUrl: './bctdv-p6-x1.component.html',
  styleUrls: ['./bctdv-p6-x1.component.scss']
})
export class BctdvP6X1Component implements OnInit {
  @Input() height = 300;
  @Input() dataSource;
  constructor() { }

  ngOnInit(): void {

  }

}