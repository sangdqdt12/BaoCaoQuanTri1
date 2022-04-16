import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RenderData } from 'devextreme-angular';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';
import { ColorDefineService } from 'src/app/01.Service/00.Common/color-define.service';


@Component({
  selector: 'app-dv0301',
  templateUrl: './dv0301.component.html',
  styleUrls: ['./dv0301.component.scss']
})
export class Dv0301Component implements OnInit {

  @Input() doanhthuxuathoadonngay = 0;
  constructor() { }

  ngOnInit(): void {
  }

}