(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/2a2":
/*!******************************************************************************!*\
  !*** ./src/app/pages/bao-cao-mot-chi-tieu/bao-cao-mot-chi-tieu.component.ts ***!
  \******************************************************************************/
/*! exports provided: BaoCaoMotChiTieuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoMotChiTieuComponent", function() { return BaoCaoMotChiTieuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var src_app_00_Common_FilterData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/00.Common/FilterData */ "Y0q4");
/* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @service-work/is-loading */ "nFfA");
/* harmony import */ var src_app_combox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/combox.service */ "H5WC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/01.Service/report.service */ "DQhQ");
/* harmony import */ var src_app_01_Service_00_Common_date_time_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/01.Service/00.Common/date-time-helper.service */ "q0ex");
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/ui/form */ "k8YA");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");













function BaoCaoMotChiTieuComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cell_r26.text);
} }
function BaoCaoMotChiTieuComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.arrHeader[0]);
} }
function BaoCaoMotChiTieuComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.arrHeader[1]);
} }
function BaoCaoMotChiTieuComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.arrHeader[2]);
} }
function BaoCaoMotChiTieuComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.arrHeader[3]);
} }
function BaoCaoMotChiTieuComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.arrHeader[4]);
} }
function BaoCaoMotChiTieuComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.arrHeader[5]);
} }
function BaoCaoMotChiTieuComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.arrHeader[6]);
} }
function BaoCaoMotChiTieuComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.arrHeader[7]);
} }
function BaoCaoMotChiTieuComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.arrHeader[8]);
} }
function BaoCaoMotChiTieuComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.arrHeader[9]);
} }
function BaoCaoMotChiTieuComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.arrHeader[10]);
} }
function BaoCaoMotChiTieuComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.arrHeader[11]);
} }
function BaoCaoMotChiTieuComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.arrHeader[12]);
} }
function BaoCaoMotChiTieuComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.arrHeader[13]);
} }
function BaoCaoMotChiTieuComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.arrHeader[14]);
} }
function BaoCaoMotChiTieuComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.arrHeader[15]);
} }
function BaoCaoMotChiTieuComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.arrHeader[16]);
} }
function BaoCaoMotChiTieuComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.arrHeader[17]);
} }
function BaoCaoMotChiTieuComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.arrHeader[18]);
} }
function BaoCaoMotChiTieuComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.arrHeader[19]);
} }
function BaoCaoMotChiTieuComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.arrHeader[20]);
} }
function BaoCaoMotChiTieuComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.arrHeader[21]);
} }
function BaoCaoMotChiTieuComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.arrHeader[22]);
} }
function BaoCaoMotChiTieuComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.arrHeader[23]);
} }
function BaoCaoMotChiTieuComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r51.column.caption);
} }
const _c0 = function () { return { type: "fixedPoint", precision: "0" }; };
class BaoCaoMotChiTieuComponent {
    constructor(isLoadingService, comboxService, http, reportService, dateTimeHelperService) {
        this.isLoadingService = isLoadingService;
        this.comboxService = comboxService;
        this.http = http;
        this.reportService = reportService;
        this.dateTimeHelperService = dateTimeHelperService;
        this.panelHeight = 465;
        this.chartHeight = this.panelHeight + 105;
        this.valueForEditableTextArea = 'Doanh thu đột biến do covid';
        this.header1 = 'h1';
        this.arrHeader = [];
        this.loai1 = 'Doanh số';
        this.loai2 = 'Sản lượng';
        this.loaiBaoCaos = [this.loai1, this.loai2];
        this.buttonOptions = {
            text: "Filter",
            type: "success",
            onClick: function () {
                // Implement your logic here
            }
        };
    }
    exportSelectedData() {
        this.dataGrid.instance.exportToExcel(true);
    }
    ngOnInit() {
        const homNay = new Date();
        this.filterData = new src_app_00_Common_FilterData__WEBPACK_IMPORTED_MODULE_2__["FilterData"]();
        this.filterData.LoaiBaoCao = this.loai1;
        this.filterData.Thang = (homNay.getMonth()).toString();
        this.filterData.Nam = homNay.getFullYear().toString();
        this.filterData.TuNam = (homNay.getFullYear()).toString();
        this.filterData.TuThang = this.filterData.Thang;
        this.isLoadingService.add(this.comboxService.GetComboxDataSearch('XMDanhMucModelXeTbl').subscribe(t => {
            this.XMBXDanhMucKieuXeTblDataCombox = t;
        }));
        this.isLoadingService.add(this.comboxService.GetComboxDataSearch('DanhMucVungMienTbl').subscribe(t => {
            this.danhMucVungMienTblDataCombox = t;
        }));
        this.isLoadingService.add(this.comboxService.GetComboxDataSearch('DanhMucTinhThanhTbl').subscribe(t => {
            this.danhMucTinhThanhTblDataCombox = t;
        }));
        this.isLoadingService.add(this.comboxService.GetComboxDataSearch('XMDanhMucHangXeTbl').subscribe(t => {
            this.XMDanhMucHangXeTblDataCombox = t;
        }));
        this.isLoadingService.add(this.comboxService.GetComboxDataSearch('DanhMucDonViNhapLieuTbl').subscribe(t => {
            this.DanhMucDonViNhapLieuTblDataCombox = t;
        }));
        /*
        this.isLoadingService.add(
          this.comboxService.GetComboxDataSearch('DanhMucKhachHangTbl').subscribe(
          t => {
            this.DanhMucKhachHangTblDataCombox = t;
          }
         )
        );
        */
        this.isLoadingService.add(this.comboxService.GetComboxDataSearch('XMBXMaMauTbl').subscribe(t => {
            this.XMBXMaMauTblDataCombox = t;
        }));
    }
    filter() {
        this.arrHeader = this.dateTimeHelperService.getToyotaHeaderName(Number(this.filterData.TuNam), Number(this.filterData.TuThang), Number(this.filterData.Nam), Number(this.filterData.Thang));
        let loaiBc;
        if (this.filterData.LoaiBaoCao === this.loai1) {
            loaiBc = '1';
        }
        else {
            loaiBc = '2';
        }
        const tuNgay = `${this.filterData.TuNam}-${this.filterData.TuThang}-1`;
        const denNgay = `${this.filterData.Nam}-${this.filterData.Thang}-1`;
        this.reportData3 = this.reportService.CP_BaoCaoKetQuaKinhDoanhKhoiDaiLyPhan1(loaiBc, tuNgay, denNgay, this.filterData.CuaHang, this.filterData.HangXe, this.filterData.Vung, this.filterData.Tinh, this.filterData.LoaiXe, '', this.filterData.MauXe, '', '', this.filterData.TuNam, this.filterData.TuThang, '');
        this.isLoadingService.add(this.reportData3.subscribe(t => { console.log(t); this.reportDataArr3 = t; }));
        this.reportData = this.reportService.CP_BaoCaoKetQuaKinhDoanhLocTheoChiTieuKhoiDaiLyPhan1(loaiBc, tuNgay, denNgay, this.filterData.CuaHang, this.filterData.HangXe, this.filterData.Vung, this.filterData.Tinh, this.filterData.LoaiXe, '', this.filterData.MauXe, '', '', this.filterData.TuNam, this.filterData.TuThang, '');
        this.isLoadingService.add(this.reportData.subscribe(t => { this.reportDataArr = t; }));
        this.reportData1 = this.reportService.CP_BaoCaoHieuQuaKinhDoanhKhoiDaiLyPhan1(loaiBc, tuNgay, denNgay, this.filterData.CuaHang, this.filterData.HangXe, this.filterData.Vung, this.filterData.Tinh, this.filterData.LoaiXe, '', this.filterData.MauXe, '', '', this.filterData.TuNam, this.filterData.TuThang, '');
        this.reportData1.subscribe(t => { this.reportDataArr1 = t; });
    }
}
BaoCaoMotChiTieuComponent.ɵfac = function BaoCaoMotChiTieuComponent_Factory(t) { return new (t || BaoCaoMotChiTieuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_work_is_loading__WEBPACK_IMPORTED_MODULE_3__["IsLoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_combox_service__WEBPACK_IMPORTED_MODULE_4__["ComboxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_01_Service_00_Common_date_time_helper_service__WEBPACK_IMPORTED_MODULE_7__["DateTimeHelperService"])); };
BaoCaoMotChiTieuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaoCaoMotChiTieuComponent, selectors: [["app-bao-cao-mot-chi-tieu"]], viewQuery: function BaoCaoMotChiTieuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dataGrid = _t.first);
    } }, decls: 79, vars: 55, consts: [[1, "dx-card", "content-block", "responsive-paddings"], ["id", "form-container"], ["id", "form", 3, "colCount"], ["dataField", "ID"], ["dataField", "BirthDate"], ["itemType", "button", 3, "buttonOptions"], ["title", "previous", "itemType", "button", "horizontalAlignment", "left"], ["title", "next", "itemType", "button", "horizontalAlignment", "right"], [1, "w3-col", "l8", "m12", "s12"], ["id", "chartBar1", "title", "T\u1ED5ng h\u1EE3p hi\u1EC7u qu\u1EA3 s\u1EA3n xu\u1EA5t kinh doanh", 3, "dataSource"], [3, "height", "heightChange"], ["valueField", "Val1", "name", "Th\u1EF1c hi\u1EC7n"], ["valueField", "Val2", "name", "C\u00F9ng k\u1EF3"], ["valueField", "Val3", "name", "T\u1EF7 l\u1EC7 k\u1EBF ho\u1EA1ch"], ["argumentField", "Code1", "type", "bar", "hoverMode", "allArgumentPoints", "selectionMode", "allArgumentPoints"], [3, "visible", "format"], ["verticalAlignment", "bottom", "horizontalAlignment", "center"], [3, "enabled"], [1, "w3-col", "l4", "m12", "s12"], [1, "w3-margin-left"], [1, "w3-pa"], [3, "height", "readOnly", "value", "heightChange", "valueChange"], ["id", "gridContainer", 3, "dataSource", "rowAlternationEnabled", "allowColumnResizing", "columnAutoWidth", "showBorders"], ["cssClass", "cls", "dataField", "Code2", "dataType", "string", "caption", "Ch\u1EC9 ti\u00EAu"], ["cssClass", "cls", "dataField", "Val1", "dataType", "number", "headerCellTemplate", "titleHeaderTemplate1"], ["type", "fixedPoint", 3, "precision"], ["cssClass", "cls", "dataField", "Val2", "dataType", "number", "caption", "2", "headerCellTemplate", "titleHeaderTemplate2"], ["cssClass", "cls", "dataField", "Val3", "dataType", "number", "caption", "3", "headerCellTemplate", "titleHeaderTemplate3"], ["cssClass", "cls", "dataField", "Val4", "dataType", "number", "caption", "4", "headerCellTemplate", "titleHeaderTemplate4"], ["cssClass", "cls", "dataField", "Val5", "dataType", "number", "caption", "5", "headerCellTemplate", "titleHeaderTemplate5"], ["cssClass", "cls", "dataField", "Val6", "dataType", "number", "caption", "6", "headerCellTemplate", "titleHeaderTemplate6"], ["cssClass", "cls", "dataField", "Val7", "dataType", "number", "caption", "7", "headerCellTemplate", "titleHeaderTemplate7"], ["cssClass", "cls", "dataField", "Val8", "dataType", "number", "caption", "8", "headerCellTemplate", "titleHeaderTemplate8"], ["cssClass", "cls", "dataField", "Val9", "dataType", "number", "caption", "9", "headerCellTemplate", "titleHeaderTemplate9"], ["cssClass", "cls", "dataField", "Val10", "dataType", "number", "caption", "10", "headerCellTemplate", "titleHeaderTemplate10"], [4, "dxTemplate", "dxTemplateOf"], [2, "color", "black"]], template: function BaoCaoMotChiTieuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dx-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dxi-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "dxi-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dxi-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "dxi-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "dxi-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "dx-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "dxo-size", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("heightChange", function BaoCaoMotChiTieuComponent_Template_dxo_size_heightChange_11_listener($event) { return ctx.chartHeight = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dxi-series", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "dxi-series", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "dxi-series", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "dxo-common-series-settings", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "dxo-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "dxo-legend", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "dxo-export", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ghi ch\u00FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "dx-text-area", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("heightChange", function BaoCaoMotChiTieuComponent_Template_dx_text_area_heightChange_23_listener($event) { return ctx.panelHeight = $event; })("valueChange", function BaoCaoMotChiTieuComponent_Template_dx_text_area_valueChange_23_listener($event) { return ctx.valueForEditableTextArea = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "dx-data-grid", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "dxi-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "dxi-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "dxo-format", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "dxi-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "dxo-format", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "dxi-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "dxo-format", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "dxi-column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "dxo-format", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "dxi-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "dxo-format", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "dxi-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "dxo-format", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "dxi-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "dxo-format", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "dxi-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "dxo-format", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "dxi-column", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "dxo-format", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "dxi-column", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "dxo-format", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, BaoCaoMotChiTieuComponent_div_48_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, BaoCaoMotChiTieuComponent_div_49_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, BaoCaoMotChiTieuComponent_div_50_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, BaoCaoMotChiTieuComponent_div_51_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, BaoCaoMotChiTieuComponent_div_52_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, BaoCaoMotChiTieuComponent_div_53_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, BaoCaoMotChiTieuComponent_div_54_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, BaoCaoMotChiTieuComponent_div_55_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, BaoCaoMotChiTieuComponent_div_56_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, BaoCaoMotChiTieuComponent_div_57_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, BaoCaoMotChiTieuComponent_div_58_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, BaoCaoMotChiTieuComponent_div_59_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, BaoCaoMotChiTieuComponent_div_60_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, BaoCaoMotChiTieuComponent_div_61_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, BaoCaoMotChiTieuComponent_div_62_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, BaoCaoMotChiTieuComponent_div_63_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, BaoCaoMotChiTieuComponent_div_64_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, BaoCaoMotChiTieuComponent_div_65_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, BaoCaoMotChiTieuComponent_div_66_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, BaoCaoMotChiTieuComponent_div_67_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, BaoCaoMotChiTieuComponent_div_68_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, BaoCaoMotChiTieuComponent_div_69_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, BaoCaoMotChiTieuComponent_div_70_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, BaoCaoMotChiTieuComponent_div_71_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, BaoCaoMotChiTieuComponent_div_72_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, BaoCaoMotChiTieuComponent_div_73_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Ghi ch\u00FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "dx-text-area", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("heightChange", function BaoCaoMotChiTieuComponent_Template_dx_text_area_heightChange_78_listener($event) { return ctx.panelHeight = $event; })("valueChange", function BaoCaoMotChiTieuComponent_Template_dx_text_area_valueChange_78_listener($event) { return ctx.valueForEditableTextArea = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colCount", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonOptions", ctx.buttonOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.reportDataArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", ctx.chartHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", true)("format", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](54, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", ctx.panelHeight)("readOnly", true)("value", ctx.valueForEditableTextArea);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.reportDataArr3)("rowAlternationEnabled", true)("allowColumnResizing", true)("columnAutoWidth", true)("showBorders", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("precision", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("precision", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("precision", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("precision", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("precision", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("precision", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("precision", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("precision", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("precision", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("precision", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "cellTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate17");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate21");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "addressHeaderTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", ctx.panelHeight)("readOnly", true)("value", ctx.valueForEditableTextArea);
    } }, directives: [devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_8__["DxFormComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__["DxiItemComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__["DxiButtonComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxChartComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__["DxoSizeComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__["DxiSeriesComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__["DxoCommonSeriesSettingsComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__["DxoLabelComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__["DxoLegendComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__["DxoExportComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxTextAreaComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__["DxiColumnComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__["DxoFormatComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_10__["DxTemplateDirective"]], styles: [".form-avatar[_ngcontent-%COMP%] {\n  float: left;\n  height: 120px;\n  width: 120px;\n  margin-right: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: #fff;\n  overflow: hidden;\n}\n.form-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 120px;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxiYW8tY2FvLXRvbi1raG8tY2h1bmczXFxiYW8tY2FvLW1vdC1jaGktdGlldS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNOIiwiZmlsZSI6ImJhby1jYW8tbW90LWNoaS10aWV1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tYXZhdGFyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaoCaoMotChiTieuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bao-cao-mot-chi-tieu',
                templateUrl: './bao-cao-mot-chi-tieu.component.html',
                styleUrls: ['./bao-cao-mot-chi-tieu.component.scss']
            }]
    }], function () { return [{ type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_3__["IsLoadingService"] }, { type: src_app_combox_service__WEBPACK_IMPORTED_MODULE_4__["ComboxService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"] }, { type: src_app_01_Service_00_Common_date_time_helper_service__WEBPACK_IMPORTED_MODULE_7__["DateTimeHelperService"] }]; }, { dataGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ 0:
/*!**********************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0&sockPath=/sockjs-node ./src/main.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\Project\sangdq\Angular\BaoCaoQuanTri\node_modules\webpack-dev-server\client\index.js?http://0.0.0.0:0&sockPath=/sockjs-node */"QM51");
module.exports = __webpack_require__(/*! E:\Project\sangdq\Angular\BaoCaoQuanTri\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 2, vars: 0, consts: [[1, "content-block"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logos-container[_ngcontent-%COMP%] {\n  margin: 20px 0 40px 0;\n  text-align: center;\n}\n.logos-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.devextreme-logo[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 34px;\n  margin-bottom: 13px;\n}\n.angular-logo[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 62px;\n}\n.plus[_ngcontent-%COMP%] {\n  margin: 15px 10px;\n  width: 22px;\n  height: 22px;\n}\n.screen-x-small[_nghost-%COMP%]   .logos-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .screen-x-small   [_nghost-%COMP%]   .logos-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.screen-x-small[_nghost-%COMP%]   .logos-container[_ngcontent-%COMP%]   svg.plus[_ngcontent-%COMP%], .screen-x-small   [_nghost-%COMP%]   .logos-container[_ngcontent-%COMP%]   svg.plus[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxiYW8tY2FvLXRvbi1raG8tY2h1bmczXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxxQkFBQTtBQUVKO0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFBSjtBQUNJO0VBQ0UsU0FBQTtBQUNOIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3MtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4IDAgNDBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHN2ZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG5cbi5kZXZleHRyZW1lLWxvZ28ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMzRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbn1cblxuLmFuZ3VsYXItbG9nbyB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiA2MnB4O1xufVxuXG4ucGx1cyB7XG4gIG1hcmdpbjogMTVweCAxMHB4O1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuXG46aG9zdC1jb250ZXh0KC5zY3JlZW4teC1zbWFsbCkgLmxvZ29zLWNvbnRhaW5lciB7XG4gIHN2ZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgJi5wbHVzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1N39":
/*!********************************************!*\
  !*** ./src/app/unauthenticated-content.ts ***!
  \********************************************/
/*! exports provided: UnauthenticatedContentComponent, UnauthenticatedContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthenticatedContentComponent", function() { return UnauthenticatedContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthenticatedContentModule", function() { return UnauthenticatedContentModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layouts */ "Jcec");
/* harmony import */ var _layouts_single_card_single_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/single-card/single-card.component */ "OlHu");







class UnauthenticatedContentComponent {
    constructor(router) {
        this.router = router;
    }
    get title() {
        const path = this.router.url.split('/')[1];
        switch (path) {
            case 'login-form': return 'Sign In';
            case 'reset-password': return 'Reset Password';
            case 'create-account': return 'Sign Up';
            case 'change-password': return 'Change Password';
        }
    }
    get description() {
        const path = this.router.url.split('/')[1];
        switch (path) {
            case 'reset-password': return 'Please enter the email address that you used to register, and we will send you a link to reset your password via Email.';
        }
    }
}
UnauthenticatedContentComponent.ɵfac = function UnauthenticatedContentComponent_Factory(t) { return new (t || UnauthenticatedContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UnauthenticatedContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UnauthenticatedContentComponent, selectors: [["app-unauthenticated-content"]], decls: 2, vars: 2, consts: [[3, "title", "description"]], template: function UnauthenticatedContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-single-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.title)("description", ctx.description);
    } }, directives: [_layouts_single_card_single_card_component__WEBPACK_IMPORTED_MODULE_4__["SingleCardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n      width: 100%;\n      height: 100%;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UnauthenticatedContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-unauthenticated-content',
                template: `
    <app-single-card [title]="title" [description]="description">
      <router-outlet></router-outlet>
    </app-single-card>
  `,
                styles: [`
    :host {
      width: 100%;
      height: 100%;
    }
  `]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();
class UnauthenticatedContentModule {
}
UnauthenticatedContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UnauthenticatedContentModule });
UnauthenticatedContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function UnauthenticatedContentModule_Factory(t) { return new (t || UnauthenticatedContentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            src_app_layouts__WEBPACK_IMPORTED_MODULE_3__["SingleCardModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UnauthenticatedContentModule, { declarations: [UnauthenticatedContentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        src_app_layouts__WEBPACK_IMPORTED_MODULE_3__["SingleCardModule"]], exports: [UnauthenticatedContentComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UnauthenticatedContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    src_app_layouts__WEBPACK_IMPORTED_MODULE_3__["SingleCardModule"],
                ],
                declarations: [UnauthenticatedContentComponent],
                exports: [UnauthenticatedContentComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "1ua0":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: FooterComponent, FooterModule, HeaderComponent, HeaderModule, LoginFormComponent, LoginFormModule, ResetPasswordFormComponent, ResetPasswordFormModule, CreateAccountFormComponent, CreateAccountFormModule, ChangePasswordFormComponent, ChangePasswordFormModule, SideNavigationMenuComponent, SideNavigationMenuModule, UserPanelComponent, UserPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ "aF9I");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterModule"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "aZ8m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"]; });

/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form.component */ "RK7/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFormModule", function() { return _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormModule"]; });

/* harmony import */ var _reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password-form/reset-password-form.component */ "Aoei");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordFormComponent", function() { return _reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordFormComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordFormModule", function() { return _reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordFormModule"]; });

/* harmony import */ var _create_account_form_create_account_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-account-form/create-account-form.component */ "8K34");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateAccountFormComponent", function() { return _create_account_form_create_account_form_component__WEBPACK_IMPORTED_MODULE_4__["CreateAccountFormComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateAccountFormModule", function() { return _create_account_form_create_account_form_component__WEBPACK_IMPORTED_MODULE_4__["CreateAccountFormModule"]; });

/* harmony import */ var _change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password-form/change-password-form.component */ "hVAu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordFormComponent", function() { return _change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordFormComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordFormModule", function() { return _change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordFormModule"]; });

/* harmony import */ var _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-navigation-menu/side-navigation-menu.component */ "WOTP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuComponent", function() { return _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_6__["SideNavigationMenuComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuModule", function() { return _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_6__["SideNavigationMenuModule"]; });

/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-panel/user-panel.component */ "V2yS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_7__["UserPanelComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPanelModule", function() { return _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_7__["UserPanelModule"]; });











/***/ }),

/***/ "1xgb":
/*!******************************************************!*\
  !*** ./src/app/pages/test-tab/test-tab.component.ts ***!
  \******************************************************/
/*! exports provided: TestTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestTabComponent", function() { return TestTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "384S");



class TestTabComponent {
    constructor() {
        this.popupDetailVisible = false;
    }
    ngOnInit() {
        this.cap1s = ["Muc 1", "Muc 2", "Muc 3"];
        this.innerWidth = window.innerWidth;
        this.vTab1 = "block";
        this.vTab2 = "block";
        this.vTab3 = "block";
        this.popupWidth = window.innerWidth - 20;
        this.popupHeight = window.innerHeight - 20;
    }
    addRow() {
        this.popupDetailVisible = true;
    }
    deleteRow() { }
    editRow() { }
    selCap1(e) {
        if (e.itemData == "Muc 1") {
            this.vTab1 = "block";
            this.vTab2 = "none";
            this.vTab3 = "none";
        }
        else if (e.itemData == "Muc 2") {
            this.vTab1 = "none";
            this.vTab2 = "block";
            this.vTab3 = "none";
        }
        else if (e.itemData == "Muc 3") {
            this.vTab1 = "none";
            this.vTab2 = "none";
            this.vTab3 = "block";
        }
    }
}
TestTabComponent.ɵfac = function TestTabComponent_Factory(t) { return new (t || TestTabComponent)(); };
TestTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestTabComponent, selectors: [["app-test-tab"]], decls: 129, vars: 17, consts: [["id", "London"], ["id", "Paris", 1, "city"], ["id", "Tokyo", 1, "city"], ["icon", "filter", "label", "", 3, "index", "onClick"], [1, "w3-light-grey", 2, "position", "absolute", "left", "1px", "bottom", "10px", "z-index", "5"], [3, "dataSource", "width", "scrollByContent", "showNavButtons", "onItemClick"], ["title", "Chi ti\u1EBFt", 3, "width", "height", "showTitle", "dragEnabled", "closeOnOutsideClick", "visible", "widthChange", "heightChange", "visibleChange"]], template: function TestTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "test-tab works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "London");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Paris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Paris is the capital of France.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Tokyo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Tokyo is the capital of Japan.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "London is the capital of England.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "dx-speed-dial-action", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function TestTabComponent_Template_dx_speed_dial_action_onClick_125_listener() { return ctx.addRow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "dx-tabs", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemClick", function TestTabComponent_Template_dx_tabs_onItemClick_127_listener($event) { return ctx.selCap1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "dx-popup", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("widthChange", function TestTabComponent_Template_dx_popup_widthChange_128_listener($event) { return ctx.popupWidth = $event; })("heightChange", function TestTabComponent_Template_dx_popup_heightChange_128_listener($event) { return ctx.popupHeight = $event; })("visibleChange", function TestTabComponent_Template_dx_popup_visibleChange_128_listener($event) { return ctx.popupDetailVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.vTab1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.vTab2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.vTab3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.cap1s)("width", ctx.innerWidth)("scrollByContent", true)("showNavButtons", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.popupWidth)("height", ctx.popupHeight)("showTitle", true)("dragEnabled", false)("closeOnOutsideClick", false)("visible", ctx.popupDetailVisible);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxSpeedDialActionComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxTabsComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxPopupComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LXRhYi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test-tab',
                templateUrl: './test-tab.component.html',
                styleUrls: ['./test-tab.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8K34":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/create-account-form/create-account-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CreateAccountFormComponent, CreateAccountFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountFormComponent", function() { return CreateAccountFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountFormModule", function() { return CreateAccountFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/form */ "k8YA");
/* harmony import */ var devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/load-indicator */ "X/xX");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme/ui/notify */ "pxlC");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services */ "ZF+8");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");















function CreateAccountFormComponent_ng_container_28_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "dx-load-indicator", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", true);
} }
function CreateAccountFormComponent_ng_container_28_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Create a new account");
} }
function CreateAccountFormComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateAccountFormComponent_ng_container_28_ng_container_2_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CreateAccountFormComponent_ng_container_28_ng_template_3_Template, 1, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loading)("ngIfElse", _r3);
} }
const _c0 = function () { return { stylingMode: "filled", placeholder: "Email", mode: "email" }; };
const _c1 = function () { return { stylingMode: "filled", placeholder: "Password", mode: "password" }; };
const _c2 = function () { return { stylingMode: "filled", placeholder: "Confirm Password", mode: "password" }; };
class CreateAccountFormComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loading = false;
        this.formData = {};
        this.confirmPassword = (e) => {
            return e.value === this.formData.password;
        };
    }
    onSubmit(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            const { email, password } = this.formData;
            this.loading = true;
            const result = yield this.authService.createAccount(email, password);
            this.loading = false;
            if (result.isOk) {
                this.router.navigate(['/login-form']);
            }
            else {
                devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6___default()(result.message, 'error', 2000);
            }
        });
    }
}
CreateAccountFormComponent.ɵfac = function CreateAccountFormComponent_Factory(t) { return new (t || CreateAccountFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CreateAccountFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateAccountFormComponent, selectors: [["app-create-account-form"]], decls: 29, vars: 15, consts: [[1, "create-account-form", 3, "submit"], [3, "formData", "disabled"], ["dataField", "email", "editorType", "dxTextBox", 3, "editorOptions"], ["type", "required", "message", "Email is required"], ["type", "email", "message", "Email is invalid"], [3, "visible"], ["dataField", "password", "editorType", "dxTextBox", 3, "editorOptions"], ["type", "required", "message", "Password is required"], ["dataField", "confirmedPassword", "editorType", "dxTextBox", 3, "editorOptions"], ["type", "custom", "message", "Passwords do not match", 3, "validationCallback"], [1, "policy-info"], ["routerLink", "#"], ["itemType", "button"], ["width", "100%", "type", "default", 3, "useSubmitBehavior", "template"], [1, "login-link"], ["routerLink", "/login"], [4, "dxTemplate", "dxTemplateOf"], [1, "dx-button-text"], [4, "ngIf", "ngIfElse"], ["notLoading", ""], ["width", "24px", "height", "24px", 3, "visible"]], template: function CreateAccountFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function CreateAccountFormComponent_Template_form_submit_0_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "dx-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "dxi-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "dxi-validation-rule", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "dxi-validation-rule", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "dxo-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "dxi-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "dxi-validation-rule", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "dxo-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "dxi-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "dxi-validation-rule", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "dxi-validation-rule", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "dxo-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "dxi-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " By creating an account, you agree to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "dxi-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "dxo-button-options", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "dxi-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, CreateAccountFormComponent_ng_container_28_Template, 5, 2, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formData", ctx.formData)("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("validationCallback", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("useSubmitBehavior", true)("template", "createAccountTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dxTemplateOf", "createAccountTemplate");
    } }, directives: [devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__["DxFormComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxiItemComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxiValidationRuleComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxoLabelComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxoButtonOptionsComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_9__["DxTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__["DxLoadIndicatorComponent"]], styles: [".create-account-form[_ngcontent-%COMP%]   .policy-info[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  color: rgba(0, 0, 0, 0.609);\n  font-size: 14px;\n  font-style: normal;\n}\n.create-account-form[_ngcontent-%COMP%]   .policy-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.609);\n}\n.create-account-form[_ngcontent-%COMP%]   .login-link[_ngcontent-%COMP%] {\n  color: #ff5722;\n  font-size: 16px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2VzXFxiYW8tY2FvLXRvbi1raG8tY2h1bmczXFxjcmVhdGUtYWNjb3VudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFx0aGVtZXNcXGdlbmVyYXRlZFxcdmFyaWFibGVzLmJhc2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUZKO0FBSUk7RUFDRSwyQkFBQTtBQUZOO0FBTUU7RUFDRSxjQ2ZVO0VEZ0JWLGVBQUE7RUFDQSxrQkFBQTtBQUpKIiwiZmlsZSI6ImNyZWF0ZS1hY2NvdW50LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWVzL2dlbmVyYXRlZC92YXJpYWJsZXMuYmFzZS5zY3NzXCI7XG5cbi5jcmVhdGUtYWNjb3VudC1mb3JtIHtcbiAgLnBvbGljeS1pbmZvIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBjb2xvcjogcmdiYSgkYmFzZS10ZXh0LWNvbG9yLCBhbHBoYSgkYmFzZS10ZXh0LWNvbG9yKSAqIDAuNyk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcblxuICAgIGEge1xuICAgICAgY29sb3I6IHJnYmEoJGJhc2UtdGV4dC1jb2xvciwgYWxwaGEoJGJhc2UtdGV4dC1jb2xvcikgKiAwLjcpO1xuICAgIH1cbiAgfVxuXG4gIC5sb2dpbi1saW5rIHtcbiAgICBjb2xvcjogJGJhc2UtYWNjZW50O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbiIsIiRiYXNlLWFjY2VudDogI2ZmNTcyMjtcbiRiYXNlLXRleHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4kYmFzZS1iZzogI2ZmZjtcbiRiYXNlLWJvcmRlci1jb2xvcjogIzA3MTAxMztcbiRiYXNlLWJvcmRlci1yYWRpdXM6IDRweDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CreateAccountFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-create-account-form',
                templateUrl: './create-account-form.component.html',
                styleUrls: ['./create-account-form.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();
class CreateAccountFormModule {
}
CreateAccountFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CreateAccountFormModule });
CreateAccountFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CreateAccountFormModule_Factory(t) { return new (t || CreateAccountFormModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__["DxFormModule"],
            devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__["DxLoadIndicatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CreateAccountFormModule, { declarations: [CreateAccountFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__["DxFormModule"],
        devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__["DxLoadIndicatorModule"]], exports: [CreateAccountFormComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CreateAccountFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__["DxFormModule"],
                    devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__["DxLoadIndicatorModule"]
                ],
                declarations: [CreateAccountFormComponent],
                exports: [CreateAccountFormComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "Aoei":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/reset-password-form/reset-password-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ResetPasswordFormComponent, ResetPasswordFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordFormComponent", function() { return ResetPasswordFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordFormModule", function() { return ResetPasswordFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/form */ "k8YA");
/* harmony import */ var devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/load-indicator */ "X/xX");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme/ui/notify */ "pxlC");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services */ "ZF+8");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");















function ResetPasswordFormComponent_ng_container_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "dx-load-indicator", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", true);
} }
function ResetPasswordFormComponent_ng_container_13_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Reset my password");
} }
function ResetPasswordFormComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ResetPasswordFormComponent_ng_container_13_ng_container_2_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ResetPasswordFormComponent_ng_container_13_ng_template_3_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loading)("ngIfElse", _r3);
} }
const _c0 = function () { return { stylingMode: "filled", placeholder: "Email", mode: "email" }; };
const _c1 = function () { return { class: "submit-button" }; };
const notificationText = 'We\'ve sent a link to reset your password. Check your inbox.';
class ResetPasswordFormComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loading = false;
        this.formData = {};
    }
    onSubmit(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            const { email } = this.formData;
            this.loading = true;
            const result = yield this.authService.resetPassword(email);
            this.loading = false;
            if (result.isOk) {
                this.router.navigate(['/login-form']);
                devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6___default()(notificationText, 'success', 2500);
            }
            else {
                devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6___default()(result.message, 'error', 2000);
            }
        });
    }
}
ResetPasswordFormComponent.ɵfac = function ResetPasswordFormComponent_Factory(t) { return new (t || ResetPasswordFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ResetPasswordFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResetPasswordFormComponent, selectors: [["app-reset-password-form"]], decls: 14, vars: 10, consts: [[1, "reset-password-form", 3, "submit"], [3, "formData", "disabled"], ["dataField", "email", "editorType", "dxTextBox", 3, "editorOptions"], ["type", "required", "message", "Email is required"], ["type", "email", "message", "Email is invalid"], [3, "visible"], ["itemType", "button"], ["width", "100%", "type", "default", 3, "useSubmitBehavior", "template", "elementAttr"], [1, "login-link"], ["routerLink", "/login"], [4, "dxTemplate", "dxTemplateOf"], [1, "dx-button-text"], [4, "ngIf", "ngIfElse"], ["notLoading", ""], ["width", "24px", "height", "24px", 3, "visible"]], template: function ResetPasswordFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function ResetPasswordFormComponent_Template_form_submit_0_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "dx-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "dxi-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "dxi-validation-rule", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "dxi-validation-rule", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "dxo-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "dxi-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "dxo-button-options", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "dxi-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Return to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ResetPasswordFormComponent_ng_container_13_Template, 5, 2, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formData", ctx.formData)("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("useSubmitBehavior", true)("template", "resetPasswordTemplate")("elementAttr", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dxTemplateOf", "resetPasswordTemplate");
    } }, directives: [devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__["DxFormComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxiItemComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxiValidationRuleComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxoLabelComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxoButtonOptionsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_9__["DxTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__["DxLoadIndicatorComponent"]], styles: [".reset-password-form[_ngcontent-%COMP%]     .submit-button {\n  margin-top: 10px;\n}\n.reset-password-form[_ngcontent-%COMP%]   .login-link[_ngcontent-%COMP%] {\n  color: #ff5722;\n  font-size: 16px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2VzXFxiYW8tY2FvLXRvbi1raG8tY2h1bmczXFxyZXNldC1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFx0aGVtZXNcXGdlbmVyYXRlZFxcdmFyaWFibGVzLmJhc2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGdCQUFBO0FBRko7QUFLRTtFQUNFLGNDUlU7RURTVixlQUFBO0VBQ0Esa0JBQUE7QUFISiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xuXG4ucmVzZXQtcGFzc3dvcmQtZm9ybSB7XG4gIDo6bmctZGVlcCAuc3VibWl0LWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5sb2dpbi1saW5rIHtcbiAgICBjb2xvcjogJGJhc2UtYWNjZW50O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbiIsIiRiYXNlLWFjY2VudDogI2ZmNTcyMjtcbiRiYXNlLXRleHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4kYmFzZS1iZzogI2ZmZjtcbiRiYXNlLWJvcmRlci1jb2xvcjogIzA3MTAxMztcbiRiYXNlLWJvcmRlci1yYWRpdXM6IDRweDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ResetPasswordFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-reset-password-form',
                templateUrl: './reset-password-form.component.html',
                styleUrls: ['./reset-password-form.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();
class ResetPasswordFormModule {
}
ResetPasswordFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ResetPasswordFormModule });
ResetPasswordFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ResetPasswordFormModule_Factory(t) { return new (t || ResetPasswordFormModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__["DxFormModule"],
            devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__["DxLoadIndicatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ResetPasswordFormModule, { declarations: [ResetPasswordFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__["DxFormModule"],
        devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__["DxLoadIndicatorModule"]], exports: [ResetPasswordFormComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ResetPasswordFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__["DxFormModule"],
                    devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__["DxLoadIndicatorModule"]
                ],
                declarations: [ResetPasswordFormComponent],
                exports: [ResetPasswordFormComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DGcr":
/*!************************************************!*\
  !*** ./src/app/pages/tasks/tasks.component.ts ***!
  \************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_data_odata_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/data/odata/store */ "vpR3");
/* harmony import */ var devextreme_data_odata_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_odata_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");





class TasksComponent {
    constructor() {
        this.dataSource = {
            store: {
                type: 'odata',
                key: 'Task_ID',
                url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
            },
            expand: 'ResponsibleEmployee',
            select: [
                'Task_ID',
                'Task_Subject',
                'Task_Start_Date',
                'Task_Due_Date',
                'Task_Status',
                'Task_Priority',
                'Task_Completion',
                'ResponsibleEmployee/Employee_Full_Name'
            ]
        };
        this.priority = [
            { name: 'High', value: 4 },
            { name: 'Urgent', value: 3 },
            { name: 'Normal', value: 2 },
            { name: 'Low', value: 1 }
        ];
    }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(); };
TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["ng-component"]], decls: 16, vars: 23, consts: [[1, "content-block"], [1, "dx-card", "wide-card", 3, "dataSource", "showBorders", "focusedRowEnabled", "focusedRowIndex", "columnAutoWidth", "columnHidingEnabled"], [3, "pageSize"], [3, "showPageSizeSelector", "showInfo"], [3, "visible"], ["dataField", "Task_ID", 3, "width", "hidingPriority"], ["dataField", "Task_Subject", "caption", "Subject", 3, "width", "hidingPriority"], ["dataField", "Task_Status", "caption", "Status", 3, "hidingPriority"], ["dataField", "Task_Priority", "caption", "Priority", 3, "hidingPriority"], ["valueExpr", "value", "displayExpr", "name", 3, "dataSource"], ["dataField", "ResponsibleEmployee.Employee_Full_Name", "caption", "Assigned To", 3, "allowSorting", "hidingPriority"], ["dataField", "Task_Start_Date", "caption", "Start Date", "dataType", "date", 3, "hidingPriority"], ["dataField", "Task_Due_Date", "caption", "Due Date", "dataType", "date", 3, "hidingPriority"], ["dataField", "Task_Priority", "caption", "Priority", "name", "Priority", 3, "hidingPriority"], ["dataField", "Task_Completion", "caption", "Completion", 3, "hidingPriority"]], template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tasks 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dx-data-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dxo-paging", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "dxo-pager", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dxo-filter-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "dxi-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "dxi-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dxi-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "dxi-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "dxo-lookup", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dxi-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dxi-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "dxi-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "dxi-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "dxi-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("showBorders", false)("focusedRowEnabled", true)("focusedRowIndex", 0)("columnAutoWidth", true)("columnHidingEnabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPageSizeSelector", true)("showInfo", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 90)("hidingPriority", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 190)("hidingPriority", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidingPriority", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidingPriority", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.priority);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowSorting", false)("hidingPriority", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidingPriority", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidingPriority", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidingPriority", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidingPriority", 0);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__["DxoPagingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__["DxoPagerComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__["DxoFilterRowComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__["DxiColumnComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__["DxoLookupComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'tasks.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "DQhQ":
/*!**********************************************!*\
  !*** ./src/app/01.Service/report.service.ts ***!
  \**********************************************/
/*! exports provided: ReportService, BaoCaoTonKhoChung, ReportData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoChung", function() { return BaoCaoTonKhoChung; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportData", function() { return ReportData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _global_variable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-variable.service */ "RIMx");





class ReportService {
    constructor(global, http) {
        this.global = global;
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            })
        };
    }
    GetReport(controlerName, actionGetByID, LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy) {
        let queryString;
        queryString =
            `?LoaiBaoCao=${LoaiBaoCao}&TuNgay=${TuNgay}&
DenNgay=${DenNgay}&
DonViNhapLieu=${DonViNhapLieu}&
HangXe=${HangXe}&
VungMien=${VungMien}&
TinhThanh=${TinhThanh}&
MauXe=${MauXe}&
LoaiXe=${LoaiXe}&
KieuXe=${KieuXe}&
KhachHang=${KhachHang}&
NhanVien=${NhanVien}&
Nam=${Nam}&
Thang=${Thang}&
QuanLyCuaHang=${nguoiQuanLy}`;
        const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
        console.log(url);
        return this.http.get(url, this.httpOptions);
    }
    CP_BaoCaoXeMayTheoNgayTbl(LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy) {
        return this.GetReport('CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco', 'CP_BaoCaoXeMayTheoNgayTbl', LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy);
    }
    CP_BaoCaoXeMayTheoThangTbl(LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy) {
        return this.GetReport('CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco', 'CP_BaoCaoXeMayTheoThangTbl', LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy);
    }
    CP_BaoCaoCuaHangXeMayTheoThangTbl(LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy) {
        return this.GetReport('CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco', 'CP_BaoCaoCuaHangXeMayTheoThangTbl', LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy);
    }
    CP_BaoCaoNhanVienXeMayTheoNgayTbl(LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy) {
        return this.GetReport('CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco', 'CP_BaoCaoNhanVienXeMayTheoNgayTbl', LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy);
    }
    CP_BaoCaoNhanVienXeMayTheoThangTbl(LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy) {
        return this.GetReport('CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco', 'CP_BaoCaoNhanVienXeMayTheoThangTbl', LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy);
    }
    CP_BaoCaoXeMayTongHopTheoTuanTbl(LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy) {
        return this.GetReport('CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco', 'CP_BaoCaoXeMayTongHopTheoTuanTbl', LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy);
    }
    CP_BaoCaoXeMayTongHopTheoNgayTbl(LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy) {
        return this.GetReport('CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco', 'CP_BaoCaoXeMayTongHopTheoNgayTbl', LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy);
    }
    CP_BaoCaoTongHopTheoThangTbl(LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy) {
        return this.GetReport('CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco', 'CP_BaoCaoTongHopTheoThangTbl', LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy);
    }
    CP_BaoCaoKetQuaKinhDoanhKhoiDaiLyPhan1(LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy) {
        return this.GetReport('CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco', 'CP_BaoCaoKetQuaKinhDoanhKhoiDaiLyPhan1', LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy);
    }
    CP_BaoCaoKetQuaKinhDoanhTheoMotChiTieuKhoiDaiLyPhan1(LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy) {
        return this.GetReport('CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco', 'CP_BaoCaoKetQuaKinhDoanhTheoMotChiTieuKhoiDaiLyPhan1', LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy);
    }
    CP_BaoCaoHieuQuaKinhDoanhKhoiDaiLyPhan1(LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy) {
        return this.GetReport('CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco', 'CP_BaoCaoHieuQuaKinhDoanhKhoiDaiLyPhan1', LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy);
    }
    CP_BaoCaoKetQuaKinhDoanhLocTheoChiTieuKhoiDaiLyPhan1(LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy) {
        return this.GetReport('CP_BaoCaoDanhSachXMMBHopDongBanTblModelPoco', 'CP_BaoCaoKetQuaKinhDoanhLocTheoChiTieuKhoiDaiLyPhan1', LoaiBaoCao, TuNgay, DenNgay, DonViNhapLieu, HangXe, VungMien, TinhThanh, LoaiXe, KieuXe, MauXe, KhachHang, NhanVien, Nam, Thang, nguoiQuanLy);
    }
    CP_BaoCaoTonKhoChung(khoi, cap, ngay, loai, maDonViCoSo, userName) {
        //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
        let controlerName;
        let actionGetByID;
        let queryString;
        controlerName = "BaoCaoQuanTri";
        actionGetByID = "CP_WKPI_BE_01";
        queryString = `?Khoi=${khoi}&Cap=${cap}&Ngay=${ngay}&LoaiBaoCao=VND&MaDonViCoSo=${maDonViCoSo} &UserName=CUONGNT`;
        const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
        console.log(url);
        return this.http.get(url, this.httpOptions);
    }
    CP_BaoCaoTonKhoChungRutGon(khoi, cap, ngay, loai, maDonViCoSo, userName) {
        //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
        let controlerName;
        let actionGetByID;
        let queryString;
        controlerName = "BaoCaoQuanTri";
        actionGetByID = "CP_WKPI_BE_01_ThuGon";
        queryString = `?Khoi=${khoi}&Cap=${cap}&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=${maDonViCoSo} &UserName=CUONGNT`;
        const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
        console.log(url);
        return this.http.get(url, this.httpOptions);
    }
    CP_BaoCaoTonKhoChungDetail(khoi, cap, ngay, loai, maDonViCoSo, userName) {
        //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
        let controlerName;
        let actionGetByID;
        let queryString;
        controlerName = "BaoCaoQuanTri";
        actionGetByID = "CP_WKPI_BE_01_ThuGon";
        queryString = `?Khoi=${khoi}&Cap=${cap}&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=${maDonViCoSo} &UserName=CUONGNT`;
        const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
        console.log(url);
        return this.http.get(url, this.httpOptions);
    }
    CP_BaoCaoTonKhoChungHeader(baoCao, khoi, loc) {
        let controlerName;
        let actionGetByID;
        let queryString;
        controlerName = "BaoCaoQuanTri";
        actionGetByID = "QuyDinhMauBaoCaoQuanTriTbl";
        queryString = `?BaoCao=${baoCao}&Khoi=${khoi}&Loc=${loc}`;
        const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
        console.log(url);
        return this.http.get(url, this.httpOptions);
    }
    CP_BaoCaoTonKhoChung2(khoi, cap, ngay, loai, maDonViCoSo, userName) {
        //http://222.252.18.18:40000/WebBaoCaoERP/WebBaoCaoERP/CP_WKPI_BE_01/?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
        //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
        //http://222.252.18.18:40000/WebBaoCaoERP/BaoCaoQuanTri/CP_WKPI_BE_01?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT
        let controlerName;
        let actionGetByID;
        let queryString;
        controlerName = "BaoCaoQuanTri";
        actionGetByID = "CP_WKPI_BE_01";
        queryString = "?Khoi=0101&Cap=1&Ngay=20210111&LoaiBaoCao=VND&MaDonViCoSo=&UserName=CUONGNT";
        const url = `${this.global.url}/${controlerName}/${actionGetByID}/${queryString}`;
        console.log(url);
        return this.http.get(url, this.httpOptions);
    }
}
ReportService.ɵfac = function ReportService_Factory(t) { return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_global_variable_service__WEBPACK_IMPORTED_MODULE_2__["GlobalVariableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReportService, factory: ReportService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _global_variable_service__WEBPACK_IMPORTED_MODULE_2__["GlobalVariableService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();
class BaoCaoTonKhoChung {
}
class ReportData {
}


/***/ }),

