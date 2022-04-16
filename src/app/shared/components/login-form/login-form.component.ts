import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import notify from 'devextreme/ui/notify';
import { ManHinhService } from 'src/app/01.Service/00.Common/man-hinh.service';
import { AuthService } from '../../services';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{
  loading = false;
  formData: any = {};

  constructor(private authService: AuthService, 
    private router: Router,
    private manHinhService: ManHinhService,
    ) { }

  async onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.formData;
    this.loading = true;
    //--- tam them vao
    const result = await this.authService.logIn(email, password);
    this.loading = false;
    //---------- het don them de test ---
    
    if (!result.isOk) {
      this.loading = false;
      notify(result.message, 'error', 2000);
    }
    
  }

  ngOnInit() {
    this.elem = document.documentElement;
    if(this.manHinhService.canFullScreen(window.innerWidth,window.innerHeight)) {

    this.openFullscreen();
    }
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

  onCreateAccountClick = () => {
    this.router.navigate(['/create-account']);
  }
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxFormModule,
    DxLoadIndicatorModule
  ],
  declarations: [ LoginFormComponent ],
  exports: [ LoginFormComponent ]
})
export class LoginFormModule { }
