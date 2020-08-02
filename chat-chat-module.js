(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/@theme/chat/chat.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@theme/chat/chat.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-application\">\r\n  <div #contentOverlay class=\"content-overlay\" (click)=\"onContentOverlay()\"></div>\r\n  <div [perfectScrollbar] #chatSidebar class=\"chat-sidebar float-left d-none d-sm-none d-md-block d-lg-block\">\r\n    <div class=\"chat-sidebar-content\">\r\n      <div class=\"chat-fixed-search p-2\">\r\n        <form>\r\n          <div class=\"position-relative has-icon-left\">\r\n            <input class=\"form-control\" id=\"timesheetinput1\" name=\"employeename\" type=\"text\">\r\n            <div class=\"form-control-position\">\r\n              <i class=\"ft-user\"></i>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div id=\"users-list\" class=\"list-group position-relative\">\r\n        <div class=\"users-list-padding\">\r\n          <a class=\"list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2\" (click)=\"SetActive($event, 'chat1')\">\r\n            <span class=\"media\">\r\n              <span class=\"avatar avatar-md avatar-online\">\r\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-3.png\"\r\n                  alt=\"Generic placeholder image\">\r\n                <i></i>\r\n              </span>\r\n              <div class=\"media-body  text-left\">\r\n                <h6 class=\"list-group-item-heading\">المیرا ثابتی\r\n                  <span class=\"font-small-3 float-right primary\">4:14 صبح</span>\r\n                </h6>\r\n                <p class=\"list-group-item-text text-muted\">\r\n                  <i class=\"ft-check primary font-small-2\"></i> باشه\r\n                  <span class=\"float-right primary\">\r\n                    <i class=\"font-medium-1 icon-pin blue-grey lighten-3\"></i>\r\n                  </span>\r\n                </p>\r\n              </div>\r\n            </span>\r\n          </a>\r\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat2')\">\r\n            <span class=\"media\">\r\n              <span class=\"avatar avatar-md avatar-busy\">\r\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-7.png\"\r\n                  alt=\"Generic placeholder image\">\r\n                <i></i>\r\n              </span>\r\n              <div class=\"media-body  text-left\">\r\n                <h6 class=\"list-group-item-heading\">کتی ناظری\r\n                  <span class=\"font-small-3 float-right primary\">9:04 بعد از ظهر</span>\r\n                </h6>\r\n                <p class=\"list-group-item-text text-muted\">\r\n                  <i class=\"ft-check primary font-small-2\"></i> ممنون\r\n                  <span class=\"float-right\r\n                        primary\">\r\n                    <span class=\"badge badge-pill badge-primary\">12</span>\r\n                  </span>\r\n                </p>\r\n              </div>\r\n            </span>\r\n          </a>\r\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat3')\">\r\n            <span class=\"media\">\r\n              <span class=\"avatar avatar-md avatar-away\">\r\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-8.png\"\r\n                  alt=\"Generic placeholder image\">\r\n                <i></i>\r\n              </span>\r\n              <div class=\"media-body  text-left\">\r\n                <h6 class=\"list-group-item-heading\">ساره امیری\r\n                  <span class=\"font-small-3 float-right primary\">2:14 صبح</span>\r\n                </h6>\r\n                <p class=\"list-group-item-text text-muted\">\r\n                  <i class=\"ft-check font-small-2\"></i> سلام امیر\r\n                  <span class=\"float-right primary\">\r\n                    <i class=\"font-medium-1 icon-volume-off blue-grey lighten-3 mr-1\"></i>\r\n                    <span class=\"badge badge-pill badge-primary\">3</span>\r\n                  </span>\r\n                </p>\r\n              </div>\r\n            </span>\r\n          </a>\r\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat4')\">\r\n            <span class=\"media\">\r\n              <span class=\"avatar avatar-md avatar-away\">\r\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-5.png\"\r\n                  alt=\"Generic placeholder image\">\r\n                <i></i>\r\n              </span>\r\n              <div class=\"media-body  text-left\">\r\n                <h6 class=\"list-group-item-heading\">حسین امیری\r\n                  <span class=\"font-small-3 float-right primary\">دیروز</span>\r\n                </h6>\r\n                <p class=\"list-group-item-text text-muted\">\r\n                  <i class=\"ft-check font-small-2\"></i> شما را متصل خواهد کرد</p>\r\n              </div>\r\n            </span>\r\n          </a>\r\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat5')\">\r\n            <span class=\"media\">\r\n              <span class=\"avatar avatar-md avatar-online\">\r\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-9.png\"\r\n                  alt=\"Generic placeholder image\">\r\n                <i></i>\r\n              </span>\r\n              <div class=\"media-body  text-left\">\r\n                <h6 class=\"list-group-item-heading\">حانیه توسلی\r\n                  <span class=\"font-small-3 float-right primary\">جمعه</span>\r\n                </h6>\r\n                <p class=\"list-group-item-text text-muted\">\r\n                  <i class=\"ft-check font-small-2\"></i> ممنون\r\n                  <span class=\"float-right primary\">\r\n                    <span class=\"badge badge-pill badge-primary\">4</span>\r\n                  </span>\r\n                </p>\r\n              </div>\r\n            </span>\r\n          </a>\r\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat6')\">\r\n            <span class=\"media\">\r\n              <span class=\"avatar avatar-md avatar-busy\">\r\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-4.png\"\r\n                  alt=\"Generic placeholder image\">\r\n                <i></i>\r\n              </span>\r\n              <div class=\"media-body  text-left\">\r\n                <h6 class=\"list-group-item-heading\">رویا احمدی\r\n                  <span class=\"font-small-3 float-right primary\">سه شنبه</span>\r\n                </h6>\r\n                <p class=\"list-group-item-text text-muted\">\r\n                  <i class=\"ft-check font-small-2\"></i> خیلی ممنون</p>\r\n              </div>\r\n            </span>\r\n          </a>\r\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat7')\">\r\n            <span class=\"media\">\r\n              <span class=\"avatar avatar-md avatar-online\">\r\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-14.png\"\r\n                  alt=\"Generic placeholder image\">\r\n                <i></i>\r\n              </span>\r\n              <div class=\"media-body  text-left\">\r\n                <h6 class=\"list-group-item-heading\">نسرین زمانی</h6>\r\n                <p class=\"list-group-item-text text-muted\">\r\n                  <i class=\"ft-check primary font-small-2\"></i> شما؟</p>\r\n              </div>\r\n            </span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"chat-name p-2 bg-white\">\r\n    <div class=\"media\">\r\n      <span class=\"chat-app-sidebar-toggle ft-align-justify font-large-1 mr-2 d-none d-block d-sm-block d-md-none\" (click)=\"onSidebarToggle()\"></span>\r\n      <div class=\"media-body text-left\">\r\n        <img [src]=\"[activeChatUserImg]\" width=\"37\" class=\"rounded-circle mr-1\" alt=\"avatar\" />\r\n        <span>{{ activeChatUser }}</span>\r\n        <i class=\"ft-more-vertical float-right mt-1\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <section class=\"chat-app-window\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\r\n    <div class=\"badge badge-dark mb-1\">تاریخچه گفتگو</div>\r\n    <div class=\"chats\">\r\n      <div class=\"chats\">\r\n        <div [ngClass]=\"[chat.chatClass]\" *ngFor=\"let chat of chat\">\r\n          <div class=\"chat-avatar\">\r\n            <a class=\"avatar\" data-toggle=\"tooltip\" data-placement=\"[chat.avatar]\" title=\"\" data-original-title=\"\">\r\n              <img [src]=\"[chat.imagePath]\" class=\"width-50\" alt=\"avatar\" />\r\n            </a>\r\n          </div>\r\n          <div class=\"chat-body\">\r\n            <div class=\"chat-content\" *ngFor=\"let message of chat.messages\">\r\n              <p *ngIf=\"chat.messageType === 'text'\">{{ message }}</p>\r\n              <vg-player *ngIf=\"chat.messageType === 'audio'\">\r\n                <audio [vgMedia]=\"media1\" #media1 id=\"singleAudio\" preload=\"auto\" controls>\r\n                  <source [src]=\"message\" type=\"audio/mp3\">\r\n                </audio>\r\n              </vg-player>\r\n              <vg-player *ngIf=\"chat.messageType === 'video'\" style=\"height: 250px; width: 250px\">\r\n                <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                  <source [src]=\"message\" type=\"video/mp4\">\r\n                </video>\r\n              </vg-player>\r\n            </div>\r\n          </div>\r\n          <p class=\"time\" *ngIf=\"chat.time !='' \">{{chat.time}}</p>\r\n        </div>\r\n\r\n        <div class=\"chat\" *ngIf=\"messages.length > 0\">\r\n          <div class=\"chat-avatar\">\r\n            <a class=\"avatar\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"\" data-original-title=\"\">\r\n              <img src=\"assets/img/portrait/small/avatar-s-1.png\" class=\"width-50\" alt=\"avatar\" />\r\n            </a>\r\n          </div>\r\n          <div class=\"chat-body\">\r\n            <div class=\"chat-content\" *ngFor=\"let message of messages\">\r\n              <p>{{ message }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"chat-app-form bg-blue-grey bg-lighten-5\">\r\n    <form class=\"chat-app-input row mt-2\">\r\n      <fieldset class=\"form-group position-relative has-icon-left col-lg-10 col-8 m-0 px-3\">\r\n        <div class=\"form-control-position\">\r\n          <i class=\"icon-emoticon-smile\"></i>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"iconLeft4\" placeholder=\"پیامتان را بنویسید\"  (keydown.enter)=\"onAddMessage();$event.preventDefault()\"\r\n        #messageInput>\r\n        <div class=\"form-control-position control-position-right\">\r\n          <i class=\"ft-image mr-1\"></i>\r\n        </div>\r\n      </fieldset>\r\n      <fieldset class=\"form-group position-relative has-icon-left col-lg-2 col-4 m-0\">\r\n        <button type=\"button\" class=\"btn btn-raised btn-primary px-4\" (click)=\"onAddMessage()\">\r\n          <i class=\"fa fa-paper-plane-o d-block d-xl-inline-block d-lg-none p-0\"></i>\r\n          <span class=\"d-none d-lg-inline-block ml-1\">ارسال</span>\r\n        </button>\r\n      </fieldset>\r\n    </form>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/@theme/chat/chat-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/@theme/chat/chat-routing.module.ts ***!
  \****************************************************/
/*! exports provided: ChatRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.component */ "./src/app/@theme/chat/chat.component.ts");




