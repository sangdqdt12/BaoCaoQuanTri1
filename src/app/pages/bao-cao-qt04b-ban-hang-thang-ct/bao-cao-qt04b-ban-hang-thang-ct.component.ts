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
  selector: 'app-bao-cao-qt04b-ban-hang-thang-ct',
  templateUrl: './bao-cao-qt04b-ban-hang-thang-ct.component.html',
  styleUrls: ['./bao-cao-qt04b-ban-hang-thang-ct.component.scss']
})
export class BaoCaoQt04bBanHangThangCtComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) gridDetail: DxDataGridComponent;
  elem: any;
  reportData1: Observable<any[]>;
  reportDataArr1: any[] = [];
  reportDataFilter: any[] = [];
  tuNgayVal: Date = new Date();
  denNgayVal: Date = new Date();
  isDaiLy: string;
  khoiVal: string;
  capVal: string;
  popupVisible: boolean = false;
  rongMacDinh: any = 80;
  isLoaiXeLo : boolean = false;
  userGetData: string = "";
  workEv: WorkingEnviroment;

  donViCoSos: any[];
  donviList: any[];
  arrTrangThaiLoad: boolean[];
  capCbxd: any[];

  viewT = false;
  viewF = false;

  gridHeight: any;
  barWidth;
  filterModelVisible: boolean = false;
  keysSelect : string[];
  chonCKD : boolean;
  chonCBU : boolean;
  cap2s : string[];
  selectionModeValue: string[];
  selectAllModeVlaue : any;
  
  //-------------------
  selectedOpenMode: string = 'shrink';
  selectedPosition: string = 'right';
  selectedRevealMode: string = 'slide';
  isDrawerOpen: Boolean = true;
  text: string = "abcd";
  positionModes: string[] = ['left', 'right'];
  arrTabs: string[] = [];

  constructor(
    private comboxService: ComboxService,
    private reportService: ReportService,
    private manHinhService: ManHinhService,
    @Inject(DOCUMENT) private document: any,
    @Inject(SESSION_STORAGE) public storage: WebStorageService
  ) { }

  dieuChinhKichCo() {

    
    this.barWidth =this.manHinhService.layChieuRong(window.innerWidth,window.innerHeight) - 250;

    this.gridHeight = this.manHinhService.layChieuCao(window.innerWidth,window.innerHeight) -85;
    
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

    this.donViCoSos = [];

    this.workEv = this.storage.get('ENV');
    this.userGetData = this.workEv.UserID;

    this.reportService.GhiNhanLogSuDungMenu(
      "CP_LogSuDungMenu", this.userGetData, "QT04b - Báo cáo chi tiết bán hàng tháng"
    ).subscribe(t => {});

    this.arrTrangThaiLoad = [false]
 
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
    )

    this.comboxService.GetComboxFunction('VCapXemBaoCao').subscribe(
      t => {

        this.capCbxd = t;
        this.capVal = "1";
        this.fillData();
      }
    );


  }

  

  chonXuatXuOnchange (e: any)  {

  }

  close() {
    this.popupVisible = false;
  }

  closeFillModeData () {
    this.filterModelVisible = false;

  }
  fillData() {

    var x = this.arrTrangThaiLoad.filter(t => t === false).length;
    console.log("x");
    if (x > 0) {
      console.log("chưa load xong combox");
      return;
    }

    this.popupVisible = false;

    if (this.khoiVal == "0101")
      {
        this.viewT = true;
        this.viewF = false;
      }
      else
      {
        this.viewT = false;
        this.viewF = true;
      }

    var sTuNgay = this.getNgayString(this.tuNgayVal);
    var sDenNgay = this.getNgayString(this.denNgayVal);

    /*
         this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(
          this.khoiVal,this.capVal,sTuNgay,"","","cuongnt"
        );
        */



    this.gridDetail.instance.beginCustomLoading("");
    // this.reportData1 = this.reportService.CP_WKPI_RO_03_T();

    var isLoaiXeLo01 : string;

    if (this.isLoaiXeLo) {
      isLoaiXeLo01  = "1";
    }
    else {
      isLoaiXeLo01 = "0";
    }

    this.reportData1 = this.reportService.CP_WKPI_BE_04B(
      this.khoiVal, this.capVal, sTuNgay, sDenNgay, "", "", this.userGetData,isLoaiXeLo01
    );

    this.arrTabs = [];


    this.reportData1.subscribe(t => {
      t.forEach (k=> {
        if (this.arrTabs.filter(q=> q == k.Loai_ban).length == 0) {
          this.arrTabs.push(k.Loai_ban);
        }
      });

      this.reportDataArr1 = t;
      this.gridDetail.instance.endCustomLoading();
    });

  }

  chonTab (e: any) {
    var x = e.itemData;
    this.reportDataFilter = this.reportDataArr1.filter(k =>k.Loai_ban == x);

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

  showFilterModel() {
    this. filterModelVisible = true;
  }


  onRowPrepared(e) {
    // if (e.rowType == 'data' ) {
    //  // e.rowElement.style.backgroundColor =`rgb(128,255,255)`;
    //   e.rowElement.style.backgroundColor = `rgb(${e.data.BackColor.replace(/\s/g, "")})`;
    //   //console.log(e.rowElement.style.backgroundColor);
    // }

    if (e.rowType == 'data') {

      if (e.data.BackColor != "") {
        e.rowElement.style.backgroundColor = `rgb(${e.data.BackColor.replace(/\s/g, "")})`;
      }

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

