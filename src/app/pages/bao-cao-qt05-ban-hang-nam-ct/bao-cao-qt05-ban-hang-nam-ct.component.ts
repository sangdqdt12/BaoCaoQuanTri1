import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Observable } from 'rxjs';
import { ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';
import { WorkingEnviroment } from 'src/app/00.Common/WorkingEnviroment';
import { LOCAL_STORAGE, SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { KeyValuePair } from 'src/app/00.Common/KeyValuePair';
import ArrayStore from 'devextreme/data/array_store';
import { ManHinhService } from 'src/app/01.Service/00.Common/man-hinh.service';


@Component({
  selector: 'app-bao-cao-qt05-ban-hang-nam-ct',
  templateUrl: './bao-cao-qt05-ban-hang-nam-ct.component.html',
  styleUrls: ['./bao-cao-qt05-ban-hang-nam-ct.component.scss']
})
export class BaoCaoQt05BanHangNamCtComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) gridDetail: DxDataGridComponent;
  elem: any;
  reportData1: Observable<any[]>;
  reportDataArr1: any[] = [];
  reportDataDetail: any[];

  tuNgayVal: Date = new Date();
  denNgayVal: Date = new Date();
  isDaiLy: boolean = false;
  isLoaiXeLo : boolean = false;
  isDaiLy01: string;
  donviVal: string = "";
  khoiVal: string;
  capVal: string;
  popupVisible: boolean = false;
  rongMacDinh: any = 80;

  cap1Select: string[] = [];

  XuatXuXes: GrpButton[];

  cap2s: string[] = ['Model'];

  userGetData: string = "";
  workEv: WorkingEnviroment;

  loadIndicatorVisible: boolean = false;
  innerWidth: any;
  popupWidth: any;
  popupHeight: any;

  barWidth: any;

  donviList: any[];

  cap1: string = "";
  cap2: string = "";
  cap3: string = "";

  chonCKD: boolean = true;
  chonCBU: boolean = true;
  chonAll: boolean = true;
  anMenuCap2: boolean = true;

  viewGG: boolean = true;
  viewK: boolean = true;
  viewT: boolean = true;

  cap1Filter: KeyValuePair[] = [];

  cap1Filter1: KeyValuePair[] = [{ key: "x1", value: "x1" }, { key: "x2", value: "x2" }];
  cap2Filter1: KeyValuePair[] = [{ key: "x1", value: "x1" }, { key: "x2", value: "x2" }];
  cap3Filter1: KeyValuePair[] = [{ key: "x1", value: "x1" }, { key: "x2", value: "x2" }];


  navBarData: any[];

  treeBoxValue: string[];

  dataSourceCap1 = new ArrayStore({
    data: this.cap1Filter1,
    key: "key"
  });



  dataSourceCap2 = new ArrayStore({
    data: this.cap2Filter1,
    key: "key"
  });

  dataSourceCap3 = new ArrayStore({
    data: this.cap3Filter1,
    key: "key"
  });


  donViCoSos: any[];
  capCbxd: any[];
  arrTrangThaiLoad: boolean[];

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

  dieuChinhKichCo(){

    this.barWidth =this.manHinhService.layChieuRong(window.innerWidth,window.innerHeight) - 250;

    this.gridHeight = this.manHinhService.layChieuCao(window.innerWidth,window.innerHeight) - 85;

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
    this.donviList = [];

    this.XuatXuXes = [
      {
        text: "CKD",
        icon: "alignleft",
        alignment: "left",
        hint: "Align left"
      },
      {
        text: "CBU",
        icon: "aligncenter",
        alignment: "center",
        hint: "Center"
      }
    ];

    this.workEv = this.storage.get('ENV');
    this.userGetData = this.workEv.UserID;

    this.reportService.GhiNhanLogSuDungMenu(
      "CP_LogSuDungMenu", this.userGetData, "QT05 - Báo cáo bán hàng năm"
    ).subscribe(t => {});

    this.loadIndicatorVisible = true;
    


    this.arrTrangThaiLoad = [false, false]

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
        this.fillData();
      }
    );


  }

  close() {
    this.popupVisible = false;
  }
  fillData() {

    var x = this.arrTrangThaiLoad.filter(t => t === false).length;
    console.log("x");
    if (x > 0) {
      console.log("chưa load xong combox");
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

    if (this.isDaiLy) {
      this.isDaiLy01 = "1";
    }
    else {
      this.isDaiLy01 = "0";
    }

    var isLoaiXeLo01 : string;

    if (this.isLoaiXeLo) {
      isLoaiXeLo01  = "1";
    }
    else {
      isLoaiXeLo01 = "0";
    }

    this.reportData1 = this.reportService.CP_WKPI_BE_05(
      this.khoiVal, this.capVal, sTuNgay, sDenNgay, "", this.donviVal, this.userGetData, isLoaiXeLo01
    );


    this.reportData1.subscribe(t => {
      this.reportDataArr1 = t;
      this.gridDetail.instance.endCustomLoading();
      this.cap1Filter = [];
      this.loadCap1();

    });

  }

  chonXuatXuOnchange(e) {
    this.cap2 = "";
    this.cap3 = "";
    this.loadCap1();

  }

  chonViewOnchange(e) {


  }

  loadCap1() {

    this.cap1Select = [];

    if (this.chonCKD == true) {
      this.cap1Select.push("CKD");
      this.loadCap2();
    }
    if (this.chonCBU == true) {
      this.cap1Select.push("CBU");
      this.loadCap2();
    }
    if (this.chonAll == true) {
      this.reportDataDetail = [];
      this.anMenuCap2 = false;
      this.reportDataDetail = this.reportDataArr1;
    }
    else {
      this.anMenuCap2 = true;
    }

  }

  loadCap2() {

    this.cap2s = [];
    //---- lấy cấp 2
    this.cap1Select.forEach(k => {
      console.log(this.reportDataArr1.filter(t => t.Ma_Kx === "" && t.Ten_kx3 === k && t.Ma_Mau === "" && t.Ten_kx2 !== ""));

      var arr = this.reportDataArr1.filter(t => t.Ma_Kx === "" && t.Ten_kx3 === k && t.Ma_Mau === "" && t.Ten_kx2 !== "");
      console.log(arr);
      arr.forEach(h => {
        //---- kiểm tra chưa có thì cho vào
        if (this.cap2s.filter(t => t == h.Ten_kx2).length == 0) {
          this.cap2s.push(h.Ten_kx2);
        }


      })
    });
    this.loadData();
  }

  loaiTonOnChang(e) {
    //this.loadData();
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

  selCap2(e) {
    this.cap2 = e.itemData;
    this.loadData();
  }

  loadData() {

    this.reportDataDetail = [];
    var data: any;


    if (this.cap1Select.length > 0 && this.cap2 === "") {
      this.cap1Select.forEach(model => {
        this.reportDataArr1.filter(t => t.Ten_kx3 === model && t.Ten_kx2 === "" && t.Ma_Kx === "" && t.Ma_Mau === "").
          forEach(k => { data = k; this.addToGridDetail(data); });


      });

    }
    else if (this.cap1Select.length > 0 && this.cap2 !== "") {
      this.cap1Select.forEach(model => {
        this.reportDataArr1.filter(t => t.Ten_kx3 === model && t.Ten_kx2 === this.cap2 && t.Ma_Mau === "").
          forEach(k => { data = k; this.addToGridDetail(data); });

      });


    }
  }

  addToGridDetail(data: any) {

    this.reportDataDetail.push(data);

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

      if (e.data.BackColor != "") {
        e.rowElement.style.backgroundColor = e.data.BackColor.toLowerCase();

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

export class Longtab {
  text: string;
}

export class DonViIndex {
  text: string;
  vitri: number;
}

export class GrpButton {
  text: string;
  icon: string;
  alignment: string;
  hint: string;
}

export class CaySanPham {
  ID: string;
  IDCha: string;
  Text: string;
}