/***/ "GkAP":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/app-info.service.ts ***!
  \*****************************************************/
/*! exports provided: AppInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoService", function() { return AppInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AppInfoService {
    constructor() { }
    get title() {
        return 'ABC';
    }
    get currentYear() {
        return new Date().getFullYear();
    }
}
AppInfoService.ɵfac = function AppInfoService_Factory(t) { return new (t || AppInfoService)(); };
AppInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppInfoService, factory: AppInfoService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInfoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "H5WC":
/*!***********************************!*\
  !*** ./src/app/combox.service.ts ***!
  \***********************************/
/*! exports provided: ComboxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboxService", function() { return ComboxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _Model_LenhModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Model/LenhModel */ "d922");
/* harmony import */ var _global_variable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-variable.service */ "RIMx");








class ComboxService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            })
        };
        this.global = new _global_variable_service__WEBPACK_IMPORTED_MODULE_5__["GlobalVariableService"]();
    }
    GetCombox1(s) {
        const url = `${this.global.url}/${s}/GetCombox`;
        console.log('============================Url ' + url);
        return this.http.post(url, { FilterItems: [], OrderItems: [{ PropertyName: 'Code', Order: 0 }] });
    }
    GetCombox(rootingCode) {
        const url = `${this.global.url}/${rootingCode}/GetCombox`;
        console.log('============================Url ' + url);
        return this.http.post(url, { FilterItems: [], OrderItems: [{ PropertyName: 'Code', Order: 0 }] });
    }
    GetComboxData(rootingCode) {
        if (rootingCode === 'DanhMucHangHoaVatTuTbl') {
            console.log('-------- Load danh mục DanhMucHangHoaVatTuTbl');
            if (this.DanhMucHangHoaVatTuTblData) {
                console.log('-------- Lấy danh mục hàng hóa vật tư từ catche');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.DanhMucHangHoaVatTuTblData);
            }
        }
        const squareValues = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((val) => {
            if (rootingCode === 'DanhMucHangHoaVatTuTbl') {
                this.DanhMucHangHoaVatTuTblData = val.Data;
            }
            return val.Data;
        });
        return squareValues(this.GetCombox(rootingCode));
    }
    GetComboxDataSearch(rootingCode) {
        const addAllVal = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((val) => {
            const all = new _Model_LenhModel__WEBPACK_IMPORTED_MODULE_4__["ComboxData"]();
            all.ID = '';
            all.Description = '---';
            let new1 = [];
            new1.push(all);
            new1 = new1.concat(val);
            return new1;
        });
        return addAllVal(this.GetComboxData(rootingCode));
    }
    GetComboxFunction(dataName) {
        const url = `${this.global.url}/BaoCaoQuanTri/${dataName}`;
        console.log('============================Url ' + url);
        return this.http.get(url);
    }
    GetForAuthenticate() {
        const url = `${this.global.url}/User/GetForAuthenticate`;
        console.log('============================Url ' + url);
        return this.http.get(url);
    }
    GetTesForAuthenticate() {
        const url = `${this.global.url}/User/Get`;
        console.log('============================Url ' + url);
        return this.http.get(url);
    }
}
ComboxService.ɵfac = function ComboxService_Factory(t) { return new (t || ComboxService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ComboxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ComboxService, factory: ComboxService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComboxService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService, AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token-storage.service */ "P7Fj");
/* harmony import */ var src_app_global_variable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/global-variable.service */ "RIMx");








const defaultPath = '/';
const defaultUser = {
    email: 'sandra@example.com',
    avatarUrl: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png'
};
const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class AuthService {
    constructor(router, http, token, global) {
        this.router = router;
        this.http = http;
        this.token = token;
        this.global = global;
        // private _user = defaultUser;
        this._user = null;
        this._lastAuthenticatedPath = defaultPath;
    }
    get loggedIn() {
        return !!this._user;
        // const token = this.token.getToken();
        // return (token != null)
    }
    set lastAuthenticatedPath(value) {
        this._lastAuthenticatedPath = value;
    }
    login2(username, password) {
        return this.http.post(AUTH_API + 'signin', {
            username,
            password
        }, httpOptions);
    }
    logIn(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loi = '';
            try {
                const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                    .set('username', email)
                    .set('password', password)
                    .set('grant_type', 'password');
                const s = body.toString();
                yield this.http.post(`${this.global.url}/token`, body.toString(), {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                        .set('Content-Type', 'application/x-www-form-urlencoded')
                }).toPromise().then(data => {
                    this.token.saveToken(data.access_token);
                }, err => {
                    this.token.saveToken('');
                    loi = err;
                });
                const token = this.token.getToken();
                if (token !== '' || 1 == 1) 
                //if (email == 'cuongnt')
                {
                    this._user = Object.assign(Object.assign({}, defaultUser), { email });
                    this.router.navigate([this._lastAuthenticatedPath]);
                    return {
                        isOk: true,
                        data: this._user
                    };
                }
                else {
                    return {
                        isOk: false,
                        data: null,
                        message: "Authentication failed"
                    };
                }
            }
            catch (_a) {
                return {
                    isOk: false,
                    message: "Authentication failed"
                };
            }
        });
    }
    getUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Send request
                return {
                    isOk: true,
                    data: this._user
                };
            }
            catch (_a) {
                return {
                    isOk: false
                };
            }
        });
    }
    createAccount(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Send request
                console.log(email, password);
                this.router.navigate(['/create-account']);
                return {
                    isOk: true
                };
            }
            catch (_a) {
                return {
                    isOk: false,
                    message: "Failed to create account"
                };
            }
        });
    }
    changePassword(email, recoveryCode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Send request
                console.log(email, recoveryCode);
                return {
                    isOk: true
                };
            }
            catch (_a) {
                return {
                    isOk: false,
                    message: "Failed to change password"
                };
            }
            ;
        });
    }
    resetPassword(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Send request
                console.log(email);
                return {
                    isOk: true
                };
            }
            catch (_a) {
                return {
                    isOk: false,
                    message: "Failed to reset password"
                };
            }
        });
    }
    logOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._user = null;
            this.router.navigate(['/login-form']);
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_global_variable_service__WEBPACK_IMPORTED_MODULE_5__["GlobalVariableService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"] }, { type: src_app_global_variable_service__WEBPACK_IMPORTED_MODULE_5__["GlobalVariableService"] }]; }, null); })();
class AuthGuardService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route) {
        const isLoggedIn = this.authService.loggedIn;
        const isAuthForm = [
            'login-form',
            'reset-password',
            'create-account',
            'change-password/:recoveryCode'
        ].includes(route.routeConfig.path);
        if (isLoggedIn && isAuthForm) {
            this.authService.lastAuthenticatedPath = defaultPath;
            this.router.navigate([defaultPath]);
            return false;
        }
        if (!isLoggedIn && !isAuthForm) {
            this.router.navigate(['/login-form']);
        }
        if (isLoggedIn) {
            this.authService.lastAuthenticatedPath = route.routeConfig.path;
        }
        return isLoggedIn || isAuthForm;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](AuthService)); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: AuthService }]; }, null); })();


/***/ }),

/***/ "Jcec":
/*!**********************************!*\
  !*** ./src/app/layouts/index.ts ***!
  \**********************************/
/*! exports provided: SideNavOuterToolbarComponent, SideNavOuterToolbarModule, SideNavInnerToolbarComponent, SideNavInnerToolbarModule, SingleCardComponent, SingleCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-nav-outer-toolbar/side-nav-outer-toolbar.component */ "Obux");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavOuterToolbarComponent", function() { return _side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_0__["SideNavOuterToolbarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavOuterToolbarModule", function() { return _side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_0__["SideNavOuterToolbarModule"]; });

/* harmony import */ var _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav-inner-toolbar/side-nav-inner-toolbar.component */ "Kj5c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarComponent", function() { return _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["SideNavInnerToolbarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarModule", function() { return _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["SideNavInnerToolbarModule"]; });

/* harmony import */ var _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-card/single-card.component */ "OlHu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCardComponent", function() { return _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_2__["SingleCardComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleCardModule", function() { return _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_2__["SingleCardModule"]; });






/***/ }),

/***/ "Kj5c":
/*!************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.ts ***!
  \************************************************************************************/
/*! exports provided: SideNavInnerToolbarComponent, SideNavInnerToolbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarComponent", function() { return SideNavInnerToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavInnerToolbarModule", function() { return SideNavInnerToolbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components */ "1ua0");
/* harmony import */ var devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular/ui/drawer */ "7m6G");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "oTtP");
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/toolbar */ "Qlw+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services */ "ZF+8");










