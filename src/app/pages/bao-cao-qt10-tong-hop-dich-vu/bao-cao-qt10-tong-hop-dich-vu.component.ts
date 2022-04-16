import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Observable } from 'rxjs';
import { ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';
import { WorkingEnviroment } from 'src/app/00.Common/WorkingEnviroment';
import { LOCAL_STORAGE, SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import notify from 'devextreme/ui/notify';


@Component({
  selector: 'app-bao-cao-qt10-tong-hop-dich-vu',
  templateUrl: './bao-cao-qt10-tong-hop-dich-vu.component.html',
  styleUrls: ['./bao-cao-qt10-tong-hop-dich-vu.component.scss']
})
export class BaoCaoQt10TongHopDichVuComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) gridDetail: DxDataGridComponent;
  elem: any;
  reportData1: Observable<any[]>;
  reportDataArr1: any[] = [];
  tuNgayVal: Date = new Date();
  denNgayVal: Date = new Date();
  isKyTruoc:boolean;
  isKyTruoc01: string;
  khoiVal:string;
  donviVal:string ="01";
  capVal:string;
  popupVisible: boolean = false;
  rongMacDinh: any = 80;
  mauBaoCao: string;
  tuNgayKyTruoc: Date = new Date();
  denNgayKyTruoc: Date = new Date();
  loadKyTruoc: string;
  arrTrangThaiLoad: boolean[];

  userGetData:string = "";
  workEv:WorkingEnviroment;

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
    @Inject(DOCUMENT) private document: any,
    @Inject(SESSION_STORAGE) public storage: WebStorageService
    ) { }

  ngOnInit(): void {

    this.donViCoSos = [];
    this.donviList = [];

    this.workEv = this.storage.get('ENV');
    this.userGetData = this.workEv.UserID;

    this.reportService.GhiNhanLogSuDungMenu(
      "CP_LogSuDungMenu", this.userGetData, "QT10 - Báo cáo tổng hợp dịch vụ"
    ).subscribe(t => {});

    this.elem = document.documentElement;
    this.gridHeight = window.innerHeight -1;
    if (window.innerWidth< 800) 
    {
      this.openFullscreen();
    }

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

     var sTuNgayKyTruoc = "";
     var sDenNgayKyTruoc = "";

     if (this.isKyTruoc)
     {
        var sTuNgayKyTruoc = this.getNgayString(this.tuNgayKyTruoc);
        var sDenNgayKyTruoc = this.getNgayString(this.denNgayKyTruoc);
     }


/*
     this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(
      this.khoiVal,this.capVal,sTuNgay,"","","cuongnt"
    );
    */

    

  this.gridDetail.instance.beginCustomLoading("");
 // this.reportData1 = this.reportService.CP_WKPI_RO_03_T();

 if (this.isKyTruoc)
 {
   this.isKyTruoc01 = "1";
 }
 else
 {
   this.isKyTruoc01 = "0";
 }
 
 
  this.reportData1 = this.reportService.CP_WKPI_RO_01(
    this.khoiVal,this.isKyTruoc01,this.capVal,"",sTuNgay,sDenNgay,sTuNgayKyTruoc,sDenNgayKyTruoc,"",this.donviVal,this.userGetData
  );
  
    console.log(this.reportData1);

    this.reportData1.subscribe(t => { 
      this.reportDataArr1 = t; 
    this.gridDetail.instance.endCustomLoading();
    
    
   },
   err => { this.gridDetail.instance.endCustomLoading(); notify("Có lỗi khi lấy số liệu","error")}
   );

  }

  getNgayString (ngayVal:Date) {
    var nam: string;
    var thang: string;
    var ngay = "";
    var nam =  ngayVal.getFullYear().toString() ;

    if (ngayVal.getMonth()< 9) thang = "0" + (ngayVal.getMonth() + 1).toString();
    else thang =  (ngayVal.getMonth() + 1).toString();
    
    if (ngayVal.getDate()< 10) ngay = "0" + ngayVal.getDate() .toString();
    else ngay =  ngayVal.getDate().toString();
  
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

      if (e.rowType == 'data' ) {
        
        if (e.data.BackColor != "")
        {
          //e.rowElement.style.backgroundColor = e.data.BackColor.toLowerCase();
          e.rowElement.style.backgroundColor = `rgb(${e.data.BackColor.replace(/\s/g, "")})`;
         
        }
        if (e.data.Bold == "1")
        {
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


     onScroll (e) 
     {
      console.log(e);
     }

}


