import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { TokenStorageService } from './shared/services/token-storage.service';

import { IsLoadingService } from '@service-work/is-loading';
import { Observable } from 'rxjs';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ManHinhService } from './01.Service/00.Common/man-hinh.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  isLoading: Observable<boolean>;
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(
    private isLoadingService: IsLoadingService,
    private authService: AuthService, 
    private screen: ScreenService, 
    public appInfo: AppInfoService,
    private router: Router,
    private manHinhService: ManHinhService,
    private token: TokenStorageService) { }

  isAuthenticated() {

 
    

    return this.authService.loggedIn;
  }
  elem: any;
  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  ngOnInit() {
    this.elem = document.documentElement;
    if(this.manHinhService.canFullScreen(window.innerWidth,window.innerHeight)){
      this.openFullscreen();
    }

    this.isLoading = this.isLoadingService.isLoading$();


    this.router.events
    .pipe(
      filter(
        event =>
          event instanceof NavigationStart ||
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError,
      ),
    )
    .subscribe(event => {
      // If it's the start of navigation, `add()` a loading indicator
      if (event instanceof NavigationStart) {
        this.isLoadingService.add();
        return;
      }

      // Else navigation has ended, so `remove()` a loading indicator
      this.isLoadingService.remove();
    });

  }
}
