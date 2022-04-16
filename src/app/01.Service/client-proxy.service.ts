import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';
import { SimpleFilterItem } from '../00.Common/SimpleFilterItem';
import { SimpleOrderItem } from '../00.Common/SimpleOrderItem';
import { FillterAndOrder } from '../00.Common/FillterAndOrder';

import { GlobalVariableService } from '../global-variable.service';
import { KeyValuePair } from '../00.Common/KeyValuePair';


@Injectable({
  providedIn: 'root'
})
export class ClientProxyService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  })
  };
  public global: GlobalVariableService;


  constructor(public http: HttpClient) {
   this.global = new GlobalVariableService();
  }

  public GetListByFilter<T>(controler: string, actionName: string, arrFilter: KeyValuePair[] ): Observable<T> {
    let s: string;
    arrFilter.forEach(element => {
      s += `${element.key}=${element.value}`;
    });
    return this.GetListByQueryString(s);
  }

  public GetAll<T>(entitiName: string, actionName: string): Observable<T> {
    return this.FilterWithPage(entitiName, actionName, 1, 0, new SimpleFilterItem[0](), new SimpleOrderItem[0]());
  }

  public FilterWithPage<T>(entitiName: string,
                           actionGetByID: string,
                           page: number,
                           pageSize: number,
                           filter: SimpleFilterItem[],
                           order: SimpleOrderItem[]): Observable<T> {
    const filterAndOrder: FillterAndOrder = new FillterAndOrder();
    filterAndOrder.OrderItems = order;
    filterAndOrder.FilterItems = filter;
    return this.http.post<T>
    (`${this.global.url}/${entitiName}/${actionGetByID}?page=${page}&pageSize=${pageSize}`,
    filterAndOrder, this.httpOptions).pipe();
  }


  public GetItem<T>(entitiName: string, id: string): Observable<T> {
    const actionGetByID = 'Get';
    return this.http.post<T>
    (`${this.global.url}/${entitiName}/${actionGetByID}/`, '"' + id + '"', this.httpOptions).pipe();
  }

  public GetItemByCode<T>(entitiName: string, actionGetByID: string, id: string): Observable<T> {
    return this.http.post<T>
    (`${this.global.url}/${entitiName}/${actionGetByID}/`, '"' + id + '"', this.httpOptions).pipe();
  }

  public GetListByQueryString<T>(queryString: string): Observable<T> {
    return this.http.get<T>
    (`${this.global.url}/${queryString}`, this.httpOptions).pipe();
  }

  public PostWithAction<T>(controlerName: string, actionName, e: T): Observable<T> {
    return this.http.post<T>
    (`${this.global.url}/${controlerName}/${actionName}/`, e, this.httpOptions).pipe();
  }
}
