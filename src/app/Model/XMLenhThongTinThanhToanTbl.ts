import { BaseEntity, GiaoDichBaseEntity } from './EntityBase';

export class XMLenhThongTinThanhToanTbl extends GiaoDichBaseEntity {
    ID: string;
    BienSo: string;
    TenKhachHang: string;
    SoDienThoaiKhachHang: string;
    TrangThai: number;
    IDXMModelXe: string;
    Code: string;
    NgayChungTu: Date;
    DiaChiKhachHang: string;
    KmCu: number;
    KmMoi: number;
    RuaXeTruocSuaChua: boolean;
    RuaXeSauSuaChua: boolean;
    KhachLayPhuTungCu: string;
    YeuCauKhachHang: string;
    KmHenTiep: number;
    NgayHenTiep: number;
    TuVanSuaChua: string;
    NoiDungHen: string;
    TienVatTu : number;
    TienCong: number;
    TienThanhToan: number;
    TongGiamGia: number;
    VAT: number;
    XMLenhThongTinThanhToanCtTbls: XMLenhThongTinThanhToanCtTbl[];
    public getName(): string {
      return 'XMLenhThongTinThanhToanTbl';
    }
}

export class XMLenhThongTinThanhToanCtTbl extends BaseEntity {
  ID: string;
  IDLenhThongTinThanhToan: string;
  IDCongViecChiTiet: string;
  IDBDChiTietCongViec: string;
  IDVatTu: string;
  Code: string;
  NoiDung: string;
  SoLuong: number;
  TienVatTu: number;
  TienCong: number;
  TienThanhToan: number;
  IDMaTinhTien: string;
  TenTinhTien: string;
  DonGia: number;
  PhanTramGiamGia: number;
  TienGiamGiam: number;
  IDThue: string;
  PhanTramThue: number;
  TienThue: number;
  public getName(): string {
    return 'XMLenhThongTinThanhToanCtTbl';
  }
}
