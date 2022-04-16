import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IsLoadingService } from '@service-work/is-loading';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EnumTrangThaiEform } from 'src/app/00.Common/EnumDefine';
import { EnviromentHelperService } from 'src/app/01.Service/00.Common/enviroment-helper.service';
import { GeClientService } from 'src/app/01.Service/GeClientService';
import { ComboxService } from 'src/app/combox.service';
import { EnumFunctionResult } from 'src/app/Model/EntityBase';
import notify from 'devextreme/ui/notify';
import { Location } from '@angular/common';
import { ColorChartTbl } from 'src/app/Model/ColorChartTbl';


@Component({
  selector: 'app-khai-bao-mau-eform',
  templateUrl: './khai-bao-mau-eform.component.html',
  styleUrls: ['./khai-bao-mau-eform.component.scss']
})
export class KhaiBaoMauEformComponent implements OnInit {

  coLoiChuaDoc : any;
  thongBaoLoi : string;
  type: string = "info";
  isVisibleThongBaoLoi: boolean = false;



  geClientService: GeClientService<ColorChartTbl>;
  
  trangThaiEForm: EnumTrangThaiEform;
  

  getEntityName(): string {
    return 'ColorChartTbl';
  }

  http1: HttpClient;
  
  bcolor: ColorChartTbl ;
  constructor(http: HttpClient, private router: Router, private route: ActivatedRoute,
    private location: Location,
   
  ) {
    this.http1 = http;
    this.geClientService = new GeClientService<ColorChartTbl>(http, "ColorChartTbl");

  }

  thongBao (message: string, thanhCong: boolean ) {
    const type = thanhCong ? "success" : "error";
    this.type = type;
    this.thongBaoLoi = message;
    this.isVisibleThongBaoLoi = true;
  }

  ngOnInit(): void {

    
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" }
        var id = params.ID;
        //--------------------- thực hiện lấy Object --------------------------
        if (id) {

          this.trangThaiEForm = EnumTrangThaiEform.Sua;
          this.geClientService.GetItem(id).subscribe (t=> this.bcolor = t)

        }
        else {

          // this.trangThaiEForm = EnumTrangThaiEform.ThemMoi;
          // this.bcolor = new ColorChartTbl();
          // this.bcolor.ID = Guid.create().toString();
        }
      }
    );
  } 

  Save(e) {

    var result = e.validationGroup.validate();
    if (result.isValid) {
      //notify('The task was saved successfully.', 'success');
  } else {
    //this.thongBao("Kiểm tra lại thông tin đã nhập", false);
      notify('Kiểm tra lại thông tin', 'error');
      return;
  }

    if (this.trangThaiEForm == EnumTrangThaiEform.Sua)
    {

      this.geClientService.SubmitEdit(this.bcolor).subscribe(t => {
        if (t.Result === EnumFunctionResult.OK ) {
          this.bcolor = t;
          //this.thongBao("Cập nhật thành công", true);
          notify('Thành công', 'success');
        } else {
          this.coLoiChuaDoc = true;
          this.thongBaoLoi = t.Message;
          notify(this.thongBaoLoi, 'error');
          //this.thongBao(this.thongBaoLoi, false);
          
        }
      })
     // this.geClientService.SubmitEdit(this.xeNhap).subscribe();
    }
    else
    {
      this.geClientService.SubmitNew(this.bcolor).subscribe(t => {
        if (t.Result === EnumFunctionResult.OK ) {
          this.bcolor = t;
          //this.thongBao("Cập nhật thành công", true);
          notify('Thành công', 'success');
        } else {
          this.coLoiChuaDoc = true;
          this.thongBaoLoi = t.Message;
          notify(this.thongBaoLoi, 'error');
          //this.thongBao(this.thongBaoLoi, false);
        }
      },
      err => {
        this.thongBaoLoi = err;
      }
      )
    }
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  Cancel(e) {

  }
  close(e) {

  }

  QuayLai(e) {
    this.location.back();
  }


}
