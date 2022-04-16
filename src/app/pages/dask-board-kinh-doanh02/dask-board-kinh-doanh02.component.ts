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

import { TestmdModule } from '../../testmd/testmd.module'


@Component({
  selector: 'app-dask-board-kinh-doanh02',
  templateUrl: './dask-board-kinh-doanh02.component.html',
  styleUrls: ['./dask-board-kinh-doanh02.component.scss']
})
export class DaskBoardKinhDoanh02Component implements OnInit {
  data_CP_WBI_BE_01_07 : any[];
  data_CP_WBI_BE_01_08 : any[];
  data_CP_WBI_BE_01_09 : any[];

  data_CP_WBI_BE_01_08_ROW : any[];
  data_CP_WBI_BE_01_09_ROW : any[];
 

  workEv:WorkingEnviroment;
  popupVisible: boolean;
  cao: any;
  rong: any;
  loaiManHinh: LoaiManHinh;

  elem: any;
  caoChart7 : any;
  caoChart8 : any;
  caoChart9 : any;
  rongChart : any;
  rongChart2: any;
  dieuChinhChart :any = 200;
  loadIndicatorVisible: boolean;
  barWidth: number;
  donViCoSos: any[];
  soLuongXeGiao: number = 0;
  TyLeXeGiao: number = 0;
  TyLeXeGiaoCungKy: number = 0;

  //-------- Điều kiện tìm kiếm --------------------------
  tuNgayVal: Date = new Date();
  khoiVal:string;
  khois: any[] = [];
  //------------------------------------------------------
  userGetData:string = "";
  donViSelected: string = "ALL";
  //----------------------------- Lọc đơn vị ------------------------
  danhSachDonVis: string[] = [];
  
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
  
  widthLeftRight: number;
  barHeight: number;
  danhSachDonViHeight: number;

  dieuChinhKichCo() {
    
    this.widthLeftRight = 200; // Bù trừ trái phải
    this.barHeight = 80; // Độ cao thông tin chỉ số tổng hợp
    this.danhSachDonViHeight = 40; // Khoảng cách danh sách lọc theo đơn vị với đáy
    
    var leftBarwidth = 60;
    var maginchart = 8;
    var maginchart2 = 4;

    this.cao = this.manHinhService.layChieuCao( window.innerWidth, window.innerHeight);
    this.rong = this.manHinhService.layChieuRong( window.innerWidth, window.innerHeight);

    this.barWidth = this.rong - this.widthLeftRight; // Độ rộng screen

    this.caoChart7 = this.cao - this.barHeight - this.danhSachDonViHeight + maginchart2;
    this.caoChart8 = (this.cao - this.barHeight - this.danhSachDonViHeight)/2;
    this.caoChart9 = (this.cao - this.barHeight - this.danhSachDonViHeight)/2;
    this.rongChart = (this.rong - leftBarwidth)/ 2 - maginchart;

    // this.caoChart7 = this.cao - this.dieuChinhChart;
    // this.caoChart8 = this.caoChart7/2 - 10;
    // this.caoChart9 = this.caoChart8;
    // this.rongChart = (this.rong - 100)/2 - 40;
    
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
      "CP_LogSuDungMenu", this.userGetData, "Dashboard kinh doanh 02"
    ).subscribe(t => {});

    this.dieuChinhKichCo();

    

    

    /*
    if (this.loaiManHinh == LoaiManHinh.To) {
      this.caoChart7 = this.cao - this.dieuChinhChart;
      this.caoChart8 = this.caoChart7/2 - 10;
      this.caoChart9 = this.caoChart8;
      this.rongChart = (this.rong - 100)/2 - 40;
      
   } else {
   this.caoChart7 = this.cao ;
      this.caoChart8 = this.caoChart7;
      this.caoChart9 = this.caoChart7;
      this.rongChart = this.rong;
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
    this.reportService.CP_WBI_BE_01_07(this.khoiVal,sTuNgay,"","","","",this.userGetData).subscribe(
    t=> {
      this.loadIndicatorVisible = false;
      t.forEach(t=> t.LN_Xe = t.LN_Xe/1000000);
      this.data_CP_WBI_BE_01_07 = t.filter(k=> k.Chi_tieu !== 'ALL');
      var tong =  t.filter(k=> k.Chi_tieu === 'ALL');

      this.soLuongXeGiao = tong[0].SL_Giao;
      this.TyLeXeGiao = tong[0].HTKH;
      this.TyLeXeGiaoCungKy = tong[0].So_cung_ky;

      this.danhSachDonVis = [];
      t.forEach(k=> this.danhSachDonVis.push(k.Chi_tieu));
    },
    error => {
        this.loadIndicatorVisible = false;
      notify("Lỗi dữ liệu CP_WBI_BE_01_07");
    });

    this.reportService.CP_WBI_BE_01_08(this.khoiVal,sTuNgay,"","","","",this.userGetData).subscribe(
      t=> {
        this.loadIndicatorVisible = false;
        t.forEach (t=> t.LN_Xe = t.LN_Xe/1000000);
        this.data_CP_WBI_BE_01_08_ROW = t;
        this.loadData8();
        

        //var tong =  t.filter(k=> k.Ten_Dvcs === 'ALL');
      },
      error => {
          this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_BE_01_08");
      }
      );

      this.reportService.CP_WBI_BE_01_09(this.khoiVal,sTuNgay,"","","","",this.userGetData).subscribe(
        t=> {
          this.loadIndicatorVisible = false;
          t.forEach (t=> t.LN_Xe = t.LN_Xe/1000000);
          this.data_CP_WBI_BE_01_09_ROW = t;
          this.loadData9();
      },
      error => {
          this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_BE_01_09");
      });
  }

  close() {
    this.popupVisible = false;
  }

  showFilter() {
    this.popupVisible = true;
  }

  loadData8()
  {
    this.data_CP_WBI_BE_01_08 = [];
    this.data_CP_WBI_BE_01_08 = this.data_CP_WBI_BE_01_08_ROW.filter(t=> t.Ten_dvcs == this.donViSelected);
    
  }

  loadData9()
  {
    this.data_CP_WBI_BE_01_09 = [];
    this.data_CP_WBI_BE_01_09 = this.data_CP_WBI_BE_01_09_ROW.filter(t=> t.Ten_dvcs == this.donViSelected);
    
  }

  filterDonVi(e:any) {
    this.donViSelected = e.itemData;
    this.loadData8();
    this.loadData9();
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
