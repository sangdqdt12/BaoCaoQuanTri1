import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { Observable } from 'rxjs';
import { WorkingEnviroment } from 'src/app/00.Common/WorkingEnviroment';
import { ManHinhService } from 'src/app/01.Service/00.Common/man-hinh.service';
import { ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent implements OnInit {
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

  windowHeight: number;
  windowWide: number;
  workspaceHeight: number;
  workspaceWide: number;



  constructor(
        private comboxService: ComboxService,
    private reportService: ReportService,
    private manHinhService: ManHinhService,
    @Inject(DOCUMENT) private document: any,
    @Inject(SESSION_STORAGE) public storage: WebStorageService
    ) { 

    }

    customizeText(arg) {
      return arg.valueText + ' %';
  }
    

    ngOnInit(): void {
    
      this.donViCoSos = [];
      this.workEv = this.storage.get('ENV');
      this.userGetData = this.workEv.UserID;
  
      this.elem = document.documentElement;
     
      this. windowHeight= window.innerHeight;
      this.windowWide =window.innerWidth ;
      this.workspaceHeight= this.manHinhService.layChieuCao(window.innerWidth,window.innerHeight);
      this.workspaceWide= this.manHinhService.layChieuRong(window.innerWidth,window.innerHeight);
        
      if(this.manHinhService.canFullScreen(window.innerWidth,window.innerHeight)) {
        this.openFullscreen();
        document.addEventListener('fullscreenchange', (event) => {
          // document.fullscreenElement will point to the element that
          // is in fullscreen mode if there is one. If there isn't one,
          // the value of the property is null.
          if (document.fullscreenElement) {
            console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
           
          } else {
            console.log('Leaving full-screen mode.');
           
          }
        });
      }
  
      
      
  

      this.comboxService.GetComboxFunction('DanhMucKhoi_NhomDonVICOSo').subscribe(
        t => {
          
  
          t.forEach (k=> {
            if (k.ten_nh == "TOYOTA") {
              this.khoiVal = k.ma_nh;
              this.donViCoSos.push ({"ma_nh":k.ma_nh ,"ten_nh":"TOY"})
            } else if (k.ten_nh == "FORD") {
              this.donViCoSos.push ({"ma_nh":k.ma_nh ,"ten_nh":"FORD"})
            }
          });
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
