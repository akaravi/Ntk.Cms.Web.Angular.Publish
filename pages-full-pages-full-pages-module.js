(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-full-pages-full-pages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/faq/faq.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@theme/pages/full-pages/faq/faq.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header\">سوالات متداول</div>\r\n    <p class=\"content-sub-header\">ما برای کمک اینجا هستیم</p>\r\n  </div>\r\n</div>\r\n<!-- faq starts -->\r\n<section id=\"faq\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card gradient-purple-bliss white text-center p-4\">\r\n        <div class=\"card-header\">\r\n          <h1>ما برای کمک اینجا هستیم</h1>\r\n          <p><em>اگر شما هر گونه سوال شما می توانید از زیر درخواست کنید و یا آنچه را که دنبال آن هستید وارد کنید!</em></p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <fieldset class=\"form-group col-xl-12 col-lg-10 col-10\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"جستجو در سوالات متداول...\" (input)=\"filter($event.target.value)\"\r\n              #messageInput>\r\n          </fieldset>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card text-truncate\">\r\n        <div class=\"card-body\">\r\n          <ngb-accordion [closeOthers]=\"true\">\r\n            <ngb-panel [id]=\"faq.faqId\" *ngFor=\"let faq of faqs\">\r\n              <ng-template ngbPanelTitle>\r\n                <h5 class=\"mb-0\"><i class=\"icon-question mr-2\"></i> <span> {{faq.title}}</span></h5>\r\n              </ng-template>\r\n              <ng-template ngbPanelContent>\r\n                <div >\r\n                  {{faq.content}}\r\n                </div>\r\n              </ng-template>\r\n            </ngb-panel>\r\n          </ngb-accordion>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- faq Ends -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/gallery/gallery-page.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@theme/pages/full-pages/gallery/gallery-page.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Gallery Hover Effect Starts-->\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"content-header\">افکت شناور</div>\r\n        <p class=\"content-sub-header\">\r\n            گالری گالری تصویر با 30 اثر ظریف شناور. برای نشان دادن هر اثر شناور سعی کنید به زیر تصاویر نمایشی بتابانید. \r\n        </p>\r\n    </div>\r\n</div>\r\n<section id=\"hover-effects\" class=\"card\">\r\n  <div class=\"card-content\">\r\n    <div class=\"card-body my-gallery\" itemscope itemtype=\"http://schema.org/ImageGallery\">\r\n      <div class=\"grid-hover\">\r\n        <h5 class=\"text-bold-400 text-uppercase\">Lily</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-lily\">\r\n              <img src=\"assets/img/gallery/12.jpg\" alt=\"img12\" />\r\n              <figcaption>\r\n                <div>\r\n                  <h2>رضا\r\n                    <span>حسینی</span>\r\n                  </h2>\r\n                  <p>لورم ایپسوم متن ساختگی با تولید سادگی</p>\r\n                </div>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-lily\">\r\n              <img src=\"assets/img/gallery/1.jpg\" alt=\"img1\" />\r\n              <figcaption>\r\n                <div>\r\n                  <h2>رضا\r\n                    <span>حسینی</span>\r\n                  </h2>\r\n                  <p>لورم ایپسوم متن ساختگی با تولید سادگی</p>\r\n                </div>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-hover\">\r\n        <h5 class=\"text-bold-400 text-uppercase\">زیبا</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-sadie\">\r\n              <img src=\"assets/img/gallery/2.jpg\" alt=\"img02\" />\r\n              <figcaption>\r\n                <h2>مقدس\r\n                  <span>زیبا</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی\r\n                  <br>تولید سادگی نامفهوم</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-sadie\">\r\n              <img src=\"assets/img/gallery/14.jpg\" alt=\"img14\" />\r\n              <figcaption>\r\n                <h2>مقدس\r\n                  <span>Sadie</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی\r\n                  <br>تولید سادگی نامفهوم</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-hover\">\r\n        <h5 class=\"text-bold-400 text-uppercase\">عسل</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-honey\">\r\n              <img src=\"assets/img/gallery/4.jpg\" alt=\"img04\" />\r\n              <figcaption>\r\n                <h2>رویایی\r\n                  <span>عسل</span> <i>جدید</i></h2>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-honey\">\r\n              <img src=\"assets/img/gallery/5.jpg\" alt=\"img05\" />\r\n              <figcaption>\r\n                <h2>رویایی\r\n                  <span>عسل</span> <i>جدید</i></h2>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-hover\">\r\n        <h5 class=\"text-bold-400 text-uppercase\">لیلا</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-layla\">\r\n              <img src=\"assets/img/gallery/6.jpg\" alt=\"img06\" />\r\n              <figcaption>\r\n                <h2>باهوش\r\n                  <span>لیلا</span>\r\n                </h2>\r\n                <p>شرایط فعلی تکنولوژی مورد نیاز </p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-layla\">\r\n              <img src=\"assets/img/gallery/3.jpg\" alt=\"img03\" />\r\n              <figcaption>\r\n                <h2>باهوش\r\n                  <span>لیلا</span>\r\n                </h2>\r\n                <p>شرایط فعلی تکنولوژی مورد نیاز </p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-hover\">\r\n        <h5 class=\"text-bold-400 text-uppercase\">کوه</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-zoe\">\r\n              <img src=\"assets/img/gallery/25.jpg\" alt=\"img25\" />\r\n              <figcaption>\r\n                <h2>ساختن\r\n                  <span>کوه</span>\r\n                </h2>\r\n                <p class=\"icon-links\">\r\n                  <a class=\"mr-1\"><i class=\"ft-heart\"></i></a>\r\n                  <a class=\"mr-1\"><i class=\"ft-eye\"></i></a>\r\n                  <a class=\"mr-1\"><i class=\"ft-edit\"></i></a>\r\n                </p>\r\n                <p class=\"description\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-zoe\">\r\n              <img src=\"assets/img/gallery/26.jpg\" alt=\"img26\" />\r\n              <figcaption>\r\n                <h2>ساختن\r\n                  <span>کوه</span>\r\n                </h2>\r\n                <p class=\"icon-links\">\r\n                  <a class=\"mr-1\"><i class=\"ft-heart\"></i></a>\r\n                  <a class=\"mr-1\"><i class=\"ft-eye\"></i></a>\r\n                  <a class=\"mr-1\"><i class=\"ft-edit\"></i></a>\r\n                </p>\r\n                <p class=\"description\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-hover\">\r\n        <h5 class=\"text-bold-400 text-uppercase\">زیبا شناسی</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-oscar\">\r\n              <img src=\"assets/img/gallery/9.jpg\" alt=\"img09\" />\r\n              <figcaption>\r\n                <h2>عمیق\r\n                  <span>زیبا شناسی</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-oscar\">\r\n              <img src=\"assets/img/gallery/10.jpg\" alt=\"img10\" />\r\n              <figcaption>\r\n                <h2>عمیق\r\n                  <span>زیبا شناسی</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-hover\">\r\n        <h5 class=\"text-bold-400 text-uppercase\">کتاب</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-marley\">\r\n              <img src=\"assets/img/gallery/11.jpg\" alt=\"img11\" />\r\n              <figcaption>\r\n                <h2>زیبا\r\n                  <span>کتاب</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-marley\">\r\n              <img src=\"assets/img/gallery/12.jpg\" alt=\"img12\" />\r\n              <figcaption>\r\n                <h2>زیبا\r\n                  <span>کتاب</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-hover\">\r\n        <h5 class=\"text-bold-400 text-uppercase\">ذهن</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-ruby\">\r\n              <img src=\"assets/img/gallery/13.jpg\" alt=\"img13\" />\r\n              <figcaption>\r\n                <h2>آرام\r\n                  <span>ذهن</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-ruby\">\r\n              <img src=\"assets/img/gallery/14.jpg\" alt=\"img14\" />\r\n              <figcaption>\r\n                <h2>آرام\r\n                  <span>ذهن</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-hover\">\r\n        <h5 class=\"text-bold-400 text-uppercase\">آرامش</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-roxy\">\r\n              <img src=\"assets/img/gallery/15.jpg\" alt=\"img15\" />\r\n              <figcaption>\r\n                <h2>سکوت\r\n                  <span>آرامش</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-roxy\">\r\n              <img src=\"assets/img/gallery/1.jpg\" alt=\"img01\" />\r\n              <figcaption>\r\n                <h2>سکوت\r\n                  <span>آرامش</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-hover\">\r\n        <h5 class=\"text-bold-400 text-uppercase\">طبیعت</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-bubba\">\r\n              <img src=\"assets/img/gallery/2.jpg\" alt=\"img02\" />\r\n              <figcaption>\r\n                <h2>بکر\r\n                  <span>طبیعت</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-bubba\">\r\n              <img src=\"assets/img/gallery/16.jpg\" alt=\"img16\" />\r\n              <figcaption>\r\n                <h2>بکر\r\n                  <span>طبیعت</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-hover\">\r\n        <h5 class=\"text-bold-400 text-uppercase\">ابزار</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-romeo\">\r\n              <img src=\"assets/img/gallery/17.jpg\" alt=\"img17\" />\r\n              <figcaption>\r\n                <h2>کاربردی\r\n                  <span>ابزار</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-romeo\">\r\n              <img src=\"assets/img/gallery/18.jpg\" alt=\"img18\" />\r\n              <figcaption>\r\n                <h2>کاربردی\r\n                  <span>ابزار</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-hover\">\r\n        <h5 class=\"text-bold-400 text-uppercase\">دکور</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-dexter\">\r\n              <img src=\"assets/img/gallery/19.jpg\" alt=\"img19\" />\r\n              <figcaption>\r\n                <h2>عالی\r\n                  <span>دکور</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم\r\n                </p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-dexter\">\r\n              <img src=\"assets/img/gallery/12.jpg\" alt=\"img12\" />\r\n              <figcaption>\r\n                <h2>عالی\r\n                  <span>دکور</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم\r\n                </p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-hover\">\r\n        <h5 class=\"text-bold-400 text-uppercase\">زمان</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-sarah\">\r\n              <img src=\"assets/img/gallery/13.jpg\" alt=\"img13\" />\r\n              <figcaption>\r\n                <h2>عالی\r\n                  <span>زمان</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-sarah\">\r\n              <img src=\"assets/img/gallery/20.jpg\" alt=\"img20\" />\r\n              <figcaption>\r\n                <h2>عالی\r\n                  <span>زمان</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-hover\">\r\n        <h5 class=\"text-bold-400 text-uppercase\">متن</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-chico\">\r\n              <img src=\"assets/img/gallery/15.jpg\" alt=\"img15\" />\r\n              <figcaption>\r\n                <h2>کلاسیک\r\n                  <span>متن</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-chico\">\r\n              <img src=\"assets/img/gallery/4.jpg\" alt=\"img04\" />\r\n              <figcaption>\r\n                <h2>کلاسیک\r\n                  <span>متن</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-hover\">\r\n        <h5 class=\"text-bold-400 text-uppercase\">روزنامه</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-milo\">\r\n              <img src=\"assets/img/gallery/11.jpg\" alt=\"img11\" />\r\n              <figcaption>\r\n                <h2>به روز\r\n                  <span>روزنامه</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم\r\n                </p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n          <div class=\"col-md-6 col-12\">\r\n            <figure class=\"effect-milo\">\r\n              <img src=\"assets/img/gallery/3.jpg\" alt=\"img03\" />\r\n              <figcaption>\r\n                <h2>به روز\r\n                  <span>روزنامه</span>\r\n                </h2>\r\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم\r\n                </p>\r\n                <a>دیدن بیشتر</a>\r\n              </figcaption>\r\n            </figure>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Gallery Hover Effect Starts-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/invoice/invoice-page.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@theme/pages/full-pages/invoice/invoice-page.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Invoice template starts-->\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>صورتحساب</h4>\r\n  </div>\r\n</div>\r\n<section class=\"invoice-template\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body p-3\">\r\n      <div id=\"invoice-template\" class=\"card-block\">\r\n        <!-- Invoice Company Details -->\r\n        <div id=\"invoice-company-details\" class=\"row\">\r\n          <div class=\"col-md-6 col-sm-12 text-center text-md-left\">\r\n            <img src=\"assets/img/logos/logo-big-black.png\" alt=\"company logo\" class=\"mb-2\" width=\"80\" height=\"80\">\r\n            <ul class=\"px-0 list-unstyled\">\r\n              <li class=\"text-bold-800\">استدیو ضبط صدا</li>\r\n              <li>خیابان 57</li>\r\n              <li>میدان ولیعصر،</li>\r\n              <li>تهران،</li>\r\n              <li>ایران</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-12 text-center text-md-right\">\r\n            <h2>صورتحساب</h2>\r\n            <p class=\"pb-3\"># INV-001001</p>\r\n            <ul class=\"px-0 list-unstyled\">\r\n              <li>تعادل</li>\r\n              <li class=\"lead text-bold-800\">1200000 ریال</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <!--/ Invoice Company Details -->\r\n        <!-- Invoice Customer Details -->\r\n        <div id=\"invoice-customer-details\" class=\"row pt-2\">\r\n          <div class=\"col-sm-12 text-left\">\r\n            <p class=\"text-muted\">به</p>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-12  text-center text-md-left\">\r\n            <ul class=\"px-0 list-unstyled\">\r\n              <li class=\"text-bold-800\">آقای احمد رضایی</li>\r\n              <li>کوچه 45،</li>\r\n              <li>خیابان اقاقیا،</li>\r\n              <li>تهران،</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-12 text-center text-md-right\">\r\n            <p><span class=\"text-muted\">تاریخ صورتحساب :</span> 08/12/97</p>\r\n            <p><span class=\"text-muted\">مقررات :</span> بر اساس رسید</p>\r\n            <p><span class=\"text-muted\">تاریخ تحویل :</span> 10/12/97</p>\r\n          </div>\r\n        </div>\r\n        <!--/ Invoice Customer Details -->\r\n        <!-- Invoice Items Details -->\r\n        <div id=\"invoice-items-details\" class=\"pt-2\">\r\n          <div class=\"row\">\r\n            <div class=\"table-responsive col-sm-12\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>مورد و شرح</th>\r\n                    <th class=\"text-right\">نرخ</th>\r\n                    <th class=\"text-right\">ساعت ها</th>\r\n                    <th class=\"text-right\">میزان</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <th scope=\"row\">1</th>\r\n                    <td>\r\n                      <p>ایجاد فایل فتوشاپ برای نرم افزار اندروید</p>\r\n                      <p class=\"text-muted\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n                    </td>\r\n                    <td class=\"text-right\">20000 ریال/ ساعت</td>\r\n                    <td class=\"text-right\">120</td>\r\n                    <td class=\"text-right\">20000 ریال</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">2</th>\r\n                    <td>\r\n                      <p>برنامه توسعه iOS</p>\r\n                      <p class=\"text-muted\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </p>\r\n                    </td>\r\n                    <td class=\"text-right\">20000 ریال/ ساعت</td>\r\n                    <td class=\"text-right\">120</td>\r\n                    <td class=\"text-right\">20000 ریال</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope=\"row\">3</th>\r\n                    <td>\r\n                      <p>توسعه قالب وردپرس</p>\r\n                      <p class=\"text-muted\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </p>\r\n                    </td>\r\n                    <td class=\"text-right\">20000 ریال/ ساعت</td>\r\n                    <td class=\"text-right\">120</td>\r\n                    <td class=\"text-right\">20000 ریال</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-sm-12 text-left\">\r\n              <p class=\"lead\">روش های پرداخت:</p>\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <table class=\"table table-borderless table-sm\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>نام بانک:</td>\r\n                        <td class=\"text-right\">ایران، بانک ملت</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>نام اصلی:</td>\r\n                        <td class=\"text-right\">علی زمانی</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>شماره کارت:</td>\r\n                        <td class=\"text-right\">FGS165461646546AA</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>شماره حساب:</td>\r\n                        <td class=\"text-right\">BTNPP34</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-12\">\r\n              <p class=\"lead\">مجموع به دلیل</p>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>زیر مجموع</td>\r\n                      <td class=\"text-right\">120000 ریال</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>مالیات بر ارزش افزوده (12٪)</td>\r\n                      <td class=\"text-right\">70000 ریال</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"text-bold-800\">جمع کل</td>\r\n                      <td class=\"text-bold-800 text-right\"> 10000000 ریال</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>پرداخت انجام شده</td>\r\n                      <td class=\"pink text-right\">(-) 1000 ریال</td>\r\n                    </tr>\r\n                    <tr class=\"bg-grey bg-lighten-4\">\r\n                      <td class=\"text-bold-800\">تخفیف</td>\r\n                      <td class=\"text-bold-800 text-right\">120000 ریال</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"text-center\">\r\n                <p>فرد مجاز</p>\r\n                <img src=\"assets/img/pages/signature-scan.png\" alt=\"signature\" class=\"width-250\">\r\n                <h6>علی زمانی</h6>\r\n                <p class=\"text-muted\">مدیر عامل</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Invoice Footer -->\r\n        <div id=\"invoice-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-9 col-sm-12\">\r\n              <h6>شرایط و وضعیت</h6>\r\n              <p>\r\n                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. \r\n              </p>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-12 text-center\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-raised my-1\"><i class=\"fa fa-paper-plane-o\"></i> \r\n              ارسال صورت حساب\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--/ Invoice Footer -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Invoice template ends-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/knowledge-base/knowledge-base.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@theme/pages/full-pages/knowledge-base/knowledge-base.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header\">دانش محور </div>\r\n    <p class=\"content-sub-header\"></p>\r\n  </div>\r\n</div>\r\n<!-- Apex template Knowledge Base starts -->\r\n<section id=\"kb\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"ft-bell font-large-1 float-left mr-2\"></i>\r\n          <h4 class=\"card-title mb-0\">شروع شدن</h4>\r\n          <p class=\"card-text\">لورم ایپسوم</p>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Activating an Account and Logging in')\">\r\n                <span class=\"badge bg-primary float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> فعال کردن یک حساب کاربری\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'User Profile')\">\r\n                <span class=\"badge bg-primary float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span>مشخصات کاربر\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Using the Dashboard')\">\r\n                <span class=\"badge bg-primary float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> با استفاده از داشبورد\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Subscribing to Email Alerts')\">\r\n                <span class=\"badge bg-primary float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> اشتراک در هشدارهای ایمیل\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Changing a Password')\">\r\n                <span class=\"badge bg-primary float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span>تغییر رمز عبور\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a class=\"card-link primary\">مشاهده تمام مقالات (20) </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"ft-book font-large-1 float-left mr-2\"></i>\r\n          <h4 class=\"card-title\">راهنمای استفاده</h4>\r\n          <p class=\"card-text\">لورم ایپسوم</p>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Files Overview')\">\r\n                <span class=\"badge bg-warning float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> مرور فایلها\r\n\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Search Overview')\">\r\n                <span class=\"badge bg-warning float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> مرور اجمالی\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Using Tasks')\">\r\n                <span class=\"badge bg-warning float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> با استفاده از وظایف\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Events')\">\r\n                <span class=\"badge bg-warning float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> رویداد\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Blogs')\">\r\n                <span class=\"badge bg-warning float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> وبلاگ\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a class=\"card-link primary\">مشاهده تمام مقالات (13)            </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"ft-file-text text-white font-large-1 float-left mr-2\"></i>\r\n          <h4 class=\"card-title\">فایل ها</h4>\r\n          <p class=\"card-text\">لورم ایپسوم</p>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Basic Files Module Features')\">\r\n                <span class=\"badge bg-info float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> ویژگی های اصلی ماژول\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'How to Add a Single File')\">\r\n                <span class=\"badge bg-info float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span>نحوه اضافه کردن یک فایل تک\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Drag-and-Drop upload files and folders')\">\r\n                <span class=\"badge bg-info float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> کشیدن و انداختن\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Searching Files')\">\r\n                <span class=\"badge bg-info float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span>جستجو فایل ها\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Digital Rights Management')\">\r\n                <span class=\"badge bg-info float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> مدیریت حقوق دیجیتال\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a class=\"card-link primary\">مشاهده تمام مقالات (7)            </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"ft-user font-large-1 float-left mr-2\"></i>\r\n          <h4 class=\"card-title\">مدیریت کاربران</h4>\r\n          <p class=\"card-text\">لورم ایپسوم</p>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Inviting and Managing Users')\">\r\n                <span class=\"badge bg-success float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> دعوت و مدیریت کاربران\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Creating and Managing Groups')\">\r\n                <span class=\"badge bg-success float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> ایجاد و مدیریت گروه ها\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Granting Roles')\">\r\n                <span class=\"badge bg-success float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> اعطای نقش\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Quick Guide: Organizing Security Groups')\">\r\n                <span class=\"badge bg-success float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span>راهنمای سریع: گروه ها\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'What to Do if a User is Unable to Login')\">\r\n                <span class=\"badge bg-success float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> برای \"ورد\" وارد شوید\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a class=\"card-link primary\">مشاهده تمام مقالات (11)</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"ft-unlock font-large-1 float-left mr-2\"></i>\r\n          <h4 class=\"card-title\">مدیریت سایت</h4>\r\n          <p class=\"card-text\">لورم ایپسوم</p>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Introduction to the Site Admin Module')\">\r\n                <span class=\"badge bg-danger float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> معرفی ماژول\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'How to Create a Virtual Deal Room')\">\r\n                <span class=\"badge bg-danger float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> چگونه یک اتاق مجازی ایجاد کنیم\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Best Practices for Setting up a New Site')\">\r\n                <span class=\"badge bg-danger float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> بهترین روش برای سایت جدید\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'General Settings')\">\r\n                <span class=\"badge bg-danger float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> تنظیمات عمومی\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Advanced Settings')\">\r\n                <span class=\"badge bg-danger float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> تنظیمات پیشرفته\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a class=\"card-link primary\">مشاهده تمام مقالات (21) </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"ft-airplay font-large-1 float-left mr-2\"></i>\r\n          <h4 class=\"card-title\">مدیریت سیستم            </h4>\r\n          <p class=\"card-text\">لورم ایپسوم</p>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <ul class=\"list-group\">\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'System Administration Overview')\">\r\n                <span class=\"badge bg-primary float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span>بررسی اجمالی\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Creating Sites')\">\r\n                <span class=\"badge bg-primary float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> ایجاد سایت ها\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'User Administration')\">\r\n                <span class=\"badge bg-primary float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span>مدیریت کاربر\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Org Administration')\">\r\n                <span class=\"badge bg-primary float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> اداره سازمان\r\n              </li>\r\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Site Category System Settings')\">\r\n                <span class=\"badge bg-primary float-left mr-2\">\r\n                  <i class=\"ft-file-text text-white\"></i>\r\n                </span> تنظیمات سیستم رده سایت\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a class=\"card-link primary\">مشاهده تمام مقالات (17)            </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Apex template Knowledge Base Ends -->\r\n\r\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header bg-info\">\r\n      <h4 class=\"modal-title white\">{{title}}</h4>\r\n      <button type=\"button\" class=\"close white\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\" id=\"kbModal-body\">\r\n      <p class=\"text-bold-500\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </p>\r\n      <p>از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>\r\n      \r\n      <p class=\"text-bold-500\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </p>\r\n      <p>از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>\r\n      \r\n      <p class=\"text-bold-500\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </p>\r\n      <p>از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>\r\n      \r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-info btn-raised\" (click)=\"c('Close click')\">بستن</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/search/search.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@theme/pages/full-pages/search/search.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Search form-->\r\n<section id=\"search-website\" class=\"card overflow-hidden\">\r\n\t<div class=\"card-header\">\r\n\t\t<h4 class=\"card-title\">نتایج جستجوی وب سایت</h4>\r\n\r\n\t</div>\r\n\t<div class=\"card-content\">\r\n\t\t<div class=\"card-body pb-0\">\r\n\t\t\t<form action=\"#\">\r\n\t\t\t\t<fieldset class=\"form-group position-relative has-icon-right mb-0\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-lg \" id=\"iconLeft\" placeholder=\"قالب ادمین\">\r\n\t\t\t\t\t<div class=\"form-control-position\">\r\n\t\t\t\t\t\t<i class=\"ft-mic font-medium-4\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</fieldset>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<!--Search Navbar-->\r\n\t\t<div id=\"search-nav\" class=\"card-body\">\r\n\t\t\t<ul class=\"nav nav-inline\">\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link active\"><i class=\"fa fa-link\"></i> سایت</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\"><i class=\"fa fa-file-image-o\"></i> عکس</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\"><i class=\"fa fa-file-video-o\"></i> فیلم</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t<a class=\"nav-link\"><i class=\"fa fa-map-o\"></i> نقشه</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"dropdown nav-item float-right mt-1\">\r\n\t\t\t\t\t<a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t<i class=\"fa fa-cog\"></i> <span class=\"caret\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t\t<li class=\"dropdown-item\"><a class=\"dropdown-link\">زبان</a></li>\r\n\t\t\t\t\t\t<li class=\"dropdown-item\"><a class=\"dropdown-link\">تنظیمات جستجو</a></li>\r\n\t\t\t\t\t\t<li class=\"dropdown-item\"><a class=\"dropdown-link\">تاریخچه</a></li>\r\n\t\t\t\t\t\t<li class=\"dropdown-item\"><a class=\"dropdown-link\">راهنما جستجو</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<!--/ Search Navbar-->\r\n\t\t<!--Search Result-->\r\n\t\t<div id=\"search-results\" class=\"card-body\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t<p class=\"text-muted font-small-3\">حدود 2000000 نتیجه (در 0.2 ثانیه) </p>\r\n\t\t\t\t\t<ul class=\"media-list row\">\r\n\t\t\t\t\t\t<!--search with list-->\r\n\t\t\t\t\t\t<li class=\"media\">\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<p class=\"lead mb-0\"><a><span class=\"text-bold-600\">Apex</span> - ریسپانسیو قالب </a></p>\r\n\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">https://pixinvent.com/<span class=\"text-bold-600\">Apex</span>/\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\r\n\t\t\t\t\t\t\t\t<ul class=\"list-inline list-inline-pipe text-muted\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i> &nbsp;5 ستاره\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>590 نظر</li>\r\n\t\t\t\t\t\t\t\t\t<li>2000 ریال</li>\r\n\t\t\t\t\t\t\t\t\t<li>در انبار</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t<p><span class=\"text-muted\">24 آبان 1397 - </span><span class=\"text-bold-600\">Apex</span> لورم ایپسوم\r\n\t\t\t\t\t\t\t\t\tمتن ساختگی با تولید سادگی نامفهوم<span class=\"text-bold-600\">لورم ایپسوم</span> چاپگرها و متون بلکه\r\n\t\t\t\t\t\t\t\t\tروزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع\r\n\t\t\t\t\t\t\t\t\tبا هدف بهبود ابزارهای کاربردی می باشد. </p>\r\n\t\t\t\t\t\t\t\t<div class=\"website-detailed-list mx-1 my-1\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"content-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">داشبور</a></p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"content-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">جزء فرم</a></p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی </p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"content-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">نمودار</a></p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"content-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">قطعات طراحی</a></p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"content-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">پشتیبانی</a></p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>چاپگرها و متون روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"content-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">مستندات</a></p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<!--search with image-->\r\n\t\t\t\t\t\t<li class=\"media flex-column\">\r\n\t\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<img class=\"media-object width-150\" src=\"assets/img/width-600/portfolio-14.jpg\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"Generic placeholder image\">\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media-body media-search\">\r\n\t\t\t\t\t\t\t\t<p class=\"lead mb-0\"><a class=\"teal darken-1\"><span class=\"text-bold-600\">سارا محمدی</span> - سریع به من\r\n\t\t\t\t\t\t\t\t\t\tایمیل بزن</a></p>\r\n\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">https://pixinvent.com/<span class=\"text-bold-600\">Apex</span>/\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\r\n\t\t\t\t\t\t\t\t<ul class=\"list-inline list-inline-pipe text-muted\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-half yellow darken-2\"></i> &nbsp;4.5 ستاره\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>50 نظر</li>\r\n\t\t\t\t\t\t\t\t\t<li>40000 ریال</li>\r\n\t\t\t\t\t\t\t\t\t<li>در انبار</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t<p><span class=\"text-muted\">25 مرداد 1396 - </span> ما باید گفتگو کنیم <span class=\"text-bold-600\">Apex\r\n\t\t\t\t\t\t\t\t\t\tادمین</span> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک\r\n\t\t\t\t\t\t\t\t\tاست. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی\r\n\t\t\t\t\t\t\t\t\tمورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد\r\n\t\t\t\t\t\t\t\t\tگذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای\r\n\t\t\t\t\t\t\t\t\tطراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<!--search with video-->\r\n\t\t\t\t\t\t<li class=\"media flex-column\">\r\n\t\t\t\t\t\t\t<div class=\"media-left media-search\">\r\n\t\t\t\t\t\t\t\t<iframe width=\"150\" height=\"110\"\r\n\t\t\t\t\t\t\t\t\tsrc=\"https://www.youtube.com/embed/SsE5U7ta9Lw?rel=0&amp;controls=0&amp;showinfo=0\"></iframe>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<p class=\"lead mb-0\"><a class=\"teal darken-1\"><span class=\"text-bold-600\">جدول</span> - اطلاعات شما و\r\n\t\t\t\t\t\t\t\t\t\tکارهای شما</a></p>\r\n\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">http://youtube.com/<span class=\"text-bold-600\">Apex</span>/ <i\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\r\n\t\t\t\t\t\t\t\t<ul class=\"list-inline list-inline-pipe text-muted\">\r\n\t\t\t\t\t\t\t\t\t<li>23 تیر 1308</li>\r\n\t\t\t\t\t\t\t\t\t<li>1 میلیون بازدید</li>\r\n\t\t\t\t\t\t\t\t\t<li>آپلود شده توسط سارا عزیزی</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t<p><span class=\"text-bold-600\">لورم ایپسوم</span> متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با\r\n\t\t\t\t\t\t\t\t\tاستفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و\r\n\t\t\t\t\t\t\t\t\tبرای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"media\">\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<p class=\"lead mb-0\"><a class=\"teal darken-1\"><span class=\"text-bold-600\">کتاب</span> - زیادی در شصت و\r\n\t\t\t\t\t\t\t\t\t\tسه درصد</a></p>\r\n\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">http://themeforest.net/<span\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"text-bold-600\">Apex</span>/کتاب\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\r\n\t\t\t\t\t\t\t\t<p> <span class=\"text-bold-600\">گذشته، حال و آینده</span>\r\n\t\t\t\t\t\t\t\t\t\tشناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی\r\n\t\t\t\t\t\t\t\t\t\tالخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و\r\n\t\t\t\t\t\t\t\t\t\tدشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی\r\n\t\t\t\t\t\t\t\t\t\tدستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"media\">\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<p class=\"lead mb-0\"><a class=\"teal darken-1\">لورم ایپسوم متن<span class=\"text-bold-600\">ساختگی </span>,\r\n\t\t\t\t\t\t\t\t\t\tتولید سادگی</a>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">http://envato.com/literally/<span\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"text-bold-600\">Apex</span>/\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\r\n\t\t\t\t\t\t\t\t<p><span class=\"text-muted\">30 مهر 1398 - </span><span class=\"text-bold-600\">تهران</span> لورم ایپسوم\r\n\t\t\t\t\t\t\t\t\tمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه\r\n\t\t\t\t\t\t\t\t\tروزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع\r\n\t\t\t\t\t\t\t\t\tبا هدف بهبود ابزارهای کاربردی می باشد.\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"media\">\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<p class=\"lead mb-0\"><a class=\"teal darken-1\"><span class=\"text-bold-600\">کلمه</span> - با جزئیات\r\n\t\t\t\t\t\t\t\t\t\tدقیق</a></p>\r\n\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">http://google.com/<span class=\"text-bold-600\">کلمه</span>/ <i\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\r\n\t\t\t\t\t\t\t\t<ul class=\"list-inline list-inline-pipe text-muted\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-half yellow darken-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-outline yellow darken-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-outline yellow darken-2\"></i> &nbsp;2.5 ستاره\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>590 نظر</li>\r\n\t\t\t\t\t\t\t\t\t<li>390000 ریال</li>\r\n\t\t\t\t\t\t\t\t\t<li>در انبار</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t<p><span class=\"text-muted\">12 مهر 1398 - </span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم\r\n\t\t\t\t\t\t\t\t\t<span class=\"text-bold-600\">از صنعت چاپ و با استفاده از طراحان</span> گرافیک است. چاپگرها و متون بلکه\r\n\t\t\t\t\t\t\t\t\tروزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع\r\n\t\t\t\t\t\t\t\t\tبا هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان\r\n\t\t\t\t\t\t\t\t\tجامعه و متخصصان را می طلبد\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"media\">\r\n\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t<p class=\"lead mb-0\"><a class=\"teal darken-1\"><span class=\"text-bold-600\">آن را اجرا کنید </span> - لورم\r\n\t\t\t\t\t\t\t\t\t\tایپسوم متن ساختگی</a></p>\r\n\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">http://mail.example.com/<span\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"text-bold-600\">اجرا</span>/\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\tبا نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان\r\n\t\t\t\t\t\t\t\t\tفارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت\r\n\t\t\t\t\t\t\t\t\tتایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای\r\n\t\t\t\t\t\t\t\t\tموجود طراحی اساسا مورد استفاده قرار گیرد.\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t<nav aria-label=\"Page navigation\">\r\n\t\t\t\t\t\t\t<ul class=\"pagination pagination-separate pagination-round pagination-flat\">\r\n\t\t\t\t\t\t\t\t<li class=\"page-item\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"page-link\" aria-label=\"Previous\">\r\n\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">« قبل</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">قبلی</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\">1</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\">2</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"page-item active\"><a class=\"page-link\">3</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\">4</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\">5</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"page-item\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"page-link\" aria-label=\"Next\">\r\n\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">بعد »</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">بعدی</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Apex</h4>\r\n\t\t\t\t\t\t\t<h6 class=\"card-subtitle text-muted\">Angular 5 قالب پروژه ی مدیریت با </h6>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<img class=\"img-fluid\" src=\"assets/img/width-600/portfolio-3.jpg\" alt=\"logo\">\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<p class=\"card-text\">بعضی از نمونه های سریع نمونه ای که بر روی عنوان کارت ساخته می شوند و بخش عمده ای از\r\n\t\t\t\t\t\t\t\tمحتوای کارت را تشکیل می دهند.<a>ویکی پدیا</a></p>\r\n\t\t\t\t\t\t\t<ul class=\"list-group mb-2\">\r\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\"><strong>سایت :</strong> <a class=\"card-link\">https://pixinvent.com/</a></li>\r\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\"><strong>خدمات مشتری:</strong> 022 8888 9999</li>\r\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\"><strong>پایه گذار:</strong> خانم کاظمی</li>\r\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\"><strong>تأسیس شد:</strong> 1398</li>\r\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\"><strong>پشتیبانی:</strong> <a>fKazemi5236@gmail.com</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<div class=\"py-1 text-center\">\r\n\t\t\t\t\t\t\t\t<a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-facebook\"><span class=\"fa fa-facebook\"></span></a>\r\n\t\t\t\t\t\t\t\t<a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-twitter\"><span class=\"fa fa-twitter\"></span></a>\r\n\t\t\t\t\t\t\t\t<a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-linkedin\"><span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-linkedin font-medium-4\"></span></a>\r\n\t\t\t\t\t\t\t\t<a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-github\"><span\r\n\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-github font-medium-4\"></span></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<p class=\"text-bold-600\">موارد جستجوی دیگران</p>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"img-fluid rounded\" src=\"assets/img/gallery/11.jpg\" alt=\"Image description\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"font-small-2\">شکلات</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"img-fluid rounded\" src=\"assets/img/gallery/12.jpg\" alt=\"Image description\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"font-small-2\">متریالز</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"img-fluid rounded\" src=\"assets/img/gallery/13.jpg\" alt=\"Image description\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"font-small-2\">HTML </a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"img-fluid rounded\" src=\"assets/img/gallery/14.jpg\" alt=\"Image description\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"font-small-2\">شکلات</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"img-fluid rounded\" src=\"assets/img/gallery/25.jpg\" alt=\"Image description\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"font-small-2\">متریالز</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"img-fluid rounded\" src=\"assets/img/gallery/23.jpg\" alt=\"Image description\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"font-small-2\">HTML </a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n<!--/ Search form -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@theme/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"cd-horizontal-timeline\" [ngClass]=\"{'loaded': loaded}\">\r\n  <div class=\"timeline\">\r\n    <div class=\"events-wrapper\">\r\n      <div class=\"events\" #eventsWrapper [style.width.px]=\"eventsWrapperWidth\">\r\n        <ol>\r\n          <li *ngFor=\"let item of timelineElements; let index = index\">\r\n            <a #timelineEvents href=\"#\" [ngClass]=\"{'selected': item.selected, 'older-event': index < selectedIndex}\"\r\n              (click)=\"onEventClick($event, item)\">{{item.date | date:dateFormatTop}}</a>\r\n            <span></span>\r\n          </li>\r\n        </ol>\r\n        <span class=\"filling-line\" aria-hidden=\"true\" #fillingLine></span>\r\n      </div>\r\n    </div>\r\n\r\n    <ul class=\"cd-timeline-navigation\">\r\n      <li>\r\n        <a href=\"#\" (click)=\"onScrollClick($event, false)\" class=\"prev\" [ngClass]=\"{'inactive':prevLinkInactive}\">قبلی</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\" (click)=\"onScrollClick($event, true)\" class=\"next\" [ngClass]=\"{'inactive':nextLinkInactive}\">بعدی</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"events-content\" *ngIf=\"showContent\">\r\n    <ol>\r\n      <li *ngFor=\"let item of timelineElements; let index = index\" [@contentState]=\"item.selected ? 'active' : (index < selectedIndex ? 'left' : 'right')\">\r\n        <h2 class=\"text-bold-500\">{{item.title}}</h2>\r\n        <em>{{item.date | date:dateFormat}}</em>\r\n        <p>{{item.content}}</p>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@theme/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Horizontal Timeline Starts-->\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"content-header\">گاهشمار افقی\t\t\t</div>\r\n        <p class=\"content-sub-header\">این جدول زمانی افقی حاوی جدول زمان بندی پست تاریخ است</p>\r\n    </div>\r\n</div>\r\n<div class=\"card\">\r\n\t<div class=\"card-content\">\r\n\t\t<div class=\"card-body\">\r\n\t\t\t<horizontal-timeline [timelineElements]=\"timeline\" [showContent]=\"true\"></horizontal-timeline>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!--Horizontal Timeline Starts-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/timeline/vertical/vertical-timeline-page.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@theme/pages/full-pages/timeline/vertical/vertical-timeline-page.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Vertical Timeline Starts-->\r\n<section id=\"timeline\" class=\"timeline-center timeline-wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"content-header\">گاهشمار عمودی</div>\r\n      <p class=\"content-sub-header\">این جدول زمانی عمودی حاوی پست با عکس ها، فیلم ها، نمودار ها و نقشه ها برای ایجاد جدول زمانی موثرتر است.</p>\r\n    </div>\r\n  </div>\r\n  <h3 class=\"page-title text-center\">گاهشمار</h3>\r\n  <ul class=\"timeline\">\r\n    <li class=\"timeline-line\"></li>\r\n    <li class=\"timeline-group\">\r\n      <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> امروز</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"timeline\">\r\n    <li class=\"timeline-line\"></li>\r\n    <li class=\"timeline-item\">\r\n      <div class=\"timeline-badge\">\r\n        <span class=\"bg-red bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"fa fa-plane\"></i></span>\r\n      </div>\r\n      <div class=\"timeline-card card border-grey border-lighten-2\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title mb-0\"><a>کار پروژه نمونه کارها</a></h4>\r\n          <div class=\"card-subtitle text-muted mt-0\">\r\n            <span class=\"font-small-3\">5 ساعت قبل</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <img class=\"img-fluid\" src=\"assets/img/photos/01.jpg\" alt=\"Timeline Image 1\">\r\n          <div class=\"card-content\">\r\n            <div class=\"card-body\">\r\n              <p class=\"card-text\">\r\n                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. \r\n              </p>\r\n              <div class=\"list-inline mb-1\">\r\n                <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-thumbs-o-up\"></span> پسندیدن</a>\r\n                </span>\r\n                <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> نظرات</a>\r\n                </span>\r\n                <span><a class=\"primary\"><span class=\"fa fa-share-alt\"></span> اشتراک گذاری</a>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer px-0 py-0\">\r\n            <div class=\"card-body \">\r\n              <div class=\"media\">\r\n                <div class=\"media-left\">\r\n                  <a>\r\n                      <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-1.png\" alt=\"avatar\" width=\"50\"></span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"media-body\">\r\n                  <p class=\"text-bold-600 mb-0\"><a>علی رضایی</a></p>\r\n                  <p class=\"m-0\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>\r\n                  <div class=\"list-inline mb-1\">\r\n                    <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-thumbs-o-up\"></span> پسندیدن</a>\r\n                    </span>\r\n                    <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> پاسخ</a>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"media\">\r\n                    <div class=\"media-left\">\r\n                      <a>\r\n                          <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-18.png\" alt=\"avatar\" width=\"50\"></span>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                      <p class=\"text-bold-600 mb-0\"><a>احمد محمدی</a></p>\r\n                      <p>زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود</p>\r\n                      <div class=\"list-inline mb-1\">\r\n                        <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-thumbs-o-up\"></span> پسندیدن</a>\r\n                        </span>\r\n                        <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> پاسخ</a>\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <form>\r\n                <fieldset class=\"form-group position-relative has-icon-left mb-0\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"نوشتن نظر ...\">\r\n                  <div class=\"form-control-position\">\r\n                    <i class=\"fa fa-dashcube\"></i>\r\n                  </div>\r\n                </fieldset>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <li class=\"timeline-item mt-5\">\r\n      <div class=\"timeline-badge\">\r\n        <span class=\"avatar avatar-online\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Eu pid nunc urna integer\"><img src=\"assets/img/portrait/small/avatar-s-14.png\" alt=\"avatar\" width=\"40\"></span>\r\n      </div>\r\n      <div class=\"timeline-card card border-grey border-lighten-2\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title mb-0\"><a>سوفیا محمدی</a></h4>\r\n          <div class=\"card-subtitle text-muted mt-0\">\r\n            <span class=\"font-small-3\">8 ساعت پیش</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"embed-responsive embed-responsive-4by3\">\r\n            <iframe src=\"https://player.vimeo.com/video/118589137?title=0&byline=0\"></iframe>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <div class=\"card-body\">\r\n              <p class=\"card-text\">\r\n                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. \r\n              </p>\r\n              <p class=\"card-text\">\r\n                  کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n              </p>\r\n              <div class=\"list-inline mb-1\">\r\n                <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-thumbs-o-up\"></span> پسندیدن</a>\r\n                </span>\r\n                <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> نظرات</a>\r\n                </span>\r\n                <span><a class=\"primary\"><span class=\"fa fa-share-alt\"></span> اشتراک گذاری</a>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer px-0 py-0\">\r\n            <div class=\"card-body \">\r\n              <form>\r\n                <fieldset class=\"form-group position-relative has-icon-left mb-0\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"نوشتن نظر ...\">\r\n                  <div class=\"form-control-position\">\r\n                    <i class=\"fa fa-dashcube\"></i>\r\n                  </div>\r\n                </fieldset>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </li>\r\n\r\n    <li class=\"timeline-item block\">\r\n      <div class=\"timeline-badge\"><a title=\"\" data-context=\"inverse\" data-container=\"body\" class=\"border-silc\" data-original-title=\"block highlight\"></a></div>\r\n      <div class=\"timeline-card card border-grey border-lighten-2\">\r\n        <div class=\"card-header\">\r\n          <div class=\"text-center\">\r\n            <p><i class=\"fa fa-bar-chart font-medium-4\"></i></p>\r\n            <h4>گزارش کمپین</h4>\r\n            <p class=\"timeline-date\">18 ساعت پیش</p>\r\n            <p>\r\n                مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <div class=\"chart-container\">\r\n              <div id=\"stacked-column\" class=\"height-400 echart-container overflow-hidden lineArea1\">\r\n                <x-chartist class=\"\" [data]=\"lineArea1.data\" [type]=\"lineArea1.type\" [options]=\"lineArea1.options\" [responsiveOptions]=\"lineArea1.responsiveOptions\"\r\n                  [events]=\"lineArea1.events\">\r\n                </x-chartist>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n  <!-- 2016 -->\r\n  <ul class=\"timeline\">\r\n    <li class=\"timeline-line\"></li>\r\n    <li class=\"timeline-group\">\r\n      <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> 1395</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"timeline\">\r\n\r\n    <li class=\"timeline-line\"></li>\r\n    <!-- /.timeline-line -->\r\n\r\n    <li class=\"timeline-item\">\r\n      <div class=\"timeline-badge\">\r\n        <span class=\"avatar avatar-online\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Eu pid nunc urna integer\"><img src=\"assets/img/portrait/small/avatar-s-5.png\" alt=\"avatar\" width=\"40\"></span>\r\n      </div>\r\n      <div class=\"timeline-card card card-inverse\">\r\n        <img class=\"card-img img-fluid\" src=\"assets/img/photos/02.jpg\" alt=\"Card image\">\r\n        <div class=\"card-img-overlay bg-overlay\">\r\n          <h4 class=\"card-title\">صبح بخیر</h4>\r\n          <p class=\"card-text\"><small>26 تیر 1396 ساعت 9:00 صبح</small></p>\r\n        </div>\r\n      </div>\r\n    </li>\r\n\r\n    <li class=\"timeline-item mt-5\">\r\n      <div class=\"timeline-badge\">\r\n        <span class=\"bg-teal bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Nullam facilisis fermentum\"><i class=\"fa fa-check-square-o\"></i></span>\r\n      </div>\r\n      <div class=\"timeline-card card border-grey border-lighten-2\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"mb-0 card-title\"><a>نیما نیازی</a></h4>\r\n          <div class=\"card-subtitle text-muted mt-0\">\r\n            <span class=\"font-small-3\">18 دی 1396 ساعت 10:00 صبح</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-content\">\r\n            <div class=\"card-body\">\r\n              <p class=\"card-text\">\r\n                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. \r\n\r\n              </p>\r\n              <ul class=\"list-group icheck-task\">\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"1st-item\">\r\n                    <label class=\"custom-control-label\" for=\"1st-item\">لورم ایپسوم </label>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"2nd-item\">\r\n                    <label class=\"custom-control-label\" for=\"2nd-item\">سادگی نامفهوم</label>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"3rd-item\">\r\n                    <label class=\"custom-control-label\" for=\"3rd-item\">شرایط فعلی تکنولوژی </label>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"4th-item\">\r\n                    <label class=\"custom-control-label\" for=\"4th-item\">شناخت فراوان جامعه</label>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"5th-item\">\r\n                    <label class=\"custom-control-label\" for=\"5th-item\">نرم افزار</label>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer px-0 py-0\">\r\n            <div class=\"card-body \">\r\n              <form>\r\n                <fieldset class=\"form-group position-relative has-icon-left mb-0\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"نوشتن نظر ...\">\r\n                  <div class=\"form-control-position\">\r\n                    <i class=\"fa fa-dashcube\"></i>\r\n                  </div>\r\n                </fieldset>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n\r\n  <!-- 2015 -->\r\n  <ul class=\"timeline\">\r\n    <li class=\"timeline-line\"></li>\r\n    <li class=\"timeline-group\">\r\n      <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> 1396</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"timeline\">\r\n    <li class=\"timeline-line\"></li>\r\n    <!-- /.timeline-line -->\r\n    <li class=\"timeline-item block\">\r\n      <div class=\"timeline-badge\"><a title=\"\" data-context=\"inverse\" data-container=\"body\" class=\"border-silc\" data-original-title=\"block highlight\"></a></div>\r\n      <div class=\"timeline-card card border-grey border-lighten-2\">\r\n        <div class=\"card-header\">\r\n          <div class=\"text-center\">\r\n            <p class=\"mt-1\"><i class=\"fa fa-file-image-o font-medium-4\"></i></p>\r\n            <h4>گالری رسانه</h4>\r\n            <p class=\"timeline-date\">1 آبان 1398</p>\r\n            <p>\r\n                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. \r\n            </p>\r\n          </div>\r\n        </div>\r\n        <!-- Image grid -->\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body my-gallery\" itemscope itemtype=\"http://schema.org/ImageGallery\">\r\n            <div class=\"row\">\r\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\r\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\r\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/1.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                  </a>\r\n              </figure>\r\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\r\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\r\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/2.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                  </a>\r\n              </figure>\r\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\r\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\r\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/3.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                  </a>\r\n              </figure>\r\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\r\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\r\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/4.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                  </a>\r\n              </figure>\r\n            </div>\r\n            <div class=\"row\">\r\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\r\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\r\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/5.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                  </a>\r\n              </figure>\r\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\r\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\r\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/6.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                  </a>\r\n              </figure>\r\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\r\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\r\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/7.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                  </a>\r\n              </figure>\r\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\r\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\r\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/8.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                  </a>\r\n              </figure>\r\n            </div>\r\n            <div class=\"row\">\r\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\r\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\r\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/9.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                  </a>\r\n              </figure>\r\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\r\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\r\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/10.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                  </a>\r\n              </figure>\r\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\r\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\r\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/11.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                  </a>\r\n              </figure>\r\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\r\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\r\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/12.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                  </a>\r\n              </figure>\r\n            </div>\r\n          </div>\r\n          <!--/ Image grid -->\r\n        </div>\r\n        <!--/ PhotoSwipe -->\r\n      </div>\r\n    </li>\r\n    <li class=\"timeline-item\">\r\n      <div class=\"timeline-badge\">\r\n        <span class=\"bg-warning bg-darken-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Application API Support\"><i class=\"fa fa-life-ring\"></i></span>\r\n      </div>\r\n      <div class=\"timeline-card card border-grey border-lighten-2\">\r\n        <div class=\"card-header\">\r\n          <div class=\"media\">\r\n            <div class=\"media-left\">\r\n              <a>\r\n                  <span class=\"avatar avatar-md avatar-busy\"><img src=\"assets/img/portrait/small/avatar-s-18.png\" alt=\"avatar\" width=\"50\"></span>\r\n                  <i></i>\r\n                </a>\r\n            </div>\r\n            <div class=\"media-body\">\r\n              <h4 class=\"card-title mb-0\"><a>پشتیبانی برنامه کاربردی</a></h4>\r\n              <div class=\"card-subtitle text-muted mt-0\">\r\n                <span class=\"font-small-3\">15 آذر 1397 ساعت 10:00 صبح</span>\r\n                <span class=\"tag tag-pill tag-default tag-warning float-right\">بالا</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <img class=\"img-fluid\" src=\"assets/img/photos/03.jpg\" alt=\"Timeline Image 1\">\r\n          <div class=\"card-content\">\r\n            <div class=\"card-body\">\r\n              <p class=\"card-text\">\r\n                  کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد\r\n              </p>\r\n              <div class=\"list-inline mb-1\">\r\n                <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> نظرات</a>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer px-0 py-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"media\">\r\n                <div class=\"media-left\">\r\n                  <a>\r\n                      <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-4.png\" alt=\"avatar\" width=\"50\"></span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"media-body\">\r\n                  <p class=\"text-bold-600 mb-0\"><a>زیبا حسنی</a></p>\r\n                  <p class=\"m-0\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>\r\n                  <div class=\"media\">\r\n                    <div class=\"media-left\">\r\n                      <a>\r\n                          <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-6.png\" alt=\"avatar\" width=\"50\"></span>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                      <p class=\"text-bold-600 mb-0\"><a>نسرین امامی</a></p>\r\n                      <p>زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <form>\r\n                <fieldset class=\"form-group position-relative has-icon-left mb-0\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"نوشتن نظر ...\">\r\n                  <div class=\"form-control-position\">\r\n                    <i class=\"fa fa-dashcube\"></i>\r\n                  </div>\r\n                </fieldset>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <li class=\"timeline-item mt-5\">\r\n      <div class=\"timeline-badge\">\r\n        <span class=\"bg-amber bg-darken-1\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Quote of the day\"><i class=\"fa fa-smile-o\"></i></span>\r\n      </div>\r\n      <div class=\"timeline-card card border-grey border-lighten-2\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title mb-0\"><a>نقل قول روز</a></h4>\r\n          <div class=\"card-subtitle text-muted mt-0\">\r\n            <span class=\"font-small-3\">3 آبان 1397 ساعت 8:00 بعد از ظهر</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <img class=\"img-fluid\" src=\"assets/img/photos/04.jpg\" alt=\"Timeline Image 1\">\r\n          <div class=\"card-body\">\r\n            <blockquote class=\"card-bodyquote\">\r\n              <p class=\"card-text\">\r\n                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. \r\n              </p>\r\n              <div>کسی که معروف است<cite title=\"Source Title\"> - عنوان منبع</cite></div>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n\r\n  <!-- 2014 -->\r\n  <ul class=\"timeline\">\r\n    <li class=\"timeline-line\"></li>\r\n    <li class=\"timeline-group\">\r\n      <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> 1397</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"timeline\">\r\n    <li class=\"timeline-line\"></li>\r\n    <!-- /.timeline-line -->\r\n    <li class=\"timeline-item block\">\r\n      <div class=\"timeline-badge\"><a title=\"\" data-context=\"inverse\" data-container=\"body\" class=\"border-silc\" data-original-title=\"block highlight\"></a></div>\r\n      <div class=\"timeline-card card border-grey border-lighten-2\">\r\n        <div class=\"card-header\">\r\n          <div class=\"text-center\">\r\n            <p><i class=\"fa fa-map-marker font-medium-4\"></i></p>\r\n            <h4>به تهران منتقل شد</h4>\r\n            <p class=\"timeline-date\">1 مهر 1397</p>\r\n            <p>\r\n                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"card-body\">\r\n            <div id=\"moved-brooklyn\" class=\"height-450\">\r\n              <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n              </agm-map>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n  <!-- 2014 -->\r\n  <ul class=\"timeline\">\r\n    <li class=\"timeline-line\"></li>\r\n    <li class=\"timeline-group\">\r\n      <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> در سال 1397 تاسیس شد</a>\r\n    </li>\r\n  </ul>\r\n</section>\r\n<!--Vertical Timeline Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/user-profile/user-profile-page.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@theme/pages/full-pages/user-profile/user-profile-page.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--User Profile Starts-->\r\n<!--Basic User Details Starts-->\r\n<section id=\"user-profile\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card profile-with-cover\">\r\n                <div class=\"card-img-top img-fluid bg-cover height-300\" style=\"background: url('assets/img/photos/14.jpg') 50%;\"></div>\r\n                <div class=\"media profil-cover-details row\">\r\n                    <div class=\"col-5\">\r\n                        <div class=\"align-self-start halfway-fab pl-3 pt-2\">\r\n                            <div class=\"text-left\">\r\n                                <h3 class=\"card-title white\">رضا رضایی</h3>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-2\">\r\n                        <div class=\"align-self-center halfway-fab text-center\">\r\n                            <a class=\"profile-image\">\r\n                                <img src=\"assets/img/portrait/avatars/avatar-08.png\" class=\"rounded-circle img-border gradient-summer width-100\" alt=\"Card image\">\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-5\">                        \r\n                    </div>                    \r\n                </div>\r\n                <div class=\"profile-cover-buttons\">\r\n                    <div class=\"media-body halfway-fab align-self-end\">\r\n                        <div class=\"text-right d-none d-sm-none d-md-none d-lg-block\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-raised mr-2\"><i class=\"fa fa-plus\"></i> دنبال کنید</button>\r\n                            <button type=\"button\" class=\"btn btn-success btn-raised mr-3\"><i class=\"fa fa-dashcube\"></i> پیام</button>\r\n                        </div>\r\n                        <div class=\"text-right d-block d-sm-block d-md-block d-lg-none\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-raised mr-2\"><i class=\"fa fa-plus\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-success btn-raised mr-3\"><i class=\"fa fa-dashcube\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"profile-section\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-5 col-md-5 \">\r\n                            <ul class=\"profile-menu no-list-style\">\r\n                                <li>\r\n                                    <a (click)=\"showPage('About')\" [ngClass]=\"currentPage === 'About' ? 'primary font-medium-2 font-weight-600 active' : 'primary font-medium-2 font-weight-600'\">درباه</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a (click)=\"showPage('TimeLine')\" [ngClass]=\"currentPage === 'TimeLine' ? 'primary font-medium-2 font-weight-600 active' : 'primary font-medium-2 font-weight-600'\">گاهشمار</a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-2 text-center\">\r\n                            <span class=\"font-medium-2 text-uppercase\">رضا رضایی</span>\r\n                            <p class=\"grey font-small-2\">توسعه دهنده</p>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-5\">\r\n                            <ul class=\"profile-menu no-list-style\">\r\n                                <li>\r\n                                    <a (click)=\"showPage('Friends')\" [ngClass]=\"currentPage === 'Friends' ? 'primary font-medium-2 font-weight-600 active' : 'primary font-medium-2 font-weight-600'\">دوستان</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a (click)=\"showPage('Photos')\" [ngClass]=\"currentPage === 'Photos' ? 'primary font-medium-2 font-weight-600 active' : 'primary font-medium-2 font-weight-600'\">عکس ها</a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Basic User Details Ends-->\r\n\r\n<!--About section starts-->\r\n<section id=\"about\" *ngIf=\"currentPage === 'About'\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"content-header\">درباره</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h5>اطلاعات شخصی</h5>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"mb-3\">\r\n                            <span class=\"text-bold-500 primary\">درباره ی من </span>\r\n                            <span class=\"d-block overflow-hidden\">\r\n                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n\r\n                            </span>\r\n                        </div>\r\n                        <hr>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12 col-md-6 col-lg-4\">\r\n                                <ul class=\"no-list-style\">\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"icon-present font-small-3\"></i> تولد:</a></span>\r\n                                        <span class=\"d-block overflow-hidden\">10 دی 1377</span>\r\n                                    </li>\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-map-pin font-small-3\"></i> محل تولد:</a></span>\r\n                                        <span class=\"d-block overflow-hidden\">ایران ، تهران</span>\r\n                                    </li>\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-globe font-small-3\"></i> زندگی می کنم در:</a></span>\r\n                                        <span class=\"d-block overflow-hidden\">اصفهان ، ایران</span>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                            <div class=\"col-12 col-md-6 col-lg-4\">\r\n                                <ul class=\"no-list-style\">\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-user font-small-3\"></i> جنسیت:</a></span>\r\n                                        <span class=\"d-block overflow-hidden\">مرد</span>\r\n                                    </li>\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-mail font-small-3\"></i> ایمیل:</a></span>\r\n                                        <a class=\"d-block overflow-hidden\">jose@yourmail.com</a>\r\n                                    </li>\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-monitor font-small-3\"></i> سایت:</a></span>\r\n                                        <a class=\"d-block overflow-hidden\">pixinvent.com</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                            <div class=\"col-12 col-md-6 col-lg-4\">\r\n                                <ul class=\"no-list-style\">\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-smartphone font-small-3\"></i> شماره تماس:</a></span>\r\n                                        <span class=\"d-block overflow-hidden\">(012) 345 - 678 - 9910</span>\r\n                                    </li>\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-briefcase font-small-3\"></i> شغل:</a></span>\r\n                                        <span class=\"d-block overflow-hidden\">طراح</span>\r\n                                    </li>\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-book font-small-3\"></i> عضویت:</a></span>\r\n                                        <span class=\"d-block overflow-hidden\">1 اسفند 1390</span>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <div class=\"mt-3\">\r\n                            <span class=\"text-bold-500 primary\">سرگرمی:</span>\r\n                            <span class=\"d-block overflow-hidden\">\r\n                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"mt-2 overflow-hidden\">\r\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-plane danger font-large-2\"></i> <div class=\"mt-2\">مسافرت</div></span>\r\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-speedometer danger font-large-2\"></i> <div class=\"mt-2\">رانندگی</div></span>\r\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-camera danger font-large-2\"></i> <div class=\"mt-2\">عکاسی</div></span>\r\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-game-controller danger font-large-2\"></i> <div class=\"mt-2\">بازی</div></span>\r\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-music-tone-alt danger font-large-2\"></i> <div class=\"mt-2\">موزیک</div></span>\r\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"ft-monitor danger font-large-2\"></i> <div class=\"mt-2\">موج سواری</div></span>\r\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"ft-pie-chart danger font-large-2\"></i> <div class=\"mt-2\">غذا</div></span>\r\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"ft-tv danger font-large-2\"></i> <div class=\"mt-2\">تلویزیون</div></span>\r\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-basket-loaded danger font-large-2\"></i> <div class=\"mt-2\">خرید</div></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h5>اطلاعات آموزشی</h5>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\r\n                                <ul class=\"no-list-style\">\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"primary text-bold-500\"><a><i class=\"ft-home font-small-3\"></i> موسسه طراحی افق</a></span>\r\n                                        <span class=\"grey line-height-0 d-block mb-2 font-small-2\">1390 - 1391</span>\r\n                                        <span class=\"line-height-2 d-block overflow-hidden\">استاد: محمد صالحی. شش ماه بهترین ابزار توسعه ابزار.</span>\r\n                                    </li>\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"primary text-bold-500\"><a><i class=\"ft-home font-small-3\"></i> دانشگاه تهران </a></span>\r\n                                        <span class=\"grey line-height-0 d-block mb-2 font-small-2\">1391 - 1392</span>\r\n                                        <span class=\"line-height-2 d-block overflow-hidden\">استاد: علی ناصری. بهترین اطلاعات آموزشی را به من داد.</span>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                            <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\r\n                                <ul class=\"no-list-style\">\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"primary text-bold-500\"><a><i class=\"ft-home font-small-3\"></i> توسعه دهنده</a></span>\r\n                                        <span class=\"grey line-height-0 d-block mb-2 font-small-2\">1392 - 1393</span>\r\n                                        <span class=\"line-height-2 d-block overflow-hidden\">توسعه دهنده ی زبان های وب</span>\r\n                                    </li>\r\n                                    <li class=\"mb-2\">\r\n                                        <span class=\"primary text-bold-500\"><a><i class=\"ft-home font-small-3\"></i> ارشد توسعه دهنده</a></span>\r\n                                        <span class=\"grey line-height-0 d-block mb-2 font-small-2\">1395- تاکنون</span>\r\n                                        <span class=\"line-height-2 d-block overflow-hidden\">ارشد توسعه دهنده ی زبان های وب</span>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--About section ends-->\r\n\r\n<!--User Timeline section starts-->\r\n<section *ngIf=\"currentPage === 'TimeLine'\">   \r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"content-header\">گاهشمار کاربر</div>\r\n        </div>\r\n    </div>\r\n    <div id=\"timeline\" class=\"timeline-center timeline-wrapper\">\r\n        <ul class=\"timeline\">\r\n            <li class=\"timeline-line\"></li>\r\n            <li class=\"timeline-group\">\r\n                <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> امروز</a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"timeline\">\r\n            <li class=\"timeline-line\"></li>\r\n            <li class=\"timeline-item\">\r\n                <div class=\"timeline-badge\">\r\n                <span class=\"bg-red bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"کار پروژه نمونه کارها\"><i class=\"fa fa-plane\"></i></span>\r\n                </div>\r\n                <div class=\"timeline-card card border-grey border-lighten-2\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"mb-0 card-title\"><a>کار پروژه نمونه کارها</a></h4>\r\n                    <div class=\"card-subtitle text-muted mt-0\">\r\n                        <span class=\"font-small-3\">5 ساعت پیش</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <img class=\"img-fluid\" src=\"assets/img/photos/06.jpg\" alt=\"Timeline Image 1\">\r\n                    <div class=\"card-content\">\r\n                    <div class=\"card-body\">\r\n                        <p class=\"card-text\">\r\n                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. \r\n                        </p>\r\n                        <div class=\"list-inline mb-1\">\r\n                        <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-thumbs-o-up\"></span> پسندیدن</a></span>\r\n                        <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> نظر</a></span>\r\n                        <span><a class=\"primary\"><span class=\"fa fa-share-alt\"></span> اشتراک</a></span>\r\n                        </div>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"card-footer px-0 py-0\">\r\n                    <div class=\"card-body\">\r\n                        <form>\r\n                            <fieldset class=\"form-group position-relative has-icon-left mb-0\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"نوشتن نظر ...\">\r\n                                <div class=\"form-control-position\">\r\n                                    <i class=\"fa fa-dashcube\"></i>\r\n                                </div>\r\n                            </fieldset>\r\n                        </form>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n            </li>            \r\n            <li class=\"timeline-item mt-5\">\r\n                <div class=\"timeline-badge\">\r\n                <span class=\"avatar avatar-online\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Eu pid nunc urna integer\"><img src=\"assets/img/portrait/small/avatar-s-5.png\" alt=\"avatar\" width=\"40\"></span>\r\n                </div>\r\n                <div class=\"timeline-card card card-inverse\">\r\n                <img class=\"card-img img-fluid\" src=\"assets/img/photos/07.jpg\" alt=\"Card image\">\r\n                <div class=\"card-img-overlay bg-overlay\">\r\n                    <h4 class=\"card-title\">صبح بخیر</h4>\r\n                    <p class=\"card-text\"><small>15 ساعت پیش</small></p>\r\n                </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n\r\n        <!-- 2016 -->\r\n        <ul class=\"timeline\">\r\n            <li class=\"timeline-line\"></li>\r\n            <li class=\"timeline-group\">\r\n                <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> 1396</a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"timeline\">\r\n            <li class=\"timeline-line\"></li><!-- /.timeline-line -->\r\n            <li class=\"timeline-item\">\r\n                <div class=\"timeline-badge\">\r\n                <span class=\"bg-warning bg-darken-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"پشتیبانی برنامه کاربردی\"><i class=\"fa fa-life-ring\"></i></span>\r\n                </div>\r\n                <div class=\"timeline-card card border-grey border-lighten-2\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"media\">\r\n                    <div class=\"media-left\">\r\n                        <a>\r\n                        <span class=\"avatar avatar-md avatar-busy\"><img src=\"assets/img/portrait/small/avatar-s-11.png\" alt=\"avatar\" width=\"50\"></span>\r\n                        <i></i>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                        <h4 class=\"mb-0 card-title\"><a>پشتیبانی برنامه کاربردی</a></h4>\r\n                        <div class=\"card-subtitle text-muted mt-0\">\r\n                            <span class=\"font-small-3\">15 بهمن 1396 ساعت 17:00</span>\r\n                            <span class=\"tag tag-pill tag-default tag-warning float-right\">بالا</span>\r\n                        </div>  \r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <img class=\"img-fluid\" src=\"assets/img/photos/08.jpg\" alt=\"Timeline Image 1\">\r\n                    <div class=\"card-content\">\r\n                    <div class=\"card-body\">\r\n                        <p class=\"card-text\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>\r\n                        <div class=\"list-inline mb-1\">\r\n                        <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> نظر</a></span>\r\n                        </div>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"card-footer px-0 py-0\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"media\">\r\n                        <div class=\"media-left\">\r\n                            <a>\r\n                            <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-14.png\" alt=\"avatar\" width=\"50\"></span>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"media-body\">\r\n                            <p class=\"text-bold-600 mb-0\"><a>زیبا حسنی کیا</a></p>\r\n                            <p class=\"m-0\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>\r\n                            <div class=\"media\">\r\n                            <div class=\"media-left\">\r\n                                <a>\r\n                                <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-16.png\" alt=\"avatar\" width=\"50\"></span>\r\n                                </a>\r\n                            </div>\r\n                            <div class=\"media-body\">\r\n                                <p class=\"text-bold-600 mb-0\"><a>زهرا اسدی</a></p>\r\n                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        </div>\r\n                        <form>\r\n                            <fieldset class=\"form-group position-relative has-icon-left mb-0\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"نوشتن نظر ...\">\r\n                                <div class=\"form-control-position\">\r\n                                    <i class=\"fa fa-dashcube\"></i>\r\n                                </div>\r\n                            </fieldset>\r\n                        </form>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"timeline-item mt-5\">\r\n                <div class=\"timeline-badge\">\r\n                <span class=\"bg-amber bg-darken-1\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Quote of the day\"><i class=\"fa fa-smile-o\"></i></span>\r\n                </div>\r\n                <div class=\"timeline-card card border-grey border-lighten-2\">\r\n                <div class=\"card-header\">\r\n                    <h4 class=\"mb-0 card-title\"><a>نقل قول روز</a></h4>\r\n                    <div class=\"card-subtitle text-muted mt-0\">\r\n                        <span class=\"font-small-3\">3 دی 1396 ساعت 120:00 ظهر</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <img class=\"img-fluid\" src=\"assets/img/photos/09.jpg\" alt=\"Timeline Image 1\">\r\n                    <div class=\"card-body\">\r\n                    <blockquote class=\"card-bodyquote\">\r\n                        <p class=\"card-text\">\r\n                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. \r\n                        </p>\r\n                        <footer>کسی که معروف است <cite title=\"Source Title\"> - عنوان منبع</cite></footer>\r\n                    </blockquote>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <!-- 2015 -->\r\n        <ul class=\"timeline\">\r\n            <li class=\"timeline-line\"></li>\r\n            <li class=\"timeline-group\">\r\n                <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> در سال 1396 تاسیس شد</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</section>\r\n<!--User Timeline section ends-->\r\n\r\n<!--User's friend section starts-->\r\n<section id=\"friends\" *ngIf=\"currentPage === 'Friends'\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"content-header\">دوستان</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header text-center\">\r\n                    <img src=\"./assets/img/portrait/small/avatar-s-3.png\" alt=\"Brek\" width=\"150\" class=\"rounded-circle gradient-mint\">\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">رضا مرادی</h4>\r\n                        <p class=\"category text-gray font-small-4\">مدیر عامل شرکت / موسس</p>\r\n                        <a class=\"btn btn-lg gradient-mint font-small-2 white p-2 mr-2\">افزودن به عنوان دوست</a>\r\n                        <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">پیام</a>\r\n                        <hr class=\"grey\">\r\n                        <div class=\"row grey\">\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-star mr-1\"></i> <span>4.9</span></a>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-globe mr-1\"></i> <span>ایران</span></a>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-book mr-1\"></i> <span>21</span></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header text-center\">\r\n                    <img src=\"./assets/img/portrait/small/avatar-s-18.png\" alt=\"Jassi\" width=\"150\" class=\"rounded-circle gradient-pomegranate\">\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">زهرا اسعدی</h4>\r\n                        <p class=\"category text-gray font-small-4\">توسعه دهنده</p>\r\n                        <a class=\"btn btn-lg gradient-pomegranate font-small-2 white p-2 mr-2\">افزودن به عنوان دوست</a>\r\n                        <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">پیام</a>\r\n                        <hr class=\"grey\">\r\n                        <div class=\"row grey\">\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-star mr-1\">ستاره</i> <span>4.7</span></a>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-globe mr-1\"></i> <span>ایران</span></a>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-book mr-1\"></i> <span>14</span></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header text-center\">\r\n                    <img src=\"./assets/img/portrait/small/avatar-s-11.png\" alt=\"Brek\" width=\"150\" class=\"rounded-circle gradient-orange-amber\">\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">سارا حسینی</h4>\r\n                        <p class=\"category text-gray font-small-4\">توسعه دهنده اندروید</p>\r\n                        <a class=\"btn btn-lg gradient-orange-amber font-small-2 white p-2 mr-2\">افزودن به عنوان دوست</a>\r\n                        <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">پیام</a>\r\n                        <hr class=\"grey\">\r\n                        <div class=\"row grey\">\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-star mr-1\">ستاره</i> <span>5.0</span></a>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-globe mr-1\"></i> <span>ایران</span></a>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-book mr-1\"></i> <span>18</span></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header text-center\">\r\n                    <img src=\"./assets/img/portrait/small/avatar-s-6.png\" alt=\"Maitri\" width=\"150\" class=\"rounded-circle gradient-red-pink\">\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">ثنا شاملی</h4>\r\n                        <p class=\"category text-gray font-small-4\">طراح</p>\r\n                        <a class=\"btn btn-lg gradient-red-pink font-small-2 white p-2 mr-2\">افزودن به عنوان دوست</a>\r\n                        <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">پیام</a>\r\n                        <hr class=\"grey\">\r\n                        <div class=\"row grey\">\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-star mr-1\">ستاره</i> <span>4.5</span></a>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-globe mr-1\"></i> <span>ایران</span></a>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-book mr-1\"></i> <span>19</span></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header text-center\">\r\n                    <img src=\"./assets/img/portrait/small/avatar-s-9.png\" alt=\"Anibal\" width=\"150\" class=\"rounded-circle gradient-blackberry\">\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">آرزو محمدی</h4>\r\n                        <p class=\"category text-gray font-small-4\">توسعه دهنده پروژه</p>\r\n                        <a class=\"btn btn-lg gradient-blackberry font-small-2 white p-2 mr-2\">افزودن به عنوان دوست</a>\r\n                        <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">پیام</a>\r\n                        <hr class=\"grey\">\r\n                        <div class=\"row grey\">\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-star mr-1\">ستاره</i> <span>4.8</span></a>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-globe mr-1\"></i> <span>لندن</span></a>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-book mr-1\"></i> <span>20</span></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header text-center\">\r\n                    <img src=\"./assets/img/portrait/small/avatar-s-12.png\" alt=\"Gini\" width=\"150\" class=\"rounded-circle gradient-back-to-earth\">\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-body text-center\">\r\n                        <h4 class=\"card-title\">علیرضا زمانی</h4>\r\n                        <p class=\"category text-gray font-small-4\">منابع انسانی</p>\r\n                        <a class=\"btn btn-lg gradient-back-to-earth font-small-2 white p-2 mr-2\">افزودن به عنوان دوست</a>\r\n                        <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">پیام</a>\r\n                        <hr class=\"grey\">\r\n                        <div class=\"row grey\">\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-star mr-1\">ستاره</i> <span>4.4</span></a>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-globe mr-1\"></i> <span>ایران</span></a>\r\n                            </div>\r\n                            <div class=\"col-4\">\r\n                                <a><i class=\"ft-book mr-1\"></i> <span>15</span></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--User's friend section starts-->\r\n\r\n<!--User's uploaded photos section starts-->\r\n<section id=\"photos\" *ngIf=\"currentPage === 'Photos'\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"content-header\">عکس ها</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h5>عکس آپلود شده</h5>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\r\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/1.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                            </figure>\r\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\r\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/2.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                            </figure>\r\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\r\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/3.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                            </figure>\r\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\r\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/4.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                            </figure>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\r\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/5.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                            </figure>\r\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\r\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/6.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                            </figure>\r\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\r\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/7.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                            </figure>\r\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\r\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/8.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                            </figure>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\r\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/9.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                            </figure>\r\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\r\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/10.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                            </figure>\r\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\r\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/11.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                            </figure>\r\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\r\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/12.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                            </figure>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\r\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/13.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                            </figure>\r\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\r\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/14.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                            </figure>\r\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\r\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/15.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                            </figure>\r\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\r\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/16.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\r\n                            </figure>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--User's uploaded photos section starts-->\r\n<!--User Profile Starts-->"

/***/ }),

