import { HttpClient } from '@angular/common/http';
import { Inject, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IsLoadingService } from '@service-work/is-loading';
import { DxDataGridComponent } from 'devextreme-angular';
import { Observable } from 'rxjs';
import { BaoCaoTonKhoChung, ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';
import { ComboxData } from 'src/app/Model/LenhModel';

import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-bao-cao-ton-kho-chung',
  templateUrl: './bao-cao-ton-kho-chung.component.html',
  styleUrls: ['./bao-cao-ton-kho-chung.component.scss']
})
export class BaoCaoTonKhoChungComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) gridSmall: DxDataGridComponent;
  @ViewChild(DxDataGridComponent, { static: false }) gridDetail: DxDataGridComponent;
  loadingVisible : boolean = false;
  innerWidth:any;
  popupWidth:any;
  popupHeight:any;
  totalView = "";
  detailView = "hidden";
  modelViewDetail = "";

  popupDetailVisible: boolean =false;
  
  isEmailVisible = false;

  KarrHeader: any[] = [];
  KTarrHeader: any[] = [];
  arrVisible: boolean[] = [];

  arrReportHeader : any[] = [];
  arrKTReportHeader : any[] = [];


  arrHeader: string[] = [];
  
  dataSource: any;
  priority: any[];
  popupVisible = false;
  popupVisibleDetail = false;
  capCbxd: any[];
  capVal:string;
  khoiVal:string;
  
  reportData1: Observable<any[]>;
  cap: any[];
  donViCoSos: any[];
  reportDataArr1: any[];
  ngayVal: Date = new Date();

  reportDataDetail: any[];

  elem: any;
  constructor(
    public http: HttpClient,
    private reportService: ReportService,
    private reportService2: ReportService,
    private isLoadingService: IsLoadingService,
    private comboxService: ComboxService,
    @Inject(DOCUMENT) private document: any
  ) {

   
  }

  fillData() {
    

    var ngays: string;

    var nam =  this.ngayVal.getFullYear().toString() ;
    var thang = "";
    if (this.ngayVal.getMonth()< 9) thang = "0" + (this.ngayVal.getMonth() + 1).toString();
    else thang =  (this.ngayVal.getMonth() + 1).toString();
    var ngay = "";
    if (this.ngayVal.getDate()< 10) ngay = "0" + this.ngayVal.getDate() .toString();
    else ngay =  this.ngayVal.getDate().toString();
  
    ngays = nam + thang + ngay;


    this.popupVisible = false;
    this.gridSmall.instance.beginCustomLoading("");
    


    
    if (this.innerWidth > 800){
      this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(
        this.khoiVal,this.capVal,ngays,"","",""
      );
      this.reportData1.subscribe(t => { this.reportDataArr1 = t; 
        this.gridSmall.instance.endCustomLoading();
        
      });
      
    } else {
      this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(
        this.khoiVal,this.capVal,ngays,"","",""
        );
      this.reportData1.subscribe(t => { this.reportDataArr1 = t; 
        this.gridSmall.instance.endCustomLoading();
      });
      
    }
    
    
}

showInfo(e) {
  console.log("--------------- show info ---------------");
 // this.totalView = "hidden";
  //this.detailView = "";

  this.popupDetailVisible = true;

  
}

