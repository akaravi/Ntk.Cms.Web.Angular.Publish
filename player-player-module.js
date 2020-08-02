(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["player-player-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/@theme/player/player.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@theme/player/player.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header text-left\">پخش کننده</div>\r\n    <p class=\"content-sub-header\"></p>\r\n  </div>\r\n</div>\r\n<!-- Player Starts -->\r\n<section id=\"players\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header text-left\">\r\n      <h4>پخش کننده فیلم</h4>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <vg-player>\r\n            <vg-overlay-play></vg-overlay-play>\r\n            <vg-buffering></vg-buffering>\r\n\r\n            <vg-scrub-bar>\r\n              <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\r\n              <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\r\n            </vg-scrub-bar>\r\n\r\n            <vg-controls>\r\n              <vg-play-pause></vg-play-pause>\r\n              <vg-playback-button></vg-playback-button>\r\n\r\n              <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n              <vg-scrub-bar style=\"pointer-events: none;\"></vg-scrub-bar>\r\n\r\n              <vg-time-display vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\r\n              <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n              <vg-track-selector></vg-track-selector>\r\n              <vg-mute></vg-mute>\r\n              <vg-volume></vg-volume>\r\n\r\n              <vg-fullscreen></vg-fullscreen>\r\n            </vg-controls>\r\n\r\n            <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" crossorigin>\r\n              <source src=\"http://static.videogular.com/assets/videos/videogular.mp4\" type=\"video/mp4\">\r\n              <source src=\"http://static.videogular.com/assets/videos/videogular.ogg\" type=\"video/ogg\">\r\n              <source src=\"http://static.videogular.com/assets/videos/videogular.webm\" type=\"video/webm\">\r\n\r\n              <track kind=\"subtitles\" label=\"English\" src=\"http://static.videogular.com/assets/subs/pale-blue-dot.vtt\"\r\n                srclang=\"en\" default>\r\n              <track kind=\"subtitles\" label=\"Español\" src=\"http://static.videogular.com/assets/subs/pale-blue-dot-es.vtt\"\r\n                srclang=\"es\">\r\n            </video>\r\n          </vg-player>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card audio-player\">\r\n    <div class=\"card-header text-left\">\r\n      <h4>پخش کننده آهنگ</h4>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-lg-12\">\r\n          <vg-player class=\"bg-white\">\r\n            <audio [vgMedia]=\"media1\" #media1 id=\"singleAudio\" preload=\"auto\" controls style=\"width: 100%\">\r\n              <source src=\"http://static.videogular.com/assets/audios/videogular.mp3\" type=\"audio/mp3\">\r\n            </audio>\r\n          </vg-player>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- Player Ends -->\r\n"

/***/ }),

/***/ "./src/app/@theme/player/player-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/@theme/player/player-routing.module.ts ***!
  \********************************************************/
/*! exports provided: PlayerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerRoutingModule", function() { return PlayerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player.component */ "./src/app/@theme/player/player.component.ts");




var routes = [
    {
        path: '',
        component: _player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"],
        data: {
            title: 'Player'
        },
    }
];
var PlayerRoutingModule = /** @class */ (function () {
    function PlayerRoutingModule() {
    }
    PlayerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PlayerRoutingModule);
    return PlayerRoutingModule;
}());



/***/ }),

/***/ "./src/app/@theme/player/player.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/@theme/player/player.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/@theme/player/player.component.ts":
/*!***************************************************!*\
  !*** ./src/app/@theme/player/player.component.ts ***!
  \***************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/index.js!./src/app/@theme/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/@theme/player/player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/@theme/player/player.module.ts":
/*!************************************************!*\
  !*** ./src/app/@theme/player/player.module.ts ***!
  \************************************************/
/*! exports provided: PlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerModule", function() { return PlayerModule; });
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
/* harmony import */ var _player_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player-routing.module */ "./src/app/@theme/player/player-routing.module.ts");
/* harmony import */ var _player_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player.component */ "./src/app/@theme/player/player.component.ts");









var PlayerModule = /** @class */ (function () {
    function PlayerModule() {
    }
    PlayerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _player_routing_module__WEBPACK_IMPORTED_MODULE_7__["PlayerRoutingModule"],
                videogular2_core__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"],
                videogular2_controls__WEBPACK_IMPORTED_MODULE_4__["VgControlsModule"],
                videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5__["VgOverlayPlayModule"],
                videogular2_buffering__WEBPACK_IMPORTED_MODULE_6__["VgBufferingModule"]
            ],
            declarations: [
                _player_component__WEBPACK_IMPORTED_MODULE_8__["PlayerComponent"]
            ]
        })
    ], PlayerModule);
    return PlayerModule;
}());



/***/ })

}]);
//# sourceMappingURL=player-player-module.js.map