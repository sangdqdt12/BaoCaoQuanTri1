import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { BaoCaoMotChiTieuComponent } from './pages/bao-cao-mot-chi-tieu/bao-cao-mot-chi-tieu.component';
import repaintFloatingActionButton from 'devextreme/ui/speed_dial_action/repaint_floating_action_button';

import { IsLoadingService } from '@service-work/is-loading';

//import { StorageServiceModule} from 'angular-webstorage-service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';


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
  DxDrawerComponent, 
  DxDrawerModule, 
  DxListModule,  
  DxToolbarModule, 
  DxToastModule,
  DxBoxModule,
  DxHtmlEditorModule,
  DxBarGaugeModule

  


} from 'devextreme-angular';
import { TestComponent } from './pages/test/test.component';
import { BaoCaoTonKhoChungComponent } from './pages/bao-cao-ton-kho-chung/bao-cao-ton-kho-chung.component';
import { BaoCaoTonKhoChung2Component } from './pages/bao-cao-ton-kho-chung2/bao-cao-ton-kho-chung2.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import { TestTabComponent } from './pages/test-tab/test-tab.component';
import { BaoCaoTonKhoChung3Component } from './pages/bao-cao-ton-kho-chung3/bao-cao-ton-kho-chung3.component';
import { TonKhoChungComponent } from './pages/ton-kho-chung/ton-kho-chung.component';
import { BaoCaoTongHopDichVuComponent } from './pages/bao-cao-tong-hop-dich-vu/bao-cao-tong-hop-dich-vu.component';
import { BaoCaoNgayToHopComponent } from './pages/bao-cao-ngay-to-hop/bao-cao-ngay-to-hop.component';
import { BaoCaoBanHangToHopThangComponent } from './pages/bao-cao-ban-hang-to-hop-thang/bao-cao-ban-hang-to-hop-thang.component';
import { BaoCaoBanHangDonViThangComponent } from './pages/bao-cao-ban-hang-don-vi-thang/bao-cao-ban-hang-don-vi-thang.component';
import { ReportConfigComponent } from './pages/report-config/report-config.component';
import { BaoCaoTonKhoChung4Component } from './pages/bao-cao-ton-kho-chung4/bao-cao-ton-kho-chung4.component';
import { BaoCaoQt02TheoDoiGiamGiaComponent } from './pages/bao-cao-qt02-theo-doi-giam-gia/bao-cao-qt02-theo-doi-giam-gia.component';
import { BaoCaoQt03aKhachHangTiemNangThComponent } from './pages/bao-cao-qt03a-khach-hang-tiem-nang-th/bao-cao-qt03a-khach-hang-tiem-nang-th.component';
import { BaoCaoQt03bKhachHangTiemNangCtComponent } from './pages/bao-cao-qt03b-khach-hang-tiem-nang-ct/bao-cao-qt03b-khach-hang-tiem-nang-ct.component';
import { BaoCaoQt04bBanHangThangCtComponent } from './pages/bao-cao-qt04b-ban-hang-thang-ct/bao-cao-qt04b-ban-hang-thang-ct.component';
import { BaoCaoQt05BanHangNamCtComponent } from './pages/bao-cao-qt05-ban-hang-nam-ct/bao-cao-qt05-ban-hang-nam-ct.component';
import { BaoCaoQt06QuanLyNhanSuKinhDoanhComponent } from './pages/bao-cao-qt06-quan-ly-nhan-su-kinh-doanh/bao-cao-qt06-quan-ly-nhan-su-kinh-doanh.component';
import { BaoCaoQt10TongHopDichVuComponent } from './pages/bao-cao-qt10-tong-hop-dich-vu/bao-cao-qt10-tong-hop-dich-vu.component';
import { BaoCaoQt11TongHopDichVuDieuHanhComponent } from './pages/bao-cao-qt11-tong-hop-dich-vu-dieu-hanh/bao-cao-qt11-tong-hop-dich-vu-dieu-hanh.component';
import { BaoCaoTonKhoChung5Component } from './pages/bao-cao-ton-kho-chung5/bao-cao-ton-kho-chung5.component';
import { DaskBoarNgayComponent } from './pages/dask-boar-ngay/dask-boar-ngay.component';
import { DaskBoardNgayComponent } from './pages/dask-board-ngay/dask-board-ngay.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DaskBoardKinhDoanhComponent } from './pages/dask-board-kinh-doanh/dask-board-kinh-doanh.component';
//import { XeBanComponent } from './pages/daskoardkd/xe-ban/xe-ban.component';

