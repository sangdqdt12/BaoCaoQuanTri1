import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RenderData } from 'devextreme-angular';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';
import { ColorDefineService } from 'src/app/01.Service/00.Common/color-define.service';

@Component({
  selector: 'app-dv0302',
  templateUrl: './dv0302.component.html',
  styleUrls: ['./dv0302.component.scss']
})
export class Dv0302Component implements OnInit {

  @Input() doanhthuxuathoadonluyKe = 0;
  @Input() tyLeHoanThanh = 0;
  constructor() { }

  ngOnInit(): void {
  }

}