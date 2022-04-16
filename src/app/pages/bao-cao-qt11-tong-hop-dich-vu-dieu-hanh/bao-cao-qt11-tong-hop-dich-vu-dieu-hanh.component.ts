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
  selector: 'app-bao-cao-qt11-tong-hop-dich-vu-dieu-hanh',
  templateUrl: './bao-cao-qt11-tong-hop-dich-vu-dieu-hanh.component.html',
  styleUrls: ['./bao-cao-qt11-tong-hop-dich-vu-dieu-hanh.component.scss']
})
export class BaoCaoQt11TongHopDichVuDieuHanhComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) gridDetail: DxDataGridComponent;
  elem: any;
  reportData1: Observable<any[]>;
  reportDataArr1: any[] = [];
  tuNgayVal: Date = new Date();
  denNgayVal: Date = new Date();
  isDaiLy:string;
  khoiVal:string;
  donviVal:string ="01";
  capVal:string = "1";
  popupVisible: boolean = false;
  rongMacDinh: any = 80;

  userGetData:string = "";
  workEv:WorkingEnviroment;

  donViCoSos: any[];
  capCbxd: any[];
  donviList: any[];
  arrTrangThaiLoad: boolean[];

  viewT = false;
  viewF = false;

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
      "CP_LogSuDungMenu", this.userGetData, "QT11 - Báo cáo tổng hợp dịch vụ điều hành"
    ).subscribe(t => {});

    this.elem = document.documentElement;
    this.gridHeight = window.innerHeight -1;
    if (window.innerWidth< 800) 
    {
      this.openFullscreen();
    }
    
    
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

     this.comboxService.GetComboxFunction('DanhMucDonViCoSo').subscribe(
      t => {
        
        t.forEach (k=> {
          this.donviList.push ({"Ma_dvcs":k.Ma_dvcs ,"Ten_dvcs":k.Ten_dvcs})
        });
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

    

  this.gridDetail.instance.beginCustomLoading("");
 // this.reportData1 = this.reportService.CP_WKPI_RO_03_T();

  
  this.reportData1 = this.reportService.CP_WKPI_RO_02(
    this.khoiVal,this.capVal,"",sTuNgay,sDenNgay,"","",this.userGetData
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
          e.rowElement.style.backgroundColor = `rgb(${e.data.BackColor.replace(/\s/g, "")})`;
          //e.rowElement.style.backgroundColor = e.data.BackColor.toLowerCase();
    
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


