import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from 'src/app/global-variable.service';
import { ColorDefineService } from '../color-define.service';

@Component({
  selector: 'app-chart-base',
  templateUrl: './chart-base.component.html',
  styleUrls: ['./chart-base.component.scss']
})
export abstract class ChartBaseComponent implements OnInit {


  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  })
  };

  public color1 = '#0099ff';
  public colorF1 = 'black';

  public color2 = '#ff0000';
  public colorF2 = '#009900';

  public color3 = '#ff9900';
  public colorF3 = '#751aff';

  public color4 = ''; 
  public colorF4 = '';

  public color5 = ''; 
  public colorF5 = '';

  public abstract ReportID : string;
  global : GlobalVariableService;
  constructor(public http: HttpClient
    
    )  { 
      this.global = new GlobalVariableService();
    }

  ngOnInit(): void {
        //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
        let controlerName: string;
        let actionGetByID: string;
        let queryString: string;
        controlerName = "BaoCaoQuanTri";
        actionGetByID = "CP_Get_ColorChart";
        queryString = `?ChartID=${this.ReportID}`;
        const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
        var x =  this.http.get<any[]>(url,this.httpOptions);
        x.forEach(t=> {
          this.color1 = t[0].color1;
          this.color2 = t[0].color2;
          this.color3 = t[0].color3;
          this.color4 = t[0].color4;
          this.color5 = t[0].color5;

          this.colorF1 = t[0].colorF1;
          this.colorF2 = t[0].colorF2;
          this.colorF3 = t[0].colorF3;
          this.colorF4 = t[0].colorF4;
          this.colorF5 = t[0].colorF5;

        });
    
  }

}
