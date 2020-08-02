(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inbox-inbox-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/@theme/inbox/inbox.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@theme/inbox/inbox.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"email-application\">\r\n  <div #contentOverlay class=\"content-overlay\" (click)=\"onContentOverlay()\"></div>\r\n  <div #emailSidebar class=\"email-app-sidebar float-left d-none d-xl-block\">\r\n    <div [perfectScrollbar] class=\"email-app-sidebar-content\">\r\n      <div class=\"email-app-menu\">\r\n        <div class=\"form-group form-group-compose text-center\">\r\n          <button type=\"button\" class=\"btn btn-raised btn-danger btn-block my-2\" (click)=\"open(content)\">\r\n            <i class=\"ft-mail\"></i> ساختن</button>\r\n        </div>\r\n        <h6 class=\"text-muted text-bold-500 mb-1 text-left\">پیام</h6>\r\n        <div class=\"list-group list-group-messages\">\r\n          <a class=\"list-group-item active no-border text-left\" (click)=\"GetEmailsByType($event, 'Inbox')\">\r\n            <i class=\"ft-inbox mr-1 pr-1 float-left\"></i> صندوق ورودی\r\n            <span class=\"badge badge-dark badge-pill float-right\">8</span>\r\n          </a>\r\n          <a class=\"list-group-item list-group-item-action no-border text-left\" (click)=\"GetEmailsByType($event, 'Sent')\">\r\n            <i class=\"fa fa-paper-plane-o mr-1 pr-1 float-left\"></i> صندوق ارسال</a>\r\n          <a class=\"list-group-item list-group-item-action no-border text-left\" (click)=\"GetEmailsByType($event, 'Work')\">\r\n            <i class=\"ft-file mr-1 pr-1 float-left\"></i> پیش نویس</a>\r\n          <a class=\"list-group-item list-group-item-action no-border text-left\" (click)=\"GetStarredEmails($event)\">\r\n            <i class=\"ft-star mr-1 pr-1 float-left\"></i> ستاره دار\r\n            <span class=\"badge badge-danger badge-pill float-right\">3</span>\r\n          </a>\r\n          <a class=\"list-group-item list-group-item-action no-border text-left\" (click)=\"GetEmailsByType($event, 'Trash')\">\r\n            <i class=\"ft-trash-2 mr-1 pr-1 float-left\"></i> زباله ها</a>\r\n        </div>\r\n        <h6 class=\"text-muted text-bold-500 mt-1 mb-1 text-left\">برچسب ها</h6>\r\n        <div class=\"list-group list-group-messages\">\r\n          <a class=\"list-group-item list-group-item-action no-border text-left\" (click)=\"GetEmailsByLabel($event, 'Work')\">\r\n            <i class=\"ft-circle mr-1 pr-1 float-left warning\"></i> کاری\r\n            <span class=\"badge badge-warning badge-pill float-right\">5</span>\r\n          </a>\r\n          <a class=\"list-group-item list-group-item-action no-border text-left\" (click)=\"GetEmailsByLabel($event, 'Family')\">\r\n            <i class=\"ft-circle mr-1 pr-1 float-left danger\"></i> خانوداگی</a>\r\n          <a class=\"list-group-item list-group-item-action no-border text-left\" (click)=\"GetEmailsByLabel($event, 'Friends')\">\r\n            <i class=\"ft-circle mr-1 pr-1 float-left primary\"></i> دوستانه</a>\r\n          <a class=\"list-group-item list-group-item-action no-border text-left\" (click)=\"GetEmailsByLabel($event, 'Private')\">\r\n            <i class=\"ft-circle mr-1 pr-1 float-left success\"></i> خصوصی\r\n            <span class=\"badge badge-success badge-pill float-right\">3</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"email-app-content row\">\r\n    <div class=\"email-search-box w-100 bg-white p-2\">\r\n      <div class=\"media\">\r\n        <span class=\"email-app-sidebar-toggle ft-align-justify font-large-1 mr-2 d-xl-none\" (click)=\"onSidebarToggle()\"></span>\r\n        <div class=\"media-body\">\r\n          <input type=\"text\" class=\"form-control round\" placeholder=\"جستجو در ایمیل ها\" [(ngModel)]=\"searchQuery\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"email-app-content-area w-100\">\r\n      <div class=\"email-app-list-mails p-0\" (click)=\"onListItemClick()\">\r\n        <div [perfectScrollbar] class=\"email-app-list\">\r\n          <div id=\"users-list\">\r\n            <div class=\"list-group\">\r\n              <div class=\"users-list-padding\">\r\n                <a [ngClass]=\"!mail.isDefault ? 'list-group-item list-group-item-action no-border' : 'list-group-item list-group-item-action bg-blue-grey bg-lighten-5 border-right-primary border-right-2'\"\r\n                  *ngFor=\"let mail of mail | search:'mailFrom,subject,body':searchQuery\" (click)=\"DisplayMessage($event, [mail.mailId])\">\r\n                  <span class=\"media\">\r\n                    <span class=\"avatar avatar-md mr-2\">\r\n                      <span *ngIf=\"!mail.hasImage\" class=\"media-object rounded-circle text-circle d-flex mr-2 ml-0 justify-content-center align-items-center + ' ' + {{mail.imageClass}}\">{{\r\n                        mail.imageText }}</span>\r\n                      <img *ngIf=\"mail.hasImage\" class=\"media-object rounded-circle\" [src]=\"mail.imagePath\" alt=\"Generic placeholder image\">\r\n                    </span>\r\n                    <div class=\"media-body text-left\">\r\n                      <h6 [ngClass]=\"mail.isRead === false ? 'list-group-item-heading text-bold-400' : 'list-group-item-heading' \">{{\r\n                        mail.mailFrom }}\r\n                        <span class=\"float-right\">\r\n                          <i class=\"fa-paperclip fa\" *ngIf=\"mail.hasAttachment\"></i>\r\n                          <span [ngClass]=\"mail.isRead === false ? 'font-small-2 primary' : 'font-small-2 float-right'\">{{\r\n                            mail.time }}</span>\r\n                        </span>\r\n                      </h6>\r\n                      <p [ngClass]=\"mail.isRead === false ? 'list-group-item-text text-truncate text-bold-500' : 'list-group-item-text text-truncate' \">{{\r\n                        mail.subject }}</p>\r\n                      <p class=\"list-group-item-text\">{{ mail.body }}\r\n                        <span class=\"float-right primary\" *ngIf=\"mail.hasLabel\">\r\n                          <span class=\"badge mr-1 + ' ' + {{mail.labelClass}}\">{{\r\n                            mail.labelType }}</span>\r\n                          <i *ngIf=\"isEmailImportant\" class=\"float-right font-medium-1 ft-star warning\"></i>\r\n                          <i *ngIf=\"!isEmailImportant\" class=\"float-right font-medium-1 ft-star blue-grey\"></i>\r\n                          <!-- <i [ngClass]=\"mail.isImportant === false ? 'font-medium-1 ft-star blue-grey lighten-3' : 'font-medium-1 ft-star warning'\"></i> -->\r\n                        </span>\r\n                        <span class=\"float-right primary\" *ngIf=\"!mail.hasLabel\">\r\n                          <i class=\"font-medium-1 ft-star blue-grey lighten-3\"></i>\r\n                        </span>\r\n                      </p>\r\n\r\n                    </div>\r\n                  </span>\r\n                </a>\r\n                <p class=\"primary text-center\" *ngIf=\"mail.length === 0\">هیچ پیامی وجود ندارد</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"email-app-mail-content\" #emailContent>\r\n        <div class=\"email-app-mail-content-detail\" *ngIf=\"isMessageSelected\">\r\n          <div class=\"email-app-options card-body\">\r\n            <div class=\"row d-md-none\">\r\n              <button class=\"btn btn-raised btn-primary ml-2 back-to-inbox\" (click)=\"OnBackToInbox()\">\r\n                <i class=\"fa fa-angle-left\"></i> بازگشت به صندوق ورودی</button>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6 col-12 text-left\">\r\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n                    data-original-title=\"Replay\">\r\n                    <i class=\"fa fa-reply\"></i>\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n                    data-original-title=\"Replay All\">\r\n                    <i class=\"fa fa-reply-all\"></i>\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n                    data-original-title=\"Report SPAM\">\r\n                    <i class=\"ft-alert-octagon\"></i>\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n                    data-original-title=\"Delete\">\r\n                    <i class=\"ft-trash-2\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-12 text-right\">\r\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n                    data-original-title=\"Previous\">\r\n                    <i class=\"fa fa-angle-left\"></i>\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n                    data-original-title=\"Next\">\r\n                    <i class=\"fa fa-angle-right\"></i>\r\n                  </button>\r\n                </div>\r\n                <div class=\"btn-group ml-1\">\r\n                  <div ngbDropdown [placement]=\"placement\" class=\"d-inline-block\">\r\n                    <button class=\"btn btn-sm btn-outline-secondary\" id=\"dropdownBasic1\" ngbDropdownToggle>بیشتر</button>\r\n                    <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                      <button class=\"dropdown-item\" (click)=\"markAsUnread();\">به عنوان \"خوانده نشده\" علامت گذاری کن</button>\r\n                      <button class=\"dropdown-item\" *ngIf=\"!isEmailImportant\" (click)=\"markAsImportant();\">علامت گذاری به عنوان مهم است</button>\r\n                      <button class=\"dropdown-item\" *ngIf=\"isEmailImportant\" (click)=\"markAsUnimportant();\">علامت گذاری به عنوان غیر مهم</button>\r\n                      <button class=\"dropdown-item\">اضافه کردن ستاره</button>\r\n                      <button class=\"dropdown-item\">اضافه کردن به کار</button>\r\n                      <div class=\"dropdown-divider\"></div>\r\n                      <button class=\"dropdown-item\">فیلتر ایمیل</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"email-app-title card-body\">\r\n            <h3 class=\"list-group-item-heading text-left\">{{message.subject}}</h3>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6 col-12 text-left\">\r\n                <span class=\"primary\">\r\n                  <span class=\"badge badge-primary \">قبلی</span>\r\n                </span>\r\n              </div>\r\n              <div class=\"col-sm-6 col-12 text-right\">\r\n                <i *ngIf=\"isEmailImportant\" class=\"float-right font-medium-3 ft-star warning\"></i>\r\n                <i *ngIf=\"!isEmailImportant\" class=\"float-right font-medium-3 ft-star\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngFor=\"let messageDetail of message.messages\">\r\n            <div id=\"headingCollapse2\" class=\"card-header p-0\">\r\n              <a (click)=\"messageDetail.collapsed = !messageDetail.collapsed\" [attr.aria-expanded]=\"!messageDetail.collapsed\"\r\n                [attr.aria-controls]=\"messageDetail.messageId\">\r\n                <div class=\"email-app-sender list-group-item list-group-item-action no-border\">\r\n                  <div class=\"media\">\r\n                    <span class=\"avatar avatar-md mr-2\">\r\n                      <span *ngIf=\"!messageDetail.hasAvatar\" class=\"media-object rounded-circle text-circle d-flex mr-2 justify-content-center align-items-center + ' ' + {{messageDetail.avatarClass}}\">{{\r\n                        messageDetail.avatarText }}</span>\r\n                      <img *ngIf=\"messageDetail.hasAvatar\" class=\"media-object rounded-circle\" [src]=\"messageDetail.avatarPath\"\r\n                        alt=\"Generic placeholder image\">\r\n                    </span>\r\n                    <div class=\"media-body text-left\">\r\n                      <h6 class=\"list-group-item-heading\">{{messageDetail.mailFrom}}</h6>\r\n                      <p class=\"list-group-item-text\">به {{messageDetail.mailTo}}\r\n                        <span class=\"primary\">{{messageDetail.time}}</span>\r\n                        <span class=\"float-right\">\r\n                          <i class=\"fa fa-reply mr-1\"></i>\r\n                          <i class=\"fa fa-arrow-right mr-1\"></i>\r\n                          <i class=\"fa fa-ellipsis-v\"></i>\r\n                        </span>\r\n                      </p>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div [id]=\"messageDetail.messageId\" [ngbCollapse]=\"messageDetail.collapsed\">\r\n              <div class=\"card-content\">\r\n                <div class=\"email-app-text card-body\">\r\n                  <div class=\"email-app-message text-left\">\r\n                    <div [innerHTML]=\"messageDetail.body\">\r\n                    </div>\r\n                    <div *ngIf=\"messageDetail.hasAttachment\">\r\n                      <p class=\"primary\">پیوست ها:</p>\r\n                      <div *ngFor=\"let attachment of messageDetail.attachments\" class=\"float-left mr-2\">\r\n                        <img class=\"media-object width-100\" [src]=\"attachment.url\" alt=\"Generic placeholder image\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"email-app-text-action card-body\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"email-app-mail-content-detail\" *ngIf=\"!isMessageSelected\">\r\n          <p class=\"primary text-center\">یک پیام را برای خواندن انتخاب کنید</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header px-4\">\r\n      <h4 class=\"modal-title\">نوشتن ایمیل</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body px-4\">\r\n      <form role=\"form\" class=\"form form-horizontal\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-2 label-control\" for=\"emailTo\">به </label>\r\n          <div class=\"col-md-10\">\r\n            <input type=\"text\" id=\"emailTo\" class=\"form-control\" name=\"emailTo\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-2 label-control\" for=\"emailCC\">Cc / Bcc </label>\r\n          <div class=\"col-md-10\">\r\n            <input type=\"text\" id=\"emailCC\" class=\"form-control\" name=\"emailCC\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-2 label-control\" for=\"emailSubject\">عنوان </label>\r\n          <div class=\"col-md-10\">\r\n            <input type=\"text\" id=\"emailSubject\" class=\"form-control\" name=\"emailSubject\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-md-2 label-control\">پیام</label>\r\n          <div class=\"col-md-10\">\r\n            <quill-editor [style]=\"{height: '200px'}\"></quill-editor>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n    <div class=\"modal-footer px-4\">\r\n      <i class=\"fa-paperclip fa font-large-1 mr-3\"></i>\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">انصراف</button>\r\n      <button type=\"button\" class=\"btn btn-raised btn-danger\" (click)=\"c('Close click')\">ذخیره در پیش نویس</button>\r\n      <button type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"c('Close click')\">ارسال</button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/@theme/inbox/inbox-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/@theme/inbox/inbox-routing.module.ts ***!
  \******************************************************/
/*! exports provided: InboxRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxRoutingModule", function() { return InboxRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox.component */ "./src/app/@theme/inbox/inbox.component.ts");




