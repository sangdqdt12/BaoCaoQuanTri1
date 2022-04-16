import { BaseEntity } from '../EntityBase';

export class UserLogInTbl extends BaseEntity {
    Password: string;
    PasswordSalt: string;
    IDNhanVienCoVan: string;
    IDNhanVienBanHang: string;
    IDNhanVienBanXeMay: string;
    IsAdmin: string;
}