/***/ "./src/app/@theme/pages/full-pages/faq/faq.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/faq/faq.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS9wYWdlcy9mdWxsLXBhZ2VzL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/@theme/pages/full-pages/faq/faq.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/faq/faq.component.ts ***!
  \**************************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _faq_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.service */ "./src/app/@theme/pages/full-pages/faq/faq.service.ts");



// import { Object } from 'core-js/library/web/timers';
var FaqComponent = /** @class */ (function () {
    function FaqComponent(faqService) {
        this.faqService = faqService;
        this.faqs = faqService.faqs;
    }
    FaqComponent.prototype.filter = function (searchValue) {
        if (searchValue === '') {
            this.faqs = this.faqService.faqs;
        }
        else {
            this.faqs = this.faqService.faqs.filter(function (faqs) { return faqs.title.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 || faqs.content.toUpperCase().indexOf(searchValue.toUpperCase()) != -1; });
        }
    };
    FaqComponent.ctorParameters = function () { return [
        { type: _faq_service__WEBPACK_IMPORTED_MODULE_2__["FaqService"] }
    ]; };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/faq/faq.component.html"),
            providers: [_faq_service__WEBPACK_IMPORTED_MODULE_2__["FaqService"]],
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/@theme/pages/full-pages/faq/faq.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_faq_service__WEBPACK_IMPORTED_MODULE_2__["FaqService"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/@theme/pages/full-pages/faq/faq.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/faq/faq.model.ts ***!
  \**********************************************************/
/*! exports provided: FAQ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQ", function() { return FAQ; });
var FAQ = /** @class */ (function () {
    function FAQ(faqId, title, content) {
        this.faqId = faqId;
        this.title = title;
        this.content = content;
    }
    FAQ.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String }
    ]; };
    return FAQ;
}());



