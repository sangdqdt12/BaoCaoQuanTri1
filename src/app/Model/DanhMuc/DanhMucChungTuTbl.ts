import { BaseEntity } from '../EntityBase';

export class DanhMucChungTuTbl extends BaseEntity {
    IDNguoiSua: string;
    NgaySua: string;
    Loai: string;
    MaChungTu: string;
    IDTaiKhoanDauPhieu: string;
    IDTaiKhoanThue: string;
    IDThueSuat: string;
    HienVuViec: string;
    HienHopDong: string;
    HienPhi: string;
    HienCongTrinh: string;
    HienHangMucCongTrinh: string;
    IDTaiKhoanChiTiet: string;
    IDTaiKhoanVatTu: string;
    IDTaiKhoanGiaVon: string;
}