var routes = [
    {
        path: '',
        component: _inbox_component__WEBPACK_IMPORTED_MODULE_3__["InboxComponent"],
        data: {
            title: 'Inbox'
        },
    }
];
var InboxRoutingModule = /** @class */ (function () {
    function InboxRoutingModule() {
    }
    InboxRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], InboxRoutingModule);
    return InboxRoutingModule;
}());

var routedComponents = [_inbox_component__WEBPACK_IMPORTED_MODULE_3__["InboxComponent"]];


/***/ }),

/***/ "./src/app/@theme/inbox/inbox.component.scss":
/*!***************************************************!*\
  !*** ./src/app/@theme/inbox/inbox.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS9pbmJveC9pbmJveC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/@theme/inbox/inbox.component.ts":
/*!*************************************************!*\
  !*** ./src/app/@theme/inbox/inbox.component.ts ***!
  \*************************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox.service */ "./src/app/@theme/inbox/inbox.service.ts");
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");






// import { ConfigService } from '../services/config.service';
var InboxComponent = /** @class */ (function () {
    function InboxComponent(elRef, renderer, modalService, inboxService, layoutService, configService) {
        var _this = this;
        this.elRef = elRef;
        this.renderer = renderer;
        this.modalService = modalService;
        this.inboxService = inboxService;
        this.layoutService = layoutService;
        this.configService = configService;
        this.placement = "bottom-right";
        this.config = {};
        this.searchQuery = '';
        this.selectedMailId = 4;
        this.isEmailImportant = false;
        this.isCollapsed = true;
        this.isCollapsed1 = false;
        this.isMessageSelected = true;
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.mailType === 'Inbox'; });
        this.message = this.inboxService.message.filter(function (message) { return message.mailId === _this.selectedMailId; })[0];
        this.markAsRead();
        this.checkEmailImportantStatus();
        this.layoutSub = layoutService.changeEmitted$.subscribe(function (direction) {
            var dir = direction.direction;
            if (dir === "rtl") {
                _this.placement = "bottom-left";
            }
            else if (dir === "ltr") {
                _this.placement = "bottom-right";
            }
        });
    }
    InboxComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        this.config = this.configService.templateConf;
    };
    InboxComponent.prototype.ngAfterViewInit = function () {
        if (this.innerWidth < 768) {
            this.renderer.addClass(this.content.nativeElement, 'hide-email-content');
        }
        if (this.config.layout.dir) {
            var dir = this.config.layout.dir;
            if (dir === "rtl") {
                this.placement = "bottom-left";
            }
            else if (dir === "ltr") {
                this.placement = "bottom-right";
            }
        }
    };
    InboxComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    InboxComponent.prototype.markAsRead = function () {
        var _this = this;
        var updateItem = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        var index = this.mail.indexOf(updateItem);
        this.mail[index].isRead = true;
    };
    InboxComponent.prototype.markAsUnread = function () {
        var _this = this;
        var updateItem = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        var index = this.mail.indexOf(updateItem);
        this.mail[index].isRead = false;
    };
    InboxComponent.prototype.markAsImportant = function () {
        var _this = this;
        var updateItem = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        var index = this.mail.indexOf(updateItem);
        this.mail[index].isImportant = true;
        this.isEmailImportant = true;
    };
    InboxComponent.prototype.markAsUnimportant = function () {
        var _this = this;
        var updateItem = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        var index = this.mail.indexOf(updateItem);
        this.mail[index].isImportant = false;
        this.isEmailImportant = false;
    };
    InboxComponent.prototype.checkEmailImportantStatus = function () {
        var _this = this;
        var selectedEmail = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        this.isEmailImportant = selectedEmail.isImportant;
    };
    //inbox user list click event function
    InboxComponent.prototype.DisplayMessage = function (event, mailId) {
        this.selectedMailId = mailId;
        this.message = this.inboxService.message.filter(function (message) { return message.mailId.toString() === mailId.toString(); })[0];
        this.isMessageSelected = true;
        this.markAsRead();
        this.checkEmailImportantStatus();
        var hElement = this.elRef.nativeElement;
        //now you can simply get your elements with their class name
        var allAnchors = hElement.querySelectorAll('.users-list-padding > a.list-group-item');
        //do something with selected elements
        [].forEach.call(allAnchors, function (item) {
            item.setAttribute('class', 'list-group-item list-group-item-action no-border');
        });
        //set active class for selected item
        event.currentTarget.setAttribute('class', 'list-group-item list-group-item-action bg-blue-grey bg-lighten-5 border-right-primary border-right-2');
    };
    //compose popup start
    InboxComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    InboxComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    //compose popup ends
    //inbox labels click event function
    InboxComponent.prototype.GetEmailsByLabel = function (event, labelType) {
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.labelType === labelType; });
        this.SetItemActive(event);
    };
    //inbox type click event function
    InboxComponent.prototype.GetEmailsByType = function (event, type) {
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.mailType === type; });
        this.SetItemActive(event);
    };
    //inbox Starred click event function
    InboxComponent.prototype.GetStarredEmails = function (event) {
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.isImportant === true; });
        this.SetItemActive(event);
    };
    InboxComponent.prototype.SetItemActive = function (event) {
        var hElement = this.elRef.nativeElement;
        //now you can simply get your elements with their class name
        var allAnchors = hElement.querySelectorAll('.list-group-messages > a.list-group-item');
        //do something with selected elements
        [].forEach.call(allAnchors, function (item) {
            item.setAttribute('class', 'list-group-item list-group-item-action no-border');
        });
        //set active class for selected item
        event.currentTarget.setAttribute('class', 'list-group-item active no-border');
    };
    InboxComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 768) {
            this.renderer.addClass(this.content.nativeElement, 'hide-email-content');
        }
        if (this.innerWidth > 768) {
            this.renderer.removeClass(this.content.nativeElement, 'hide-email-content');
        }
    };
    InboxComponent.prototype.onListItemClick = function () {
        this.renderer.removeClass(this.content.nativeElement, 'hide-email-content');
    };
    InboxComponent.prototype.OnBackToInbox = function () {
        this.renderer.addClass(this.content.nativeElement, 'hide-email-content');
    };
    InboxComponent.prototype.onSidebarToggle = function () {
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-none');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-block');
        this.renderer.addClass(this.overlay.nativeElement, 'show');
    };
    InboxComponent.prototype.onContentOverlay = function () {
        this.renderer.removeClass(this.overlay.nativeElement, 'show');
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-block');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-none');
    };
    InboxComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
        { type: _inbox_service__WEBPACK_IMPORTED_MODULE_3__["InboxService"] },
        { type: app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] },
        { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('emailSidebar', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InboxComponent.prototype, "sidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentOverlay', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InboxComponent.prototype, "overlay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('emailContent', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InboxComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], InboxComponent.prototype, "onResize", null);
    InboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__(/*! raw-loader!./inbox.component.html */ "./node_modules/raw-loader/index.js!./src/app/@theme/inbox/inbox.component.html"),
            providers: [_inbox_service__WEBPACK_IMPORTED_MODULE_3__["InboxService"]],
            styles: [__webpack_require__(/*! ./inbox.component.scss */ "./src/app/@theme/inbox/inbox.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _inbox_service__WEBPACK_IMPORTED_MODULE_3__["InboxService"],
            app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"], app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/@theme/inbox/inbox.model.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/inbox/inbox.model.ts ***!
  \*********************************************/
/*! exports provided: Mail, Message, MessageDetail, Attachments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mail", function() { return Mail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDetail", function() { return MessageDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attachments", function() { return Attachments; });
var Mail = /** @class */ (function () {
    function Mail(mailId, mailFrom, subject, body, time, isRead, isImportant, hasAttachment, hasImage, imagePath, imageText, imageClass, mailType, hasLabel, labelType, labelClass, isDefault) {
        this.mailId = mailId;
        this.mailFrom = mailFrom;
        this.subject = subject;
        this.body = body;
        this.time = time;
        this.isRead = isRead;
        this.isImportant = isImportant;
        this.hasAttachment = hasAttachment;
        this.hasImage = hasImage;
        this.imagePath = imagePath;
        this.imageText = imageText;
        this.imageClass = imageClass;
        this.mailType = mailType;
        this.hasLabel = hasLabel;
        this.labelType = labelType;
        this.labelClass = labelClass;
        this.isDefault = isDefault;
    }
    Mail.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: Boolean }
    ]; };
    return Mail;
}());