/***/ }),

/***/ "./src/app/@theme/pages/full-pages/faq/faq.service.ts":
/*!************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/faq/faq.service.ts ***!
  \************************************************************/
/*! exports provided: FaqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqService", function() { return FaqService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _faq_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.model */ "./src/app/@theme/pages/full-pages/faq/faq.model.ts");



var FaqService = /** @class */ (function () {
    function FaqService() {
        this.faqs = [
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](1, 'چگونه سرویس دیتای سیم کارت خود را فعال کنیم؟', "Aenean eget leo vel lorem tincidunt tempor sit amet non ex.\n             Aenean porta, velit ut efficitur fringilla, enim est suscipit augue."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](2, 'چگونه تنظیمات اینترنت نوترینو را بر روی گوشی دریافت نماییم؟', "Nam tincidunt rhoncus dolor nec imperdiet. Ut ut mauris tortor. Nulla cursus mattis elit, sed egestas augue laoreet id."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](3, 'چگونه می توانم از فعال بودن سرویس اینترنت گوشی خود مطمئن شوم؟', "Aenean eget leo vel lorem tincidunt tempor sit amet non ex.\n            Aenean porta, velit ut efficitur fringilla, enim est suscipit augue."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](4, 'کدام مناطق تحت پوشش اینترنت نوترینوی همراه اول می باشد؟', "Nam tincidunt rhoncus dolor nec imperdiet. Ut ut mauris tortor. Nulla cursus mattis elit."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](5, 'برای کاهش هزینه سرویس دیتا چه راهکاری وجود دارد؟', "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](6, 'چگونه می توان تمدید خودکار بسته های نوترینو را لغو نمود؟', "Sed sit amet feugiat mi. Morbi dui dui, ultrices id commodo in, commodo ut erat."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](7, 'آیا همراه اول بسته های اینترنت شبانه ارائه می دهد؟', "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et ."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](8, 'در زمان اتصال به سرویس اینترنت نوترینو، هزینه اتصال بر چه مبنایی محاسبه می شود؟', "Sed sit amet feugiat mi. Morbi dui dui, ultrices id commodo in, commodo ut erat. Ut vitae condimentum lorem."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](9, 'آیا با تغییر نام سیم کارت، سرویس اینترنت نوترینو قطع می گردد؟', "Vivamus eu consectetur dui. Pellentesque eu mi et lacus mollis tempor. Etiam sed lobortis sapien. Mauris ultrices."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](10, 'چه شرایطی برای فعال سازی و استفاده از اینترنت نسل ۴ (4G) بر روی سیم کارت لازم است؟', "Integer ornare elementum augue, in scelerisque magna efficitur non. Suspendisse laoreet purus nec augue malesuada auctor. Donec mollis eleifend auctor."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](11, 'چگونه می توان از سرعت اینترنت نوترینوی سیم کارت خود مطلع شوم؟', "Vivamus eu consectetur dui. Pellentesque eu mi et lacus mollis tempor. Etiam sed lobortis sapien. Mauris ultrices bibendum elit, at egestas felis elementum vitae. Mauris viverra nulla vitae pulvinar sollicitudin.\n             "),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](12, 'چگونه تنظیمات اینترنت نوترینو را بر روی گوشی دریافت نماییم؟', "Integer ornare elementum augue, in scelerisque magna efficitur non. Suspendisse laoreet purus nec augue malesuada auctor. Donec mollis eleifend auctor. Aliquam arcu erat "),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](13, 'تعرفه عادی اینترنت نوترینو چه میزان می باشد؟', "Aenean eget leo vel lorem tincidunt tempor sit amet non ex.\n            Phasellus ut odio in dolor eleifend tincidunt eget id tellus."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](14, 'چگونه نوع پوشش شبکه در مناطق مختلف را می توان تشخیص داد؟', "Integer ornare elementum augue, in scelerisque magna efficitur non. Suspendisse laoreet purus nec augue malesuada auctor.\n             Ut sed viverra neque, nec hendrerit tortor. "),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](15, 'آیا پس از اتمام بسته های نوترینو، مصرف بعدی اینترنت با هزینه بیشتری محاسبه می گردد؟', "Enim est suscipit augue, in porta ex nisi quis est.\n            Phasellus ut odio in dolor eleifend tincidunt eget id tellus."),
        ];
    }
    FaqService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaqService);
    return FaqService;
}());



