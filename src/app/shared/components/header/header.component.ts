import { Component, NgModule, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../services';
import { UserPanelModule } from '../user-panel/user-panel.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

import { Router } from '@angular/router';
import { ManHinhService } from 'src/app/01.Service/00.Common/man-hinh.service';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  hienThiHeader : boolean = true;
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title: string;

  user = { email: '' };

  userMenuItems = [
  {
    text: 'Logout',
    icon: 'runner',
    onClick: () => {
      //this.authService.logOut();
      this.exit();
    }
  }];

  constructor(private authService: AuthService, 
    private router: Router,

    private manHinhService: ManHinhService) { }

  ngOnInit() {
    this.authService.getUser().then((e) => this.user = e.data);
    this.hienThiHeader = this.manHinhService.hienThiMenu ( window.innerWidth, window.innerHeight);

  }

  toggleMenu = () => {
    this.menuToggle.emit();
  }

  exit() {
   // this._user = null;
    //this.router.navigate(['/login-form']);
    this.authService.logOut();
    
  }
}

@NgModule({
  imports: [
    CommonModule,
    DxButtonModule,
    UserPanelModule,
    DxToolbarModule
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
