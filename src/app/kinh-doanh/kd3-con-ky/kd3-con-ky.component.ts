import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';

@Component({
  selector: 'app-kd3-con-ky',
  templateUrl: './kd3-con-ky.component.html',
  styleUrls: ['./kd3-con-ky.component.scss']
})
export class Kd3ConKyComponent extends ChartBaseComponent  {

  public ReportID: string = "daskboard-kinh-doanh-chart3";

  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;
  
  constructor( http: HttpClient) { 
    super(http);
    this.palette ="Harmony Light"
  }

  palette: string;

}