/***/ }),

/***/ "./src/app/@theme/pages/full-pages/full-pages-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/full-pages-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: FullPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPagesRoutingModule", function() { return FullPagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_gallery_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery-page.component */ "./src/app/@theme/pages/full-pages/gallery/gallery-page.component.ts");
/* harmony import */ var _invoice_invoice_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice/invoice-page.component */ "./src/app/@theme/pages/full-pages/invoice/invoice-page.component.ts");
/* harmony import */ var _timeline_horizontal_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline/horizontal/horizontal-timeline-page.component */ "./src/app/@theme/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.ts");
/* harmony import */ var _timeline_vertical_vertical_timeline_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline/vertical/vertical-timeline-page.component */ "./src/app/@theme/pages/full-pages/timeline/vertical/vertical-timeline-page.component.ts");
/* harmony import */ var _user_profile_user_profile_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profile/user-profile-page.component */ "./src/app/@theme/pages/full-pages/user-profile/user-profile-page.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/@theme/pages/full-pages/search/search.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/@theme/pages/full-pages/faq/faq.component.ts");
/* harmony import */ var _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./knowledge-base/knowledge-base.component */ "./src/app/@theme/pages/full-pages/knowledge-base/knowledge-base.component.ts");











var routes = [
    {
        path: '',
        children: [
            {
                path: 'gallery',
                component: _gallery_gallery_page_component__WEBPACK_IMPORTED_MODULE_3__["GalleryPageComponent"],
                data: {
                    title: 'Gallery Page'
                }
            },
            {
                path: 'invoice',
                component: _invoice_invoice_page_component__WEBPACK_IMPORTED_MODULE_4__["InvoicePageComponent"],
                data: {
                    title: 'Invoice Page'
                }
            },
            {
                path: 'horizontaltimeline',
                component: _timeline_horizontal_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_5__["HorizontalTimelinePageComponent"],
                data: {
                    title: 'Horizontal Timeline Page'
                }
            },
            {
                path: 'verticaltimeline',
                component: _timeline_vertical_vertical_timeline_page_component__WEBPACK_IMPORTED_MODULE_6__["VerticalTimelinePageComponent"],
                data: {
                    title: 'Vertical Timeline Page'
                }
            },
            {
                path: 'profile',
                component: _user_profile_user_profile_page_component__WEBPACK_IMPORTED_MODULE_7__["UserProfilePageComponent"],
                data: {
                    title: 'User Profile Page'
                }
            },
            {
                path: 'search',
                component: _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                data: {
                    title: 'Search'
                }
            },
            {
                path: 'faq',
                component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_9__["FaqComponent"],
                data: {
                    title: 'FAQ'
                }
            },
            {
                path: 'kb',
                component: _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_10__["KnowledgeBaseComponent"],
                data: {
                    title: 'Knowledge Base'
                }
            }
        ]
    }
];
var FullPagesRoutingModule = /** @class */ (function () {
    function FullPagesRoutingModule() {
    }
    FullPagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FullPagesRoutingModule);
    return FullPagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/@theme/pages/full-pages/full-pages.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/full-pages.module.ts ***!
  \**************************************************************/
/*! exports provided: FullPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPagesModule", function() { return FullPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _full_pages_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./full-pages-routing.module */ "./src/app/@theme/pages/full-pages/full-pages-routing.module.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/fesm5/ng-chartist.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _gallery_gallery_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery/gallery-page.component */ "./src/app/@theme/pages/full-pages/gallery/gallery-page.component.ts");
/* harmony import */ var _invoice_invoice_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./invoice/invoice-page.component */ "./src/app/@theme/pages/full-pages/invoice/invoice-page.component.ts");
/* harmony import */ var _timeline_horizontal_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timeline/horizontal/horizontal-timeline-page.component */ "./src/app/@theme/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.ts");
/* harmony import */ var _timeline_horizontal_component_horizontal_timeline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timeline/horizontal/component/horizontal-timeline.component */ "./src/app/@theme/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.ts");
/* harmony import */ var _timeline_vertical_vertical_timeline_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timeline/vertical/vertical-timeline-page.component */ "./src/app/@theme/pages/full-pages/timeline/vertical/vertical-timeline-page.component.ts");
/* harmony import */ var _user_profile_user_profile_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-profile/user-profile-page.component */ "./src/app/@theme/pages/full-pages/user-profile/user-profile-page.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/search.component */ "./src/app/@theme/pages/full-pages/search/search.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/@theme/pages/full-pages/faq/faq.component.ts");
/* harmony import */ var _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./knowledge-base/knowledge-base.component */ "./src/app/@theme/pages/full-pages/knowledge-base/knowledge-base.component.ts");

















