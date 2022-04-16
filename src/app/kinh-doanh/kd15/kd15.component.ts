import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';

@Component({
  selector: 'app-kd15',
  templateUrl: './kd15.component.html',
  styleUrls: ['./kd15.component.scss']
})
export class Kd15Component  extends ChartBaseComponent {
  public ReportID: string = "daskboard-kinh-doanh-chart6";

  @Input() dataSource;
  @Input() Height;
  @Input() Width;
  @Input() XeTFS;
  
  constructor( http: HttpClient) { 
    super(http);
  }

}
