(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taskboard-ngrx-taskboard-ngrx-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/@theme/taskboard-ngrx/taskboard-ngrx.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@theme/taskboard-ngrx/taskboard-ngrx.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header text-left\">مدیریت وظایف NgRx</div>\r\n    <p class=\"content-sub-header\"></p>\r\n  </div>\r\n</div>\r\n<!-- Taskboard Starts -->\r\n<section id=\"taskboard\">\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-list mr-1  float-left\"></i> انجام دادن</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='todo'>\r\n        <div *ngFor='let todo of todo'>\r\n          <div class=\"card\">\r\n            <div class=\"card-body pt-3 text-left\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 primary float-left\">{{todo.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit mr-1 info\"></i>\r\n                  <i class=\"ft-trash-2 danger\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{todo.taskMessage}}</p>\r\n              <img [src]=\"[todo.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span\r\n                class=\"primary\">{{todo.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-trending-up mr-1  float-left\"></i> در حال پردازش</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='inProcess'>\r\n        <div *ngFor='let inProcess of inProcess'>\r\n          <div class=\"card\">\r\n            <div class=\"card-body pt-3 text-left\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 info float-left\">{{inProcess.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit mr-1 info\"></i>\r\n                  <i class=\"ft-trash-2 danger\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{inProcess.taskMessage}}</p>\r\n              <img [src]=\"[inProcess.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span\r\n                class=\"info\">{{inProcess.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-thumbs-up mr-1  float-left\"></i>تکمیل شده</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='completed'>\r\n        <div *ngFor='let completed of completed'>\r\n          <div class=\"card\">\r\n            <div class=\"card-body pt-3 text-left\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 success float-left\">{{completed.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit mr-1 info\"></i>\r\n                  <i class=\"ft-trash-2 danger\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{completed.taskMessage}}</p>\r\n              <img [src]=\"[completed.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span\r\n                class=\"success\">{{completed.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 col-12\">\r\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-alert-octagon mr-1  float-left\"></i>در حال برگزاری</h4>\r\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='backLog'>\r\n        <div *ngFor='let backLog of backLog'>\r\n          <div class=\"card\">\r\n            <div class=\"card-body pt-3 text-left\">\r\n              <div class=\"clearfix\">\r\n                <h5 class=\"text-bold-500 warning float-left\">{{backLog.taskTitle}}</h5>\r\n                <div class=\"actions float-right\">\r\n                  <i class=\"ft-edit mr-1 info\"></i>\r\n                  <i class=\"ft-trash-2 danger\"></i>\r\n                </div>\r\n              </div>\r\n              <p>{{backLog.taskMessage}}</p>\r\n              <img [src]=\"[backLog.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span\r\n                class=\"warning\">{{backLog.createdOn}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <section class=\"taskboard-app-form bg-blue-grey bg-lighten-5\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body pt-3 text-left\">\r\n        <h5 class=\"text-bold-500\">ایجاد یک وظیفه ی جدید</h5>\r\n        <form class=\"taskboard-app-input row\">\r\n          <fieldset class=\"position-relative has-icon-left col-md-4 col-12 mb-1\">\r\n            <div class=\"form-control-position\">\r\n              <i class=\"icon-emoticon-smile\"></i>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"todoTitle\" placeholder=\"عنوان\">\r\n            <div class=\"form-control-position control-position-right\">\r\n              <i class=\"ft-image gallery-icon-title\"></i>\r\n            </div>\r\n          </fieldset>\r\n          <fieldset class=\"position-relative has-icon-left col-md-6 col-12 mb-1\">\r\n            <div class=\"form-control-position\">\r\n              <i class=\"icon-emoticon-smile\"></i>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"todoMessage\" placeholder=\"پیام\">\r\n            <div class=\"form-control-position control-position-right\">\r\n              <i class=\"ft-image gallery-icon-msg\"></i>\r\n            </div>\r\n          </fieldset>\r\n\r\n          <fieldset class=\"position-relative has-icon-left col-md-2 col-12 mb-1 add-task-btn\">\r\n            <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\">\r\n              <i class=\"ft ft-plus-circle d-lg-none d-xl-inline-block\"></i>\r\n              <span class=\"d-lg-inline-block d-none ml-1\">ایجاد</span>\r\n            </button>\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n</section>\r\n<!-- Taskboard Ends -->"

/***/ }),

/***/ "./src/app/@theme/taskboard-ngrx/store/taskboard.actions.ts":
/*!******************************************************************!*\
  !*** ./src/app/@theme/taskboard-ngrx/store/taskboard.actions.ts ***!
  \******************************************************************/
