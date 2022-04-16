import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import {LenhModel, CachingComboxData, ComboxData} from './Model/LenhModel';


import { GlobalVariableService } from './global-variable.service';


@Injectable({
  providedIn: 'root'
})
export class ComboxService {
  public global: GlobalVariableService;
  comboxDataCach: ComboxData[];
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  })
  };
  DanhMucHangHoaVatTuTblData: ComboxData[];
  constructor(private http: HttpClient) {
    
    this.global = new GlobalVariableService();
  }


  public GetCombox1(s: string): Observable<CachingComboxData> {

    const url = `${this.global.url}/${s}/GetCombox`;
    
    return this.http.post<CachingComboxData>(
      url,
      {FilterItems: [], OrderItems: [{PropertyName: 'Code', Order: 0}]}
      );
    }

  public GetCombox(rootingCode: string): Observable<CachingComboxData> {

    const url = `${this.global.url}/${rootingCode}/GetCombox`;
    

    return this.http.post<CachingComboxData>(
      url,
      {FilterItems: [], OrderItems: [{PropertyName: 'Code', Order: 0}]}
      );
    }

    public GetComboxData(rootingCode: string): Observable<ComboxData[]> {
      if (rootingCode === 'DanhMucHangHoaVatTuTbl') {

        if (this.DanhMucHangHoaVatTuTblData) {

          return of(this.DanhMucHangHoaVatTuTblData);
        }
      }

      const squareValues = map((val: CachingComboxData) => {
        if (rootingCode === 'DanhMucHangHoaVatTuTbl') {
          this.DanhMucHangHoaVatTuTblData = val.Data;
        }
        return val.Data; });
      return squareValues( this.GetCombox(rootingCode));
    }

    public GetComboxDataSearch(rootingCode: string): Observable<ComboxData[]> {
      const addAllVal = map((val: ComboxData[]) => {
        const all = new ComboxData();
        all.ID = '';
        all.Description = '---';
        let  new1: ComboxData[] = [];
        new1.push(all);
        new1 = new1.concat(val);
        return new1;
      });
      return addAllVal(this.GetComboxData(rootingCode));
    }

    public GetComboxFunction(dataName: string): Observable<any[]> {
      const url = `${this.global.url}/BaoCaoQuanTri/${dataName}`;
      return this.http.get<any[]>(
        url
        );
    }

    public GetComboxFunctionUser(dataName: string, userName:string ): Observable<any[]> {
      const url = `${this.global.url}/BaoCaoQuanTri/${dataName}?User=${userName}`;
      return this.http.get<any[]>(
        url
        );
    }
  
    
    public GetForAuthenticate(): Observable<any[]> {
      const url = `${this.global.url}/User/GetForAuthenticate`;
      
      return this.http.get<any[]>(
        url
        );
    }

    public GetTesForAuthenticate(): Observable<any[]> {
      const url = `${this.global.url}/User/Get`;
      
      return this.http.get<any[]>(
        url
        );
    }
}
