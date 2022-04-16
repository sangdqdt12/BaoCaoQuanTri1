import { Injectable } from '@angular/core';
import { LoaiManHinh } from 'src/app/00.Common/EnumDefine';

@Injectable({
  providedIn: 'root'
})
export class ManHinhService {

  
  constructor() { }
  layChieuCao (rong: number, cao: number) : number 
  {
    if (this.hienThiMenu(rong,cao) == false)
    {
      return cao;
    }
    else 
      return cao - 85;
  }

  layChieuRong (rong: number, cao: number) : number 
  {
    return rong;
    
  }
 
  loaiManHinh (rong: number, cao: number) : LoaiManHinh 
  {
    if (rong < 601 || cao < 601)
    {
      return LoaiManHinh.Nho;
    }
    else
      return LoaiManHinh.To
  }

  hienThiMenu (rong: number, cao: number) : boolean
  {
    if (this.loaiManHinh(rong,cao) == LoaiManHinh.Nho)
    {
      return false;
    }
    else
      return true;
    
  }

  canFullScreen (rong: number, cao: number) : boolean
  {
    return false;
    if (this.loaiManHinh(rong,cao) == LoaiManHinh.Nho)
    {
      return true;
    }
    else
      return false;
  }

}
