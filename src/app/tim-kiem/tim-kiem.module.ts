import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimKiemLoai1Component } from './tim-kiem-loai1/tim-kiem-loai1.component';



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
  DxDrawerComponent, DxDrawerModule, DxListModule,  DxToolbarModule



} from 'devextreme-angular';

@NgModule({
  declarations: [TimKiemLoai1Component],
  imports: [
    CommonModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxButtonModule,
    DxDataGridModule,
    DxChartModule,
    DxPieChartModule,
    DxTextAreaModule,
    DxTextBoxModule,
    DxNumberBoxModule,
    DxSelectBoxModule,
    DxPopupModule,
    DxMultiViewModule,
    DxAccordionModule,
    DxTabPanelModule,
    DxFormModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    DxLoadPanelModule,
    DxTabsModule,
    DxSpeedDialActionModule,
    DxDropDownBoxModule,
    DxNavBarModule,
    DxLoadIndicatorModule,
    DxButtonGroupModule,   
    DxRadioGroupModule,
    DxTemplateModule,
    DxCheckBoxModule,
    DxDrawerModule,
    
    DxListModule,
    DxRadioGroupModule,
    DxToolbarModule,
  ],
  exports: [
     TimKiemLoai1Component
   ]
})
export class TimKiemModule { }
