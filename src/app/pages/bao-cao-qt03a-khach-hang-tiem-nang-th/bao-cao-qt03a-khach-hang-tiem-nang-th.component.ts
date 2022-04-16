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
  selector: 'app-bao-cao-qt03a-khach-hang-tiem-nang-th',
  templateUrl: './bao-cao-qt03a-khach-hang-tiem-nang-th.component.html',
  styleUrls: ['./bao-cao-qt03a-khach-hang-tiem-nang-th.component.scss']
})
export class BaoCaoQt03aKhachHangTiemNangThComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) gridDetail: DxDataGridComponent;
  elem: any;
  reportData1: Observable<any[]>;
  reportDataArr1: any[] = [];
  tuNgayVal: Date = new Date();
  denNgayVal: Date = new Date();
  isDaiLy: string;
  khoiVal: string;
  donviVal: string = "";
  kieuXeVal: string = "";
  tinhTranKhachVal: string = "";
  nguonKhachVal: string = "";
  capVal: string;
  popupVisible: boolean = false;
  rongMacDinh: any = 80;


  popupHeigt: any = 0;

  userGetData: string = "";
  workEv: WorkingEnviroment;

  donViCoSos: any[];
  donviList: any[];
  kieuxeList: any[];
  tinhtranKhachList: any[];
  nguonKhachList: any[];
  capCbxd: any[];

  gridHeight: any;
  //-------------------
  selectedOpenMode: string = 'shrink';
  selectedPosition: string = 'right';
  selectedRevealMode: string = 'slide';
  isDrawerOpen: Boolean = true;
  text: string = "abcd";
  positionModes: string[] = ['left', 'right'];

  arrNhomName: string[];
  arrNhom: string[];
  barWidth: any;

  reportDataDetail: any[];

  arrTrangThaiLoad: boolean[];
  viewT = false;
  viewF = false;

  constructor(
    private comboxService: ComboxService,
    private reportService: ReportService,
    private manHinhService: ManHinhService,
    @Inject(DOCUMENT) private document: any,
    @Inject(SESSION_STORAGE) public storage: WebStorageService
  ) { }

  dieuChinhKichCo() {
    var height  =  this.manHinhService.layChieuCao(window.innerWidth,window.innerHeight);
    var width  =  this.manHinhService.layChieuRong(window.innerWidth,window.innerHeight);
    this.popupHeigt = height - 20;
    this.barWidth = width - 50;
    this.gridHeight = height -85;

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

    this.kieuxeList = [];
    this.tinhtranKhachList = [];
    this.nguonKhachList = [];

    this.workEv = this.storage.get('ENV');
    this.userGetData = this.workEv.UserID;

    this.reportService.GhiNhanLogSuDungMenu(
      "CP_LogSuDungMenu", this.userGetData, "QT03a - Báo cáo khách hàng tiềm năng tổng hợp"
    ).subscribe(t => {});

    this.arrTrangThaiLoad = [false, false, false, false, false]

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

    this.comboxService.GetComboxFunction('DanhMucKieuXe').subscribe(
      t => {

        t.forEach(k => {
          this.kieuxeList.push({ "ma_kx": k.ma_kx, "ten_kx": k.ten_kx })
        });
        this.arrTrangThaiLoad[2] = true;
        this.fillData();
      }
    );

    this.comboxService.GetComboxFunction('DanhMucTrangThaiKhachHang').subscribe(
      t => {

        t.forEach(k => {
          this.tinhtranKhachList.push({ "ma_ttkh": k.ma_ttkh, "ten_ttkh": k.ten_ttkh })
        });
        this.arrTrangThaiLoad[3] = true;
        this.fillData();
      }
    );

    this.comboxService.GetComboxFunction('DanhMucNguonKhachHang').subscribe(
      t => {

        t.forEach(k => {
          this.nguonKhachList.push({ "ma": k.ma, "ten": k.ten })
        });
        this.arrTrangThaiLoad[4] = true;
        this.fillData();
      }
    );

    this.comboxService.GetComboxFunction('VCapXemBaoCao').subscribe(
      t => {

        this.capCbxd = t;
        this.capVal = "1";
        this.arrTrangThaiLoad[5] = true;
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


    if (this.donviVal == null) this.donviVal = '';

    this.reportData1 = this.reportService.CP_WKPI_BE_03(
      this.khoiVal, this.capVal, sTuNgay, sDenNgay, this.kieuXeVal, this.tinhTranKhachVal, this.nguonKhachVal, "", this.donviVal, this.userGetData
    );

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



    this.reportData1.subscribe(t => {
      this.arrNhom = [];
      this.arrNhomName = [];
      this.reportDataArr1 = t;
      this.reportDataArr1.filter(t => t.Ma_So.includes('000')).forEach(k => {
        this.arrNhom.push(k.Ma_So);
        this.arrNhomName.push(k.Chi_Tieu);
      });
      this.gridDetail.instance.endCustomLoading();
      this.loadData(this.arrNhom[0]);



    });

  }

  loadData(nhomx) {
    var nhom = nhomx.substr(0, 1);
    this.reportDataDetail = [];
    this.reportDataArr1.forEach(k => {
      if (k.Ma_So.includes(nhom) && !k.Ma_So.includes('000')) {
        this.reportDataDetail.push(k);
      }
    });

  }

  chonNhom(e) {
    var x = e;
    var i = 0;
    this.arrNhomName.forEach(t => {
      if (t == e.itemData) {
        var nhom = this.arrNhom[i];
        this.loadData(nhom);
      }
      i++;

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

      if (e.data.Bold == '1') {
        e.rowElement.style.fontWeight = "bold";
      }

      if (e.data.BackColor != "") {
        //e.rowElement.style.backgroundColor = e.data.BackColor.toLowerCase();
        e.rowElement.style.backgroundColor = `rgb(${e.data.BackColor.replace(/\s/g, "")})`;
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

  onClick(e) {

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
