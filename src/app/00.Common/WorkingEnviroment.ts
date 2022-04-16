//import { UserLogInTbl } from '../Model/DanhMuc/LoginTbl';

export class WorkingEnviroment {
    UserID: string;
    UserName: string;
    IDDonViCoSo: string;
    IDDonViNhapLieu: string;
   // UserLogIn: UserLogInTbl;
    NgayServer: Date = new Date(2020, 1, 20);
    NgayClient: Date;
    public  LayNgayGiaoDich(): Date {
        //return this.NgayServer;
        return new Date (2020, 1, 20);
    }
}
