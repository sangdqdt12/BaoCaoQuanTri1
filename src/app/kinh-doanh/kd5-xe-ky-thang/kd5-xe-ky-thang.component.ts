import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';

@Component({
  selector: 'app-kd5-xe-ky-thang',
  templateUrl: './kd5-xe-ky-thang.component.html',
  styleUrls: ['./kd5-xe-ky-thang.component.scss']
})
export class Kd5XeKyThangComponent  extends ChartBaseComponent{
  public ReportID: string = "daskboard-kinh-doanh-chart5";
  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;

  constructor( http: HttpClient) { 
    super(http);
  }



}