/*! exports provided: ADD_TODO, AddTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodo", function() { return AddTodo; });
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../taskboard-ngrx.model */ "./src/app/@theme/taskboard-ngrx/taskboard-ngrx.model.ts");

var ADD_TODO = 'ADD_TODO';
var AddTodo = /** @class */ (function () {
    function AddTodo(payload) {
        this.payload = payload;
        this.type = ADD_TODO;
    }
    AddTodo.ctorParameters = function () { return [
        { type: _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Task"] }
    ]; };
    return AddTodo;
}());



/***/ }),

/***/ "./src/app/@theme/taskboard-ngrx/store/taskboard.reducers.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@theme/taskboard-ngrx/store/taskboard.reducers.ts ***!
  \*******************************************************************/
/*! exports provided: taskReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskReducer", function() { return taskReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../taskboard-ngrx.model */ "./src/app/@theme/taskboard-ngrx/taskboard-ngrx.model.ts");
/* harmony import */ var _taskboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard.actions */ "./src/app/@theme/taskboard-ngrx/store/taskboard.actions.ts");



var initialState = {
    todo: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('ریسپانسیو', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'بهمن 17', 'الیزابت الیوت', 'assets/img/portrait/small/avatar-s-3.png', 'جدید'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('تست دیتابیس', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'بهمن 17', 'الیزابت الیوت', 'assets/img/portrait/small/avatar-s-3.png', 'جدید'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('باگ ها', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'بهمن 17', 'الیزابت الیوت', 'assets/img/portrait/small/avatar-s-3.png', 'جدید')
    ],
    inProcess: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('بازبینی پروژه', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'اردیبهشت 11', 'بروس راید', 'assets/img/portrait/small/avatar-s-1.png', 'درحال پردازش'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('نویگیشن سایت', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'اردیبهشت 11', 'بروس راید', 'assets/img/portrait/small/avatar-s-1.png', 'درحال پردازش'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('بوتسترپ 4', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'اردیبهشت 11', 'بروس راید', 'assets/img/portrait/small/avatar-s-1.png', 'درحال پردازش')
    ],
    backLog: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('ارزیابی', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'مرداد 19', 'کلی رایز', 'assets/img/portrait/small/avatar-s-5.png', 'تکمیل'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('زمان بندی', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'مرداد 19', 'کلی رایز', 'assets/img/portrait/small/avatar-s-5.png', 'تکمیل'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('یونیت تست', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'مرداد 19', 'کلی رایز', 'assets/img/portrait/small/avatar-s-5.png', 'تکمیل')
    ],
    completed: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('آنگولار 8', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'دی 22', 'سارا کریمی', 'assets/img/portrait/small/avatar-s-7.png', 'تکمیل'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('فیلد ها', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'دی 22', 'سارا کریمی', 'assets/img/portrait/small/avatar-s-7.png', 'تکمیل'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('بازبینی وظیفه', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'دی 22', 'سارا کریمی', 'assets/img/portrait/small/avatar-s-7.png', 'تکمیل')
    ]
};
function taskReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_taskboard_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_TODO"]):
            var todo = state.todo.slice();
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { todo: state.todo.concat([action.payload]) });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/@theme/taskboard-ngrx/taskboard-ngrx-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/@theme/taskboard-ngrx/taskboard-ngrx-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: TaskboardNGRXRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXRoutingModule", function() { return TaskboardNGRXRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskboard-ngrx.component */ "./src/app/@theme/taskboard-ngrx/taskboard-ngrx.component.ts");




var routes = [
    {
        path: '',
        component: _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_3__["TaskboardNGRXComponent"],
        data: {
            title: 'Taskboard'
        },
    }
];
var TaskboardNGRXRoutingModule = /** @class */ (function () {
    function TaskboardNGRXRoutingModule() {
    }
    TaskboardNGRXRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TaskboardNGRXRoutingModule);
    return TaskboardNGRXRoutingModule;
}());



/***/ }),

