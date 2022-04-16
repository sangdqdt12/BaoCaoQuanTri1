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

@Component({
  selector: 'app-bao-cao-ton-kho-chung4',
  templateUrl: './bao-cao-ton-kho-chung4.component.html',
  styleUrls: ['./bao-cao-ton-kho-chung4.component.scss']
})
export class BaoCaoTonKhoChung4Component implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) gridDetail: DxDataGridComponent;
  
  userGetData:string = "";
  workEv:WorkingEnviroment;

  reportData1: Observable<any[]>;
  khoiVal:string;
  capVal:string;
  ngayVal: Date = new Date();
  capCbxd: any[];
  donViCoSos: any[];
  reportDataDetail: any[];
  reportFormat : any[];
  rongMacDinh: any = 80;

  loadIndicatorVisible: boolean = false;
  popupVisible = false;
  filterModelVisible = false;

  reportDataArr1: any[] = [];


  XuatXuXes: GrpButton[];

  cap1 : string;
  cap2 : string;
  cap3 : string;
  loaiTon:string;



  cap1s: string[];
  cap2s: string[] = ['Model'];
  cap3s: string[];
  cConKy: string = 'Còn ký';
  cN1: string = 'N+1';
  cN2: string = 'N+2';
  cTonKho: string = 'Tồn';

  gridHeight: any;
  LoaiXems: string[];

  loaiTons:string[] = [this.cConKy,this.cN1,this.cN2,this.cTonKho];
  

  elem: any;
  innerWidth: any;

  popupWidth : any;
  popupHeight : any;

  barWidth:any;

  popupDetailVisible: boolean = false;
  cap1Select: string[] = [];
  cap2Select: string[] = [];
  cap3Select: string[] = [];



  //---------------

  cap1Filter : KeyValuePair[] = [];

  cap1Filter1 : KeyValuePair[] = [ {key: "x1", value: "x1"}, {key: "x2", value: "x2"}];
  cap2Filter1 : KeyValuePair[] = [ {key: "x1", value: "x1"}, {key: "x2", value: "x2"}];
  cap3Filter1 : KeyValuePair[] = [ {key: "x1", value: "x1"}, {key: "x2", value: "x2"}];


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


  arrReportHeader : any[] = [];
  arrKTReportHeader : any[] = [];
  donViIndex: DonViIndex[] = [];
  chonCKD: boolean = true;
  chonCBU: boolean = true;
  chonAll: boolean = true;


  selectionModeValue: any = "all";
  selectAllModeVlaue: any = "page";

  keysSelect: any[] = [];


  

  constructor(
    private comboxService: ComboxService,
    private reportService: ReportService,
    private reportService2: ReportService,
    @Inject(DOCUMENT) private document: any,
    @Inject(SESSION_STORAGE) public storage: WebStorageService
  ) { 

   
  this.LoaiXems= [this.cConKy,this.cN1,this.cN2,this.cTonKho];
  this.loaiTon = this.cConKy;





  }





  ngOnInit(): void {



    


   
    
    this.workEv = this.storage.get('ENV');
    this.userGetData = this.workEv.UserID;
    this.loadIndicatorVisible = true;
    this.innerWidth = window.innerWidth - 2;

    this.popupWidth = window.innerWidth - 20;
    this.popupHeight = window.innerHeight - 20;

    

    this.barWidth = window.innerWidth - 20 - 0.1*window.innerWidth;

    if ( window.innerHeight < 900) {
      this.openFullscreen();
      if(window.innerHeight > window.innerWidth)
      {
        this.gridHeight = window.innerHeight - 175 ;
      }
      else 
      {
        this.gridHeight = window.innerHeight  - 80 ;
      }
    } else 
    {
      this.gridHeight = window.innerHeight - 200 ;
    }

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



 
    this.comboxService.GetComboxFunction('DanhMucKhoi_NhomDonVICOSo').subscribe(
      t => {
        this.donViCoSos = [];
       
        t.forEach (k=> {
          if (k.ten_nh == "TOYOTA") {
            this.khoiVal = k.ma_nh;
            this.donViCoSos.push ({"ma_nh":k.ma_nh ,"ten_nh":"TOY"})
          } else if (k.ten_nh == "FORD") {
            this.donViCoSos.push ({"ma_nh":k.ma_nh ,"ten_nh":"FORD"})
          }
        })
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


    this.reportService.CP_BaoCaoTonKhoChungHeader(
      "CP_WKPI_BE_01","TOYOTA","h"
    ).subscribe(t => { 
      this.arrReportHeader = t; 
      
      
      this.arrReportHeader.forEach(element => 
        {
          this.arrHeader.push(element.TenCot);
          this.arrVisible.push(element.mVisible == 'True');
          //this.arrVisible.push(true);
        });
        this.taoMangBanDau ();
        this.loadIndicatorVisible = false;
    });
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
  

  
  selCap2(e){
    this.cap2 = e.itemData ;
    this.loadData() ;
  }

  //------ lấy loại dữ liệu Ký tháng này , N+1, N+2
  selLoaiTon(e){
    this.loaiTon = e.itemData;
    this.loadData() ;
  }
  

  
  loadData() 
  {
    this.reportDataDetail = [];
    var data: any;
   

   
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
  }



  addToGridDetail (data: any) {
    if (this.loaiTon == this.cConKy)
    {
      this.reportDataDetail.push({ "ColTen": data.Ma_so,
      "Ma_Mau" : data.Ma_Mau,
      "Col0": data.K01, "Col1":data.K02, "Col2":data.K03, "Col3": data.K04, 
      "Col4": data.K05, "Col5":data.K06, "Col6": data.K07, 
      "Col7": data.K08, "Col8":data.K09, "Col9": data.K10, 
      "Col10": data.K11, "Col11":data.K12, "Col12": data.K13, 
      "Col13": data.K14, "Col14":data.K15,  
      "Tong": data.TotalK, 
      "BackColor":data.BackColor,
      "Bold" : data.Bold
      });

    } else if (this.loaiTon == this.cN1) {
      this.reportDataDetail.push({ "ColTen": data.Ma_so,
      "Ma_Mau" : data.Ma_Mau,
      "Col0": data.H01, "Col1":data.H02, "Col2":data.H03, "Col3": data.H04, 
      "Col4": data.H05, "Col5":data.H06, "Col6": data.H07, 
      "Col7": data.H08, "Col8":data.H09, "Col9": data.H10, 
      "Col10": data.H11, "Col11":data.H12, "Col12": data.H13, 
      "Col13": data.H14, "Col14":data.H15,  
      "Tong": data.TotalH, 
      "BackColor":data.BackColor,
      "Bold" : data.Bold
      });
    } else if (this.loaiTon == this.cN2) {
      this.reportDataDetail.push({ "ColTen": data.Ma_so,
      "Ma_Mau" : data.Ma_Mau,
      "Col0": data.F01, "Col1":data.F02, "Col2":data.F03, "Col3": data.F04, 
      "Col4": data.F05, "Col5":data.F06, "Col6": data.F07, 
      "Col7": data.F08, "Col8":data.F09, "Col9": data.F10, 
      "Col10": data.F11, "Col11":data.F12, "Col12": data.F13, 
      "Col13": data.F14, "Col14":data.F15, 
      "Tong": data.TotalF, 
      "BackColor":data.BackColor,
      "Bold" : data.Bold
      });
    } else if (this.loaiTon == this.cTonKho) {
      this.reportDataDetail.push({ "ColTen": data.Ma_so,
      "Ma_Mau" : data.Ma_Mau,
      "Col0": data.T01, "Col1":data.T02, "Col2":data.T03, "Col3": data.T04, 
      "Col4": data.T05, "Col5":data.T06, "Col6": data.T07, 
      "Col7": data.T08, "Col8":data.T09, "Col9": data.T10, 
      "Col10": data.T11, "Col11":data.T12, "Col12": data.T13, 
      "Col13": data.T14, "Col14":data.T15, 
      "Tong": data.TotalT, 
      "BackColor":data.BackColor,
      "Bold" : data.Bold
      });
    }
    
    

  }

 
taoMangBanDau ()
{
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
    this.khoiVal,this.capVal,ngays,"","",this.userGetData
  );

  this.reportData1.subscribe(t => { this.reportDataArr1 = t; 
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
  //font-weight: bold;
  if (e.rowType == 'data' ) {
    if (e.data.Bold == "1")
    {
      //e.rowElement.style.fontWeight = "bold";
      //e.rowElement.style.fontStyle = "italic";
    }
    if ( e.data.BackColor == "YELOW")
    {
      e.rowElement.style.backgroundColor = 'yellow';
      e.rowElement.style.fontWeight = "bold";
      
    }
    else if ( e.data.BackColor == "PINK")
    {
      e.rowElement.style.backgroundColor = 'PINK';
      e.rowElement.style.fontWeight = "bold";
    }
    else if ( e.data.BackColor == "CYAN")
    {
      e.rowElement.style.backgroundColor = 'CYAN';
      e.rowElement.style.fontWeight = "bold";
    }

    else if ( e.data.BackColor == "GOLD")
    {
      e.rowElement.style.backgroundColor = 'GOLD';
      e.rowElement.style.fontWeight = "bold";
    }
  } 
}



filter()
{
  this.popupDetailVisible = true;
}

chonXuatXuOnchange (e)
{
  this.loadCap1 ();

}

loadCap1 ()
{
  this.cap1Select = [];
  if (this.chonCKD == true)
  {
    this.cap1Select.push("CKD");
  }
  if (this.chonCBU == true)
  {
    this.cap1Select.push("CBU");
  }
  this.loadCap2();
}


loadCap2 (){
  
  this.cap2s = [];

    //---- lấy cấp 2
    this.cap1Select.forEach (k=>  
      {
        console.log(this.reportDataArr1.filter(t=> t.Ma_Kx === "" && t.Ten_kx3 === k && t.Ma_Mau === "" && t.Ten_kx2 !== ""));

        var arr =  this.reportDataArr1.filter(t=> t.Ma_Kx === "" && t.Ten_kx3 === k && t.Ma_Mau === "" && t.Ten_kx2 !== "");
        console.log(arr);
        arr.forEach(h=> {      
          //---- kiểm tra chưa có thì cho vào
          if (this.cap2s.filter(t=> t == h.Ten_kx2 ).length == 0) {
            this.cap2s.push( h.Ten_kx2);
          }
          
          
        })
      });
      this.loadData() ;
}

cap2SelectChange (e){
  var component = (e && e.component) ;
  
  this.cap2Filter1 = [];
  this.cap2s = [];

    
    this.cap2Select.forEach (k=>  
      {


        //this.reportDataArr1.filter(t=> t.Ten_kx3 === this.cap1 && t.Ten_kx2 ===this.cap2 && t.Ma_Mau === "").
        //forEach (k=> { if (k.Ma_Kx !== "") {this.cap3s.push(k.Ma_Kx)}})

        console.log(this.reportDataArr1.filter(t=> t.Ten_kx2 === k && t.Ma_Mau === ""));

        var arr =  this.reportDataArr1.filter(t=> t.Ten_kx2 === k && t.Ma_Mau === "");
        console.log(arr);
        arr.forEach(h=> {      
          console.log(h);
          this.cap3Filter1.push( { key : h.Ma_Kx,value:h.Ma_Kx });
          this.cap2s.push(h.Ma_Kx);

        })

        this.dataSourceCap3 = new ArrayStore({
          data: this.cap3Filter1,
          key: "key"
        });

      })

}

loaiTonOnChang (e)
{
  this.loadData();
}

showFilterModle()
{
  this.filterModelVisible = true;
}

closeFillModeData () {
  this.filterModelVisible = false;
}

fillModeData () {
  this.filterModelVisible = false;
}


selectionChangedModel(e) {
 // this.currentData = this.listData[e.itemIndex].data;
}

XuatXuClick (e)
{

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
