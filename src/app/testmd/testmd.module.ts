import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TestmdDaskboardComponent } from './testmd-daskboard/testmd-daskboard.component'


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
  declarations: [TestmdDaskboardComponent],
  imports: [
    CommonModule,
    DxChartModule
  ],
  exports: [TestmdDaskboardComponent]

})
export class TestmdModule { }