class SideNavInnerToolbarComponent {
    constructor(screen, router) {
        this.screen = screen;
        this.router = router;
        this.selectedRoute = '';
        this.temporaryMenuOpened = false;
        this.menuMode = 'shrink';
        this.menuRevealMode = 'expand';
        this.minMenuSize = 0;
        this.shaderEnabled = false;
        this.toggleMenu = (e) => {
            this.menuOpened = !this.menuOpened;
            e.event.stopPropagation();
        };
    }
    ngOnInit() {
        this.menuOpened = this.screen.sizes['screen-large'];
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                this.selectedRoute = val.urlAfterRedirects.split('?')[0];
            }
        });
        this.screen.changed.subscribe(() => this.updateDrawer());
        this.updateDrawer();
    }
    updateDrawer() {
        const isXSmall = this.screen.sizes['screen-x-small'];
        const isLarge = this.screen.sizes['screen-large'];
        this.menuMode = isLarge ? 'shrink' : 'overlap';
        this.menuRevealMode = isXSmall ? 'slide' : 'expand';
        this.minMenuSize = isXSmall ? 0 : 60;
        this.shaderEnabled = !isLarge;
    }
    get hideMenuAfterNavigation() {
        return this.menuMode === 'overlap' || this.temporaryMenuOpened;
    }
    get showMenuAfterClick() {
        return !this.menuOpened;
    }
    navigationChanged(event) {
        const path = event.itemData.path;
        const pointerEvent = event.event;
        if (path && this.menuOpened) {
            if (event.node.selected) {
                pointerEvent.preventDefault();
            }
            else {
                this.router.navigate([path]);
                this.scrollView.instance.scrollTo(0);
            }
            if (this.hideMenuAfterNavigation) {
                this.temporaryMenuOpened = false;
                this.menuOpened = false;
                pointerEvent.stopPropagation();
            }
        }
        else {
            pointerEvent.preventDefault();
        }
    }
    navigationClick() {
        if (this.showMenuAfterClick) {
            this.temporaryMenuOpened = true;
            this.menuOpened = true;
        }
    }
}
SideNavInnerToolbarComponent.ɵfac = function SideNavInnerToolbarComponent_Factory(t) { return new (t || SideNavInnerToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_7__["ScreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
SideNavInnerToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavInnerToolbarComponent, selectors: [["app-side-nav-inner-toolbar"]], viewQuery: function SideNavInnerToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollView = _t.first);
    } }, inputs: { title: "title" }, decls: 0, vars: 0, template: function SideNavInnerToolbarComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n  flex-direction: column;\n  display: flex;\n}\n\n.layout-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n#navigation-header[_ngcontent-%COMP%] {\n  background-color: #ff5722;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n#navigation-header[_ngcontent-%COMP%]     .menu-button .dx-icon {\n  color: #fff;\n}\n\n.screen-x-small[_nghost-%COMP%]   #navigation-header[_ngcontent-%COMP%], .screen-x-small   [_nghost-%COMP%]   #navigation-header[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.dx-theme-generic[_nghost-%COMP%]   #navigation-header[_ngcontent-%COMP%], .dx-theme-generic   [_nghost-%COMP%]   #navigation-header[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxccGFnZXNcXGJhby1jYW8tdG9uLWtoby1jaHVuZzNcXHNpZGUtbmF2LWlubmVyLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFx0aGVtZXNcXGdlbmVyYXRlZFxcdmFyaWFibGVzLmFkZGl0aW9uYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFFRSx5QkNyQlk7RURzQlosd0VBQUE7QUFBRjs7QUFFRTtFQUNFLFdDeEJjO0FEd0JsQjs7QUFHRTtFQUNFLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBRkoiLCJmaWxlIjoic2lkZS1uYXYtaW5uZXItdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sYXlvdXQtYm9keSB7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi5jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4jbmF2aWdhdGlvbi1oZWFkZXIge1xuICBAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWVzL2dlbmVyYXRlZC92YXJpYWJsZXMuYWRkaXRpb25hbC5zY3NzXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWFjY2VudDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuXG4gIDo6bmctZGVlcCAubWVudS1idXR0b24gLmR4LWljb24ge1xuICAgIGNvbG9yOiAkYmFzZS10ZXh0LWNvbG9yO1xuICB9XG5cbiAgOmhvc3QtY29udGV4dCguc2NyZWVuLXgtc21hbGwpICYge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxuICAgIFxuICA6aG9zdC1jb250ZXh0KC5keC10aGVtZS1nZW5lcmljKSAmIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxufVxuIiwiJGJhc2UtYWNjZW50OiAjZmY1NzIyO1xuJGJhc2UtdGV4dC1jb2xvcjogI2ZmZjtcbiRiYXNlLWJnOiAjMzYzNjQwO1xuJGJhc2UtYm9yZGVyLWNvbG9yOiAjNTE1MTU5O1xuJGJhc2UtYm9yZGVyLXJhZGl1czogNHB4O1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavInnerToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-nav-inner-toolbar',
                templateUrl: './side-nav-inner-toolbar.component.html',
                styleUrls: ['./side-nav-inner-toolbar.component.scss']
            }]
    }], function () { return [{ type: _shared_services__WEBPACK_IMPORTED_MODULE_7__["ScreenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { scrollView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewComponent"], { static: true }]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class SideNavInnerToolbarModule {
}
SideNavInnerToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SideNavInnerToolbarModule });
SideNavInnerToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SideNavInnerToolbarModule_Factory(t) { return new (t || SideNavInnerToolbarModule)(); }, imports: [[_shared_components__WEBPACK_IMPORTED_MODULE_1__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"], devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["DxToolbarModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SideNavInnerToolbarModule, { declarations: [SideNavInnerToolbarComponent], imports: [_shared_components__WEBPACK_IMPORTED_MODULE_1__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"], devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["DxToolbarModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]], exports: [SideNavInnerToolbarComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavInnerToolbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_shared_components__WEBPACK_IMPORTED_MODULE_1__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"], devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["DxToolbarModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                exports: [SideNavInnerToolbarComponent],
                declarations: [SideNavInnerToolbarComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "Obux":
/*!************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.ts ***!
  \************************************************************************************/
/*! exports provided: SideNavOuterToolbarComponent, SideNavOuterToolbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavOuterToolbarComponent", function() { return SideNavOuterToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavOuterToolbarModule", function() { return SideNavOuterToolbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components */ "1ua0");
/* harmony import */ var devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular/ui/drawer */ "7m6G");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "oTtP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services */ "ZF+8");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/header/header.component */ "aZ8m");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");
/* harmony import */ var _shared_components_side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/side-navigation-menu/side-navigation-menu.component */ "WOTP");














function SideNavOuterToolbarComponent_app_side_navigation_menu_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-side-navigation-menu", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedItemChanged", function SideNavOuterToolbarComponent_app_side_navigation_menu_2_Template_app_side_navigation_menu_selectedItemChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.navigationChanged($event); })("openMenu", function SideNavOuterToolbarComponent_app_side_navigation_menu_2_Template_app_side_navigation_menu_openMenu_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.navigationClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("compactMode", !ctx_r0.menuOpened)("selectedItem", ctx_r0.selectedRoute);
} }
const _c0 = ["*", [["app-footer"]]];
const _c1 = ["*", "app-footer"];
class SideNavOuterToolbarComponent {
    constructor(screen, router) {
        this.screen = screen;
        this.router = router;
        this.selectedRoute = '';
        this.temporaryMenuOpened = false;
        this.menuMode = 'shrink';
        this.menuRevealMode = 'expand';
        this.minMenuSize = 0;
        this.shaderEnabled = false;
    }
    ngOnInit() {
        this.menuOpened = false;
        //this.menuOpened = this.screen.sizes['screen-large'];
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                this.selectedRoute = val.urlAfterRedirects.split('?')[0];
            }
        });
        this.screen.changed.subscribe(() => this.updateDrawer());
        this.updateDrawer();
    }
    updateDrawer() {
        const isXSmall = this.screen.sizes['screen-x-small'];
        const isLarge = this.screen.sizes['screen-large'];
        this.menuMode = isLarge ? 'shrink' : 'overlap';
        this.menuRevealMode = isXSmall ? 'slide' : 'expand';
        this.minMenuSize = isXSmall ? 0 : 60;
        this.shaderEnabled = !isLarge;
    }
    get hideMenuAfterNavigation() {
        return this.menuMode === 'overlap' || this.temporaryMenuOpened;
    }
    get showMenuAfterClick() {
        return !this.menuOpened;
    }
    navigationChanged(event) {
        const path = event.itemData.path;
        const pointerEvent = event.event;
        if (path && this.menuOpened) {
            if (event.node.selected) {
                pointerEvent.preventDefault();
            }
            else {
                this.router.navigate([path]);
                this.scrollView.instance.scrollTo(0);
            }
            if (this.hideMenuAfterNavigation) {
                this.temporaryMenuOpened = false;
                this.menuOpened = false;
                pointerEvent.stopPropagation();
            }
        }
        else {
            pointerEvent.preventDefault();
        }
    }
    navigationClick() {
        if (this.showMenuAfterClick) {
            this.temporaryMenuOpened = true;
            this.menuOpened = true;
        }
    }
}
SideNavOuterToolbarComponent.ɵfac = function SideNavOuterToolbarComponent_Factory(t) { return new (t || SideNavOuterToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_6__["ScreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
SideNavOuterToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavOuterToolbarComponent, selectors: [["app-side-nav-outer-toolbar"]], viewQuery: function SideNavOuterToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollView = _t.first);
    } }, inputs: { title: "title" }, ngContentSelectors: _c1, decls: 8, vars: 9, consts: [[1, "layout-header", 3, "menuToggleEnabled", "title", "menuToggle"], ["position", "before", 1, "layout-body", 3, "closeOnOutsideClick", "openedStateMode", "revealMode", "minSize", "shading", "opened", "openedChange"], ["class", "dx-swatch-additional", 3, "compactMode", "selectedItem", "selectedItemChanged", "openMenu", 4, "dxTemplate", "dxTemplateOf"], [1, "with-footer"], [1, "content"], [1, "content-block"], [1, "dx-swatch-additional", 3, "compactMode", "selectedItem", "selectedItemChanged", "openMenu"]], template: function SideNavOuterToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuToggle", function SideNavOuterToolbarComponent_Template_app_header_menuToggle_0_listener() { return ctx.menuOpened = !ctx.menuOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dx-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function SideNavOuterToolbarComponent_Template_dx_drawer_openedChange_1_listener($event) { return ctx.menuOpened = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavOuterToolbarComponent_app_side_navigation_menu_2_Template, 1, 2, "app-side-navigation-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "dx-scroll-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuToggleEnabled", true)("title", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOnOutsideClick", ctx.shaderEnabled)("openedStateMode", ctx.menuMode)("revealMode", ctx.menuRevealMode)("minSize", ctx.minMenuSize)("shading", ctx.shaderEnabled)("opened", ctx.menuOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "panel");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__["DxDrawerComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_8__["DxTemplateDirective"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewComponent"], _shared_components_side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_9__["SideNavigationMenuComponent"]], styles: ["[_nghost-%COMP%] {\n  flex-direction: column;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n\n.layout-header[_ngcontent-%COMP%] {\n  z-index: 1501;\n}\n\n.layout-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxccGFnZXNcXGJhby1jYW8tdG9uLWtoby1jaHVuZzNcXHNpZGUtbmF2LW91dGVyLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJzaWRlLW5hdi1vdXRlci10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGF5b3V0LWhlYWRlciB7XG4gIHotaW5kZXg6IDE1MDE7XG59XG5cbi5sYXlvdXQtYm9keSB7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi5jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavOuterToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-nav-outer-toolbar',
                templateUrl: './side-nav-outer-toolbar.component.html',
                styleUrls: ['./side-nav-outer-toolbar.component.scss']
            }]
    }], function () { return [{ type: _shared_services__WEBPACK_IMPORTED_MODULE_6__["ScreenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { scrollView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewComponent"], { static: true }]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class SideNavOuterToolbarModule {
}
SideNavOuterToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SideNavOuterToolbarModule });
SideNavOuterToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SideNavOuterToolbarModule_Factory(t) { return new (t || SideNavOuterToolbarModule)(); }, imports: [[_shared_components__WEBPACK_IMPORTED_MODULE_1__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SideNavOuterToolbarModule, { declarations: [SideNavOuterToolbarComponent], imports: [_shared_components__WEBPACK_IMPORTED_MODULE_1__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]], exports: [SideNavOuterToolbarComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavOuterToolbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_shared_components__WEBPACK_IMPORTED_MODULE_1__["SideNavigationMenuModule"], devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_2__["DxDrawerModule"], _shared_components__WEBPACK_IMPORTED_MODULE_1__["HeaderModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_3__["DxScrollViewModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                exports: [SideNavOuterToolbarComponent],
                declarations: [SideNavOuterToolbarComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "OlHu":
/*!**************************************************************!*\
  !*** ./src/app/layouts/single-card/single-card.component.ts ***!
  \**************************************************************/
/*! exports provided: SingleCardComponent, SingleCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCardComponent", function() { return SingleCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCardModule", function() { return SingleCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ "oTtP");





const _c0 = ["*"];
class SingleCardComponent {
    constructor() { }
}
SingleCardComponent.ɵfac = function SingleCardComponent_Factory(t) { return new (t || SingleCardComponent)(); };
SingleCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleCardComponent, selectors: [["app-single-card"]], inputs: { title: "title", description: "description" }, ngContentSelectors: _c0, decls: 8, vars: 2, consts: [["height", "100%", "width", "100%", 1, "with-footer", "single-card"], [1, "dx-card", "content"], [1, "header"], [1, "title"], [1, "description"]], template: function SingleCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dx-scroll-view", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, directives: [devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_2__["DxScrollViewComponent"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.single-card[_ngcontent-%COMP%]   .dx-card[_ngcontent-%COMP%] {\n  width: 330px;\n  margin: auto auto;\n  padding: 40px;\n  flex-grow: 0;\n}\n\n.screen-x-small[_nghost-%COMP%]   .single-card[_ngcontent-%COMP%]   .dx-card[_ngcontent-%COMP%], .screen-x-small   [_nghost-%COMP%]   .single-card[_ngcontent-%COMP%]   .dx-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 0;\n  box-shadow: none;\n  margin: 0;\n  border: 0;\n  flex-grow: 1;\n}\n\n.single-card[_ngcontent-%COMP%]   .dx-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.single-card[_ngcontent-%COMP%]   .dx-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  line-height: 28px;\n  font-weight: 500;\n  font-size: 24px;\n}\n\n.single-card[_ngcontent-%COMP%]   .dx-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.609);\n  line-height: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxccGFnZXNcXGJhby1jYW8tdG9uLWtoby1jaHVuZzNcXHNpbmdsZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcdGhlbWVzXFxnZW5lcmF0ZWRcXHZhcmlhYmxlcy5iYXNlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUtFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFGSjs7QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUZOOztBQUtJO0VBQ0UsbUJBQUE7QUFITjs7QUFLTTtFQUNFLDBCQzNCVTtFRDRCVixpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUhSOztBQU1NO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtBQUpSIiwiZmlsZSI6InNpbmdsZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaW5nbGUtY2FyZCB7XG4gIC5keC1jYXJkIHtcbiAgICB3aWR0aDogMzMwcHg7XG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBmbGV4LWdyb3c6IDA7XG5cbiAgICA6aG9zdC1jb250ZXh0KC5zY3JlZW4teC1zbWFsbCkgJiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6ICRiYXNlLXRleHQtY29sb3I7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCRiYXNlLXRleHQtY29sb3IsIGFscGhhKCRiYXNlLXRleHQtY29sb3IpICogMC43KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkYmFzZS1hY2NlbnQ6ICNmZjU3MjI7XG4kYmFzZS10ZXh0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuJGJhc2UtYmc6ICNmZmY7XG4kYmFzZS1ib3JkZXItY29sb3I6ICMwNzEwMTM7XG4kYmFzZS1ib3JkZXItcmFkaXVzOiA0cHg7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-card',
                templateUrl: './single-card.component.html',
                styleUrls: ['./single-card.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class SingleCardModule {
}
SingleCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SingleCardModule });
SingleCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SingleCardModule_Factory(t) { return new (t || SingleCardModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_2__["DxScrollViewModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SingleCardModule, { declarations: [SingleCardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_2__["DxScrollViewModule"]], exports: [SingleCardComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_2__["DxScrollViewModule"]],
                exports: [SingleCardComponent],
                declarations: [SingleCardComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "P7Fj":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/token-storage.service.ts ***!
  \**********************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }
}
TokenStorageService.ɵfac = function TokenStorageService_Factory(t) { return new (t || TokenStorageService)(); };
TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenStorageService, factory: TokenStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RIMx":
/*!********************************************!*\
  !*** ./src/app/global-variable.service.ts ***!
  \********************************************/
/*! exports provided: GlobalVariableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalVariableService", function() { return GlobalVariableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GlobalVariableService {
    //public url = 'http://222.252.18.18:40000/TestAuthen'
    //public url = 'http://localhost:53428';
    constructor() {
        this.url = 'http://222.252.18.18:40000/WebBaoCaoERP';
    }
}
GlobalVariableService.ɵfac = function GlobalVariableService_Factory(t) { return new (t || GlobalVariableService)(); };
GlobalVariableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalVariableService, factory: GlobalVariableService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalVariableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RK7/":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/login-form/login-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginFormComponent, LoginFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormModule", function() { return LoginFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/form */ "k8YA");
/* harmony import */ var devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/load-indicator */ "X/xX");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme/ui/notify */ "pxlC");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services */ "ZF+8");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");















function LoginFormComponent_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "dx-load-indicator", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", true);
} }
function LoginFormComponent_ng_container_10_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "\u0110\u0103ng nh\u1EADp");
} }
function LoginFormComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginFormComponent_ng_container_10_ng_container_2_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, LoginFormComponent_ng_container_10_ng_template_3_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loading)("ngIfElse", _r3);
} }
const _c0 = function () { return { stylingMode: "filled", placeholder: "User Name", mode: "User Name" }; };
const _c1 = function () { return { stylingMode: "filled", placeholder: "Password", mode: "password" }; };
class LoginFormComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loading = false;
        this.formData = {};
        this.onCreateAccountClick = () => {
            this.router.navigate(['/create-account']);
        };
    }
    onSubmit(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            const { email, password } = this.formData;
            this.loading = true;
            //--- tam them vao
            const result = yield this.authService.logIn(email, password);
            this.loading = false;
            //---------- het don them de test ---
            if (!result.isOk) {
                this.loading = false;
                devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6___default()(result.message, 'error', 2000);
            }
        });
    }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginFormComponent, selectors: [["app-login-form"]], decls: 11, vars: 11, consts: [[1, "login-form", 3, "submit"], [3, "formData", "disabled"], ["dataField", "email", "editorType", "dxTextBox", 3, "editorOptions"], ["type", "required", "message", "Kh\u00F4ng \u0111\u1EC3 tr\u1ED1ng"], [3, "visible"], ["dataField", "password", "editorType", "dxTextBox", 3, "editorOptions"], ["itemType", "button"], ["width", "100%", "type", "default", 3, "useSubmitBehavior", "template"], [4, "dxTemplate", "dxTemplateOf"], [1, "dx-button-text"], [4, "ngIf", "ngIfElse"], ["notLoading", ""], ["width", "24px", "height", "24px", 3, "visible"]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function LoginFormComponent_Template_form_submit_0_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "dx-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "dxi-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "dxi-validation-rule", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "dxo-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "dxi-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "dxi-validation-rule", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "dxo-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "dxi-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "dxo-button-options", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, LoginFormComponent_ng_container_10_Template, 5, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formData", ctx.formData)("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("useSubmitBehavior", true)("template", "signInTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dxTemplateOf", "signInTemplate");
    } }, directives: [devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__["DxFormComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxiItemComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxiValidationRuleComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxoLabelComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxoButtonOptionsComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_9__["DxTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__["DxLoadIndicatorComponent"]], styles: [".login-form[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  font-style: normal;\n}\n.login-form[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.login-form[_ngcontent-%COMP%]     .form-text {\n  margin: 10px 0;\n  color: rgba(0, 0, 0, 0.609);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2VzXFxiYW8tY2FvLXRvbi1raG8tY2h1bmczXFxsb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFISjtBQUtJO0VBQ0UscUJBQUE7QUFITjtBQU9FO0VBQ0UsY0FBQTtFQUNBLDJCQUFBO0FBTEoiLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5iYXNlLnNjc3NcIjtcblxuXG4ubG9naW4tZm9ybSB7XG4gIC5saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcblxuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIDo6bmctZGVlcCAuZm9ybS10ZXh0IHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBjb2xvcjogcmdiYSgkYmFzZS10ZXh0LWNvbG9yLCBhbHBoYSgkYmFzZS10ZXh0LWNvbG9yKSAqIDAuNyk7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-login-form',
                templateUrl: './login-form.component.html',
                styleUrls: ['./login-form.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();
class LoginFormModule {
}
LoginFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginFormModule });
LoginFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function LoginFormModule_Factory(t) { return new (t || LoginFormModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__["DxFormModule"],
            devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__["DxLoadIndicatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginFormModule, { declarations: [LoginFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__["DxFormModule"],
        devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__["DxLoadIndicatorModule"]], exports: [LoginFormComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoginFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__["DxFormModule"],
                    devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__["DxLoadIndicatorModule"]
                ],
                declarations: [LoginFormComponent],
                exports: [LoginFormComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services */ "ZF+8");
/* harmony import */ var _shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/token-storage.service */ "P7Fj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layouts_side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component */ "Obux");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "aF9I");
/* harmony import */ var _unauthenticated_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unauthenticated-content */ "1N39");









function AppComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-side-nav-outer-toolbar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " All trademarks or registered trademarks are property of their respective owners. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r0.appInfo.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Copyright \u00A9 2011-", ctx_r0.appInfo.currentYear, " ", ctx_r0.appInfo.title, " Inc. ");
} }
function AppComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-unauthenticated-content");
} }
class AppComponent {
    constructor(authService, screen, appInfo, token) {
        this.authService = authService;
        this.screen = screen;
        this.appInfo = appInfo;
        this.token = token;
    }
    get getClass() {
        return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
    }
    isAuthenticated() {
        return this.authService.loggedIn;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_1__["ScreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_1__["AppInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostVars: 2, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getClass);
    } }, decls: 13, vars: 2, consts: [["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.w3schools.com/w3css/4/w3.css")], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://fonts.googleapis.com/css?family=Raleway")], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.w3schools.com/lib/w3-theme-blue.css")], [4, "ngIf", "ngIfElse"], ["unauthenticated", ""], [3, "title"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_ng_container_10_Template, 7, 3, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_ng_template_11_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated())("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _layouts_side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["SideNavOuterToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _unauthenticated_content__WEBPACK_IMPORTED_MODULE_7__["UnauthenticatedContentComponent"]], styles: ["[_nghost-%COMP%] {\n  background-color: #f2f2f2;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxiYW8tY2FvLXRvbi1raG8tY2h1bmczXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgQGltcG9ydCBcIi4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJhc2UtYmcsIDUuMDApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _shared_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _shared_services__WEBPACK_IMPORTED_MODULE_1__["ScreenService"] }, { type: _shared_services__WEBPACK_IMPORTED_MODULE_1__["AppInfoService"] }, { type: _shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }]; }, { getClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "V2yS":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/user-panel/user-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserPanelComponent, UserPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return UserPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelModule", function() { return UserPanelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular/ui/list */ "4Ewp");
/* harmony import */ var devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/context-menu */ "o2da");








