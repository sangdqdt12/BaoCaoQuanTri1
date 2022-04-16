import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild , Input} from '@angular/core';
import { IsLoadingService } from '@service-work/is-loading';
import { DxDataGridComponent } from 'devextreme-angular';
import { Observable } from 'rxjs';
import { ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';
import { WorkingEnviroment } from 'src/app/00.Common/WorkingEnviroment';
import { LOCAL_STORAGE, SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import notify from 'devextreme/ui/notify';
import { ManHinhService } from 'src/app/01.Service/00.Common/man-hinh.service';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';
import { HttpClient } from '@angular/common/http';
import { RenderData } from 'devextreme-angular';
import { ColorDefineService } from 'src/app/01.Service/00.Common/color-define.service';
import { LoaiManHinh } from 'src/app/00.Common/EnumDefine';


@Component({
  selector: 'app-bao-cao-ngay-to-hop',
  templateUrl: './bao-cao-ngay-to-hop.component.html',
  styleUrls: ['./bao-cao-ngay-to-hop.component.scss']
})

export class BaoCaoNgayToHopComponent extends ChartBaseComponent {
  public ReportID: string = 'bao-cao-ngay-to-hop-chart1';
//export class BaoCaoNgayToHopComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) gridDetail: DxDataGridComponent;
  
  duLieuBieuDos: DuLieuBieuDo[];

  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;

  cap2 : string;
  cap2s: string[] = ['Biểu đồ','Chi tiết'];
  elem: any;
  reportData1: Observable<any[]>;
  reportDataArr1: any[] = [];
  tuNgayVal: Date = new Date();
  denNgayVal: Date = new Date();
  khoiVal:string = "";
  capVal:string;
  popupVisible: boolean = false;
  rongMacDinh: any = 80;

  userGetData:string = "";
  workEv:WorkingEnviroment;

  donViCoSos: any[] = [];
  capCbxd: any[];

  gridHeight: any;
  chartHeight: any;

  loadIndicatorVisible: boolean;

  viewT = false;
  viewF = false;


  constructor(
    public isLoadingService: IsLoadingService,
    private manHinhService : ManHinhService,
    private comboxService: ComboxService,
    private reportService: ReportService,
    public http: HttpClient,
    @Inject(DOCUMENT) private document: any,
    @Inject(SESSION_STORAGE) public storage: WebStorageService
    ) {
      super(http);
     }


  dieuChinhKichCo () {

    if (this.manHinhService.loaiManHinh( window.innerWidth, window.innerHeight) == LoaiManHinh.Nho)
    {
      const dieuChinh = 80;
      var cao = this.manHinhService.layChieuCao( window.innerWidth, window.innerHeight);
      var rong = this.manHinhService.layChieuRong( window.innerWidth, window.innerHeight);
      this.gridHeight = window.innerHeight ;
      this.chartHeight = window.innerHeight - dieuChinh;
    }
    else {
      const dieuChinh = 180;
      var cao = this.manHinhService.layChieuCao( window.innerWidth, window.innerHeight);
      var rong = this.manHinhService.layChieuRong( window.innerWidth, window.innerHeight);
      this.gridHeight = window.innerHeight -dieuChinh ;
      this.chartHeight = window.innerHeight - dieuChinh;
    }

  }

  ngOnInit(): void {

    super.ngOnInit();
    
    this.elem = document.documentElement;

    if (this.manHinhService.canFullScreen(window.innerWidth, window.innerHeight)) {

      this.openFullscreen();

      document.addEventListener('fullscreenchange', (event) => {
        // document.fullscreenElement will point to the element that
        // is in fullscreen mode if there is one. If there isn't one,
        // the value of the property is null.
        this.dieuChinhKichCo();
        if (document.fullscreenElement) {
          console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);

        } else {
          console.log('Leaving full-screen mode.');
        }
      });
    }

    this.dieuChinhKichCo();

    
    this.loadIndicatorVisible = true;
    this.donViCoSos = [];
    this.workEv = this.storage.get('ENV');
    this.userGetData = this.workEv.UserID;
    this.elem = document.documentElement;

    this.reportService.GhiNhanLogSuDungMenu(
      "CP_LogSuDungMenu", this.userGetData, "QT07 - Báo cáo dịch vụ ngày"
    ).subscribe(t => {});
  
    this.isLoadingService.add(
    this.comboxService.GetComboxFunction('CP_DanhMucKhoi_NhomDonViCoSo_User?User=' + this.userGetData).subscribe(
      t => {
        t.forEach (k=> {
          if (k.ten_nh == "TOYOTA") {
            
            this.donViCoSos.push ({"ma_nh":k.ma_nh ,"ten_nh":"TOY"})
          } else if (k.ten_nh == "FORD") {
            
            this.donViCoSos.push ({"ma_nh":k.ma_nh ,"ten_nh":"FORD"})
          }

        });
        if (this.donViCoSos.length >0)
        {
          this.khoiVal = this.donViCoSos[0].ma_nh;
        }
        this.fillData();
      }
     )
     );
     this.isLoadingService.add(
     this.comboxService.GetComboxFunction('VCapXemBaoCao').subscribe(
      t => {
        this.capCbxd = t;
        this.capVal = "1";
        this.fillData();
      }
     ));


  }


  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }



  close() {
    this.popupVisible = false;
  }
  fillData() {

    if (this.khoiVal == '' || this.khoiVal === 'undefined')
    return;

    this.loadIndicatorVisible = true;
    this.duLieuBieuDos = [];

    console.log(this.capVal);
    console.log(this.khoiVal);

    if (typeof this.capVal == undefined || this.capVal === 'undefined')
    {
      console.log("cap undefined");
      return;
    }

    if (typeof this.khoiVal == undefined || this.khoiVal === 'undefined')
    {
      console.log("cap undefined");
      return;
    }

    if (this.capVal === ""  || this.khoiVal === "") {
      return;
    }


     this.popupVisible = false;

     var sTuNgay = this.getNgayString(this.tuNgayVal);
     var sDenNgay = this.getNgayString(this.denNgayVal);

/*
     this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(
      this.khoiVal,this.capVal,sTuNgay,"","","cuongnt"
    );
    */

    

  this.gridDetail.instance.beginCustomLoading("");
 // this.reportData1 = this.reportService.CP_WKPI_RO_03_T();

  
  this.reportData1 = this.reportService.CP_WKPI_BE_07(
    this.khoiVal,this.capVal,sTuNgay,sDenNgay,"","",this.userGetData
  );
  

    this.reportData1.subscribe(t => { 

      this.duLieuBieuDos = [];
      this.loadIndicatorVisible = false;
      this.reportDataArr1 = t; 

      if (this.khoiVal == "0101")
      {
        this.viewT = true;
        this.viewF = false;
        this.duLieuBieuDos.push ({DonVi:"TMD",A003:0,A005:0,A006:0,A007:0});
        this.duLieuBieuDos.push ({DonVi:"TTX",A003:0,A005:0,A006:0,A007:0});
        this.duLieuBieuDos.push ({DonVi:"TIHD",A003:0,A005:0,A006:0,A007:0});
        this.duLieuBieuDos.push ({DonVi:"TBN",A003:0,A005:0,A006:0,A007:0});
        this.duLieuBieuDos.push ({DonVi:"TTS",A003:0,A005:0,A006:0,A007:0});
        this.duLieuBieuDos.push ({DonVi:"TPT",A003:0,A005:0,A006:0,A007:0});
  
        this.reportDataArr1.forEach(t=> {
        
          //Giao lũy kế
          if (t.Ma_So === 'A003') {
            this.duLieuBieuDos[0].A003 = t.DV01;
            this.duLieuBieuDos[1].A003 = t.DV05;
            this.duLieuBieuDos[2].A003 = t.DV06;
            this.duLieuBieuDos[3].A003 = t.DV03;
            this.duLieuBieuDos[4].A003 = t.DV08;
            this.duLieuBieuDos[5].A003 = t.DV04;
  
          } else if (t.Ma_So === 'A005') {
            this.duLieuBieuDos[0].A005 = t.DV01;
            this.duLieuBieuDos[1].A005 = t.DV05;
            this.duLieuBieuDos[2].A005 = t.DV06;
            this.duLieuBieuDos[3].A005 = t.DV03;
            this.duLieuBieuDos[4].A005 = t.DV08;
            this.duLieuBieuDos[5].A005 = t.DV04;
  
          } else if (t.Ma_So === 'A006') {
            this.duLieuBieuDos[0].A006 = t.DV01;
            this.duLieuBieuDos[1].A006 = t.DV05;
            this.duLieuBieuDos[2].A006 = t.DV06;
            this.duLieuBieuDos[3].A006 = t.DV03;
            this.duLieuBieuDos[4].A006 = t.DV08;
            this.duLieuBieuDos[5].A006 = t.DV04;
  
          }
          else if (t.Ma_So === 'A007') {
            this.duLieuBieuDos[0].A007 = t.DV01;
            this.duLieuBieuDos[1].A007 = t.DV05;
            this.duLieuBieuDos[2].A007 = t.DV06;
            this.duLieuBieuDos[3].A007 = t.DV03;
            this.duLieuBieuDos[4].A007 = t.DV08;
            this.duLieuBieuDos[5].A007 = t.DV04;
  
          }
          
        });
  
      }
      else {

        this.viewT = false;
        this.viewF = true;
        this.duLieuBieuDos.push ({DonVi:"TLF",A003:0,A005:0,A006:0,A007:0});
        this.duLieuBieuDos.push ({DonVi:"TXF",A003:0,A005:0,A006:0,A007:0});
        this.duLieuBieuDos.push ({DonVi:"HNF",A003:0,A005:0,A006:0,A007:0});
        this.duLieuBieuDos.push ({DonVi:"LBF",A003:0,A005:0,A006:0,A007:0});
        this.duLieuBieuDos.push ({DonVi:"QNF",A003:0,A005:0,A006:0,A007:0});
        this.duLieuBieuDos.push ({DonVi:"BGF",A003:0,A005:0,A006:0,A007:0});
        
        this.reportDataArr1.forEach(t=> {
        
          //Giao lũy kế
          if (t.Ma_So === 'A003') {
            this.duLieuBieuDos[0].A003 = t.DV01;
            this.duLieuBieuDos[1].A003 = t.DV02;
            this.duLieuBieuDos[2].A003 = t.DV03;
            this.duLieuBieuDos[3].A003 = t.DV04;
            this.duLieuBieuDos[4].A003 = t.DV05;
            this.duLieuBieuDos[5].A003 = t.DV06;
            
  
          } else if (t.Ma_So === 'A005') {
            this.duLieuBieuDos[0].A005 = t.DV01;
            this.duLieuBieuDos[1].A005 = t.DV02;
            this.duLieuBieuDos[2].A005 = t.DV03;
            this.duLieuBieuDos[3].A005 = t.DV04;
            this.duLieuBieuDos[4].A005 = t.DV05;
            this.duLieuBieuDos[5].A005 = t.DV06;
            
  
          } else if (t.Ma_So === 'A006') {
            this.duLieuBieuDos[0].A006 = t.DV01;
            this.duLieuBieuDos[1].A006 = t.DV02;
            this.duLieuBieuDos[2].A006 = t.DV03;
            this.duLieuBieuDos[3].A006 = t.DV04;
            this.duLieuBieuDos[4].A006 = t.DV05;
            this.duLieuBieuDos[5].A006 = t.DV06;
          }
          else if (t.Ma_So === 'A007') {
            this.duLieuBieuDos[0].A007 = t.DV01;
            this.duLieuBieuDos[1].A007 = t.DV02;
            this.duLieuBieuDos[2].A007 = t.DV03;
            this.duLieuBieuDos[3].A007 = t.DV04;
            this.duLieuBieuDos[4].A007 = t.DV05;
            this.duLieuBieuDos[5].A007 = t.DV06;
          }
          
        });
  
      }

    


    this.gridDetail.instance.endCustomLoading();
    
    
   });

  }

  getNgayString (ngayVal:Date) {
    var nam: string;
    var thang: string;
    var ngay = "";
    var nam =  ngayVal.getFullYear().toString() ;

    if (ngayVal.getMonth()< 9) thang = "0" + (ngayVal.getMonth() + 1).toString();
    else thang =  (ngayVal.getMonth() + 1).toString();
    
    if (ngayVal.getDate()< 10) ngay = "0" + ngayVal.getDate() .toString();
    else ngay =  ngayVal.getDate().toString();
  
    var ngays = nam + thang + ngay;
    return ngays;
  }

  onPointClick(e) {
    e.target.select();
}
  showFilter() {
    this.popupVisible = true;
  }


  
  onCellPrepared(e) {
   
}

selCap2(e){
  this.cap2 = e.itemData ;
  
}


  onRowPrepared(e) {  
    if (e.rowType == 'data' ) {
     // e.rowElement.style.backgroundColor =`rgb(128,255,255)`;
      e.rowElement.style.backgroundColor = `rgb(${e.data.BackColor.replace(/\s/g, "")})`;
      //console.log(e.rowElement.style.backgroundColor);
    } 

    if (e.data.Bold == "1")
        {
          e.rowElement.style.fontWeight = "bold";
          //e.rowElement.style.fontStyle = "italic";
        }
        
    if (e.data.Italic == "1")
      {
        //e.rowElement.style.fontWeight = "bold";
        e.rowElement.style.fontStyle = "italic";
      }

      if (e.data.ForeColor != "")
      {
        //e.rowElement.style.fontWeight = "bold";
        e.rowElement.style.color  = `rgb(${e.data.ForeColor.replace(/\s/g, "")})`;
      }
}

}


class DuLieuBieuDo {
  DonVi: string;
  A003: number;
  A005: number;
  A006: number;
  A007: number;
}