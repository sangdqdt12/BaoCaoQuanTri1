/*
import { GiaoDichBaseEntity } from "../Model/GiaoDichBaseEntity";
import { GeClientService } from './GeClientService';
import { HttpClient } from '@angular/common/http';
import { IsLoadingService } from '@service-work/is-loading';
import { GeComponet } from './GeComponet';

import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from "ngx-webstorage-service";

export abstract class  GeTransactionComponet<T extends GiaoDichBaseEntity> extends GeComponet<T> {
    constructor(http: HttpClient,
                public isLoadingService: IsLoadingService,
                @Inject(LOCAL_STORAGE) public storage: WebStorageService,
                public router: Router) {
        super(http, isLoadingService, storage, router);
    }

    public ngOnInit() {
        super.loadItem();
    }
}
*/