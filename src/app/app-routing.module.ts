import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { BaoCaoMotChiTieuComponent } from './pages/bao-cao-mot-chi-tieu/bao-cao-mot-chi-tieu.component';
import { TestComponent } from './pages/test/test.component';
import { BaoCaoTonKhoChungComponent } from './pages/bao-cao-ton-kho-chung/bao-cao-ton-kho-chung.component';
import { BaoCaoTonKhoChung2Component } from './pages/bao-cao-ton-kho-chung2/bao-cao-ton-kho-chung2.component';
import { BaoCaoTonKhoChung3Component } from './pages/bao-cao-ton-kho-chung3/bao-cao-ton-kho-chung3.component';
import { TestTabComponent } from './pages/test-tab/test-tab.component';
import { TonKhoChungComponent } from './pages/ton-kho-chung/ton-kho-chung.component';
import { BaoCaoTongHopDichVuComponent } from './pages/bao-cao-tong-hop-dich-vu/bao-cao-tong-hop-dich-vu.component';
import { BaoCaoNgayToHopComponent } from './pages/bao-cao-ngay-to-hop/bao-cao-ngay-to-hop.component';
import { BaoCaoBanHangToHopThangComponent } from './pages/bao-cao-ban-hang-to-hop-thang/bao-cao-ban-hang-to-hop-thang.component';
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
import { DaskBoardKinhDoanhComponent } from './pages/dask-board-kinh-doanh/dask-board-kinh-doanh.component';
import {DaskBoardKinhDoanh02Component} from './pages/dask-board-kinh-doanh02/dask-board-kinh-doanh02.component';
import {DashboardKinhDoanh03Component} from './pages/dashboard-kinh-doanh03/dashboard-kinh-doanh03.component';
import {DashboardKinhDoanh04Component} from './pages/dashboard-kinh-doanh04/dashboard-kinh-doanh04.component';
import {DashboardDichVu01Component} from './pages/dashboard-dich-vu01/dashboard-dich-vu01.component';
import {DashboardDichVu02Component} from './pages/dashboard-dich-vu02/dashboard-dich-vu02.component';
import {DashboardDichVu03Component} from './pages/dashboard-dich-vu03/dashboard-dich-vu03.component';
import { KhaiBaoMauComponent } from './pages/khai-bao-mau/khai-bao-mau.component';
import { KhaiBaoMauEformComponent } from './pages/khai-bao-mau-eform/khai-bao-mau-eform.component';
import { BaoCaoThangDonViComponent } from './pages/bao-cao-thang-don-vi/bao-cao-thang-don-vi.component';
import { BaoCaoThangToHopComponent } from './pages/bao-cao-thang-to-hop/bao-cao-thang-to-hop.component';
import { BaoCaoThangToHop2Component } from './pages/bao-cao-thang-to-hop2/bao-cao-thang-to-hop2.component';
import { BaoCaoTrendDichVu1Component } from './pages/bao-cao-trend-dich-vu1/bao-cao-trend-dich-vu1.component';
import { BaoCaoTrendKinhDoanh1Component } from './pages/bao-cao-trend-kinh-doanh1/bao-cao-trend-kinh-doanh1.component';
import { BaoCaoQt12HieuQuaCrVocComponent } from './pages/bao-cao-qt12-hieu-qua-cr-voc/bao-cao-qt12-hieu-qua-cr-voc.component';
import { BaoCaoQt13aDuLieuKhCrComponent } from './pages/bao-cao-qt13a-du-lieu-kh-cr/bao-cao-qt13a-du-lieu-kh-cr.component';
import { BaoCaoQt13bDuLieuKhCrTheoDaiLyComponent } from './pages/bao-cao-qt13b-du-lieu-kh-cr-theo-dai-ly/bao-cao-qt13b-du-lieu-kh-cr-theo-dai-ly.component';
import { BaoCaoQt14CrDvDuyTriSauThangComponent } from './pages/bao-cao-qt14-cr-dv-duy-tri-sau-thang/bao-cao-qt14-cr-dv-duy-tri-sau-thang.component';
import { BaoCaoQt15CrDvDuyTriMuoiNamComponent } from './pages/bao-cao-qt15-cr-dv-duy-tri-muoi-nam/bao-cao-qt15-cr-dv-duy-tri-muoi-nam.component';
import { BaoCaoQt16CrBanHangDuyTriMuoiNamComponent } from './pages/bao-cao-qt16-cr-ban-hang-duy-tri-muoi-nam/bao-cao-qt16-cr-ban-hang-duy-tri-muoi-nam.component';
import { BaoCaoQt17HieuQuaPrmThangComponent } from './pages/bao-cao-qt17-hieu-qua-prm-thang/bao-cao-qt17-hieu-qua-prm-thang.component';








