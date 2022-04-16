import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RenderData } from 'devextreme-angular';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';
import { ColorDefineService } from 'src/app/01.Service/00.Common/color-define.service';

@Component({
  selector: 'app-kd1-xe-ky',
  templateUrl: './kd1-xe-ky.component.html',
  styleUrls: ['./kd1-xe-ky.component.scss']
})
export class Kd1XeKyComponent extends ChartBaseComponent {
  public ReportID: string = "daskboard-kinh-doanh-chart1";

  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;



   constructor( http: HttpClient) { 
    super(http);
  }
}