var Message = /** @class */ (function () {
    function Message(mailId, subject, messagesCount, messages) {
        this.mailId = mailId;
        this.subject = subject;
        this.messagesCount = messagesCount;
        this.messages = messages;
    }
    Message.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: Number },
        { type: Array }
    ]; };
    return Message;
}());

var MessageDetail = /** @class */ (function () {
    function MessageDetail(messageId, mailFrom, mailTo, body, time, collapsed, hasAttachment, hasAvatar, avatarPath, avatarText, avatarClass, attachments) {
        this.messageId = messageId;
        this.mailFrom = mailFrom;
        this.mailTo = mailTo;
        this.body = body;
        this.time = time;
        this.collapsed = collapsed;
        this.hasAttachment = hasAttachment;
        this.hasAvatar = hasAvatar;
        this.avatarPath = avatarPath;
        this.avatarText = avatarText;
        this.avatarClass = avatarClass;
        this.attachments = attachments;
    }
    MessageDetail.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: String },
        { type: Array }
    ]; };
    return MessageDetail;
}());

var Attachments = /** @class */ (function () {
    function Attachments(attachmentId, url) {
        this.attachmentId = attachmentId;
        this.url = url;
    }
    Attachments.ctorParameters = function () { return [
        { type: Number },
        { type: String }
    ]; };
    return Attachments;
}());



