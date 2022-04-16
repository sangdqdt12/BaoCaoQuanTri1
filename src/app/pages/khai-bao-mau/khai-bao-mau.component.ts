import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';
import { FillterAndOrder } from 'src/app/00.Common/FillterAndOrder';
import { GeClientService } from 'src/app/01.Service/GeClientService';
import { ColorChartTbl } from 'src/app/Model/ColorChartTbl';


@Component({
  selector: 'app-khai-bao-mau',
  templateUrl: './khai-bao-mau.component.html',
  styleUrls: ['./khai-bao-mau.component.scss']
})
export class KhaiBaoMauComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;

  geClientService: GeClientService<ColorChartTbl>;
  reportDataDetail: any[];
  selectedRowIndex = -1;
  idSelect : string;
  

  constructor(http: HttpClient, private router: Router) { 
    this.geClientService = new GeClientService<ColorChartTbl>(http, "ColorChartTbl");
  }


  elem: any;
  gridHeight: any;
  gridwidth: any;

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
  
  ngOnInit(): void {

    this.elem = document.documentElement;
    this.gridHeight = window.innerHeight-150;
    this.gridwidth = window.innerWidth-50;
    if (window.innerWidth< 800) 
    {
      this.openFullscreen();
    }

    var fOd : FillterAndOrder = new FillterAndOrder();
    this.geClientService.Gets(fOd).subscribe(t=> {
      this.reportDataDetail = t;
    });
  }

 
  onCellPrepared(e) {
  }

  onRowPrepared(e) { 
  }


  editRow() {
    this.router.navigate(['/khai-bao-mau-eform'], { queryParams: { ID: this.idSelect } });
  }

  deleteRow() {
      this.grid.instance.deleteRow(this.selectedRowIndex);
      this.grid.instance.deselectAll();
  }

  addRow() {
    this.router.navigate(['/khai-bao-mau-eform']);
  }

  selectedChanged(e) {
    this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
    this.idSelect = e.selectedRowKeys[0].ID;
}
}