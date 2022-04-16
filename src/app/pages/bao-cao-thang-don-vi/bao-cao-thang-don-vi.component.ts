

import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { LoaiManHinh } from 'src/app/00.Common/EnumDefine';
import { WorkingEnviroment } from 'src/app/00.Common/WorkingEnviroment';
import { ManHinhService } from 'src/app/01.Service/00.Common/man-hinh.service';
import { ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';

import { DateTimeHelperService } from 'src/app/01.Service/00.Common/date-time-helper.service';
import { GiaiTrinhTbl } from 'src/app/Model/DanhMuc/GiaiTrinhTbl';
import { GeClientService } from 'src/app/01.Service/GeClientService';
import { HttpClient } from '@angular/common/http';
import { GiaiTrinhComponent } from 'src/app/cap-nhat-thong-tin/giai-trinh/giai-trinh.component';


@Component({
  selector: 'app-bao-cao-thang-don-vi',
  templateUrl: './bao-cao-thang-don-vi.component.html',
  styleUrls: ['./bao-cao-thang-don-vi.component.scss']
})
export class BaoCaoThangDonViComponent implements OnInit {

  @ViewChild("child1", { static: true }) child1: GiaiTrinhComponent;
  @ViewChild("child2", { static: true }) child2: GiaiTrinhComponent;
  @ViewChild("child3", { static: true }) child3: GiaiTrinhComponent;
  @ViewChild("child4", { static: true }) child4: GiaiTrinhComponent;
  @ViewChild("child5", { static: true }) child5: GiaiTrinhComponent;
  @ViewChild("child6", { static: true }) child6: GiaiTrinhComponent;
  @ViewChild("child7", { static: true }) child7: GiaiTrinhComponent;
  @ViewChild("child8", { static: true }) child8: GiaiTrinhComponent;
  @ViewChild("child9", { static: true }) child9: GiaiTrinhComponent;
  @ViewChild("child10", { static: true }) child10: GiaiTrinhComponent;
  @ViewChild("child11", { static: true }) child11: GiaiTrinhComponent;
  @ViewChild("child12", { static: true }) child12: GiaiTrinhComponent;
  @ViewChild("child13", { static: true }) child13: GiaiTrinhComponent;
  @ViewChild("child14", { static: true }) child14: GiaiTrinhComponent;
  @ViewChild("child15", { static: true }) child15: GiaiTrinhComponent;
  @ViewChild("child16", { static: true }) child16: GiaiTrinhComponent;
  @ViewChild("child17", { static: true }) child17: GiaiTrinhComponent;
  @ViewChild("child18", { static: true }) child18: GiaiTrinhComponent;
  @ViewChild("child19", { static: true }) child19: GiaiTrinhComponent;
  @ViewChild("child20", { static: true }) child20: GiaiTrinhComponent;
  @ViewChild("child21", { static: true }) child21: GiaiTrinhComponent;
  @ViewChild("child22", { static: true }) child22: GiaiTrinhComponent;
  @ViewChild("child23", { static: true }) child23: GiaiTrinhComponent;


  donViCoSos: any[] = [];
  khois: any[] = [];
  khoiVal: string = '';
  donVi: string = '';
  tuNgayVal: Date = new Date();
  denNgayVal: Date = new Date();
  elem: any;
  userGetData: string;
  popupVisible: boolean = false;
  popupEdit: boolean = false;
  workEv: WorkingEnviroment;

  loadIndicatorVisible: boolean;

  ICDCP_WBI_TH_CHART_data: ICDCP_WBI_DV_CHART_model[];
  Data1: ICDCP_WBI_DV_CHART_model[] = [];
  Data2: ICDCP_WBI_DV_CHART_model[] = [];
  Data3: ICDCP_WBI_DV_CHART_model[] = [];
  Data4: ICDCP_WBI_DV_CHART_model[] = [];
  Data5: ICDCP_WBI_DV_CHART_model[] = [];
  Data6: ICDCP_WBI_DV_CHART_model[] = [];
  Data7: ICDCP_WBI_DV_CHART_model[] = [];
  Data8: ICDCP_WBI_DV_CHART_model[] = [];
  Data9: ICDCP_WBI_DV_CHART_model[] = [];
  Data10: ICDCP_WBI_DV_CHART_model[] = [];
  Data11: ICDCP_WBI_DV_CHART_model[] = [];
  Data12: ICDCP_WBI_DV_CHART_model[] = [];
  Data13: ICDCP_WBI_DV_CHART_model[] = [];
  Data14: ICDCP_WBI_DV_CHART_model[] = [];
  Data15: ICDCP_WBI_DV_CHART_model[] = [];
  Data16: ICDCP_WBI_DV_CHART_model[] = [];
  Data17: ICDCP_WBI_DV_CHART_model[] = [];
  Data18: ICDCP_WBI_DV_CHART_model[] = [];
  Data19: ICDCP_WBI_DV_CHART_model[] = [];
  Data20: ICDCP_WBI_DV_CHART_model[] = [];
  Data21: ICDCP_WBI_DV_CHART_model[] = [];
  Data22: ICDCP_WBI_DV_CHART_model[] = [];
  Data23: ICDCP_WBI_DV_CHART_model[] = [];

  Data1x: ICDCP_WBI_DV_CHART_model = new ICDCP_WBI_DV_CHART_model();
  Data2x: ICDCP_WBI_DV_CHART_model = new ICDCP_WBI_DV_CHART_model();
  Data3x: ICDCP_WBI_DV_CHART_model = new ICDCP_WBI_DV_CHART_model();
  Data4x: ICDCP_WBI_DV_CHART_model = new ICDCP_WBI_DV_CHART_model();
  Data5x: ICDCP_WBI_DV_CHART_model = new ICDCP_WBI_DV_CHART_model();
  Data6x: ICDCP_WBI_DV_CHART_model = new ICDCP_WBI_DV_CHART_model();
  Data7x: ICDCP_WBI_DV_CHART_model = new ICDCP_WBI_DV_CHART_model();
  Data8x: ICDCP_WBI_DV_CHART_model = new ICDCP_WBI_DV_CHART_model();
  Data9x: ICDCP_WBI_DV_CHART_model = new ICDCP_WBI_DV_CHART_model();
  Data10x: ICDCP_WBI_DV_CHART_model = new ICDCP_WBI_DV_CHART_model();
  Data11x: ICDCP_WBI_DV_CHART_model = new ICDCP_WBI_DV_CHART_model();
  Data12x: ICDCP_WBI_DV_CHART_model = new ICDCP_WBI_DV_CHART_model();
  Data13x: ICDCP_WBI_DV_CHART_model = new ICDCP_WBI_DV_CHART_model();
  Data14x: ICDCP_WBI_DV_CHART_model = new ICDCP_WBI_DV_CHART_model();
  Data15x: ICDCP_WBI_DV_CHART_model = new ICDCP_WBI_DV_CHART_model();
  Data16x: ICDCP_WBI_DV_CHART_model = new ICDCP_WBI_DV_CHART_model();
  Data17x: ICDCP_WBI_DV_CHART_model[] = [new ICDCP_WBI_DV_CHART_model()];
  Data18x: ICDCP_WBI_DV_CHART_model[] = [new ICDCP_WBI_DV_CHART_model()];
  Data19x: ICDCP_WBI_DV_CHART_model[] = [new ICDCP_WBI_DV_CHART_model()];

  GiaiTrinh1: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh2: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh3: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh4: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh5: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh6: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh7: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh8: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh9: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh10: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh11: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh12: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh13: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh14: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh15: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh16: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh17: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh18: GiaiTrinhTbl = new GiaiTrinhTbl();
  GiaiTrinh19: GiaiTrinhTbl = new GiaiTrinhTbl();
  // GiaiTrinh20: GiaiTrinhTbl = new GiaiTrinhTbl();
  // GiaiTrinh21: GiaiTrinhTbl = new GiaiTrinhTbl();
  // GiaiTrinh22: GiaiTrinhTbl = new GiaiTrinhTbl();
  // GiaiTrinh23: GiaiTrinhTbl = new GiaiTrinhTbl();



  chartWith: number;
  chartHeith: number;

  comtWith: number;
  comHeith: number;

  valueContent: string;
  editorValueType: string = "html";

  geClientService: GeClientService<GiaiTrinhTbl>;

  constructor(
    private http: HttpClient,

    private comboxService: ComboxService,
    private reportService: ReportService,
    private manHinhService: ManHinhService,
    private dateTimeHelperService: DateTimeHelperService,
    @Inject(DOCUMENT) private document: any,
    @Inject(SESSION_STORAGE) public storage: WebStorageService
  ) {
    this.workEv = this.storage.get('ENV');
    this.userGetData = this.workEv.UserID;
    this.geClientService = new GeClientService<GiaiTrinhTbl>(http, "GiaiTrinhTbl");

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

  dieuChinhKichCo() {

    if (this.manHinhService.loaiManHinh(window.innerWidth, window.innerHeight) == LoaiManHinh.To) {
      var dieuChinh = 80;
      var tongRong = this.manHinhService.layChieuRong(window.innerWidth, window.innerHeight);
      this.chartWith = ((tongRong - dieuChinh) / 12) * 7;
      this.chartHeith = 300;
      this.comtWith = ((tongRong - dieuChinh) / 12) * 3;
      this.comHeith = this.chartHeith - 35;

    }
  }

  Edit(e) {
    var a = e;
    this.showEdit();
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

    this.reportService.GhiNhanLogSuDungMenu(
      "CP_LogSuDungMenu", this.userGetData, "Báo cáo tháng đơn vị"
    ).subscribe(t => {});


    this.comboxService.GetComboxFunction('CP_DanhMucKhoi_NhomDonViCoSo_User?User=' + this.userGetData).subscribe(
      t => {

        t.forEach(k => {
          if (k.ten_nh == "TOYOTA") {

            this.khois.push({ "ma_nh": k.ma_nh, "ten_nh": "TOY" })
          } else if (k.ten_nh == "FORD") {

            this.khois.push({ "ma_nh": k.ma_nh, "ten_nh": "FORD" })
          }
        });
        if (this.khois.length > 0) {
          this.khoiVal = this.khois[0].ma_nh;
        }
        this.fillData();
      },
      error => { notify("Có lỗi xẩy ra") }


    );

    this.comboxService.GetComboxFunctionUser('CP_DanhMucDonVi_User', this.userGetData).subscribe(
      t => {
        this.donViCoSos = t;

        if(this.donViCoSos.length >0 )
        {
          this.donVi = this.donViCoSos[0].Ma_dvcs;
        }

        this.fillData();
        },
      error => { notify("Lỗi thi lấy đơn vị " + error.message) }
    );
  }

  showFilter() {
    this.popupVisible = true;
  }

  search()
  {
    this.daChay = false;
    this.fillData();
  }

  showEdit() {
    this.popupEdit = true;
  }


  loadServeData() {
    try {
    this.child1.Search();
    this.child2.Search();
    this.child3.Search();
    this.child4.Search();
    this.child5.Search();
    this.child6.Search();
    this.child7.Search();
    this.child8.Search();
    this.child9.Search();
    this.child10.Search();
    this.child11.Search();
    this.child12.Search();
    this.child13.Search();
    this.child14.Search();
    this.child15.Search();
    this.child16.Search();
    this.child17.Search();
    this.child18.Search();
    this.child19.Search();
    // this.child20.Search();
    // this.child21.Search();
    // this.child22.Search();
    // this.child23.Search();
    this.popupVisible = false;
  }
  catch (e) {
      notify ("Lỗi search giải thích " + e.message);
  }
  }
  close() {
    this.popupVisible = false;
  }

  daChay = false;
  fillData() {
    if (this.khoiVal == '' || this.khoiVal === 'undefined')
      return;
    if (typeof this.khoiVal == undefined || this.khoiVal === 'undefined' || this.khoiVal == '' ) {
      console.log("khoi cap undefined");
      return;
    }
    else 
    {
      console.log("khoi cap Ok");
      
    }

    if (typeof this.donVi == undefined || this.donVi === 'undefined' || this.khoiVal == '') {
      console.log("don vi cap undefined");
      return;
    }
    else
    {
      console.log("don vi Ok");
    }

    if(this.daChay == true) 
    {
      console.log("Da chay roi khong chay lai");
      return;
    }
    else 
    {
      console.log("Load data tu server");
    }

    this.daChay = true;
    console.log("Load data");
    this.popupVisible = false;
    var sTuNgay = this.dateTimeHelperService.dateToString(this.tuNgayVal);




    this.loadIndicatorVisible = true;
    this.reportService.ICDCP_WBI_DV_CHART(this.khoiVal, sTuNgay, "", this.donVi, this.userGetData).subscribe(
      t => {
       
        this.ICDCP_WBI_TH_CHART_data = t;
        this.Data1 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '01' && t.Ten_Bp !== 'ALL');
        this.Data2 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '02' && t.Ten_Bp !== 'ALL');
        this.Data3 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '03' && t.Ten_Bp !== 'ALL');
        this.Data4 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '04' && t.Ten_Bp !== 'ALL');
        this.Data5 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '05' && t.Ten_Bp !== 'ALL');
        this.Data6 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '06' && t.Ten_Bp !== 'ALL');
        this.Data7 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '07' && t.Ten_Bp !== 'ALL');
        this.Data8 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '08' && t.Ten_Bp !== 'ALL');
        this.Data9 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '09' && t.Ten_Bp !== 'ALL');
        this.Data10 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '10' && t.Ten_Bp !== 'ALL');
        this.Data11 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '11' && t.Ten_Bp !== 'ALL');
        this.Data12 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '12' && t.Ten_Bp !== 'ALL');
        this.Data13 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '13' && t.Ten_Bp !== 'ALL');
        this.Data14 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '14' && t.Ten_Bp !== 'ALL');
        this.Data15 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '15' && t.Ten_Bp !== 'ALL');
        this.Data16 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '16' && t.Ten_Bp !== 'ALL');
        this.Data17 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '17' && t.Ten_Bp !== 'ALL');
        this.Data18 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '18' && t.Ten_Bp !== 'ALL');
        this.Data19 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '19' && t.Ten_Bp !== 'ALL');
        this.Data20 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '20' && t.Ten_Bp !== 'ALL');
        this.Data21 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '21' && t.Ten_Bp !== 'ALL');
        this.Data22 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '22' && t.Ten_Bp !== 'ALL');
        this.Data23 = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '23' && t.Ten_Bp !== 'ALL');


        this.Data1x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '01' && t.Ten_Bp === 'ALL')[0];
        this.Data2x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '02' && t.Ten_Bp === 'ALL')[0];
        this.Data3x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '03' && t.Ten_Bp === 'ALL')[0];
        this.Data4x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '04' && t.Ten_Bp === 'ALL')[0];
        this.Data5x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '05' && t.Ten_Bp === 'ALL')[0];
        this.Data6x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '06' && t.Ten_Bp === 'ALL')[0];
        this.Data7x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '07' && t.Ten_Bp === 'ALL')[0];
        this.Data8x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '08' && t.Ten_Bp === 'ALL')[0];
        this.Data9x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '09' && t.Ten_Bp === 'ALL')[0];
        this.Data10x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '10' && t.Ten_Bp === 'ALL')[0];
        this.Data11x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '11' && t.Ten_Bp === 'ALL')[0];
        this.Data12x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '12' && t.Ten_Bp === 'ALL')[0];
        this.Data13x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '13' && t.Ten_Bp === 'ALL')[0];
        this.Data14x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '14' && t.Ten_Bp === 'ALL')[0];
        this.Data15x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '15' && t.Ten_Bp === 'ALL')[0];
        this.Data16x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '16' && t.Ten_Bp === 'ALL')[0];
        this.Data17x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '17' );

        this.Data18x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '18' );
        this.Data19x = this.ICDCP_WBI_TH_CHART_data.filter(t => t.Stt_Dashboard == '19' );
        this.loadIndicatorVisible = false;
        this.loadServeData();

       





        //var tong =  t.filter(k=> k.Ten_Dvcs === 'ALL');
      },
      error => {
        this.loadIndicatorVisible = false;
        notify("Lỗi dữ liệu ICDCP_WBI_TH_CHART");
      }
    );


  }
}


