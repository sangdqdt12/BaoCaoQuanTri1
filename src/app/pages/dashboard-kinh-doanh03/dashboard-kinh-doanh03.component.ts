import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { LoaiManHinh } from 'src/app/00.Common/EnumDefine';
import { WorkingEnviroment } from 'src/app/00.Common/WorkingEnviroment';
import { DateTimeHelperService } from 'src/app/01.Service/00.Common/date-time-helper.service';
import { ManHinhService } from 'src/app/01.Service/00.Common/man-hinh.service';
import { ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';

@Component({
  selector: 'app-dashboard-kinh-doanh03',
  templateUrl: './dashboard-kinh-doanh03.component.html',
  styleUrls: ['./dashboard-kinh-doanh03.component.scss']
})
export class DashboardKinhDoanh03Component implements OnInit {

  data_CP_WBI_BE_01_03 : any[];
  data_CP_WBI_BE_01_03_ROW: any[];
  data_CP_WBI_BE_01_06 : any[];
  data_CP_WBI_BE_01_06_ROW : any[];
  data_CP_WBI_BE_01_10 : any[];
  data_CP_WBI_BE_01_11 : any[];
  data_CP_WBI_BE_01_11_ROW : any[];
  data_CP_WBI_BE_01_12 : any[];
  

  data_CP_WBI_BE_01_08_ROW : any[];
  data_CP_WBI_BE_01_09_ROW : any[];
 

  workEv:WorkingEnviroment;
  popupVisible: boolean;
  cao: any;
  rong: any;
  loaiManHinh: LoaiManHinh;

  elem: any;

  caoChart10 : any;
  rongChart10 : any;
  caoChart11 : any;
  rongChart11 : any;
  caoChart12 : any;
  rongChart12 : any;

  caoChart3 : any;
  rongChart3 : any;

  caoChart6 : any;
  rongChart6 : any;

  

  dieuChinhChart :any = 140;
  loadIndicatorVisible: boolean;
  barWidth: number;


  //-------- Điều kiện tìm kiếm --------------------------
  tuNgayVal: Date = new Date();
  khoiVal:string;
  khois: any[] = [];
  donViCoSos: any[];
  //------------------------------------------------------
  userGetData:string = "";
  donViSelected: string = "ALL";
  //----------------------------- Lọc đơn vị ------------------------
  danhSachDonVis: string[] = [];
  
  xeGiao: number;
  soKH: number;
  soCK: number;
  dra: number;

  constructor(
    private comboxService : ComboxService,
    private reportService: ReportService,
    private manHinhService : ManHinhService,
    private dateTimeHelperService: DateTimeHelperService,
    @Inject(DOCUMENT) private document: any,
    @Inject(SESSION_STORAGE) public storage: WebStorageService
    
  ) { 
    
    this.workEv = this.storage.get('ENV');
    this.userGetData = this.workEv.UserID;
    
  }

  widthLeftRight : number;
  barHeight : number;
  danhSachDonViHeight : number;

  dieuChinhKichCo() {

    this.widthLeftRight = 200; // Bù trừ trái phải
    this.barHeight = 70; // Độ cao thông tin chỉ số tổng hợp
    this.danhSachDonViHeight = 40; // Khoảng cách danh sách lọc theo đơn vị với đáy
    var leftBarwidth = 60;
    var maginchart = 8;

    this.cao = this.manHinhService.layChieuCao(window.innerWidth, window.innerHeight);
    this.rong = this.manHinhService.layChieuRong(window.innerWidth, window.innerHeight);

    this.barWidth =  this.rong -200;

    this.caoChart10 = (this.cao - this.barHeight - this.danhSachDonViHeight) / 2;
    this.caoChart11 = (this.cao - this.barHeight - this.danhSachDonViHeight) / 2;
    this.caoChart12 = (this.cao - this.barHeight - this.danhSachDonViHeight) / 2;
    this.caoChart3 =  (this.cao - this.barHeight - this.danhSachDonViHeight) / 2;
    this.caoChart6 =  (this.cao - this.barHeight - this.danhSachDonViHeight) / 2;

    this.rongChart10 = (this.rong - leftBarwidth)/ 2 - maginchart;
    this.rongChart11 = (this.rong - leftBarwidth)/ 2 - maginchart;
    this.rongChart12 = (this.rong - leftBarwidth)/ 2 - maginchart;
    this.rongChart3 =  (this.rong - leftBarwidth)/ 4 - 6;
    this.rongChart6 =  (this.rong - leftBarwidth)/ 4 - 6;
  }

  ngOnInit(): void {

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

    this.reportService.GhiNhanLogSuDungMenu(
      "CP_LogSuDungMenu", this.userGetData, "Dashboard kinh doanh 03"
    ).subscribe(t => {});

    this.dieuChinhKichCo();

   
    /*
    if (this.loaiManHinh == LoaiManHinh.To) {
      this.caoChart10 = (this.cao - this.dieuChinhChart)/2 - 10;
      this.caoChart11 = this.caoChart10;
      this.caoChart12 = this.caoChart10;
      this.caoChart3 = this.caoChart10;
      this.caoChart6 = this.caoChart10;

      this.rongChart10 = (this.rong - 100)/2 - 40;
      this.rongChart11 = this.rongChart10;
      this.rongChart12 = this.rongChart10;
      this.rongChart3 = this.rongChart10/2;
      this.rongChart6 = this.rongChart10/2;
      
   } else {
      this.caoChart10 = this.cao ;
      this.caoChart11 = this.caoChart10;
      this.caoChart12 = this.caoChart10;
      
   }
   */

   this.comboxService.GetComboxFunction('CP_DanhMucKhoi_NhomDonViCoSo_User?User=' + this.userGetData).subscribe(
    t => {
      this.donViCoSos = [];

      t.forEach(k => {
        if (k.ten_nh == "TOYOTA") {

          this.donViCoSos.push({ "ma_nh": k.ma_nh, "ten_nh": "TOY" })
        } else if (k.ten_nh == "FORD") {
          this.donViCoSos.push({ "ma_nh": k.ma_nh, "ten_nh": "FORD" })
        }
        if (this.donViCoSos.length > 0) {
          this.khoiVal = this.donViCoSos[0].ma_nh;
        }
      }

      )
      this.loadServeData();
    }
  );
  
  }

  loadServeData()
  {

    this.popupVisible = false;
    
    var sTuNgay = this.dateTimeHelperService.dateToString(this.tuNgayVal);
   
   
    this.reportService.CP_WBI_BE_01_03(this.khoiVal,sTuNgay,"","","","",this.userGetData).subscribe(
      t=> {
        this.loadIndicatorVisible = false;
        this.data_CP_WBI_BE_01_03_ROW = t;
        this.loadData03();
        

        //var tong =  t.filter(k=> k.Ten_Dvcs === 'ALL');
      },
      error => {
          this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_BE_01_03");
      }
      );

      this.reportService.CP_WBI_BE_01_06(this.khoiVal,sTuNgay,"","","","",this.userGetData).subscribe(
        t=> {
          this.loadIndicatorVisible = false;
          this.data_CP_WBI_BE_01_06_ROW = t;
          this.loadData06();
          //this.loadData8();
          
  
          //var tong =  t.filter(k=> k.Ten_Dvcs === 'ALL');
        },
        error => {
            this.loadIndicatorVisible = false;
          notify("Lỗi dữ liệu CP_WBI_BE_01_06");
        }
        );

    this.reportService.CP_WBI_BE_01_10(this.khoiVal,sTuNgay,"","","","",this.userGetData).subscribe(
    t=> {
      this.loadIndicatorVisible = false;
      this.data_CP_WBI_BE_01_10 = t;
      this.xeGiao = t.filter(k=> k.Chi_tieu === 'ALL' )[0].Giao_Lk;
      this.soKH = t.filter(k=> k.Chi_tieu === 'ALL' )[0].HTKH;
      
       

//      var tong =  t.filter(k=> k.Ten_Dvcs === 'ALL');

//      this.danhSachDonVis = [];
//      t.forEach(k=> this.danhSachDonVis.push(k.Chi_tieu));
    },
    error => {
        this.loadIndicatorVisible = false;
      notify("Lỗi dữ liệu data_CP_WBI_BE_01_10");
    });

    this.reportService.CP_WBI_BE_01_11(this.khoiVal,sTuNgay,"","","","",this.userGetData).subscribe(
      t=> {
        this.loadIndicatorVisible = false;
        var thang = sTuNgay.substring(4,6);
        var x = t.filter(k=> k.Ten_dvcs === 'ALL' && k.Chi_tieu.includes(thang) );
        this.dra = t.filter(k=> k.Ten_dvcs === 'ALL' && k.Chi_tieu.includes(thang) )[0].TyLe_DRA1;
        this.data_CP_WBI_BE_01_11_ROW = t;
        this.loadData11();
        

        //var tong =  t.filter(k=> k.Ten_Dvcs === 'ALL');
      },
      error => {
          this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_BE_01_11");
      }
      );

      this.reportService.CP_WBI_BE_01_12(this.khoiVal,sTuNgay,"","","","",this.userGetData).subscribe(
        t=> {
          this.danhSachDonVis = [];
          this.loadIndicatorVisible = false;
          this.data_CP_WBI_BE_01_12 =  t.filter(k=> k.Chi_tieu !== 'ALL');;

          t.forEach(k=> this.danhSachDonVis.push(k.Chi_tieu));
      },
      error => {
          this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_BE_01_12");
      });
  }

  close() {
    this.popupVisible = false;
  }

  showFilter() {
    this.popupVisible = true;
  }

  loadData11()
  {
    this.data_CP_WBI_BE_01_11 = [];
    this.data_CP_WBI_BE_01_11 = this.data_CP_WBI_BE_01_11_ROW.filter(t=> t.Ten_dvcs == this.donViSelected);
  }

  loadData03()
  {
    this.data_CP_WBI_BE_01_03 = [];
    this.data_CP_WBI_BE_01_03 = this.data_CP_WBI_BE_01_03_ROW.filter(t=> t.Ten_Dvcs == this.donViSelected);
  }

  loadData06()
  {
    this.data_CP_WBI_BE_01_06 = [];
    this.data_CP_WBI_BE_01_06 = this.data_CP_WBI_BE_01_06_ROW.filter(t=> t.Ten_Dvcs == this.donViSelected);
  }


  

  filterDonVi(e:any) {
    this.donViSelected = e.itemData;
    this.loadData11();
    this.loadData03();
    this.loadData06();
    
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

}

