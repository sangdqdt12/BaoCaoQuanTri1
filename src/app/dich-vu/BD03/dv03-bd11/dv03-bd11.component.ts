import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RenderData } from 'devextreme-angular';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';
import { ColorDefineService } from 'src/app/01.Service/00.Common/color-define.service';


@Component({
  selector: 'app-dv03-bd11',
  templateUrl: './dv03-bd11.component.html',
  styleUrls: ['./dv03-bd11.component.scss']
})
export class Dv03Bd11Component extends ChartBaseComponent {
  public ReportID: string = "daskboard-dich-vu-chart11";

  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;
  
  constructor( http: HttpClient) { 
    super(http);
  }

}