import {TestmdModule} from './testmd/testmd.module';
import {KinhDoanhModule} from './kinh-doanh/kinh-doanh.module'
import {DichVuModule} from './dich-vu/dich-vu.module'


import {CapNhatThongTinModule} from './cap-nhat-thong-tin/cap-nhat-thong-tin.module'
import {BaoCaoThangDonViModule} from './bao-cao-thang-don-vi/bao-cao-thang-don-vi.module'
import {BaoCaoThangToHopModule} from './bao-cao-thang-to-hop/bao-cao-thang-to-hop.module'


import {TimKiemModule} from './tim-kiem/tim-kiem.module';
import { DaskBoardKinhDoanh02Component } from './pages/dask-board-kinh-doanh02/dask-board-kinh-doanh02.component';
import { DashboardKinhDoanh03Component } from './pages/dashboard-kinh-doanh03/dashboard-kinh-doanh03.component';
import { DashboardKinhDoanh04Component } from './pages/dashboard-kinh-doanh04/dashboard-kinh-doanh04.component';
import { DashboardDichVu01Component } from './pages/dashboard-dich-vu01/dashboard-dich-vu01.component';
import { DashboardDichVu02Component } from './pages/dashboard-dich-vu02/dashboard-dich-vu02.component';
import { DashboardDichVu03Component } from './pages/dashboard-dich-vu03/dashboard-dich-vu03.component';
import { ChartBaseComponent } from './01.Service/00.Common/chart-base/chart-base.component';
import { KhaiBaoMauComponent } from './pages/khai-bao-mau/khai-bao-mau.component';
import { KhaiBaoMauEformComponent } from './pages/khai-bao-mau-eform/khai-bao-mau-eform.component';
import {DxColorBoxModule} from 'devextreme-angular';
import { BaoCaoThangDonViComponent } from './pages/bao-cao-thang-don-vi/bao-cao-thang-don-vi.component';
import { BaoCaoThangToHopComponent } from './pages/bao-cao-thang-to-hop/bao-cao-thang-to-hop.component';

import { BaoCaoThangToHop2Component } from './pages/bao-cao-thang-to-hop2/bao-cao-thang-to-hop2.component';
import "devextreme/ui/html_editor/converters/markdown";
import { BaoCaoTrendKinhDoanh1Component } from './pages/bao-cao-trend-kinh-doanh1/bao-cao-trend-kinh-doanh1.component';
import { BaoCaoTrendDichVu1Component } from './pages/bao-cao-trend-dich-vu1/bao-cao-trend-dich-vu1.component';
import { BaoCaoQt12HieuQuaCrVocComponent } from './pages/bao-cao-qt12-hieu-qua-cr-voc/bao-cao-qt12-hieu-qua-cr-voc.component';
import { BaoCaoQt13aDuLieuKhCrComponent } from './pages/bao-cao-qt13a-du-lieu-kh-cr/bao-cao-qt13a-du-lieu-kh-cr.component';
import { BaoCaoQt13bDuLieuKhCrTheoDaiLyComponent } from './pages/bao-cao-qt13b-du-lieu-kh-cr-theo-dai-ly/bao-cao-qt13b-du-lieu-kh-cr-theo-dai-ly.component';
import { BaoCaoQt14CrDvDuyTriSauThangComponent } from './pages/bao-cao-qt14-cr-dv-duy-tri-sau-thang/bao-cao-qt14-cr-dv-duy-tri-sau-thang.component';
import { BaoCaoQt15CrDvDuyTriMuoiNamComponent } from './pages/bao-cao-qt15-cr-dv-duy-tri-muoi-nam/bao-cao-qt15-cr-dv-duy-tri-muoi-nam.component';
import { BaoCaoQt16CrBanHangDuyTriMuoiNamComponent } from './pages/bao-cao-qt16-cr-ban-hang-duy-tri-muoi-nam/bao-cao-qt16-cr-ban-hang-duy-tri-muoi-nam.component';
import { BaoCaoQt17HieuQuaPrmThangComponent } from './pages/bao-cao-qt17-hieu-qua-prm-thang/bao-cao-qt17-hieu-qua-prm-thang.component';

