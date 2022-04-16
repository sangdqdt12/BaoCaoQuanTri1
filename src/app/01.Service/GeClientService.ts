import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseEntity } from '../Model/EntityBase';
import { ClientProxyService } from './client-proxy.service';
import { SimpleFilterItem } from '../00.Common/SimpleFilterItem';
import { SimpleOrderItem } from '../00.Common/SimpleOrderItem';
import { GlobalVariableService } from '../global-variable.service';



export class GeClientService<T extends BaseEntity> {
  public filterAction = 'FilterWithPage';
  private proxy: ClientProxyService;
  constructor(private http: HttpClient, private entitiName ) {
  const global = new GlobalVariableService();
  this.proxy = new ClientProxyService(http);
  }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  })
  };


  public Gets( filterAndOrder: any): Observable<T[]> {
    const filter = SimpleFilterItem[0];
    const order =  SimpleOrderItem[0];
    return this.proxy.FilterWithPage(this.entitiName, this.filterAction, 1, 0, filter, order);
  }

  public GetItem( id: string): Observable<T> {
    const ActionGetByID = 'Get';
    return this.proxy.GetItem(this.entitiName, id);
  }

  public GetItemByCode( code: string): Observable<T> {
    const ActionGetByCode = 'GetByCode';
    const path = `${this.entitiName}/${ActionGetByCode}?Code=${code}`;
    return this.proxy.GetListByQueryString(path);
  }

  public SubmitEdit(e: T): Observable<T> {
    const ActionGetByID = 'Edit';
    return this.proxy.PostWithAction(this.entitiName, ActionGetByID, e);
  }

  public SubmitNew(e: T): Observable<T> {
    const ActionGetByID = 'Add';
    return this.proxy.PostWithAction(this.entitiName, ActionGetByID, e);
  }
}
