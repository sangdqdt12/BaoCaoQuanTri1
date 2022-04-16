import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';

@Component({
  selector: 'app-kd2-xe-tuan',
  templateUrl: './kd2-xe-tuan.component.html',
  styleUrls: ['./kd2-xe-tuan.component.scss']
})
export class Kd2XeTuanComponent  extends ChartBaseComponent {
  public ReportID: string = "daskboard-kinh-doanh-chart2";
  
  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;

  constructor( http: HttpClient) { 
    super(http);
  }


}
