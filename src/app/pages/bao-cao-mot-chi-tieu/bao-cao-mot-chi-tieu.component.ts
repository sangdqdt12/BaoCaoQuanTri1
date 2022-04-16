import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IsLoadingService } from '@service-work/is-loading';
import { DxDataGridComponent } from 'devextreme-angular';
import { Observable } from 'rxjs';
import { FilterData } from 'src/app/00.Common/FilterData';
import { DateTimeHelperService } from 'src/app/01.Service/00.Common/date-time-helper.service';
import { ReportData, ReportService } from 'src/app/01.Service/report.service';
import { ComboxService } from 'src/app/combox.service';
import { ComboxData } from 'src/app/Model/LenhModel';

@Component({
  selector: 'app-bao-cao-mot-chi-tieu',
  templateUrl: './bao-cao-mot-chi-tieu.component.html',
  styleUrls: ['./bao-cao-mot-chi-tieu.component.scss']
})


export class BaoCaoMotChiTieuComponent implements OnInit {

  
  panelHeight = 465;
  chartHeight = this.panelHeight + 105;

  valueForEditableTextArea = 'Doanh thu đột biến do covid';
  header1 = 'h1';
  arrHeader: string[] = [];
  filterData: FilterData;
  loai1 = 'Doanh số';
  loai2 = 'Sản lượng';
  loaiBaoCaos: string[] = [this.loai1, this. loai2];
  reportData: Observable<ReportData[]>;
  reportDataArr: ReportData[];
  reportData1: Observable<ReportData[]>;
  reportDataArr1: ReportData[];
  reportData3: Observable<ReportData[]>;
  reportDataArr3: ReportData[];
  danhMucVungMienTblDataCombox: ComboxData[];
  XMBXDanhMucKieuXeTblDataCombox: ComboxData[];
  danhMucTinhThanhTblDataCombox: ComboxData[];
  XMDanhMucHangXeTblDataCombox: ComboxData[];
  DanhMucDonViNhapLieuTblDataCombox: ComboxData[];
  DanhMucKhachHangTblDataCombox: ComboxData[];
  XMBXMaMauTblDataCombox: ComboxData[];
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;


  constructor(
    private isLoadingService: IsLoadingService,
    private comboxService: ComboxService,
    public http: HttpClient,
    private reportService: ReportService,
    private dateTimeHelperService: DateTimeHelperService
  ) { }

  buttonOptions = {
    text: "Filter",
    type: "success",
    onClick: function () {
        // Implement your logic here
    }
};

  exportSelectedData() {
    this.dataGrid.instance.exportToExcel(true);
  }
  ngOnInit() {
    const homNay = new Date();
    this.filterData = new FilterData();
    this.filterData.LoaiBaoCao = this.loai1;
    this.filterData.Thang = (homNay.getMonth()).toString();
    this.filterData.Nam = homNay.getFullYear().toString();

    this.filterData.TuNam = (homNay.getFullYear() ). toString();
    this.filterData.TuThang = this.filterData.Thang;

    this.isLoadingService.add(
      this.comboxService.GetComboxDataSearch('XMDanhMucModelXeTbl').subscribe(
      t => {
        this.XMBXDanhMucKieuXeTblDataCombox = t;
      }
     )
    );
    this.isLoadingService.add(
      this.comboxService.GetComboxDataSearch('DanhMucVungMienTbl').subscribe(
      t => {
        this.danhMucVungMienTblDataCombox = t;
      }
     )
    );
    this.isLoadingService.add(
      this.comboxService.GetComboxDataSearch('DanhMucTinhThanhTbl').subscribe(
      t => {
        this.danhMucTinhThanhTblDataCombox = t;
      }
     )
    );
    this.isLoadingService.add(
      this.comboxService.GetComboxDataSearch('XMDanhMucHangXeTbl').subscribe(
      t => {
        this.XMDanhMucHangXeTblDataCombox = t;
      }
     )
    );
    this.isLoadingService.add(
      this.comboxService.GetComboxDataSearch('DanhMucDonViNhapLieuTbl').subscribe(
      t => {
        this.DanhMucDonViNhapLieuTblDataCombox = t;
      }
     )
    );
    /*
    this.isLoadingService.add(
      this.comboxService.GetComboxDataSearch('DanhMucKhachHangTbl').subscribe(
      t => {
        this.DanhMucKhachHangTblDataCombox = t;
      }
     )
    );
    */
    this.isLoadingService.add(
      this.comboxService.GetComboxDataSearch('XMBXMaMauTbl').subscribe(
      t => {
        this.XMBXMaMauTblDataCombox = t;
      }
     )
    );
  }

  filter() {

    this.arrHeader = this.dateTimeHelperService.getToyotaHeaderName(Number(this.filterData.TuNam), Number(this.filterData.TuThang),
    Number(this.filterData.Nam), Number(this.filterData.Thang)
    );
  

    let loaiBc: string;
    if (this.filterData.LoaiBaoCao === this.loai1) {
      loaiBc = '1';
    } else {
      loaiBc = '2';
    }

    const tuNgay = `${this.filterData.TuNam}-${this.filterData.TuThang}-1`;
    const denNgay = `${this.filterData.Nam}-${this.filterData.Thang}-1`;


    
    this.reportData3 = this.reportService.CP_BaoCaoKetQuaKinhDoanhKhoiDaiLyPhan1(
      loaiBc,
      tuNgay,
      denNgay,
    this.filterData.CuaHang,
    this.filterData.HangXe,
    this.filterData.Vung,
    this.filterData.Tinh,
    this.filterData.LoaiXe,
    '',
    this.filterData.MauXe,
    '',
    '',
    this.filterData.TuNam,
    this.filterData.TuThang,
    '');
    this.isLoadingService.add(
    this.reportData3.subscribe(t => { console.log(t); this.reportDataArr3 = t; }));


    this.reportData = this.reportService.CP_BaoCaoKetQuaKinhDoanhLocTheoChiTieuKhoiDaiLyPhan1(
      loaiBc,
      tuNgay,
      denNgay,
    this.filterData.CuaHang,
    this.filterData.HangXe,
    this.filterData.Vung,
    this.filterData.Tinh,
    this.filterData.LoaiXe,
    '',
    this.filterData.MauXe,
    '',
    '',
    this.filterData.TuNam,
    this.filterData.TuThang,
    '');
    this.isLoadingService.add(
    this.reportData.subscribe(t => {  this.reportDataArr = t; }));



    this.reportData1 = this.reportService.CP_BaoCaoHieuQuaKinhDoanhKhoiDaiLyPhan1(
      loaiBc,
      tuNgay,
      denNgay,
    this.filterData.CuaHang,
    this.filterData.HangXe,
    this.filterData.Vung,
    this.filterData.Tinh,
    this.filterData.LoaiXe,
    '',
    this.filterData.MauXe,
    '',
    '',
    this.filterData.TuNam,
    this.filterData.TuThang,
    '');
    this.reportData1.subscribe(t => { this.reportDataArr1 = t; });


   }

}
