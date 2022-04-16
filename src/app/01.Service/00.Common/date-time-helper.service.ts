import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeHelperService {

  constructor() { }

  getArrayMonth(tuNam: number, tuThang: number, denNam: number, denThang: number): string[] {
    const arr: string[] = [];
    for (let index = tuThang; index <= 12; index++) {
      arr.push(`${tuNam}-${index}`);
    }
    if (denNam - tuNam >= 2) {
      for (let idxNam = 1; idxNam <= denNam - tuNam; idxNam++) {
        for (let j = 1; j < 12; j++) {
          const nam = tuNam + idxNam;
          arr.push(`${nam}-${j}`);
        }
      }
    }
    for (let index = 1; index <= denThang; index++) {
      arr.push(`${denNam}-${index}`);
    }
    return arr;
  }

  getToyotaHeaderName(tuNam: number, tuThang: number, denNam: number, denThang: number): string[] {
    const arr: string[] = [];
    arr.push('TMD');
    arr.push('TTX');
    arr.push('TBN');
    arr.push('TPT');
    arr.push('THD');
    arr.push('TTS');
    arr.push('TBG');
    arr.push('Tổng');
    arr.push('% Kế hoạch');
    arr.push('% Cùng kỳ');
    return arr;
  }

  getArrayVisiable(tuNam: number, tuThang: number, denNam: number, denThang: number): boolean[] {
      let tongSoCot = 0;
      tongSoCot = (12 - tuThang) + (denNam - tuNam - 1) * 12 + (denThang);
      const arr: boolean[] = [];
      let i = 0;
      for (let index = 0; index <= tongSoCot; index++) {
        i ++;
        if (index < 24) {
          arr.push(true);
        }
      }
      if (i < 24) {
        for (let index = i ; index < 24; index++) {
          arr.push(false);
        }
      }
      return arr;
  }

  dateToString (ngayVal:Date) {
    var nam: string;
    var thang: string;
    var ngay = "";
    var nam =  ngayVal.getFullYear().toString() ;

    if (ngayVal.getMonth()< 9) thang = "0" + (ngayVal.getMonth() + 1).toString();
    else thang =  (ngayVal.getMonth() + 1).toString();
    
    if (ngayVal.getDate()< 10) ngay = "0" + ngayVal.getDate() .toString();
    else ngay =  ngayVal.getDate().toString();
  
    var ngays = nam + thang + ngay;
    return ngays;
  
  }


}
