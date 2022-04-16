import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-testmd-daskboard',
  templateUrl: './testmd-daskboard.component.html',
  styleUrls: ['./testmd-daskboard.component.scss']
})
export class TestmdDaskboardComponent implements OnInit {

  
  @Input()
  chartWith;

  @Input() data_CP_WBI_BE_01_01;
  
  constructor() { }

  ngOnInit(): void {
  }

}
