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
  selector: 'app-dashboard-dich-vu01',
  templateUrl: './dashboard-dich-vu01.component.html',
  styleUrls: ['./dashboard-dich-vu01.component.scss']
})
export class DashboardDichVu01Component implements OnInit {


  //------------- Kiểm soát giao diện -------
  loadIndicatorVisible: boolean;
 
  rongChart1: number;
  caoChart1: number;
  rongChart2: number;
  caoChart2: number;
  rongChart3: number;
  caoChart3: number;
  rongChart4: number;
  caoChart4: number;


  //--------------- 
  workEv: WorkingEnviroment;
  popupVisible: boolean;
  cao: any;
  rong: any;
  dieuChinhCao: any = 250;
  dieuChinhRong: any = 140;
  loaiManHinh: LoaiManHinh;
  barWidth: number;

  //-------- Điều kiện tìm kiếm --------------------------
  tuNgayVal: Date = new Date();
  khoiVal: string;
  khois: any[] = [];

  donVi: string = 'ALL';
  loaiHinh: string = 'ALL';
  danhSachDonVis: string[];
  danhSachLoaiHinhs: string[];
  donViCoSos: any[];

  //-------- Data report
  userGetData: string;

  CP_WBI_RO_01_01: any[];
  CP_WBI_RO_01_01_Raw: any[];
  CP_WBI_RO_01_02: any[];
  CP_WBI_RO_01_02_Raw: any[];

  CP_WBI_RO_01_03_Raw: any[];
  CP_WBI_RO_01_04_Raw: any[];
  CP_WBI_RO_01_03: any[];
  CP_WBI_RO_01_04: any[];

  luotXe: any;
  luyKe: any;
  tyLeHoanThanh : any;

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

