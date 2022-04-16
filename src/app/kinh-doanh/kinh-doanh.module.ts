import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import {DxTabPanelModule,
  DxAccordionModule,
  DxTextBoxModule,
  DxNumberBoxModule,
  DxSelectBoxModule,
  DxPopupModule,
  DxMultiViewModule,
  DxFormModule,
  DxValidatorModule,
  DxValidationSummaryModule,
  DxButtonModule,
  DxDataGridModule,
  DxChartModule,
  
  DxPieChartModule,
  DxTextAreaModule,
  DxDateBoxModule,
  DxTabsModule,
  DxLoadPanelModule,
  DxSpeedDialActionModule,
  DxDropDownBoxModule,
  DxNavBarModule,
  DxLoadIndicatorModule,
  DxButtonGroupModule,
  DxRadioGroupModule, DxRadioGroupComponent, DxTemplateModule,
  DxCheckBoxModule,
  DxDrawerComponent, DxDrawerModule, DxListModule,  DxToolbarModule,
  DxBoxModule



} from 'devextreme-angular';
import { Kd1XeKyComponent } from './kd1-xe-ky/kd1-xe-ky.component';

import { Kd4XeKyCwdComponent } from './kd4-xe-ky-cwd/kd4-xe-ky-cwd.component';
import { Kd2XeTuanComponent } from './kd2-xe-tuan/kd2-xe-tuan.component';
import {Kd5XeKyThangComponent} from './kd5-xe-ky-thang/kd5-xe-ky-thang.component';
import { XeKyHopDongComponent } from './xe-ky-hop-dong/xe-ky-hop-dong.component';
import { XeKyLoiNhuanComponent } from './xe-ky-loi-nhuan/xe-ky-loi-nhuan.component';
import { TestComponent } from './test/test.component';
import { Kd7XeGiaoComponent } from './kd7-xe-giao/kd7-xe-giao.component';
import { Kd9XeGiaoThangComponent } from './kd9-xe-giao-thang/kd9-xe-giao-thang.component';
import { Kd8XeGiaoTuanComponent } from './kd8-xe-giao-tuan/kd8-xe-giao-tuan.component';
import { Kd10DraXeGiaoThangComponent } from './kd10-dra-xe-giao-thang/kd10-dra-xe-giao-thang.component';
import { Kd12DraXeGiaoQuyComponent } from './kd12-dra-xe-giao-quy/kd12-dra-xe-giao-quy.component';
import { Kd11DraThangComponent } from './kd11-dra-thang/kd11-dra-thang.component';
import { Kd3ConKyComponent } from './kd3-con-ky/kd3-con-ky.component';

import { Kd6TonKho3ThangComponent } from './kd6-ton-kho3-thang/kd6-ton-kho3-thang.component';
import { KdDra1Component } from './kd-dra1/kd-dra1.component';
import { KdDra2Component } from './kd-dra2/kd-dra2.component';

import { Kd13Component } from './kd13/kd13.component';
import { Kd14Component } from './kd14/kd14.component';
import { Kd15Component } from './kd15/kd15.component';
import { Kd16Component } from './kd16/kd16.component';
import { Kd17Component } from './kd17/kd17.component';
import { Kd18Component } from './kd18/kd18.component';

import { Kd13P1Component } from './kd13-p1/kd13-p1.component';
import { Kd13P2Component } from './kd13-p2/kd13-p2.component';
import { Kd1P1Component } from './kd1-p1/kd1-p1.component';
import { Kd1P2Component } from './kd1-p2/kd1-p2.component';
import { Kd2P1Component } from './kd2-p1/kd2-p1.component';
import { Kd2P2Component } from './kd2-p2/kd2-p2.component';
import { Bckd3P1Component } from './bckd3-p1/bckd3-p1.component';
import { Bckd3P2Component } from './bckd3-p2/bckd3-p2.component';




@NgModule({
  declarations: [
    Kd1XeKyComponent, 
    Kd4XeKyCwdComponent, 
    Kd2XeTuanComponent, 
    Kd5XeKyThangComponent, 
    XeKyHopDongComponent, 
    XeKyLoiNhuanComponent, 
    TestComponent,
    Kd7XeGiaoComponent,
    Kd9XeGiaoThangComponent,
    Kd8XeGiaoTuanComponent,
    Kd10DraXeGiaoThangComponent,
    Kd12DraXeGiaoQuyComponent,
    Kd11DraThangComponent,
    Kd3ConKyComponent,
    
    Kd6TonKho3ThangComponent,
    KdDra1Component,
    KdDra2Component,
    Kd13Component,
    Kd14Component,
    Kd15Component,
    Kd16Component,
    Kd17Component,
    Kd18Component,
    Kd13P1Component,
    Kd13P2Component,
    Kd1P1Component,
    Kd1P2Component,
    Kd2P1Component,
    Kd2P2Component,
    Bckd3P1Component,
    Bckd3P2Component, 
    
    ],
  imports: [
    CommonModule,
    DxChartModule,
    DxPieChartModule,
    DxBoxModule
  ],
  exports: [
    Kd1P2Component,
    Kd1P1Component,
    Kd1XeKyComponent, 
    Kd4XeKyCwdComponent, 
    Kd2XeTuanComponent, 
    Kd5XeKyThangComponent,
    XeKyHopDongComponent, 
    XeKyLoiNhuanComponent,
    Kd7XeGiaoComponent,
    Kd9XeGiaoThangComponent,
    Kd8XeGiaoTuanComponent, 
    Kd10DraXeGiaoThangComponent,
    Kd12DraXeGiaoQuyComponent,
    Kd11DraThangComponent,
    Kd3ConKyComponent,
    
    Kd6TonKho3ThangComponent,
    KdDra1Component,
    KdDra2Component, 
    
    Kd13Component,
    Kd14Component,
    Kd15Component,
    Kd16Component,
    Kd17Component,
    Kd18Component,
    Kd13P1Component,
    Kd13P2Component, 
    Kd2P1Component,
    Kd2P2Component,
    Bckd3P1Component,
    Bckd3P2Component,
    
  ]
})
export class KinhDoanhModule { }
