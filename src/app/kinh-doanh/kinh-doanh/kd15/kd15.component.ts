import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';

@Component({
  selector: 'app-kd15',
  templateUrl: './kd15.component.html',
  styleUrls: ['./kd15.component.scss']
})
export class Kd15Component extends ChartBaseComponent  {

  public ReportID: string = "daskboard-kinh-doanh-chart15";

  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;
  
  constructor( http: HttpClient) { 
    super(http);
  }

}