var FullPagesModule = /** @class */ (function () {
    function FullPagesModule() {
    }
    FullPagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _full_pages_routing_module__WEBPACK_IMPORTED_MODULE_4__["FullPagesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_5__["ChartistModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
            ],
            declarations: [
                _gallery_gallery_page_component__WEBPACK_IMPORTED_MODULE_8__["GalleryPageComponent"],
                _invoice_invoice_page_component__WEBPACK_IMPORTED_MODULE_9__["InvoicePageComponent"],
                _timeline_horizontal_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_10__["HorizontalTimelinePageComponent"],
                _timeline_horizontal_component_horizontal_timeline_component__WEBPACK_IMPORTED_MODULE_11__["HorizontalTimelineComponent"],
                _timeline_vertical_vertical_timeline_page_component__WEBPACK_IMPORTED_MODULE_12__["VerticalTimelinePageComponent"],
                _user_profile_user_profile_page_component__WEBPACK_IMPORTED_MODULE_13__["UserProfilePageComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_15__["FaqComponent"],
                _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_16__["KnowledgeBaseComponent"]
            ]
        })
    ], FullPagesModule);
    return FullPagesModule;
}());



/***/ }),

/***/ "./src/app/@theme/pages/full-pages/gallery/gallery-page.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/gallery/gallery-page.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS9wYWdlcy9mdWxsLXBhZ2VzL2dhbGxlcnkvZ2FsbGVyeS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/@theme/pages/full-pages/gallery/gallery-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/gallery/gallery-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: GalleryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function() { return GalleryPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryPageComponent = /** @class */ (function () {
    function GalleryPageComponent() {
    }
    GalleryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery-page',
            template: __webpack_require__(/*! raw-loader!./gallery-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/gallery/gallery-page.component.html"),
            styles: [__webpack_require__(/*! ./gallery-page.component.scss */ "./src/app/@theme/pages/full-pages/gallery/gallery-page.component.scss")]
        })
    ], GalleryPageComponent);
    return GalleryPageComponent;
}());



