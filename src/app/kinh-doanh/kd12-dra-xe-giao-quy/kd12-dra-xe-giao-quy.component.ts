import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';

@Component({
  selector: 'app-kd12-dra-xe-giao-quy',
  templateUrl: './kd12-dra-xe-giao-quy.component.html',
  styleUrls: ['./kd12-dra-xe-giao-quy.component.scss']
})
export class Kd12DraXeGiaoQuyComponent extends ChartBaseComponent  {
  
  public ReportID: string = "daskboard-kinh-doanh-chart12";
  
  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;
  
  constructor( http: HttpClient) { 
    super(http);
  }

}
