import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
//import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Observable } from 'rxjs';
import { WorkingEnviroment } from 'src/app/00.Common/WorkingEnviroment';
import { GlobalVariableService } from 'src/app/global-variable.service';
import { TokenStorageService } from './token-storage.service';

const defaultPath = '/';
const defaultUser = {
  email: 'sandra@example.com',
  avatarUrl: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png'
};

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {
  // private _user = defaultUser;
  private _user = null;
  get loggedIn(): boolean {
    return !!this._user;

    // const token = this.token.getToken();
    // return (token != null)
  }

  private _lastAuthenticatedPath: string = defaultPath;
  set lastAuthenticatedPath(value: string) {
    this._lastAuthenticatedPath = value;
  }

  constructor(private router: Router,
    private http: HttpClient,
    private token: TokenStorageService,
    public global: GlobalVariableService,
    // @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  login2(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }




  async logIn(email: string, password: string) {
    let loi = '';
    try {

      const body = new HttpParams()
        .set('username', email)
        .set('password', password)
        .set('grant_type', 'password');

      const s = body.toString();


      await this.http.post<any>(`${this.global.url}/token`,
        body.toString(),
        {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
        }
      ).toPromise().then(

        data => {
          notify('Gọi service thành công', 'success');
          this.token.saveToken(data.access_token);
          const workingEnt = new WorkingEnviroment();

          workingEnt.UserID = email;
          workingEnt.UserName = email;
          this.storage.set('ENV', workingEnt);

          notify('Đăng nhập thành công', 'success');
        },
        err => {
          this.token.saveToken('');
          loi = err.message;
          notify(loi, 'error');
        }

      );


      const token = this.token.getToken();

      if (token !== '') {

        this._user = { ...defaultUser, email };
        this.router.navigate([this._lastAuthenticatedPath]);



        return {
          isOk: true,
          data: this._user
        };

      } else {
        return {
          isOk: false,
          data: null,
          message: "Authentication failed - không tìm thấy token"
        };
      }


    }
    catch {
      return {
        isOk: false,
        message: "Authentication failed - lỗi gọi service"
      };
    }
  }

  async getUser() {
    try {
      // Send request

      return {
        isOk: true,
        data: this._user
      };
    }
    catch {
      return {
        isOk: false
      };
    }
  }

  async createAccount(email, password) {
    try {
      // Send request
      console.log(email, password);

      this.router.navigate(['/create-account']);
      return {
        isOk: true
      };
    }
    catch {
      return {
        isOk: false,
        message: "Failed to create account"
      };
    }
  }

  async changePassword(email: string, recoveryCode: string) {
    try {
      // Send request
      console.log(email, recoveryCode);

      return {
        isOk: true
      };
    }
    catch {
      return {
        isOk: false,
        message: "Failed to change password"
      }
    };
  }

  async resetPassword(email: string) {
    try {
      // Send request
      console.log(email);

      return {
        isOk: true
      };
    }
    catch {
      return {
        isOk: false,
        message: "Failed to reset password"
      };
    }
  }

  async logOut() {
    this._user = null;
    this.router.navigate(['/login-form']);
  }
}

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = this.authService.loggedIn;
    const isAuthForm = [
      'login-form',
      'reset-password',
      'create-account',
      'change-password/:recoveryCode'
    ].includes(route.routeConfig.path);

    if (isLoggedIn && isAuthForm) {
      this.authService.lastAuthenticatedPath = defaultPath;
      this.router.navigate([defaultPath]);
      return false;
    }

    if (!isLoggedIn && !isAuthForm) {
      this.router.navigate(['/login-form']);
    }

    if (isLoggedIn) {
      this.authService.lastAuthenticatedPath = route.routeConfig.path;
    }

    return isLoggedIn || isAuthForm;
  }
}