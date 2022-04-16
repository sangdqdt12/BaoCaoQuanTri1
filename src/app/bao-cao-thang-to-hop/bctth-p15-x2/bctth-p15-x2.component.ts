import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';

@Component({
  selector: 'app-bctth-p15-x2',
  templateUrl: './bctth-p15-x2.component.html',
  styleUrls: ['./bctth-p15-x2.component.scss']
})
export class BctthP15X2Component extends ChartBaseComponent {
  public ReportID: string = "daskboard-kinh-doanh-chart1";

  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;



   constructor( http: HttpClient) { 
    super(http);
  }
}