import { BaseEntity } from '../EntityBase';



export class BDGoiCongViecCtTbl extends BaseEntity {
    IDBDChiTietCongViec: string;
}

export class BDGoiCongViecVatTuTbl extends BaseEntity {
    IDDanhMucHangHoaVatTu: string;
}


export class BDGoiCongViecTbl extends BaseEntity {
    BDGoiCongViecCtTbls: BDGoiCongViecCtTbl[];
    BDGoiCongViecVatTuTbls: BDGoiCongViecVatTuTbl[];
}
