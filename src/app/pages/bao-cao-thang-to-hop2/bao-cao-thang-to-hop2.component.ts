import { HttpClient } from '@angular/common/http';




import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { LoaiManHinh } from 'src/app/00.Common/EnumDefine';
import { WorkingEnviroment } from 'src/app/00.Common/WorkingEnviroment';
import { ManHinhService } from 'src/app/01.Service/00.Common/man-hinh.service';
import { ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';

import { DateTimeHelperService } from 'src/app/01.Service/00.Common/date-time-helper.service';


@Component({
  selector: 'app-bao-cao-thang-to-hop2',
  templateUrl: './bao-cao-thang-to-hop2.component.html',
  styleUrls: ['./bao-cao-thang-to-hop2.component.scss']
})
export class BaoCaoThangToHop2Component implements OnInit {

  constructor(
    private comboxService: ComboxService,
    private reportService: ReportService,
    private manHinhService: ManHinhService,
    private dateTimeHelperService: DateTimeHelperService,
    @Inject(DOCUMENT) private document: any,
    @Inject(SESSION_STORAGE) public storage: WebStorageService
  ) { }

  ngOnInit(): void {
  }

}