var routes = [
    {
        path: '',
        component: _chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"],
        data: {
            title: 'Chat'
        },
    }
];
var ChatRoutingModule = /** @class */ (function () {
    function ChatRoutingModule() {
    }
    ChatRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChatRoutingModule);
    return ChatRoutingModule;
}());

var routedComponents = [_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]];


/***/ }),

/***/ "./src/app/@theme/chat/chat.component.scss":
/*!*************************************************!*\
  !*** ./src/app/@theme/chat/chat.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/@theme/chat/chat.component.ts":
/*!***********************************************!*\
  !*** ./src/app/@theme/chat/chat.component.ts ***!
  \***********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.service */ "./src/app/@theme/chat/chat.service.ts");



var ChatComponent = /** @class */ (function () {
    function ChatComponent(elRef, renderer, chatService) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.chatService = chatService;
        this.messages = new Array();
        this.item = 0;
        this.chat = chatService.chat1;
        this.activeChatUser = "الیزابت الیوت";
        this.activeChatUserImg = "assets/img/portrait/small/avatar-s-3.png";
    }
    ChatComponent.prototype.ngOnInit = function () {
        // $.getScript('./assets/js/chat.js');
    };
    //send button function calls
    ChatComponent.prototype.onAddMessage = function () {
        if (this.messageInputRef.nativeElement.value != "") {
            this.messages.push(this.messageInputRef.nativeElement.value);
        }
        this.messageInputRef.nativeElement.value = "";
        this.messageInputRef.nativeElement.focus();
    };
    //chat user list click event function
    ChatComponent.prototype.SetActive = function (event, chatId) {
        var hElement = this.elRef.nativeElement;
        //now you can simply get your elements with their class name
        var allAnchors = hElement.getElementsByClassName('list-group-item');
        //do something with selected elements
        [].forEach.call(allAnchors, function (item) {
            item.setAttribute('class', 'list-group-item no-border');
        });
        //set active class for selected item
        event.currentTarget.setAttribute('class', 'list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2');
        this.messages = [];
        if (chatId === 'chat1') {
            this.chat = this.chatService.chat1;
            this.activeChatUser = "الیزابت الیوت";
            this.activeChatUserImg = "assets/img/portrait/small/avatar-s-3.png";
        }
        else if (chatId === 'chat2') {
            this.chat = this.chatService.chat2;
            this.activeChatUser = "کریستوفر کندی";
            this.activeChatUserImg = "assets/img/portrait/small/avatar-s-7.png";
        }
        else if (chatId === 'chat3') {
            this.chat = this.chatService.chat3;
            this.activeChatUser = "سارا کریمی";
            this.activeChatUserImg = "assets/img/portrait/small/avatar-s-8.png";
        }
        else if (chatId === 'chat4') {
            this.chat = this.chatService.chat4;
            this.activeChatUser = "بروس راید";
            this.activeChatUserImg = "assets/img/portrait/small/avatar-s-5.png";
        }
        else if (chatId === 'chat5') {
            this.chat = this.chatService.chat5;
            this.activeChatUser = "هادر هاول";
            this.activeChatUserImg = "assets/img/portrait/small/avatar-s-9.png";
        }
        else if (chatId === 'chat6') {
            this.chat = this.chatService.chat6;
            this.activeChatUser = "کلی رایز";
            this.activeChatUserImg = "assets/img/portrait/small/avatar-s-4.png";
        }
        else if (chatId === 'chat7') {
            this.chat = this.chatService.chat7;
            this.activeChatUser = "وینسنت نلسون";
            this.activeChatUserImg = "assets/img/portrait/small/avatar-s-14.png";
        }
    };
    ChatComponent.prototype.onSidebarToggle = function () {
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-none');
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-sm-none');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-block');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-sm-block');
        this.renderer.addClass(this.overlay.nativeElement, 'show');
    };
    ChatComponent.prototype.onContentOverlay = function () {
        this.renderer.removeClass(this.overlay.nativeElement, 'show');
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-block');
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-sm-block');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-none');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-sm-none');
    };
    ChatComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatComponent.prototype, "messageInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatSidebar', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatComponent.prototype, "sidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentOverlay', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatComponent.prototype, "overlay", void 0);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/@theme/chat/chat.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            providers: [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]],
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/@theme/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/@theme/chat/chat.model.ts":
/*!*******************************************!*\
  !*** ./src/app/@theme/chat/chat.model.ts ***!
  \*******************************************/
