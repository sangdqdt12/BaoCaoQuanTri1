import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Observable } from 'rxjs';
import { ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';
import { WorkingEnviroment } from 'src/app/00.Common/WorkingEnviroment';
import { LOCAL_STORAGE, SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { ManHinhService } from 'src/app/01.Service/00.Common/man-hinh.service';

@Component({
  selector: 'app-bao-cao-qt17-hieu-qua-prm-thang',
  templateUrl: './bao-cao-qt17-hieu-qua-prm-thang.component.html',
  styleUrls: ['./bao-cao-qt17-hieu-qua-prm-thang.component.scss']
})
export class BaoCaoQt17HieuQuaPrmThangComponent implements OnInit {



  @ViewChild(DxDataGridComponent, { static: false }) gridDetail: DxDataGridComponent;
  elem: any;
  reportData1: Observable<any[]>;
  reportDataArr1: any[] = [];
  tuNgayVal: Date = new Date();
  denNgayVal: Date = new Date();
  isDaiLy: string;
  khoiVal: string;
  donviVal: string = "";
  capVal: string;
  thongTinLoc: string = "";
  popupVisible: boolean = false;
  rongMacDinh: any = 80;

  arrTrangThaiLoad: boolean[];
  
  userGetData: string = "";
  workEv: WorkingEnviroment;

  donViCoSos: any[];
  donviList: any[];
  capCbxd: any[];

  gridHeight: any;
  //-------------------
  selectedOpenMode: string = 'shrink';
  selectedPosition: string = 'right';
  selectedRevealMode: string = 'slide';
  isDrawerOpen: Boolean = true;
  text: string = "abcd";
  positionModes: string[] = ['left', 'right'];

  constructor(
    private comboxService: ComboxService,
    private reportService: ReportService,
    private manHinhService: ManHinhService,
    @Inject(DOCUMENT) private document: any,
    @Inject(SESSION_STORAGE) public storage: WebStorageService
  ) { }

  ngOnInit(): void {

    this.elem = document.documentElement;

    this.arrTrangThaiLoad = [false, false, false]

    if (this.manHinhService.canFullScreen(window.innerWidth, window.innerHeight)) {
      this.openFullscreen();
      document.addEventListener('fullscreenchange', (event) => {
        // document.fullscreenElement will point to the element that
        // is in fullscreen mode if there is one. If there isn't one,
        // the value of the property is null.
        if (document.fullscreenElement) {
          console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
          this.dieuChinhKichCo();
        } else {
          console.log('Leaving full-screen mode.');
          this.dieuChinhKichCo();
        }
      });
    }



    this.dieuChinhKichCo();
    

    this.donViCoSos = [];
    this.donviList = [];

    this.workEv = this.storage.get('ENV');
    this.userGetData = this.workEv.UserID;

    this.reportService.GhiNhanLogSuDungMenu(
      "CP_LogSuDungMenu", this.userGetData, "QT17 - Báo cáo hiệu quả Prm"
    ).subscribe(t => {});
    
    this.comboxService.GetComboxFunction('CP_DanhMucKhoi_NhomDonViCoSo_User?User=' + this.userGetData).subscribe(
      t => {
        t.forEach(k => {
          if (k.ten_nh == "TOYOTA") {

            this.donViCoSos.push({ "ma_nh": k.ma_nh, "ten_nh": "TOY" })
          } else if (k.ten_nh == "FORD") {

            this.donViCoSos.push({ "ma_nh": k.ma_nh, "ten_nh": "FORD" })
          }

        });
        if (this.donViCoSos.length > 0) {
          this.khoiVal = this.donViCoSos[0].ma_nh;
        }

        this.arrTrangThaiLoad[0] = true;
        this.fillData();
      }
    );

    this.comboxService.GetComboxFunctionUser('CP_DanhMucDonVi_User', this.userGetData).subscribe(
      t => {

        t.forEach(k => {
          this.donviList.push({ "Ma_dvcs": k.Ma_dvcs, "Ten_dvcs": k.Ten_dvcs })
        });

        if (this.donviList.length > 0) {
          this.donviVal = this.donviList[0].Ma_dvcs;
        }

        this.arrTrangThaiLoad[1] = true;
        this.fillData();
      }
    );

    this.comboxService.GetComboxFunction('VCapXemBaoCao').subscribe(
      t => {

        this.capCbxd = t;
        this.capVal = "1";
        this.arrTrangThaiLoad[2] = true;
        this.fillData();
      }
    );


  }

  dieuChinhKichCo() {

    console.log(`window size: ${window.innerWidth}x${window.innerHeight}`);


    var height = this.manHinhService.layChieuCao(window.innerWidth, window.innerHeight);
    var width = this.manHinhService.layChieuRong(window.innerWidth, window.innerHeight);
    console.log(`diplay size: ${width}x${height}`);


    this.gridHeight = height - 85;




  }

  close() {
    this.popupVisible = false;
  }

  thang1: number;
  nam1: number;
  thang2: number;
  nam2: number;


  fillData() {

    this.popupVisible = false;

    var sTuNgay = this.getNgayString(this.tuNgayVal);
    var sDenNgay = this.getNgayString(this.denNgayVal);

    /*
         this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(
          this.khoiVal,this.capVal,sTuNgay,"","","cuongnt"
        );
        */

        var x = this.arrTrangThaiLoad.filter(t => t === false).length;
        console.log("x");
        if (x > 0) {
          console.log("chưa load xong combox");
          return;
        }
    
        if (this.donviVal == null) {
          this.donviVal = "";
        } 

    this.thang1 = this.tuNgayVal.getMonth() + 1;
    this.nam1 = this.tuNgayVal.getFullYear();

    this.capVal = "";


    this.gridDetail.instance.beginCustomLoading("");
    // this.reportData1 = this.reportService.CP_WKPI_RO_03_T();


    this.reportData1 = this.reportService.CP_WKPI_CR_06(
      this.khoiVal, this.capVal,this.thang1.toString(),this.nam1.toString(), "","", this.donviVal, this.userGetData
    );


    this.reportData1.subscribe(t => {
      this.reportDataArr1 = t;
      this.gridDetail.instance.endCustomLoading();

      this.thongTinLoc = "Từ tháng: " + sTuNgay + " đến ngày: " + sDenNgay;



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
    // if (e.rowType == 'data' ) {
    //  // e.rowElement.style.backgroundColor =`rgb(128,255,255)`;
    //   e.rowElement.style.backgroundColor = `rgb(${e.data.BackColor.replace(/\s/g, "")})`;
    //   //console.log(e.rowElement.style.backgroundColor);
    // }

    if (e.rowType == 'data') {

      if (e.data.Backcolor != "") {
        //e.rowElement.style.backgroundColor = e.data.Backcolor.toLowerCase();
        e.rowElement.style.backgroundColor = `rgb(${e.data.Backcolor.replace(/\s/g, "")})`;
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
