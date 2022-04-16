import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';

@Component({
  selector: 'app-bctth-p8-x2',
  templateUrl: './bctth-p8-x2.component.html',
  styleUrls: ['./bctth-p8-x2.component.scss']
})
export class BctthP8X2Component extends ChartBaseComponent {
  public ReportID: string = "daskboard-kinh-doanh-chart1";

  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;



   constructor( http: HttpClient) { 
    super(http);
  }
}