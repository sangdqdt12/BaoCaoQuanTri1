import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RenderData } from 'devextreme-angular';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';
import { ColorDefineService } from 'src/app/01.Service/00.Common/color-define.service';


@Component({
  selector: 'app-dv03-bd12',
  templateUrl: './dv03-bd12.component.html',
  styleUrls: ['./dv03-bd12.component.scss']
})
export class Dv03Bd12Component extends ChartBaseComponent {
  public ReportID: string = "daskboard-dich-vu-chart12";

  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;
  
  constructor( http: HttpClient) { 
    super(http);
  }

}
