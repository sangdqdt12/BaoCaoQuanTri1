import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';

@Component({
  selector: 'app-kd4-xe-ky-cwd',
  templateUrl: './kd4-xe-ky-cwd.component.html',
  styleUrls: ['./kd4-xe-ky-cwd.component.scss']
})
export class Kd4XeKyCwdComponent extends ChartBaseComponent {
  public ReportID: string = "daskboard-kinh-doanh-chart4";
  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;

  maxAutoBreakCountAxis1: number = 1;
  maxAutoBreakCountAxis2: number = 1;

  constructor( http: HttpClient) { 
    super(http);
  }

}