/*! exports provided: Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
var Chat = /** @class */ (function () {
    function Chat(avatar, chatClass, imagePath, time, messages, messageType) {
        this.avatar = avatar;
        this.chatClass = chatClass;
        this.imagePath = imagePath;
        this.time = time;
        this.messages = messages;
        this.messageType = messageType;
    }
    Chat.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Array },
        { type: String }
    ]; };
    return Chat;
}());



/***/ }),

/***/ "./src/app/@theme/chat/chat.module.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/chat/chat.module.ts ***!
  \********************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! videogular2/core */ "./node_modules/videogular2/core.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(videogular2_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! videogular2/controls */ "./node_modules/videogular2/controls.js");
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(videogular2_controls__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! videogular2/overlay-play */ "./node_modules/videogular2/overlay-play.js");
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! videogular2/buffering */ "./node_modules/videogular2/buffering.js");
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(videogular2_buffering__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/@theme/chat/chat-routing.module.ts");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat.component */ "./src/app/@theme/chat/chat.component.ts");










var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _chat_routing_module__WEBPACK_IMPORTED_MODULE_8__["ChatRoutingModule"],
                videogular2_core__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"],
                videogular2_controls__WEBPACK_IMPORTED_MODULE_4__["VgControlsModule"],
                videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5__["VgOverlayPlayModule"],
                videogular2_buffering__WEBPACK_IMPORTED_MODULE_6__["VgBufferingModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"]
            ],
            declarations: [
                _chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"]
            ]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/@theme/chat/chat.service.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/chat/chat.service.ts ***!
  \*********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.model */ "./src/app/@theme/chat/chat.model.ts");



