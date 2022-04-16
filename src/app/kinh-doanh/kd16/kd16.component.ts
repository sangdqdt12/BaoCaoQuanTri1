import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';

@Component({
  selector: 'app-kd16',
  templateUrl: './kd16.component.html',
  styleUrls: ['./kd16.component.scss']
})
export class Kd16Component extends ChartBaseComponent {

  public ReportID: string = "daskboard-kinh-doanh-chart10";

  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;
  
  constructor( http: HttpClient) { 
    super(http);
  }
}
