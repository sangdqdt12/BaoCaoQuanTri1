import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GlobalVariableService } from '../global-variable.service';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  })
  };
  

  constructor(public global: GlobalVariableService, public http: HttpClient) { }

  public GetReport(
                  controlerName: string,
                  actionGetByID: string,
                  LoaiBaoCao: string,
                  TuNgay: string,
                  DenNgay: string,
                  DonViNhapLieu: string,
                  HangXe: string,
                  VungMien: string,
                  TinhThanh: string,
                  LoaiXe: string,
                  KieuXe: string,
                  MauXe: string,
                  KhachHang: string,
                  NhanVien: string,
                  Nam: string,
                  Thang: string,
                  nguoiQuanLy: string
    ): Observable<ReportData[]> {
      let queryString: string;
      queryString =
`?LoaiBaoCao=${LoaiBaoCao}&TuNgay=${TuNgay}&
DenNgay=${DenNgay}&
DonViNhapLieu=${DonViNhapLieu}&
HangXe=${HangXe}&
VungMien=${VungMien}&
TinhThanh=${TinhThanh}&
MauXe=${MauXe}&
LoaiXe=${LoaiXe}&
KieuXe=${KieuXe}&
KhachHang=${KhachHang}&
NhanVien=${NhanVien}&
Nam=${Nam}&
Thang=${Thang}&
QuanLyCuaHang=${nguoiQuanLy}`;
      const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
      //console.log(url);
      return this.http.get<ReportData[]>
    (url,  this.httpOptions);
  }

  public CP_BaoCaoXeMayTheoNgayTbl(
    LoaiBaoCao: string,
    TuNgay: string,
    DenNgay: string,
    DonViNhapLieu: string,
    HangXe: string,
    VungMien: string,
    TinhThanh: string,
    LoaiXe: string,
    KieuXe: string,
    MauXe: string,
    KhachHang: string,
    NhanVien: string,
    Nam: string,
    Thang: string,
    nguoiQuanLy: string
  ): Observable<ReportData[]> {
      return this.GetReport(
                          'CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco',
                          'CP_BaoCaoXeMayTheoNgayTbl',
                          LoaiBaoCao,
                          TuNgay,
                          DenNgay,
                          DonViNhapLieu,
                          HangXe,
                          VungMien,
                          TinhThanh,
                          LoaiXe,
                          KieuXe,
                          MauXe,
                          KhachHang,
                          NhanVien,
                          Nam,
                          Thang,
                          nguoiQuanLy
      );
  }

  public CP_BaoCaoXeMayTheoThangTbl(
    LoaiBaoCao: string,
    TuNgay: string,
    DenNgay: string,
    DonViNhapLieu: string,
    HangXe: string,
    VungMien: string,
    TinhThanh: string,
    LoaiXe: string,
    KieuXe: string,
    MauXe: string,
    KhachHang: string,
    NhanVien: string,
    Nam: string,
    Thang: string,
    nguoiQuanLy: string
  ): Observable<ReportData[]> {return this.GetReport(
                          'CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco',
                          'CP_BaoCaoXeMayTheoThangTbl',
                          LoaiBaoCao,
                          TuNgay,
                          DenNgay,
                          DonViNhapLieu,
                          HangXe,
                          VungMien,
                          TinhThanh,
                          LoaiXe,
                          KieuXe,
                          MauXe,
                          KhachHang,
                          NhanVien,
                          Nam,
                          Thang,
                          nguoiQuanLy
      );
  }

  public CP_BaoCaoCuaHangXeMayTheoThangTbl(
    LoaiBaoCao: string,
    TuNgay: string,
    DenNgay: string,
    DonViNhapLieu: string,
    HangXe: string,
    VungMien: string,
    TinhThanh: string,
    LoaiXe: string,
    KieuXe: string,
    MauXe: string,
    KhachHang: string,
    NhanVien: string,
    Nam: string,
    Thang: string,
    nguoiQuanLy: string
  ): Observable<ReportData[]> {return this.GetReport(
                          'CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco',
                          'CP_BaoCaoCuaHangXeMayTheoThangTbl',
                          LoaiBaoCao,
                          TuNgay,
                          DenNgay,
                          DonViNhapLieu,
                          HangXe,
                          VungMien,
                          TinhThanh,
                          LoaiXe,
                          KieuXe,
                          MauXe,
                          KhachHang,
                          NhanVien,
                          Nam,
                          Thang,
                          nguoiQuanLy

      );
  }

  public CP_BaoCaoNhanVienXeMayTheoNgayTbl(
    LoaiBaoCao: string,
    TuNgay: string,
    DenNgay: string,
    DonViNhapLieu: string,
    HangXe: string,
    VungMien: string,
    TinhThanh: string,
    LoaiXe: string,
    KieuXe: string,
    MauXe: string,
    KhachHang: string,
    NhanVien: string,
    Nam: string,
    Thang: string,
    nguoiQuanLy: string
  ): Observable<ReportData[]> {
      return this.GetReport(
                          'CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco',
                          'CP_BaoCaoNhanVienXeMayTheoNgayTbl',
                          LoaiBaoCao,
                          TuNgay,
                          DenNgay,
                          DonViNhapLieu,
                          HangXe,
                          VungMien,
                          TinhThanh,
                          LoaiXe,
                          KieuXe,
                          MauXe,
                          KhachHang,
                          NhanVien,
                          Nam,
                          Thang,
                          nguoiQuanLy
      );
  }

  public CP_BaoCaoNhanVienXeMayTheoThangTbl(
    LoaiBaoCao: string,
    TuNgay: string,
    DenNgay: string,
    DonViNhapLieu: string,
    HangXe: string,
    VungMien: string,
    TinhThanh: string,
    LoaiXe: string,
    KieuXe: string,
    MauXe: string,
    KhachHang: string,
    NhanVien: string,
    Nam: string,
    Thang: string,
    nguoiQuanLy: string
  ): Observable<ReportData[]> {
      return this.GetReport(
                          'CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco',
                          'CP_BaoCaoNhanVienXeMayTheoThangTbl',
                          LoaiBaoCao,
                          TuNgay,
                          DenNgay,
                          DonViNhapLieu,
                          HangXe,
                          VungMien,
                          TinhThanh,
                          LoaiXe,
                          KieuXe,
                          MauXe,
                          KhachHang,
                          NhanVien,
                          Nam,
                          Thang,
                          nguoiQuanLy
      );
  }

  public CP_BaoCaoXeMayTongHopTheoTuanTbl(
    LoaiBaoCao: string,
    TuNgay: string,
    DenNgay: string,
    DonViNhapLieu: string,
    HangXe: string,
    VungMien: string,
    TinhThanh: string,
    LoaiXe: string,
    KieuXe: string,
    MauXe: string,
    KhachHang: string,
    NhanVien: string,
    Nam: string,
    Thang: string,
    nguoiQuanLy: string
  ): Observable<ReportData[]> {return this.GetReport(
                          'CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco',
                          'CP_BaoCaoXeMayTongHopTheoTuanTbl',
                          LoaiBaoCao,
                          TuNgay,
                          DenNgay,
                          DonViNhapLieu,
                          HangXe,
                          VungMien,
                          TinhThanh,
                          LoaiXe,
                          KieuXe,
                          MauXe,
                          KhachHang,
                          NhanVien,
                          Nam,
                          Thang,
                          nguoiQuanLy
      );
  }
  
  public CP_BaoCaoXeMayTongHopTheoNgayTbl(
    LoaiBaoCao: string,
    TuNgay: string,
    DenNgay: string,
    DonViNhapLieu: string,
    HangXe: string,
    VungMien: string,
    TinhThanh: string,
    LoaiXe: string,
    KieuXe: string,
    MauXe: string,
    KhachHang: string,
    NhanVien: string,
    Nam: string,
    Thang: string,
    nguoiQuanLy: string
  ): Observable<ReportData[]> {return this.GetReport(
                          'CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco',
                          'CP_BaoCaoXeMayTongHopTheoNgayTbl',
                          LoaiBaoCao,
                          TuNgay,
                          DenNgay,
                          DonViNhapLieu,
                          HangXe,
                          VungMien,
                          TinhThanh,
                          LoaiXe,
                          KieuXe,
                          MauXe,
                          KhachHang,
                          NhanVien,
                          Nam,
                          Thang,
                          nguoiQuanLy
      );
  }

  public CP_BaoCaoTongHopTheoThangTbl(
    LoaiBaoCao: string,
    TuNgay: string,
    DenNgay: string,
    DonViNhapLieu: string,
    HangXe: string,
    VungMien: string,
    TinhThanh: string,
    LoaiXe: string,
    KieuXe: string,
    MauXe: string,
    KhachHang: string,
    NhanVien: string,
    Nam: string,
    Thang: string,
    nguoiQuanLy: string
  ): Observable<ReportData[]> {return this.GetReport(
                          'CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco',
                          'CP_BaoCaoTongHopTheoThangTbl',
                          LoaiBaoCao,
                          TuNgay,
                          DenNgay,
                          DonViNhapLieu,
                          HangXe,
                          VungMien,
                          TinhThanh,
                          LoaiXe,
                          KieuXe,
                          MauXe,
                          KhachHang,
                          NhanVien,
                          Nam,
                          Thang,
                          nguoiQuanLy
      );
  }
  
  public CP_BaoCaoKetQuaKinhDoanhKhoiDaiLyPhan1(
    LoaiBaoCao: string,
    TuNgay: string,
    DenNgay: string,
    DonViNhapLieu: string,
    HangXe: string,
    VungMien: string,
    TinhThanh: string,
    LoaiXe: string,
    KieuXe: string,
    MauXe: string,
    KhachHang: string,
    NhanVien: string,
    Nam: string,
    Thang: string,
    nguoiQuanLy: string
  ): Observable<ReportData[]> {return this.GetReport(
                          'CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco',
                          'CP_BaoCaoKetQuaKinhDoanhKhoiDaiLyPhan1',
                          LoaiBaoCao,
                          TuNgay,
                          DenNgay,
                          DonViNhapLieu,
                          HangXe,
                          VungMien,
                          TinhThanh,
                          LoaiXe,
                          KieuXe,
                          MauXe,
                          KhachHang,
                          NhanVien,
                          Nam,
                          Thang,
                          nguoiQuanLy
      );

      
  }

  public CP_BaoCaoKetQuaKinhDoanhTheoMotChiTieuKhoiDaiLyPhan1(
    LoaiBaoCao: string,
    TuNgay: string,
    DenNgay: string,
    DonViNhapLieu: string,
    HangXe: string,
    VungMien: string,
    TinhThanh: string,
    LoaiXe: string,
    KieuXe: string,
    MauXe: string,
    KhachHang: string,
    NhanVien: string,
    Nam: string,
    Thang: string,
    nguoiQuanLy: string
  ): Observable<ReportData[]> {return this.GetReport(
                          'CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco',
                          'CP_BaoCaoKetQuaKinhDoanhTheoMotChiTieuKhoiDaiLyPhan1',
                          LoaiBaoCao,
                          TuNgay,
                          DenNgay,
                          DonViNhapLieu,
                          HangXe,
                          VungMien,
                          TinhThanh,
                          LoaiXe,
                          KieuXe,
                          MauXe,
                          KhachHang,
                          NhanVien,
                          Nam,
                          Thang,
                          nguoiQuanLy
      );
  }


  

  public CP_BaoCaoHieuQuaKinhDoanhKhoiDaiLyPhan1(
    LoaiBaoCao: string,
    TuNgay: string,
    DenNgay: string,
    DonViNhapLieu: string,
    HangXe: string,
    VungMien: string,
    TinhThanh: string,
    LoaiXe: string,
    KieuXe: string,
    MauXe: string,
    KhachHang: string,
    NhanVien: string,
    Nam: string,
    Thang: string,
    nguoiQuanLy: string
  ): Observable<ReportData[]> {return this.GetReport(
                          'CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco',
                          'CP_BaoCaoHieuQuaKinhDoanhKhoiDaiLyPhan1',
                          LoaiBaoCao,
                          TuNgay,
                          DenNgay,
                          DonViNhapLieu,
                          HangXe,
                          VungMien,
                          TinhThanh,
                          LoaiXe,
                          KieuXe,
                          MauXe,
                          KhachHang,
                          NhanVien,
                          Nam,
                          Thang,
                          nguoiQuanLy
      );
  }

  public CP_BaoCaoKetQuaKinhDoanhLocTheoChiTieuKhoiDaiLyPhan1(
    LoaiBaoCao: string,
    TuNgay: string,
    DenNgay: string,
    DonViNhapLieu: string,
    HangXe: string,
    VungMien: string,
    TinhThanh: string,
    LoaiXe: string,
    KieuXe: string,
    MauXe: string,
    KhachHang: string,
    NhanVien: string,
    Nam: string,
    Thang: string,
    nguoiQuanLy: string
  ): Observable<ReportData[]> {return this.GetReport(
                          'CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco',
                          'CP_BaoCaoKetQuaKinhDoanhLocTheoChiTieuKhoiDaiLyPhan1',
                          LoaiBaoCao,
                          TuNgay,
                          DenNgay,
                          DonViNhapLieu,
                          HangXe,
                          VungMien,
                          TinhThanh,
                          LoaiXe,
                          KieuXe,
                          MauXe,
                          KhachHang,
                          NhanVien,
                          Nam,
                          Thang,
                          nguoiQuanLy
      );
  }

  public CP_BaoCaoTonKhoChung(
    khoi: string,
    cap: string,
    ngay: string,
    loaiBaoCao:string,
    maDonViCoSo: string,
    userName: string,

  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_BE_01";
    queryString = `?Khoi=${khoi}&Cap=${cap}&Ngay=${ngay}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo} &UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    //console.log(url);
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  
  //Khoi, Cap, TuNgay, DenNgay, LoaiBaoCao, MaDonViCoSo, UserName
  public CP_WKPI_BE_04A(
    Khoi: string,
    Cap: string,
    TuNgay: string,
    DenNgay:string,
    LoaiBaoCao:string,
    MaDonViCoSo: string,
    UserName: string,

  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_BE_04A";
    queryString = `?Khoi=${Khoi}&Cap=${Cap}&TuNgay=${TuNgay}&DenNgay=${DenNgay}&LoaiBaoCao=${LoaiBaoCao}&MaDonViCoSo=${MaDonViCoSo} &UserName=${UserName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    //console.log(url);
    return this.http.get<any[]>
    (url,this.httpOptions);
  }


  //Khoi, Cap, TuNgay, DenNgay, LoaiBaoCao, MaDonViCoSo, UserName
  public LayMenu(
    TenBaoCao: string,

  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_LayMenuCWebQuanTriGroup1";
    queryString = `?TenBaoCao=${TenBaoCao}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    //console.log(url);
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public LayMenuC2(
    TenBaoCao: string,
    Group1: string,

  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_LayMenuCWebQuanTriGroup2";
    queryString = `?TenBaoCao=${TenBaoCao}&Group1=${Group1}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    //console.log(url);
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public LayHeader(
    TenBaoCao: string,
    Group1: string,
    Group2: string,

  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_Header_MaTranMapPing";
    queryString = `?TenBaoCao=${TenBaoCao}&Group1=${Group1}&Group2=${Group2}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    //console.log(url);
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public LayHeaderWidth(
    TenBaoCao: string,
    Group1: string,
    Group2: string,

  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WHeader_MaTranMapPing";
    queryString = `?TenBaoCao=${TenBaoCao}&Group1=${Group1}&Group2=${Group2}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    //console.log(url);
    return this.http.get<any[]>
    (url,this.httpOptions);
  }



  

  public CP_WKPI_RO_03_T(
  
  ): Observable<any[]> {

    var khoi: string = "";
    var cap: string= "";
    var mauBaoCao: string= "";
    var tuNgay: string= "";
    var denNgay: string= "";
    var loaiBaoCao: string= "";
    var maDonViCoSo: string= "";
    var userName: string= "";


    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_RO_03";
    queryString = `?Khoi=${khoi}&Cap=${cap}&MauBaoCao=${mauBaoCao}&tuNgay=${tuNgay}&denNgay=${denNgay}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WKPI_RO_03(
    khoi: string,
    cap: string,
    mauBaoCao: string,
    tuNgay: string,
    denNgay: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_RO_03";
    queryString = `?Khoi=${khoi}&Cap=${cap}&MauBaoCao=${mauBaoCao}&tuNgay=${tuNgay}&denNgay=${denNgay}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WKPI_BE_07(
    khoi: string,
    cap: string,
    tuNgay: string,
    denNgay: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_BE_07";
    queryString = `?Khoi=${khoi}&Cap=${cap}&tuNgay=${tuNgay}&denNgay=${denNgay}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }


  public CP_BaoCaoTonKhoChungRutGon(
    khoi: string,
    cap: string,
    ngay: string,
    loai: string,
    maDonViCoSo: string,
    userName: string,

  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_BE_01_ThuGon";
    queryString = `?Khoi=${khoi}&Cap=${cap}&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=${maDonViCoSo} &UserName=CUONGNT`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    //console.log(url);
    return this.http.get<any[]>
    (url,this.httpOptions);
  }


  public CP_BaoCaoTonKhoChungDetail(
    khoi: string,
    cap: string,
    ngay: string,
    loai: string,
    maDonViCoSo: string,
    userName: string,
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_BE_01_ThuGon";
    queryString = `?Khoi=${khoi}&Cap=${cap}&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=${maDonViCoSo} &UserName=CUONGNT`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    //console.log(url);
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_BaoCaoTonKhoChungHeader(
    baoCao: string,
    khoi: string,
    loc: string,

  ): Observable<any[]> {
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "QuyDinhMauBaoCaoQuanTriTbl";
    queryString = `?BaoCao=${baoCao}&Khoi=${khoi}&Loc=${loc}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    //console.log(url);
    return this.http.get<any[]>
    (url,this.httpOptions);
  }


  public CP_BaoCaoTonKhoChung2(
    khoi: string,
    cap: string,
    ngay: string,
    loai: string,
    maDonViCoSo: string,
    userName: string,

  ): Observable<any[]> {

    //http://222.252.18.18:40000/WebBaoCaoERP/WebBaoCaoERP/CP_WKPI_BE_01/?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_BE_01";
    queryString = "?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT";
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    //console.log(url);
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WKPI_BE_02(
    khoi: string,
    cap: string,
    tuNgay: string,
    denNgay: string,
    isDaiLy:string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_BE_02";
    queryString = `?Khoi=${khoi}&Cap=${cap}&tuNgay=${tuNgay}&denNgay=${denNgay}&isDaiLy=${isDaiLy}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WKPI_BE_03(
    khoi: string,
    cap: string,
    tuNgay: string,
    denNgay: string,
    maKieuXe:string,
    tinhTrangKhach:string,
    nguonKhach:string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_BE_03";
    queryString = `?Khoi=${khoi}&Cap=${cap}&tuNgay=${tuNgay}&denNgay=${denNgay}&maKieuXe=${maKieuXe}&tinhTrangKhach=${tinhTrangKhach}&nguonKhach=${nguonKhach}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WKPI_BE_03B(
    khoi: string,
    cap: string,
    tuNgay: string,
    denNgay: string,
    maKieuXe:string,
    tinhTrangKhach:string,
    nguonKhach:string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_BE_03B";
    queryString = `?Khoi=${khoi}&Cap=${cap}&tuNgay=${tuNgay}&denNgay=${denNgay}&maKieuXe=${maKieuXe}&tinhTrangKhach=${tinhTrangKhach}&nguonKhach=${nguonKhach}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WKPI_BE_04B(
    khoi: string,
    cap: string,
    tuNgay: string,
    denNgay: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string,
    mfleet : string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_BE_04B";
    queryString = `?Khoi=${khoi}&Cap=${cap}&tuNgay=${tuNgay}&denNgay=${denNgay}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}&mFleet=${mfleet}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }
  public CP_WKPI_BE_05(
    khoi: string,
    cap: string,
    tuNgay: string,
    denNgay: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string,
    mfleet : string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_BE_05";
    queryString = `?Khoi=${khoi}&Cap=${cap}&tuNgay=${tuNgay}&denNgay=${denNgay}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}&mFleet=${mfleet}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }
  public CP_WKPI_BE_06(
    khoi: string,
    cap: string,
    tuNgay: string,
    denNgay: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_BE_06";
    queryString = `?Khoi=${khoi}&Cap=${cap}&tuNgay=${tuNgay}&denNgay=${denNgay}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WKPI_RO_01(
    khoi: string,
    loadKyTruoc: string,
    cap: string,
    mauBaoCao: string,
    tuNgay: string,
    denNgay: string,
    tuNgayKyTruoc: string,
    denNgayKyTruoc: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_RO_01";
    queryString = `?Khoi=${khoi}&loadKyTruoc=${loadKyTruoc}&Cap=${cap}&mauBaoCao=${mauBaoCao}&tuNgay=${tuNgay}&denNgay=${denNgay}&tuNgayKyTruoc=${tuNgayKyTruoc}&denNgayKyTruoc=${denNgayKyTruoc}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WKPI_RO_02(
    khoi: string,
    cap: string,
    mauBaoCao: string,
    tuNgay: string,
    denNgay: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_RO_02";
    queryString = `?Khoi=${khoi}&Cap=${cap}&mauBaoCao=${mauBaoCao}&tuNgay=${tuNgay}&denNgay=${denNgay}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }


  public CP_WBI_BE_01_01(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_01";
    queryString = `?Khoi=${khoi}&TuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }


  public CP_WBI_BE_01_02(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_02";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WBI_BE_01_05(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_05";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WBI_BE_01_03(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_03";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WBI_BE_01_04(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_04";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }


  public CP_WBI_BE_01_06(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_06";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  
  public CP_WBI_BE_01_07(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_07";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  
  public CP_WBI_BE_01_08(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_08";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public GhiNhanLogSuDungMenu(dataName: string, userName:string , menuName: string): Observable<any[]> {
    const url = `${this.global.url}/BaoCaoQuanTri/${dataName}?User=${userName}&MenuName=${menuName}`;
    return this.http.get<any[]>(
      url
      );
  }
  
  public CP_WBI_BE_01_09(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_09";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }



  public CP_WBI_BE_01_10(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_10";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }


  
  public CP_WBI_BE_01_11(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_11";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WBI_BE_01_12(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_12";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }


  public CP_WBI_BE_01_13(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_13";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WBI_BE_01_14(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_14";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WBI_BE_01_15(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_15";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WBI_BE_01_17(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_17";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WBI_BE_01_18(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_18";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WBI_BE_01_16(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_BE_01_16";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MaKieuXe=${maKieuXe}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }



  public CP_Quyen_user(
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_Quyen_user";
    queryString = `?UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_Get_Menu(
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_Get_Menu";
    queryString = ``;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }


  public CP_WBI_RO_01_01(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_RO_01_01";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }
  public CP_WBI_RO_01_02(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_RO_01_02";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WBI_RO_01_03(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_RO_01_03";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WBI_RO_01_04(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_RO_01_04";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WBI_RO_01_05(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_RO_01_05";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WBI_RO_01_06(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_RO_01_06";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }


  public CP_WBI_RO_01_07(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_RO_01_07";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }
  public CP_WBI_RO_01_08(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_RO_01_08";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }
  public CP_WBI_RO_01_09(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_RO_01_09";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }


  
  public CP_WBI_RO_01_10(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_RO_01_10";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }
  public CP_WBI_RO_01_11(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_RO_01_11";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }
  public CP_WBI_RO_01_12(
    khoi: string,
    tuNgay: string,
    maKieuXe: string,
    mauBaoCao: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WBI_RO_01_12";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&MauBaoCao=${mauBaoCao}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }


  public ICDCP_WBI_TH_CHART(
    khoi: string,
    tuNgay: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "ICDCP_WBI_TH_CHART";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public ICDCP_WBI_DV_CHART(
    khoi: string,
    tuNgay: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "ICDCP_WBI_DV_CHART";
    queryString = `?Khoi=${khoi}&tuNgay=${tuNgay}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }


  public CP_WKPI_TREND_RO01(
    khoi: string,
    cap: string,
    maubaocao: string,
    thang1: string,
    nam1: string,
    thang2: string,
    nam2: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_TREND_RO01";
    queryString = `?Khoi=${khoi}&Cap=${cap}&MauBaoCao=${maubaocao}&Thang1=${thang1}&Nam1=${nam1}&Thang2=${thang2}&Nam2=${nam2}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WKPI_TREND_BE04A(
    khoi: string,
    cap: string,
    maubaocao: string,
    thang1: string,
    nam1: string,
    thang2: string,
    nam2: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_TREND_BE04A";
    queryString = `?Khoi=${khoi}&Cap=${cap}&MauBaoCao=${maubaocao}&Thang1=${thang1}&Nam1=${nam1}&Thang2=${thang2}&Nam2=${nam2}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WKPI_CR_01(
    khoi: string,
    cap: string,
    thang: string,
    nam: string,
    madra: string,
    tbname: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    //Khoi, Cap, Thang, Nam, MaDRA, TBName, LoaiBaoCao, MaDonViCoSo, UserName
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_CR_01";
    queryString = `?Khoi=${khoi}&Cap=${cap}&Thang=${thang}&Nam=${nam}&MaDRA=${madra}&TBName=${tbname}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WKPI_CR_02(
    khoi: string,
    cap: string,
    madra: string,
    tungay: string,
    denngay: string,
    tbname: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    //Khoi, Cap, MaDRA, TuNgay, DenNgay, TBName, LoaiBaoCao, MaDonViCoSo, UserName
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_CR_02";
    queryString = `?Khoi=${khoi}&Cap=${cap}&MaDRA=${madra}&TuNgay=${tungay}&DenNgay=${denngay}&TBName=${tbname}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WKPI_CR_02B(
    khoi: string,
    cap: string,
    madra: string,
    tungay: string,
    denngay: string,
    isquan : string,
    matp: string,
    tbname: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    //Khoi, Cap, MaDRA, TuNgay, DenNgay, IsQuan, MaTp, TBName, LoaiBaoCao, MaDonViCoSo, UserName
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_CR_02B";
    queryString = `?Khoi=${khoi}&Cap=${cap}&MaDRA=${madra}&TuNgay=${tungay}&DenNgay=${denngay}&IsQuan=${isquan}&MaTp=${matp}&TBName=${tbname}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WKPI_CR_03(
    khoi: string,
    cap: string,
    nam: string,
    tbname: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    //Khoi,  Cap,  Nam,  TBName,  LoaiBaoCao,  MaDonViCoSo,  UserName
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_CR_03";
    queryString = `?Khoi=${khoi}&Cap=${cap}&Nam=${nam}&TBName=${tbname}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WKPI_CR_04(
    khoi: string,
    cap: string,
    nam: string,
    tbname: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    //Khoi, Cap, Nam, TBName, LoaiBaoCao, MaDonViCoSo, UserName
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_CR_04";
    queryString = `?Khoi=${khoi}&Cap=${cap}&Nam=${nam}&TBName=${tbname}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WKPI_CR_05(
    khoi: string,
    cap: string,
    nam: string,
    tbname: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    //Khoi, Cap, Nam, TBName, LoaiBaoCao, MaDonViCoSo, UserName
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_CR_05";
    queryString = `?Khoi=${khoi}&Cap=${cap}&Nam=${nam}&TBName=${tbname}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  public CP_WKPI_CR_06(
    khoi: string,
    cap: string,
    thang : string,
    nam: string,
    tbname: string,
    loaiBaoCao: string,
    maDonViCoSo: string,
    userName: string
  ): Observable<any[]> {
    //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
    //Khoi, Cap, Thang, Nam, TBName, LoaiBaoCao, MaDonViCoSo,  UserName
    let controlerName: string;
    let actionGetByID: string;
    let queryString: string;
    controlerName = "BaoCaoQuanTri";
    actionGetByID = "CP_WKPI_CR_06";
    queryString = `?Khoi=${khoi}&Cap=${cap}&Thang=${thang}&Nam=${nam}&TBName=${tbname}&LoaiBaoCao=${loaiBaoCao}&MaDonViCoSo=${maDonViCoSo}&UserName=${userName}`;
    const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
    return this.http.get<any[]>
    (url,this.httpOptions);
  }

  
}


export class BaoCaoTonKhoChung {
  Ma_dvcs: string;
  Thang: number;
  Ten_kx2: string;
  Ten_kx3: string;
  Ma_so: string;
  Ma_Kx: string;
  Ma_Mau: string;
  Nam_sx: number;
  Ton00: number;
  KT01: number;
  KT02: number;
  KT03: number;
  KT04: number;
  KT05: number;
  KT06: number;
  KT07: number;
  KT08: number;
  KT09: number;
  KT10: number;
  KT11: number;
  KT12: number;
  KT13: number;
  KT14: number;
  KT15: number;
  K01: number;
  K02: number;
  K03: number;
  K04: number;
  K05: number;
  K06: number;
  K07: number;
  K08: number;
  K09: number;
  K10: number;
  K11: number;
  K12: number;
  K13: number;
  K14: number;
  K15: number;
  TotalK: number;
  T01: number;
  T02: number;
  T03: number;
  T04: number;
  T05: number;
  T06: number;
  T07: number;
  T08: number;
  T09: number;
  T10: number;
  T11: number;
  T12: number;
  T13: number;
  T14: number;
  T15: number;
  TotalT: number;
  H01: number;
  H02: number;
  H03: number;
  H04: number;
  H05: number;
  H06: number;
  H07: number;
  H08: number;
  H09: number;
  H10: number;
  H11: number;
  H12: number;
  H13: number;
  H14: number;
  H15: number;
  TotalH: number;
  F01: number;
  F02: number;
  F03: number;
  F04: number;
  F05: number;
  F06: number;
  F07: number;
  F08: number;
  F09: number;
  F10: number;
  F11: number;
  F12: number;
  F13: number;
  F14: number;
  F15: number;
  TotalF: number;
  Bold: string;
  In_ck: string;
  BackColor: string;
}

export class ReportData {
  Code1: string;
  Code2: string;
  Code3: string;
  Code4: string;
  ValParam1: number;
  ValParam2: number;
  ValParam3: number;
  ValParam4: number;

  Val1: number;
  Val2: number;
  Val3: number;
  Val4: number;
  Val5: number;
  Val6: number;
  Val7: number;
  Val8: number;
  Val9: number;
  Val10: number;
  Val11: number;
  Val12: number;
  Val13: number;
  Val14: number;
  Val15: number;
  Val16: number;
  Val17: number;
  Val18: number;
  Val19: number;
  Val20: number;
  Val21: number;
  Val22: number;
  Val23: number;
  Val24: number;
  Val25: number;
  Val26: number;
  Val27: number;
  Val28: number;
  Val29: number;
  Val30: number;
  Val31: number;
}

