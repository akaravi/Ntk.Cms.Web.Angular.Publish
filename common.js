(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/@cms/cmsCommon/helper/publicHelper.ts":
/*!*******************************************************!*\
  !*** ./src/app/@cms/cmsCommon/helper/publicHelper.ts ***!
  \*******************************************************/
/*! exports provided: PublicHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicHelper", function() { return PublicHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_cms_cmsService_core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@cms/cmsService/core/auth.service */ "./src/app/@cms/cmsService/core/auth.service.ts");






var PublicHelper = /** @class */ (function () {
    function PublicHelper(router, alertService, cmsAuthService) {
        var _this = this;
        this.router = router;
        this.alertService = alertService;
        cmsAuthService.CorrectTokenInfoObs.subscribe(function (vlaue) {
            _this.TokenInfo = vlaue;
        });
    }
    PublicHelper.prototype.CheckToken = function () {
        var token = localStorage.getItem('token');
        if (!token || token === 'null') {
            this.alertService.warning('لطفا مجددا وارد حساب کاربری خود شوید', 'نیاز به ورود مجدد');
            this.router.navigate([environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].cmsUiConfig.Pathlogin]);
        }
        return token;
    };
    PublicHelper.prototype.CheckTokenInfo = function () {
        var token = localStorage.getItem('token');
        if (!token || token === 'null') {
            this.alertService.warning('لطفا مجددا وارد حساب کاربری خود شوید', 'نیاز به ورود مجدد');
            this.router.navigate([environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].cmsUiConfig.Pathlogin]);
        }
        return this.TokenInfo;
    };
    PublicHelper.prototype.CheckError = function (model) {
        if (!model) {
            return 'Error';
        }
        var errorExcptionResult;
        if (model['error']) {
            errorExcptionResult = model['error'];
            if (errorExcptionResult) {
                if (errorExcptionResult.Status == 401) {
                    this.alertService.warning('لطفا مجددا وارد حساب کاربری خود شوید', 'نیاز به ورود مجدد');
                    this.router.navigate([environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].cmsUiConfig.Pathlogin]);
                    return;
                }
            }
        }
        if (model.errors) {
            var ret = '';
            var aaa = model.errors.keys;
            return ret;
        }
        else if (model && model.ErrorMessage) {
            return model.ErrorMessage;
        }
        return 'Error';
    };
    PublicHelper.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: app_cms_cmsService_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["CmsAuthService"] }
    ]; };
    PublicHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], app_cms_cmsService_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["CmsAuthService"]])
    ], PublicHelper);
    return PublicHelper;
}());



/***/ }),

/***/ "./src/app/shared/animations/custom-animations.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/custom-animations.ts ***!
  \********************************************************/
/*! exports provided: customAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAnimations", function() { return customAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var customAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 <=> 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200))
    ])
];


/***/ }),

/***/ "./src/app/shared/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.setConfigValue();
    }
    ConfigService.prototype.setConfigValue = function () {
        this.templateConf = {
            layout: {
                variant: "Light",
                dir: "rtl",
                customizer: {
                    hidden: true //options: true, false
                },
                sidebar: {
                    collapsed: false,
                    size: "sidebar-md",
                    backgroundColor: "man-of-steel",
                    /* If you want transparent layout add any of the following mentioned classes to backgroundColor of sidebar option :
                      bg-glass-1, bg-glass-2, bg-glass-3, bg-glass-4, bg-hibiscus, bg-purple-pizzaz, bg-blue-lagoon, bg-electric-viloet, bg-protage, bg-tundora
                    */
                    backgroundImage: true,
                    backgroundImageURL: "assets/img/sidebar-bg/01.jpg"
                }
            }
        };
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/shared/services/layout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.changeEmitted$ = this.emitChangeSource.asObservable();
        //Customizer
        this.emitCustomizerSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.customizerChangeEmitted$ = this.emitCustomizerSource.asObservable();
        //customizer - compact menu
        this.emitCustomizerCMSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.customizerCMChangeEmitted$ = this.emitCustomizerCMSource.asObservable();
        //customizer - compact menu
        this.emitNotiSidebarSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.notiSidebarChangeEmitted$ = this.emitNotiSidebarSource.asObservable();
    }
    LayoutService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    LayoutService.prototype.emitCustomizerChange = function (change) {
        this.emitCustomizerSource.next(change);
    };
    LayoutService.prototype.emitCustomizerCMChange = function (change) {
        this.emitCustomizerCMSource.next(change);
    };
    LayoutService.prototype.emitNotiSidebarChange = function (change) {
        this.emitNotiSidebarSource.next(change);
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LayoutService);
    return LayoutService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map