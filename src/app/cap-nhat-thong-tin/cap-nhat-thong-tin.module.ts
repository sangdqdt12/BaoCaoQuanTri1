import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiaiTrinhComponent } from './giai-trinh/giai-trinh.component';

import { 
  DxButtonGroupModule,
  DxHtmlEditorModule,
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
  
  DxRadioGroupModule, DxRadioGroupComponent, DxTemplateModule,
  DxCheckBoxModule,
  DxDrawerComponent, DxDrawerModule, DxListModule,  DxToolbarModule,
  DxBoxModule
} from 'devextreme-angular';

import "devextreme/ui/html_editor/converters/markdown";


@NgModule({
  declarations: [GiaiTrinhComponent],
  imports: [
    CommonModule,
    DxHtmlEditorModule,
    DxButtonGroupModule,
    DxButtonModule,
    DxBoxModule,
    
    
  ],
  exports : [GiaiTrinhComponent]
})
export class CapNhatThongTinModule { }