/***/ }),

/***/ "./src/app/@theme/pages/full-pages/invoice/invoice-page.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/invoice/invoice-page.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS9wYWdlcy9mdWxsLXBhZ2VzL2ludm9pY2UvaW52b2ljZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/@theme/pages/full-pages/invoice/invoice-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/invoice/invoice-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: InvoicePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageComponent", function() { return InvoicePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InvoicePageComponent = /** @class */ (function () {
    function InvoicePageComponent() {
    }
    InvoicePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-page',
            template: __webpack_require__(/*! raw-loader!./invoice-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/invoice/invoice-page.component.html"),
            styles: [__webpack_require__(/*! ./invoice-page.component.scss */ "./src/app/@theme/pages/full-pages/invoice/invoice-page.component.scss")]
        })
    ], InvoicePageComponent);
    return InvoicePageComponent;
}());



/***/ }),

/***/ "./src/app/@theme/pages/full-pages/knowledge-base/knowledge-base.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/knowledge-base/knowledge-base.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS9wYWdlcy9mdWxsLXBhZ2VzL2tub3dsZWRnZS1iYXNlL2tub3dsZWRnZS1iYXNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/@theme/pages/full-pages/knowledge-base/knowledge-base.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/knowledge-base/knowledge-base.component.ts ***!
  \************************************************************************************/
