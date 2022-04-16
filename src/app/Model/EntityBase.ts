export class Guid {
    static newGuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  }

export enum EnumFunctionResult { OK, Exception, Invalidated}
export class TranferModel {
    public Result: EnumFunctionResult;
    public  Message: string; }

export class BaseEntity extends TranferModel {
        public  ID: string;
        public  Code: string;
        public  Description: string;
        public PhienBan: string;
        public TrangThai: number;
        public IDNguoiTao: string;
        public NgayTao: Date;
        getName(): string {
            return 'BaseEntity';
        }
    }
export class GiaoDichBaseEntity extends BaseEntity {
    public  IDDanhMucDonViCoSo: string;
    public  IDDanhMucChungTu: string;
    public  IDDanhMucDonViNhapLieu: string;
    public  NgayChungTu: Date; }
