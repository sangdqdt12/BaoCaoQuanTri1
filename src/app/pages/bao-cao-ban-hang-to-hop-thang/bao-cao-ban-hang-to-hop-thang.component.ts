import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { IsLoadingService } from '@service-work/is-loading';

import { DxDataGridComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { Observable } from 'rxjs';
import { WorkingEnviroment } from 'src/app/00.Common/WorkingEnviroment';
import { DateTimeHelperService } from 'src/app/01.Service/00.Common/date-time-helper.service';
import { ManHinhService } from 'src/app/01.Service/00.Common/man-hinh.service';
import { ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';



@Component({
  selector: 'app-bao-cao-ban-hang-to-hop-thang',
  templateUrl: './bao-cao-ban-hang-to-hop-thang.component.html',
  styleUrls: ['./bao-cao-ban-hang-to-hop-thang.component.scss']
})
export class BaoCaoBanHangToHopThangComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) gridDetail: DxDataGridComponent;
  popupVisible = false;
  donViCoSos: any[];
  khoiVal: string;
  navBarData: any[];
  reportDataDetail: any[];
  reportDiplay: any[];
  rongMacDinh: any = 80;
  gridHeight: any = 100;

  arrHeader: any[] = [];
  arrVisible: boolean[] = [];
  arrVisibleGoc: boolean[] = [];
  cap1Val: string;
  cap2Val: string;

  cap2s: string[] = ['Model', 'x2'];

  ngayVal: Date = new Date();
  tuNgayVal: Date = new Date();
  denNgayVal: Date = new Date();
  barWidth: any;
  elem: any;
  capCbxd: any[];
  capVal: string;

  menu: any[];
  isLoadingOber: Observable<boolean>;
  isLoading: boolean;

  theoDonVi: boolean = true;
  theoTuan: boolean = false;

  userGetData: string = "";
  workEv: WorkingEnviroment;
  

  constructor(
    public isLoadingService: IsLoadingService,
    private comboxService: ComboxService,
    private reportService: ReportService,
    private dateTimeHelper: DateTimeHelperService,
    private manHinhService: ManHinhService,
    @Inject(SESSION_STORAGE) public storage: WebStorageService,
    @Inject(DOCUMENT) private document: any
  ) { }



  layDonViVaCap() {

    //this.gridDetail.instance.beginCustomLoading("");
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
        //this.gridDetail.instance.endCustomLoading();
        this.capCbxd = t;
        console.log(t);
        this.capVal = "1";
        this.fillData();

      }
    );

  }
  dieuChinhKichCo() {

    
    this.barWidth =this.manHinhService.layChieuRong(window.innerWidth,window.innerHeight) ;

    this.gridHeight = this.manHinhService.layChieuCao(window.innerWidth,window.innerHeight) -85;
    
  }

  ngOnInit(): void {

    this.workEv = this.storage.get('ENV');
    this.userGetData = this.workEv.UserID;

    this.reportService.GhiNhanLogSuDungMenu(
      "CP_LogSuDungMenu", this.userGetData, "QT04A - Báo cáo bán hàng tổ hợp"
    ).subscribe(t => {});

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

    

    this.isLoadingService.add(
      this.reportService.LayMenu('CP_WKPI_BE_04A').subscribe(
        t => {
          this.navBarData = t;
        }
      ));
    this.layDonViVaCap();


  


  }

  anHeader() {

    try {

      var i = 0;
      this.arrVisibleGoc.forEach(t => {
        this.arrVisible[i] = t && this.theoDonVi ;

        i = i + 1;
      });
    }
    catch (error) {
      notify("Lỗi tạo header");
    }

  }


  khoiTaoMenuCap1() {
    this.menu.forEach(t => {
    });

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

  showFilter($event) {
    this.popupVisible = true;
  }


  fillData() {

    if (this.khoiVal == '' || this.khoiVal === 'undefined' || typeof this.khoiVal === undefined)
    {
      console.log("khoi undefined");
      return;
    }

    if (this.capVal == '' || this.capVal === 'undefined' || typeof this.capVal === undefined)
    {
      console.log("cap undefined");
      return;
    }


    if (this.capVal == undefined) {
      console.log("cap undefined");
      return;
    }

    if (this.khoiVal == undefined) {
      console.log("cap undefined");
      return;
    }


    try {
      this.reportService.CP_BaoCaoTonKhoChungHeader(
        "CP_WKPI_BE_02", this.khoiVal, "h"
      ).subscribe(t => {
        this.arrHeader = [];
        this.arrVisibleGoc = [];
  
        t.forEach(element => {
          this.arrHeader.push(element.TenCot);
          this.arrVisibleGoc.push(element.mVisible == 'True');
        });
  
        this.anHeader();
      });
  
    }
    catch (error) {
      notify ("Lỗi khi lấy header");

    }

 
    this.popupVisible = false;
    this.gridDetail.instance.beginCustomLoading("");
    this.isLoading = true;

    var sTuNgay = this.dateTimeHelper.dateToString(this.tuNgayVal);
    var sDenNgay = this.dateTimeHelper.dateToString(this.denNgayVal);



  

    //this.gridDetail.instance.beginCustomLoading("");



    try {
    this.reportService.CP_WKPI_BE_04A(this.khoiVal, this.capVal, sTuNgay, sDenNgay, "", "", this.userGetData)
      .subscribe(t => {

        this.reportDataDetail = t;
        this.reportDiplay = [];
        if (this.cap2Val != "")
        {
          this.hienThiThongTin();  
        }
        this.isLoading = false;
        ////this.gridDetail.instance.endCustomLoading();
        this.gridDetail.instance.endCustomLoading();

      });
      
    }
    catch (error) {
      notify ("Lỗi khi lấy số liệu");
      this.isLoading = false;
      ////this.gridDetail.instance.endCustomLoading();
      this.gridDetail.instance.endCustomLoading();

    }
  }

  loadCap1() {

  }
  loadCap2() {

  }


  close() {
    this.popupVisible = false;
  }

  selectionChanged(e) {

    // tạm thời bỏ
    /*
    
      //this.currentData = this.listData[e.itemIndex].data;
      this.cap2s = [];
      
      var x =  this.navBarData[e.itemIndex];
      this.cap1Val = x.Group1;

      this.isLoadingService.add(
        this.reportService.LayMenuC2('CP_WKPI_BE_04A',x.Group1).subscribe(
          t => {
            t.forEach(t2 => {this.cap2s.push(t2.Group2);});
            //this.isLoading = false;

          }
         ));
         this.hienThiThongTin();
      
    */
  }


  onCellPrepared(e) {
    if (e.rowType === "data" &&
      (
        e.column.dataField === "TotalT"
        || e.column.dataField === "TotalH"
        || e.column.dataField === "TotalK"
        || e.column.dataField === "TotalF"

      )
    ) {
      e.cellElement.style.background = "CYAN";
    }
  }

  selCap2(e) {
    this.cap2Val = e.itemData.Group1;
    this.hienThiThongTin();
  }


  hienThiThongTin() {
    //---- Lấy header 


    this.reportDiplay = [];
    this.reportDataDetail.forEach(t => {
      if (t.Group1 == this.cap2Val) {
        this.reportDiplay.push(t);
      }
    });
    var x = this.reportDiplay.length;
  }


  thayDoiKhungNhin(e) {
    this.theoTuan = !this.theoTuan;
    this.theoDonVi = !this.theoTuan;
    this.anHeader();
  }

  onRowPrepared(e) {
    // if (e.rowType == 'data' ) {
    //   if ( e.data.BackColor == "YELOW")
    //   {
    //     e.rowElement.style.backgroundColor = 'yellow';
    //   }
    //   else if ( e.data.BackColor == "PINK")
    //   {
    //     e.rowElement.style.backgroundColor = 'PINK';
    //   }
    //   else if ( e.data.BackColor == "CYAN")
    //   {
    //     e.rowElement.style.backgroundColor = 'CYAN';
    //   }

    //   else if ( e.data.BackColor == "GOLD")
    //   {
    //     e.rowElement.style.backgroundColor = 'GOLD';
    //   }
    // } 

    if (e.rowType == 'data') {
      // e.rowElement.style.backgroundColor =`rgb(128,255,255)`;
      e.rowElement.style.backgroundColor = `rgb(${e.data.BACKCOLOR.replace(/\s/g, "")})`;

      //console.log(e.rowElement.style.backgroundColor);
    }

    if (e.data.BOLD == "1") {
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


export class Category {
  text: string;
  icon: string;
  badge?: number;
}