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
  selector: 'app-dashboard-kinh-doanh04',
  templateUrl: './dashboard-kinh-doanh04.component.html',
  styleUrls: ['./dashboard-kinh-doanh04.component.scss']
})
export class DashboardKinhDoanh04Component implements OnInit {

  

  TongDoanhThuNoiThat: any = 0;
  TyLeKhaiThacNoiThat: any = 0;

  TongDoanhThuBaoHiem: any = 0;
  TyLeKhaiThacBaoHiem: any = 0;
  TyLeTaiTucBaoHiem: any = 0;

  DTNoiThatTrenXeLK: any = 0;
  NoiThatKhuyenMai: any = 0;
  NoiThatBanNgoai: any = 0;

  DTBaoHiemTrenXe: any = 0;
  BaoHiemKhuyenMai: any = 0;
  BaoHiemBanLe: any = 0;
  CongNoTren3Thang: any = 0;
  CongNoTren6Thang: any = 0;
  



  data_CP_WBI_BE_01_13 : any[];
  data_CP_WBI_BE_01_13_ROW: any[];
  data_CP_WBI_BE_01_16 : any[];
  data_CP_WBI_BE_01_16_ROW : any[];
  data_CP_WBI_BE_01_18 : any[];
  data_CP_WBI_BE_01_18_ROW : any[];
  data_CP_WBI_BE_01_14 : any[];
  data_CP_WBI_BE_01_14_ROW : any[];
  data_CP_WBI_BE_01_17 : any[];
  data_CP_WBI_BE_01_17_ROW : any[];

  data_CP_WBI_BE_01_15 : any[];
  data_CP_WBI_BE_01_15_ROW : any[];

  data_CP_WBI_BE_01_08_ROW : any[];
  data_CP_WBI_BE_01_09_ROW : any[];

  dataSource15 : any[];
  width15: any;
  XeTFS: any;
  donViCoSos: any[];
 

  workEv:WorkingEnviroment;
  popupVisible: boolean;
  cao: any;
  rong: any;
  loaiManHinh: LoaiManHinh;


  caoChart10 : any;
  rongChart10 : any;
  caoChart11 : any;
  rongChart11 : any;
  caoChart12 : any;
  rongChart12 : any;

  caoChart13 : any;
  rongChart13 : any;

  caoChart16 : any;
  rongChart16 : any;

  caoChart15 : any;

  

  dieuChinhChart :any = 140;
  loadIndicatorVisible: boolean;
  barWidth: number;


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
  elem: any;
  
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

  width14 : number;

  dieuChinhKichCo () {

    var widthLeftRight = 200; // Bù trừ trái phải
    var barHeight = 70; // Độ cao thông tin chỉ số tổng hợp
    var danhSachDonViHeight = 40; // Khoảng cách danh sách lọc theo đơn vị với đáy
    var leftBarwidth = 60;
    var maginchart = 8;

    this.cao = this.manHinhService.layChieuCao(window.innerWidth, window.innerHeight);
    this.rong = this.manHinhService.layChieuRong(window.innerWidth, window.innerHeight);

    this.barWidth =  this.rong -200;

    this.caoChart13 = (this.cao - barHeight - danhSachDonViHeight) / 2;
    this.caoChart16 = (this.cao - barHeight - danhSachDonViHeight) / 2;

    this.caoChart15 = this.caoChart13 - 46;

    this.rongChart13 = (this.rong - leftBarwidth)/ 2 - maginchart;
    this.rongChart16 = (this.rong - leftBarwidth)/ 2 - maginchart;
    
    this.width15 =  (this.rong - leftBarwidth)/ 4 - 20;
    this.width14 =  (this.rong - leftBarwidth)/ 4 - 20;
  
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
      "CP_LogSuDungMenu", this.userGetData, "Dashboard kinh doanh 04"
    ).subscribe(t => {});

    this.dieuChinhKichCo();

    

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
   
    this.reportService.CP_WBI_BE_01_13(this.khoiVal,sTuNgay,"","","","",this.userGetData).subscribe(
      t=> {
        this.loadIndicatorVisible = false;
        this.data_CP_WBI_BE_01_13_ROW = t;
        this.loadData13();
        

        //var tong =  t.filter(k=> k.Ten_Dvcs === 'ALL');
      },
      error => {
          this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_BE_01_13");
      }
      );

      this.reportService.CP_WBI_BE_01_15(this.khoiVal,sTuNgay,"","","","",this.userGetData).subscribe(
        t=> {
          this.loadIndicatorVisible = false;
          this.data_CP_WBI_BE_01_15_ROW = t;
          this.loadData15();
          
  
          //var tong =  t.filter(k=> k.Ten_Dvcs === 'ALL');
        },
        error => {
            this.loadIndicatorVisible = false;
          notify("Lỗi dữ liệu CP_WBI_BE_01_13");
        }
        );

