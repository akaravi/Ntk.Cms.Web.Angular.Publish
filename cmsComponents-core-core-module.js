(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cmsComponents-core-core-module"],{

/***/ "./src/app/@cms/cmsComponents/core/core.module.ts":
/*!********************************************************!*\
  !*** ./src/app/@cms/cmsComponents/core/core.module.ts ***!
  \********************************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core.routing */ "./src/app/@cms/cmsComponents/core/core.routing.ts");




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _core_routing__WEBPACK_IMPORTED_MODULE_3__["CoreRoutes"],
            ],
            declarations: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/@cms/cmsComponents/core/core.routing.ts":
/*!*********************************************************!*\
  !*** ./src/app/@cms/cmsComponents/core/core.routing.ts ***!
  \*********************************************************/
/*! exports provided: CoreRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutes", function() { return CoreRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'user',
                loadChildren: function () { return __webpack_require__.e(/*! import() | core-user-coreUser-module */ "core-user-coreUser-module").then(__webpack_require__.bind(null, /*! ../core/user/coreUser.module */ "./src/app/@cms/cmsComponents/core/user/coreUser.module.ts")).then(function (m) { return m.CoreUserModule; }); },
            },
            {
                path: 'site',
                loadChildren: function () { return Promise.all(/*! import() | core-site-coreSite-module */[__webpack_require__.e("default~cmsComponents-news-news-module~core-site-coreSite-module~data-tables-data-tables-module"), __webpack_require__.e("default~components-ui-components-module~core-site-coreSite-module"), __webpack_require__.e("default~core-site-coreSite-module~forms-forms-module"), __webpack_require__.e("default~core-site-coreSite-module~core-siteCategory-coreSiteCategory-module"), __webpack_require__.e("core-site-coreSite-module")]).then(__webpack_require__.bind(null, /*! ../core/site/coreSite.module */ "./src/app/@cms/cmsComponents/core/site/coreSite.module.ts")).then(function (m) { return m.CoreSiteModule; }); },
            },
            {
                path: 'sitecategory',
                loadChildren: function () { return Promise.all(/*! import() | core-siteCategory-coreSiteCategory-module */[__webpack_require__.e("default~core-site-coreSite-module~core-siteCategory-coreSiteCategory-module"), __webpack_require__.e("core-siteCategory-coreSiteCategory-module")]).then(__webpack_require__.bind(null, /*! ../core/siteCategory/coreSiteCategory.module */ "./src/app/@cms/cmsComponents/core/siteCategory/coreSiteCategory.module.ts")).then(function (m) { return m.CoreSiteCategoryModule; }); },
            },
        ]
    }
];
var CoreRoutes = /** @class */ (function () {
    function CoreRoutes() {
    }
    CoreRoutes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], CoreRoutes);
    return CoreRoutes;
}());



/***/ })

}]);
//# sourceMappingURL=cmsComponents-core-core-module.js.map