const routes: Routes = [
  {
    path: 'bao-cao-thang-to-hop',
    component: BaoCaoThangToHopComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-thang-don-vi',
    component: BaoCaoThangDonViComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'khai-bao-mau',
    component: KhaiBaoMauComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'dashboard-dich-vu03',
    component: DashboardDichVu03Component,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'dashboard-dich-vu02',
    component: DashboardDichVu02Component,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'dashboard-dich-vu01',
    component: DashboardDichVu01Component,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'daskboard-kinh-doanh04',
    component: DashboardKinhDoanh04Component,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'daskboard-kinh-doanh03',
    component: DashboardKinhDoanh03Component,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'daskboard-kinh-doanh02',
    component: DaskBoardKinhDoanh02Component,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'daskboard-kinh-doanh',
    component: DaskBoardKinhDoanhComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'report-config',
    component: ReportConfigComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-ban-hang-to-hop-thang',
    component: BaoCaoBanHangToHopThangComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-ngay-to-hop',
    component: BaoCaoNgayToHopComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-tong-hop-dich-vu',
    component: BaoCaoTongHopDichVuComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'ton-kho-chung',
    component: TonKhoChungComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'test',
    component: TestComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-mot-chi-tieu',
    component: BaoCaoMotChiTieuComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-ton-kho-chung',
    component: BaoCaoTonKhoChungComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-ton-kho-chung2',
    component: BaoCaoTonKhoChung2Component,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-ton-kho-chung3',
    component: BaoCaoTonKhoChung3Component,
    canActivate: [ AuthGuardService ]
  },

  {
    path: 'bao-cao-ton-kho-chung4',
    component: BaoCaoTonKhoChung4Component,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-qt02-theo-doi-giam-gia',
    component: BaoCaoQt02TheoDoiGiamGiaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-qt03a-khach-hang-tiem-nang-th',
    component: BaoCaoQt03aKhachHangTiemNangThComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-qt03b-khach-hang-tiem-nang-ct',
    component: BaoCaoQt03bKhachHangTiemNangCtComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-trend-dich-vu1',
    component: BaoCaoTrendDichVu1Component,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-trend-kinh-doanh1',
    component: BaoCaoTrendKinhDoanh1Component,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-qt12-hieu-qua-cr-voc',
    component: BaoCaoQt12HieuQuaCrVocComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-qt13a-du-lieu-kh-cr',
    component: BaoCaoQt13aDuLieuKhCrComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-qt13b-du-lieu-kh-cr-theo-dai-ly',
    component: BaoCaoQt13bDuLieuKhCrTheoDaiLyComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-qt14-cr-dv-duy-tri-sau-thang',
    component: BaoCaoQt14CrDvDuyTriSauThangComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-qt15-cr-dv-duy-tri-muoi-nam',
    component: BaoCaoQt15CrDvDuyTriMuoiNamComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-qt16-cr-ban-hang-duy-tri-muoi-nam',
    component: BaoCaoQt16CrBanHangDuyTriMuoiNamComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-qt17-hieu-qua-prm-thang',
    component: BaoCaoQt17HieuQuaPrmThangComponent,
    canActivate: [ AuthGuardService ]
  },
    {
    path: 'bao-cao-qt04b-ban-hang-thang-ct',
    component: BaoCaoQt04bBanHangThangCtComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-qt05-ban-hang-nam-ct',
    component: BaoCaoQt05BanHangNamCtComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-qt06-quan-ly-nhan-su-kinh-doanh',
    component: BaoCaoQt06QuanLyNhanSuKinhDoanhComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-qt10-tong-hop-dich-vu',
    component: BaoCaoQt10TongHopDichVuComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-qt11-tong-hop-dich-vu-dieu-hanh',
    component: BaoCaoQt11TongHopDichVuDieuHanhComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'bao-cao-ton-kho-chung5',
    component: BaoCaoTonKhoChung5Component,
    canActivate: [ AuthGuardService ]
  },

  {
    path: 'khai-bao-mau-eform',
    component: KhaiBaoMauEformComponent,
    canActivate: [ AuthGuardService ]
  },
  
  {
    path: 'test-tab',
    component: TestTabComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    //path: '**',
    //redirectTo: 'login-form',
    //canActivate: [ AuthGuardService ]

    path: '**',
    redirectTo: 'home',
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, TasksComponent]
})
export class AppRoutingModule { }
