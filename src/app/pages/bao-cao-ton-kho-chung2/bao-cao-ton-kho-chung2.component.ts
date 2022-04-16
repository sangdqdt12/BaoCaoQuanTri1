import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Observable } from 'rxjs';
import { ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';

@Component({
  selector: 'app-bao-cao-ton-kho-chung2',
  templateUrl: './bao-cao-ton-kho-chung2.component.html',
  styleUrls: ['./bao-cao-ton-kho-chung2.component.scss']
})
export class BaoCaoTonKhoChung2Component implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) gridDetail: DxDataGridComponent;
  reportData1: Observable<any[]>;
  khoiVal:string;
  capVal:string;
  ngayVal: Date = new Date();
  capCbxd: any[];
  donViCoSos: any[];
  reportDataDetail: any[];
  reportFormat : any[];

  popupVisible = false;
  reportDataArr1: any[] = [];

  cap1 : string;
  cap2 : string;
  cap3 : string;

  cap1s: string[];
  cap2s: string[];
  cap3s: string[];

  elem: any;
  innerWidth: any;

  //-------- Các biến header 
  KTarrHeader: any[] = [];
  KarrHeader: any[] = [];
  arrVisible: boolean[] = [];
  arrReportHeader : any[] = [];
  arrKTReportHeader : any[] = [];
  donViIndex: DonViIndex[] = [];


  constructor(
    private comboxService: ComboxService,
    private reportService: ReportService,
    private reportService2: ReportService,
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit(): void {
    
    this.innerWidth = window.innerWidth - 2;
    this.elem = document.documentElement;
    this.openFullscreen();
    this.cap1s = [""];
    this.cap2s = [""];
    this.cap3s = [""];


    

    this.comboxService.GetTesForAuthenticate().subscribe(
      t=> {console.log("------------------- Get ");console.log(t);},
      e=> {console.log("------------------- Loi Get" + e);}
      );


    this.comboxService.GetForAuthenticate().subscribe(
      t=> {console.log("------------------- User infor");console.log(t);},
      e=> {console.log("------------------- Loi User infor" + e);}
      );
    
 
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
        this.taoMangBanDau ();
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
    });

    */
  
    
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

  selCap1(e){
    this.cap2s = [];
    this.cap3s = [""];
    this.cap1 = e.itemData ;
    this.cap2="";
    this.cap3 = "";
    //---- lấy cấp 2
    
    this.reportDataArr1.filter(t=> t.Ma_Kx === "" && t.Ten_kx3 === this.cap1 && t.Ma_Mau === "").
    forEach (k=> { if (k.Ten_kx2 !== "") {this.cap2s.push(k.Ten_kx2)} }
    )

    if (this.cap2s.length ==0)
      this.cap2s = [""];

    
    this.loadData() ;
  }

  selCap2(e){
    this.cap3s = [];
    this.cap2 = e.itemData ;
    this.cap3 = "";
    //---- lấy cấp 3
    this.reportDataArr1.filter(t=> t.Ten_kx3 === this.cap1 && t.Ten_kx2 ===this.cap2 && t.Ma_Mau === "").
    forEach (k=> { if (k.Ma_Kx !== "") {this.cap3s.push(k.Ma_Kx)}})

    if (this.cap3s.length ==0)
    this.cap3s = [""];

    //console.log(this.cap3s);
    this.loadData() ;
  }


  selCap3(e){
    this.cap3 = e.itemData ;
    this.loadData() ;

    /*
    this.cap3s = [];
    this.cap3 = e.itemData ;
    //---- lấy cấp 2
    this.reportDataArr1.filter(t=> t.Ten_kx3 === this.cap1 && t.Ten_kx2 ===this.cap2 && t.Ma_Mau === "").
    forEach (k=> this.cap3s.push(k.Ma_Kx))
    */

  }

  loadData() 
  {
    // Load cấp 1
    var data: any;
    if (this.cap1 !== "" && this.cap2 === "" && this.cap3 === "") {
      this.reportDataArr1.filter(t=> t.Ten_kx3 === this.cap1 && t.Ten_kx2 === "" && t.Ma_Kx ==="" && t.Ma_Mau === "").
      forEach (k=> data = k);
    } else
    // Load cấp 2
    if (this.cap1 !== "" && this.cap2 !== "" && this.cap3 === "") {
      this.reportDataArr1.filter(t=> t.Ten_kx3 === this.cap1 && t.Ten_kx2 === this.cap2 && t.Ma_Kx ==="" && t.Ma_Mau === "").
      forEach (k=> data = k);
    } else
    // Load cấp 2
    if (this.cap1 !== "" && this.cap2 !== "" && this.cap3 !== "") {
      this.reportDataArr1.filter(t=> t.Ten_kx3 === this.cap1 && t.Ten_kx2 === this.cap2 && t.Ma_Kx === this.cap3 && t.Ma_Mau === "").
      forEach (k=> {data = k;  console.log( "--------------------- Log data" + this.cap1 + "|" + this.cap2 + "|" + this.cap3 ); console.log(data)});
     
    }
    

    this.addToGridDetail(data);
  }



  addToGridDetail (data: any) {
    /*
    this.reportDataDetail = [
      {"Col1": "TMD", "Col2":data.K01, "Col3": data.KT01, "Col4":data.T01, "Col5": data.H01,  "Col6" :data.F01},
      {"Col1": "TTX", "Col2":data.K02, "Col3": data.KT02, "Col4":data.T02, "Col5": data.H01,  "Col6" :data.F02},
      {"Col1": "TTS", "Col2":data.K03, "Col3": data.KT03, "Col4":data.T03, "Col5": data.H01,  "Col6" :data.F03},
      {"Col1": "TBN", "Col2":data.K04, "Col3": data.KT04, "Col4":data.T04, "Col5": data.H01,  "Col6" :data.F04},
      {"Col1": "TTS", "Col2":data.K05, "Col3": data.KT05, "Col4":data.T05, "Col5": data.H01,  "Col6" :data.F05},
      {"Tổng": "TTS", "Col2":data.TotalK, "Col3": data.TotalK, "Col4":data.TotalT, "Col5":data.TotalH, "Col6" :data.TotalF},
    ];
    */
    this.reportDataDetail = [];


    this.reportFormat.forEach (t=> {
      var donviRpr = t.Col1;
      var index = 0;
      //--- tìm thứ tự đơn vị trong mảng index ----
      this.donViIndex.forEach (q=> {
        console.log(q.text);
        console.log(donviRpr);
        console.log(q.text == donviRpr);
        
        if (q.text == donviRpr)
        {
          index = q.vitri;
        }
      })

      if (donviRpr !== "")
        this.reportDataDetail.push(this.getVal (index,donviRpr,data));
      

    })

    
    this.reportDataDetail.push({"Col1": "Total", "Col2":data.TotalK, "Col3": data.TotalKT, "Col4":data.TotalT, "Col5": data.TotalH,  "Col6" :data.TotalF});

  }

  getVal(index: number,donvi: string, data: any) : any {
    if (index == 0) {
      return {"Col1": donvi, "Col2":data.K01, "Col3": data.KT01, "Col4":data.T01, "Col5": data.H01,  "Col6" :data.F01};
    } else if (index == 1) {
      return {"Col1": donvi, "Col2":data.K02, "Col3": data.KT02, "Col4":data.T02, "Col5": data.H02,  "Col6" :data.F02};
    } else if (index == 2) {
      return {"Col1": donvi, "Col2":data.K03, "Col3": data.KT03, "Col4":data.T03, "Col5": data.H03,  "Col6" :data.F03};
    }else if (index == 3) {
      return {"Col1": donvi, "Col2":data.K04, "Col3": data.KT04, "Col4":data.T04, "Col5": data.H04,  "Col6" :data.F04};
    }else if (index == 4) {
      return {"Col1": donvi, "Col2":data.K05, "Col3": data.KT05, "Col4":data.T05, "Col5": data.H05,  "Col6" :data.F05};
    }else if (index == 5) {
      return {"Col1": donvi, "Col2":data.K06, "Col3": data.KT06, "Col4":data.T06, "Col5": data.H06,  "Col6" :data.F06};
    }else if (index == 6) {
      return {"Col1": donvi, "Col2":data.K07, "Col3": data.KT07, "Col4":data.T07, "Col5": data.H07,  "Col6" :data.F07};
    }else if (index == 7) {
      return {"Col1": donvi, "Col2":data.K08, "Col3": data.KT08, "Col4":data.T08, "Col5": data.H08,  "Col6" :data.F08};
    }else if (index == 8) {
      return {"Col1": donvi, "Col2":data.K09, "Col3": data.KT09, "Col4":data.T09, "Col5": data.H09,  "Col6" :data.F09};
    }else if (index == 9) {
      return {"Col1": donvi, "Col2":data.K10, "Col3": data.KT10, "Col4":data.T10, "Col5": data.H10,  "Col6" :data.F10};
    }else if (index == 10) {
      return {"Col1": donvi, "Col2":data.K11, "Col3": data.KT11, "Col4":data.T11, "Col5": data.H11,  "Col6" :data.F11};
    } else if (index == 11) {
      return {"Col1": donvi, "Col2":data.K12, "Col3": data.KT12, "Col4":data.T12, "Col5": data.H12,  "Col6" :data.F12};
    }
    else if (index == 12) {
      return {"Col1": donvi, "Col2":data.K13, "Col3": data.KT13, "Col4":data.T13, "Col5": data.H13,  "Col6" :data.F13};
    }
    else if (index == 13) {
      return {"Col1": donvi, "Col2":data.K14, "Col3": data.KT14, "Col4":data.T14, "Col5": data.H14,  "Col6" :data.F14};
    }
    else if (index == 14) {
      return {"Col1": donvi, "Col2":data.K15, "Col3": data.KT15, "Col4":data.T15, "Col5": data.H15,  "Col6" :data.F15};
    }
  }


  taoMangBanDau ()
  {
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
    //this.reportFormat.push({"Tổng": this.KarrHeader[i], "Col2":0, "Col3": 0, "Col4":0, "Col5": 0,  "Col6" :0});

    //console.log(this.reportFormat);
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
  else thang =  (this.ngayVal.getMonth() + 1).toString();
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
    this.cap1s = [];
    //---- lấy cấp 1 
    this.reportDataArr1.filter(t=> t.Ma_Kx === "" && t.Ten_kx2 === "" && t.Ma_Mau === "").
    forEach (k=> this.cap1s.push(k.Ten_kx3))
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

export class Longtab {
  text: string;
}

export class DonViIndex {
  text: string;
  vitri: number;
}