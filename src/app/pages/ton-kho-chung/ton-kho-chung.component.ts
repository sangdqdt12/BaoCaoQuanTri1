import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import ArrayStore from 'devextreme/data/array_store';
import { Observable } from 'rxjs';
import { KeyValuePair } from 'src/app/00.Common/KeyValuePair';
import { ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';

@Component({
  selector: 'app-ton-kho-chung',
  templateUrl: './ton-kho-chung.component.html',
  styleUrls: ['./ton-kho-chung.component.scss']
})
export class TonKhoChungComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) gridDetail: DxDataGridComponent;

  navBarData: Category[];

  //-------- filter --------------------
  popupVisible = false;

  khoiVal:string;
  capVal:string;
  ngayVal: Date = new Date();


  capCbxd: any[];
  donViCoSos: any[];
  
  //-------- Data --------------------------
  reportData1: Observable<any[]>;
  reportDataDetail: any[];

  reportDataArr1: any[] = [];


  cap1 : string;
  cap2 : string;
  cap3 : string;
  cap1s: string[];
  cap2s: string[];
  cap3s: string[];

  //-------- filter on pages -----------------

  //---------------

  cap1Filter : KeyValuePair[] = [];

  cap1Filter1 : KeyValuePair[] = [ {key: "x1", value: "x1"}, {key: "x2", value: "x2"}];
  cap2Filter1 : KeyValuePair[] = [ {key: "x1", value: "x1"}, {key: "x2", value: "x2"}];
  cap3Filter1 : KeyValuePair[] = [ {key: "x1", value: "x1"}, {key: "x2", value: "x2"}];

  
  //-------- Các biến header 
  KTarrHeader: any[] = [];
  KarrHeader: any[] = [];

  arrHeader: any[] = [];
  arrVisible: boolean[] = [];



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

  constructor(
    private comboxService: ComboxService,
    private reportService: ReportService,
    private reportService2: ReportService,
    @Inject(DOCUMENT) private document: any

  ) { }

  ngOnInit(): void {
    this.navBarData =  [
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

  }


  close() {
    this.popupVisible = false;
  }

    
showFilter() {
  this.popupVisible = true;
}
  
  
  fillData() {
    this.cap1s = [""];
    this.cap2s = [""];
    this.cap3s = [""];
  
    var ngays: string;
  
    var nam =  this.ngayVal.getFullYear().toString() ;
    var thang = "";
    if (this.ngayVal.getMonth()< 9) thang = "0" + (this.ngayVal.getMonth() + 1).toString();
    else thang =  this.ngayVal.getMonth().toString();
    var ngay = "";
    if (this.ngayVal.getDate()< 10) ngay = "0" + this.ngayVal.getDate() .toString();
    else ngay =  this.ngayVal.getDate().toString();
  
    ngays = nam + thang + ngay;
  
    this.popupVisible = false;
    this.gridDetail.instance.beginCustomLoading("");
    this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(
      this.khoiVal,this.capVal,ngays,"","",""
    );
  
    this.reportData1.subscribe(t => { this.reportDataArr1 = t; 
      this.gridDetail.instance.endCustomLoading();
      this.cap1Filter = [];
      
      //---- lấy cấp 1
      this.reportDataArr1.filter(t=> t.Ma_Kx === "" && t.Ten_kx2 === "" && t.Ma_Mau === "").
      forEach (k=> this.cap1Filter.push({key : k.Ten_kx3, value:k.Ten_kx3}));
  
      this.dataSourceCap1 = new ArrayStore({
        data: this.cap1Filter,
        key: "key"
      });
  
      console.log(this.dataSourceCap1);
  
  
  
    });
  }
  

  selectionChanged(e) {
  //  this.currentData = this.listData[e.itemIndex].data;
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


export class Category {
  text: string;
  icon: string;
  badge?: number;
}
export class Contact {
  name: string;
  phone: string;
  image: string;
  email: string;
  category: string;
}