/*! exports provided: KnowledgeBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeBaseComponent", function() { return KnowledgeBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var KnowledgeBaseComponent = /** @class */ (function () {
    function KnowledgeBaseComponent(modalService) {
        this.modalService = modalService;
    }
    KnowledgeBaseComponent.prototype.GetDetails = function (content, titleText) {
        this.title = titleText;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    KnowledgeBaseComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    KnowledgeBaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-knowledge-base',
            template: __webpack_require__(/*! raw-loader!./knowledge-base.component.html */ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/knowledge-base/knowledge-base.component.html"),
            styles: [__webpack_require__(/*! ./knowledge-base.component.scss */ "./src/app/@theme/pages/full-pages/knowledge-base/knowledge-base.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], KnowledgeBaseComponent);
    return KnowledgeBaseComponent;
}());



/***/ }),

/***/ "./src/app/@theme/pages/full-pages/search/search.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/search/search.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS9wYWdlcy9mdWxsLXBhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/@theme/pages/full-pages/search/search.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/search/search.component.ts ***!
  \********************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/@theme/pages/full-pages/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/@theme/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cd-horizontal-timeline .events-content {\n  margin: 1rem 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHRoZW1lL3BhZ2VzL2Z1bGwtcGFnZXMvdGltZWxpbmUvaG9yaXpvbnRhbC9jb21wb25lbnQvRDpcXFNvdXJjZV9LYXJhdmlcXEdpdEh1YlxcTnRrQ21zLkNsaWVudC5XZWIuQ29udHJvbFBhbmVsXFxjcGFuZWx2NFNvdXJjZS9zcmNcXGFwcFxcQHRoZW1lXFxwYWdlc1xcZnVsbC1wYWdlc1xcdGltZWxpbmVcXGhvcml6b250YWxcXGNvbXBvbmVudFxcaG9yaXpvbnRhbC10aW1lbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS9wYWdlcy9mdWxsLXBhZ2VzL3RpbWVsaW5lL2hvcml6b250YWwvY29tcG9uZW50L2hvcml6b250YWwtdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2QtaG9yaXpvbnRhbC10aW1lbGluZSB7XHJcbiAgLmV2ZW50cy1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/@theme/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: HorizontalTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalTimelineComponent", function() { return HorizontalTimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var HorizontalTimelineComponent = /** @class */ (function () {
    function HorizontalTimelineComponent(_cdr) {
        this._cdr = _cdr;
        this.prevLinkInactive = true;
        this.nextLinkInactive = false;
        this.loaded = false;
        this.selectedIndex = 0;
        this.eventsWrapperWidth = 0;
        this._viewInitialized = false;
        this._timelineWrapperWidth = 720;
        this._eventsMinDistance = 80;
        this._dateFormat = 'dd.MM.yyyy';
        this._dateFormatTop = 'dd MMM';
        this._disabled = false;
        this._showContent = false;
    }
    HorizontalTimelineComponent_1 = HorizontalTimelineComponent;
    Object.defineProperty(HorizontalTimelineComponent.prototype, "timelineWrapperWidth", {
        set: function (value) {
            this._timelineWrapperWidth = value;
            this._cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "eventsMinDistance", {
        set: function (value) {
            this._eventsMinDistance = value;
            this.initView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "timelineElements", {
        get: function () {
            return this._timelineElements;
        },
        set: function (value) {
            this._timelineElements = value;
            this.initView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "dateFormat", {
        get: function () {
            return this._dateFormat;
        },
        set: function (value) {
            this._dateFormat = value;
            this.initView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "dateFormatTop", {
        get: function () {
            return this._dateFormatTop;
        },
        set: function (value) {
            this._dateFormatTop = value;
            this.initView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "disabled", {
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "showContent", {
        get: function () {
            return this._showContent;
        },
        set: function (value) {
            this._showContent = value;
            this._cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    HorizontalTimelineComponent.pxToNumber = function (val) {
        return Number(val.replace('px', ''));
    };
    HorizontalTimelineComponent.getElementWidth = function (element) {
        var computedStyle = window.getComputedStyle(element);
        if (!computedStyle.width) {
            return 0;
        }
        return HorizontalTimelineComponent_1.pxToNumber(computedStyle.width);
    };
    HorizontalTimelineComponent.parentElement = function (element, tagName) {
        if (!element || !element.parentNode) {
            return null;
        }
        var parent = element.parentNode;
        while (true) {
            if (parent.tagName.toLowerCase() == tagName) {
                return parent;
            }
            parent = parent.parentNode;
            if (!parent) {
                return null;
            }
        }
    };
    HorizontalTimelineComponent.getTranslateValue = function (timeline) {
        var timelineStyle = window.getComputedStyle(timeline);
        var timelineTranslate = timelineStyle.getPropertyValue('-webkit-transform') ||
            timelineStyle.getPropertyValue('-moz-transform') ||
            timelineStyle.getPropertyValue('-ms-transform') ||
            timelineStyle.getPropertyValue('-o-transform') ||
            timelineStyle.getPropertyValue('transform');
        var translateValue = 0;
        if (timelineTranslate.indexOf('(') >= 0) {
            var timelineTranslateStr = timelineTranslate
                .split('(')[1]
                .split(')')[0]
                .split(',')[4];
            translateValue = Number(timelineTranslateStr);
        }
        return translateValue;
    };
    HorizontalTimelineComponent.setTransformValue = function (element, property, value) {
        element.style['-webkit-transform'] = property + '(' + value + ')';
        element.style['-moz-transform'] = property + '(' + value + ')';
        element.style['-ms-transform'] = property + '(' + value + ')';
        element.style['-o-transform'] = property + '(' + value + ')';
        element.style['transform'] = property + '(' + value + ')';
    };
    HorizontalTimelineComponent.dayDiff = function (first, second) {
        return Math.round(second.getTime() - first.getTime());
    };
    HorizontalTimelineComponent.minLapse = function (elements) {
        if (elements && elements.length && elements.length === 1) {
            return 0;
        }
        var result = 0;
        for (var i = 1; i < elements.length; i++) {
            var distance = HorizontalTimelineComponent_1.dayDiff(elements[i - 1].date, elements[i].date);
            result = result ? Math.min(result, distance) : distance;
        }
        return result;
    };
    HorizontalTimelineComponent.prototype.ngAfterViewInit = function () {
        this._cdr.detach();
        this._viewInitialized = true;
        this.initView();
    };
    HorizontalTimelineComponent.prototype.onScrollClick = function (event, forward) {
        event.preventDefault();
        this.updateSlide(this.eventsWrapperWidth, forward);
        this._cdr.detectChanges();
    };
    HorizontalTimelineComponent.prototype.onEventClick = function (event, selectedItem) {
        event.preventDefault();
        if (this._disabled) {
            return;
        }
        var element = event.target;
        // detect click on the a single event - show new event content
        var visibleItem = this._timelineElements[0];
        this._timelineElements.forEach(function (item) {
            if (item.selected && item != selectedItem) {
                visibleItem = item;
                item.selected = false;
            }
        });
        this.selectedIndex = this._timelineElements.indexOf(selectedItem);
        selectedItem.selected = true;
        this.updateFilling(element);
        this._cdr.detectChanges();
    };
    HorizontalTimelineComponent.prototype.initTimeline = function (timeLines) {
        var eventsMinLapse = HorizontalTimelineComponent_1.minLapse(timeLines);
        // assign a left position to the single events along the timeline
        this.setDatePosition(timeLines, this._eventsMinDistance, eventsMinLapse);
        // assign a width to the timeline
        this.setTimelineWidth(timeLines, this._eventsMinDistance, eventsMinLapse);
        // the timeline has been initialize - show it
        this.loaded = true;
    };
    HorizontalTimelineComponent.prototype.updateSlide = function (timelineTotWidth, forward) {
        var translateValue = HorizontalTimelineComponent_1.getTranslateValue(this.eventsWrapper.nativeElement);
        if (forward) {
            this.translateTimeline(translateValue - this._timelineWrapperWidth + this._eventsMinDistance, this._timelineWrapperWidth - timelineTotWidth);
        }
        else {
            this.translateTimeline(translateValue + this._timelineWrapperWidth - this._eventsMinDistance, null);
        }
    };
    HorizontalTimelineComponent.prototype.updateTimelinePosition = function (element) {
        var eventStyle = window.getComputedStyle(element);
        var eventLeft = HorizontalTimelineComponent_1.pxToNumber(eventStyle.getPropertyValue('left'));
        var translateValue = HorizontalTimelineComponent_1.getTranslateValue(this.eventsWrapper.nativeElement);
        if (eventLeft > this._timelineWrapperWidth - translateValue) {
            this.translateTimeline(-eventLeft + this._timelineWrapperWidth / 2, this._timelineWrapperWidth - this.eventsWrapperWidth);
        }
    };
    HorizontalTimelineComponent.prototype.translateTimeline = function (value, totWidth) {
        // only negative translate value
        value = (value > 0) ? 0 : value;
        // do not translate more than timeline width
        value = (!(totWidth === null) && value < totWidth) ? totWidth : value;
        HorizontalTimelineComponent_1.setTransformValue(this.eventsWrapper.nativeElement, 'translateX', value + 'px');
        // update navigation arrows visibility
        this.prevLinkInactive = value === 0;
        this.nextLinkInactive = value === totWidth;
    };
    HorizontalTimelineComponent.prototype.setTimelineWidth = function (elements, width, eventsMinLapse) {
        var timeSpan = 100;
        if (elements.length > 1) {
            timeSpan = HorizontalTimelineComponent_1.dayDiff(elements[0].date, elements[elements.length - 1].date);
        }
        var timeSpanNorm = timeSpan / eventsMinLapse;
        timeSpanNorm = Math.round(timeSpanNorm) + 4;
        this.eventsWrapperWidth = timeSpanNorm * width;
        var aHref = this.eventsWrapper.nativeElement.querySelectorAll('a.selected')[0];
        this.updateFilling(aHref);
        this.updateTimelinePosition(aHref);
        return this.eventsWrapperWidth;
    };
    HorizontalTimelineComponent.prototype.updateFilling = function (element) {
        // change .filling-line length according to the selected event
        var eventStyle = window.getComputedStyle(element);
        var eventLeft = eventStyle.getPropertyValue('left');
        var eventWidth = eventStyle.getPropertyValue('width');
        var eventLeftNum = HorizontalTimelineComponent_1.pxToNumber(eventLeft) + HorizontalTimelineComponent_1.pxToNumber(eventWidth) / 2;
        var scaleValue = eventLeftNum / this.eventsWrapperWidth;
        HorizontalTimelineComponent_1.setTransformValue(this.fillingLine.nativeElement, 'scaleX', scaleValue);
    };
    HorizontalTimelineComponent.prototype.initView = function () {
        if (!this._viewInitialized) {
            return;
        }
        if (this._timelineElements && this._timelineElements.length) {
            for (var i = 0; i < this._timelineElements.length; i++) {
                if (this._timelineElements[i].selected) {
                    this.selectedIndex = i;
                    break;
                }
            }
            this.initTimeline(this._timelineElements);
        }
        this._cdr.detectChanges();
    };
    HorizontalTimelineComponent.prototype.setDatePosition = function (elements, min, eventsMinLapse) {
        var timelineEventsArray = this.timelineEvents.toArray();
        var i = 0;
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var component = elements_1[_i];
            var distance = HorizontalTimelineComponent_1.dayDiff(elements[0].date, component.date);
            var distanceNorm = Math.round(distance / eventsMinLapse);
            timelineEventsArray[i].nativeElement.style.left = distanceNorm * min + 'px';
            // span
            var span = timelineEventsArray[i].nativeElement.parentElement.children[1];
            var spanWidth = HorizontalTimelineComponent_1.getElementWidth(span);
            span.style.left = distanceNorm * min + spanWidth / 2 + 'px';
            i++;
        }
    };
    var HorizontalTimelineComponent_1;
    HorizontalTimelineComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('eventsWrapper', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HorizontalTimelineComponent.prototype, "eventsWrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fillingLine', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HorizontalTimelineComponent.prototype, "fillingLine", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('timelineEvents'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], HorizontalTimelineComponent.prototype, "timelineEvents", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], HorizontalTimelineComponent.prototype, "timelineWrapperWidth", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], HorizontalTimelineComponent.prototype, "eventsMinDistance", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], HorizontalTimelineComponent.prototype, "timelineElements", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], HorizontalTimelineComponent.prototype, "dateFormat", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], HorizontalTimelineComponent.prototype, "dateFormatTop", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], HorizontalTimelineComponent.prototype, "disabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], HorizontalTimelineComponent.prototype, "showContent", null);
    HorizontalTimelineComponent = HorizontalTimelineComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'horizontal-timeline',
            template: __webpack_require__(/*! raw-loader!./horizontal-timeline.component.html */ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('contentState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        position: 'relative', 'z-index': 2, opacity: 1,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('right => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active => right', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(-100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active => left', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(-100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('left => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
                        ]))
                    ]),
                ])
            ],
            styles: [__webpack_require__(/*! ./horizontal-timeline.component.scss */ "./src/app/@theme/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], HorizontalTimelineComponent);
    return HorizontalTimelineComponent;
}());



/***/ }),

/***/ "./src/app/@theme/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS9wYWdlcy9mdWxsLXBhZ2VzL3RpbWVsaW5lL2hvcml6b250YWwvaG9yaXpvbnRhbC10aW1lbGluZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/@theme/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: HorizontalTimelinePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalTimelinePageComponent", function() { return HorizontalTimelinePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HorizontalTimelinePageComponent = /** @class */ (function () {
    function HorizontalTimelinePageComponent() {
        this.content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae \n    ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, \n    ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam \n    quisquam, quae, temporibus dolores porro doloribus.";
        this.timeline = [
            { date: new Date(2014, 1, 16), selected: true, title: 'Horizontal Timeline', content: this.content },
            { date: new Date(2014, 2, 28), title: 'Event title here', content: this.content },
            { date: new Date(2014, 3, 20), title: 'Event title here', content: this.content },
            { date: new Date(2014, 5, 20), title: 'Event title here', content: this.content },
            { date: new Date(2014, 7, 9), title: 'Event title here', content: this.content },
            { date: new Date(2014, 8, 30), title: 'Event title here', content: this.content },
            { date: new Date(2014, 9, 15), title: 'Event title here', content: this.content },
            { date: new Date(2014, 11, 1), title: 'Event title here', content: this.content },
            { date: new Date(2014, 12, 10), title: 'Event title here', content: this.content },
            { date: new Date(2015, 1, 19), title: 'Event title here', content: this.content },
            { date: new Date(2015, 3, 3), title: 'Event title here', content: this.content },
        ];
    }
    HorizontalTimelinePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-horizontal-timeline-page',
            template: __webpack_require__(/*! raw-loader!./horizontal-timeline-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.html"),
            styles: [__webpack_require__(/*! ./horizontal-timeline-page.component.scss */ "./src/app/@theme/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.scss")]
        })
    ], HorizontalTimelinePageComponent);
    return HorizontalTimelinePageComponent;
}());



/***/ }),

/***/ "./src/app/@theme/pages/full-pages/timeline/vertical/vertical-timeline-page.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/timeline/vertical/vertical-timeline-page.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host > > > .ct-area {\n  stroke: none;\n  fill-opacity: 0.1; }\n\n:host > > > .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host > > > .ct-label {\n  font-size: 0.9rem; }\n\n:host > > > .lineArea1 .ct-series-a .ct-area {\n  fill-opacity: 0.3;\n  fill: #FF586B; }\n\n:host > > > .lineArea1 .ct-series-b .ct-area {\n  fill: #FF586B;\n  fill-opacity: 0.6; }\n\n:host > > > .lineArea1 .ct-line {\n  stroke: #FF586B;\n  stroke-width: 0px; }\n\n:host > > > .lineArea1 .ct-point {\n  stroke-width: 0px; }\n\nagm-map {\n  height: 450px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHRoZW1lL3BhZ2VzL2Z1bGwtcGFnZXMvdGltZWxpbmUvdmVydGljYWwvRDpcXFNvdXJjZV9LYXJhdmlcXEdpdEh1YlxcTnRrQ21zLkNsaWVudC5XZWIuQ29udHJvbFBhbmVsXFxjcGFuZWx2NFNvdXJjZS9zcmNcXGFwcFxcQHRoZW1lXFxwYWdlc1xcZnVsbC1wYWdlc1xcdGltZWxpbmVcXHZlcnRpY2FsXFx2ZXJ0aWNhbC10aW1lbGluZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHFCQUFxQjtFQUNyQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxpQkFBaUIsRUFBQTs7QUFLckI7RUFDSSxpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBS3JCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvQHRoZW1lL3BhZ2VzL2Z1bGwtcGFnZXMvdGltZWxpbmUvdmVydGljYWwvdmVydGljYWwtdGltZWxpbmUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0ID4+PiAuY3QtYXJlYSB7XHJcbiAgICBzdHJva2U6IG5vbmU7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDAuMTtcclxufVxyXG5cclxuOmhvc3QgPj4+IC5jdC1ncmlke1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMHB4O1xyXG4gICAgc3Ryb2tlOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbjpob3N0ID4+PiAuY3QtbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMSBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCA+Pj4gLmxpbmVBcmVhMSAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xyXG4gICAgZmlsbC1vcGFjaXR5OiAwLjM7XHJcbiAgICBmaWxsOiAjRkY1ODZCO1xyXG59XHJcblxyXG46aG9zdCA+Pj4gLmxpbmVBcmVhMSAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogI0ZGNTg2QjtcclxuICAgIGZpbGwtb3BhY2l0eTogMC42O1xyXG59XHJcbjpob3N0ID4+PiAubGluZUFyZWExIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlOiAjRkY1ODZCO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgPj4+IC5saW5lQXJlYTEgLmN0LXBvaW50IHtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAxIENTUyBFbmRzXHJcblxyXG5hZ20tbWFwIHtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/@theme/pages/full-pages/timeline/vertical/vertical-timeline-page.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/timeline/vertical/vertical-timeline-page.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: VerticalTimelinePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalTimelinePageComponent", function() { return VerticalTimelinePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var data = __webpack_require__(/*! ../../../../../shared/data/chartist.json */ "./src/app/shared/data/chartist.json");
var VerticalTimelinePageComponent = /** @class */ (function () {
    function VerticalTimelinePageComponent() {
        // Google map lat-long
        this.lat = 40.650002;
        this.lng = -73.949997;
        // Line with Area Chart 1 Starts
        this.lineArea1 = {
            type: 'Line',
            data: data['lineArea1'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true,
                onlyInteger: true,
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                axisX: {
                    showGrid: false
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(255, 255, 255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(38, 198, 218, 1)'
                    });
                },
            },
        };
        // Line with Area Chart 1 Ends
    }
    VerticalTimelinePageComponent.prototype.ngOnInit = function () {
    };
    VerticalTimelinePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vertical-timeline-page',
            template: __webpack_require__(/*! raw-loader!./vertical-timeline-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/timeline/vertical/vertical-timeline-page.component.html"),
            styles: [__webpack_require__(/*! ./vertical-timeline-page.component.scss */ "./src/app/@theme/pages/full-pages/timeline/vertical/vertical-timeline-page.component.scss")]
        })
    ], VerticalTimelinePageComponent);
    return VerticalTimelinePageComponent;
}());



