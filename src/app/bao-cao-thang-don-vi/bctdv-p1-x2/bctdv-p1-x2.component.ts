import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';

@Component({
  selector: 'app-bctdv-p1-x2',
  templateUrl: './bctdv-p1-x2.component.html',
  styleUrls: ['./bctdv-p1-x2.component.scss']
})
export class BctdvP1X2Component  extends ChartBaseComponent {
  public ReportID: string = "daskboard-kinh-doanh-chart1";

  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;

   constructor( http: HttpClient) { 
    super(http);
  }
}