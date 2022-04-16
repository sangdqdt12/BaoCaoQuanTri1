import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild, Input } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Observable } from 'rxjs';
import { ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';
import { WorkingEnviroment } from 'src/app/00.Common/WorkingEnviroment';
import { LOCAL_STORAGE, SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { ManHinhService } from 'src/app/01.Service/00.Common/man-hinh.service';
import { HttpClient } from '@angular/common/http';
import { RenderData } from 'devextreme-angular';
import { ChartBaseComponent } from 'src/app/01.Service/00.Common/chart-base/chart-base.component';
import { ColorDefineService } from 'src/app/01.Service/00.Common/color-define.service';


@Component({
  selector: 'app-bao-cao-tong-hop-dich-vu',
  templateUrl: './bao-cao-tong-hop-dich-vu.component.html',
  styleUrls: ['./bao-cao-tong-hop-dich-vu.component.scss']
})
export class BaoCaoTongHopDichVuComponent extends ChartBaseComponent {
  public ReportID: string = 'bao-cao-tong-hop-dich-vu-chart1';
  @ViewChild(DxDataGridComponent, { static: false }) gridDetail: DxDataGridComponent;

  @Input() dataSource;
  @Input() height = 300;
  @Input() width = 600;

  elem: any;
  reportData1: Observable<any[]>;
  reportDataArr1: any[] = [];
  tuNgayVal: Date = new Date();
  denNgayVal: Date = new Date();
  khoiVal: string;
  capVal: string;
  popupVisible: boolean = false;
  rongMacDinh: any = 80;

  userGetData: string = "";
  workEv: WorkingEnviroment;

  donViCoSos: any[];
  capCbxd: any[];

  gridHeight: any;
  chartHeight: any;
  duLieuBieuDos: DuLieuBieuDo2[];
  duLieuBieuDoDTs: DuLieuBieuDo2[];
  maSos: string[] = ['A001', 'A002'];
  //-------------------
  selectedOpenMode: string = 'shrink';
  selectedPosition: string = 'right';
  selectedRevealMode: string = 'slide';
  isDrawerOpen: Boolean = true;
  text: string = "abcd";
  positionModes: string[] = ['left', 'right'];

  loadIndicatorVisible: boolean;

  constructor(
    private manHinhService: ManHinhService,
    private comboxService: ComboxService,
    private reportService: ReportService,
    public http: HttpClient,
    @Inject(DOCUMENT) private document: any,
    @Inject(SESSION_STORAGE) public storage: WebStorageService
  ) {

    super(http);
  }

  tabClicked(bieudo: string) {
    if (bieudo = "DOANH THU") {
      this.ReportID = "bao-cao-tong-hop-dich-vu-chart1";
    }
    else if (bieudo = "") {
      this.ReportID = "bao-cao-tong-hop-dich-vu-chart2";
    }
  }

  dieuChinhKichCo() {
    const dieuChinh = 150;
    var cao = this.manHinhService.layChieuCao(window.innerWidth, window.innerHeight);
    var rong = this.manHinhService.layChieuRong(window.innerWidth, window.innerHeight);

    this.gridHeight = cao - dieuChinh;
    this.chartHeight = cao - dieuChinh;

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

    this.loadIndicatorVisible = false;
    this.donViCoSos = [];

    this.workEv = this.storage.get('ENV');
    this.userGetData = this.workEv.UserID;


    this.reportService.GhiNhanLogSuDungMenu(
      "CP_LogSuDungMenu", this.userGetData, "Báo cáo tổng hợp dịch vụ"
    ).subscribe(t => {});

    this.elem = document.documentElement;




    this.comboxService.GetComboxFunctionUser('CP_DanhMucKhoi_NhomDonViCoSo_User', this.userGetData).subscribe(
      t => {
        this.donViCoSos = [];

        t.forEach(k => {
          if (k.ten_nh == "TOYOTA") {
            this.donViCoSos.push({ "ma_nh": k.ma_nh, "ten_nh": "TOY" })
          } else if (k.ten_nh == "FORD") {
            this.donViCoSos.push({ "ma_nh": k.ma_nh, "ten_nh": "FORD" })
          }
        })
        if (this.donViCoSos.length > 0) {
          this.khoiVal = this.donViCoSos[0].ma_nh;
        }
        this.fillData();
      }
    );

    this.comboxService.GetComboxFunction('VCapXemBaoCao').subscribe(
      t => {

        this.capCbxd = t;
        this.capVal = "1";
        this.fillData();
      }
    );


  }

  viewT : boolean = false;
  viewF : boolean = false;

  close() {
    this.popupVisible = false;
  }
  fillData() {

    this.popupVisible = false;

    var sTuNgay = this.getNgayString(this.tuNgayVal);
    var sDenNgay = this.getNgayString(this.denNgayVal);


    if (this.capVal == undefined) {
      console.log("cap undefined");
      return;
    }

    if (this.khoiVal == undefined) {
      console.log("cap undefined");
      return;
    }

    if (this.capVal === "" || this.khoiVal === "") {
      return;
    }


    /*
         this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(
          this.khoiVal,this.capVal,sTuNgay,"","","cuongnt"
        );
        */



    this.gridDetail.instance.beginCustomLoading("");
    this.loadIndicatorVisible = true;
    // this.reportData1 = this.reportService.CP_WKPI_RO_03_T();


    this.reportData1 = this.reportService.CP_WKPI_RO_03(
      this.khoiVal, this.capVal, "", sTuNgay, sDenNgay, "", "", this.userGetData
    );


    this.reportData1.subscribe(t => {
      this.reportDataArr1 = t;
      this.duLieuBieuDos = [];
      this.duLieuBieuDoDTs = [];
      if (this.khoiVal == "0101") {

        this.viewT = true;
        this.viewF = false;

        this.duLieuBieuDos.push({ DonVi: "TMD", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDos.push({ DonVi: "TTX", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDos.push({ DonVi: "TIHD", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDos.push({ DonVi: "TBN", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDos.push({ DonVi: "TTS", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDos.push({ DonVi: "TPT", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDos.push({ DonVi: "Gara CD", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });


        //---- Chuyển biểu đồ
        this.reportDataArr1.forEach(t => {

          if (t.Ma_so == 'A001') { //---- trong ngày
            this.duLieuBieuDos[0].CT1 = t.TH01;
            this.duLieuBieuDos[1].CT1 = t.TH02;
            this.duLieuBieuDos[2].CT1 = t.TH03;
            this.duLieuBieuDos[3].CT1 = t.TH04;
            this.duLieuBieuDos[4].CT1 = t.TH05;
            this.duLieuBieuDos[5].CT1 = t.TH06;
            this.duLieuBieuDos[6].CT1 = t.TCD;
          } else if (t.Ma_so == 'A005') { // ----- lũy kế
            this.duLieuBieuDos[0].CT2 = t.TH01;
            this.duLieuBieuDos[1].CT2 = t.TH02;
            this.duLieuBieuDos[2].CT2 = t.TH03;
            this.duLieuBieuDos[3].CT2 = t.TH04;
            this.duLieuBieuDos[4].CT2 = t.TH05;
            this.duLieuBieuDos[5].CT2 = t.TH06;
            this.duLieuBieuDos[6].CT2 = t.TCD;
          } else if (t.Ma_so == 'A901') { // ----- kế hoạch lượt xe
            this.duLieuBieuDos[0].CT3 = t.TH01;
            this.duLieuBieuDos[1].CT3 = t.TH02;
            this.duLieuBieuDos[2].CT3 = t.TH03;
            this.duLieuBieuDos[3].CT3 = t.TH04;
            this.duLieuBieuDos[4].CT3 = t.TH05;
            this.duLieuBieuDos[5].CT3 = t.TH06;
            this.duLieuBieuDos[6].CT3 = t.TCD;
          }

          else if (t.Ma_so == 'A006') { // ----- % hoàn thành
            this.duLieuBieuDos[0].CT4 = t.TH01;
            this.duLieuBieuDos[1].CT4 = t.TH02;
            this.duLieuBieuDos[2].CT4 = t.TH03;
            this.duLieuBieuDos[3].CT4 = t.TH04;
            this.duLieuBieuDos[4].CT4 = t.TH05;
            this.duLieuBieuDos[5].CT4 = t.TH06;
            this.duLieuBieuDos[6].CT4 = t.TCD;
          }



        });


        this.duLieuBieuDoDTs.push({ DonVi: "TMD", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDoDTs.push({ DonVi: "TTX", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDoDTs.push({ DonVi: "TIHD", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDoDTs.push({ DonVi: "TBN", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDoDTs.push({ DonVi: "TTS", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDoDTs.push({ DonVi: "TPT", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDoDTs.push({ DonVi: "Gara CD", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });


        //---- Chuyển biểu đồ
        this.reportDataArr1.forEach(t => {

          if (t.Ma_so == 'A014') { //---- Doanh thu xuát hóa đơn
            this.duLieuBieuDoDTs[0].CT1 = t.TH01;
            this.duLieuBieuDoDTs[1].CT1 = t.TH02;
            this.duLieuBieuDoDTs[2].CT1 = t.TH03;
            this.duLieuBieuDoDTs[3].CT1 = t.TH04;
            this.duLieuBieuDoDTs[4].CT1 = t.TH05;
            this.duLieuBieuDoDTs[5].CT1 = t.TH06;
            this.duLieuBieuDoDTs[6].CT1 = t.TCD;
          } else if (t.Ma_so == 'A018') { // ----- Doanh thu xuát hóa đơn lỹ kế
            this.duLieuBieuDoDTs[0].CT2 = t.TH01;
            this.duLieuBieuDoDTs[1].CT2 = t.TH02;
            this.duLieuBieuDoDTs[2].CT2 = t.TH03;
            this.duLieuBieuDoDTs[3].CT2 = t.TH04;
            this.duLieuBieuDoDTs[4].CT2 = t.TH05;
            this.duLieuBieuDoDTs[5].CT2 = t.TH06;
            this.duLieuBieuDoDTs[6].CT2 = t.TCD;
          } else if (t.Ma_so == 'A902') { // ----- kế hoạch doanh thu
            this.duLieuBieuDoDTs[0].CT3 = t.TH01;
            this.duLieuBieuDoDTs[1].CT3 = t.TH02;
            this.duLieuBieuDoDTs[2].CT3 = t.TH03;
            this.duLieuBieuDoDTs[3].CT3 = t.TH04;
            this.duLieuBieuDoDTs[4].CT3 = t.TH05;
            this.duLieuBieuDoDTs[5].CT3 = t.TH06;
            this.duLieuBieuDoDTs[6].CT3 = t.TCD;
          }
          else if (t.Ma_so == 'A019') { // ----- % hoàn thành
            this.duLieuBieuDoDTs[0].CT4 = t.TH01;
            this.duLieuBieuDoDTs[1].CT4 = t.TH02;
            this.duLieuBieuDoDTs[2].CT4 = t.TH03;
            this.duLieuBieuDoDTs[3].CT4 = t.TH04;
            this.duLieuBieuDoDTs[4].CT4 = t.TH05;
            this.duLieuBieuDoDTs[5].CT4 = t.TH06;
            this.duLieuBieuDoDTs[6].CT4 = t.TCD;
          }



        });

      }
      else {

        this.viewT = false;
        this.viewF = true;

        this.duLieuBieuDos.push({ DonVi: "TLF", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDos.push({ DonVi: "TXF", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDos.push({ DonVi: "HNF", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDos.push({ DonVi: "LBF", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDos.push({ DonVi: "QNF", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDos.push({ DonVi: "BGF", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });

        //---- Chuyển biểu đồ
        this.reportDataArr1.forEach(t => {

          if (t.Ma_so == 'A001') { //---- trong ngày
            this.duLieuBieuDos[0].CT1 = t.TH01;
            this.duLieuBieuDos[1].CT1 = t.TH02;
            this.duLieuBieuDos[2].CT1 = t.TH03;
            this.duLieuBieuDos[3].CT1 = t.TH04;
            this.duLieuBieuDos[4].CT1 = t.TH05;
            this.duLieuBieuDos[5].CT1 = t.TH06;
   
          } else if (t.Ma_so == 'A005') { // ----- lũy kế
            this.duLieuBieuDos[0].CT2 = t.TH01;
            this.duLieuBieuDos[1].CT2 = t.TH02;
            this.duLieuBieuDos[2].CT2 = t.TH03;
            this.duLieuBieuDos[3].CT2 = t.TH04;
            this.duLieuBieuDos[4].CT2 = t.TH05;
            this.duLieuBieuDos[5].CT2 = t.TH06;
 
          } else if (t.Ma_so == 'A901') { // ----- kế hoạch lượt xe
            this.duLieuBieuDos[0].CT3 = t.TH01;
            this.duLieuBieuDos[1].CT3 = t.TH02;
            this.duLieuBieuDos[2].CT3 = t.TH03;
            this.duLieuBieuDos[3].CT3 = t.TH04;
            this.duLieuBieuDos[4].CT3 = t.TH05;
            this.duLieuBieuDos[5].CT3 = t.TH06;
   
          }

          else if (t.Ma_so == 'A006') { // ----- % hoàn thành
            this.duLieuBieuDos[0].CT4 = t.TH01;
            this.duLieuBieuDos[1].CT4 = t.TH02;
            this.duLieuBieuDos[2].CT4 = t.TH03;
            this.duLieuBieuDos[3].CT4 = t.TH04;
            this.duLieuBieuDos[4].CT4 = t.TH05;
            this.duLieuBieuDos[5].CT4 = t.TH06;
   
          }



        });


        this.duLieuBieuDoDTs.push({ DonVi: "TLF", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDoDTs.push({ DonVi: "TXF", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDoDTs.push({ DonVi: "HNF", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDoDTs.push({ DonVi: "LBF", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDoDTs.push({ DonVi: "QNF", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });
        this.duLieuBieuDoDTs.push({ DonVi: "BGF", CT1: 0, CT2: 0, CT3: 0, CT4: 0, CT5: 0 });

        //---- Chuyển biểu đồ
        this.reportDataArr1.forEach(t => {

          if (t.Ma_so == 'A014') { //---- Doanh thu xuát hóa đơn
            this.duLieuBieuDoDTs[0].CT1 = t.TH01;
            this.duLieuBieuDoDTs[1].CT1 = t.TH02;
            this.duLieuBieuDoDTs[2].CT1 = t.TH03;
            this.duLieuBieuDoDTs[3].CT1 = t.TH04;
            this.duLieuBieuDoDTs[4].CT1 = t.TH05;
            this.duLieuBieuDoDTs[5].CT1 = t.TH06;

          } else if (t.Ma_so == 'A018') { // ----- Doanh thu xuát hóa đơn lỹ kế
            this.duLieuBieuDoDTs[0].CT2 = t.TH01;
            this.duLieuBieuDoDTs[1].CT2 = t.TH02;
            this.duLieuBieuDoDTs[2].CT2 = t.TH03;
            this.duLieuBieuDoDTs[3].CT2 = t.TH04;
            this.duLieuBieuDoDTs[4].CT2 = t.TH05;
            this.duLieuBieuDoDTs[5].CT2 = t.TH06;
 
          } else if (t.Ma_so == 'A902') { // ----- kế hoạch doanh thu
            this.duLieuBieuDoDTs[0].CT3 = t.TH01;
            this.duLieuBieuDoDTs[1].CT3 = t.TH02;
            this.duLieuBieuDoDTs[2].CT3 = t.TH03;
            this.duLieuBieuDoDTs[3].CT3 = t.TH04;
            this.duLieuBieuDoDTs[4].CT3 = t.TH05;
            this.duLieuBieuDoDTs[5].CT3 = t.TH06;

          }
          else if (t.Ma_so == 'A019') { // ----- % hoàn thành
            this.duLieuBieuDoDTs[0].CT4 = t.TH01;
            this.duLieuBieuDoDTs[1].CT4 = t.TH02;
            this.duLieuBieuDoDTs[2].CT4 = t.TH03;
            this.duLieuBieuDoDTs[3].CT4 = t.TH04;
            this.duLieuBieuDoDTs[4].CT4 = t.TH05;
            this.duLieuBieuDoDTs[5].CT4 = t.TH06;

          }



        });

      }

      this.loadIndicatorVisible = false;

      this.gridDetail.instance.endCustomLoading();


    });

  }

  getNgayString(ngayVal: Date) {
    var nam: string;
    var thang: string;
    var ngay = "";
    var nam = ngayVal.getFullYear().toString();

    if (ngayVal.getMonth() < 9) thang = "0" + (ngayVal.getMonth() + 1).toString();
    else thang = (ngayVal.getMonth() + 1).toString();

    if (ngayVal.getDate() < 10) ngay = "0" + ngayVal.getDate().toString();
    else ngay = ngayVal.getDate().toString();

    var ngays = nam + thang + ngay;
    return ngays;

  }


  showFilter() {
    this.popupVisible = true;
  }

  onCellPrepared(e) {

  }

  onRowPrepared(e) {
    if (e.rowType == 'data') {
      // e.rowElement.style.backgroundColor =`rgb(128,255,255)`;
      e.rowElement.style.backgroundColor = `rgb(${e.data.BackColor.replace(/\s/g, "")})`;
      //console.log(e.rowElement.style.backgroundColor);
      //e.rowElement.style.fontStyle = "italic";
      //e.rowElement.style.color  = `rgb(${e.data.ForeColor.replace(/\s/g, "")})`;
    }
    if (e.data.Bold == "1") {
      e.rowElement.style.fontWeight = "bold";
      //e.rowElement.style.fontStyle = "italic";
    }

    if (e.data.Italic == "1") {
      //e.rowElement.style.fontWeight = "bold";
      e.rowElement.style.fontStyle = "italic";
    }

    if (e.data.ForeColor != "") {
      //e.rowElement.style.fontWeight = "bold";
      e.rowElement.style.color = `rgb(${e.data.ForeColor.replace(/\s/g, "")})`;
    }


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


  onContentReady(e) {
    setTimeout(() => {
      let scroll = e.component.getScrollable();
      scroll.option("onScroll", (e) => {
        console.log("scrolling");
        console.log(e);
      })
    })
  }


  onScroll(e) {
    console.log(e);
  }

}

class DuLieuBieuDo2 {
  DonVi: string;
  CT1: number;
  CT2: number;
  CT3: number;
  CT4: number;
  CT5: number;
}