import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Observable } from 'rxjs';
import { ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';

import ArrayStore from "devextreme/data/array_store";
import DataSource from "devextreme/data/data_source";
import { KeyValuePair } from 'src/app/00.Common/KeyValuePair';
import { ThisReceiver } from '@angular/compiler';
//import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { WorkingEnviroment } from 'src/app/00.Common/WorkingEnviroment';
import { LOCAL_STORAGE, SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import notify from 'devextreme/ui/notify';
import { ManHinhService } from 'src/app/01.Service/00.Common/man-hinh.service';

@Component({
  selector: 'app-bao-cao-ton-kho-chung4',
  templateUrl: './bao-cao-ton-kho-chung4.component.html',
  styleUrls: ['./bao-cao-ton-kho-chung4.component.scss']
})
export class BaoCaoTonKhoChung4Component implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) gridDetail: DxDataGridComponent;

  userGetData: string = "";
  workEv: WorkingEnviroment;

  reportData1: Observable<any[]>;
  khoiVal: string = "";
  capVal: string;
  ngayVal: Date = new Date();
  capCbxd: any[];
  donViCoSos: any[];
  reportDataDetail: any[];
  reportFormat: any[];
  rongMacDinh: any = 80;

  loadIndicatorVisible: boolean = false;
  popupVisible = false;
  filterModelVisible = false;

  reportDataArr1: any[] = [];


  XuatXuXes: GrpButton[];

  cap1: string;
  cap2: string;
  cap3: string;
  loaiTon: string;



  cap1s: string[];
  cap2s: string[] = ['Model'];
  cap3s: string[];
  cConKy: string = 'Còn ký';
  cN1: string = 'N+1';
  cN2: string = 'N+2';
  cTonKho: string = 'Tồn';
  cTonKy: string = 'Tồn còn ký';
  

  gridHeight: any;
  LoaiXems: string[];

  loaiTons: string[] = [this.cConKy, this.cN1, this.cN2, this.cTonKho, this.cTonKy];


  elem: any;


  popupWidth: any;
  popupHeight: any;

  barWidth: any;

  popupDetailVisible: boolean = false;
  cap1Select: string[] = [];
  cap2Select: string[] = [];
  cap3Select: string[] = [];



  //---------------

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


  //-------- Các biến header 
  KTarrHeader: any[] = [];
  KarrHeader: any[] = [];

  arrHeader: any[] = [];
  arrVisible: boolean[] = [];


  arrReportHeader: any[] = [];
  arrKTReportHeader: any[] = [];
  donViIndex: DonViIndex[] = [];
  chonCKD: boolean = true;
  chonCBU: boolean = true;
  chonAll: boolean = true;


  selectionModeValue: any = "all";
  selectAllModeVlaue: any = "page";

  keysSelect: string[] = [];




  constructor(
    private comboxService: ComboxService,
    private reportService: ReportService,
    private reportService2: ReportService,
    private manHinhService: ManHinhService,
    @Inject(DOCUMENT) private document: any,
    @Inject(SESSION_STORAGE) public storage: WebStorageService
  ) {


    this.LoaiXems = [this.cConKy, this.cN1, this.cN2, this.cTonKho, this.cTonKy];
    this.loaiTon = this.cConKy;





  }

  dieuChinhKichCo() {

    console.log(`window size: ${window.innerWidth}x${window.innerHeight}`);


    var height = this.manHinhService.layChieuCao(window.innerWidth, window.innerHeight);
    var width = this.manHinhService.layChieuRong(window.innerWidth, window.innerHeight);
    console.log(`diplay size: ${width}x${height}`);
    this.barWidth = width - 20 - 0.1 * width;

    this.gridHeight = height - 85;

    this.popupWidth = height - 20;
    this.popupHeight = height - 20;


  }



  ngOnInit(): void {




    this.elem = document.documentElement;



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





    this.workEv = this.storage.get('ENV');
    this.userGetData = this.workEv.UserID;
    this.loadIndicatorVisible = true;



    this.reportService.GhiNhanLogSuDungMenu(
      "CP_LogSuDungMenu", this.userGetData, "QT01 - Báo cáo tồn kho chung"
    ).subscribe(t => {});
    




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

    this.comboxService.GetComboxFunction('VCapXemBaoCao').subscribe(
      t => {
        this.capCbxd = t;
        console.log(t);
        this.capVal = "1";
        this.fillData();

      }
    );


    /*
        this.reportService2.CP_BaoCaoTonKhoChungHeader(
          "CP_WKPI_BE_01","TOYOTA","kt"
        ).subscribe(t => { 
          this.arrKTReportHeader = t; 
          this.arrKTReportHeader.forEach(element => 
            {
              this.KTarrHeader.push(element.TenCot);
            });
    
            //console.log(this.KTarrHeader);
        });
      */


    this.navBarData = [
      {
        text: "Contacts",
        icon: "user"
      }, {
        text: "Missed",
        icon: "clock",
        badge: 3
      }, {
        text: "Favorites",
        icon: "favorites"
      }
    ];

  }

  openFullscreen() {

    this.elem = document.documentElement;
    //this.elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);

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



  selCap2(e) {
    this.cap2 = e.itemData;
    this.loadData();
  }

  //------ lấy loại dữ liệu Ký tháng này , N+1, N+2
  selLoaiTon(e) {
    this.loaiTon = e.itemData;
    this.loadData();
  }




  loadData() {











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

    var F01: number;
    var F02: number;
    var F03: number;
    var F04: number;
    var F05: number;
    var F06: number;
    var F07: number;
    var F08: number;
    var F09: number;
    var F10: number;
    var F11: number;
    var F12: number;
    var F13: number;
    var F14: number;
    var F15: number;

    var H01: number;
    var H02: number;
    var H03: number;
    var H04: number;
    var H05: number;
    var H06: number;
    var H07: number;
    var H08: number;
    var H09: number;
    var H10: number;
    var H11: number;
    var H12: number;
    var H13: number;
    var H14: number;
    var H15: number;

    var K01: number;
    var K02: number;
    var K03: number;
    var K04: number;
    var K05: number;
    var K06: number;
    var K07: number;
    var K08: number;
    var K09: number;
    var K10: number;
    var K11: number;
    var K12: number;
    var K13: number;
    var K14: number;
    var K15: number;

    var KT01: number;
    var KT02: number;
    var KT03: number;
    var KT04: number;
    var KT05: number;
    var KT06: number;
    var KT07: number;
    var KT08: number;
    var KT09: number;
    var KT10: number;
    var KT11: number;
    var KT12: number;
    var KT13: number;
    var KT14: number;
    var KT15: number;


    var T01: number;
    var T02: number;
    var T03: number;
    var T04: number;
    var T05: number;
    var T06: number;
    var T07: number;
    var T08: number;
    var T09: number;
    var T10: number;
    var T11: number;
    var T12: number;
    var T13: number;
    var T14: number;
    var T15: number;

    var TK01: number;
    var TK02: number;
    var TK03: number;
    var TK04: number;
    var TK05: number;
    var TK06: number;
    var TK07: number;
    var TK08: number;
    var TK09: number;
    var TK10: number;
    var TK11: number;
    var TK12: number;
    var TK13: number;
    var TK14: number;
    var TK15: number;

    var TotalF: number;
    var TotalH: number;
    var TotalK: number;
    var TotalT: number;
    var TotalTK: number;


    dataCap1.forEach(t => {

      TotalF = 0;
      TotalH = 0;
      TotalK = 0;
      TotalT = 0;
      TotalTK = 0;

      F01 = 0;
      F02 = 0;
      F03 = 0;
      F04 = 0;
      F05 = 0;
      F06 = 0;
      F07 = 0;
      F08 = 0;
      F09 = 0;
      F10 = 0;
      F11 = 0;
      F12 = 0;
      F13 = 0;
      F14 = 0;
      F15 = 0;
      H01 = 0;
      H02 = 0;
      H03 = 0;
      H04 = 0;
      H05 = 0;
      H06 = 0;
      H07 = 0;
      H08 = 0;
      H09 = 0;
      H10 = 0;
      H11 = 0;
      H12 = 0;
      H13 = 0;
      H14 = 0;
      H15 = 0;

      K01 = 0;
      K02 = 0;
      K03 = 0;
      K04 = 0;
      K05 = 0;
      K06 = 0;
      K07 = 0;
      K08 = 0;
      K09 = 0;
      K10 = 0;
      K11 = 0;
      K12 = 0;
      K13 = 0;
      K14 = 0;
      K15 = 0;
      KT01 = 0;
      KT02 = 0;
      KT03 = 0;
      KT04 = 0;
      KT05 = 0;
      KT06 = 0;
      KT07 = 0;
      KT08 = 0;
      KT09 = 0;
      KT10 = 0;
      KT11 = 0;
      KT12 = 0;
      KT13 = 0;
      KT14 = 0;
      KT15 = 0;

      
      T01 = 0;
      T02 = 0;
      T03 = 0;
      T04 = 0;
      T05 = 0;
      T06 = 0;
      T07 = 0;
      T08 = 0;
      T09 = 0;
      T10 = 0;
      T11 = 0;
      T12 = 0;
      T13 = 0;
      T14 = 0;
      T15 = 0;

      TK01 = 0;
      TK02 = 0;
      TK03 = 0;
      TK04 = 0;
      TK05 = 0;
      TK06 = 0;
      TK07 = 0;
      TK08 = 0;
      TK09 = 0;
      TK10 = 0;
      TK11 = 0;
      TK12 = 0;
      TK13 = 0;
      TK14 = 0;
      TK15 = 0;


      temData.forEach(k => {
        if (k.Ten_kx3 == t.Ma_so && k.Ma_Kx == '' && k.Ten_kx2 !== '') {
          F01 = F01 + k.F01;
          F02 = F02 + k.F02;
          F03 = F03 + k.F03;
          F04 = F04 + k.F04;
          F05 = F05 + k.F05;
          F06 = F06 + k.F06;
          F07 = F07 + k.F07;
          F08 = F08 + k.F08;
          F09 = F09 + k.F09;
          F10 = F10 + k.F10;
          F11 = F11 + k.F11;
          F12 = F12 + k.F12;
          F13 = F13 + k.F13;
          F14 = F14 + k.F14;
          F15 = F15 + k.F15;
          H01 = H01 + k.H01;
          H02 = H02 + k.H02;
          H03 = H03 + k.H03;
          H04 = H04 + k.H04;
          H05 = H05 + k.H05;
          H06 = H06 + k.H06;
          H07 = H07 + k.H07;
          H08 = H08 + k.H08;
          H09 = H09 + k.H09;
          H10 = H10 + k.H10;
          H11 = H11 + k.H11;
          H12 = H12 + k.H12;
          H13 = H13 + k.H13;
          H14 = H14 + k.H14;
          H15 = H15 + k.H15;
          K01 = K01 + k.K01;
          K02 = K02 + k.K02;
          K03 = K03 + k.K03;
          K04 = K04 + k.K04;
          K05 = K05 + k.K05;
          K06 = K06 + k.K06;
          K07 = K07 + k.K07;
          K08 = K08 + k.K08;
          K09 = K09 + k.K09;
          K10 = K10 + k.K10;
          K11 = K11 + k.K11;
          K12 = K12 + k.K12;
          K13 = K13 + k.K13;
          K14 = K14 + k.K14;
          K15 = K15 + k.K15;

          KT01 = KT01 + k.KT01;
          KT02 = KT02 + k.KT02;
          KT03 = KT03 + k.KT03;
          KT04 = KT04 + k.KT04;
          KT05 = KT05 + k.KT05;
          KT06 = KT06 + k.KT06;
          KT07 = KT07 + k.KT07;
          KT08 = KT08 + k.KT08;
          KT09 = KT09 + k.KT09;
          KT10 = KT10 + k.KT10;
          KT11 = KT11 + k.KT11;
          KT12 = KT12 + k.KT12;
          KT13 = KT13 + k.KT13;
          KT14 = KT14 + k.KT14;
          KT15 = KT15 + k.KT15;

          T01 = T01 + k.T01;
          T02 = T02 + k.T02;
          T03 = T03 + k.T03;
          T04 = T04 + k.T04;
          T05 = T05 + k.T05;
          T06 = T06 + k.T06;
          T07 = T07 + k.T07;
          T08 = T08 + k.T08;
          T09 = T09 + k.T09;
          T10 = T10 + k.T10;
          T11 = T11 + k.T11;
          T12 = T12 + k.T12;
          T13 = T13 + k.T13;
          T14 = T14 + k.T14;
          T15 = T15 + k.T15;

          TK01 = TK01 + k.TK01;
          TK02 = TK02 + k.TK02;
          TK03 = TK03 + k.TK03;
          TK04 = TK04 + k.TK04;
          TK05 = TK05 + k.TK05;
          TK06 = TK06 + k.TK06;
          TK07 = TK07 + k.TK07;
          TK08 = TK08 + k.TK08;
          TK09 = TK09 + k.TK09;
          TK10 = TK10 + k.TK10;
          TK11 = TK11 + k.TK11;
          TK12 = TK12 + k.TK12;
          TK13 = TK13 + k.TK13;
          TK14 = TK14 + k.TK14;
          TK15 = TK15 + k.TK15;

          TotalF = TotalF + k.TotalF;
          TotalH = TotalH + k.TotalH;
          TotalK = TotalK + k.TotalK;
          TotalT = TotalT + k.TotalT;
          TotalTK = TotalTK + k.TotalTK;


        }
      });

      t.F01 = F01;
      t.F02 = F02;
      t.F03 = F03;
      t.F04 = F04;
      t.F05 = F05;
      t.F06 = F06;
      t.F07 = F07;
      t.F08 = F08;
      t.F09 = F09;
      t.F10 = F10;
      t.F11 = F11;
      t.F12 = F12;
      t.F13 = F13;
      t.F14 = F14;
      t.F15 = F15;
      t.H01 = H01;
      t.H02 = H02;
      t.H03 = H03;
      t.H04 = H04;
      t.H05 = H05;
      t.H06 = H06;
      t.H07 = H07;
      t.H08 = H08;
      t.H09 = H09;
      t.H10 = H10;
      t.H11 = H11;
      t.H12 = H12;
      t.H13 = H13;
      t.H14 = H14;
      t.H15 = H15;
      t.K01 = K01;
      t.K02 = K02;
      t.K03 = K03;
      t.K04 = K04;
      t.K05 = K05;
      t.K06 = K06;
      t.K07 = K07;
      t.K08 = K08;
      t.K09 = K09;
      t.K10 = K10;
      t.K11 = K11;
      t.K12 = K12;
      t.K13 = K13;
      t.K14 = K14;
      t.K15 = K15;
      t.KT01 = KT01;
      t.KT02 = KT02;
      t.KT03 = KT03;
      t.KT04 = KT04;
      t.KT05 = KT05;
      t.KT06 = KT06;
      t.KT07 = KT07;
      t.KT08 = KT08;
      t.KT09 = KT09;
      t.KT10 = KT10;
      t.KT11 = KT11;
      t.KT12 = KT12;
      t.KT13 = KT13;
      t.KT14 = KT14;
      t.KT15 = KT15;
      t.T01 = T01;
      t.T02 = T02;
      t.T03 = T03;
      t.T04 = T04;
      t.T05 = T05;
      t.T06 = T06;
      t.T07 = T07;
      t.T08 = T08;
      t.T09 = T09;
      t.T10 = T10;
      t.T11 = T11;
      t.T12 = T12;
      t.T13 = T13;
      t.T14 = T14;
      t.T15 = T15;

      t.TK01 = TK01;
      t.TK02 = TK02;
      t.TK03 = TK03;
      t.TK04 = TK04;
      t.TK05 = TK05;
      t.TK06 = TK06;
      t.TK07 = TK07;
      t.TK08 = TK08;
      t.TK09 = TK09;
      t.TK10 = TK10;
      t.TK11 = TK11;
      t.TK12 = TK12;
      t.TK13 = TK13;
      t.TK14 = TK14;
      t.TK15 = TK15;

      t.TotalF = TotalF;
      t.TotalH = TotalH;
      t.TotalK = TotalK;
      t.TotalT = TotalT;
      t.TotalTK = TotalTK;


    });

    // Tính tổng CKD và CBU
    dataCap1.forEach(t => {
      if (t.Ten_kx3 == 'ZZZ') {
        TotalF = 0;
        TotalH = 0;
        TotalK = 0;
        TotalT = 0;
        TotalTK = 0;

        F01 = 0;
        F02 = 0;
        F03 = 0;
        F04 = 0;
        F05 = 0;
        F06 = 0;
        F07 = 0;
        F08 = 0;
        F09 = 0;
        F10 = 0;
        F11 = 0;
        F12 = 0;
        F13 = 0;
        F14 = 0;
        F15 = 0;
        H01 = 0;
        H02 = 0;
        H03 = 0;
        H04 = 0;
        H05 = 0;
        H06 = 0;
        H07 = 0;
        H08 = 0;
        H09 = 0;
        H10 = 0;
        H11 = 0;
        H12 = 0;
        H13 = 0;
        H14 = 0;
        H15 = 0;

        K01 = 0;
        K02 = 0;
        K03 = 0;
        K04 = 0;
        K05 = 0;
        K06 = 0;
        K07 = 0;
        K08 = 0;
        K09 = 0;
        K10 = 0;
        K11 = 0;
        K12 = 0;
        K13 = 0;
        K14 = 0;
        K15 = 0;
        KT01 = 0;
        KT02 = 0;
        KT03 = 0;
        KT04 = 0;
        KT05 = 0;
        KT06 = 0;
        KT07 = 0;
        KT08 = 0;
        KT09 = 0;
        KT10 = 0;
        KT11 = 0;
        KT12 = 0;
        KT13 = 0;
        KT14 = 0;
        KT15 = 0;


        T01 = 0;
        T02 = 0;
        T03 = 0;
        T04 = 0;
        T05 = 0;
        T06 = 0;
        T07 = 0;
        T08 = 0;
        T09 = 0;
        T10 = 0;
        T11 = 0;
        T12 = 0;
        T13 = 0;
        T14 = 0;
        T15 = 0;


        TK01 = 0;
        TK02 = 0;
        TK03 = 0;
        TK04 = 0;
        TK05 = 0;
        TK06 = 0;
        TK07 = 0;
        TK08 = 0;
        TK09 = 0;
        TK10 = 0;
        TK11 = 0;
        TK12 = 0;
        TK13 = 0;
        TK14 = 0;
        TK15 = 0;


        temData.forEach(k => {
          if (
            (k.Ten_kx3 == "CKD" && k.Ma_Kx == '' && k.Ten_kx2 == '')
            ||
            (k.Ten_kx3 === "CBU" && k.Ma_Kx == '' && k.Ten_kx2 == '')
          ) {
            F01 = F01 + k.F01;
            F02 = F02 + k.F02;
            F03 = F03 + k.F03;
            F04 = F04 + k.F04;
            F05 = F05 + k.F05;
            F06 = F06 + k.F06;
            F07 = F07 + k.F07;
            F08 = F08 + k.F08;
            F09 = F09 + k.F09;
            F10 = F10 + k.F10;
            F11 = F11 + k.F11;
            F12 = F12 + k.F12;
            F13 = F13 + k.F13;
            F14 = F14 + k.F14;
            F15 = F15 + k.F15;
            H01 = H01 + k.H01;
            H02 = H02 + k.H02;
            H03 = H03 + k.H03;
            H04 = H04 + k.H04;
            H05 = H05 + k.H05;
            H06 = H06 + k.H06;
            H07 = H07 + k.H07;
            H08 = H08 + k.H08;
            H09 = H09 + k.H09;
            H10 = H10 + k.H10;
            H11 = H11 + k.H11;
            H12 = H12 + k.H12;
            H13 = H13 + k.H13;
            H14 = H14 + k.H14;
            H15 = H15 + k.H15;
            K01 = K01 + k.K01;
            K02 = K02 + k.K02;
            K03 = K03 + k.K03;
            K04 = K04 + k.K04;
            K05 = K05 + k.K05;
            K06 = K06 + k.K06;
            K07 = K07 + k.K07;
            K08 = K08 + k.K08;
            K09 = K09 + k.K09;
            K10 = K10 + k.K10;
            K11 = K11 + k.K11;
            K12 = K12 + k.K12;
            K13 = K13 + k.K13;
            K14 = K14 + k.K14;
            K15 = K15 + k.K15;

            KT01 = KT01 + k.KT01;
            KT02 = KT02 + k.KT02;
            KT03 = KT03 + k.KT03;
            KT04 = KT04 + k.KT04;
            KT05 = KT05 + k.KT05;
            KT06 = KT06 + k.KT06;
            KT07 = KT07 + k.KT07;
            KT08 = KT08 + k.KT08;
            KT09 = KT09 + k.KT09;
            KT10 = KT10 + k.KT10;
            KT11 = KT11 + k.KT11;
            KT12 = KT12 + k.KT12;
            KT13 = KT13 + k.KT13;
            KT14 = KT14 + k.KT14;
            KT15 = KT15 + k.KT15;

            T01 = T01 + k.T01;
            T02 = T02 + k.T02;
            T03 = T03 + k.T03;
            T04 = T04 + k.T04;
            T05 = T05 + k.T05;
            T06 = T06 + k.T06;
            T07 = T07 + k.T07;
            T08 = T08 + k.T08;
            T09 = T09 + k.T09;
            T10 = T10 + k.T10;
            T11 = T11 + k.T11;
            T12 = T12 + k.T12;
            T13 = T13 + k.T13;
            T14 = T14 + k.T14;
            T15 = T15 + k.T15;

            TK01 = TK01 + k.TK01;
            TK02 = TK02 + k.TK02;
            TK03 = TK03 + k.TK03;
            TK04 = TK04 + k.TK04;
            TK05 = TK05 + k.TK05;
            TK06 = TK06 + k.TK06;
            TK07 = TK07 + k.TK07;
            TK08 = TK08 + k.TK08;
            TK09 = TK09 + k.TK09;
            TK10 = TK10 + k.TK10;
            TK11 = TK11 + k.TK11;
            TK12 = TK12 + k.TK12;
            TK13 = TK13 + k.TK13;
            TK14 = TK14 + k.TK14;
            TK15 = TK15 + k.TK15;

            TotalF = TotalF + k.TotalF;
            TotalH = TotalH + k.TotalH;
            TotalK = TotalK + k.TotalK;
            TotalT = TotalT + k.TotalT;
            TotalTK = TotalTK + k.TotalTK;


          }
        });

        t.F01 = F01;
        t.F02 = F02;
        t.F03 = F03;
        t.F04 = F04;
        t.F05 = F05;
        t.F06 = F06;
        t.F07 = F07;
        t.F08 = F08;
        t.F09 = F09;
        t.F10 = F10;
        t.F11 = F11;
        t.F12 = F12;
        t.F13 = F13;
        t.F14 = F14;
        t.F15 = F15;
        t.H01 = H01;
        t.H02 = H02;
        t.H03 = H03;
        t.H04 = H04;
        t.H05 = H05;
        t.H06 = H06;
        t.H07 = H07;
        t.H08 = H08;
        t.H09 = H09;
        t.H10 = H10;
        t.H11 = H11;
        t.H12 = H12;
        t.H13 = H13;
        t.H14 = H14;
        t.H15 = H15;
        t.K01 = K01;
        t.K02 = K02;
        t.K03 = K03;
        t.K04 = K04;
        t.K05 = K05;
        t.K06 = K06;
        t.K07 = K07;
        t.K08 = K08;
        t.K09 = K09;
        t.K10 = K10;
        t.K11 = K11;
        t.K12 = K12;
        t.K13 = K13;
        t.K14 = K14;
        t.K15 = K15;
        t.KT01 = KT01;
        t.KT02 = KT02;
        t.KT03 = KT03;
        t.KT04 = KT04;
        t.KT05 = KT05;
        t.KT06 = KT06;
        t.KT07 = KT07;
        t.KT08 = KT08;
        t.KT09 = KT09;
        t.KT10 = KT10;
        t.KT11 = KT11;
        t.KT12 = KT12;
        t.KT13 = KT13;
        t.KT14 = KT14;
        t.KT15 = KT15;

        t.T01 = T01;
        t.T02 = T02;
        t.T03 = T03;
        t.T04 = T04;
        t.T05 = T05;
        t.T06 = T06;
        t.T07 = T07;
        t.T08 = T08;
        t.T09 = T09;
        t.T10 = T10;
        t.T11 = T11;
        t.T12 = T12;
        t.T13 = T13;
        t.T14 = T14;
        t.T15 = T15;

        t.TK01 = TK01;
        t.TK02 = TK02;
        t.TK03 = TK03;
        t.TK04 = TK04;
        t.TK05 = TK05;
        t.TK06 = TK06;
        t.TK07 = TK07;
        t.TK08 = TK08;
        t.TK09 = TK09;
        t.TK10 = TK10;
        t.TK11 = TK11;
        t.TK12 = TK12;
        t.TK13 = TK13;
        t.TK14 = TK14;
        t.TK15 = TK15;

        t.TotalF = TotalF;
        t.TotalH = TotalH;
        t.TotalK = TotalK;
        t.TotalT = TotalT;
        t.TotalTK = TotalTK;


      }
    });

    temData.forEach(data => this.addToGridDetail(data));


    //--- cap 2 

    /*
    if (this.cap1Select.length >0 && (this.cap2 === "" || this.cap2 == null))
    {
     this.cap1Select.forEach (model => {
       this.reportDataArr1.filter(t=> t.Ten_kx3 === model && t.Ten_kx2 === "" && t.Ma_Kx ==="" && t.Ma_Mau === "").
       forEach (k=>  {data = k; this.addToGridDetail(data);});
     });
    }
    else if (this.cap1Select.length >0 && this.cap2 !== "")
    {
      //t.Ma_Mau === ""  -- lọc mầu 
     this.cap1Select.forEach (model => {
       this.reportDataArr1.filter(t=> t.Ten_kx3 === model && 
         ((t.Ten_kx2 === this.cap2 || this.cap2 == "ALL")  )).
       forEach (k=>  {data = k; this.addToGridDetail(data);});
     });
    }
    */
  }



  addToGridDetail(data: any) {
    if (this.loaiTon == this.cConKy) {
      this.reportDataDetail.push({
        "ColTen": data.Ma_so,
        "Ma_Mau": data.Ma_Mau,
        "Col0": data.K01, "Col1": data.K02, "Col2": data.K03, "Col3": data.K04,
        "Col4": data.K05, "Col5": data.K06, "Col6": data.K07,
        "Col7": data.K08, "Col8": data.K09, "Col9": data.K10,
        "Col10": data.K11, "Col11": data.K12, "Col12": data.K13,
        "Col13": data.K14, "Col14": data.K15,
        "Tong": data.TotalK,
        "BackColor": data.BackColor,
        "Bold": data.Bold
      });

    } else if (this.loaiTon == this.cN1) {
      this.reportDataDetail.push({
        "ColTen": data.Ma_so,
        "Ma_Mau": data.Ma_Mau,
        "Col0": data.H01, "Col1": data.H02, "Col2": data.H03, "Col3": data.H04,
        "Col4": data.H05, "Col5": data.H06, "Col6": data.H07,
        "Col7": data.H08, "Col8": data.H09, "Col9": data.H10,
        "Col10": data.H11, "Col11": data.H12, "Col12": data.H13,
        "Col13": data.H14, "Col14": data.H15,
        "Tong": data.TotalH,
        "BackColor": data.BackColor,
        "Bold": data.Bold
      });
    } else if (this.loaiTon == this.cN2) {
      this.reportDataDetail.push({
        "ColTen": data.Ma_so,
        "Ma_Mau": data.Ma_Mau,
        "Col0": data.F01, "Col1": data.F02, "Col2": data.F03, "Col3": data.F04,
        "Col4": data.F05, "Col5": data.F06, "Col6": data.F07,
        "Col7": data.F08, "Col8": data.F09, "Col9": data.F10,
        "Col10": data.F11, "Col11": data.F12, "Col12": data.F13,
        "Col13": data.F14, "Col14": data.F15,
        "Tong": data.TotalF,
        "BackColor": data.BackColor,
        "Bold": data.Bold
      });
    } else if (this.loaiTon == this.cTonKho) {
      this.reportDataDetail.push({
        "ColTen": data.Ma_so,
        "Ma_Mau": data.Ma_Mau,
        "Col0": data.T01, "Col1": data.T02, "Col2": data.T03, "Col3": data.T04,
        "Col4": data.T05, "Col5": data.T06, "Col6": data.T07,
        "Col7": data.T08, "Col8": data.T09, "Col9": data.T10,
        "Col10": data.T11, "Col11": data.T12, "Col12": data.T13,
        "Col13": data.T14, "Col14": data.T15,
        "Tong": data.TotalT,
        "BackColor": data.BackColor,
        "Bold": data.Bold
      });
    } else if (this.loaiTon == this.cTonKy) {
      
      this.reportDataDetail.push({
        "ColTen": data.Ma_so,
        "Ma_Mau": data.Ma_Mau,
        "Col0": data.TK01, "Col1": data.TK02, "Col2": data.TK03, "Col3": data.TK04,
        "Col4": data.TK05, "Col5": data.TK06, "Col6": data.TK07,
        "Col7": data.TK08, "Col8": data.TK09, "Col9": data.TK10,
        "Col10": data.TK11, "Col11": data.TK12, "Col12": data.TK13,
        "Col13": data.TK14, "Col14": data.TK15,
        "Tong": data.TotalTK,
        "BackColor": data.BackColor,
        "Bold": data.Bold
      });
    }



  }


  taoMangBanDau() {
    /*
    var i = 0;
    this.reportFormat =[];
    this.arrVisible.forEach (t=> {
      this.donViIndex.push ({ text:this.KarrHeader[i], vitri:i } );
      if (t == true)
      {
        this.reportFormat.push({"Col1": this.KarrHeader[i], "Col2":0, "Col3": 0, "Col4":0, "Col5": 0,  "Col6" :0});
      }
      i ++;
    });
    */
  }





  showFilter() {
    this.popupVisible = true;
  }


  close() {
    this.popupVisible = false;
  }


  fillData() {

    if (this.khoiVal == '' || this.khoiVal === 'undefined' || typeof this.khoiVal === undefined)
      return;

    if (this.capVal == '' || this.capVal === 'undefined' || typeof this.khoiVal === undefined)
      return;
    console.log('----------- Load Data ------------');

    this.reportService.CP_BaoCaoTonKhoChungHeader(
      "CP_WKPI_BE_01", this.khoiVal, "h"
    ).subscribe(t => {

      this.arrHeader = [];
      this.arrVisible = [];

      this.arrReportHeader = t;
      this.arrReportHeader.forEach(element => {
        this.arrHeader.push(element.TenCot);
        this.arrVisible.push(element.mVisible == 'True');
      });
      this.taoMangBanDau();
      this.loadIndicatorVisible = false;
    });





    this.cap1s = [""];
    this.cap2s = [""];
    this.cap3s = [""];

    var ngays: string;

    var nam = this.ngayVal.getFullYear().toString();
    var thang = "";
    if (this.ngayVal.getMonth() < 9) thang = "0" + (this.ngayVal.getMonth() + 1).toString();
    else thang = (this.ngayVal.getMonth() + 1).toString();
    var ngay = "";
    if (this.ngayVal.getDate() < 10) ngay = "0" + this.ngayVal.getDate().toString();
    else ngay = this.ngayVal.getDate().toString();

    ngays = nam + thang + ngay;

    this.popupVisible = false;
    this.gridDetail.instance.beginCustomLoading("");
    this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(
      this.khoiVal, this.capVal, ngays, "", "", this.userGetData
    );

    this.reportData1.subscribe(t => {
      this.reportDataArr1 = t;
      this.gridDetail.instance.endCustomLoading();
      this.cap1Filter = [];
      this.loadCap1();
      //---- lấy cấp 1
      /*
      this.reportDataArr1.filter(t=> t.Ma_Kx === "" && t.Ten_kx2 === "" && t.Ma_Mau === "").
      forEach (k=> this.cap1Filter.push({key : k.Ten_kx3, value:k.Ten_kx3}));
  
      this.dataSourceCap1 = new ArrayStore({
        data: this.cap1Filter,
        key: "key"
      });
  
      console.log(this.dataSourceCap1);
      */



    });
  }






  onCellPrepared(e) {
    if (e.rowType === "data" &&
      (
        e.column.dataField === "TotalT"
        || e.column.dataField === "TotalH"
        || e.column.dataField === "TotalK"
        || e.column.dataField === "TotalF"
        || e.column.dataField === "TotalTK"

      )
    ) {
      e.cellElement.style.background = "CYAN";
    }
  }

  onRowPrepared(e) {
    //font-weight: bold;
    if (e.rowType == 'data') {
      if (e.data.Bold == "1") {
        e.rowElement.style.fontWeight = "bold";
        // e.rowElement.style.fontStyle = "italic";
      }
      if (e.data.BackColor !== "") {
        e.rowElement.style.backgroundColor = e.data.BackColor;
        //e.rowElement.style.fontWeight = "bold";

      }
      /*
      else if (e.data.BackColor == "PINK") {
        e.rowElement.style.backgroundColor = 'PINK';
        e.rowElement.style.fontWeight = "bold";
      }
      else if (e.data.BackColor == "CYAN") {
        e.rowElement.style.backgroundColor = 'CYAN';
        e.rowElement.style.fontWeight = "bold";
      }

      else if (e.data.BackColor == "GOLD") {
        e.rowElement.style.backgroundColor = 'GOLD';
        e.rowElement.style.fontWeight = "bold";
      }
      */
    }
  }



  filter() {
    this.popupDetailVisible = true;
  }

  chonXuatXuOnchange(e) {
    this.loadCap1();

  }

  loadCap1() {
    this.cap1Select = [];

    this.cap1Select.push("ZZZ");

    if (this.chonCKD == true) {
      this.cap1Select.push("CKD");
    }
    if (this.chonCBU == true) {
      this.cap1Select.push("CBU");
    }
    this.loadCap2();
  }


  loadCap2() {

    this.cap2s = [];
    this.keysSelect = [];

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

  cap2SelectChange(e) {
    var component = (e && e.component);

    this.cap2Filter1 = [];
    this.cap2s = [];


    this.cap2Select.forEach(k => {


      //this.reportDataArr1.filter(t=> t.Ten_kx3 === this.cap1 && t.Ten_kx2 ===this.cap2 && t.Ma_Mau === "").
      //forEach (k=> { if (k.Ma_Kx !== "") {this.cap3s.push(k.Ma_Kx)}})

      console.log(this.reportDataArr1.filter(t => t.Ten_kx2 === k && t.Ma_Mau === ""));

      var arr = this.reportDataArr1.filter(t => t.Ten_kx2 === k && t.Ma_Mau === "");
      console.log(arr);
      arr.forEach(h => {
        console.log(h);
        this.cap3Filter1.push({ key: h.Ma_Kx, value: h.Ma_Kx });
        this.cap2s.push(h.Ma_Kx);

      })

      this.dataSourceCap3 = new ArrayStore({
        data: this.cap3Filter1,
        key: "key"
      });

    })

  }

  loaiTonOnChang(e) {
    this.loadData();
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


  selectionChangedModel(e) {
    // this.currentData = this.listData[e.itemIndex].data;
  }

  XuatXuClick(e) {

  }

  syncTreeViewSelection(e) {

  }

  treeView_itemSelectionChanged(e) {

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
