import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';

@Component({
  selector: 'app-kd7-xe-giao',
  templateUrl: './kd7-xe-giao.component.html',
  styleUrls: ['./kd7-xe-giao.component.scss']
})
export class Kd7XeGiaoComponent extends ChartBaseComponent {
  public ReportID: string = "daskboard-kinh-doanh-chart7";
  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;

  constructor( http: HttpClient) { 
    super(http);
  }

}