export class ICDCP_WBI_DV_CHART_model {
  Stt_Dashboard: string;
  Ma_Bp: string;
  Ten_Bp: string;
  Ma_So: string;
  Chi_tieu: string;

  ns_ck_01: number;
  ns_vao_01: number;
  ns_ra_01: number;
  ke_hoach_02: number;
  thuc_hien_02: number;
  htkh_02: number;
  so_ck_02: number;
  xe_ban_03: number;
  ke_hoach_03: number;
  ktkh_03: number;
  so_ck_03: number;
  ke_hoach_04: number;
  thuc_hien_04: number;
  htkh_04: number;
  co_ck_04: number;
  ke_hoach_05: number;
  thuc_hien_05: number;
  htkh_05: number;
  so_ck_05: number;
  xe_mua_06: number;
  xe_ban_06: number;
  htkh_06: number;
  so_ck_06: number;
  thuc_hien_07: number;
  ke_hoach_07: number;
  htkh_07: number;
  so_ck_07: number;
  thuc_hien_08: number;
  ke_hoach_08: number;
  htkh_08: number;
  so_ck_08: number;
  dt_nt_09: number;
  ke_hoach_nt_09: number;
  nt_xe_09: number;
  htkh_09: number;
  so_ck_dtnt_09: number;
  so_ck_nt_xe_09: number;
  htkh_nt_xe_09: number;
  lng_nt_10: number;
  htkh_10: number;
  so_ck_10: number;
  dt_bh_11: number;
  ke_hoach_bh_11: number;
  htkh_11: number;
  bh_xe_11: number;
  co_ck_11: number;
  ke_hoach_12: number;
  thuc_hien_12: number;
  htkh_12: number;
  tyle_taitung_12: number;
  so_ck_12: number;
  ke_hoach_13: number;
  thuc_hien_13: number;
  htkh_13: number;
  so_ck_13: number;
  dtnt_tvbh_14: number;
  dtbh_tvbh_14: number;
  hieu_suat_xe_14: number;
  ke_hoach_15: number;
  thuc_hien_15: number;
  htkh_15: number;
  so_ck_15: number;
  ke_hoach_16: number;
  thuc_hien_16: number;
  htkh_16: number;
  so_ck_16: number;
  ke_hoach_17: number;
  thuc_hien_17: number;
  htkh_17: number;
  boi_thuong_18: number;
  ban_moi_18: number;
  ty_le_boi_thuong_18: number;
  so_ck_18: number;
  htkh_18: number;
  tieu_chuan_19: number;
  thuc_hien_19: number;
  ty_le_tieu_chuan_19: number;


}
