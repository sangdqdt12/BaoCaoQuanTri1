import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bckd3-p2',
  templateUrl: './bckd3-p2.component.html',
  styleUrls: ['./bckd3-p2.component.scss']
})
export class Bckd3P2Component implements OnInit {
  @Input() dra;
  constructor() { }

  ngOnInit(): void {
  }

}
