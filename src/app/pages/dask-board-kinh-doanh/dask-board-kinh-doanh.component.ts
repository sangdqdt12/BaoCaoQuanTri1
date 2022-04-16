import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { LoaiManHinh } from 'src/app/00.Common/EnumDefine';
import { WorkingEnviroment } from 'src/app/00.Common/WorkingEnviroment';
import { ManHinhService } from 'src/app/01.Service/00.Common/man-hinh.service';
import { ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';
import { isBuffer } from 'util';
import { DateTimeHelperService } from 'src/app/01.Service/00.Common/date-time-helper.service';

import { TestmdModule } from '../../testmd/testmd.module'

@Component({
  selector: 'app-dask-board-kinh-doanh',
  templateUrl: './dask-board-kinh-doanh.component.html',
  styleUrls: ['./dask-board-kinh-doanh.component.scss']
})
export class DaskBoardKinhDoanhComponent implements OnInit {

  XeKH: number;
  XeCK: number;

  data_CP_WBI_BE_01_01: DuLieuBieuDo[];

  data_CP_WBI_BE_01_02: any[];
  data_CP_WBI_BE_01_02_Row: any[];

  data_CP_WBI_BE_01_03: DuLieuBieuDo[];
  data_CP_WBI_BE_01_03Row: any[];

  data_CP_WBI_BE_01_04: DuLieuBieuDo[];
  data_CP_WBI_BE_01_05: any[];
  data_CP_WBI_BE_01_05_Row: any[];

  data_CP_WBI_BE_01_06: any[];




  popupVisible: boolean;
  loadIndicatorVisible: boolean;
  tuNgayVal: Date = new Date();

  khoiVal: string;
  khois: any[] = [];
  userGetData: string = "";
  workEv: WorkingEnviroment;
  donViCoSos: any[];

  rongChart: any;
  rongChart2: any;
  dieuChinhChart: any = 140;
  barWidth: number;
  chartWith: any;
  chartHeight: any;
  widthLeftRight: any;
  barHeight: number;
  danhSachDonViHeight: number;

  cao: any;
  rong: any;
  loaiManHinh: LoaiManHinh;

  donViList: any[] = [];
  donViTabs: string[] = [];
  donViXemBaoCao: string = "";

  TongXeKy: number = 0;
  TongXeKyLuyKe: number = 0;
  TyLeKeHoach: number = 0;

  LoiNhuanXeKy: number = 0;
  XeGiao: number = 0;
  TyLeXeGiao: number = 0;

  danhSachDonVis: string[] = [];
  donViSelected: string = 'ALL';
  elem: any;

  mau1 = "black";
  mau2 = "red";

  constructor(
    private comboxService: ComboxService,
    private reportService: ReportService,
    private manHinhService: ManHinhService,
    private dateTimeHelperService: DateTimeHelperService,
    @Inject(DOCUMENT) private document: any,
    @Inject(SESSION_STORAGE) public storage: WebStorageService

  ) {
    this.XeKH = 200;
    this.XeCK = 100;
  }


  dieuChinhKichCo(): void {

    this.widthLeftRight = 200; // Bù trừ trái phải
    this.barHeight = 70; // Độ cao thông tin chỉ số tổng hợp
    this.danhSachDonViHeight = 40; // Khoảng cách danh sách lọc theo đơn vị với đáy
    var leftBarwidth = 60;
    var maginchart = 8;
    this.cao = this.manHinhService.layChieuCao(window.innerWidth, window.innerHeight);
    this.rong = this.manHinhService.layChieuRong(window.innerWidth, window.innerHeight);

    if(this.manHinhService.loaiManHinh(window.innerWidth, window.innerHeight) == LoaiManHinh.Nho)
    {
      this.chartWith = (this.rong - leftBarwidth) - maginchart; // Động rộng 1 biểu đồ
      this.chartHeight = this.cao   ; // Chiều cao 1 biểu đồ
      this.barWidth = this.rong - this.widthLeftRight; // Độ rộng screen
  
    }
    else {
      this.chartWith = (this.rong - leftBarwidth)/ 2 - maginchart; // Động rộng 1 biểu đồ
      this.chartHeight = (this.cao - this.barHeight - this.danhSachDonViHeight) / 2; // Chiều cao 1 biểu đồ
      this.barWidth = this.rong - this.widthLeftRight; // Độ rộng screen
  
    }

 


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



    this.dieuChinhKichCo();


    // this.barWidth = window.innerWidth - 20;
    // if(window.innerWidth  > 1200){
    //   this.chartWith = (window.innerWidth - 300)/2;
    // }
    // else {
    //   this.chartWith = window.innerWidth - 30;
    // }

    // if(window.innerHeight > 600){
    //   this.chartHeight = (window.innerHeight - 300)/2;
    // }


    this.workEv = this.storage.get('ENV');
    this.userGetData = this.workEv.UserID;

    this.reportService.GhiNhanLogSuDungMenu(
      "CP_LogSuDungMenu", this.userGetData, "Dashboard kinh doanh 01"
    ).subscribe(t => {});

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
        this.fillData();
      }
    );

    /*
    this.comboxService.GetComboxFunction('DanhMucDonViCoSo').subscribe(
     t => {
       this.donViTabs = [];
       t.forEach (k=> {
         this.donViList.push ({"Ma_dvcs":k.Ma_dvcs ,"Ten_dvcs":k.Ten_dvcs});
         this.donViTabs.push(k.Ma_dvcs);
       });
       this.fillData();
     }
    );
    */

  }

  showFilter() {
    this.popupVisible = true;
  }

  fillData() {

    this.popupVisible = false;

    this.data_CP_WBI_BE_01_01 = [];

    if (this.khoiVal == undefined) {
      console.log("cap undefined");
      return;
    }

    this.loadIndicatorVisible = true;
    var sTuNgay = this.dateTimeHelperService.dateToString(this.tuNgayVal);
    console.log(sTuNgay);
    this.reportService.CP_WBI_BE_01_01(this.khoiVal, sTuNgay, "", "", "", "", this.userGetData).subscribe(
      t => {
        this.loadIndicatorVisible = false;
        var x = t;

        this.data_CP_WBI_BE_01_01 = t.filter(k => k.Ten_Dvcs !== 'ALL');

        var tong = t.filter(k => k.Ten_Dvcs === 'ALL');
        this.TongXeKy = tong[0].Xe_Ky;
        this.TongXeKyLuyKe = tong[0].Xe_Ky_Luy_Ke;
        this.TyLeKeHoach = tong[0].Htkh_Xe_Ky;
        this.danhSachDonVis = [];
        t.forEach(k => this.danhSachDonVis.push(k.Ten_Dvcs));
      },
      error => {
        this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_BE_01_01");
      }
    );



    this.reportService.CP_WBI_BE_01_02(this.khoiVal, sTuNgay, "", "", "", "", this.userGetData).subscribe(
      t => {
        this.loadIndicatorVisible = false;




        this.data_CP_WBI_BE_01_02_Row = t;
        this.data_CP_WBI_BE_01_02_Row.forEach(k => { k.LN_XE_CWD = k.LN_XE_CWD / 1000000; });
        this.loadData2();



      },
      error => {
        this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_BE_01_02");
      }
    );

    this.reportService.CP_WBI_BE_01_03(this.khoiVal, sTuNgay, "", "", "", "", this.userGetData).subscribe(
      t => {
        this.loadIndicatorVisible = false;
        this.data_CP_WBI_BE_01_03 = t;
        this.data_CP_WBI_BE_01_03.forEach(k => { k.CT3 = k.CT3 / 1000000; });

      },
      error => {
        this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_BE_01_03");
      }
    );

    this.reportService.CP_WBI_BE_01_04(this.khoiVal, sTuNgay, "", "", "", "", this.userGetData).subscribe(
      t => {
        this.loadIndicatorVisible = false;

        this.data_CP_WBI_BE_01_04 = t.filter(k => k.Ten_Dvcs !== 'ALL');

      },
      error => {
        this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_BE_01_04");
      }
    );

    this.reportService.CP_WBI_BE_01_05(this.khoiVal, sTuNgay, "", "", "", "", this.userGetData).subscribe(
      t => {
        this.loadIndicatorVisible = false;
        this.data_CP_WBI_BE_01_05_Row = t;
        this.data_CP_WBI_BE_01_05_Row.forEach(k => { k.Ln_Tren_Xe_CWD = k.Ln_Tren_Xe_CWD / 1000000; });
        this.loadData5();
      },
      error => {
        this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_BE_01_05");
      }
    );



    this.reportService.CP_WBI_BE_01_06(this.khoiVal, sTuNgay, "", "", "", "", this.userGetData).subscribe(
      t => {
        this.loadIndicatorVisible = false;
        this.data_CP_WBI_BE_01_06 = t;

      },
      error => {
        this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_BE_01_06");
      }
    );


  }



  loadTheoDonVi() {
    //conKyLenBieuDos
    // this.conKyRowDatas.forEach(t=> {

    // });
  }




  close() {
    this.popupVisible = false;
  }


  loadData5() {
    this.data_CP_WBI_BE_01_05 = [];
    this.data_CP_WBI_BE_01_05 = this.data_CP_WBI_BE_01_05_Row.filter(t => t.Ten_dvcs == this.donViSelected);

  }

  loadData2() {
    this.data_CP_WBI_BE_01_02 = [];
    this.data_CP_WBI_BE_01_02 = this.data_CP_WBI_BE_01_02_Row.filter(t => t.Ten_dvcs == this.donViSelected);

  }

  filterDonVi(e: any) {
    this.donViSelected = e.itemData;
    this.loadData5();
    this.loadData2();
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


class DuLieuBieuDo {
  DonVi: string;
  CT1: number;
  CT2: number;
  CT3: number;
  CT4: number;
}
