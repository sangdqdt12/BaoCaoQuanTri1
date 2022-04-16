import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {
 //public url = 'https://online.taxigroup.com.vn/WebBaoCaoERP';

 public url = 'https://onlinedemo.taxigroup.com.vn/WebBaoCaoERP';
 
  //public url = 'http://222.252.18.18:40000/TestAuthen'
  //public url = 'http://localhost:53428';
  constructor() { }
}