/***/ "./src/app/@theme/taskboard-ngrx/taskboard-ngrx.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/@theme/taskboard-ngrx/taskboard-ngrx.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0; }\n\n/* dragula-specific example page styles */\n\n.dragdrop-wrapper {\n  display: table; }\n\n/* .dragdrop-container {\r\n    display: table-cell;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    width: 25%;\r\n  } */\n\n.dragdrop-container:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n/*\r\n   * note that styling gu-mirror directly is a bad practice because it's too generic.\r\n   * you're better off giving the draggable elements a unique class and styling that directly!\r\n   */\n\n.dragdrop-container > div,\n.gu-mirror {\n  transition: opacity 0.4s ease-in-out; }\n\n.dragdrop-container > div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab; }\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing; }\n\n.dragdrop-container .ex-moved {\n  background-color: #e74c3c; }\n\n.dragdrop-container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n#left-lovehandles > div,\n#right-lovehandles > div {\n  cursor: initial; }\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move; }\n\n.image-thing {\n  margin: 20px 0;\n  display: block;\n  text-align: center; }\n\n.slack-join {\n  position: absolute;\n  font-weight: normal;\n  font-size: 14px;\n  right: 10px;\n  top: 50%;\n  margin-top: -8px;\n  line-height: 16px; }\n\n.taskboard-app-input i.ft.ft-plus-circle {\n  position: relative;\n  top: 2px; }\n\n.taskboard-app-input .form-control-position.control-position-right .gallery-icon-title {\n  position: absolute;\n  left: 363px;\n  font-size: 1.2rem;\n  top: 7px; }\n\n.taskboard-app-input .form-control-position.control-position-right .gallery-icon-msg {\n  position: absolute;\n  left: 573px;\n  font-size: 1.2rem;\n  top: 7px; }\n\n@media (max-width: 992px) {\n  .taskboard-app-input i.ft.ft-plus-circle {\n    padding: 0.25rem; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHRoZW1lL3Rhc2tib2FyZC1uZ3J4L0Q6XFxTb3VyY2VfS2FyYXZpXFxHaXRIdWJcXE50a0Ntcy5DbGllbnQuV2ViLkNvbnRyb2xQYW5lbFxcY3BhbmVsdjRTb3VyY2Uvc3JjXFxhcHBcXEB0aGVtZVxcdGFza2JvYXJkLW5ncnhcXHRhc2tib2FyZC1uZ3J4LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9AdGhlbWUvdGFza2JvYXJkLW5ncngvdGFza2JvYXJkLW5ncnguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTLEVBQUE7O0FBR1gseUNBQUE7O0FBQ0E7RUFDRSxjQUFjLEVBQUE7O0FBR2hCOzs7O0tDRUs7O0FER0w7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7OztJQ0FJOztBRElKOztFQUtFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLFlBQVk7RUFDWixZQUFZO0VBRVosb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZ0JBQWdCO0VBRWhCLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLDBDQUEwQyxFQUFBOztBQUc1Qzs7RUFFRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsWUFBWSxFQUFBOztBQUdkO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFFSSxrQkFBa0I7RUFDbEIsUUFBUSxFQUFBOztBQUhaO0VBT00sa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsUUFBUSxFQUFBOztBQVZkO0VBY00sa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsUUFBUSxFQUFBOztBQUtkO0VBQ0U7SUFFSSxnQkFBZ0IsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS90YXNrYm9hcmQtbmdyeC90YXNrYm9hcmQtbmdyeC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5naC1mb3JrIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLyogZHJhZ3VsYS1zcGVjaWZpYyBleGFtcGxlIHBhZ2Ugc3R5bGVzICovXHJcbi5kcmFnZHJvcC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLyogLmRyYWdkcm9wLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9ICovXHJcbi5kcmFnZHJvcC1jb250YWluZXI6bnRoLWNoaWxkKG9kZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLypcclxuICAgKiBub3RlIHRoYXQgc3R5bGluZyBndS1taXJyb3IgZGlyZWN0bHkgaXMgYSBiYWQgcHJhY3RpY2UgYmVjYXVzZSBpdCdzIHRvbyBnZW5lcmljLlxyXG4gICAqIHlvdSdyZSBiZXR0ZXIgb2ZmIGdpdmluZyB0aGUgZHJhZ2dhYmxlIGVsZW1lbnRzIGEgdW5pcXVlIGNsYXNzIGFuZCBzdHlsaW5nIHRoYXQgZGlyZWN0bHkhXHJcbiAgICovXHJcbi5kcmFnZHJvcC1jb250YWluZXIgPiBkaXYsXHJcbi5ndS1taXJyb3Ige1xyXG4gIC8vIG1hcmdpbjogMTBweDtcclxuICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5kcmFnZHJvcC1jb250YWluZXIgPiBkaXYge1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBjdXJzb3I6IGdyYWI7XHJcbiAgY3Vyc29yOiAtbW96LWdyYWI7XHJcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XHJcbn1cclxuXHJcbi5ndS1taXJyb3Ige1xyXG4gIGN1cnNvcjogZ3JhYmJpbmc7XHJcbiAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xyXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcclxufVxyXG5cclxuLmRyYWdkcm9wLWNvbnRhaW5lciAuZXgtbW92ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XHJcbn1cclxuXHJcbi5kcmFnZHJvcC1jb250YWluZXIuZXgtb3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4jbGVmdC1sb3ZlaGFuZGxlcyA+IGRpdixcclxuI3JpZ2h0LWxvdmVoYW5kbGVzID4gZGl2IHtcclxuICBjdXJzb3I6IGluaXRpYWw7XHJcbn1cclxuXHJcbi5oYW5kbGUge1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBjdXJzb3I6IG1vdmU7XHJcbn1cclxuXHJcbi5pbWFnZS10aGluZyB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2xhY2stam9pbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi50YXNrYm9hcmQtYXBwLWlucHV0IHtcclxuICBpLmZ0LmZ0LXBsdXMtY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9sLXBvc2l0aW9uLmNvbnRyb2wtcG9zaXRpb24tcmlnaHQge1xyXG4gICAgLmdhbGxlcnktaWNvbi10aXRsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMzYzcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB0b3A6IDdweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ2FsbGVyeS1pY29uLW1zZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogNTczcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB0b3A6IDdweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC50YXNrYm9hcmQtYXBwLWlucHV0IHtcclxuICAgIGkuZnQuZnQtcGx1cy1jaXJjbGUge1xyXG4gICAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZ2gtZm9yayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm9yZGVyOiAwOyB9XG5cbi8qIGRyYWd1bGEtc3BlY2lmaWMgZXhhbXBsZSBwYWdlIHN0eWxlcyAqL1xuLmRyYWdkcm9wLXdyYXBwZXIge1xuICBkaXNwbGF5OiB0YWJsZTsgfVxuXG4vKiAuZHJhZ2Ryb3AtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH0gKi9cbi5kcmFnZHJvcC1jb250YWluZXI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7IH1cblxuLypcclxuICAgKiBub3RlIHRoYXQgc3R5bGluZyBndS1taXJyb3IgZGlyZWN0bHkgaXMgYSBiYWQgcHJhY3RpY2UgYmVjYXVzZSBpdCdzIHRvbyBnZW5lcmljLlxyXG4gICAqIHlvdSdyZSBiZXR0ZXIgb2ZmIGdpdmluZyB0aGUgZHJhZ2dhYmxlIGVsZW1lbnRzIGEgdW5pcXVlIGNsYXNzIGFuZCBzdHlsaW5nIHRoYXQgZGlyZWN0bHkhXHJcbiAgICovXG4uZHJhZ2Ryb3AtY29udGFpbmVyID4gZGl2LFxuLmd1LW1pcnJvciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDsgfVxuXG4uZHJhZ2Ryb3AtY29udGFpbmVyID4gZGl2IHtcbiAgY3Vyc29yOiBtb3ZlO1xuICBjdXJzb3I6IGdyYWI7XG4gIGN1cnNvcjogLW1vei1ncmFiO1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjsgfVxuXG4uZ3UtbWlycm9yIHtcbiAgY3Vyc29yOiBncmFiYmluZztcbiAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7IH1cblxuLmRyYWdkcm9wLWNvbnRhaW5lciAuZXgtbW92ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjOyB9XG5cbi5kcmFnZHJvcC1jb250YWluZXIuZXgtb3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTsgfVxuXG4jbGVmdC1sb3ZlaGFuZGxlcyA+IGRpdixcbiNyaWdodC1sb3ZlaGFuZGxlcyA+IGRpdiB7XG4gIGN1cnNvcjogaW5pdGlhbDsgfVxuXG4uaGFuZGxlIHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGN1cnNvcjogbW92ZTsgfVxuXG4uaW1hZ2UtdGhpbmcge1xuICBtYXJnaW46IDIwcHggMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uc2xhY2stam9pbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4OyB9XG5cbi50YXNrYm9hcmQtYXBwLWlucHV0IGkuZnQuZnQtcGx1cy1jaXJjbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4OyB9XG5cbi50YXNrYm9hcmQtYXBwLWlucHV0IC5mb3JtLWNvbnRyb2wtcG9zaXRpb24uY29udHJvbC1wb3NpdGlvbi1yaWdodCAuZ2FsbGVyeS1pY29uLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzNjNweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRvcDogN3B4OyB9XG5cbi50YXNrYm9hcmQtYXBwLWlucHV0IC5mb3JtLWNvbnRyb2wtcG9zaXRpb24uY29udHJvbC1wb3NpdGlvbi1yaWdodCAuZ2FsbGVyeS1pY29uLW1zZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTczcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0b3A6IDdweDsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnRhc2tib2FyZC1hcHAtaW5wdXQgaS5mdC5mdC1wbHVzLWNpcmNsZSB7XG4gICAgcGFkZGluZzogMC4yNXJlbTsgfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/@theme/taskboard-ngrx/taskboard-ngrx.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@theme/taskboard-ngrx/taskboard-ngrx.component.ts ***!
  \*******************************************************************/