/***/ }),

/***/ "./src/app/@theme/inbox/inbox.module.ts":
/*!**********************************************!*\
  !*** ./src/app/@theme/inbox/inbox.module.ts ***!
  \**********************************************/
/*! exports provided: InboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxModule", function() { return InboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inbox-routing.module */ "./src/app/@theme/inbox/inbox-routing.module.ts");
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inbox.component */ "./src/app/@theme/inbox/inbox.component.ts");
/* harmony import */ var app_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/pipes/search.pipe */ "./src/app/shared/pipes/search.pipe.ts");










var InboxModule = /** @class */ (function () {
    function InboxModule() {
    }
    InboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _inbox_routing_module__WEBPACK_IMPORTED_MODULE_7__["InboxRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"]
            ],
            declarations: [
                _inbox_component__WEBPACK_IMPORTED_MODULE_8__["InboxComponent"],
                app_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"]
            ]
        })
    ], InboxModule);
    return InboxModule;
}());



/***/ }),

/***/ "./src/app/@theme/inbox/inbox.service.ts":
/*!***********************************************!*\
  !*** ./src/app/@theme/inbox/inbox.service.ts ***!
  \***********************************************/
/*! exports provided: InboxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxService", function() { return InboxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inbox_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox.model */ "./src/app/@theme/inbox/inbox.model.ts");



