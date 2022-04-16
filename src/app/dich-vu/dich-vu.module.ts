import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dv01Bd01Component } from './dv01-bd01/dv01-bd01.component';
import { Dv01Bd02Component } from './dv01-bd02/dv01-bd02.component';
import { Dv01Bd03Component } from './dv01-bd03/dv01-bd03.component';
import { Dv01Bd04Component } from './dv01-bd04/dv01-bd04.component';
import { Dv0101Component } from './dv0101/dv0101.component';
import { Dv0102Component } from './dv0102/dv0102.component';

import { Dv02Bd05Component } from './BD02/dv02-bd05/dv02-bd05.component';
import { Dv02Bd06Component } from './BD02/dv02-bd06/dv02-bd06.component';
import { Dv02Bd07Component } from './BD02/dv02-bd07/dv02-bd07.component';
import { Dv02Bd08Component } from './BD02/dv02-bd08/dv02-bd08.component';
import { Dv0201Component } from './BD02/dv0201/dv0201.component';
import { Dv0202Component } from './BD02/dv0202/dv0202.component';


import {
  DxChartModule,
  DxPieChartModule,
  DxTabPanelModule,
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

import { Dv03Bd09Component } from './BD03/dv03-bd09/dv03-bd09.component';
import { Dv03Bd10Component } from './BD03/dv03-bd10/dv03-bd10.component';
import { Dv03Bd11Component } from './BD03/dv03-bd11/dv03-bd11.component';
import { Dv03Bd12Component } from './BD03/dv03-bd12/dv03-bd12.component';
import { Dv0301Component } from './BD03/dv0301/dv0301.component';
import { Dv0302Component } from './BD03/dv0302/dv0302.component';




@NgModule({
  declarations: [
    Dv01Bd01Component, 
    Dv01Bd02Component, 
    Dv01Bd03Component, 
    Dv01Bd04Component, 
    Dv0101Component, 
    Dv0102Component, 
    Dv02Bd05Component, 
    Dv02Bd06Component,
    Dv02Bd07Component,
    Dv02Bd08Component,
    Dv0201Component,
    Dv0202Component,
    Dv03Bd09Component, 
    Dv03Bd10Component, 
    Dv03Bd11Component,
    Dv03Bd12Component, 
    Dv0301Component, 
    Dv0302Component,
  ],
  imports: [
    CommonModule,
    DxChartModule,
    DxPieChartModule,
    DxBoxModule
  ],
  exports: [
    Dv01Bd01Component, 
    Dv01Bd02Component, 
    Dv01Bd03Component, 
    Dv01Bd04Component, 
    Dv0101Component, 
    Dv0102Component, 
    Dv02Bd05Component, 
    Dv02Bd06Component,
    Dv02Bd07Component,
    Dv02Bd08Component,
    Dv0201Component,
    Dv0202Component,
    Dv03Bd09Component, 
    Dv03Bd10Component, 
    Dv03Bd11Component,
    Dv03Bd12Component, 
    Dv0301Component, 
    Dv0302Component,
  ]

})
export class DichVuModule { }
