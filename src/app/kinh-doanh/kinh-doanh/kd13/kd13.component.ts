import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';

@Component({
  selector: 'app-kd13',
  templateUrl: './kd13.component.html',
  styleUrls: ['./kd13.component.scss']
})
export class Kd13Component extends ChartBaseComponent  {
  
  public ReportID: string = "daskboard-kinh-doanh-chart13";
  
  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;
  
  constructor( http: HttpClient) { 
    super(http);
  }

}