var ChatService = /** @class */ (function () {
    function ChatService() {
        // tslint:disable-next-line:member-ordering
        this.chat1 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'چطور میتونم بهتون کمک کنم؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-3.png', '1 ساعت قبل', [
                'سلام خانم کاظمی، من به دنبال یکی از بهترین قالب های مدیریت هستم',
                'میشه کمکم کنی تا اینو پیدا کنم؟',
                'من دنبال قالب مدیریت با انگولار 8 هستم'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '30 دقیقه قبل', [
                'حتتتتتما!',
                'من بهت پیشنهاد میکنم که همینو بخر خیلی خوبه'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-3.png', '20 دقیقه قبل', [
                'میشه برام فایل صوتی بفرستی؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ], 'audio'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-3.png', '10 دقیقه قبل', [
                'میشه حالا برام فایل ویدئویی بفرستی؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ], 'video'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-3.png', 'همین حالا', [
                'به به ببین چه قالب تمیز و خوشگلیه',
                'این واسه پروژه بعدی من عالیه',
                'چطوری میتونم این قالبو خریداری کنم؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'ممنونم. از سایت راستچین'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-3.png', '', [
                'من برای اطمینان اینو ازت میخرم',
                'ممنونم.'
            ], 'text'),
        ];
        // tslint:disable-next-line:member-ordering
        this.chat2 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'چطور میتونم بهتون کمک کنم؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.png', '1 hours ago', [
                'اون به من چند راه برای حل مسئله ام معرفی کرد',
                'اما هیچکدوم به دردم نخورد'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '20 دقیقه قبل', [
                'میشه بجای متن برام فایل صوتی بفرستی'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.png', '', [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ], 'audio'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '10 دقیقه قبل', [
                'میشه قوانین سایتو برام توی یک فایل ویدئویی بفرستی؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.png', '', [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ], 'video'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'I’m sorry to hear that',
                'Can I ask which model of projector you own?',
                'What steps did he suggest you to take?',
                'What sort of issue are you having?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.png', '', [
                'An issue with the power.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'Did you make sure the outlet you plugged it into was functional.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.png', '', [
                'Yes'
            ], 'text'),
        ];
        // tslint:disable-next-line:member-ordering
        this.chat3 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'چطور میتونم بهتون کمک کنم؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.png', '1 hours ago', [
                'سلام خانم کاظمی، من به دنبال یکی از بهترین قالب های مدیریت هستم',
                'میشه کمکم کنی تا اینو پیدا کنم؟',
                'من دنبال قالب مدیریت با انگولار 8 هستم'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'حتتتتتما!',
                'من بهت پیشنهاد میکنم که همینو بخر خیلی خوبه'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.png', '20 دقیقه قبل', [
                'میشه برام فایل صوتی بفرستی؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ], 'audio'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.png', '10 دقیقه قبل', [
                'میشه حالا برام فایل ویدئویی بفرستی؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ], 'video'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.png', '', [
                'به به ببین چه قالب تمیز و خوشگلیه',
                'این واسه پروژه بعدی من عالیه',
                'چطوری میتونم این قالبو خریداری کنم؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'ممنونم. از سایت راستچین'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.png', '', [
                'من برای اطمینان اینو ازت میخرم',
                'ممنونم.'
            ], 'text'),
        ];
        // tslint:disable-next-line:member-ordering
        this.chat4 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'چطور میتونم بهتون کمک کنم؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.png', '1 hours ago', [
                'اون به من چند راه برای حل مسئله ام معرفی کرد',
                'اما هیچکدوم به دردم نخورد'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '20 دقیقه قبل', [
                'میشه بجای متن برام فایل صوتی بفرستی'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.png', '', [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ], 'audio'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '10 دقیقه قبل', [
                'میشه قوانین سایتو برام توی یک فایل ویدئویی بفرستی؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.png', '', [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ], 'video'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'I’m sorry to hear that',
                'Can I ask which model of projector you own?',
                'What steps did he suggest you to take?',
                'What sort of issue are you having?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.png', '', [
                'An issue with the power.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'Did you make sure the outlet you plugged it into was functional.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.png', '', [
                'Yes'
            ], 'text'),
        ];
        // tslint:disable-next-line:member-ordering
        this.chat5 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'چطور میتونم بهتون کمک کنم؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.png', '1 hours ago', [
                'سلام خانم کاظمی، من به دنبال یکی از بهترین قالب های مدیریت هستم',
                'میشه کمکم کنی تا اینو پیدا کنم؟',
                'من دنبال قالب مدیریت با انگولار 8 هستم'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'حتتتتتما!',
                'من بهت پیشنهاد میکنم که همینو بخر خیلی خوبه'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.png', '20 دقیقه قبل', [
                'میشه برام فایل صوتی بفرستی؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ], 'audio'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.png', '10 دقیقه قبل', [
                'میشه حالا برام فایل ویدئویی بفرستی؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ], 'video'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.png', '', [
                'به به ببین چه قالب تمیز و خوشگلیه',
                'این واسه پروژه بعدی من عالیه',
                'چطوری میتونم این قالبو خریداری کنم؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'ممنونم. از سایت راستچین'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.png', '', [
                'من برای اطمینان اینو ازت میخرم',
                'ممنونم.'
            ], 'text'),
        ];
        // tslint:disable-next-line:member-ordering
        this.chat6 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'چطور میتونم بهتون کمک کنم؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.png', '1 hours ago', [
                'اون به من چند راه برای حل مسئله ام معرفی کرد',
                'اما هیچکدوم به دردم نخورد'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '20 دقیقه قبل', [
                'میشه بجای متن برام فایل صوتی بفرستی'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.png', '', [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ], 'audio'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '10 دقیقه قبل', [
                'میشه قوانین سایتو برام توی یک فایل ویدئویی بفرستی؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.png', '', [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ], 'video'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'I’m sorry to hear that',
                'Can I ask which model of projector you own?',
                'What steps did he suggest you to take?',
                'What sort of issue are you having?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.png', '', [
                'An issue with the power.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'Did you make sure the outlet you plugged it into was functional.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.png', '', [
                'Yes'
            ], 'text'),
        ];
        // tslint:disable-next-line:member-ordering
        this.chat7 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'چطور میتونم بهتون کمک کنم؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.png', '1 hours ago', [
                'سلام خانم کاظمی، من به دنبال یکی از بهترین قالب های مدیریت هستم',
                'میشه کمکم کنی تا اینو پیدا کنم؟',
                'It should be angular 4 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'حتتتتتما!',
                'Apex admin is the responsive angular 4 bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.png', '20 دقیقه قبل', [
                'میشه برام فایل صوتی بفرستی؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ], 'audio'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.png', '10 دقیقه قبل', [
                'میشه حالا برام فایل ویدئویی بفرستی؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ], 'video'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.png', '', [
                'به به ببین چه قالب تمیز و خوشگلیه',
                'این واسه پروژه بعدی من عالیه',
                'چطوری میتونم این قالبو خریداری کنم؟'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                'ممنونم. از سایت راستچین'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.png', '', [
                'من برای اطمینان اینو ازت میخرم',
                'ممنونم.'
            ], 'text'),
        ];
    }
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());



/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map