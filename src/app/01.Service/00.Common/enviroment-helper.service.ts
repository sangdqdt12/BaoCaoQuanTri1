import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
//import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { WorkingEnviroment } from 'src/app/00.Common/WorkingEnviroment';

@Injectable({
  providedIn: 'root'
})
export class EnviromentHelperService {

  constructor(@Inject(LOCAL_STORAGE) public storage: WebStorageService) {}
  GetServerDate(): Date {
    const ev: WorkingEnviroment = this.storage.get('ENV');
    return ev.NgayServer;
  }
}