@NgModule({
  declarations: [
    AppComponent,
    BaoCaoMotChiTieuComponent,
    TestComponent,
    BaoCaoTonKhoChungComponent,
    BaoCaoTonKhoChung2Component,
    TestTabComponent,
    BaoCaoTonKhoChung3Component,
    TonKhoChungComponent,
    BaoCaoTongHopDichVuComponent,
    BaoCaoNgayToHopComponent,
    BaoCaoBanHangToHopThangComponent,
    BaoCaoBanHangDonViThangComponent,
    ReportConfigComponent,
    BaoCaoTonKhoChung4Component,
    BaoCaoQt02TheoDoiGiamGiaComponent,
    BaoCaoQt03aKhachHangTiemNangThComponent,
    BaoCaoQt03bKhachHangTiemNangCtComponent,
    BaoCaoQt04bBanHangThangCtComponent,
    BaoCaoQt05BanHangNamCtComponent,
    BaoCaoQt06QuanLyNhanSuKinhDoanhComponent,
    BaoCaoQt10TongHopDichVuComponent,
    BaoCaoQt11TongHopDichVuDieuHanhComponent,
    BaoCaoTonKhoChung5Component,
    DaskBoarNgayComponent,
    DaskBoardNgayComponent,
    DaskBoardKinhDoanhComponent,
    DaskBoardKinhDoanh02Component,
    DashboardKinhDoanh03Component,
    DashboardKinhDoanh04Component,
    DashboardDichVu01Component,
    DashboardDichVu02Component,
    DashboardDichVu03Component,
    KhaiBaoMauComponent,
    KhaiBaoMauEformComponent,
    BaoCaoThangDonViComponent,
    BaoCaoThangToHopComponent,
    
    BaoCaoThangToHop2Component,
    
    BaoCaoTrendKinhDoanh1Component,
    
    BaoCaoTrendDichVu1Component,
    
    BaoCaoQt12HieuQuaCrVocComponent,
    
    BaoCaoQt13aDuLieuKhCrComponent,
    
    BaoCaoQt13bDuLieuKhCrTheoDaiLyComponent,
    
    BaoCaoQt14CrDvDuyTriSauThangComponent,
    
    BaoCaoQt15CrDvDuyTriMuoiNamComponent,
    
  
    BaoCaoQt16CrBanHangDuyTriMuoiNamComponent,
    
    BaoCaoQt17HieuQuaPrmThangComponent,
    
    
    
    
    //XeBanComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
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
    BrowserModule,
    DxDrawerModule,
    DxToastModule,
    DxListModule,
    DxRadioGroupModule,
    DxToolbarModule,
    TestmdModule,
    KinhDoanhModule,
    DichVuModule,
    BaoCaoThangDonViModule,
    BaoCaoThangToHopModule,
    CapNhatThongTinModule,
    TimKiemModule,
    DxColorBoxModule,
    DxBoxModule,
    DxButtonGroupModule,
    DxHtmlEditorModule,
    DxBarGaugeModule,
    
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    //StorageServiceModule
    
 
 
    
  ],
  providers: [AuthService, ScreenService, AppInfoService,authInterceptorProviders],
  //providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