/*! exports provided: TaskboardNGRXComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXComponent", function() { return TaskboardNGRXComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard-ngrx.model */ "./src/app/@theme/taskboard-ngrx/taskboard-ngrx.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_taskboard_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/taskboard.actions */ "./src/app/@theme/taskboard-ngrx/store/taskboard.actions.ts");





var TaskboardNGRXComponent = /** @class */ (function () {
    function TaskboardNGRXComponent(elRef, store) {
        this.elRef = elRef;
        this.store = store;
    }
    TaskboardNGRXComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskboardState = this.store.select('task');
        this.subscription = this.taskboardState.subscribe(function (data) {
            _this.todo = data.todo;
            _this.inProcess = data.inProcess;
            _this.backLog = data.backLog;
            _this.completed = data.completed;
        });
    };
    TaskboardNGRXComponent.prototype.onAddTask = function () {
        if (this.messageInputRef.nativeElement.value != "" && this.titleInputRef.nativeElement.value != "") {
            this.store.dispatch(new _store_taskboard_actions__WEBPACK_IMPORTED_MODULE_4__["AddTodo"](new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_2__["Task"](this.titleInputRef.nativeElement.value, this.messageInputRef.nativeElement.value, 'Nov 12', 'الیزابت الیوت', 'assets/img/portrait/small/avatar-s-3.png', 'New')));
        }
        this.titleInputRef.nativeElement.value = "";
        this.messageInputRef.nativeElement.value = "";
        this.titleInputRef.nativeElement.focus();
    };
    TaskboardNGRXComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoTitle', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardNGRXComponent.prototype, "titleInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoMessage', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardNGRXComponent.prototype, "messageInputRef", void 0);
    TaskboardNGRXComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngrx-taskboard',
            template: __webpack_require__(/*! raw-loader!./taskboard-ngrx.component.html */ "./node_modules/raw-loader/index.js!./src/app/@theme/taskboard-ngrx/taskboard-ngrx.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./taskboard-ngrx.component.scss */ "./src/app/@theme/taskboard-ngrx/taskboard-ngrx.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], TaskboardNGRXComponent);
    return TaskboardNGRXComponent;
}());



