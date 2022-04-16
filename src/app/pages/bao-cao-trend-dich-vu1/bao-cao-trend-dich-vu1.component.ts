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
  selector: 'app-bao-cao-trend-dich-vu1',
  templateUrl: './bao-cao-trend-dich-vu1.component.html',
  styleUrls: ['./bao-cao-trend-dich-vu1.component.scss']
})
export class BaoCaoTrendDichVu1Component implements OnInit {
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
      "CP_LogSuDungMenu", this.userGetData, "Báo cáo trend dịch vụ"
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



    this.thang1 = this.tuNgayVal.getMonth() + 1;
    this.nam1 = this.tuNgayVal.getFullYear();

    this.thang2 = this.denNgayVal.getMonth() + 1;
    this.nam2 = this.denNgayVal.getFullYear();

    this.capVal = "";

    this.getTenCot();

    this.gridDetail.instance.beginCustomLoading("");
    // this.reportData1 = this.reportService.CP_WKPI_RO_03_T();


    this.reportData1 = this.reportService.CP_WKPI_TREND_RO01(
      this.khoiVal, this.capVal, "", this.thang1.toString(), this.nam1.toString(), this.thang2.toString(), this.nam2.toString(), "", this.donviVal, this.userGetData
    );


    this.reportData1.subscribe(t => {
      this.reportDataArr1 = t;
      this.gridDetail.instance.endCustomLoading();

      this.thongTinLoc = "Từ tháng: " + sTuNgay + " đến ngày: " + sDenNgay;



    });

  }

  tcol1: string; ckcol1: boolean;
  tcol2: string; ckcol2: boolean;
  tcol3: string; ckcol3: boolean;
  tcol4: string; ckcol4: boolean;
  tcol5: string; ckcol5: boolean;
  tcol6: string; ckcol6: boolean;
  tcol7: string; ckcol7: boolean;
  tcol8: string; ckcol8: boolean;
  tcol9: string; ckcol9: boolean;
  tcol10: string; ckcol10: boolean;
  tcol11: string; ckcol11: boolean;
  tcol12: string; ckcol12: boolean;
  tcol13: string; ckcol13: boolean;
  tcol14: string; ckcol14: boolean;
  tcol15: string; ckcol15: boolean;
  tcol16: string; ckcol16: boolean;
  tcol17: string; ckcol17: boolean;
  tcol18: string; ckcol18: boolean;
  tcol19: string; ckcol19: boolean;
  tcol20: string; ckcol20: boolean;
  tcol21: string; ckcol21: boolean;
  tcol22: string; ckcol22: boolean;
  tcol23: string; ckcol23: boolean;
  tcol24: string; ckcol24: boolean;
  tcol25: string; ckcol25: boolean;
  tcol26: string; ckcol26: boolean;
  tcol27: string; ckcol27: boolean;
  tcol28: string; ckcol28: boolean;
  tcol29: string; ckcol29: boolean;
  tcol30: string; ckcol30: boolean;


  getTenCot() {

    var thang: number;
    var nam: number;

    thang = this.thang1;
    nam = this.nam1;

    for (let i = 1; i <= 30; i++) {

      if (i === 1) {
        this.tcol1 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol1 = false;
        }
        else
        {
          this.ckcol1 = true;
        }
      }
      if (i === 2) {
        this.tcol2 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol2 = false;
        }
        else
        {
          this.ckcol2 = true;
        }
      }
      if (i === 3) {
        this.tcol3 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol3 = false;
        }
        else
        {
          this.ckcol3 = true;
        }
      }
      if (i === 4) {
        this.tcol4 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol4 = false;
        }
        else
        {
          this.ckcol4 = true;
        }
      }
      if (i === 5) {
        this.tcol5 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol5 = false;
        }
        else
        {
          this.ckcol5 = true;
        }
      }
      if (i === 6) {
        this.tcol6 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol6 = false;
        }
        else
        {
          this.ckcol6 = true;
        }
      }
      if (i === 7) {
        this.tcol7 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol7 = false;
        }
        else
        {
          this.ckcol7 = true;
        }
      }
      if (i === 8) {
        this.tcol8 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol8 = false;
        }
        else
        {
          this.ckcol8 = true;
        }
      }
      if (i === 9) {
        this.tcol9 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol9 = false;
        }
        else
        {
          this.ckcol9 = true;
        }
      }
      if (i === 10) {
        this.tcol10 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol10 = false;
        }
        else
        {
          this.ckcol10 = true;
        }
      }
      if (i === 11) {
        this.tcol11 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol11 = false;
        }
        else
        {
          this.ckcol11 = true;
        }
      }
      if (i === 12) {
        this.tcol12 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol12 = false;
        }
        else
        {
          this.ckcol12 = true;
        }
      }
      if (i === 13) {
        this.tcol13 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol13 = false;
        }
        else
        {
          this.ckcol13 = true;
        }
      }
      if (i === 14) {
        this.tcol14 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol14 = false;
        }
        else
        {
          this.ckcol14 = true;
        }
      }
      if (i === 15) {
        this.tcol15 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol15 = false;
        }
        else
        {
          this.ckcol15 = true;
        }
      }
      if (i === 16) {
        this.tcol16 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol16 = false;
        }
        else
        {
          this.ckcol16 = true;
        }
      }
      if (i === 17) {
        this.tcol17 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol17 = false;
        }
        else
        {
          this.ckcol17 = true;
        }
      }
      if (i === 18) {
        this.tcol18 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol18 = false;
        }
        else
        {
          this.ckcol18 = true;
        }
      }
      if (i === 19) {
        this.tcol19 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol19 = false;
        }
        else
        {
          this.ckcol19 = true;
        }
      }
      if (i === 20) {
        this.tcol20 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol20 = false;
        }
        else
        {
          this.ckcol20 = true;
        }
      }
      if (i === 21) {
        this.tcol21 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol21 = false;
        }
        else
        {
          this.ckcol21 = true;
        }
      }
      if (i === 22) {
        this.tcol22 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol22 = false;
        }
        else
        {
          this.ckcol22 = true;
        }
      }
      if (i === 23) {
        this.tcol23 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol23 = false;
        }
        else
        {
          this.ckcol23 = true;
        }
      }
      if (i === 24) {
        this.tcol24 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol24 = false;
        }
        else
        {
          this.ckcol24 = true;
        }
      }
      if (i === 25) {
        this.tcol25 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol25 = false;
        }
        else
        {
          this.ckcol25 = true;
        }
      }
      if (i === 26) {
        this.tcol26 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol26 = false;
        }
        else
        {
          this.ckcol26 = true;
        }
      }
      if (i === 27) {
        this.tcol27 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol27 = false;
        }
        else
        {
          this.ckcol27 = true;
        }
      }
      if (i === 28) {
        this.tcol28 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol28 = false;
        }
        else
        {
          this.ckcol28 = true;
        }
      }
      if (i === 29) {
        this.tcol29 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol29 = false;
        }
        else
        {
          this.ckcol29 = true;
        }
      }
      if (i === 30) {
        this.tcol30 = thang.toString() + "/" + nam.toString();
        if(thang + nam*12 > this.thang2 + this.nam2 * 12)
        {
          this.ckcol30 = false;
        }
        else
        {
          this.ckcol30 = true;
        }
      }


      thang = thang + 1;
      if (thang === 13) {
        thang = 1;
        nam = nam + 1;
      }

    }


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

