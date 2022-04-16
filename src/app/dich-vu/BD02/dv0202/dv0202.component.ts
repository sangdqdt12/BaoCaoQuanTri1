import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RenderData } from 'devextreme-angular';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';
import { ColorDefineService } from 'src/app/01.Service/00.Common/color-define.service';


@Component({
  selector: 'app-dv0202',
  templateUrl: './dv0202.component.html',
  styleUrls: ['./dv0202.component.scss']
})
export class Dv0202Component implements OnInit {

  @Input() doanhthulenhluyKe = 0;
  constructor() { }

  ngOnInit(): void {
  }

}