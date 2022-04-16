import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

import { GiaiTrinhTbl } from 'src/app/Model/DanhMuc/GiaiTrinhTbl';




import { IsLoadingService } from '@service-work/is-loading';


import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import notify from 'devextreme/ui/notify';
import { GeClientService } from 'src/app/01.Service/GeClientService';
import { Guid } from 'guid-typescript';
import { DateTimeHelperService } from 'src/app/01.Service/00.Common/date-time-helper.service';



@Component({
  selector: 'app-giai-trinh',
  templateUrl: './giai-trinh.component.html',
  styleUrls: ['./giai-trinh.component.scss']
})
export class GiaiTrinhComponent implements OnInit {

  geClientService: GeClientService<GiaiTrinhTbl> ;
  
  getEntityName(): string {
    throw new Error('GiaiTrinhTbl');
  }

  valueContent: string;
  editorValueType: string = "Html";

  @Input() height = 300;
  @Input() bieuDo = "";
  @Input() ngay: Date ;
  thangLamViec: string;
  
  obj: GiaiTrinhTbl;
  @Output() newItemEvent = new EventEmitter<string>();
  

  constructor( http: HttpClient,
    public isLoadingService: IsLoadingService,
    @Inject(LOCAL_STORAGE) public storage: WebStorageService,
    private dateTimeHelperService: DateTimeHelperService,
    public router: Router) { 
      this.geClientService = new GeClientService<GiaiTrinhTbl>(http,"GiaiTrinhTbl");
    }

  ngOnInit(): void {
    
  }
  Edit() {
    this.newItemEvent.emit(this.bieuDo);
  }
  
  getCode(): string {

    var ngayS= this.dateTimeHelperService.dateToString(this.ngay);
    ngayS = ngayS.substr(0,6);
    return ngayS + "-" + this.bieuDo;
  }

  Save() {


    
    var code = this.getCode();

    var nullId = '00000000-0000-0000-0000-000000000000';

    try
    {


    this.geClientService.GetItemByCode(code).subscribe (t=> {
      this.obj = t;
      if( this.obj.ID === nullId) {
        this.obj = new  GiaiTrinhTbl();
        this.obj.Description = this.valueContent;
        this.obj.ID = Guid.create().toString();
        this.obj.Code = this.getCode();
        this.geClientService.SubmitNew(this.obj).subscribe (t=> {
          this.obj = t;
          notify ("Cập nhật thành công","success");
  
  
        });
      } else {
        this.obj.Description = this.valueContent;
        this.geClientService.SubmitEdit(this.obj).subscribe (t=> {
          this.obj = t;
          notify ("Cập nhật thành công","success");
        });
  
      }
    });
  }
  catch (e  ) {
    notify ("Lỗi khi cập nhật","error");
  }

     
   
  }

  Search() {
    var code = this.getCode();
    
    this.geClientService.GetItemByCode(code).subscribe (t=> {
      this.valueContent = t.Description;
    });
  }

  LoadData(thang: string) {
    //this.geClientService.GetItemByCode()
  }
}
