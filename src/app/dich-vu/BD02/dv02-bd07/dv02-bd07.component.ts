import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RenderData } from 'devextreme-angular';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';
import { ColorDefineService } from 'src/app/01.Service/00.Common/color-define.service';

@Component({
  selector: 'app-dv02-bd07',
  templateUrl: './dv02-bd07.component.html',
  styleUrls: ['./dv02-bd07.component.scss']
})
export class Dv02Bd07Component extends ChartBaseComponent {
  public ReportID: string = "daskboard-dich-vu-chart7";

  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;
  
  constructor( http: HttpClient) { 
    super(http);
  }

}
