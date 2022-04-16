import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { Observable } from 'rxjs';
import { WorkingEnviroment } from 'src/app/00.Common/WorkingEnviroment';
import { ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';




@Component({
  selector: 'app-dask-board-ngay',
  templateUrl: './dask-board-ngay.component.html',
  styleUrls: ['./dask-board-ngay.component.scss']
})
export class DaskBoardNgayComponent implements OnInit {
  elem: any;
  reportDataArr1: any[] = [];
  reportData1: Observable<any[]>;
  userGetData:string = "";
  khoiVal:string;
  capVal:string;
  popupVisible: boolean = false;
  tuNgayVal: Date = new Date();
  denNgayVal: Date = new Date();
  workEv:WorkingEnviroment;
  donViCoSos: any[] = [];
  capCbxd: any[];



  constructor(
        private comboxService: ComboxService,
    private reportService: ReportService,
    @Inject(DOCUMENT) private document: any,
    @Inject(SESSION_STORAGE) public storage: WebStorageService
    ) { 

    }

    

    ngOnInit(): void {
    
      this.donViCoSos = [];
      this.workEv = this.storage.get('ENV');
      this.userGetData = this.workEv.UserID;

      this.reportService.GhiNhanLogSuDungMenu(
        "CP_LogSuDungMenu", this.userGetData, "Dashboard ngày"
      ).subscribe(t => {});
  
      this.elem = document.documentElement;
     
  
      
  
      if ( window.innerHeight < 900) {
        this.openFullscreen();
        if(window.innerHeight > window.innerWidth)
        {
          //this.gridHeight = window.innerHeight - 125 ;
        }
        else 
        {
         //this.gridHeight = window.innerHeight - 5 ;
        }
      } else 
      {
        //this.gridHeight = window.innerHeight - 125 ;
      }
      
      
  

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
          this.capVal = "1";
          this.fillData();
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
  
    showFilter() {
      this.popupVisible = true;
    }
  
  getNgayString (ngayVal:Date) {
    var nam: string;
    var thang: string;
    var ngay = "";
    var nam =  ngayVal.getFullYear().toString() ;

    if (ngayVal.getMonth()< 9) thang = "0" + (ngayVal.getMonth() + 1).toString();
    else thang =  ngayVal.getMonth().toString();
    
    if (ngayVal.getDate()< 10) ngay = "0" + ngayVal.getDate() .toString();
    else ngay =  ngayVal.getDate().toString();
  
    var ngays = nam + thang + ngay;
    return ngays;
  
  }


    fillData() {

      this.popupVisible = false;

      console.log(this.capVal);
      console.log(this.khoiVal);
  
      if (this.capVal == undefined)
      {
        console.log("cap undefined");
        return;
      }
  
      if (this.khoiVal == undefined)
      {
        console.log("cap undefined");
        return;
      }
  
      if (this.capVal === ""  || this.khoiVal === "") {
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
  
      
  
  
    
    this.reportData1 = this.reportService.CP_WKPI_BE_07(
      this.khoiVal,this.capVal,sTuNgay,sDenNgay,"","",this.userGetData
    );
    
  
      this.reportData1.subscribe(t => { 
        this.reportDataArr1 = t; 
      
      
      
     });
  
    }


    close() {
      this.popupVisible = false;
    }

  
}