/***/ }),

/***/ "./src/app/@theme/pages/full-pages/user-profile/user-profile-page.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/user-profile/user-profile-page.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-menu .active {\n  border-bottom: 2px solid;\n  margin-bottom: -2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHRoZW1lL3BhZ2VzL2Z1bGwtcGFnZXMvdXNlci1wcm9maWxlL0Q6XFxTb3VyY2VfS2FyYXZpXFxHaXRIdWJcXE50a0Ntcy5DbGllbnQuV2ViLkNvbnRyb2xQYW5lbFxcY3BhbmVsdjRTb3VyY2Uvc3JjXFxhcHBcXEB0aGVtZVxccGFnZXNcXGZ1bGwtcGFnZXNcXHVzZXItcHJvZmlsZVxcdXNlci1wcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSx3QkFBd0I7RUFDeEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9AdGhlbWUvcGFnZXMvZnVsbC1wYWdlcy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1tZW51e1xyXG4gICAgLmFjdGl2ZXtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/@theme/pages/full-pages/user-profile/user-profile-page.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/@theme/pages/full-pages/user-profile/user-profile-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UserProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageComponent", function() { return UserProfilePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserProfilePageComponent = /** @class */ (function () {
    function UserProfilePageComponent() {
        //Variable Declaration
        this.currentPage = "About";
    }
    UserProfilePageComponent.prototype.ngOnInit = function () {
    };
    UserProfilePageComponent.prototype.showPage = function (page) {
        this.currentPage = page;
    };
    UserProfilePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile-page',
            template: __webpack_require__(/*! raw-loader!./user-profile-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/@theme/pages/full-pages/user-profile/user-profile-page.component.html"),
            styles: [__webpack_require__(/*! ./user-profile-page.component.scss */ "./src/app/@theme/pages/full-pages/user-profile/user-profile-page.component.scss")]
        })
    ], UserProfilePageComponent);
    return UserProfilePageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-full-pages-full-pages-module.js.map