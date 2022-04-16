import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';

@Component({
  selector: 'app-kd6-ton-kho3-thang',
  templateUrl: './kd6-ton-kho3-thang.component.html',
  styleUrls: ['./kd6-ton-kho3-thang.component.scss']
})
export class Kd6TonKho3ThangComponent extends ChartBaseComponent {
  public ReportID: string = "daskboard-kinh-doanh-chart6";

  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;
  
  constructor( http: HttpClient) { 
    super(http);
    this.palette = "Material";
  }

  palette: string;

}