      this.reportService.CP_WBI_BE_01_16(this.khoiVal,sTuNgay,"","","","",this.userGetData).subscribe(
        t=> {
          this.loadIndicatorVisible = false;
          this.data_CP_WBI_BE_01_16_ROW = t;
          this.data_CP_WBI_BE_01_16 = this.data_CP_WBI_BE_01_16_ROW.filter(t=> t.Chi_tieu !== 'ALL');
          this.loadData16_2();
          
          
          
  
          
        },
        error => {
            this.loadIndicatorVisible = false;
          notify("Lỗi dữ liệu CP_WBI_BE_01_06");
        }
        );

    this.reportService.CP_WBI_BE_01_18(this.khoiVal,sTuNgay,"","","","",this.userGetData).subscribe(
    t=> {
      this.loadIndicatorVisible = false;
      this.data_CP_WBI_BE_01_18_ROW = t;
      this.loadData18();
    },
    error => {
        this.loadIndicatorVisible = false;
      notify("Lỗi dữ liệu data_CP_WBI_BE_01_10");
    });

    this.reportService.CP_WBI_BE_01_14(this.khoiVal,sTuNgay,"","","","",this.userGetData).subscribe(
      t=> {
        this.loadIndicatorVisible = false;
        this.data_CP_WBI_BE_01_14_ROW = t;
        this.loadData14();
        

        //var tong =  t.filter(k=> k.Ten_Dvcs === 'ALL');
      },
      error => {
          this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_BE_01_14");
      }
      );

      this.reportService.CP_WBI_BE_01_17(this.khoiVal,sTuNgay,"","","","",this.userGetData).subscribe(
        t=> {
          this.danhSachDonVis = [];
          this.loadIndicatorVisible = false;
          this.data_CP_WBI_BE_01_17_ROW = t;
          this.loadData17();

          t.forEach(k=> this.danhSachDonVis.push(k.Chi_tieu));
      },
      error => {
          this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_BE_01_17");
      });
  }

  close() {
    this.popupVisible = false;
  }

  showFilter() {
    this.popupVisible = true;
  }

  loadData14()
  {
    var x =  this.data_CP_WBI_BE_01_14_ROW.filter(k => k.Chi_tieu === this.donViSelected);

    
    this.DTNoiThatTrenXeLK = x[0].DT_NT_Xe;
    this.NoiThatKhuyenMai = x[0].DT_NT_KM;
    this.NoiThatBanNgoai = x[0].DT_NT_XeNgoai;
    
  }

  loadData17()
  {
    var x =  this.data_CP_WBI_BE_01_17_ROW.filter(k => k.Chi_tieu === this.donViSelected);

    
    this.DTBaoHiemTrenXe = x[0].DT_BaoHiem;
    this.BaoHiemKhuyenMai = x[0].DT_BaoHiem_KM;
    this.BaoHiemBanLe = x[0].DT_BaoHiem_BL;
    
  }

  loadData18()
  {
    var x =  this.data_CP_WBI_BE_01_18_ROW.filter(k => k.Chi_tieu === this.donViSelected);

    
    this.CongNoTren3Thang = x[0].CongNo_3T;
    this.CongNoTren6Thang = x[0].CongNo_6T;
   
  }

  loadData13()
  {
    this.data_CP_WBI_BE_01_13 = [];
    this.data_CP_WBI_BE_01_13 = this.data_CP_WBI_BE_01_13_ROW.filter(t=> t.Chi_tieu !== 'ALL');
    this.loadData13_2();
  }

  loadData15()
  {
    this.data_CP_WBI_BE_01_15 = [];
    this.data_CP_WBI_BE_01_15 = this.data_CP_WBI_BE_01_15_ROW.filter(t=> t.Ten_Dvcs == this.donViSelected && t.Chi_tieu !== "SL TFS" && t.Chi_tieu !== "SL Xe bán" );

    var x =  this.data_CP_WBI_BE_01_15_ROW.filter(k => k.Ten_Dvcs === this.donViSelected && k.Chi_tieu === "SL TFS");
    this.XeTFS = x[0].So_Luong;

  }
  

  loadData13_2() {
    var x =  this.data_CP_WBI_BE_01_13_ROW.filter(k => k.Chi_tieu === this.donViSelected);
    this.TongDoanhThuNoiThat = x[0].DT_NoiThat;
    this.TyLeKhaiThacNoiThat = x[0].Ty_le_KhaiThac;
  }

  loadData16_2()
  {
    var x =  this.data_CP_WBI_BE_01_16_ROW.filter(k => k.Chi_tieu === this.donViSelected);

    this.TongDoanhThuBaoHiem = x[0].DT_BaoHiem;
    this.TyLeKhaiThacBaoHiem = x[0].Ty_le_KhaiThac;
    this.TyLeTaiTucBaoHiem = x[0].Ty_le_TaiTung;

  }

  loadData16()
  {
    this.data_CP_WBI_BE_01_16 = [];
    this.loadData16_2();


  }


  

  filterDonVi(e:any) {

    
    this.donViSelected = e.itemData;
    this.loadData13_2() ;
    this.loadData16_2() ;

    //this.loadData13();
    this.loadData17();
    this.loadData14();
    this.loadData18();
    this.loadData15();
   // this.loadData16();
    
  }

}