/***/ }),

/***/ "./src/app/@theme/taskboard-ngrx/taskboard-ngrx.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/@theme/taskboard-ngrx/taskboard-ngrx.model.ts ***!
  \***************************************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(taskTitle, taskMessage, createdOn, createdBy, assignedTo, status) {
        this.taskTitle = taskTitle;
        this.taskMessage = taskMessage;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.assignedTo = assignedTo;
        this.status = status;
    }
    Task.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Task;
}());



/***/ }),

/***/ "./src/app/@theme/taskboard-ngrx/taskboard-ngrx.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/@theme/taskboard-ngrx/taskboard-ngrx.module.ts ***!
  \****************************************************************/
/*! exports provided: TaskboardNGRXModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXModule", function() { return TaskboardNGRXModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _taskboard_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskboard-ngrx-routing.module */ "./src/app/@theme/taskboard-ngrx/taskboard-ngrx-routing.module.ts");
/* harmony import */ var _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskboard-ngrx.component */ "./src/app/@theme/taskboard-ngrx/taskboard-ngrx.component.ts");
/* harmony import */ var _store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/taskboard.reducers */ "./src/app/@theme/taskboard-ngrx/store/taskboard.reducers.ts");








var TaskboardNGRXModule = /** @class */ (function () {
    function TaskboardNGRXModule() {
    }
    TaskboardNGRXModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _taskboard_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskboardNGRXRoutingModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('task', _store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_7__["taskReducer"])
            ],
            declarations: [
                _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_6__["TaskboardNGRXComponent"]
            ]
        })
    ], TaskboardNGRXModule);
    return TaskboardNGRXModule;
}());



/***/ })

}]);
//# sourceMappingURL=taskboard-ngrx-taskboard-ngrx-module.js.map