var InboxService = /** @class */ (function () {
    function InboxService() {
        // tslint:disable-next-line:member-ordering
        this.inbox = [
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](1, 'تونی دیپ', 'سلام.. بالاخره پیدات کردم..!', 'من حالم خیلی خوبه تو چی', '4:14 صبح', false, true, false, false, '', 'T', 'bg-info', 'Inbox', true, 'خانواده', 'badge badge-danger mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](2, 'لوییس ویلی', 'ممنونم. اجازه بده که ما انجامش بدیم', 'میشه امروز باهم وصل بشیم...', '2:15 صبح', false, false, true, false, '', 'L', 'bg-danger', 'Inbox', false, '', '', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](3, 'راستچین', 'شما یک دیدگاه جدید دارید...', 'سلام فاطمه کاظمی...', '11:18 بعداز ظهر', false, false, false, false, '', 'E', 'bg-warning', 'Inbox', true, 'کاری', 'badge badge-warning mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](4, 'وانی بارتون', 'وضعیت شروع پروژه...', 'سلام. میتونم امروز شمارو ببینم...', 'امروز', true, true, false, true, 'assets/img/portrait/small/avatar-s-7.png', '', '', 'Inbox', true, 'شخصی', 'badge badge-success mr-1', true),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](5, 'سارا مونتگومری', 'طرح بندی جدید سایتو.', 'همه چی به نظر خوب میاد', 'دیروز', true, true, false, true, 'assets/img/portrait/small/avatar-s-5.png', '', '', 'Inbox', true, 'دوستان', 'badge badge-primary mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](6, 'هادر هاول', 'ممنونم. اجازه بده که ما انجامش بدیم', 'میشه امروز باهم وصل بشیم...', '15  خرداد', true, false, true, false, '', 'H', 'bg-success', 'Inbox', false, '', '', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](7, 'کلی رایز', 'I paid it, ممنونم.', 'Check once...', '12  خرداد', false, false, true, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', 'Inbox', true, 'کاری', 'badge badge-warning mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](8, 'وینسنت نلسون', 'تو کجایی فاطمه؟', 'امشب به مهمانی می آیی؟', '11  خرداد', true, false, false, false, '', 'V', 'bg-warning', 'Sent', true, 'دوستان', 'badge badge-primary mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](9, 'الیزابت الیوت', 'Okay, I will call you.', 'Here they are.', '8  خرداد', true, false, false, false, '', 'E', 'bg-info', 'Sent', false, '', '', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](10, 'سارا مونتگومری', 'طرح بندی جدید سایتو.', 'همه چی به نظر خوب میاد', 'دیروز', true, true, true, true, 'assets/img/portrait/small/avatar-s-6.png', '', '', 'Sent', true, 'کاری', 'badge badge-warning mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](11, 'هادر هاول', 'ممنونم. اجازه بده که ما انجامش بدیم', 'میشه امروز باهم وصل بشیم...', '15  خرداد', true, true, false, false, '', 'H', 'bg-success', 'Sent', true, 'شخصی', 'badge badge-success mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](12, 'کلی رایز', 'I paid it, ممنونم.', 'Check once...', '12  خرداد', false, false, true, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', 'Trash', true, 'کاری', 'badge badge-warning mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](13, 'وینسنت نلسون', 'تو کجایی فاطمه؟', 'امشب به مهمانی می آیی؟', '11  خرداد', true, false, false, false, '', 'V', 'bg-warning', 'Trash', true, 'دوستان', 'badge badge-primary mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](14, 'الیزابت الیوت', 'Okay, I will call you.', 'Here they are.', '8  خرداد', true, false, false, false, '', 'E', 'bg-info', 'Trash', false, '', '', false),
        ];
        // tslint:disable-next-line:member-ordering
        this.message = [
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](1, 'سلام.. بالاخره پیدات کردم..!', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'فاطمه کاظمی زاده', 'تونی دیپ', "<p>Hi Tonny,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '12  خرداد', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'تونی دیپ', 'من', "<p>\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u06A9\u0627\u0638\u0645\u06CC\u060C</p>\n                     <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u06A9\u0647 \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0639\u06A9\u0627\u0633\u06CC \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0645\u062A\u0648\u0646 \u0628\u06CC \u0645\u0639\u0646\u06CC \u0648 \u0645\u0641\u0647\u0648\u0645 \u0628\u0647 \u06A9\u0627\u0631 \u0645\u06CC \u0631\u0648\u062F.</p> \n                     <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F.</p>\n                     <p>\u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F.</p>\n                     <p>\u0628\u0627 \u0627\u0645\u06CC\u062F \u0645\u0648\u0641\u0642\u06CC\u062A \u0631\u0648\u0632 \u0627\u0641\u0632\u0648\u0646..</p>", 'امروز', false, false, false, '', 'T', 'bg-info', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](2, 'ممنونم. اجازه بده که ما انجامش بدیم', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'فاطمه کاظمی زاده', 'لوییس ویلی', "<p>\u0633\u0644\u0627\u0645 \u0644\u0648\u06CC\u06CC\u0633</p>\n                    <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u06A9\u0647 \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0639\u06A9\u0627\u0633\u06CC \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0645\u062A\u0648\u0646 \u0628\u06CC \u0645\u0639\u0646\u06CC \u0648 \u0645\u0641\u0647\u0648\u0645 \u0628\u0647 \u06A9\u0627\u0631 \u0645\u06CC \u0631\u0648\u062F.</p> \n                    <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F.</p>\n                    <p>\u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F.</p>\n                    <p>Regards,<br/>John</p>", '15 فروردین', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'لوییس ویلی', 'من', "<p>\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u06A9\u0627\u0638\u0645\u06CC\u060C</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>\u0628\u0627 \u0627\u0645\u06CC\u062F \u0645\u0648\u0641\u0642\u06CC\u062A \u0631\u0648\u0632 \u0627\u0641\u0632\u0648\u0646..</p>", '2:15 صبح', false, true, false, '', 'L', 'bg-danger', [
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](1, 'assets/img/gallery/1.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](2, 'assets/img/gallery/3.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](3, 'assets/img/gallery/21.jpg')
                ]),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](3, 'شما دیدگاه های جدید دارید ...', 1, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'راستچین', 'من', "<p>\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u06A9\u0627\u0638\u0645\u06CC\u060C</p>\n                     <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u06A9\u0647 \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0639\u06A9\u0627\u0633\u06CC \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0645\u062A\u0648\u0646 \u0628\u06CC \u0645\u0639\u0646\u06CC \u0648 \u0645\u0641\u0647\u0648\u0645 \u0628\u0647 \u06A9\u0627\u0631 \u0645\u06CC \u0631\u0648\u062F.</p> \n                     <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F.</p>\n                     <p>\u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F.</p>\n                     <p>\u0628\u0627 \u0627\u0645\u06CC\u062F \u0645\u0648\u0641\u0642\u06CC\u062A \u0631\u0648\u0632 \u0627\u0641\u0632\u0648\u0646..</p>", '11:18 بعداز ظهر', false, false, false, '', 'E', 'bg-warning', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](4, 'Project ABC Status Report', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'فاطمه کاظمی زاده', 'وانی بارتون', "<p>Hi Wayne,</p>\n                    <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u06A9\u0647 \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0639\u06A9\u0627\u0633\u06CC \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0645\u062A\u0648\u0646 \u0628\u06CC \u0645\u0639\u0646\u06CC \u0648 \u0645\u0641\u0647\u0648\u0645 \u0628\u0647 \u06A9\u0627\u0631 \u0645\u06CC \u0631\u0648\u062F.</p> \n                    <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F.</p>\n                    <p>\u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F.</p>\n                    <p>Regards,<br/>John</p>", '12  خرداد', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'وانی بارتون', 'من', "<p>\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u06A9\u0627\u0638\u0645\u06CC\u060C</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>\u0628\u0627 \u0627\u0645\u06CC\u062F \u0645\u0648\u0641\u0642\u06CC\u062A \u0631\u0648\u0632 \u0627\u0641\u0632\u0648\u0646..</p>", 'امروز', false, false, true, 'assets/img/portrait/small/avatar-s-7.png', '', '', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](5, 'Your New UI', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'فاطمه کاظمی زاده', 'سارا مونتگومری', "<p>Hi Sarah,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '12  خرداد', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'سارا مونتگومری', 'من', "<p>\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u06A9\u0627\u0638\u0645\u06CC\u060C</p>\n                     <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u06A9\u0647 \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0639\u06A9\u0627\u0633\u06CC \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0645\u062A\u0648\u0646 \u0628\u06CC \u0645\u0639\u0646\u06CC \u0648 \u0645\u0641\u0647\u0648\u0645 \u0628\u0647 \u06A9\u0627\u0631 \u0645\u06CC \u0631\u0648\u062F.</p> \n                     <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F.</p>\n                     <p>\u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F.</p>\n                     <p>\u0628\u0627 \u0627\u0645\u06CC\u062F \u0645\u0648\u0641\u0642\u06CC\u062A \u0631\u0648\u0632 \u0627\u0641\u0632\u0648\u0646..</p>", 'دیروز', false, false, true, 'assets/img/portrait/small/avatar-s-5.png', '', '', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](6, 'ممنونم. اجازه بده که ما انجامش بدیم', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'فاطمه کاظمی زاده', 'هادر هاول', "<p>Hi Heather,</p>\n                    <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u06A9\u0647 \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0639\u06A9\u0627\u0633\u06CC \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0645\u062A\u0648\u0646 \u0628\u06CC \u0645\u0639\u0646\u06CC \u0648 \u0645\u0641\u0647\u0648\u0645 \u0628\u0647 \u06A9\u0627\u0631 \u0645\u06CC \u0631\u0648\u062F.</p> \n                    <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F.</p>\n                    <p>\u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F.</p>\n                    <p>Regards,<br/>John</p>", '13 May', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'هادر هاول', 'من', "<p>\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u06A9\u0627\u0638\u0645\u06CC\u060C</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>\u0628\u0627 \u0627\u0645\u06CC\u062F \u0645\u0648\u0641\u0642\u06CC\u062A \u0631\u0648\u0632 \u0627\u0641\u0632\u0648\u0646..</p>", '15  خرداد', false, true, false, '', 'H', 'bg-success', [
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](1, 'assets/img/gallery/16.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](2, 'assets/img/gallery/17.jpg')
                ]),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](7, 'I paid it, ممنونم.', 1, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'کلی رایز', 'من', "<p>\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u06A9\u0627\u0638\u0645\u06CC\u060C</p>\n                     <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u06A9\u0647 \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0639\u06A9\u0627\u0633\u06CC \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0645\u062A\u0648\u0646 \u0628\u06CC \u0645\u0639\u0646\u06CC \u0648 \u0645\u0641\u0647\u0648\u0645 \u0628\u0647 \u06A9\u0627\u0631 \u0645\u06CC \u0631\u0648\u062F.</p> \n                     <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F.</p>\n                     <p>\u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F.</p>\n                     <p>\u0628\u0627 \u0627\u0645\u06CC\u062F \u0645\u0648\u0641\u0642\u06CC\u062A \u0631\u0648\u0632 \u0627\u0641\u0632\u0648\u0646..</p>", '12  خرداد', false, false, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](8, 'تو کجایی فاطمه؟', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'فاطمه کاظمی زاده', 'وینسنت نلسون', "<p>Hi Vincent,</p>\n                    <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u06A9\u0647 \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0639\u06A9\u0627\u0633\u06CC \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0645\u062A\u0648\u0646 \u0628\u06CC \u0645\u0639\u0646\u06CC \u0648 \u0645\u0641\u0647\u0648\u0645 \u0628\u0647 \u06A9\u0627\u0631 \u0645\u06CC \u0631\u0648\u062F.</p> \n                    <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F.</p>\n                    <p>\u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F.</p>\n                    <p>Regards,<br/>John</p>", '12 August', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'وینسنت نلسون', 'من', "<p>\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u06A9\u0627\u0638\u0645\u06CC\u060C</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>\u0628\u0627 \u0627\u0645\u06CC\u062F \u0645\u0648\u0641\u0642\u06CC\u062A \u0631\u0648\u0632 \u0627\u0641\u0632\u0648\u0646..</p>", '11  خرداد', false, false, false, '', 'V', 'bg-warning', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](9, 'Okay, I will call you.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'فاطمه کاظمی زاده', 'الیزابت الیوت', "<p>Hi Elizabeth,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '31 May', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'الیزابت الیوت', 'من', "<p>\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u06A9\u0627\u0638\u0645\u06CC\u060C</p>\n                     <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u06A9\u0647 \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0639\u06A9\u0627\u0633\u06CC \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0645\u062A\u0648\u0646 \u0628\u06CC \u0645\u0639\u0646\u06CC \u0648 \u0645\u0641\u0647\u0648\u0645 \u0628\u0647 \u06A9\u0627\u0631 \u0645\u06CC \u0631\u0648\u062F.</p> \n                     <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F.</p>\n                     <p>\u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F.</p>\n                     <p>\u0628\u0627 \u0627\u0645\u06CC\u062F \u0645\u0648\u0641\u0642\u06CC\u062A \u0631\u0648\u0632 \u0627\u0641\u0632\u0648\u0646..</p>", '8  خرداد', false, false, false, '', 'E', 'bg-info', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](10, 'طرح بندی جدید سایتو.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'فاطمه کاظمی زاده', 'سارا مونتگومری', "<p>Hi Sarah,</p>\n                    <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u06A9\u0647 \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0639\u06A9\u0627\u0633\u06CC \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0645\u062A\u0648\u0646 \u0628\u06CC \u0645\u0639\u0646\u06CC \u0648 \u0645\u0641\u0647\u0648\u0645 \u0628\u0647 \u06A9\u0627\u0631 \u0645\u06CC \u0631\u0648\u062F.</p> \n                    <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F.</p>\n                    <p>\u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F.</p>\n                    <p>Regards,<br/>John</p>", '15 فروردین', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'سارا مونتگومری', 'من', "<p>\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u06A9\u0627\u0638\u0645\u06CC\u060C</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>\u0628\u0627 \u0627\u0645\u06CC\u062F \u0645\u0648\u0641\u0642\u06CC\u062A \u0631\u0648\u0632 \u0627\u0641\u0632\u0648\u0646..</p>", 'دیروز', false, true, true, 'assets/img/portrait/small/avatar-s-6.png', '', '', [
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](1, 'assets/img/gallery/1.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](2, 'assets/img/gallery/3.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](3, 'assets/img/gallery/21.jpg')
                ]),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](11, 'ممنونم. اجازه بده که ما انجامش بدیم', 1, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'هادر هاول', 'من', "<p>\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u06A9\u0627\u0638\u0645\u06CC\u060C</p>\n                     <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u06A9\u0647 \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0639\u06A9\u0627\u0633\u06CC \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0645\u062A\u0648\u0646 \u0628\u06CC \u0645\u0639\u0646\u06CC \u0648 \u0645\u0641\u0647\u0648\u0645 \u0628\u0647 \u06A9\u0627\u0631 \u0645\u06CC \u0631\u0648\u062F.</p> \n                     <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F.</p>\n                     <p>\u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F.</p>\n                     <p>\u0628\u0627 \u0627\u0645\u06CC\u062F \u0645\u0648\u0641\u0642\u06CC\u062A \u0631\u0648\u0632 \u0627\u0641\u0632\u0648\u0646..</p>", '15  خرداد', false, false, false, '', 'H', 'bg-success', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](12, 'I paid it, ممنونم.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'فاطمه کاظمی زاده', 'کلی رایز', "<p>Hi Kelly,</p>\n                    <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u06A9\u0647 \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0639\u06A9\u0627\u0633\u06CC \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0645\u062A\u0648\u0646 \u0628\u06CC \u0645\u0639\u0646\u06CC \u0648 \u0645\u0641\u0647\u0648\u0645 \u0628\u0647 \u06A9\u0627\u0631 \u0645\u06CC \u0631\u0648\u062F.</p> \n                    <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F.</p>\n                    <p>\u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F.</p>\n                    <p>Regards,<br/>John</p>", '12  خرداد', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'کلی رایز', 'من', "<p>\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u06A9\u0627\u0638\u0645\u06CC\u060C</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>\u0628\u0627 \u0627\u0645\u06CC\u062F \u0645\u0648\u0641\u0642\u06CC\u062A \u0631\u0648\u0632 \u0627\u0641\u0632\u0648\u0646..</p>", 'امروز', false, false, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](13, 'تو کجایی فاطمه؟', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'فاطمه کاظمی زاده', 'وینسنت نلسون', "<p>Hi Vincent,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '21  خرداد', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'وینسنت نلسون', 'من', "<p>\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u06A9\u0627\u0638\u0645\u06CC\u060C</p>\n                     <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u06A9\u0647 \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0639\u06A9\u0627\u0633\u06CC \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0645\u062A\u0648\u0646 \u0628\u06CC \u0645\u0639\u0646\u06CC \u0648 \u0645\u0641\u0647\u0648\u0645 \u0628\u0647 \u06A9\u0627\u0631 \u0645\u06CC \u0631\u0648\u062F.</p> \n                     <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F.</p>\n                     <p>\u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F.</p>\n                     <p>\u0628\u0627 \u0627\u0645\u06CC\u062F \u0645\u0648\u0641\u0642\u06CC\u062A \u0631\u0648\u0632 \u0627\u0641\u0632\u0648\u0646..</p>", '11  خرداد', false, false, false, '', 'V', 'bg-warning', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](14, 'Okay, I will call you.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'فاطمه کاظمی زاده', 'الیزابت الیوت', "<p>Hi Elizabeth,</p>\n                    <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u06A9\u0647 \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0639\u06A9\u0627\u0633\u06CC \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0645\u062A\u0648\u0646 \u0628\u06CC \u0645\u0639\u0646\u06CC \u0648 \u0645\u0641\u0647\u0648\u0645 \u0628\u0647 \u06A9\u0627\u0631 \u0645\u06CC \u0631\u0648\u062F.</p> \n                    <p>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646 \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641 \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F.</p>\n                    <p>\u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644 \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F \u062A\u0627 \u0628\u0627 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627 \u0634\u0646\u0627\u062E\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u0627\u0646 \u0631\u0627\u06CC\u0627\u0646\u0647 \u0627\u06CC \u0639\u0644\u06CC \u0627\u0644\u062E\u0635\u0648\u0635 \u0637\u0631\u0627\u062D\u0627\u0646 \u062E\u0644\u0627\u0642\u06CC \u0648 \u0641\u0631\u0647\u0646\u06AF \u067E\u06CC\u0634\u0631\u0648 \u062F\u0631 \u0632\u0628\u0627\u0646 \u0641\u0627\u0631\u0633\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F.</p>\n                    <p>Regards,<br/>John</p>", '15 فروردین', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'الیزابت الیوت', 'من', "<p>\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u06A9\u0627\u0638\u0645\u06CC\u060C</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>\u0628\u0627 \u0627\u0645\u06CC\u062F \u0645\u0648\u0641\u0642\u06CC\u062A \u0631\u0648\u0632 \u0627\u0641\u0632\u0648\u0646..</p>", '8  خرداد', false, true, false, '', 'E', 'bg-info', [
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](1, 'assets/img/gallery/1.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](2, 'assets/img/gallery/3.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](3, 'assets/img/gallery/21.jpg')
                ]),
            ])
        ];
    }
    InboxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InboxService);
    return InboxService;
}());



/***/ }),

/***/ "./src/app/shared/pipes/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ })

}]);
//# sourceMappingURL=inbox-inbox-module.js.map