const _c0 = function () { return { my: "top center", at: "bottom center" }; };
function UserPanelComponent_dx_context_menu_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dx-context-menu", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.menuItems)("position", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function UserPanelComponent_dx_list_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dx-list", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.menuItems);
} }
class UserPanelComponent {
    constructor() { }
}
UserPanelComponent.ɵfac = function UserPanelComponent_Factory(t) { return new (t || UserPanelComponent)(); };
UserPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPanelComponent, selectors: [["app-user-panel"]], inputs: { menuItems: "menuItems", menuMode: "menuMode", user: "user" }, decls: 8, vars: 3, consts: [[1, "user-panel"], [1, "user-info"], [1, "image-container"], [1, "user-image"], [1, "user-name"], ["target", ".user-button", "showEvent", "dxclick", "width", "210px", "cssClass", "user-menu", 3, "items", "position", 4, "ngIf"], ["class", "dx-toolbar-menu-action", 3, "items", 4, "ngIf"], ["target", ".user-button", "showEvent", "dxclick", "width", "210px", "cssClass", "user-menu", 3, "items", "position"], [1, "dx-toolbar-menu-action", 3, "items"]], template: function UserPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserPanelComponent_dx_context_menu_6_Template, 1, 3, "dx-context-menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserPanelComponent_dx_list_7_Template, 1, 1, "dx-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuMode === "context");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuMode === "list");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_3__["DxContextMenuComponent"], devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_2__["DxListComponent"]], styles: [".user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.dx-toolbar-menu-section[_nghost-%COMP%]   .user-info[_ngcontent-%COMP%], .dx-toolbar-menu-section   [_nghost-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  padding: 10px 6px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.user-info[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  margin: 0 4px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.user-info[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: url(\"https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png\") no-repeat #fff;\n  background-size: cover;\n}\n.user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  margin: 0 9px;\n}\n.user-panel[_ngcontent-%COMP%]     .dx-list-item .dx-icon {\n  vertical-align: middle;\n  color: rgba(0, 0, 0, 0.87);\n  margin-right: 16px;\n}\n.user-panel[_ngcontent-%COMP%]     .dx-rtl .dx-list-item .dx-icon {\n  margin-right: 0;\n  margin-left: 16px;\n}\n  .dx-context-menu.user-menu.dx-rtl .dx-submenu .dx-menu-items-container .dx-icon {\n  margin-left: 16px;\n}\n  .dx-context-menu.user-menu .dx-submenu .dx-menu-items-container .dx-icon {\n  margin-right: 16px;\n}\n  .dx-context-menu.user-menu .dx-menu-item .dx-menu-item-content {\n  padding: 3px 15px 4px;\n}\n  .dx-theme-generic .user-menu .dx-menu-item-content .dx-menu-item-text {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2VzXFxiYW8tY2FvLXRvbi1raG8tY2h1bmczXFx1c2VyLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFx0aGVtZXNcXGdlbmVyYXRlZFxcdmFyaWFibGVzLmJhc2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFDRSxpQkFBQTtFQUNBLDJDQUFBO0FBREo7QUFJRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0FBRko7QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0hBQUE7RUFDQSxzQkFBQTtBQUZOO0FBTUU7RUFDRSxlQUFBO0VBQ0EsMEJDN0JjO0VEOEJkLGFBQUE7QUFKSjtBQVNFO0VBQ0Usc0JBQUE7RUFDQSwwQkNyQ2M7RURzQ2Qsa0JBQUE7QUFOSjtBQVFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBTko7QUFZSTtFQUNFLGlCQUFBO0FBVE47QUFZRTtFQUNFLGtCQUFBO0FBVko7QUFZRTtFQUNJLHFCQUFBO0FBVk47QUFjQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFYRiIsImZpbGUiOiJ1c2VyLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xuXG4udXNlci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICA6aG9zdC1jb250ZXh0KC5keC10b29sYmFyLW1lbnUtc2VjdGlvbikgJiB7XG4gICAgcGFkZGluZzogMTBweCA2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuXG4gIC5pbWFnZS1jb250YWluZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBtYXJnaW46IDAgNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjE1KTtcblxuICAgIC51c2VyLWltYWdlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9qcy5kZXZleHByZXNzLmNvbS9EZW1vcy9XaWRnZXRzR2FsbGVyeS9KU0RlbW9zL2ltYWdlcy9lbXBsb3llZXMvMDYucG5nXCIpIG5vLXJlcGVhdCAjZmZmO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gIH1cblxuICAudXNlci1uYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICRiYXNlLXRleHQtY29sb3I7XG4gICAgbWFyZ2luOiAwIDlweDtcbiAgfVxufVxuXG4udXNlci1wYW5lbCA6Om5nLWRlZXAge1xuICAuZHgtbGlzdC1pdGVtIC5keC1pY29uIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGNvbG9yOiAkYmFzZS10ZXh0LWNvbG9yO1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgfVxuICAuZHgtcnRsIC5keC1saXN0LWl0ZW0gLmR4LWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgfVxufVxuXG46Om5nLWRlZXAgLmR4LWNvbnRleHQtbWVudS51c2VyLW1lbnUge1xuICAmLmR4LXJ0bCB7XG4gICAgLmR4LXN1Ym1lbnUgLmR4LW1lbnUtaXRlbXMtY29udGFpbmVyIC5keC1pY29uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cbiAgfVxuICAuZHgtc3VibWVudSAuZHgtbWVudS1pdGVtcy1jb250YWluZXIgLmR4LWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgfVxuICAuZHgtbWVudS1pdGVtIC5keC1tZW51LWl0ZW0tY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAzcHggMTVweCA0cHg7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5keC10aGVtZS1nZW5lcmljIC51c2VyLW1lbnUgLmR4LW1lbnUtaXRlbS1jb250ZW50IC5keC1tZW51LWl0ZW0tdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG4iLCIkYmFzZS1hY2NlbnQ6ICNmZjU3MjI7XG4kYmFzZS10ZXh0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuJGJhc2UtYmc6ICNmZmY7XG4kYmFzZS1ib3JkZXItY29sb3I6ICMwNzEwMTM7XG4kYmFzZS1ib3JkZXItcmFkaXVzOiA0cHg7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-panel',
                templateUrl: 'user-panel.component.html',
                styleUrls: ['./user-panel.component.scss']
            }]
    }], function () { return []; }, { menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], menuMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class UserPanelModule {
}
UserPanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserPanelModule });
UserPanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserPanelModule_Factory(t) { return new (t || UserPanelModule)(); }, imports: [[
            devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_2__["DxListModule"],
            devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_3__["DxContextMenuModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserPanelModule, { declarations: [UserPanelComponent], imports: [devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_2__["DxListModule"],
        devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_3__["DxContextMenuModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [UserPanelComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPanelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_2__["DxListModule"],
                    devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_3__["DxContextMenuModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [UserPanelComponent],
                exports: [UserPanelComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "VExB":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/bao-cao-ton-kho-chung2/bao-cao-ton-kho-chung2.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BaoCaoTonKhoChung2Component, Longtab, DonViIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoChung2Component", function() { return BaoCaoTonKhoChung2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Longtab", function() { return Longtab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonViIndex", function() { return DonViIndex; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var src_app_combox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/combox.service */ "H5WC");
/* harmony import */ var src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/01.Service/report.service */ "DQhQ");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/button */ "WYlB");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");










function BaoCaoTonKhoChung2Component_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](info_r4.column.caption);
} }
function BaoCaoTonKhoChung2Component_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n", info_r5.column.caption, "\n");
} }
function BaoCaoTonKhoChung2Component_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n", info_r6.column.caption, "\n");
} }
function BaoCaoTonKhoChung2Component_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n", info_r7.column.caption, "\n");
} }
class BaoCaoTonKhoChung2Component {
    constructor(comboxService, reportService, reportService2, document) {
        this.comboxService = comboxService;
        this.reportService = reportService;
        this.reportService2 = reportService2;
        this.document = document;
        this.ngayVal = new Date();
        this.popupVisible = false;
        this.reportDataArr1 = [];
        //-------- Các biến header 
        this.KTarrHeader = [];
        this.KarrHeader = [];
        this.arrVisible = [];
        this.arrReportHeader = [];
        this.arrKTReportHeader = [];
        this.donViIndex = [];
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth - 2;
        this.elem = document.documentElement;
        this.openFullscreen();
        this.cap1s = [""];
        this.cap2s = [""];
        this.cap3s = [""];
        this.comboxService.GetTesForAuthenticate().subscribe(t => { console.log("------------------- Get "); console.log(t); }, e => { console.log("------------------- Loi Get" + e); });
        this.comboxService.GetForAuthenticate().subscribe(t => { console.log("------------------- User infor"); console.log(t); }, e => { console.log("------------------- Loi User infor" + e); });
        this.comboxService.GetComboxFunction('DanhMucKhoi_NhomDonVICOSo').subscribe(t => {
            this.donViCoSos = t;
        });
        this.comboxService.GetComboxFunction('VCapXemBaoCao').subscribe(t => {
            this.capCbxd = t;
        });
        this.reportData1 = this.reportService.CP_BaoCaoTonKhoChungHeader("CP_WKPI_BE_01", "TOYOTA", "h");
        this.reportData1.subscribe(t => {
            this.arrReportHeader = t;
            this.arrReportHeader.forEach(element => {
                this.KarrHeader.push(element.TenCot);
                this.arrVisible.push(element.mVisible == 'True');
            });
            this.taoMangBanDau();
        });
        this.reportData1 = this.reportService2.CP_BaoCaoTonKhoChungHeader("CP_WKPI_BE_01", "TOYOTA", "kt");
        this.reportData1.subscribe(t => {
            this.arrKTReportHeader = t;
            this.arrKTReportHeader.forEach(element => {
                this.KTarrHeader.push(element.TenCot);
            });
            //console.log(this.KTarrHeader);
        });
    }
    openFullscreen() {
        if (this.elem.requestFullscreen) {
            this.elem.requestFullscreen();
        }
        else if (this.elem.mozRequestFullScreen) {
            /* Firefox */
            this.elem.mozRequestFullScreen();
        }
        else if (this.elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            this.elem.webkitRequestFullscreen();
        }
        else if (this.elem.msRequestFullscreen) {
            /* IE/Edge */
            this.elem.msRequestFullscreen();
        }
    }
    selCap1(e) {
        this.cap2s = [];
        this.cap3s = [""];
        this.cap1 = e.itemData;
        this.cap2 = "";
        this.cap3 = "";
        //---- lấy cấp 2
        this.reportDataArr1.filter(t => t.Ma_Kx === "" && t.Ten_kx3 === this.cap1 && t.Ma_Mau === "").
            forEach(k => { if (k.Ten_kx2 !== "") {
            this.cap2s.push(k.Ten_kx2);
        } });
        if (this.cap2s.length == 0)
            this.cap2s = [""];
        this.loadData();
    }
    selCap2(e) {
        this.cap3s = [];
        this.cap2 = e.itemData;
        this.cap3 = "";
        //---- lấy cấp 3
        this.reportDataArr1.filter(t => t.Ten_kx3 === this.cap1 && t.Ten_kx2 === this.cap2 && t.Ma_Mau === "").
            forEach(k => { if (k.Ma_Kx !== "") {
            this.cap3s.push(k.Ma_Kx);
        } });
        if (this.cap3s.length == 0)
            this.cap3s = [""];
        //console.log(this.cap3s);
        this.loadData();
    }
    selCap3(e) {
        this.cap3 = e.itemData;
        this.loadData();
        /*
        this.cap3s = [];
        this.cap3 = e.itemData ;
        //---- lấy cấp 2
        this.reportDataArr1.filter(t=> t.Ten_kx3 === this.cap1 && t.Ten_kx2 ===this.cap2 && t.Ma_Mau === "").
        forEach (k=> this.cap3s.push(k.Ma_Kx))
        */
    }
    loadData() {
        // Load cấp 1
        var data;
        if (this.cap1 !== "" && this.cap2 === "" && this.cap3 === "") {
            this.reportDataArr1.filter(t => t.Ten_kx3 === this.cap1 && t.Ten_kx2 === "" && t.Ma_Kx === "" && t.Ma_Mau === "").
                forEach(k => data = k);
        }
        else 
        // Load cấp 2
        if (this.cap1 !== "" && this.cap2 !== "" && this.cap3 === "") {
            this.reportDataArr1.filter(t => t.Ten_kx3 === this.cap1 && t.Ten_kx2 === this.cap2 && t.Ma_Kx === "" && t.Ma_Mau === "").
                forEach(k => data = k);
        }
        else 
        // Load cấp 2
        if (this.cap1 !== "" && this.cap2 !== "" && this.cap3 !== "") {
            this.reportDataArr1.filter(t => t.Ten_kx3 === this.cap1 && t.Ten_kx2 === this.cap2 && t.Ma_Kx === this.cap3 && t.Ma_Mau === "").
                forEach(k => { data = k; console.log("--------------------- Log data" + this.cap1 + "|" + this.cap2 + "|" + this.cap3); console.log(data); });
        }
        this.addToGridDetail(data);
    }
    addToGridDetail(data) {
        /*
        this.reportDataDetail = [
          {"Col1": "TMD", "Col2":data.K01, "Col3": data.KT01, "Col4":data.T01, "Col5": data.H01,  "Col6" :data.F01},
          {"Col1": "TTX", "Col2":data.K02, "Col3": data.KT02, "Col4":data.T02, "Col5": data.H01,  "Col6" :data.F02},
          {"Col1": "TTS", "Col2":data.K03, "Col3": data.KT03, "Col4":data.T03, "Col5": data.H01,  "Col6" :data.F03},
          {"Col1": "TBN", "Col2":data.K04, "Col3": data.KT04, "Col4":data.T04, "Col5": data.H01,  "Col6" :data.F04},
          {"Col1": "TTS", "Col2":data.K05, "Col3": data.KT05, "Col4":data.T05, "Col5": data.H01,  "Col6" :data.F05},
          {"Tổng": "TTS", "Col2":data.TotalK, "Col3": data.TotalK, "Col4":data.TotalT, "Col5":data.TotalH, "Col6" :data.TotalF},
        ];
        */
        this.reportDataDetail = [];
        this.reportFormat.forEach(t => {
            var donviRpr = t.Col1;
            var index = 0;
            //--- tìm thứ tự đơn vị trong mảng index ----
            this.donViIndex.forEach(q => {
                console.log(q.text);
                console.log(donviRpr);
                console.log(q.text == donviRpr);
                if (q.text == donviRpr) {
                    index = q.vitri;
                }
            });
            if (donviRpr !== "")
                this.reportDataDetail.push(this.getVal(index, donviRpr, data));
        });
        this.reportDataDetail.push({ "Col1": "Total", "Col2": data.TotalK, "Col3": data.TotalKT, "Col4": data.TotalT, "Col5": data.TotalH, "Col6": data.TotalF });
    }
    getVal(index, donvi, data) {
        if (index == 0) {
            return { "Col1": donvi, "Col2": data.K01, "Col3": data.KT01, "Col4": data.T01, "Col5": data.H01, "Col6": data.F01 };
        }
        else if (index == 1) {
            return { "Col1": donvi, "Col2": data.K02, "Col3": data.KT02, "Col4": data.T02, "Col5": data.H02, "Col6": data.F02 };
        }
        else if (index == 2) {
            return { "Col1": donvi, "Col2": data.K03, "Col3": data.KT03, "Col4": data.T03, "Col5": data.H03, "Col6": data.F03 };
        }
        else if (index == 3) {
            return { "Col1": donvi, "Col2": data.K04, "Col3": data.KT04, "Col4": data.T04, "Col5": data.H04, "Col6": data.F04 };
        }
        else if (index == 4) {
            return { "Col1": donvi, "Col2": data.K05, "Col3": data.KT05, "Col4": data.T05, "Col5": data.H05, "Col6": data.F05 };
        }
        else if (index == 5) {
            return { "Col1": donvi, "Col2": data.K06, "Col3": data.KT06, "Col4": data.T06, "Col5": data.H06, "Col6": data.F06 };
        }
        else if (index == 6) {
            return { "Col1": donvi, "Col2": data.K07, "Col3": data.KT07, "Col4": data.T07, "Col5": data.H07, "Col6": data.F07 };
        }
        else if (index == 7) {
            return { "Col1": donvi, "Col2": data.K08, "Col3": data.KT08, "Col4": data.T08, "Col5": data.H08, "Col6": data.F08 };
        }
        else if (index == 8) {
            return { "Col1": donvi, "Col2": data.K09, "Col3": data.KT09, "Col4": data.T09, "Col5": data.H09, "Col6": data.F09 };
        }
        else if (index == 9) {
            return { "Col1": donvi, "Col2": data.K10, "Col3": data.KT10, "Col4": data.T10, "Col5": data.H10, "Col6": data.F10 };
        }
        else if (index == 10) {
            return { "Col1": donvi, "Col2": data.K11, "Col3": data.KT11, "Col4": data.T11, "Col5": data.H11, "Col6": data.F11 };
        }
        else if (index == 11) {
            return { "Col1": donvi, "Col2": data.K12, "Col3": data.KT12, "Col4": data.T12, "Col5": data.H12, "Col6": data.F12 };
        }
        else if (index == 12) {
            return { "Col1": donvi, "Col2": data.K13, "Col3": data.KT13, "Col4": data.T13, "Col5": data.H13, "Col6": data.F13 };
        }
        else if (index == 13) {
            return { "Col1": donvi, "Col2": data.K14, "Col3": data.KT14, "Col4": data.T14, "Col5": data.H14, "Col6": data.F14 };
        }
        else if (index == 14) {
            return { "Col1": donvi, "Col2": data.K15, "Col3": data.KT15, "Col4": data.T15, "Col5": data.H15, "Col6": data.F15 };
        }
    }
    taoMangBanDau() {
        var i = 0;
        this.reportFormat = [];
        this.arrVisible.forEach(t => {
            this.donViIndex.push({ text: this.KarrHeader[i], vitri: i });
            if (t == true) {
                this.reportFormat.push({ "Col1": this.KarrHeader[i], "Col2": 0, "Col3": 0, "Col4": 0, "Col5": 0, "Col6": 0 });
            }
            i++;
        });
        //this.reportFormat.push({"Tổng": this.KarrHeader[i], "Col2":0, "Col3": 0, "Col4":0, "Col5": 0,  "Col6" :0});
        //console.log(this.reportFormat);
    }
    showFilter() {
        this.popupVisible = true;
    }
    close() {
        this.popupVisible = false;
    }
    fillData() {
        this.cap1s = [""];
        this.cap2s = [""];
        this.cap3s = [""];
        var ngays;
        var nam = this.ngayVal.getFullYear().toString();
        var thang = "";
        if (this.ngayVal.getMonth() < 9)
            thang = "0" + (this.ngayVal.getMonth() + 1).toString();
        else
            thang = this.ngayVal.getMonth().toString();
        var ngay = "";
        if (this.ngayVal.getDate() < 10)
            ngay = "0" + this.ngayVal.getDate().toString();
        else
            ngay = this.ngayVal.getDate().toString();
        ngays = nam + thang + ngay;
        this.popupVisible = false;
        this.gridDetail.instance.beginCustomLoading("");
        this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(this.khoiVal, this.capVal, ngays, "", "", "");
        this.reportData1.subscribe(t => {
            this.reportDataArr1 = t;
            this.gridDetail.instance.endCustomLoading();
            this.cap1s = [];
            //---- lấy cấp 1 
            this.reportDataArr1.filter(t => t.Ma_Kx === "" && t.Ten_kx2 === "" && t.Ma_Mau === "").
                forEach(k => this.cap1s.push(k.Ten_kx3));
        });
    }
    onCellPrepared(e) {
        if (e.rowType === "data" &&
            (e.column.dataField === "TotalT"
                || e.column.dataField === "TotalH"
                || e.column.dataField === "TotalK"
                || e.column.dataField === "TotalF")) {
            e.cellElement.style.background = "CYAN";
        }
    }
    onRowPrepared(e) {
        if (e.rowType == 'data') {
            if (e.data.BackColor == "YELOW") {
                e.rowElement.style.backgroundColor = 'yellow';
            }
            else if (e.data.BackColor == "PINK") {
                e.rowElement.style.backgroundColor = 'PINK';
            }
            else if (e.data.BackColor == "CYAN") {
                e.rowElement.style.backgroundColor = 'CYAN';
            }
            else if (e.data.BackColor == "GOLD") {
                e.rowElement.style.backgroundColor = 'GOLD';
            }
        }
    }
}
BaoCaoTonKhoChung2Component.ɵfac = function BaoCaoTonKhoChung2Component_Factory(t) { return new (t || BaoCaoTonKhoChung2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_combox_service__WEBPACK_IMPORTED_MODULE_3__["ComboxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
BaoCaoTonKhoChung2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BaoCaoTonKhoChung2Component, selectors: [["app-bao-cao-ton-kho-chung2"]], viewQuery: function BaoCaoTonKhoChung2Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.gridDetail = _t.first);
    } }, decls: 42, vars: 36, consts: [[1, "w3-display-container", "w3-deep-orange", 2, "height", "45px"], [1, "w3-display-left"], [1, "w3-display-right"], ["text", "Filter", 1, "button-info", 3, "onClick"], ["maxWidth", "600", "title", "Filter", 3, "showTitle", "dragEnabled", "closeOnOutsideClick", "visible", "visibleChange"], [1, "dx-fieldset"], [1, "dx-field"], [1, "dx-field-label"], [1, "dx-field-value"], ["type", "date", 3, "value"], ["displayExpr", "ten_nh", "valueExpr", "ma_nh", 3, "dataSource", "value", "valueChange"], ["displayExpr", "Ten", "valueExpr", "Ma", 3, "dataSource", "value", "valueChange"], [2, "position", "absolute", "right", "50px", "bottom", "10px"], ["with", "200", "text", "   Ok  ", 1, "button-info", 3, "onClick"], [2, "position", "absolute", "right", "150px", "bottom", "10px"], ["text", "Cancel", 1, "button-info", 3, "onClick"], ["id", "gridDetail", 3, "showColumnHeaders", "dataSource", "showBorders", "focusedRowEnabled", "focusedRowIndex", "columnHidingEnabled", "columnAutoWidth", "showColumnLines", "showRowLines", "repaintChangesOnly", "rowAlternationEnabled", "onRowPrepared", "onCellPrepared"], ["dataField", "Col1", "caption", "\u0110V", "headerCellTemplate", "addressHeaderTemplate"], ["dataField", "Col2", "caption", "K\u00FD", "headerCellTemplate", "addressHeaderTemplate"], ["dataField", "Col3", "caption", "KT", "headerCellTemplate", "addressHeaderTemplate"], ["dataField", "Col4", "caption", "T\u1ED3n", "headerCellTemplate", "addressHeaderTemplate"], ["dataField", "Col5", "caption", "N+1", "headerCellTemplate", "addressHeaderTemplate"], ["dataField", "Col6", "caption", "N+2", "headerCellTemplate", "addressHeaderTemplate"], [4, "dxTemplate", "dxTemplateOf"], ["style", "font-size:16px;  text-align: center; white-space: normal;", 4, "dxTemplate", "dxTemplateOf"], ["style", "font-size:12px; text-align: center; white-space: normal;", 4, "dxTemplate", "dxTemplateOf"], ["style", "color: rgb(0, 0, 0); white-space : normal;font-size:11px;", 4, "dxTemplate", "dxTemplateOf"], [1, "w3-light-grey", 2, "position", "absolute", "left", "1px", "bottom", "10px"], [3, "dataSource", "width", "scrollByContent", "showNavButtons", "onItemClick"], [2, "font-size", "16px"], [2, "font-size", "16px", "text-align", "center", "white-space", "normal"], [2, "font-size", "12px", "text-align", "center", "white-space", "normal"], [2, "color", "rgb(0, 0, 0)", "white-space", "normal", "font-size", "11px"]], template: function BaoCaoTonKhoChung2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "T\u1ED3n kho chung");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "dx-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function BaoCaoTonKhoChung2Component_Template_dx_button_onClick_5_listener() { return ctx.showFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "dx-popup", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung2Component_Template_dx_popup_visibleChange_6_listener($event) { return ctx.popupVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "dx-date-box", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Kh\u1ED1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "dx-select-box", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function BaoCaoTonKhoChung2Component_Template_dx_select_box_valueChange_17_listener($event) { return ctx.khoiVal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "C\u1EA5p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "dx-select-box", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function BaoCaoTonKhoChung2Component_Template_dx_select_box_valueChange_22_listener($event) { return ctx.capVal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "dx-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function BaoCaoTonKhoChung2Component_Template_dx_button_onClick_24_listener() { return ctx.fillData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "dx-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function BaoCaoTonKhoChung2Component_Template_dx_button_onClick_26_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "dx-data-grid", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRowPrepared", function BaoCaoTonKhoChung2Component_Template_dx_data_grid_onRowPrepared_27_listener($event) { return ctx.onRowPrepared($event); })("onCellPrepared", function BaoCaoTonKhoChung2Component_Template_dx_data_grid_onCellPrepared_27_listener($event) { return ctx.onCellPrepared($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "dxi-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "dxi-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "dxi-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "dxi-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "dxi-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "dxi-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, BaoCaoTonKhoChung2Component_div_34_Template, 3, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, BaoCaoTonKhoChung2Component_div_35_Template, 2, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, BaoCaoTonKhoChung2Component_div_36_Template, 2, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, BaoCaoTonKhoChung2Component_div_37_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "dx-tabs", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onItemClick", function BaoCaoTonKhoChung2Component_Template_dx_tabs_onItemClick_39_listener($event) { return ctx.selCap3($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "dx-tabs", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onItemClick", function BaoCaoTonKhoChung2Component_Template_dx_tabs_onItemClick_40_listener($event) { return ctx.selCap2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "dx-tabs", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onItemClick", function BaoCaoTonKhoChung2Component_Template_dx_tabs_onItemClick_41_listener($event) { return ctx.selCap1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showTitle", true)("dragEnabled", false)("closeOnOutsideClick", false)("visible", ctx.popupVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.ngayVal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.donViCoSos)("value", ctx.khoiVal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.capCbxd)("value", ctx.capVal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showColumnHeaders", true)("dataSource", ctx.reportDataDetail)("showBorders", true)("focusedRowEnabled", false)("focusedRowIndex", 0)("columnHidingEnabled", false)("columnAutoWidth", true)("showColumnLines", true)("showRowLines", true)("repaintChangesOnly", true)("rowAlternationEnabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "addressHeaderTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.cap3s)("width", ctx.innerWidth)("scrollByContent", true)("showNavButtons", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.cap2s)("width", ctx.innerWidth)("scrollByContent", true)("showNavButtons", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.cap1s)("width", ctx.innerWidth)("scrollByContent", true)("showNavButtons", true);
    } }, directives: [devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_5__["DxButtonComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxPopupComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDateBoxComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxSelectBoxComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__["DxiColumnComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__["DxTemplateDirective"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxTabsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW8tY2FvLXRvbi1raG8tY2h1bmcyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaoCaoTonKhoChung2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-bao-cao-ton-kho-chung2',
                templateUrl: './bao-cao-ton-kho-chung2.component.html',
                styleUrls: ['./bao-cao-ton-kho-chung2.component.scss']
            }]
    }], function () { return [{ type: src_app_combox_service__WEBPACK_IMPORTED_MODULE_3__["ComboxService"] }, { type: src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }, { type: src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, { gridDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"], { static: false }]
        }] }); })();
class Longtab {
}
class DonViIndex {
}


/***/ }),

/***/ "WOTP":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SideNavigationMenuComponent, SideNavigationMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuComponent", function() { return SideNavigationMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationMenuModule", function() { return SideNavigationMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular/ui/tree-view */ "phQQ");
/* harmony import */ var _app_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app-navigation */ "ruYK");
/* harmony import */ var devextreme_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/events */ "pxW5");
/* harmony import */ var devextreme_events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_events__WEBPACK_IMPORTED_MODULE_3__);






