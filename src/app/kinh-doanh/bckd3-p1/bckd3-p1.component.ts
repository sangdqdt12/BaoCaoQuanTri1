import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bckd3-p1',
  templateUrl: './bckd3-p1.component.html',
  styleUrls: ['./bckd3-p1.component.scss']
})
export class Bckd3P1Component implements OnInit {
  @Input() xeGiao;
  @Input() soKH;
  constructor() { }

  ngOnInit(): void {
  }

}