showInfo1(e) {

  //Cấm cười
  var ngays: string;

  var nam =  this.ngayVal.getFullYear().toString() ;
  var thang = "";
  if (this.ngayVal.getMonth()< 9) thang = "0" + (this.ngayVal.getMonth() + 1).toString();
  else thang =  this.ngayVal.getMonth().toString();
  var ngay = "";
  if (this.ngayVal.getDate()< 10) ngay = "0" + this.ngayVal.getDate() .toString();
  else ngay =  this.ngayVal.getDate().toString();

  ngays = nam + thang + ngay;
//  this.totalView = "hidden";
 // this.detailView = "";

  this.popupDetailVisible = true;

  
  console.log(e.row.data);
  
  
  this.gridDetail.instance.beginCustomLoading('');

  this.reportService.CP_BaoCaoTonKhoChungDetail(
    this.khoiVal,this.capVal,ngays,"","",""
    ).subscribe(t => {
     // this.reportDataDetail = t;

      this.reportDataDetail = [
        {"Col1": "TMD", "Col2":e.row.data.K01, "Col3": e.row.data.KT01, "Col4":e.row.data.T01, "Col5": e.row.data.H01,  "Col6" :e.row.data.F01},
        {"Col1": "TTX", "Col2":e.row.data.K02, "Col3": e.row.data.KT02, "Col4":e.row.data.T02, "Col5": e.row.data.H01,  "Col6" :e.row.data.F02},
        {"Col1": "TTS", "Col2":e.row.data.K03, "Col3": e.row.data.KT03, "Col4":e.row.data.T03, "Col5": e.row.data.H01,  "Col6" :e.row.data.F03},
        {"Col1": "TBN", "Col2":e.row.data.K04, "Col3": e.row.data.KT04, "Col4":e.row.data.T04, "Col5": e.row.data.H01,  "Col6" :e.row.data.F04},
        {"Col1": "TTS", "Col2":e.row.data.K05, "Col3": e.row.data.KT05, "Col4":e.row.data.T05, "Col5": e.row.data.H01,  "Col6" :e.row.data.F05},
        {"Tổng": "TTS", "Col2":e.row.data.TotalK, "Col3": e.row.data.TotalK, "Col4":e.row.data.TotalT, "Col5":e.row.data.TotalH, "Col6" :e.row.data.TotalF},
      ];

      this.gridDetail.instance.endCustomLoading();
    });

    /*
  this.reportDataDetail = [
    {"Col1": "TMD", "Col2":e.row.data.K01, "Col3": e.row.data.KT01, "Col4":e.row.data.T01, "Col5": e.row.data.H01,  "Col6" :e.row.data.F01},
    {"Col1": "TTX", "Col2":e.row.data.K02, "Col3": e.row.data.KT02, "Col4":e.row.data.T02, "Col5": e.row.data.H01,  "Col6" :e.row.data.F02},
    {"Col1": "TTS", "Col2":e.row.data.K03, "Col3": e.row.data.KT03, "Col4":e.row.data.T03, "Col5": e.row.data.H01,  "Col6" :e.row.data.F03},
    {"Col1": "TBN", "Col2":e.row.data.K04, "Col3": e.row.data.KT04, "Col4":e.row.data.T04, "Col5": e.row.data.H01,  "Col6" :e.row.data.F04},
    {"Col1": "TTS", "Col2":e.row.data.K05, "Col3": e.row.data.KT05, "Col4":e.row.data.T05, "Col5": e.row.data.H01,  "Col6" :e.row.data.F05},
    {"Tổng": "TTS", "Col2":e.row.data.TotalK, "Col3": e.row.data.TotalK, "Col4":e.row.data.TotalT, "Col5":e.row.data.TotalH, "Col6" :e.row.data.TotalF},
  ];
  */
/*
  this.reportDataDetail  = [
    { "Col1": "K", "Col2": e.row.data.KT01,"Col3": e.row.data.KT03 ,"Col4": e.row.data.KT04,
    "Col5": e.row.data.KT05,"Col6": e.row.data.KT06,"Col7": e.row.data.KT08,"Col8": e.row.data.TotalK},

    { "Col1": "K", "Col2": e.row.data.K01,"Col3": e.row.data.K03 ,"Col4": e.row.data.K04,
    "Col5": e.row.data.K05,"Col6": e.row.data.K06,"Col7": e.row.data.K08,"Col8": e.row.data.TotalK},

    { "Col1": "T", "Col2": e.row.data.T01,"Col3": e.row.data.T03 ,"Col4": e.row.data.T04,
    "Col5": e.row.data.T05,"Col6": e.row.data.T06,"Col7": e.row.data.T08,"Col8": e.row.data.TotalT},
    
    { "Col1": "H", "Col2": e.row.data.H01,"Col3": e.row.data.H03 ,"Col4": e.row.data.H04,
    "Col5": e.row.data.H05,"Col6": e.row.data.H06,"Col7": e.row.data.H08,"Col8": e.row.data.TotalH},

    { "Col1": "F", "Col2": e.row.data.F01,"Col3": e.row.data.F03 ,"Col4": e.row.data.F04,
    "Col5": e.row.data.F05,"Col6": e.row.data.F06,"Col7": e.row.data.F08,"Col8": e.row.data.TotalF},


  ];
  */
}

