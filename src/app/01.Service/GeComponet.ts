/*
import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { GeClientService } from './GeClientService';
import { IsLoadingService } from '@service-work/is-loading';
import { BaseEntity, EnumFunctionResult } from '../Model/EntityBase';
import { WorkingEnviroment } from '../00.Common/WorkingEnviroment';

import { GlobalVariableService } from '../global-variable.service';
import { Router } from '@angular/router';
import { EnumTrangThaiEform } from '../00.Common/EnumDefine';
import notify from 'devextreme/ui/notify';
import validationEngine from 'devextreme/ui/validation_engine';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';

export abstract  class GeComponet<T extends BaseEntity> implements OnInit {
    public WorkEnv: WorkingEnviroment;
    trangThaiEForm: EnumTrangThaiEform;
    geClientService: GeClientService<T>;
    ts: T[];
    editObject: T;
    coLoiChuaDoc: boolean;
    thongBaoLoi: string;
    abstract getEntityName(): string;
  constructor(
    http: HttpClient,
    public isLoadingService: IsLoadingService,
    @Inject(LOCAL_STORAGE) public storage: WebStorageService,
    public router: Router
    ) {
    const  global = new  GlobalVariableService();
    this.geClientService = new GeClientService<T>(http, this.getEntityName());
    setTimeout(() => validationEngine.validateGroup());
  }

  public ngOnInit() {
    this.loadItem();
    this.WorkEnv = this.storage.get('ENV');
    if (!this.WorkEnv) {
      this.router.navigateByUrl('/LogIn');
    }
  }
  addNewItem() {
  }

  SaveEdit(e): void {
    var result = e.validationGroup.validate();
    if (result.isValid) {
        notify('The task was saved successfully.', 'success');
    } else {
        notify('The task was not saved. Please check if all fields are valid.', 'error');
    }
    console.log(e);
    if (this.trangThaiEForm === EnumTrangThaiEform.Sua) {
      this.SubmitEdit(e);
    } else {
      this.SubmitNew(e);
    }
  }


  public SubmitEdit(e) {
    console.log('Submit Edit');
    //------ 
    this.isLoadingService.add(
    this.geClientService.SubmitEdit(this.editObject).subscribe(t => {
      if (t.Result === EnumFunctionResult.OK ) {
        this.editObject = t;
      } else {
        this.coLoiChuaDoc = true;
        this.thongBaoLoi = t.Message;
        console.log(this.thongBaoLoi);
      }
    })
    );
  }

  public SubmitNew(e) {
    console.log('Submit New');
    this.isLoadingService.add(
    this.geClientService.SubmitNew(this.editObject).subscribe(t => {

      }));
  }

  deleteItem() {
  }

  loadItem() {
    this.isLoadingService.add(
    this.geClientService.Gets({ }).subscribe(t => {this.ts = t; console.log('Load ' + this.getEntityName()); }));
  }



  getItem(id: string) {
    // tslint:disable-next-line: max-line-length
    this.isLoadingService.add(
    this.geClientService.GetItem(`${id}`).subscribe(t => {
        this.editObject = t;
        console.log(`load object ${id} ` + this.getEntityName() + t);
            }));
  }

  daDocLoi() {
    this.coLoiChuaDoc = false;
  }
}
*/