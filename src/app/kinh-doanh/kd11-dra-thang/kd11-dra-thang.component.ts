import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';


@Component({
  selector: 'app-kd11-dra-thang',
  templateUrl: './kd11-dra-thang.component.html',
  styleUrls: ['./kd11-dra-thang.component.scss']
})
export class Kd11DraThangComponent extends ChartBaseComponent  {
  
  public ReportID: string = "daskboard-kinh-doanh-chart11";

  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;
  
  constructor( http: HttpClient) { 
    super(http);
  }

}