closeDetail() {

  this.popupDetailVisible = false;
  
}




showFilter() {
  this.popupVisible = true;
}

close() {
  this.popupVisible = false;
}



  buttonOptions = {
    text: "Filter",
    type: "success",
    onClick: function () {

      if (this.innerWidth > 800){
        this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(
          "","","","","",""
        );
        this.reportData1.subscribe(t => { this.reportDataArr1 = t; });
      } else {

        this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(
          "","","","","",""
        );
        this.reportData1.subscribe(t => { this.reportDataArr1 = t; });
      }
      


    }
  };

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

  ngOnInit(): void {

    this.elem = document.documentElement;
    this.openFullscreen();

    this.innerWidth = window.innerWidth;
    
    this.popupWidth = this.innerWidth - 10;
    this.popupHeight = window.innerHeight - 20;
    
    if (this.innerWidth > 800)
    {
      this.reportData1 = this.reportService.CP_BaoCaoTonKhoChungHeader(
        "CP_WKPI_BE_01","TOYOTA","h"
      );
      this.reportData1.subscribe(t => { 
        this.arrReportHeader = t; 
        
        
        this.arrReportHeader.forEach(element => 
          {
            this.KarrHeader.push(element.TenCot);
            this.arrVisible.push(element.mVisible == 'True');

          });
      });

      this.reportData1 = this.reportService2.CP_BaoCaoTonKhoChungHeader(
        "CP_WKPI_BE_01","TOYOTA","kt"
      );
        this.reportData1.subscribe(t => { 
        this.arrKTReportHeader = t; 
        this.arrKTReportHeader.forEach(element => 
          {
            this.KTarrHeader.push(element.TenCot);
          });

          console.log(this.KTarrHeader);
      });

    }

    /*
    this.isLoadingService.add(
      this.comboxService.GetComboxFunction('DanhMucKhoi_NhomDonVICOSo').subscribe(
      t => {
        this.capCbxd = t;
      }
     )
    );
    */
   this.comboxService.GetComboxFunction('DanhMucKhoi_NhomDonVICOSo').subscribe(
    t => {
      this.donViCoSos = t;
    }
   );

   this.comboxService.GetComboxFunction('VCapXemBaoCao').subscribe(
    t => {
      this.capCbxd = t;
    }
   );

   
    /*
    this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(
      "","","","","",""
     );
    this.reportData1.subscribe(t => 
      { 
        this.reportDataArr1 = t; 
 

      }
      );
    */

  }

  


  onCellPrepared(e) {
    if(e.rowType === "data" && 
    (
      e.column.dataField === "TotalT"
      || e.column.dataField === "TotalH"
      || e.column.dataField === "TotalK"
      || e.column.dataField === "TotalF"
    
    )
    ) {
        e.cellElement.style.background =  "CYAN";
    }
}

  onRowPrepared(e) {  
    if (e.rowType == 'data' ) {
      if ( e.data.BackColor == "YELOW")
      {
        e.rowElement.style.backgroundColor = 'yellow';
      }
      else if ( e.data.BackColor == "PINK")
      {
        e.rowElement.style.backgroundColor = 'PINK';
      }
      else if ( e.data.BackColor == "CYAN")
      {
        e.rowElement.style.backgroundColor = 'CYAN';
      }

      else if ( e.data.BackColor == "GOLD")
      {
        e.rowElement.style.backgroundColor = 'GOLD';
      }
    } 
}
}