    this.workEv = this.storage.get('ENV');
    this.userGetData = this.workEv.UserID;


  }
  

  dieuChinhKichCo(){

    var widthLeftRight = 200; // Bù trừ trái phải
    if (this.manHinhService.loaiManHinh(window.innerWidth, window.innerHeight) == LoaiManHinh.Nho)
    {

      var barHeight = 70; // Độ cao thông tin chỉ số tổng hợp
      var danhSachDonViHeight = 40 * 2; // Khoảng cách danh sách lọc theo đơn vị với đáy
      var leftBarwidth = 60;
      var maginchart = 8;

      this.cao = this.manHinhService.layChieuCao(window.innerWidth, window.innerHeight);
      this.rong = this.manHinhService.layChieuRong(window.innerWidth, window.innerHeight);

      var dieuChinhKhoangCach = 12;
      var dieuChinhChart: any = 240;

      this.barWidth = this.rong - 40;
      
      this.caoChart1 = this.cao ;
      this.rongChart1 = (this.rong - leftBarwidth) - maginchart;

      this.caoChart2 = this.caoChart1 ;
      this.rongChart2 = this.rongChart1;

      this.caoChart3 = this.caoChart2;
      this.rongChart3 = this.rongChart2;

      this.caoChart4 = this.caoChart2;
      this.rongChart4 = this.rongChart2;

    }
    else
    {

      var barHeight = 70; // Độ cao thông tin chỉ số tổng hợp
      var danhSachDonViHeight = 40 * 2; // Khoảng cách danh sách lọc theo đơn vị với đáy
      var leftBarwidth = 60;
      var maginchart = 8;

      this.cao = this.manHinhService.layChieuCao(window.innerWidth, window.innerHeight);
      this.rong = this.manHinhService.layChieuRong(window.innerWidth, window.innerHeight);

      var dieuChinhKhoangCach = 12;
      var dieuChinhChart: any = 240;

      this.barWidth = this.rong - 40;
      
      this.caoChart1 = this.cao - barHeight - danhSachDonViHeight;
      this.rongChart1 = (this.rong - leftBarwidth)/2 - maginchart;

      this.caoChart2 = (this.caoChart1 - dieuChinhKhoangCach)/3;
      this.rongChart2 = this.rongChart1;

      this.caoChart3 = this.caoChart2;
      this.rongChart3 = this.rongChart2;

      this.caoChart4 = this.caoChart2;
      this.rongChart4 = this.rongChart2;
    }
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
        "CP_LogSuDungMenu", this.userGetData, "Dashboard dịch vụ 01"
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

  loadServeData() {
    this.popupVisible = false;
    var sTuNgay = this.dateTimeHelperService.dateToString(this.tuNgayVal);
    this.reportService.CP_WBI_RO_01_01(this.khoiVal, sTuNgay, "", "", "", "", this.userGetData).subscribe(
      t => {
        this.danhSachDonVis = [];
        this.danhSachLoaiHinhs = [];
        this.loadIndicatorVisible = false;
        this.CP_WBI_RO_01_01_Raw = t;
        

        this.loadData1();



        t.filter(k => k.Ten_Lh === this.loaiHinh).forEach(q => {
          this.danhSachDonVis.push(q.Ten_Dvcs);
        });
        
        var tenLoc = t[0].Ten_Dvcs;

        t.filter(k => k.Ten_Dvcs === tenLoc).forEach(q => {
          this.danhSachLoaiHinhs.push(q.Ten_Lh);
        });

        //var tong =  t.filter(k=> k.Ten_Dvcs === 'ALL');
      },
      error => {
        this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_RO_01_01");
      }
    );


    this.reportService.CP_WBI_RO_01_02(this.khoiVal, sTuNgay, "", "", "", "", this.userGetData).subscribe(
      t => {

        this.CP_WBI_RO_01_02_Raw = t;
        this.loadData2();
      },
      error => {
        this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_RO_01_02");
      }
    );
    this.reportService.CP_WBI_RO_01_03(this.khoiVal, sTuNgay, "", "", "", "", this.userGetData).subscribe(
      t => {

        this.CP_WBI_RO_01_03_Raw = t;
        this.loadData3();
      },
      error => {
        this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_RO_01_03");
      }
    );

    this.reportService.CP_WBI_RO_01_04(this.khoiVal, sTuNgay, "", "", "", "", this.userGetData).subscribe(
      t => {

        this.CP_WBI_RO_01_04_Raw = t;
        this.loadData4();
      },
      error => {
        this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu CP_WBI_RO_01_04");
      }
    );




  }


  close() {
    this.popupVisible = false;
  }

  loadData1() {
    this.CP_WBI_RO_01_01 = this.CP_WBI_RO_01_01_Raw.filter(k => k.Ten_Lh === this.loaiHinh && k.Ten_Dvcs !== 'ALL');
    var x =  this.CP_WBI_RO_01_01_Raw.filter(k => k.Ten_Lh === 'ALL' && k.Ten_Dvcs === this.donVi);

    
    this.luyKe = x[0].Mo_lenh_lk;
    this.tyLeHoanThanh = x[0].TyLe_HTKH;

  }

  loadData2() {
    this.CP_WBI_RO_01_02 = this.CP_WBI_RO_01_02_Raw.filter(k => k.Ten_Lh === this.loaiHinh && k.Ten_Dvcs === this.donVi);
    var x =  this.CP_WBI_RO_01_02_Raw.filter(k => k.Ten_Lh === 'ALL' && k.Ten_Dvcs === this.donVi);
    this.luotXe = x[x.length -1].So_Luong;
  }

  loadData3() {
    this.CP_WBI_RO_01_03 = this.CP_WBI_RO_01_03_Raw.filter(k => k.Ten_Lh === this.loaiHinh && k.Ten_Dvcs === this.donVi);
  }

  loadData4() {
    this.CP_WBI_RO_01_04 = this.CP_WBI_RO_01_04_Raw.filter(k => k.Ten_Lh === this.loaiHinh && k.Ten_Dvcs === this.donVi);
  }

  showFilter() {
    this.popupVisible = true;
  }



  filterDonVi(e: any) {
    this.donVi = e.itemData;
    this.loadData1();
    this.loadData2();
    this.loadData3();
    this.loadData4();


  }

  filterLoaiHinh(e: any) {
    this.loaiHinh = e.itemData;
    this.loadData1();
    this.loadData2();
    this.loadData3();
    this.loadData4();
  }
}


