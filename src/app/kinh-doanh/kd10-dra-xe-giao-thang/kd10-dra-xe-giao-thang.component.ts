import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';


@Component({
  selector: 'app-kd10-dra-xe-giao-thang',
  templateUrl: './kd10-dra-xe-giao-thang.component.html',
  styleUrls: ['./kd10-dra-xe-giao-thang.component.scss']
})
export class Kd10DraXeGiaoThangComponent extends ChartBaseComponent {
  public ReportID: string = "daskboard-kinh-doanh-chart10";

  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;
  
  constructor( http: HttpClient) { 
    super(http);
  }

}
