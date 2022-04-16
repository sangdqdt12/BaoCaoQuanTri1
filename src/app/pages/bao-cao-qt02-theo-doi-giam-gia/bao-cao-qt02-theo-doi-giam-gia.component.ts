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
import notify from 'devextreme/ui/notify';
import { ManHinhService } from 'src/app/01.Service/00.Common/man-hinh.service';
import { LoaiManHinh } from 'src/app/00.Common/EnumDefine';


@Component({
  selector: 'app-bao-cao-qt02-theo-doi-giam-gia',
  templateUrl: './bao-cao-qt02-theo-doi-giam-gia.component.html',
  styleUrls: ['./bao-cao-qt02-theo-doi-giam-gia.component.scss']
})
export class BaoCaoQt02TheoDoiGiamGiaComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) gridDetail: DxDataGridComponent;
  elem: any;
  reportData1: Observable<any[]>;
  reportDataArr1: any[] = [];
  reportDataDetail: any[];

  tuNgayVal: Date = new Date();
  denNgayVal: Date = new Date();
  isDaiLy: boolean = false;
  isDaiLy01: string;
  khoiVal: string = "";
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
  innerHeight: any;
  popupWidth: any;
  popupHeight: any;
  filterModelVisible: boolean = false;
  filterVisible: boolean = false;
  selectionModeValue: any = "all";
  selectAllModeVlaue: any = "page";
  keysSelect: string[] = [];
  barWidth: any;

  loaiManHinh: LoaiManHinh;

  cap1: string = "";
  cap2: string = "";
  cap3: string = "";

  chonCKD: boolean = true;
  chonCBU: boolean = true;
  chonAll: boolean = true;
  anMenuCap2: boolean = true;

  viewGG: boolean = true;
  viewK: boolean = false;
  viewT: boolean = false;

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

  gridHeight: any;
  //-------------------
  selectedOpenMode: string = 'shrink';
  selectedPosition: string = 'right';
  selectedRevealMode: string = 'slide';
  isDrawerOpen: Boolean = true;
  text: string = "abcd";
  positionModes: string[] = ['left', 'right'];

  chon1 = "GG/xe";
  chon2 = "SL bán";
  chon3 = "Tiền/xe";

  LoaiXems: string[] = [this.chon1, this.chon2, this.chon3];
  loaiXem: string = this.chon1;

  arrviewGG: boolean[] = [];
  arrviewK: boolean[] = [];
  arrviewT: boolean[] = [];

  constructor(
    private comboxService: ComboxService,
    private reportService: ReportService,
    private manHinhService: ManHinhService,
    @Inject(DOCUMENT) private document: any,
    @Inject(SESSION_STORAGE) public storage: WebStorageService
  ) { }

  dieuChinhKichCo() {
    var height = this.manHinhService.layChieuCao(window.innerWidth, window.innerHeight);
    var width = this.manHinhService.layChieuRong(window.innerWidth, window.innerHeight);





    this.popupWidth = width - 20;
    this.popupHeight = height - 20;



    this.barWidth = width - 20 - 0.1 * width;

    this.gridHeight = height - 85;




  }

  ngOnInit(): void {

    // Chinh man hinhf

    this.elem = document.documentElement;

    if(this.manHinhService.canFullScreen(window.innerWidth,window.innerHeight)) {

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
    //----- het dieu chinh man hinh


    this.loadIndicatorVisible = true;


    this.donViCoSos = [];

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
      "CP_LogSuDungMenu", this.userGetData, "QT02 - Báo cáo theo dõi giảm giá"
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
        this.fillData();
      },
      error => { notify("Có lỗi xẩy ra") }


    );

    this.comboxService.GetComboxFunction('VCapXemBaoCao').subscribe(
      t => {

        this.capCbxd = t;
        this.capVal = "1";
        this.fillData();
      }
      ,
      error => { notify("Có lỗi xẩy ra") }
    );


  }

  close() {
    this.popupVisible = false;
  }

  arrHeader: string[];
  arrVisibleT: boolean[];
  arrVisibleGG: boolean[] = [];
  arrVisibleK: boolean[] = [];
  arrVisibleGoc: boolean[] = [];
  fillData() {

    if (this.khoiVal == '' || this.khoiVal === 'undefined')
    return;
    this.popupVisible = false;

    var sTuNgay = this.getNgayString(this.tuNgayVal);
    var sDenNgay = this.getNgayString(this.denNgayVal);

    /*
         this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(
          this.khoiVal,this.capVal,sTuNgay,"","","cuongnt"
        );
        */
    this.arrHeader = [];

    this.arrVisibleT = [];
    this.arrVisibleGG = [];
    this.arrVisibleK = [];
    this.arrVisibleGoc = [];

    this.reportService.CP_BaoCaoTonKhoChungHeader(
      "CP_WKPI_BE_02", this.khoiVal, "h"
    ).subscribe(t => {

      t.forEach(element => {
        this.arrHeader.push(element.TenCot);
        this.arrVisibleT.push(element.mVisible == 'True' && this.viewT);
        this.arrVisibleGG.push(element.mVisible == 'True' && this.viewGG);
        this.arrVisibleK.push(element.mVisible == 'True' && this.viewK);
        this.arrVisibleGoc.push(element.mVisible == 'True');
      });
    });



    this.gridDetail.instance.beginCustomLoading("");
    // this.reportData1 = this.reportService.CP_WKPI_RO_03_T();

    if (this.isDaiLy) {
      this.isDaiLy01 = "1";
    }
    else {
      this.isDaiLy01 = "0";
    }

    this.reportData1 = this.reportService.CP_WKPI_BE_02(
      this.khoiVal, this.capVal, sTuNgay, sDenNgay, this.isDaiLy01, "", "", this.userGetData
    );


    this.reportData1.subscribe(t => {
      this.reportDataArr1 = t;
      this.gridDetail.instance.endCustomLoading();
      this.cap1Filter = [];
      this.loadCap1();

    }
      ,
      error => { notify("Có lỗi xẩy ra") }
    );

  }

  chonXuatXuOnchange(e) {
    this.cap2 = "";
    this.cap3 = "";
    this.loadCap1();

  }

  chonViewOnchange(e) {

    if (this.loaiXem == this.chon1) {
      this.viewGG = true;
      this.viewK = false;
      this.viewT = false;
    }
    else if (this.loaiXem == this.chon2) {
      this.viewGG = false;
      this.viewK = true;
      this.viewT = false;
    }
    else if (this.loaiXem == this.chon3) {
      this.viewGG = false;
      this.viewK = false;
      this.viewT = true;
    }
    this.anHeader();


  }

  anHeader() {

    try {

      var i = 0;
      this.arrVisibleGoc.forEach(t => {
        this.arrVisibleGG[i] = t && this.viewGG;
        this.arrVisibleK[i] = t && this.viewK;
        this.arrVisibleT[i] = t && this.viewT;
        i = i + 1;
      });
    }
    catch (error) {
      notify("Lỗi tạo header");
    }

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
          this.keysSelect.push(h.Ten_kx2);
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
    this.anHeader();


    this.reportDataDetail = [];
    var data: any;

    var temData: any[] = [];
    var dataCap1: any[] = [];



    this.cap1Select.forEach(model => {
      this.reportDataArr1.filter(t => t.Ten_kx3 === model).
        forEach(
          k => {

            if (k.Ten_kx2 == '') {
              temData.push(k);
              dataCap1.push(k);
              //this.addToGridDetail(k);
            }
            if (this.keysSelect.includes(k.Ten_kx2)) {
              temData.push(k);
              // data = k; this.addToGridDetail(data);
            }
          }
        );
    });


    var G01: number;
    var G02: number;
    var G03: number;
    var G04: number;
    var G05: number;
    var G06: number;

    var K01: number;
    var K02: number;
    var K03: number;
    var K04: number;
    var K05: number;
    var K06: number;



    var T01: number;
    var T02: number;
    var T03: number;
    var T04: number;
    var T05: number;
    var T06: number;


    var TotalG: number;
    var TotalK: number;
    var TotalT: number;



    dataCap1.forEach(t => {

      TotalG = 0;
      TotalK = 0;
      TotalT = 0;

      G01 = 0;
      G02 = 0;
      G03 = 0;
      G04 = 0;
      G05 = 0;
      G06 = 0;

      K01 = 0;
      K02 = 0;
      K03 = 0;
      K04 = 0;
      K05 = 0;
      K06 = 0;



      T01 = 0;
      T02 = 0;
      T03 = 0;
      T04 = 0;
      T05 = 0;
      T06 = 0;



      temData.forEach(k => {
        if (k.Ten_kx3 == t.Ma_so && k.Ma_Kx == '' && k.Ten_kx2 !== '') {
          G01 = G01 + k.G01;
          G02 = G02 + k.G02;
          G03 = G03 + k.G03;
          G04 = G04 + k.G04;
          G05 = G05 + k.G05;
          G06 = G06 + k.G06;

          K01 = K01 + k.K01;
          K02 = K02 + k.K02;
          K03 = K03 + k.K03;
          K04 = K04 + k.K04;
          K05 = K05 + k.K05;
          K06 = K06 + k.K06;


          T01 = T01 + k.T01;
          T02 = T02 + k.T02;
          T03 = T03 + k.T03;
          T04 = T04 + k.T04;
          T05 = T05 + k.T05;
          T06 = T06 + k.T06;

          TotalG = TotalG + k.TotalG;
          TotalK = TotalK + k.TotalK;
          TotalT = TotalT + k.TotalT;
        }
      });

      t.G01 = G01;
      t.G02 = G02;
      t.G03 = G03;
      t.G04 = G04;
      t.G05 = G05;
      t.G06 = G06;

      t.K01 = K01;
      t.K02 = K02;
      t.K03 = K03;
      t.K04 = K04;
      t.K05 = K05;
      t.K06 = K06;

      t.T01 = T01;
      t.T02 = T02;
      t.T03 = T03;
      t.T04 = T04;
      t.T05 = T05;
      t.T06 = T06;

      t.TotalG = TotalG;
      t.TotalK = TotalK;
      t.TotalT = TotalT;


    });



    temData.forEach(data => this.addToGridDetail(data));

    /*
    this.reportDataDetail = [];
    var data: any;

    var temData: any[] = [];
    var dataCap1: any[] = [];



    this.cap1Select.forEach(model => {
      this.reportDataArr1.filter(t => t.Ten_kx3 === model).
        forEach(






          k => {

            if (k.Ten_kx2 == '') {
              temData.push(k);
              dataCap1.push(k);
              //this.addToGridDetail(k);
            }
            if (this.keysSelect.includes(k.Ten_kx2)) {
              temData.push(k);
              // data = k; this.addToGridDetail(data);
            }
          }
        );
    });

    this.reportDataDetail = [];
    var data: any;
   

   if (this.cap1Select.length >0 && this.cap2 === "")
   {
    this.cap1Select.forEach (model => {
      this.reportDataArr1.filter(t=> t.Ten_kx3 === model && t.Ten_kx2 === "" && t.Ma_Kx ==="" && t.Ma_Mau === "").
      forEach (k=>  {data = k; this.addToGridDetail(data);});
      

    });

   }
   else if (this.cap1Select.length >0 && this.cap2 !== "")
   {
    this.cap1Select.forEach (model => {
      this.reportDataArr1.filter(t=> t.Ten_kx3 === model && t.Ten_kx2 === this.cap2 && t.Ma_Mau === "" ).
      forEach (k=>  {data = k; this.addToGridDetail(data);});
      
    });


   }
   */
  }

  addToGridDetail(data: any) {

    this.reportDataDetail.push(data);

  }

  showFilter() {
    this.popupVisible = true;
  }

  showFilterModle() {
    this.filterModelVisible = true;
  }

  closeFillModeData() {
    this.filterModelVisible = false;
  }




  fillModeData() {
    this.filterModelVisible = false;
    this.loadData();
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
        //e.rowElement.style.backgroundColor = e.data.BackColor.toLowerCase();
        e.rowElement.style.backgroundColor = `rgb(${e.data.BackColor.replace(/\s/g, "")})`;
      }
      if (e.data.Bold == "1") {
        e.rowElement.style.fontWeight = "bold";
        //e.rowElement.style.fontStyle = "italic";
      }

    }

  }

  openFullscreen() {
    this.elem = document.documentElement;
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