const _c0 = ["*"];
class SideNavigationMenuComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.selectedItemChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._compactMode = false;
    }
    set selectedItem(value) {
        this._selectedItem = value;
        if (!this.menu.instance) {
            return;
        }
        this.menu.instance.selectItem(value);
    }
    get items() {
        if (!this._items) {
            this._items = _app_navigation__WEBPACK_IMPORTED_MODULE_2__["navigation"].map((item) => {
                if (item.path && !(/^\//.test(item.path))) {
                    item.path = `/${item.path}`;
                }
                return Object.assign(Object.assign({}, item), { expanded: !this._compactMode });
            });
        }
        return this._items;
    }
    get compactMode() {
        return this._compactMode;
    }
    set compactMode(val) {
        this._compactMode = val;
        if (!this.menu.instance) {
            return;
        }
        if (val) {
            this.menu.instance.collapseAll();
        }
        else {
            this.menu.instance.expandItem(this._selectedItem);
        }
    }
    onItemClick(event) {
        this.selectedItemChanged.emit(event);
    }
    ngAfterViewInit() {
        devextreme_events__WEBPACK_IMPORTED_MODULE_3__["on"](this.elementRef.nativeElement, 'dxclick', (e) => {
            this.openMenu.next(e);
        });
    }
    ngOnDestroy() {
        devextreme_events__WEBPACK_IMPORTED_MODULE_3__["off"](this.elementRef.nativeElement, 'dxclick');
    }
}
SideNavigationMenuComponent.ɵfac = function SideNavigationMenuComponent_Factory(t) { return new (t || SideNavigationMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SideNavigationMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideNavigationMenuComponent, selectors: [["app-side-navigation-menu"]], viewQuery: function SideNavigationMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__["DxTreeViewComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
    } }, inputs: { selectedItem: "selectedItem", compactMode: "compactMode" }, outputs: { selectedItemChanged: "selectedItemChanged", openMenu: "openMenu" }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[1, "menu-container"], ["keyExpr", "path", "selectionMode", "single", "expandEvent", "click", "width", "100%", 3, "items", "focusStateEnabled", "onItemClick"]], template: function SideNavigationMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dx-tree-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemClick", function SideNavigationMenuComponent_Template_dx_tree_view_onItemClick_2_listener($event) { return ctx.onItemClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("focusStateEnabled", false);
    } }, directives: [devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__["DxTreeViewComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0px;\n  min-height: 100%;\n  height: 100%;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.content[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.content-block[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  margin-right: 40px;\n  margin-top: 20px;\n}\n\n.screen-x-small[_ngcontent-%COMP%]   .content-block[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.responsive-paddings[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.screen-large[_ngcontent-%COMP%]   .responsive-paddings[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n\n.dx-card.wide-card[_ngcontent-%COMP%] {\n  border-radius: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-right: 0;\n  border-left: 0;\n}\n\n.with-footer[_ngcontent-%COMP%]    > .dx-scrollable-wrapper[_ngcontent-%COMP%]    > .dx-scrollable-container[_ngcontent-%COMP%]    > .dx-scrollable-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.with-footer[_ngcontent-%COMP%]    > .dx-scrollable-wrapper[_ngcontent-%COMP%]    > .dx-scrollable-container[_ngcontent-%COMP%]    > .dx-scrollable-content[_ngcontent-%COMP%]    > .dx-scrollview-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  height: 100%;\n  width: 250px !important;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  min-height: 100%;\n  display: flex;\n  flex: 1;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview {\n  white-space: nowrap;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-item {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-item .dx-icon {\n  width: 60px !important;\n  margin: 0 !important;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node {\n  padding: 0 0 !important;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-toggle-item-visibility {\n  right: 10px;\n  left: auto;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-rtl .dx-treeview-toggle-item-visibility {\n  left: 10px;\n  right: auto;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node[aria-level=\"1\"] {\n  font-weight: bold;\n  border-bottom: 1px solid #515159;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node[aria-level=\"2\"] .dx-treeview-item-content {\n  font-weight: normal;\n  padding: 0 60px;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected:not(.dx-state-focused) > .dx-treeview-item {\n  background: transparent;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected > .dx-treeview-item * {\n  color: #ff5722;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node-container .dx-treeview-node:not(.dx-state-focused) > .dx-treeview-item.dx-state-hover {\n  background-color: #3f3f4b;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .dx-theme-generic[_nghost-%COMP%]    .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected.dx-state-focused > .dx-treeview-item *, .dx-theme-generic   [_nghost-%COMP%]    .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected.dx-state-focused > .dx-treeview-item * {\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZHgtc3R5bGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxwYWdlc1xcYmFvLWNhby10b24ta2hvLWNodW5nM1xcc2lkZS1uYXZpZ2F0aW9uLW1lbnUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHRoZW1lc1xcZ2VuZXJhdGVkXFx2YXJpYWJsZXMuYWRkaXRpb25hbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FERUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FESUE7RUFDRSxhQUFBO0FDREY7O0FER0U7RUFDRSxhQUFBO0FDREo7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNGRjs7QURLQTtFQUVFLFlBQUE7QUNIRjs7QURLRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FBaERBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFtREY7O0FBakRFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtBQW1ESjs7QUFqREk7RUFFRSxtQkFBQTtBQWtETjs7QUE5Q007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFnRFI7O0FBOUNRO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtBQWdEVjs7QUExQ007RUFDRSx1QkFBQTtBQTRDUjs7QUF6Q007RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQTJDUjs7QUF4Q007RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQTBDUjs7QUFwQ1E7RUFDRSxpQkFBQTtFQUNBLGdDQUFBO0FBc0NWOztBQW5DUTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQXFDVjs7QUEzQlU7RUFDRSx1QkFBQTtBQTZCWjs7QUExQlU7RUFDRSxjQ3hFRTtBRG9HZDs7QUF6QlU7RUFDRSx5QkFBQTtBQTJCWjs7QUFwQk07RUFDRSxjQUFBO0FBc0JSIiwiZmlsZSI6InNpZGUtbmF2aWdhdGlvbi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY29udGVudCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cblxuLmNvbnRlbnQtYmxvY2sge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gIC5zY3JlZW4teC1zbWFsbCAmIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbn1cblxuLnJlc3BvbnNpdmUtcGFkZGluZ3Mge1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIC5zY3JlZW4tbGFyZ2UgJiB7XG4gICAgcGFkZGluZzogNDBweDtcbiAgfVxufVxuXG4uZHgtY2FyZC53aWRlLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4ud2l0aC1mb290ZXIgPiAuZHgtc2Nyb2xsYWJsZS13cmFwcGVyID5cbi5keC1zY3JvbGxhYmxlLWNvbnRhaW5lciA+IC5keC1zY3JvbGxhYmxlLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgJiA+IC5keC1zY3JvbGx2aWV3LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cbiRzaWRlLXBhbmVsLW1pbi13aWR0aDogNjBweDtcbiIsImh0bWwsIGJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbnRlbnQge1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLmNvbnRlbnQgaDIge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb250ZW50LWJsb2NrIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5zY3JlZW4teC1zbWFsbCAuY29udGVudC1ibG9jayB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5yZXNwb25zaXZlLXBhZGRpbmdzIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5zY3JlZW4tbGFyZ2UgLnJlc3BvbnNpdmUtcGFkZGluZ3Mge1xuICBwYWRkaW5nOiA0MHB4O1xufVxuXG4uZHgtY2FyZC53aWRlLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4ud2l0aC1mb290ZXIgPiAuZHgtc2Nyb2xsYWJsZS13cmFwcGVyID4gLmR4LXNjcm9sbGFibGUtY29udGFpbmVyID4gLmR4LXNjcm9sbGFibGUtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53aXRoLWZvb3RlciA+IC5keC1zY3JvbGxhYmxlLXdyYXBwZXIgPiAuZHgtc2Nyb2xsYWJsZS1jb250YWluZXIgPiAuZHgtc2Nyb2xsYWJsZS1jb250ZW50ID4gLmR4LXNjcm9sbHZpZXctY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjUwcHggIWltcG9ydGFudDtcbn1cbjpob3N0IC5tZW51LWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG59XG46aG9zdCAubWVudS1jb250YWluZXIgOjpuZy1kZWVwIC5keC10cmVldmlldyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG46aG9zdCAubWVudS1jb250YWluZXIgOjpuZy1kZWVwIC5keC10cmVldmlldyAuZHgtdHJlZXZpZXctaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbjpob3N0IC5tZW51LWNvbnRhaW5lciA6Om5nLWRlZXAgLmR4LXRyZWV2aWV3IC5keC10cmVldmlldy1pdGVtIC5keC1pY29uIHtcbiAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG46aG9zdCAubWVudS1jb250YWluZXIgOjpuZy1kZWVwIC5keC10cmVldmlldyAuZHgtdHJlZXZpZXctbm9kZSB7XG4gIHBhZGRpbmc6IDAgMCAhaW1wb3J0YW50O1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIDo6bmctZGVlcCAuZHgtdHJlZXZpZXcgLmR4LXRyZWV2aWV3LXRvZ2dsZS1pdGVtLXZpc2liaWxpdHkge1xuICByaWdodDogMTBweDtcbiAgbGVmdDogYXV0bztcbn1cbjpob3N0IC5tZW51LWNvbnRhaW5lciA6Om5nLWRlZXAgLmR4LXRyZWV2aWV3IC5keC1ydGwgLmR4LXRyZWV2aWV3LXRvZ2dsZS1pdGVtLXZpc2liaWxpdHkge1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogYXV0bztcbn1cbjpob3N0IC5tZW51LWNvbnRhaW5lciA6Om5nLWRlZXAgLmR4LXRyZWV2aWV3IC5keC10cmVldmlldy1ub2RlW2FyaWEtbGV2ZWw9XCIxXCJdIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTE1MTU5O1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIDo6bmctZGVlcCAuZHgtdHJlZXZpZXcgLmR4LXRyZWV2aWV3LW5vZGVbYXJpYS1sZXZlbD1cIjJcIl0gLmR4LXRyZWV2aWV3LWl0ZW0tY29udGVudCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDAgNjBweDtcbn1cbjpob3N0IC5tZW51LWNvbnRhaW5lciA6Om5nLWRlZXAgLmR4LXRyZWV2aWV3IC5keC10cmVldmlldy1ub2RlLWNvbnRhaW5lciAuZHgtdHJlZXZpZXctbm9kZS5keC1zdGF0ZS1zZWxlY3RlZDpub3QoLmR4LXN0YXRlLWZvY3VzZWQpID4gLmR4LXRyZWV2aWV3LWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5tZW51LWNvbnRhaW5lciA6Om5nLWRlZXAgLmR4LXRyZWV2aWV3IC5keC10cmVldmlldy1ub2RlLWNvbnRhaW5lciAuZHgtdHJlZXZpZXctbm9kZS5keC1zdGF0ZS1zZWxlY3RlZCA+IC5keC10cmVldmlldy1pdGVtICoge1xuICBjb2xvcjogI2ZmNTcyMjtcbn1cbjpob3N0IC5tZW51LWNvbnRhaW5lciA6Om5nLWRlZXAgLmR4LXRyZWV2aWV3IC5keC10cmVldmlldy1ub2RlLWNvbnRhaW5lciAuZHgtdHJlZXZpZXctbm9kZTpub3QoLmR4LXN0YXRlLWZvY3VzZWQpID4gLmR4LXRyZWV2aWV3LWl0ZW0uZHgtc3RhdGUtaG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZjRiO1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIDpob3N0LWNvbnRleHQoLmR4LXRoZW1lLWdlbmVyaWMpIDo6bmctZGVlcC5keC10cmVldmlldyAuZHgtdHJlZXZpZXctbm9kZS1jb250YWluZXIgLmR4LXRyZWV2aWV3LW5vZGUuZHgtc3RhdGUtc2VsZWN0ZWQuZHgtc3RhdGUtZm9jdXNlZCA+IC5keC10cmVldmlldy1pdGVtICoge1xuICBjb2xvcjogaW5oZXJpdDtcbn0iLCIkYmFzZS1hY2NlbnQ6ICNmZjU3MjI7XG4kYmFzZS10ZXh0LWNvbG9yOiAjZmZmO1xuJGJhc2UtYmc6ICMzNjM2NDA7XG4kYmFzZS1ib3JkZXItY29sb3I6ICM1MTUxNTk7XG4kYmFzZS1ib3JkZXItcmFkaXVzOiA0cHg7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavigationMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-navigation-menu',
                templateUrl: './side-navigation-menu.component.html',
                styleUrls: ['./side-navigation-menu.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__["DxTreeViewComponent"], { static: true }]
        }], selectedItemChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], openMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], selectedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], compactMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class SideNavigationMenuModule {
}
SideNavigationMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SideNavigationMenuModule });
SideNavigationMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SideNavigationMenuModule_Factory(t) { return new (t || SideNavigationMenuModule)(); }, imports: [[devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__["DxTreeViewModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SideNavigationMenuModule, { declarations: [SideNavigationMenuComponent], imports: [devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__["DxTreeViewModule"]], exports: [SideNavigationMenuComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavigationMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__["DxTreeViewModule"]],
                declarations: [SideNavigationMenuComponent],
                exports: [SideNavigationMenuComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "Y0q4":
/*!*****************************************!*\
  !*** ./src/app/00.Common/FilterData.ts ***!
  \*****************************************/
/*! exports provided: FilterData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterData", function() { return FilterData; });
class FilterData {
}


/***/ }),

/***/ "Y5Lh":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular/ui/form */ "k8YA");



class ProfileComponent {
    constructor() {
        this.employee = {
            ID: 7,
            FirstName: 'Sandra',
            LastName: 'Johnson',
            Prefix: 'Mrs.',
            Position: 'Controller',
            Picture: 'images/employees/06.png',
            BirthDate: new Date('1974/11/15'),
            HireDate: new Date('2005/05/11'),
            /* tslint:disable-next-line:max-line-length */
            Notes: 'Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.',
            Address: '4600 N Virginia Rd.'
        };
        this.colCountByScreen = {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4
        };
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["ng-component"]], decls: 9, vars: 4, consts: [[1, "content-block"], [1, "content-block", "dx-card", "responsive-paddings"], [1, "form-avatar"], [3, "src"], ["id", "form", "labelLocation", "top", 3, "formData", "colCountByScreen"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dx-form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/", ctx.employee.Picture, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.Notes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formData", ctx.employee)("colCountByScreen", ctx.colCountByScreen);
    } }, directives: [devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_1__["DxFormComponent"]], styles: [".form-avatar[_ngcontent-%COMP%] {\n  float: left;\n  height: 120px;\n  width: 120px;\n  margin-right: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: #fff;\n  overflow: hidden;\n}\n.form-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 120px;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxiYW8tY2FvLXRvbi1raG8tY2h1bmczXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWF2YXRhciB7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBpbWcge1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts */ "Jcec");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components */ "1ua0");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services */ "ZF+8");
/* harmony import */ var _unauthenticated_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unauthenticated-content */ "1N39");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _pages_bao_cao_mot_chi_tieu_bao_cao_mot_chi_tieu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/bao-cao-mot-chi-tieu/bao-cao-mot-chi-tieu.component */ "/2a2");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var _pages_test_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/test/test.component */ "lEda");
/* harmony import */ var _pages_bao_cao_ton_kho_chung_bao_cao_ton_kho_chung_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/bao-cao-ton-kho-chung/bao-cao-ton-kho-chung.component */ "dhtj");
/* harmony import */ var _pages_bao_cao_ton_kho_chung2_bao_cao_ton_kho_chung2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/bao-cao-ton-kho-chung2/bao-cao-ton-kho-chung2.component */ "VExB");
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/auth.interceptor */ "cJIb");
/* harmony import */ var _pages_test_tab_test_tab_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/test-tab/test-tab.component */ "1xgb");
/* harmony import */ var _pages_bao_cao_ton_kho_chung3_bao_cao_ton_kho_chung3_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/bao-cao-ton-kho-chung3/bao-cao-ton-kho-chung3.component */ "lR4v");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _shared_services__WEBPACK_IMPORTED_MODULE_6__["ScreenService"], _shared_services__WEBPACK_IMPORTED_MODULE_6__["AppInfoService"], _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["authInterceptorProviders"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _layouts__WEBPACK_IMPORTED_MODULE_4__["SideNavOuterToolbarModule"],
            _layouts__WEBPACK_IMPORTED_MODULE_4__["SideNavInnerToolbarModule"],
            _layouts__WEBPACK_IMPORTED_MODULE_4__["SingleCardModule"],
            _shared_components__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
            _shared_components__WEBPACK_IMPORTED_MODULE_5__["LoginFormModule"],
            _unauthenticated_content__WEBPACK_IMPORTED_MODULE_7__["UnauthenticatedContentModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxValidatorModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxValidationSummaryModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxButtonModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxDataGridModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxChartModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxPieChartModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxTextAreaModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxTextBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxNumberBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxSelectBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxPopupModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxMultiViewModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxAccordionModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxTabPanelModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxFormModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxDateBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxSelectBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxLoadPanelModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxTabsModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxSpeedDialActionModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxDropDownBoxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_bao_cao_mot_chi_tieu_bao_cao_mot_chi_tieu_component__WEBPACK_IMPORTED_MODULE_9__["BaoCaoMotChiTieuComponent"],
        _pages_test_test_component__WEBPACK_IMPORTED_MODULE_11__["TestComponent"],
        _pages_bao_cao_ton_kho_chung_bao_cao_ton_kho_chung_component__WEBPACK_IMPORTED_MODULE_12__["BaoCaoTonKhoChungComponent"],
        _pages_bao_cao_ton_kho_chung2_bao_cao_ton_kho_chung2_component__WEBPACK_IMPORTED_MODULE_13__["BaoCaoTonKhoChung2Component"],
        _pages_test_tab_test_tab_component__WEBPACK_IMPORTED_MODULE_15__["TestTabComponent"],
        _pages_bao_cao_ton_kho_chung3_bao_cao_ton_kho_chung3_component__WEBPACK_IMPORTED_MODULE_16__["BaoCaoTonKhoChung3Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _layouts__WEBPACK_IMPORTED_MODULE_4__["SideNavOuterToolbarModule"],
        _layouts__WEBPACK_IMPORTED_MODULE_4__["SideNavInnerToolbarModule"],
        _layouts__WEBPACK_IMPORTED_MODULE_4__["SingleCardModule"],
        _shared_components__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
        _shared_components__WEBPACK_IMPORTED_MODULE_5__["LoginFormModule"],
        _unauthenticated_content__WEBPACK_IMPORTED_MODULE_7__["UnauthenticatedContentModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxValidatorModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxValidationSummaryModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxButtonModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxDataGridModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxChartModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxPieChartModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxTextAreaModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxTextBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxNumberBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxSelectBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxPopupModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxMultiViewModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxAccordionModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxTabPanelModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxFormModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxDateBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxSelectBoxModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxLoadPanelModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxTabsModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxSpeedDialActionModule"],
        devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxDropDownBoxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_bao_cao_mot_chi_tieu_bao_cao_mot_chi_tieu_component__WEBPACK_IMPORTED_MODULE_9__["BaoCaoMotChiTieuComponent"],
                    _pages_test_test_component__WEBPACK_IMPORTED_MODULE_11__["TestComponent"],
                    _pages_bao_cao_ton_kho_chung_bao_cao_ton_kho_chung_component__WEBPACK_IMPORTED_MODULE_12__["BaoCaoTonKhoChungComponent"],
                    _pages_bao_cao_ton_kho_chung2_bao_cao_ton_kho_chung2_component__WEBPACK_IMPORTED_MODULE_13__["BaoCaoTonKhoChung2Component"],
                    _pages_test_tab_test_tab_component__WEBPACK_IMPORTED_MODULE_15__["TestTabComponent"],
                    _pages_bao_cao_ton_kho_chung3_bao_cao_ton_kho_chung3_component__WEBPACK_IMPORTED_MODULE_16__["BaoCaoTonKhoChung3Component"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _layouts__WEBPACK_IMPORTED_MODULE_4__["SideNavOuterToolbarModule"],
                    _layouts__WEBPACK_IMPORTED_MODULE_4__["SideNavInnerToolbarModule"],
                    _layouts__WEBPACK_IMPORTED_MODULE_4__["SingleCardModule"],
                    _shared_components__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
                    _shared_components__WEBPACK_IMPORTED_MODULE_5__["LoginFormModule"],
                    _unauthenticated_content__WEBPACK_IMPORTED_MODULE_7__["UnauthenticatedContentModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxValidatorModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxValidationSummaryModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxButtonModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxDataGridModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxChartModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxPieChartModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxTextAreaModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxTextBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxNumberBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxSelectBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxPopupModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxMultiViewModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxAccordionModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxTabPanelModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxFormModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxDateBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxSelectBoxModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxLoadPanelModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxTabsModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxSpeedDialActionModule"],
                    devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxDropDownBoxModule"]
                ],
                providers: [_shared_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _shared_services__WEBPACK_IMPORTED_MODULE_6__["ScreenService"], _shared_services__WEBPACK_IMPORTED_MODULE_6__["AppInfoService"], _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["authInterceptorProviders"]],
                //providers: [AuthService, ScreenService, AppInfoService],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZF+8":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: AppInfoService, AuthService, AuthGuardService, ScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-info.service */ "GkAP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppInfoService", function() { return _app_info_service__WEBPACK_IMPORTED_MODULE_0__["AppInfoService"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "IYfF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]; });

/* harmony import */ var _screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen.service */ "pFCf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenService", function() { return _screen_service__WEBPACK_IMPORTED_MODULE_2__["ScreenService"]; });






/***/ }),

/***/ "aF9I":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent, FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], ngContentSelectors: _c0, decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  color: rgba(0, 0, 0, 0.609);\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding-top: 20px;\n  padding-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhZ2VzXFxiYW8tY2FvLXRvbi1raG8tY2h1bmczXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFERiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWVzL2dlbmVyYXRlZC92YXJpYWJsZXMuYmFzZS5zY3NzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiByZ2JhKCRiYXNlLXRleHQtY29sb3IsIGFscGhhKCRiYXNlLXRleHQtY29sb3IpICogMC43KTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                template: `
    <footer><ng-content></ng-content></footer>
  `,
                styleUrls: ['./footer.component.scss']
            }]
    }], null, null); })();
class FooterModule {
}
FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterModule_Factory(t) { return new (t || FooterModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [FooterComponent], exports: [FooterComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [FooterComponent],
                exports: [FooterComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "aZ8m":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent, HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-panel/user-panel.component */ "V2yS");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/button */ "WYlB");
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/toolbar */ "Qlw+");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "ZF+8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");














const _c0 = function (a2) { return { icon: "menu", stylingMode: "text", onClick: a2 }; };
function HeaderComponent_dxi_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dxi-item", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.toggleMenu));
} }
function HeaderComponent_dxi_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dxi-item", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r1.title);
} }
function HeaderComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-panel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r5.user)("menuItems", ctx_r5.userMenuItems);
} }
function HeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dx-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_5_div_2_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "content");
} }
function HeaderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-panel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r3.user)("menuItems", ctx_r3.userMenuItems);
} }
class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.menuToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menuToggleEnabled = false;
        this.user = { email: '' };
        this.userMenuItems = [{
                text: 'Profile',
                icon: 'user',
                onClick: () => {
                    this.router.navigate(['/profile']);
                }
            },
            {
                text: 'Logout',
                icon: 'runner',
                onClick: () => {
                    this.authService.logOut();
                }
            }];
        this.toggleMenu = () => {
            this.menuToggle.emit();
        };
    }
    ngOnInit() {
        this.authService.getUser().then((e) => this.user = e.data);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { menuToggleEnabled: "menuToggleEnabled", title: "title" }, outputs: { menuToggle: "menuToggle" }, decls: 7, vars: 4, consts: [[1, "header-toolbar"], ["location", "before", "widget", "dxButton", "cssClass", "menu-button", 3, "options", 4, "ngIf"], ["location", "before", "cssClass", "header-title", 3, "text", 4, "ngIf"], ["location", "after", "locateInMenu", "auto", "menuItemTemplate", "menuItem"], [4, "dxTemplate", "dxTemplateOf"], ["location", "before", "widget", "dxButton", "cssClass", "menu-button", 3, "options"], ["location", "before", "cssClass", "header-title", 3, "text"], ["width", "210px", "height", "100%", "stylingMode", "text", 1, "user-button", "authorization"], ["menuMode", "context", 3, "user", "menuItems"], ["menuMode", "list", 3, "user", "menuItems"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dx-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_dxi_item_2_Template, 1, 3, "dxi-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_dxi_item_3_Template, 1, 1, "dxi-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "dxi-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_5_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuToggleEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "menuItem");
    } }, directives: [devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["DxToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__["DxiItemComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_8__["DxTemplateDirective"], devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__["DxButtonComponent"], _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_2__["UserPanelComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0px;\n  min-height: 100%;\n  height: 100%;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.content[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.content-block[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  margin-right: 40px;\n  margin-top: 20px;\n}\n\n.screen-x-small[_ngcontent-%COMP%]   .content-block[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.responsive-paddings[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.screen-large[_ngcontent-%COMP%]   .responsive-paddings[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n\n.dx-card.wide-card[_ngcontent-%COMP%] {\n  border-radius: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-right: 0;\n  border-left: 0;\n}\n\n.with-footer[_ngcontent-%COMP%]    > .dx-scrollable-wrapper[_ngcontent-%COMP%]    > .dx-scrollable-container[_ngcontent-%COMP%]    > .dx-scrollable-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.with-footer[_ngcontent-%COMP%]    > .dx-scrollable-wrapper[_ngcontent-%COMP%]    > .dx-scrollable-container[_ngcontent-%COMP%]    > .dx-scrollable-content[_ngcontent-%COMP%]    > .dx-scrollview-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n[_nghost-%COMP%] {\n  flex: 0 0 auto;\n  z-index: 1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n[_nghost-%COMP%]     .dx-toolbar .dx-toolbar-item.menu-button > .dx-toolbar-item-content .dx-icon {\n  color: #ff5722;\n}\n\n  .dx-toolbar.header-toolbar .dx-toolbar-items-container .dx-toolbar-after {\n  padding: 0 40px;\n}\n\n.screen-x-small[_nghost-%COMP%]     .dx-toolbar.header-toolbar .dx-toolbar-items-container .dx-toolbar-after, .screen-x-small   [_nghost-%COMP%]     .dx-toolbar.header-toolbar .dx-toolbar-items-container .dx-toolbar-after {\n  padding: 0 20px;\n}\n\n  .dx-toolbar .dx-toolbar-item.menu-button {\n  width: 60px;\n  text-align: center;\n  padding: 0;\n}\n\n  .header-title .dx-item-content {\n  padding: 0;\n  margin: 0;\n}\n\n.dx-theme-generic[_nghost-%COMP%]   .dx-toolbar[_ngcontent-%COMP%], .dx-theme-generic   [_nghost-%COMP%]   .dx-toolbar[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.dx-theme-generic[_nghost-%COMP%]   .user-button[_ngcontent-%COMP%]    > .dx-button-content[_ngcontent-%COMP%], .dx-theme-generic   [_nghost-%COMP%]   .user-button[_ngcontent-%COMP%]    > .dx-button-content[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZHgtc3R5bGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxwYWdlc1xcYmFvLWNhby10b24ta2hvLWNodW5nM1xcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFx0aGVtZXNcXGdlbmVyYXRlZFxcdmFyaWFibGVzLmJhc2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBRENFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRElBO0VBQ0UsYUFBQTtBQ0RGOztBREdFO0VBQ0UsYUFBQTtBQ0RKOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRkY7O0FES0E7RUFFRSxZQUFBO0FDSEY7O0FES0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0hKOztBQWhEQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0Esd0VBQUE7QUFtREY7O0FBakRFO0VBQ0UsY0NUVTtBRDREZDs7QUEvQ0E7RUFDRSxlQUFBO0FBa0RGOztBQWhERTtFQUNFLGVBQUE7QUFrREo7O0FBOUNBO0VBQ0UsV0RvQ3FCO0VDbkNyQixrQkFBQTtFQUNBLFVBQUE7QUFpREY7O0FBOUNBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFpREY7O0FBN0NFO0VBQ0UsZUFBQTtBQWdESjs7QUE3Q0U7RUFDRSxZQUFBO0FBK0NKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbnRlbnQge1xuICBsaW5lLWhlaWdodDogMS41O1xuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG5cbi5jb250ZW50LWJsb2NrIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICAuc2NyZWVuLXgtc21hbGwgJiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59XG5cbi5yZXNwb25zaXZlLXBhZGRpbmdzIHtcbiAgcGFkZGluZzogMjBweDtcblxuICAuc2NyZWVuLWxhcmdlICYge1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gIH1cbn1cblxuLmR4LWNhcmQud2lkZS1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMDtcbn1cblxuLndpdGgtZm9vdGVyID4gLmR4LXNjcm9sbGFibGUtd3JhcHBlciA+XG4uZHgtc2Nyb2xsYWJsZS1jb250YWluZXIgPiAuZHgtc2Nyb2xsYWJsZS1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICYgPiAuZHgtc2Nyb2xsdmlldy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgfVxufVxuXG4kc2lkZS1wYW5lbC1taW4td2lkdGg6IDYwcHg7XG4iLCJodG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb250ZW50IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5jb250ZW50IGgyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29udGVudC1ibG9jayB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uc2NyZWVuLXgtc21hbGwgLmNvbnRlbnQtYmxvY2sge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucmVzcG9uc2l2ZS1wYWRkaW5ncyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uc2NyZWVuLWxhcmdlIC5yZXNwb25zaXZlLXBhZGRpbmdzIHtcbiAgcGFkZGluZzogNDBweDtcbn1cblxuLmR4LWNhcmQud2lkZS1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMDtcbn1cblxuLndpdGgtZm9vdGVyID4gLmR4LXNjcm9sbGFibGUtd3JhcHBlciA+IC5keC1zY3JvbGxhYmxlLWNvbnRhaW5lciA+IC5keC1zY3JvbGxhYmxlLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ud2l0aC1mb290ZXIgPiAuZHgtc2Nyb2xsYWJsZS13cmFwcGVyID4gLmR4LXNjcm9sbGFibGUtY29udGFpbmVyID4gLmR4LXNjcm9sbGFibGUtY29udGVudCA+IC5keC1zY3JvbGx2aWV3LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG46aG9zdCB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB6LWluZGV4OiAxO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG46aG9zdCA6Om5nLWRlZXAgLmR4LXRvb2xiYXIgLmR4LXRvb2xiYXItaXRlbS5tZW51LWJ1dHRvbiA+IC5keC10b29sYmFyLWl0ZW0tY29udGVudCAuZHgtaWNvbiB7XG4gIGNvbG9yOiAjZmY1NzIyO1xufVxuXG46Om5nLWRlZXAgLmR4LXRvb2xiYXIuaGVhZGVyLXRvb2xiYXIgLmR4LXRvb2xiYXItaXRlbXMtY29udGFpbmVyIC5keC10b29sYmFyLWFmdGVyIHtcbiAgcGFkZGluZzogMCA0MHB4O1xufVxuOmhvc3QtY29udGV4dCguc2NyZWVuLXgtc21hbGwpIDo6bmctZGVlcCAuZHgtdG9vbGJhci5oZWFkZXItdG9vbGJhciAuZHgtdG9vbGJhci1pdGVtcy1jb250YWluZXIgLmR4LXRvb2xiYXItYWZ0ZXIge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbjo6bmctZGVlcCAuZHgtdG9vbGJhciAuZHgtdG9vbGJhci1pdGVtLm1lbnUtYnV0dG9uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cblxuOjpuZy1kZWVwIC5oZWFkZXItdGl0bGUgLmR4LWl0ZW0tY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuOmhvc3QtY29udGV4dCguZHgtdGhlbWUtZ2VuZXJpYykgLmR4LXRvb2xiYXIge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG46aG9zdC1jb250ZXh0KC5keC10aGVtZS1nZW5lcmljKSAudXNlci1idXR0b24gPiAuZHgtYnV0dG9uLWNvbnRlbnQge1xuICBwYWRkaW5nOiAzcHg7XG59IiwiJGJhc2UtYWNjZW50OiAjZmY1NzIyO1xuJGJhc2UtdGV4dC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiRiYXNlLWJnOiAjZmZmO1xuJGJhc2UtYm9yZGVyLWNvbG9yOiAjMDcxMDEzO1xuJGJhc2UtYm9yZGVyLXJhZGl1czogNHB4O1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: 'header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { menuToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], menuToggleEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__["DxButtonModule"],
            _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_2__["UserPanelModule"],
            devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["DxToolbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [HeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__["DxButtonModule"],
        _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_2__["UserPanelModule"],
        devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["DxToolbarModule"]], exports: [HeaderComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_3__["DxButtonModule"],
                    _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_2__["UserPanelModule"],
                    devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__["DxToolbarModule"]
                ],
                declarations: [HeaderComponent],
                exports: [HeaderComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "cJIb":
/*!*********************************************!*\
  !*** ./src/app/helpers/auth.interceptor.ts ***!
  \*********************************************/
/*! exports provided: AuthInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/token-storage.service */ "P7Fj");




const TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end
class AuthInterceptor {
    constructor(token) {
        this.token = token;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        /*
        if (token != null) {
          authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
        }
        */
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        /*
        
        authReq = req.clone({
          setHeaders: {
              Authorization: "Bearer " + token
          }
        });
        */
        return next.handle(authReq);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _shared_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }]; }, null); })();
const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "d922":
/*!************************************!*\
  !*** ./src/app/Model/LenhModel.ts ***!
  \************************************/
/*! exports provided: LenhModel, TestModel, ComboxData, CachingComboxData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LenhModel", function() { return LenhModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModel", function() { return TestModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboxData", function() { return ComboxData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachingComboxData", function() { return CachingComboxData; });
class LenhModel {
}
class TestModel {
}
class ComboxData {
}
class CachingComboxData {
}


/***/ }),

/***/ "dhtj":
/*!********************************************************************************!*\
  !*** ./src/app/pages/bao-cao-ton-kho-chung/bao-cao-ton-kho-chung.component.ts ***!
  \********************************************************************************/
/*! exports provided: BaoCaoTonKhoChungComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoChungComponent", function() { return BaoCaoTonKhoChungComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/01.Service/report.service */ "DQhQ");
/* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @service-work/is-loading */ "nFfA");
/* harmony import */ var src_app_combox_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/combox.service */ "H5WC");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/button */ "WYlB");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");













function BaoCaoTonKhoChungComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r44.column.caption);
} }
function BaoCaoTonKhoChungComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.KarrHeader[0], "\n");
} }
function BaoCaoTonKhoChungComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.KarrHeader[1], "\n");
} }
function BaoCaoTonKhoChungComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.KarrHeader[2], "\n");
} }
function BaoCaoTonKhoChungComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.KarrHeader[3], "\n");
} }
function BaoCaoTonKhoChungComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.KarrHeader[4], "\n");
} }
function BaoCaoTonKhoChungComponent_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.KarrHeader[5], "\n");
} }
function BaoCaoTonKhoChungComponent_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.KarrHeader[6], "\n");
} }
function BaoCaoTonKhoChungComponent_div_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.KarrHeader[7], "\n");
} }
function BaoCaoTonKhoChungComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.KarrHeader[8], "\n");
} }
function BaoCaoTonKhoChungComponent_div_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.KarrHeader[9], "\n");
} }
function BaoCaoTonKhoChungComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.KarrHeader[10], "\n");
} }
function BaoCaoTonKhoChungComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.KarrHeader[11], "\n");
} }
function BaoCaoTonKhoChungComponent_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.KarrHeader[12], "\n");
} }
function BaoCaoTonKhoChungComponent_div_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.KarrHeader[13], "\n");
} }
function BaoCaoTonKhoChungComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.KarrHeader[14], "\n");
} }
function BaoCaoTonKhoChungComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.KTarrHeader[0]);
} }
function BaoCaoTonKhoChungComponent_div_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.KTarrHeader[1]);
} }
function BaoCaoTonKhoChungComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.KTarrHeader[2]);
} }
function BaoCaoTonKhoChungComponent_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.KTarrHeader[3]);
} }
function BaoCaoTonKhoChungComponent_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.KTarrHeader[4]);
} }
function BaoCaoTonKhoChungComponent_div_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r21.KTarrHeader[5]);
} }
function BaoCaoTonKhoChungComponent_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.KTarrHeader[6]);
} }
function BaoCaoTonKhoChungComponent_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.KTarrHeader[7]);
} }
function BaoCaoTonKhoChungComponent_div_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.KTarrHeader[8]);
} }
function BaoCaoTonKhoChungComponent_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.KTarrHeader[9]);
} }
function BaoCaoTonKhoChungComponent_div_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.KTarrHeader[10]);
} }
function BaoCaoTonKhoChungComponent_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.KTarrHeader[11]);
} }
function BaoCaoTonKhoChungComponent_div_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.KTarrHeader[12]);
} }
function BaoCaoTonKhoChungComponent_div_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.KTarrHeader[13]);
} }
function BaoCaoTonKhoChungComponent_div_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.KTarrHeader[14]);
} }
function BaoCaoTonKhoChungComponent_div_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", info_r75.column.caption, "\n");
} }
function BaoCaoTonKhoChungComponent_div_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", info_r76.column.caption, "\n");
} }
function BaoCaoTonKhoChungComponent_div_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", info_r77.column.caption, " ");
} }
function BaoCaoTonKhoChungComponent_div_145_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dx-button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function BaoCaoTonKhoChungComponent_div_145_Template_dx_button_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const data_r78 = ctx.$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.showInfo1(data_r78); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 45);
} }
function BaoCaoTonKhoChungComponent_div_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r81.column.caption);
} }
function BaoCaoTonKhoChungComponent_div_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", info_r82.column.caption, " ");
} }
function BaoCaoTonKhoChungComponent_div_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", info_r83.column.caption, " ");
} }
function BaoCaoTonKhoChungComponent_div_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", info_r84.column.caption, " ");
} }
function BaoCaoTonKhoChungComponent_div_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r85.column.caption);
} }
function BaoCaoTonKhoChungComponent_div_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", info_r86.column.caption, " ");
} }
function BaoCaoTonKhoChungComponent_div_185_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", info_r87.column.caption, " ");
} }
function BaoCaoTonKhoChungComponent_div_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", info_r88.column.caption, " ");
} }
const _c0 = function () { return { of: "#smallDiv" }; };
class BaoCaoTonKhoChungComponent {
    constructor(http, reportService, reportService2, isLoadingService, comboxService, document) {
        this.http = http;
        this.reportService = reportService;
        this.reportService2 = reportService2;
        this.isLoadingService = isLoadingService;
        this.comboxService = comboxService;
        this.document = document;
        this.loadingVisible = false;
        this.totalView = "";
        this.detailView = "hidden";
        this.modelViewDetail = "";
        this.popupDetailVisible = false;
        this.isEmailVisible = false;
        this.KarrHeader = [];
        this.KTarrHeader = [];
        this.arrVisible = [];
        this.arrReportHeader = [];
        this.arrKTReportHeader = [];
        this.arrHeader = [];
        this.popupVisible = false;
        this.popupVisibleDetail = false;
        this.ngayVal = new Date();
        this.buttonOptions = {
            text: "Filter",
            type: "success",
            onClick: function () {
                if (this.innerWidth > 800) {
                    this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung("", "", "", "", "", "");
                    this.reportData1.subscribe(t => { this.reportDataArr1 = t; });
                }
                else {
                    this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung("", "", "", "", "", "");
                    this.reportData1.subscribe(t => { this.reportDataArr1 = t; });
                }
            }
        };
    }
    fillData() {
        var ngays;
        var nam = this.ngayVal.getFullYear().toString();
        var thang = "";
        if (this.ngayVal.getMonth() < 9)
            thang = "0" + (this.ngayVal.getMonth() + 1).toString();
        else
            thang = this.ngayVal.getMonth().toString();
        var ngay = "";
        if (this.ngayVal.getDate() < 10)
            ngay = "0" + this.ngayVal.getDate().toString();
        else
            ngay = this.ngayVal.getDate().toString();
        ngays = nam + thang + ngay;
        this.popupVisible = false;
        this.gridSmall.instance.beginCustomLoading("");
        if (this.innerWidth > 800) {
            this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(this.khoiVal, this.capVal, ngays, "", "", "");
            this.reportData1.subscribe(t => {
                this.reportDataArr1 = t;
                this.gridSmall.instance.endCustomLoading();
            });
        }
        else {
            this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(this.khoiVal, this.capVal, ngays, "", "", "");
            this.reportData1.subscribe(t => {
                this.reportDataArr1 = t;
                this.gridSmall.instance.endCustomLoading();
            });
        }
    }
    showInfo(e) {
        console.log("--------------- show info ---------------");
        // this.totalView = "hidden";
        //this.detailView = "";
        this.popupDetailVisible = true;
    }
    showInfo1(e) {
        //Cấm cười
        var ngays;
        var nam = this.ngayVal.getFullYear().toString();
        var thang = "";
        if (this.ngayVal.getMonth() < 9)
            thang = "0" + (this.ngayVal.getMonth() + 1).toString();
        else
            thang = this.ngayVal.getMonth().toString();
        var ngay = "";
        if (this.ngayVal.getDate() < 10)
            ngay = "0" + this.ngayVal.getDate().toString();
        else
            ngay = this.ngayVal.getDate().toString();
        ngays = nam + thang + ngay;
        //  this.totalView = "hidden";
        // this.detailView = "";
        this.popupDetailVisible = true;
        console.log(e.row.data);
        this.gridDetail.instance.beginCustomLoading('');
        this.reportService.CP_BaoCaoTonKhoChungDetail(this.khoiVal, this.capVal, ngays, "", "", "").subscribe(t => {
            // this.reportDataDetail = t;
            this.reportDataDetail = [
                { "Col1": "TMD", "Col2": e.row.data.K01, "Col3": e.row.data.KT01, "Col4": e.row.data.T01, "Col5": e.row.data.H01, "Col6": e.row.data.F01 },
                { "Col1": "TTX", "Col2": e.row.data.K02, "Col3": e.row.data.KT02, "Col4": e.row.data.T02, "Col5": e.row.data.H01, "Col6": e.row.data.F02 },
                { "Col1": "TTS", "Col2": e.row.data.K03, "Col3": e.row.data.KT03, "Col4": e.row.data.T03, "Col5": e.row.data.H01, "Col6": e.row.data.F03 },
                { "Col1": "TBN", "Col2": e.row.data.K04, "Col3": e.row.data.KT04, "Col4": e.row.data.T04, "Col5": e.row.data.H01, "Col6": e.row.data.F04 },
                { "Col1": "TTS", "Col2": e.row.data.K05, "Col3": e.row.data.KT05, "Col4": e.row.data.T05, "Col5": e.row.data.H01, "Col6": e.row.data.F05 },
                { "Tổng": "TTS", "Col2": e.row.data.TotalK, "Col3": e.row.data.TotalK, "Col4": e.row.data.TotalT, "Col5": e.row.data.TotalH, "Col6": e.row.data.TotalF },
            ];
            this.gridDetail.instance.endCustomLoading();
        });
        /*
      this.reportDataDetail = [
        {"Col1": "TMD", "Col2":e.row.data.K01, "Col3": e.row.data.KT01, "Col4":e.row.data.T01, "Col5": e.row.data.H01,  "Col6" :e.row.data.F01},
        {"Col1": "TTX", "Col2":e.row.data.K02, "Col3": e.row.data.KT02, "Col4":e.row.data.T02, "Col5": e.row.data.H01,  "Col6" :e.row.data.F02},
        {"Col1": "TTS", "Col2":e.row.data.K03, "Col3": e.row.data.KT03, "Col4":e.row.data.T03, "Col5": e.row.data.H01,  "Col6" :e.row.data.F03},
        {"Col1": "TBN", "Col2":e.row.data.K04, "Col3": e.row.data.KT04, "Col4":e.row.data.T04, "Col5": e.row.data.H01,  "Col6" :e.row.data.F04},
        {"Col1": "TTS", "Col2":e.row.data.K05, "Col3": e.row.data.KT05, "Col4":e.row.data.T05, "Col5": e.row.data.H01,  "Col6" :e.row.data.F05},
        {"Tổng": "TTS", "Col2":e.row.data.TotalK, "Col3": e.row.data.TotalK, "Col4":e.row.data.TotalT, "Col5":e.row.data.TotalH, "Col6" :e.row.data.TotalF},
      ];
      */
        /*
          this.reportDataDetail  = [
            { "Col1": "K", "Col2": e.row.data.KT01,"Col3": e.row.data.KT03 ,"Col4": e.row.data.KT04,
            "Col5": e.row.data.KT05,"Col6": e.row.data.KT06,"Col7": e.row.data.KT08,"Col8": e.row.data.TotalK},
        
            { "Col1": "K", "Col2": e.row.data.K01,"Col3": e.row.data.K03 ,"Col4": e.row.data.K04,
            "Col5": e.row.data.K05,"Col6": e.row.data.K06,"Col7": e.row.data.K08,"Col8": e.row.data.TotalK},
        
            { "Col1": "T", "Col2": e.row.data.T01,"Col3": e.row.data.T03 ,"Col4": e.row.data.T04,
            "Col5": e.row.data.T05,"Col6": e.row.data.T06,"Col7": e.row.data.T08,"Col8": e.row.data.TotalT},
            
            { "Col1": "H", "Col2": e.row.data.H01,"Col3": e.row.data.H03 ,"Col4": e.row.data.H04,
            "Col5": e.row.data.H05,"Col6": e.row.data.H06,"Col7": e.row.data.H08,"Col8": e.row.data.TotalH},
        
            { "Col1": "F", "Col2": e.row.data.F01,"Col3": e.row.data.F03 ,"Col4": e.row.data.F04,
            "Col5": e.row.data.F05,"Col6": e.row.data.F06,"Col7": e.row.data.F08,"Col8": e.row.data.TotalF},
        
        
          ];
          */
    }
    closeDetail() {
        this.popupDetailVisible = false;
    }
    showFilter() {
        this.popupVisible = true;
    }
    close() {
        this.popupVisible = false;
    }
    openFullscreen() {
        if (this.elem.requestFullscreen) {
            this.elem.requestFullscreen();
        }
        else if (this.elem.mozRequestFullScreen) {
            /* Firefox */
            this.elem.mozRequestFullScreen();
        }
        else if (this.elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            this.elem.webkitRequestFullscreen();
        }
        else if (this.elem.msRequestFullscreen) {
            /* IE/Edge */
            this.elem.msRequestFullscreen();
        }
    }
    ngOnInit() {
        this.elem = document.documentElement;
        this.openFullscreen();
        this.innerWidth = window.innerWidth;
        this.popupWidth = this.innerWidth - 10;
        this.popupHeight = window.innerHeight - 20;
        if (this.innerWidth > 800) {
            this.reportData1 = this.reportService.CP_BaoCaoTonKhoChungHeader("CP_WKPI_BE_01", "TOYOTA", "h");
            this.reportData1.subscribe(t => {
                this.arrReportHeader = t;
                this.arrReportHeader.forEach(element => {
                    this.KarrHeader.push(element.TenCot);
                    this.arrVisible.push(element.mVisible == 'True');
                });
            });
            this.reportData1 = this.reportService2.CP_BaoCaoTonKhoChungHeader("CP_WKPI_BE_01", "TOYOTA", "kt");
            this.reportData1.subscribe(t => {
                this.arrKTReportHeader = t;
                this.arrKTReportHeader.forEach(element => {
                    this.KTarrHeader.push(element.TenCot);
                });
                console.log(this.KTarrHeader);
            });
        }
        /*
        this.isLoadingService.add(
          this.comboxService.GetComboxFunction('DanhMucKhoi_NhomDonVICOSo').subscribe(
          t => {
            this.capCbxd = t;
          }
         )
        );
        */
        this.comboxService.GetComboxFunction('DanhMucKhoi_NhomDonVICOSo').subscribe(t => {
            this.donViCoSos = t;
        });
        this.comboxService.GetComboxFunction('VCapXemBaoCao').subscribe(t => {
            this.capCbxd = t;
        });
        /*
        this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(
          "","","","","",""
         );
        this.reportData1.subscribe(t =>
          {
            this.reportDataArr1 = t;
     
    
          }
          );
        */
    }
    onCellPrepared(e) {
        if (e.rowType === "data" &&
            (e.column.dataField === "TotalT"
                || e.column.dataField === "TotalH"
                || e.column.dataField === "TotalK"
                || e.column.dataField === "TotalF")) {
            e.cellElement.style.background = "CYAN";
        }
    }
    onRowPrepared(e) {
        if (e.rowType == 'data') {
            if (e.data.BackColor == "YELOW") {
                e.rowElement.style.backgroundColor = 'yellow';
            }
            else if (e.data.BackColor == "PINK") {
                e.rowElement.style.backgroundColor = 'PINK';
            }
            else if (e.data.BackColor == "CYAN") {
                e.rowElement.style.backgroundColor = 'CYAN';
            }
            else if (e.data.BackColor == "GOLD") {
                e.rowElement.style.backgroundColor = 'GOLD';
            }
        }
    }
}
BaoCaoTonKhoChungComponent.ɵfac = function BaoCaoTonKhoChungComponent_Factory(t) { return new (t || BaoCaoTonKhoChungComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_work_is_loading__WEBPACK_IMPORTED_MODULE_5__["IsLoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_combox_service__WEBPACK_IMPORTED_MODULE_6__["ComboxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
BaoCaoTonKhoChungComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaoCaoTonKhoChungComponent, selectors: [["app-bao-cao-ton-kho-chung"]], viewQuery: function BaoCaoTonKhoChungComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gridSmall = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gridDetail = _t.first);
    } }, decls: 191, vars: 185, consts: [[1, "w3-display-container", "w3-deep-orange", 2, "height", "45px"], [1, "w3-display-left"], [1, "w3-display-right"], ["text", "Filter", 1, "button-info", 3, "onClick"], [1, "w3-hide-medium", "w3-hide-small"], ["id", "gridLarge", "keyExpr", "Stt_WEB", 1, "dx-card", "wide-card", 3, "showColumnHeaders", "dataSource", "showBorders", "focusedRowEnabled", "focusedRowIndex", "columnHidingEnabled", "columnAutoWidth", "showColumnLines", "showRowLines", "repaintChangesOnly", "rowAlternationEnabled", "onRowPrepared", "onCellPrepared"], [3, "visible"], [3, "enabled"], ["mode", "standard"], ["mode", "none"], ["dataField", "Ma_so", "caption", "M\u00E3 s\u1ED1", "headerCellTemplate", "addressHeaderTemplate", 3, "width"], ["caption", "Xe c\u00F2n k\u00FD", "headerCellTemplate", "titleHeaderTemplate2"], ["dataField", "K01", "headerCellTemplate", "KTitleTpl1", 3, "visible", "visibleChange"], ["dataField", "KT01", "headerCellTemplate", "KTTitleTpl1", 3, "visible", "visibleChange"], ["dataField", "K02", "headerCellTemplate", "KTitleTpl2", 3, "visible", "visibleChange"], ["dataField", "KT02", "headerCellTemplate", "KTTitleTpl2", 3, "visible", "visibleChange"], ["dataField", "K03", "headerCellTemplate", "KTitleTpl3", 3, "visible", "visibleChange"], ["dataField", "KT03", "headerCellTemplate", "KTTitleTpl3", 3, "visible", "visibleChange"], ["dataField", "K04", "headerCellTemplate", "KTitleTpl4", 3, "visible", "visibleChange"], ["dataField", "KT04", "headerCellTemplate", "KTTitleTpl4", 3, "visible", "visibleChange"], ["dataField", "K05", "headerCellTemplate", "KTitleTpl5", 3, "visible", "visibleChange"], ["dataField", "KT05", "headerCellTemplate", "KTTitleTpl5", 3, "visible", "visibleChange"], ["dataField", "K06", "headerCellTemplate", "KTitleTpl6", 3, "visible", "visibleChange"], ["dataField", "KT06", "headerCellTemplate", "KTTitleTpl6", 3, "visible", "visibleChange"], ["dataField", "K07", "headerCellTemplate", "KTitleTpl7", 3, "visible", "visibleChange"], ["dataField", "KT07", "headerCellTemplate", "KTTitleTpl7", 3, "visible", "visibleChange"], ["dataField", "K08", "headerCellTemplate", "KTitleTpl8", 3, "visible", "visibleChange"], ["dataField", "KT08", "headerCellTemplate", "KTTitleTpl8", 3, "visible", "visibleChange"], ["dataField", "K09", "headerCellTemplate", "KTitleTpl9", 3, "visible", "visibleChange"], ["dataField", "KT09", "headerCellTemplate", "KTTitleTpl9", 3, "visible", "visibleChange"], ["dataField", "K10", "headerCellTemplate", "KTitleTpl10", 3, "visible", "visibleChange"], ["dataField", "KT10", "headerCellTemplate", "KTTitleTpl10", 3, "visible", "visibleChange"], ["dataField", "K11", "headerCellTemplate", "KTitleTpl11", 3, "visible", "visibleChange"], ["dataField", "KT11", "headerCellTemplate", "KTTitleTpl11", 3, "visible", "visibleChange"], ["dataField", "K12", "headerCellTemplate", "KTitleTpl12", 3, "visible", "visibleChange"], ["dataField", "KT12", "headerCellTemplate", "KTTitleTpl12", 3, "visible", "visibleChange"], ["dataField", "K13", "headerCellTemplate", "KTitleTpl13", 3, "visible", "visibleChange"], ["dataField", "KT13", "headerCellTemplate", "KTTitleTpl13", 3, "visible", "visibleChange"], ["dataField", "K14", "headerCellTemplate", "KTitleTpl14", 3, "visible", "visibleChange"], ["dataField", "KT14", "headerCellTemplate", "KTTitleTpl14", 3, "visible", "visibleChange"], ["dataField", "K15", "headerCellTemplate", "KTitleTpl15", 3, "visible", "visibleChange"], ["dataField", "KT15", "headerCellTemplate", "KTTitleTpl15", 3, "visible", "visibleChange"], ["dataField", "TotalK", "caption", "Total", "headerCellTemplate", "addressHeaderTemplate"], ["caption", "T\u1ED3n th\u1EF1c t\u1EBF", "headerCellTemplate", "titleHeaderTemplate2"], ["dataField", "T01", "headerCellTemplate", "KTitleTpl1", 3, "visible", "visibleChange"], ["dataField", "T02", "headerCellTemplate", "KTitleTpl2", 3, "visible", "visibleChange"], ["dataField", "T03", "headerCellTemplate", "KTitleTpl3", 3, "visible", "visibleChange"], ["dataField", "T04", "headerCellTemplate", "KTitleTpl4", 3, "visible", "visibleChange"], ["dataField", "T05", "headerCellTemplate", "KTitleTpl5", 3, "visible", "visibleChange"], ["dataField", "T06", "headerCellTemplate", "KTitleTpl6", 3, "visible", "visibleChange"], ["dataField", "T07", "headerCellTemplate", "KTitleTpl7", 3, "visible", "visibleChange"], ["dataField", "T08", "headerCellTemplate", "KTitleTpl8", 3, "visible", "visibleChange"], ["dataField", "T09", "headerCellTemplate", "KTitleTpl9", 3, "visible", "visibleChange"], ["dataField", "T10", "headerCellTemplate", "KTitleTpl10", 3, "visible", "visibleChange"], ["dataField", "T11", "headerCellTemplate", "KTitleTpl11", 3, "visible", "visibleChange"], ["dataField", "T12", "headerCellTemplate", "KTitleTpl12", 3, "visible", "visibleChange"], ["dataField", "T13", "headerCellTemplate", "KTitleTpl13", 3, "visible", "visibleChange"], ["dataField", "T14", "headerCellTemplate", "KTitleTpl14", 3, "visible", "visibleChange"], ["dataField", "T15", "headerCellTemplate", "KTitleTpl15", 3, "visible", "visibleChange"], ["dataField", "TotalT", "caption", "Total", "headerCellTemplate", "addressHeaderTemplate"], ["caption", "C\u00F2n k\u00FD th\u00E1ng N+1", "headerCellTemplate", "titleHeaderTemplate2"], ["dataField", "H01", "headerCellTemplate", "KTitleTpl1", 3, "visible", "visibleChange"], ["dataField", "H02", "headerCellTemplate", "KTitleTpl2", 3, "visible", "visibleChange"], ["dataField", "H03", "headerCellTemplate", "KTitleTpl3", 3, "visible", "visibleChange"], ["dataField", "H04", "headerCellTemplate", "KTitleTpl4", 3, "visible", "visibleChange"], ["dataField", "H05", "headerCellTemplate", "KTitleTpl5", 3, "visible", "visibleChange"], ["dataField", "H06", "headerCellTemplate", "KTitleTpl6", 3, "visible", "visibleChange"], ["dataField", "H07", "headerCellTemplate", "KTitleTpl7", 3, "visible", "visibleChange"], ["dataField", "H08", "headerCellTemplate", "KTitleTpl8", 3, "visible", "visibleChange"], ["dataField", "H09", "headerCellTemplate", "KTitleTpl9", 3, "visible", "visibleChange"], ["dataField", "H10", "headerCellTemplate", "KTitleTpl10", 3, "visible", "visibleChange"], ["dataField", "H11", "headerCellTemplate", "KTitleTpl11", 3, "visible", "visibleChange"], ["dataField", "H12", "headerCellTemplate", "KTitleTpl12", 3, "visible", "visibleChange"], ["dataField", "H13", "headerCellTemplate", "KTitleTpl13", 3, "visible", "visibleChange"], ["dataField", "H14", "headerCellTemplate", "KTitleTpl14", 3, "visible", "visibleChange"], ["dataField", "H15", "headerCellTemplate", "KTitleTpl15", 3, "visible", "visibleChange"], ["dataField", "TotalH", "caption", "Total", "headerCellTemplate", "addressHeaderTemplate"], ["caption", "C\u00F2n k\u00FD th\u00E1ng N+2", "headerCellTemplate", "titleHeaderTemplate2"], ["dataField", "F01", "headerCellTemplate", "KTitleTpl1", 3, "visible", "visibleChange"], ["dataField", "F02", "headerCellTemplate", "KTitleTpl2", 3, "visible", "visibleChange"], ["dataField", "F03", "headerCellTemplate", "KTitleTpl3", 3, "visible", "visibleChange"], ["dataField", "F04", "headerCellTemplate", "KTitleTpl4", 3, "visible", "visibleChange"], ["dataField", "F05", "headerCellTemplate", "KTitleTpl5", 3, "visible", "visibleChange"], ["dataField", "F06", "headerCellTemplate", "KTitleTpl6", 3, "visible", "visibleChange"], ["dataField", "F07", "headerCellTemplate", "KTitleTpl7", 3, "visible", "visibleChange"], ["dataField", "F08", "headerCellTemplate", "KTitleTpl8", 3, "visible", "visibleChange"], ["dataField", "F09", "headerCellTemplate", "KTitleTpl9", 3, "visible", "visibleChange"], ["dataField", "F10", "headerCellTemplate", "KTitleTpl10", 3, "visible", "visibleChange"], ["dataField", "F11", "headerCellTemplate", "KTitleTpl11", 3, "visible", "visibleChange"], ["dataField", "F12", "headerCellTemplate", "KTitleTpl12", 3, "visible", "visibleChange"], ["dataField", "F13", "headerCellTemplate", "KTitleTpl13", 3, "visible", "visibleChange"], ["dataField", "F14", "headerCellTemplate", "KTitleTpl14", 3, "visible", "visibleChange"], ["dataField", "F15", "headerCellTemplate", "KTitleTpl15", 3, "visible", "visibleChange"], ["dataField", "TotalF", "caption", "Total", "headerCellTemplate", "addressHeaderTemplate"], [4, "dxTemplate", "dxTemplateOf"], ["style", "color: rgb(0, 0, 0); white-space : normal;font-size:11px;", 4, "dxTemplate", "dxTemplateOf"], ["style", "font-size:16px;  text-align: center; white-space: normal; color: red;", 4, "dxTemplate", "dxTemplateOf"], ["style", "font-size:12px; text-align: center; white-space: normal;", 4, "dxTemplate", "dxTemplateOf"], [1, "w3-hide-large"], ["id", "gridSmall", "keyExpr", "Stt_WEB", 1, "dx-card", "wide-card", 3, "showColumnHeaders", "dataSource", "showBorders", "focusedRowEnabled", "focusedRowIndex", "columnHidingEnabled", "columnAutoWidth", "showColumnLines", "showRowLines", "repaintChangesOnly", "rowAlternationEnabled", "onRowPrepared"], ["dataField", "TotalK", "caption", "K\u00FD", "headerCellTemplate", "addressHeaderTemplate"], ["dataField", "TotalKT", "caption", "KT", "headerCellTemplate", "addressHeaderTemplate"], ["dataField", "TotalT", "caption", "T\u1ED3n", "headerCellTemplate", "addressHeaderTemplate"], ["dataField", "TotalH", "caption", "N+1", "headerCellTemplate", "addressHeaderTemplate"], ["dataField", "TotalF", "caption", "N+2", "headerCellTemplate", "addressHeaderTemplate"], ["type", "buttons", 3, "width"], ["template", "myCommand"], ["style", "color:Tomato;font-size:50px;  text-align: left; white-space: normal;", 4, "dxTemplate", "dxTemplateOf"], [1, "w3-display-middle", "w3-panel", "w3-border", "w3-border-red"], ["maxWidth", "600", "title", "Filter", 3, "showTitle", "dragEnabled", "closeOnOutsideClick", "visible", "visibleChange"], [1, "dx-fieldset"], [1, "dx-field"], [1, "dx-field-label"], [1, "dx-field-value"], ["type", "date", 3, "value"], ["displayExpr", "ten_nh", "valueExpr", "ma_nh", 3, "dataSource", "value", "valueChange"], ["displayExpr", "Ten", "valueExpr", "Ma", 3, "dataSource", "value", "valueChange"], [2, "position", "absolute", "right", "50px", "bottom", "10px"], ["with", "200", "text", "   Ok  ", 1, "button-info", 3, "onClick"], [2, "position", "absolute", "right", "150px", "bottom", "10px"], ["text", "Cancel", 1, "button-info", 3, "onClick"], ["title", "Chi ti\u1EBFt", 3, "width", "height", "showTitle", "dragEnabled", "closeOnOutsideClick", "visible", "widthChange", "heightChange", "visibleChange"], [2, "color", "rgb(241, 82, 9)"], ["id", "gridDetail", 3, "showColumnHeaders", "dataSource", "showBorders", "focusedRowEnabled", "focusedRowIndex", "columnHidingEnabled", "columnAutoWidth", "showColumnLines", "showRowLines", "repaintChangesOnly", "rowAlternationEnabled", "onRowPrepared", "onCellPrepared"], ["dataField", "Col1", "caption", "\u0110V", "headerCellTemplate", "addressHeaderTemplate"], ["dataField", "Col2", "caption", "K\u00FD", "headerCellTemplate", "addressHeaderTemplate"], ["dataField", "Col3", "caption", "KT", "headerCellTemplate", "addressHeaderTemplate"], ["dataField", "Col4", "caption", "T\u1ED3n", "headerCellTemplate", "addressHeaderTemplate"], ["dataField", "Col5", "caption", "N+1", "headerCellTemplate", "addressHeaderTemplate"], ["dataField", "Col6", "caption", "N+2", "headerCellTemplate", "addressHeaderTemplate"], ["style", "font-size:16px;  text-align: center; white-space: normal;", 4, "dxTemplate", "dxTemplateOf"], [2, "position", "absolute", "right", "10px", "bottom", "10px"], ["icon", "arrowleft", 1, "button-info", 3, "onClick"], ["shadingColor", "rgba(0,0,0,0.4)", 3, "position", "visible", "showIndicator", "showPane", "shading", "closeOnOutsideClick", "visibleChange"], ["loadPanel", ""], [2, "font-size", "16px"], [2, "color", "rgb(0, 0, 0)", "white-space", "normal", "font-size", "11px"], [2, "font-size", "16px", "text-align", "center", "white-space", "normal", "color", "red"], [2, "font-size", "12px", "text-align", "center", "white-space", "normal"], ["icon", "arrowright", 1, "button-info", 3, "width", "onClick"], [2, "color", "Tomato", "font-size", "50px", "text-align", "left", "white-space", "normal"], [2, "font-size", "16px", "text-align", "center", "white-space", "normal"]], template: function BaoCaoTonKhoChungComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "T\u1ED3n kho chung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "dx-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function BaoCaoTonKhoChungComponent_Template_dx_button_onClick_5_listener() { return ctx.showFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "dx-data-grid", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onRowPrepared", function BaoCaoTonKhoChungComponent_Template_dx_data_grid_onRowPrepared_7_listener($event) { return ctx.onRowPrepared($event); })("onCellPrepared", function BaoCaoTonKhoChungComponent_Template_dx_data_grid_onCellPrepared_7_listener($event) { return ctx.onCellPrepared($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dxo-filter-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "dxo-paging", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "dxo-scrolling", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dxo-sorting", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dxi-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "dxi-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "dxi-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_14_listener($event) { return (ctx.arrVisible[0] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "dxi-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_15_listener($event) { return (ctx.arrVisible[0] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "dxi-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_16_listener($event) { return (ctx.arrVisible[1] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "dxi-column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_17_listener($event) { return (ctx.arrVisible[1] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "dxi-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_18_listener($event) { return (ctx.arrVisible[2] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "dxi-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_19_listener($event) { return (ctx.arrVisible[2] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "dxi-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_20_listener($event) { return (ctx.arrVisible[3] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "dxi-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_21_listener($event) { return (ctx.arrVisible[3] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "dxi-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_22_listener($event) { return (ctx.arrVisible[4] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "dxi-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_23_listener($event) { return (ctx.arrVisible[4] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "dxi-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_24_listener($event) { return (ctx.arrVisible[5] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "dxi-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_25_listener($event) { return (ctx.arrVisible[5] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "dxi-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_26_listener($event) { return (ctx.arrVisible[6] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "dxi-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_27_listener($event) { return (ctx.arrVisible[6] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "dxi-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_28_listener($event) { return (ctx.arrVisible[7] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "dxi-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_29_listener($event) { return (ctx.arrVisible[7] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "dxi-column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_30_listener($event) { return (ctx.arrVisible[8] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "dxi-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_31_listener($event) { return (ctx.arrVisible[8] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "dxi-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_32_listener($event) { return (ctx.arrVisible[9] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "dxi-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_33_listener($event) { return (ctx.arrVisible[9] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "dxi-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_34_listener($event) { return (ctx.arrVisible[10] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "dxi-column", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_35_listener($event) { return (ctx.arrVisible[10] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "dxi-column", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_36_listener($event) { return (ctx.arrVisible[11] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "dxi-column", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_37_listener($event) { return (ctx.arrVisible[11] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "dxi-column", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_38_listener($event) { return (ctx.arrVisible[12] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "dxi-column", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_39_listener($event) { return (ctx.arrVisible[12] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "dxi-column", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_40_listener($event) { return (ctx.arrVisible[13] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "dxi-column", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_41_listener($event) { return (ctx.arrVisible[13] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "dxi-column", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_42_listener($event) { return (ctx.arrVisible[14] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "dxi-column", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_43_listener($event) { return (ctx.arrVisible[14] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "dxi-column", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "dxi-column", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "dxi-column", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_46_listener($event) { return (ctx.arrVisible[0] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "dxi-column", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_47_listener($event) { return (ctx.arrVisible[1] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "dxi-column", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_48_listener($event) { return (ctx.arrVisible[2] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "dxi-column", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_49_listener($event) { return (ctx.arrVisible[3] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "dxi-column", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_50_listener($event) { return (ctx.arrVisible[4] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "dxi-column", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_51_listener($event) { return (ctx.arrVisible[5] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "dxi-column", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_52_listener($event) { return (ctx.arrVisible[6] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "dxi-column", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_53_listener($event) { return (ctx.arrVisible[7] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "dxi-column", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_54_listener($event) { return (ctx.arrVisible[8] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "dxi-column", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_55_listener($event) { return (ctx.arrVisible[9] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "dxi-column", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_56_listener($event) { return (ctx.arrVisible[10] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "dxi-column", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_57_listener($event) { return (ctx.arrVisible[11] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "dxi-column", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_58_listener($event) { return (ctx.arrVisible[12] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "dxi-column", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_59_listener($event) { return (ctx.arrVisible[13] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "dxi-column", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_60_listener($event) { return (ctx.arrVisible[14] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "dxi-column", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "dxi-column", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "dxi-column", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_63_listener($event) { return (ctx.arrVisible[0] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "dxi-column", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_64_listener($event) { return (ctx.arrVisible[1] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "dxi-column", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_65_listener($event) { return (ctx.arrVisible[2] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "dxi-column", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_66_listener($event) { return (ctx.arrVisible[3] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "dxi-column", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_67_listener($event) { return (ctx.arrVisible[4] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "dxi-column", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_68_listener($event) { return (ctx.arrVisible[5] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "dxi-column", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_69_listener($event) { return (ctx.arrVisible[6] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "dxi-column", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_70_listener($event) { return (ctx.arrVisible[7] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "dxi-column", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_71_listener($event) { return (ctx.arrVisible[8] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "dxi-column", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_72_listener($event) { return (ctx.arrVisible[9] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "dxi-column", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_73_listener($event) { return (ctx.arrVisible[10] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "dxi-column", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_74_listener($event) { return (ctx.arrVisible[11] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "dxi-column", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_75_listener($event) { return (ctx.arrVisible[12] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "dxi-column", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_76_listener($event) { return (ctx.arrVisible[13] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "dxi-column", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_77_listener($event) { return (ctx.arrVisible[14] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "dxi-column", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "dxi-column", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "dxi-column", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_80_listener($event) { return (ctx.arrVisible[0] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "dxi-column", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_81_listener($event) { return (ctx.arrVisible[1] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "dxi-column", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_82_listener($event) { return (ctx.arrVisible[2] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "dxi-column", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_83_listener($event) { return (ctx.arrVisible[3] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "dxi-column", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_84_listener($event) { return (ctx.arrVisible[4] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "dxi-column", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_85_listener($event) { return (ctx.arrVisible[5] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "dxi-column", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_86_listener($event) { return (ctx.arrVisible[6] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "dxi-column", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_87_listener($event) { return (ctx.arrVisible[7] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "dxi-column", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_88_listener($event) { return (ctx.arrVisible[8] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "dxi-column", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_89_listener($event) { return (ctx.arrVisible[9] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "dxi-column", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_90_listener($event) { return (ctx.arrVisible[10] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "dxi-column", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_91_listener($event) { return (ctx.arrVisible[11] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "dxi-column", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_92_listener($event) { return (ctx.arrVisible[12] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "dxi-column", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_93_listener($event) { return (ctx.arrVisible[13] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "dxi-column", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dxi_column_visibleChange_94_listener($event) { return (ctx.arrVisible[14] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "dxi-column", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, BaoCaoTonKhoChungComponent_div_96_Template, 3, 1, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, BaoCaoTonKhoChungComponent_div_97_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, BaoCaoTonKhoChungComponent_div_98_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, BaoCaoTonKhoChungComponent_div_99_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, BaoCaoTonKhoChungComponent_div_100_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, BaoCaoTonKhoChungComponent_div_101_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, BaoCaoTonKhoChungComponent_div_102_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, BaoCaoTonKhoChungComponent_div_103_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, BaoCaoTonKhoChungComponent_div_104_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, BaoCaoTonKhoChungComponent_div_105_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, BaoCaoTonKhoChungComponent_div_106_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, BaoCaoTonKhoChungComponent_div_107_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, BaoCaoTonKhoChungComponent_div_108_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, BaoCaoTonKhoChungComponent_div_109_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, BaoCaoTonKhoChungComponent_div_110_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, BaoCaoTonKhoChungComponent_div_111_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, BaoCaoTonKhoChungComponent_div_112_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, BaoCaoTonKhoChungComponent_div_113_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, BaoCaoTonKhoChungComponent_div_114_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, BaoCaoTonKhoChungComponent_div_115_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, BaoCaoTonKhoChungComponent_div_116_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, BaoCaoTonKhoChungComponent_div_117_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, BaoCaoTonKhoChungComponent_div_118_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, BaoCaoTonKhoChungComponent_div_119_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, BaoCaoTonKhoChungComponent_div_120_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, BaoCaoTonKhoChungComponent_div_121_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, BaoCaoTonKhoChungComponent_div_122_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, BaoCaoTonKhoChungComponent_div_123_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, BaoCaoTonKhoChungComponent_div_124_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, BaoCaoTonKhoChungComponent_div_125_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, BaoCaoTonKhoChungComponent_div_126_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, BaoCaoTonKhoChungComponent_div_127_Template, 2, 1, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, BaoCaoTonKhoChungComponent_div_128_Template, 2, 1, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, BaoCaoTonKhoChungComponent_div_129_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "dx-data-grid", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onRowPrepared", function BaoCaoTonKhoChungComponent_Template_dx_data_grid_onRowPrepared_132_listener($event) { return ctx.onRowPrepared($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "dxo-filter-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "dxo-paging", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "dxo-scrolling", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "dxo-sorting", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "dxi-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "dxi-column", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "dxi-column", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "dxi-column", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "dxi-column", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "dxi-column", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "dxi-column", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "dxi-button", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](145, BaoCaoTonKhoChungComponent_div_145_Template, 2, 1, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](146, BaoCaoTonKhoChungComponent_div_146_Template, 3, 1, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, BaoCaoTonKhoChungComponent_div_147_Template, 2, 1, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](148, BaoCaoTonKhoChungComponent_div_148_Template, 2, 1, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, BaoCaoTonKhoChungComponent_div_149_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "dx-popup", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dx_popup_visibleChange_151_listener($event) { return ctx.popupVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "dx-date-box", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Default mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "dx-select-box", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function BaoCaoTonKhoChungComponent_Template_dx_select_box_valueChange_162_listener($event) { return ctx.khoiVal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Default mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "dx-select-box", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function BaoCaoTonKhoChungComponent_Template_dx_select_box_valueChange_167_listener($event) { return ctx.capVal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "dx-button", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function BaoCaoTonKhoChungComponent_Template_dx_button_onClick_169_listener() { return ctx.fillData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "dx-button", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function BaoCaoTonKhoChungComponent_Template_dx_button_onClick_171_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "dx-popup", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("widthChange", function BaoCaoTonKhoChungComponent_Template_dx_popup_widthChange_172_listener($event) { return ctx.popupWidth = $event; })("heightChange", function BaoCaoTonKhoChungComponent_Template_dx_popup_heightChange_172_listener($event) { return ctx.popupHeight = $event; })("visibleChange", function BaoCaoTonKhoChungComponent_Template_dx_popup_visibleChange_172_listener($event) { return ctx.popupDetailVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h4", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "dx-data-grid", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onRowPrepared", function BaoCaoTonKhoChungComponent_Template_dx_data_grid_onRowPrepared_176_listener($event) { return ctx.onRowPrepared($event); })("onCellPrepared", function BaoCaoTonKhoChungComponent_Template_dx_data_grid_onCellPrepared_176_listener($event) { return ctx.onCellPrepared($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "dxi-column", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "dxi-column", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "dxi-column", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "dxi-column", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "dxi-column", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "dxi-column", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](183, BaoCaoTonKhoChungComponent_div_183_Template, 3, 1, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](184, BaoCaoTonKhoChungComponent_div_184_Template, 2, 1, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](185, BaoCaoTonKhoChungComponent_div_185_Template, 2, 1, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](186, BaoCaoTonKhoChungComponent_div_186_Template, 2, 1, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "dx-button", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function BaoCaoTonKhoChungComponent_Template_dx_button_onClick_188_listener() { return ctx.closeDetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "dx-load-panel", 133, 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChungComponent_Template_dx_load_panel_visibleChange_189_listener($event) { return ctx.loadingVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showColumnHeaders", true)("dataSource", ctx.reportDataArr1)("showBorders", true)("focusedRowEnabled", false)("focusedRowIndex", 0)("columnHidingEnabled", false)("columnAutoWidth", true)("showColumnLines", true)("showRowLines", true)("repaintChangesOnly", true)("rowAlternationEnabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enabled", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[5]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[5]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[7]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[7]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[8]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[8]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[9]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[9]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[10]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[10]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[11]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[11]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[12]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[12]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[13]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[13]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[14]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[14]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[5]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[7]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[8]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[9]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[10]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[11]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[12]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[13]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[14]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[5]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[7]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[8]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[9]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[10]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[11]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[12]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[13]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[14]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[5]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[7]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[8]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[9]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[10]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[11]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[12]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[13]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.arrVisible[14]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTitleTpl1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTitleTpl2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTitleTpl3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTitleTpl4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTitleTpl5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTitleTpl6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTitleTpl7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTitleTpl8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTitleTpl9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTitleTpl10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTitleTpl11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTitleTpl12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTitleTpl13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTitleTpl14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTitleTpl15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTTitleTpl1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTTitleTpl2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTTitleTpl3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTTitleTpl4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTTitleTpl5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTTitleTpl6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTTitleTpl7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTTitleTpl8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTTitleTpl9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTTitleTpl10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTTitleTpl11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTTitleTpl12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTTitleTpl13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTTitleTpl14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "KTTitleTpl15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "addressHeaderTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.totalView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showColumnHeaders", true)("dataSource", ctx.reportDataArr1)("showBorders", true)("focusedRowEnabled", false)("focusedRowIndex", 0)("columnHidingEnabled", false)("columnAutoWidth", true)("showColumnLines", true)("showRowLines", true)("repaintChangesOnly", true)("rowAlternationEnabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enabled", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "myCommand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "addressHeaderTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.detailView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showTitle", true)("dragEnabled", false)("closeOnOutsideClick", false)("visible", ctx.popupVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.ngayVal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.donViCoSos)("value", ctx.khoiVal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.capCbxd)("value", ctx.capVal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.popupWidth)("height", ctx.popupHeight)("showTitle", true)("dragEnabled", false)("closeOnOutsideClick", false)("visible", ctx.popupDetailVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modelViewDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showColumnHeaders", true)("dataSource", ctx.reportDataDetail)("showBorders", true)("focusedRowEnabled", false)("focusedRowIndex", 0)("columnHidingEnabled", false)("columnAutoWidth", true)("showColumnLines", true)("showRowLines", true)("repaintChangesOnly", true)("rowAlternationEnabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dxTemplateOf", "addressHeaderTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](184, _c0))("visible", ctx.loadingVisible)("showIndicator", true)("showPane", true)("shading", true)("closeOnOutsideClick", false);
    } }, directives: [devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_7__["DxButtonComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxoFilterRowComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxoPagingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxoScrollingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxoSortingComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxiColumnComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_9__["DxTemplateDirective"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxiButtonComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxPopupComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDateBoxComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxSelectBoxComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxLoadPanelComponent"]], styles: ["#grid {\n  max-height: 750px;\n}\n\n .dx-data-row td {\n  color: black;\n}\n\n .dx-datagrid-headers .cls {\n  white-space: normal;\n  color: #e23509;\n  text-align: center;\n  font-family: \"Courier New\", Courier, monospace;\n  font-size: small;\n  padding: 160px;\n  margin-top: 100px;\n  white-space: normal;\n}\n\n .dx-datagrid-headers .cls2 {\n  color: #e23509;\n  text-align: center;\n  font-family: \"Courier New\", Courier, monospace;\n  font-size: large;\n}\n\n.myPopover[_ngcontent-%COMP%]   .dx-popup-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n .dx-popup-content {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxiYW8tY2FvLXRvbi1raG8tY2h1bmczXFxiYW8tY2FvLXRvbi1raG8tY2h1bmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFLQTtFQUNJLFVBQUE7QUFGSjs7QUFLQTtFQUNBLFlBQUE7QUFGQSIsImZpbGUiOiJiYW8tY2FvLXRvbi1raG8tY2h1bmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgI2dyaWQge1xyXG4gICAgbWF4LWhlaWdodDogNzUwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5keC1kYXRhLXJvdyB0ZCB7ICBcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7ICBcclxufSAgXHJcblxyXG5cclxuOjpuZy1kZWVwLmR4LWRhdGFncmlkLWhlYWRlcnMgLmNscyB7ICBcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7ICBcclxuICAgIGNvbG9yOnJnYigyMjYsIDUzLCA5KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IHNtYWxsOyBcclxuICAgIHBhZGRpbmc6IDE2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZSA6IG5vcm1hbDtcclxufSAgXHJcblxyXG5cclxuOjpuZy1kZWVwLmR4LWRhdGFncmlkLWhlYWRlcnMgLmNsczIgeyAgXHJcbiAgICBjb2xvcjpyZ2IoMjI2LCA1MywgOSk7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IGxhcmdlOyBcclxufSAgXHJcblxyXG5cclxuLm15UG9wb3ZlciAuZHgtcG9wdXAtY29udGVudCB7ICBcclxuICAgIHBhZGRpbmc6IDA7ICBcclxufSBcclxuXHJcbjo6bmctZGVlcC5keC1wb3B1cC1jb250ZW50IHtcclxucGFkZGluZzogNXB4O1xyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaoCaoTonKhoChungComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bao-cao-ton-kho-chung',
                templateUrl: './bao-cao-ton-kho-chung.component.html',
                styleUrls: ['./bao-cao-ton-kho-chung.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }, { type: src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }, { type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_5__["IsLoadingService"] }, { type: src_app_combox_service__WEBPACK_IMPORTED_MODULE_6__["ComboxService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { gridSmall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"], { static: false }]
        }], gridDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"], { static: false }]
        }] }); })();


/***/ }),

/***/ "hVAu":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/change-password-form/change-password-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ChangePasswordFormComponent, ChangePasswordFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordFormComponent", function() { return ChangePasswordFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordFormModule", function() { return ChangePasswordFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/form */ "k8YA");
/* harmony import */ var devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/load-indicator */ "X/xX");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme/ui/notify */ "pxlC");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services */ "ZF+8");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");















function ChangePasswordFormComponent_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "dx-load-indicator", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", true);
} }
function ChangePasswordFormComponent_ng_container_11_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Continue");
} }
function ChangePasswordFormComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ChangePasswordFormComponent_ng_container_11_ng_container_2_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ChangePasswordFormComponent_ng_container_11_ng_template_3_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loading)("ngIfElse", _r3);
} }
const _c0 = function () { return { stylingMode: "filled", placeholder: "Password", mode: "password" }; };
const _c1 = function () { return { stylingMode: "filled", placeholder: "Confirm Password", mode: "password" }; };
class ChangePasswordFormComponent {
    constructor(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.loading = false;
        this.formData = {};
        this.confirmPassword = (e) => {
            return e.value === this.formData.password;
        };
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.recoveryCode = params.get('recoveryCode');
        });
    }
    onSubmit(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            const { password } = this.formData;
            this.loading = true;
            const result = yield this.authService.changePassword(password, this.recoveryCode);
            this.loading = false;
            if (result.isOk) {
                this.router.navigate(['/login-form']);
            }
            else {
                devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6___default()(result.message, 'error', 2000);
            }
        });
    }
}
ChangePasswordFormComponent.ɵfac = function ChangePasswordFormComponent_Factory(t) { return new (t || ChangePasswordFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ChangePasswordFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChangePasswordFormComponent, selectors: [["app-change-passsword-form"]], decls: 12, vars: 12, consts: [[3, "submit"], [3, "formData", "disabled"], ["dataField", "password", "editorType", "dxTextBox", 3, "editorOptions"], ["type", "required", "message", "Password is required"], [3, "visible"], ["dataField", "confirmedPassword", "editorType", "dxTextBox", 3, "editorOptions"], ["type", "custom", "message", "Passwords do not match", 3, "validationCallback"], ["itemType", "button"], ["width", "100%", "type", "default", 3, "useSubmitBehavior", "template"], [4, "dxTemplate", "dxTemplateOf"], [1, "dx-button-text"], [4, "ngIf", "ngIfElse"], ["notLoading", ""], ["width", "24px", "height", "24px", 3, "visible"]], template: function ChangePasswordFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function ChangePasswordFormComponent_Template_form_submit_0_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "dx-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "dxi-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "dxi-validation-rule", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "dxo-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "dxi-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "dxi-validation-rule", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "dxi-validation-rule", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "dxo-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "dxi-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "dxo-button-options", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ChangePasswordFormComponent_ng_container_11_Template, 5, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formData", ctx.formData)("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("validationCallback", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("useSubmitBehavior", true)("template", "changePasswordTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dxTemplateOf", "changePasswordTemplate");
    } }, directives: [devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__["DxFormComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxiItemComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxiValidationRuleComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxoLabelComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__["DxoButtonOptionsComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_9__["DxTemplateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__["DxLoadIndicatorComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ChangePasswordFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-change-passsword-form',
                templateUrl: './change-password-form.component.html'
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();
class ChangePasswordFormModule {
}
ChangePasswordFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ChangePasswordFormModule });
ChangePasswordFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ChangePasswordFormModule_Factory(t) { return new (t || ChangePasswordFormModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__["DxFormModule"],
            devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__["DxLoadIndicatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChangePasswordFormModule, { declarations: [ChangePasswordFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__["DxFormModule"],
        devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__["DxLoadIndicatorModule"]], exports: [ChangePasswordFormComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ChangePasswordFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__["DxFormModule"],
                    devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_5__["DxLoadIndicatorModule"]
                ],
                declarations: [ChangePasswordFormComponent],
                exports: [ChangePasswordFormComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "i3Xp":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "dZZH"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "i3Xp";

/***/ }),

/***/ "lEda":
/*!**********************************************!*\
  !*** ./src/app/pages/test/test.component.ts ***!
  \**********************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_work_is_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @service-work/is-loading */ "nFfA");
/* harmony import */ var src_app_combox_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/combox.service */ "H5WC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/01.Service/report.service */ "DQhQ");
/* harmony import */ var src_app_01_Service_00_Common_date_time_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/01.Service/00.Common/date-time-helper.service */ "q0ex");







class TestComponent {
    constructor(isLoadingService, comboxService, http, reportService, dateTimeHelperService) {
        this.isLoadingService = isLoadingService;
        this.comboxService = comboxService;
        this.http = http;
        this.reportService = reportService;
        this.dateTimeHelperService = dateTimeHelperService;
    }
    ngOnInit() {
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_work_is_loading__WEBPACK_IMPORTED_MODULE_1__["IsLoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_combox_service__WEBPACK_IMPORTED_MODULE_2__["ComboxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_01_Service_00_Common_date_time_helper_service__WEBPACK_IMPORTED_MODULE_5__["DateTimeHelperService"])); };
TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 2, vars: 0, template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Test works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test',
                templateUrl: './test.component.html',
                styleUrls: ['./test.component.scss']
            }]
    }], function () { return [{ type: _service_work_is_loading__WEBPACK_IMPORTED_MODULE_1__["IsLoadingService"] }, { type: src_app_combox_service__WEBPACK_IMPORTED_MODULE_2__["ComboxService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }, { type: src_app_01_Service_00_Common_date_time_helper_service__WEBPACK_IMPORTED_MODULE_5__["DateTimeHelperService"] }]; }, null); })();


/***/ }),

/***/ "lR4v":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/bao-cao-ton-kho-chung3/bao-cao-ton-kho-chung3.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BaoCaoTonKhoChung3Component, KeyValuePair, Longtab, DonViIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoChung3Component", function() { return BaoCaoTonKhoChung3Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValuePair", function() { return KeyValuePair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Longtab", function() { return Longtab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonViIndex", function() { return DonViIndex; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/data/array_store */ "V2fm");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_combox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/combox.service */ "H5WC");
/* harmony import */ var src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/01.Service/report.service */ "DQhQ");
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/button */ "WYlB");
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/nested */ "6t9p");
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/core */ "PVOt");











function BaoCaoTonKhoChung3Component_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](info_r14.column.caption);
} }
function BaoCaoTonKhoChung3Component_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.arrHeader[0]);
} }
function BaoCaoTonKhoChung3Component_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.arrHeader[1]);
} }
function BaoCaoTonKhoChung3Component_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.arrHeader[2]);
} }
function BaoCaoTonKhoChung3Component_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.arrHeader[3]);
} }
function BaoCaoTonKhoChung3Component_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.arrHeader[4]);
} }
function BaoCaoTonKhoChung3Component_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.arrHeader[5]);
} }
function BaoCaoTonKhoChung3Component_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.arrHeader[6]);
} }
function BaoCaoTonKhoChung3Component_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.arrHeader[7]);
} }
function BaoCaoTonKhoChung3Component_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.arrHeader[8]);
} }
function BaoCaoTonKhoChung3Component_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.arrHeader[9]);
} }
function BaoCaoTonKhoChung3Component_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.arrHeader[10]);
} }
const _c0 = function () { return ["key"]; };
const _c1 = function () { return { mode: "multiple" }; };
const _c2 = function () { return { enabled: true, pageSize: 10 }; };
const _c3 = function () { return { visible: true }; };
const _c4 = function () { return { mode: "virtual" }; };
function BaoCaoTonKhoChung3Component_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dx-data-grid", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedRowKeysChange", function BaoCaoTonKhoChung3Component_div_62_Template_dx_data_grid_selectedRowKeysChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.cap1Select = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r12.dataSourceCap1)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0))("selection", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1))("hoverStateEnabled", true)("paging", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c2))("filterRow", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c3))("scrolling", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c4))("height", 345)("selectedRowKeys", ctx_r12.cap1Select);
} }
function BaoCaoTonKhoChung3Component_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dx-data-grid", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedRowKeysChange", function BaoCaoTonKhoChung3Component_div_64_Template_dx_data_grid_selectedRowKeysChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.cap2Select = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r13.dataSourceCap2)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0))("selection", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1))("hoverStateEnabled", true)("paging", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c2))("filterRow", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c3))("scrolling", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c4))("height", 345)("selectedRowKeys", ctx_r13.cap2Select);
} }
class BaoCaoTonKhoChung3Component {
    constructor(comboxService, reportService, reportService2, document) {
        this.comboxService = comboxService;
        this.reportService = reportService;
        this.reportService2 = reportService2;
        this.document = document;
        this.ngayVal = new Date();
        this.popupVisible = false;
        this.reportDataArr1 = [];
        this.popupDetailVisible = false;
        this.cap1Select = [];
        this.cap2Select = [];
        //---------------
        this.cap1Filter = [];
        this.cap1Filter1 = [{ key: "x1", val: "x1" }, { key: "x2", val: "x2" }];
        this.cap2Filter1 = [{ key: "x1", val: "x1" }, { key: "x2", val: "x2" }];
        this.dataSourceCap1 = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_3___default.a({
            data: this.cap1Filter1,
            key: "key"
        });
        this.dataSourceCap2 = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_3___default.a({
            data: this.cap2Filter1,
            key: "key"
        });
        //-------- Các biến header 
        this.KTarrHeader = [];
        this.KarrHeader = [];
        this.arrHeader = [];
        this.arrVisible = [];
        this.arrReportHeader = [];
        this.arrKTReportHeader = [];
        this.donViIndex = [];
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth - 2;
        this.popupWidth = window.innerWidth - 20;
        this.popupHeight = window.innerHeight - 20;
        this.elem = document.documentElement;
        this.openFullscreen();
        this.comboxService.GetComboxFunction('DanhMucKhoi_NhomDonVICOSo').subscribe(t => {
            this.donViCoSos = t;
        });
        this.comboxService.GetComboxFunction('VCapXemBaoCao').subscribe(t => {
            this.capCbxd = t;
        });
        this.reportData1 = this.reportService.CP_BaoCaoTonKhoChungHeader("CP_WKPI_BE_01", "TOYOTA", "h");
        this.reportData1.subscribe(t => {
            this.arrReportHeader = t;
            this.arrReportHeader.forEach(element => {
                this.arrHeader.push(element.TenCot);
                this.arrVisible.push(element.mVisible == 'True');
            });
            this.taoMangBanDau();
        });
        this.reportData1 = this.reportService2.CP_BaoCaoTonKhoChungHeader("CP_WKPI_BE_01", "TOYOTA", "kt");
        this.reportData1.subscribe(t => {
            this.arrKTReportHeader = t;
            this.arrKTReportHeader.forEach(element => {
                this.KTarrHeader.push(element.TenCot);
            });
            //console.log(this.KTarrHeader);
        });
    }
    openFullscreen() {
        if (this.elem.requestFullscreen) {
            this.elem.requestFullscreen();
        }
        else if (this.elem.mozRequestFullScreen) {
            /* Firefox */
            this.elem.mozRequestFullScreen();
        }
        else if (this.elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            this.elem.webkitRequestFullscreen();
        }
        else if (this.elem.msRequestFullscreen) {
            /* IE/Edge */
            this.elem.msRequestFullscreen();
        }
    }
    selCap1(e) {
        this.cap2s = [];
        this.cap3s = [""];
        this.cap1 = e.itemData;
        this.cap2 = "";
        this.cap3 = "";
        //---- lấy cấp 2
        this.reportDataArr1.filter(t => t.Ma_Kx === "" && t.Ten_kx3 === this.cap1 && t.Ma_Mau === "").
            forEach(k => { if (k.Ten_kx2 !== "") {
            this.cap2s.push(k.Ten_kx2);
        } });
        if (this.cap2s.length == 0)
            this.cap2s = [""];
        this.loadData();
    }
    selCap2(e) {
        this.cap3s = [];
        this.cap2 = e.itemData;
        this.cap3 = "";
        //---- lấy cấp 3
        this.reportDataArr1.filter(t => t.Ten_kx3 === this.cap1 && t.Ten_kx2 === this.cap2 && t.Ma_Mau === "").
            forEach(k => { if (k.Ma_Kx !== "") {
            this.cap3s.push(k.Ma_Kx);
        } });
        if (this.cap3s.length == 0)
            this.cap3s = [""];
        //console.log(this.cap3s);
        this.loadData();
    }
    selCap3(e) {
        this.cap3 = e.itemData;
        this.loadData();
        /*
        this.cap3s = [];
        this.cap3 = e.itemData ;
        //---- lấy cấp 2
        this.reportDataArr1.filter(t=> t.Ten_kx3 === this.cap1 && t.Ten_kx2 ===this.cap2 && t.Ma_Mau === "").
        forEach (k=> this.cap3s.push(k.Ma_Kx))
        */
    }
    loadData() {
        // Load cấp 1
        var data;
        if (this.cap1 !== "" && this.cap2 === "" && this.cap3 === "") {
            this.reportDataArr1.filter(t => t.Ten_kx3 === this.cap1 && t.Ten_kx2 === "" && t.Ma_Kx === "" && t.Ma_Mau === "").
                forEach(k => data = k);
        }
        else 
        // Load cấp 2
        if (this.cap1 !== "" && this.cap2 !== "" && this.cap3 === "") {
            this.reportDataArr1.filter(t => t.Ten_kx3 === this.cap1 && t.Ten_kx2 === this.cap2 && t.Ma_Kx === "" && t.Ma_Mau === "").
                forEach(k => data = k);
        }
        else 
        // Load cấp 2
        if (this.cap1 !== "" && this.cap2 !== "" && this.cap3 !== "") {
            this.reportDataArr1.filter(t => t.Ten_kx3 === this.cap1 && t.Ten_kx2 === this.cap2 && t.Ma_Kx === this.cap3 && t.Ma_Mau === "").
                forEach(k => { data = k; console.log("--------------------- Log data" + this.cap1 + "|" + this.cap2 + "|" + this.cap3); console.log(data); });
        }
        this.addToGridDetail(data);
    }
    addToGridDetail(data) {
        this.reportDataDetail = [];
        this.reportDataDetail.push({ "ColTen": "K",
            "Col0": data.K01, "Col1": data.K02, "Col3": data.K03,
            "Col4": data.K04, "Col5": data.K02, "Col6": data.K03,
            "Col7": data.K01, "Col8": data.K02, "Col9": data.K03,
            "Col10": data.K01, "Col11": data.K02, "Col12": data.K03,
            "Col13": data.K01, "Col14": data.K02, "Col15": data.K03,
        });
    }
    getVal(index, donvi, data) {
        if (index == 0) {
            return { "Col1": donvi, "Col2": data.K01, "Col3": data.KT01, "Col4": data.T01, "Col5": data.H01, "Col6": data.F01 };
        }
        else if (index == 1) {
            return { "Col1": donvi, "Col2": data.K02, "Col3": data.KT02, "Col4": data.T02, "Col5": data.H02, "Col6": data.F02 };
        }
        else if (index == 2) {
            return { "Col1": donvi, "Col2": data.K03, "Col3": data.KT03, "Col4": data.T03, "Col5": data.H03, "Col6": data.F03 };
        }
        else if (index == 3) {
            return { "Col1": donvi, "Col2": data.K04, "Col3": data.KT04, "Col4": data.T04, "Col5": data.H04, "Col6": data.F04 };
        }
        else if (index == 4) {
            return { "Col1": donvi, "Col2": data.K05, "Col3": data.KT05, "Col4": data.T05, "Col5": data.H05, "Col6": data.F05 };
        }
        else if (index == 5) {
            return { "Col1": donvi, "Col2": data.K06, "Col3": data.KT06, "Col4": data.T06, "Col5": data.H06, "Col6": data.F06 };
        }
        else if (index == 6) {
            return { "Col1": donvi, "Col2": data.K07, "Col3": data.KT07, "Col4": data.T07, "Col5": data.H07, "Col6": data.F07 };
        }
        else if (index == 7) {
            return { "Col1": donvi, "Col2": data.K08, "Col3": data.KT08, "Col4": data.T08, "Col5": data.H08, "Col6": data.F08 };
        }
        else if (index == 8) {
            return { "Col1": donvi, "Col2": data.K09, "Col3": data.KT09, "Col4": data.T09, "Col5": data.H09, "Col6": data.F09 };
        }
        else if (index == 9) {
            return { "Col1": donvi, "Col2": data.K10, "Col3": data.KT10, "Col4": data.T10, "Col5": data.H10, "Col6": data.F10 };
        }
        else if (index == 10) {
            return { "Col1": donvi, "Col2": data.K11, "Col3": data.KT11, "Col4": data.T11, "Col5": data.H11, "Col6": data.F11 };
        }
        else if (index == 11) {
            return { "Col1": donvi, "Col2": data.K12, "Col3": data.KT12, "Col4": data.T12, "Col5": data.H12, "Col6": data.F12 };
        }
        else if (index == 12) {
            return { "Col1": donvi, "Col2": data.K13, "Col3": data.KT13, "Col4": data.T13, "Col5": data.H13, "Col6": data.F13 };
        }
        else if (index == 13) {
            return { "Col1": donvi, "Col2": data.K14, "Col3": data.KT14, "Col4": data.T14, "Col5": data.H14, "Col6": data.F14 };
        }
        else if (index == 14) {
            return { "Col1": donvi, "Col2": data.K15, "Col3": data.KT15, "Col4": data.T15, "Col5": data.H15, "Col6": data.F15 };
        }
    }
    taoMangBanDau() {
        var i = 0;
        this.reportFormat = [];
        this.arrVisible.forEach(t => {
            this.donViIndex.push({ text: this.KarrHeader[i], vitri: i });
            if (t == true) {
                this.reportFormat.push({ "Col1": this.KarrHeader[i], "Col2": 0, "Col3": 0, "Col4": 0, "Col5": 0, "Col6": 0 });
            }
            i++;
        });
        //this.reportFormat.push({"Tổng": this.KarrHeader[i], "Col2":0, "Col3": 0, "Col4":0, "Col5": 0,  "Col6" :0});
        //console.log(this.reportFormat);
    }
    showFilter() {
        this.popupVisible = true;
    }
    close() {
        this.popupVisible = false;
    }
    fillData() {
        this.cap1s = [""];
        this.cap2s = [""];
        this.cap3s = [""];
        var ngays;
        var nam = this.ngayVal.getFullYear().toString();
        var thang = "";
        if (this.ngayVal.getMonth() < 9)
            thang = "0" + (this.ngayVal.getMonth() + 1).toString();
        else
            thang = this.ngayVal.getMonth().toString();
        var ngay = "";
        if (this.ngayVal.getDate() < 10)
            ngay = "0" + this.ngayVal.getDate().toString();
        else
            ngay = this.ngayVal.getDate().toString();
        ngays = nam + thang + ngay;
        this.popupVisible = false;
        this.gridDetail.instance.beginCustomLoading("");
        this.reportData1 = this.reportService.CP_BaoCaoTonKhoChung(this.khoiVal, this.capVal, ngays, "", "", "");
        this.reportData1.subscribe(t => {
            this.reportDataArr1 = t;
            this.gridDetail.instance.endCustomLoading();
            this.cap1Filter = [];
            //---- lấy cấp 1
            this.reportDataArr1.filter(t => t.Ma_Kx === "" && t.Ten_kx2 === "" && t.Ma_Mau === "").
                forEach(k => this.cap1Filter.push({ key: k.Ten_kx3, val: k.Ten_kx3 }));
            this.dataSourceCap1 = new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_3___default.a({
                data: this.cap1Filter,
                key: "key"
            });
            console.log(this.dataSourceCap1);
        });
    }
    onCellPrepared(e) {
        if (e.rowType === "data" &&
            (e.column.dataField === "TotalT"
                || e.column.dataField === "TotalH"
                || e.column.dataField === "TotalK"
                || e.column.dataField === "TotalF")) {
            e.cellElement.style.background = "CYAN";
        }
    }
    onRowPrepared(e) {
        if (e.rowType == 'data') {
            if (e.data.BackColor == "YELOW") {
                e.rowElement.style.backgroundColor = 'yellow';
            }
            else if (e.data.BackColor == "PINK") {
                e.rowElement.style.backgroundColor = 'PINK';
            }
            else if (e.data.BackColor == "CYAN") {
                e.rowElement.style.backgroundColor = 'CYAN';
            }
            else if (e.data.BackColor == "GOLD") {
                e.rowElement.style.backgroundColor = 'GOLD';
            }
        }
    }
    filter() {
        this.popupDetailVisible = true;
    }
    cap1SelectChange(e) {
        var component = (e && e.component);
        this.cap2Filter1 = [];
        //---- lấy cấp 2
        console.log(this.reportDataArr1.filter(t => t.Ma_Kx === "" && t.Ten_kx3 === t && t.Ma_Mau === ""));
        this.cap1Select.forEach(t => {
            this.reportDataArr1.filter(t => t.Ma_Kx === "" && t.Ten_kx3 === t && t.Ma_Mau === "").
                forEach(k => {
                if (k.Ten_kx2 !== "") {
                    this.cap2Filter1.push({ key: t, val: t });
                }
            });
        });
    }
}
BaoCaoTonKhoChung3Component.ɵfac = function BaoCaoTonKhoChung3Component_Factory(t) { return new (t || BaoCaoTonKhoChung3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_combox_service__WEBPACK_IMPORTED_MODULE_4__["ComboxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
BaoCaoTonKhoChung3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BaoCaoTonKhoChung3Component, selectors: [["app-bao-cao-ton-kho-chung3"]], viewQuery: function BaoCaoTonKhoChung3Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.gridDetail = _t.first);
    } }, decls: 65, vars: 63, consts: [[1, "w3-display-container", "w3-deep-orange", 2, "height", "45px"], [1, "w3-display-left"], [1, "w3-display-right"], ["text", "Filter", 1, "button-info", 3, "onClick"], ["maxWidth", "600", "title", "Filter", 3, "showTitle", "dragEnabled", "closeOnOutsideClick", "visible", "visibleChange"], [1, "dx-fieldset"], [1, "dx-field"], [1, "dx-field-label"], [1, "dx-field-value"], ["type", "date", 3, "value"], ["displayExpr", "ten_nh", "valueExpr", "ma_nh", 3, "dataSource", "value", "valueChange"], ["displayExpr", "Ten", "valueExpr", "Ma", 3, "dataSource", "value", "valueChange"], [2, "position", "absolute", "right", "50px", "bottom", "10px"], ["with", "200", "text", "   Ok  ", 1, "button-info", 3, "onClick"], [2, "position", "absolute", "right", "150px", "bottom", "10px"], ["text", "Cancel", 1, "button-info", 3, "onClick"], ["id", "gridDetail", 3, "showColumnHeaders", "dataSource", "showBorders", "focusedRowEnabled", "focusedRowIndex", "columnHidingEnabled", "columnAutoWidth", "showColumnLines", "showRowLines", "repaintChangesOnly", "rowAlternationEnabled", "onRowPrepared", "onCellPrepared"], ["dataField", "ColTen", "caption", "M\u1EE5c"], ["dataField", "Col0", "headerCellTemplate", "titleHeaderTemplate0", 3, "visible", "visibleChange"], ["dataField", "Col1", "headerCellTemplate", "titleHeaderTemplate1", 3, "visible", "visibleChange"], ["dataField", "Col2", "headerCellTemplate", "titleHeaderTemplate2", 3, "visible", "visibleChange"], ["dataField", "Col3", "headerCellTemplate", "titleHeaderTemplate3", 3, "visible", "visibleChange"], ["dataField", "Col4", "headerCellTemplate", "titleHeaderTemplate4", 3, "visible", "visibleChange"], ["dataField", "Col5", "headerCellTemplate", "titleHeaderTemplate5", 3, "visible", "visibleChange"], ["dataField", "Col6", "headerCellTemplate", "titleHeaderTemplate6", 3, "visible", "visibleChange"], ["dataField", "Col7", "headerCellTemplate", "titleHeaderTemplate7", 3, "visible", "visibleChange"], ["dataField", "Col8", "headerCellTemplate", "titleHeaderTemplate8", 3, "visible", "visibleChange"], ["dataField", "Col9", "headerCellTemplate", "titleHeaderTemplate9", 3, "visible", "visibleChange"], ["dataField", "Col10", "headerCellTemplate", "titleHeaderTemplate10", 3, "visible", "visibleChange"], ["dataField", "Col11", "headerCellTemplate", "titleHeaderTemplate11", 3, "visible", "visibleChange"], ["dataField", "Col12", "headerCellTemplate", "titleHeaderTemplate12", 3, "visible", "visibleChange"], ["dataField", "Col13", "headerCellTemplate", "titleHeaderTemplate13", 3, "visible", "visibleChange"], ["dataField", "Col14", "headerCellTemplate", "titleHeaderTemplate14", 3, "visible", "visibleChange"], ["dataField", "Col15", "headerCellTemplate", "titleHeaderTemplate15", 3, "visible", "visibleChange"], ["dataField", "Tong", "caption", "Total"], [4, "dxTemplate", "dxTemplateOf"], ["icon", "filter", "label", "", 3, "index", "onClick"], ["title", "Chi ti\u1EBFt", 3, "width", "height", "showTitle", "dragEnabled", "closeOnOutsideClick", "visible", "widthChange", "visibleChange"], ["valueExpr", "key", "displayExpr", "val", "placeholder", "Select a value...", 3, "value", "showClearButton", "dataSource", "valueChange", "onValueChanged"], ["valueExpr", "key", "displayExpr", "val", "placeholder", "Select a value...", 3, "value", "showClearButton", "dataSource", "valueChange"], [2, "font-size", "16px"], [3, "dataSource", "columns", "selection", "hoverStateEnabled", "paging", "filterRow", "scrolling", "height", "selectedRowKeys", "selectedRowKeysChange"]], template: function BaoCaoTonKhoChung3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "T\u1ED3n kho chung");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "dx-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function BaoCaoTonKhoChung3Component_Template_dx_button_onClick_5_listener() { return ctx.showFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "dx-popup", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dx_popup_visibleChange_6_listener($event) { return ctx.popupVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "dx-date-box", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Kh\u1ED1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "dx-select-box", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function BaoCaoTonKhoChung3Component_Template_dx_select_box_valueChange_17_listener($event) { return ctx.khoiVal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "C\u1EA5p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "dx-select-box", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function BaoCaoTonKhoChung3Component_Template_dx_select_box_valueChange_22_listener($event) { return ctx.capVal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "dx-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function BaoCaoTonKhoChung3Component_Template_dx_button_onClick_24_listener() { return ctx.fillData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "dx-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function BaoCaoTonKhoChung3Component_Template_dx_button_onClick_26_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "dx-data-grid", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRowPrepared", function BaoCaoTonKhoChung3Component_Template_dx_data_grid_onRowPrepared_27_listener($event) { return ctx.onRowPrepared($event); })("onCellPrepared", function BaoCaoTonKhoChung3Component_Template_dx_data_grid_onCellPrepared_27_listener($event) { return ctx.onCellPrepared($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "dxi-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "dxi-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dxi_column_visibleChange_29_listener($event) { return (ctx.arrVisible[0] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "dxi-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dxi_column_visibleChange_30_listener($event) { return (ctx.arrVisible[1] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "dxi-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dxi_column_visibleChange_31_listener($event) { return (ctx.arrVisible[2] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "dxi-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dxi_column_visibleChange_32_listener($event) { return (ctx.arrVisible[3] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "dxi-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dxi_column_visibleChange_33_listener($event) { return (ctx.arrVisible[4] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "dxi-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dxi_column_visibleChange_34_listener($event) { return (ctx.arrVisible[5] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "dxi-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dxi_column_visibleChange_35_listener($event) { return (ctx.arrVisible[6] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "dxi-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dxi_column_visibleChange_36_listener($event) { return (ctx.arrVisible[7] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "dxi-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dxi_column_visibleChange_37_listener($event) { return (ctx.arrVisible[8] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "dxi-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dxi_column_visibleChange_38_listener($event) { return (ctx.arrVisible[9] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "dxi-column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dxi_column_visibleChange_39_listener($event) { return (ctx.arrVisible[10] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "dxi-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dxi_column_visibleChange_40_listener($event) { return (ctx.arrVisible[11] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "dxi-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dxi_column_visibleChange_41_listener($event) { return (ctx.arrVisible[12] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "dxi-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dxi_column_visibleChange_42_listener($event) { return (ctx.arrVisible[13] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "dxi-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dxi_column_visibleChange_43_listener($event) { return (ctx.arrVisible[14] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "dxi-column", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function BaoCaoTonKhoChung3Component_Template_dxi_column_visibleChange_44_listener($event) { return (ctx.arrVisible[15] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "dxi-column", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, BaoCaoTonKhoChung3Component_div_46_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, BaoCaoTonKhoChung3Component_div_47_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, BaoCaoTonKhoChung3Component_div_48_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, BaoCaoTonKhoChung3Component_div_49_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, BaoCaoTonKhoChung3Component_div_50_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, BaoCaoTonKhoChung3Component_div_51_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, BaoCaoTonKhoChung3Component_div_52_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, BaoCaoTonKhoChung3Component_div_53_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, BaoCaoTonKhoChung3Component_div_54_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, BaoCaoTonKhoChung3Component_div_55_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, BaoCaoTonKhoChung3Component_div_56_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, BaoCaoTonKhoChung3Component_div_57_Template, 3, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "dx-speed-dial-action", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function BaoCaoTonKhoChung3Component_Template_dx_speed_dial_action_onClick_58_listener() { return ctx.filter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "dx-popup", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("widthChange", function BaoCaoTonKhoChung3Component_Template_dx_popup_widthChange_59_listener($event) { return ctx.popupWidth = $event; })("visibleChange", function BaoCaoTonKhoChung3Component_Template_dx_popup_visibleChange_59_listener($event) { return ctx.popupDetailVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "dx-drop-down-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function BaoCaoTonKhoChung3Component_Template_dx_drop_down_box_valueChange_61_listener($event) { return ctx.cap1Select = $event; })("onValueChanged", function BaoCaoTonKhoChung3Component_Template_dx_drop_down_box_onValueChanged_61_listener($event) { return ctx.cap1SelectChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, BaoCaoTonKhoChung3Component_div_62_Template, 2, 14, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "dx-drop-down-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function BaoCaoTonKhoChung3Component_Template_dx_drop_down_box_valueChange_63_listener($event) { return ctx.cap2Select = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, BaoCaoTonKhoChung3Component_div_64_Template, 2, 14, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showTitle", true)("dragEnabled", false)("closeOnOutsideClick", false)("visible", ctx.popupVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.ngayVal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.donViCoSos)("value", ctx.khoiVal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.capCbxd)("value", ctx.capVal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showColumnHeaders", true)("dataSource", ctx.reportDataDetail)("showBorders", true)("focusedRowEnabled", false)("focusedRowIndex", 0)("columnHidingEnabled", false)("columnAutoWidth", true)("showColumnLines", true)("showRowLines", true)("repaintChangesOnly", true)("rowAlternationEnabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.arrVisible[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.arrVisible[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.arrVisible[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.arrVisible[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.arrVisible[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.arrVisible[5]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.arrVisible[6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.arrVisible[7]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.arrVisible[8]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.arrVisible[9]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.arrVisible[10]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.arrVisible[11]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.arrVisible[12]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.arrVisible[13]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.arrVisible[14]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.arrVisible[15]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "titleHeaderTemplate10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("index", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx.popupWidth)("height", 300)("showTitle", true)("dragEnabled", false)("closeOnOutsideClick", false)("visible", ctx.popupDetailVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.cap1Select)("showClearButton", true)("dataSource", ctx.dataSourceCap1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.cap2Select)("showClearButton", true)("dataSource", ctx.dataSourceCap2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "content");
    } }, directives: [devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_6__["DxButtonComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxPopupComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDateBoxComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxSelectBoxComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__["DxiColumnComponent"], devextreme_angular_core__WEBPACK_IMPORTED_MODULE_8__["DxTemplateDirective"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxSpeedDialActionComponent"], devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDropDownBoxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW8tY2FvLXRvbi1raG8tY2h1bmczLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaoCaoTonKhoChung3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-bao-cao-ton-kho-chung3',
                templateUrl: './bao-cao-ton-kho-chung3.component.html',
                styleUrls: ['./bao-cao-ton-kho-chung3.component.scss']
            }]
    }], function () { return [{ type: src_app_combox_service__WEBPACK_IMPORTED_MODULE_4__["ComboxService"] }, { type: src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"] }, { type: src_app_01_Service_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, { gridDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__["DxDataGridComponent"], { static: false }]
        }] }); })();
class KeyValuePair {
}
class Longtab {
}
class DonViIndex {
}


/***/ }),

/***/ "pFCf":
/*!***************************************************!*\
  !*** ./src/app/shared/services/screen.service.ts ***!
  \***************************************************/
/*! exports provided: ScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenService", function() { return ScreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "sjd8");




class ScreenService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large])
            .subscribe(() => this.changed.next());
    }
    isLargeScreen() {
        const isLarge = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large);
        const isXLarge = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XLarge);
        return isLarge || isXLarge;
    }
    get sizes() {
        return {
            'screen-x-small': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall),
            'screen-small': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small),
            'screen-medium': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium),
            'screen-large': this.isLargeScreen(),
        };
    }
}
ScreenService.ɵfac = function ScreenService_Factory(t) { return new (t || ScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
ScreenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScreenService, factory: ScreenService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScreenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, { changed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "q0ex":
/*!******************************************************************!*\
  !*** ./src/app/01.Service/00.Common/date-time-helper.service.ts ***!
  \******************************************************************/
/*! exports provided: DateTimeHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeHelperService", function() { return DateTimeHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DateTimeHelperService {
    constructor() { }
    getArrayMonth(tuNam, tuThang, denNam, denThang) {
        const arr = [];
        for (let index = tuThang; index <= 12; index++) {
            arr.push(`${tuNam}-${index}`);
        }
        if (denNam - tuNam >= 2) {
            for (let idxNam = 1; idxNam <= denNam - tuNam; idxNam++) {
                for (let j = 1; j < 12; j++) {
                    const nam = tuNam + idxNam;
                    arr.push(`${nam}-${j}`);
                }
            }
        }
        for (let index = 1; index <= denThang; index++) {
            arr.push(`${denNam}-${index}`);
        }
        return arr;
    }
    getToyotaHeaderName(tuNam, tuThang, denNam, denThang) {
        const arr = [];
        arr.push('TMD');
        arr.push('TTX');
        arr.push('TBN');
        arr.push('TPT');
        arr.push('THD');
        arr.push('TTS');
        arr.push('TBG');
        arr.push('Tổng');
        arr.push('% Kế hoạch');
        arr.push('% Cùng kỳ');
        return arr;
    }
    getArrayVisiable(tuNam, tuThang, denNam, denThang) {
        let tongSoCot = 0;
        tongSoCot = (12 - tuThang) + (denNam - tuNam - 1) * 12 + (denThang);
        const arr = [];
        let i = 0;
        for (let index = 0; index <= tongSoCot; index++) {
            i++;
            if (index < 24) {
                arr.push(true);
            }
        }
        if (i < 24) {
            for (let index = i; index < 24; index++) {
                arr.push(false);
            }
        }
        return arr;
    }
}
DateTimeHelperService.ɵfac = function DateTimeHelperService_Factory(t) { return new (t || DateTimeHelperService)(); };
DateTimeHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DateTimeHelperService, factory: DateTimeHelperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateTimeHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ruYK":
/*!***********************************!*\
  !*** ./src/app/app-navigation.ts ***!
  \***********************************/
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
/*
export const navigation = [
{
    text: 'Kinh doanh',
    icon: 'folder',
    items: [
      {
        text: 'Báo cáo tồn kho chung',
        path: '/bao-cao-ton-kho-chung'
      },
      {
        text: 'Tasks',
        path: '/tasks'
      }
    ]
  }
];*/
const navigation = [
    {
        text: 'Daskboard',
        path: '/home',
        icon: 'home'
    },
    {
        text: 'Báo cáo kinh doanh',
        icon: 'folder',
        items: [
            {
                text: 'Báo cáo tồn kho chung',
                path: '/bao-cao-ton-kho-chung'
            },
            {
                text: 'Báo cáo tồn kho chung 2',
                path: '/bao-cao-ton-kho-chung2'
            },
            {
                text: 'Báo cáo tồn kho chung 3',
                path: '/bao-cao-ton-kho-chung3'
            },
            {
                text: 'test tab',
                path: '/test-tab'
            }
        ]
    }
];


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components */ "1ua0");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services */ "ZF+8");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/profile/profile.component */ "Y5Lh");
/* harmony import */ var _pages_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/tasks/tasks.component */ "DGcr");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular */ "384S");
/* harmony import */ var _pages_bao_cao_mot_chi_tieu_bao_cao_mot_chi_tieu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/bao-cao-mot-chi-tieu/bao-cao-mot-chi-tieu.component */ "/2a2");
/* harmony import */ var _pages_test_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/test/test.component */ "lEda");
/* harmony import */ var _pages_bao_cao_ton_kho_chung_bao_cao_ton_kho_chung_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/bao-cao-ton-kho-chung/bao-cao-ton-kho-chung.component */ "dhtj");
/* harmony import */ var _pages_bao_cao_ton_kho_chung2_bao_cao_ton_kho_chung2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/bao-cao-ton-kho-chung2/bao-cao-ton-kho-chung2.component */ "VExB");
/* harmony import */ var _pages_bao_cao_ton_kho_chung3_bao_cao_ton_kho_chung3_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/bao-cao-ton-kho-chung3/bao-cao-ton-kho-chung3.component */ "lR4v");
/* harmony import */ var _pages_test_tab_test_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/test-tab/test-tab.component */ "1xgb");
















const routes = [
    {
        path: 'test',
        component: _pages_test_test_component__WEBPACK_IMPORTED_MODULE_9__["TestComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'bao-cao-mot-chi-tieu',
        component: _pages_bao_cao_mot_chi_tieu_bao_cao_mot_chi_tieu_component__WEBPACK_IMPORTED_MODULE_8__["BaoCaoMotChiTieuComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'bao-cao-ton-kho-chung',
        component: _pages_bao_cao_ton_kho_chung_bao_cao_ton_kho_chung_component__WEBPACK_IMPORTED_MODULE_10__["BaoCaoTonKhoChungComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'bao-cao-ton-kho-chung2',
        component: _pages_bao_cao_ton_kho_chung2_bao_cao_ton_kho_chung2_component__WEBPACK_IMPORTED_MODULE_11__["BaoCaoTonKhoChung2Component"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'bao-cao-ton-kho-chung3',
        component: _pages_bao_cao_ton_kho_chung3_bao_cao_ton_kho_chung3_component__WEBPACK_IMPORTED_MODULE_12__["BaoCaoTonKhoChung3Component"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'test-tab',
        component: _pages_test_tab_test_tab_component__WEBPACK_IMPORTED_MODULE_13__["TestTabComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'tasks',
        component: _pages_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__["TasksComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'profile',
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'login-form',
        component: _shared_components__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'reset-password',
        component: _shared_components__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordFormComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'create-account',
        component: _shared_components__WEBPACK_IMPORTED_MODULE_2__["CreateAccountFormComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'change-password/:recoveryCode',
        component: _shared_components__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordFormComponent"],
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        //path: '**',
        //redirectTo: 'login-form',
        //canActivate: [ AuthGuardService ]
        path: '**',
        redirectTo: 'home',
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxDataGridModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxFormModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _pages_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__["TasksComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxDataGridModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxFormModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxDataGridModule"], devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxFormModule"]],
                providers: [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _pages_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__["TasksComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map