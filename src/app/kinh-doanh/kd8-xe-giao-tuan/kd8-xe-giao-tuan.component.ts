import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';

@Component({
  selector: 'app-kd8-xe-giao-tuan',
  templateUrl: './kd8-xe-giao-tuan.component.html',
  styleUrls: ['./kd8-xe-giao-tuan.component.scss']
})
export class Kd8XeGiaoTuanComponent extends ChartBaseComponent {
  public ReportID: string = "daskboard-kinh-doanh-chart8";

  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;
  
  constructor( http: HttpClient) { 
    super(http);
  }

}
