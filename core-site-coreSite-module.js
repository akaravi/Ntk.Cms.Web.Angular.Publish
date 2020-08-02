(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-site-coreSite-module"],{

/***/ "./node_modules/ngx-persian/fesm5/ngx-persian.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-persian/fesm5/ngx-persian.js ***!
  \*******************************************************/
/*! exports provided: EnNumPipe, FaNumPipe, IRCurrencyPipe, JDate, JalaliDateCalculatorService, JalaliDateValidatorService, JdatePipe, MobileCodes, MobilePhoneNumberService, NationalCodePipe, NationalCodeService, NgxPersianModule, PersianLetterDirective, PersianLetterService, PersianNumberService, PersianNumbersDirective, operatorsNames, persianLettersValidator, persianNumbersValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnNumPipe", function() { return EnNumPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaNumPipe", function() { return FaNumPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IRCurrencyPipe", function() { return IRCurrencyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JDate", function() { return JDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JalaliDateCalculatorService", function() { return JalaliDateCalculatorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JalaliDateValidatorService", function() { return JalaliDateValidatorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JdatePipe", function() { return JdatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileCodes", function() { return MobileCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobilePhoneNumberService", function() { return MobilePhoneNumberService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationalCodePipe", function() { return NationalCodePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationalCodeService", function() { return NationalCodeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPersianModule", function() { return NgxPersianModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersianLetterDirective", function() { return PersianLetterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersianLetterService", function() { return PersianLetterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersianNumberService", function() { return PersianNumberService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersianNumbersDirective", function() { return PersianNumbersDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operatorsNames", function() { return operatorsNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persianLettersValidator", function() { return persianLettersValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persianNumbersValidator", function() { return persianNumbersValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This error will throw when input value of the service method is not a valid value.
 */
var /**
 * This error will throw when input value of the service method is not a valid value.
 */
InvalidServiceInputError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(InvalidServiceInputError, _super);
    function InvalidServiceInputError() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var _this = _super.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(params)) || this;
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        // @ts-ignore
        if (Error.captureStackTrace) {
            // @ts-ignore
            Error.captureStackTrace(_this, InvalidServiceInputError);
        }
        _this.message = 'Invalid value has been passed to the service.';
        return _this;
    }
    return InvalidServiceInputError;
}(Error));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PersianNumberService = /** @class */ (function () {
    function PersianNumberService() {
    }
    /**
     * Checks if input value contains any persian number or not.
     * @param value
     * @return true if input value contains any persian number. false otherwise.
     */
    /**
     * Checks if input value contains any persian number or not.
     * @param {?} value
     * @return {?} true if input value contains any persian number. false otherwise.
     */
    PersianNumberService.prototype.containsPersian = /**
     * Checks if input value contains any persian number or not.
     * @param {?} value
     * @return {?} true if input value contains any persian number. false otherwise.
     */
    function (value) {
        if (!value) {
            return false;
        }
        // language=JSRegexp
        /** @type {?} */
        var persianRegex = new RegExp("[" + PersianNumberService.persianNumberPattern + "]");
        return persianRegex.test(value);
    };
    /**
     * splits input value by persian letters and then returns length of matched array.
     * @param value
     * @return 0 if input value has no persian letter, numbers of persian letters in the input value otherwise.
     */
    /**
     * splits input value by persian letters and then returns length of matched array.
     * @private
     * @param {?} value
     * @return {?} 0 if input value has no persian letter, numbers of persian letters in the input value otherwise.
     */
    PersianNumberService._getMatchedPatternLength = /**
     * splits input value by persian letters and then returns length of matched array.
     * @private
     * @param {?} value
     * @return {?} 0 if input value has no persian letter, numbers of persian letters in the input value otherwise.
     */
    function (value) {
        // language=JSRegexp
        /** @type {?} */
        var matchResult = value.match(new RegExp("[" + PersianNumberService.persianNumberPattern + "]", 'g'));
        return matchResult ? matchResult.length : 0;
    };
    /**
     * Checks if input value contains only persian letters.
     * @param value
     */
    /**
     * Checks if input value contains only persian letters.
     * @param {?} value
     * @return {?}
     */
    PersianNumberService.prototype.isPersian = /**
     * Checks if input value contains only persian letters.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            return false;
        }
        return value.length === PersianNumberService._getMatchedPatternLength(value);
    };
    /**
     * Converts arabic numbers to the persian ones.
     * @param value
     */
    /**
     * Converts arabic numbers to the persian ones.
     * @param {?} value
     * @return {?}
     */
    PersianNumberService.prototype.arabicToPersian = /**
     * Converts arabic numbers to the persian ones.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.replace(/٤/g, PersianNumberService.persianNumbersTable[4])
            .replace(/٥/g, PersianNumberService.persianNumbersTable[5])
            .replace(/٦/g, PersianNumberService.persianNumbersTable[6]);
    };
    /**
     * Converts all arabic and english numbers to the persian numbers.
     * @param value
     */
    /**
     * Converts all arabic and english numbers to the persian numbers.
     * @param {?} value
     * @return {?}
     */
    PersianNumberService.prototype.toPersian = /**
     * Converts all arabic and english numbers to the persian numbers.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === undefined || value === null) {
            throw new InvalidServiceInputError();
        }
        value = value.toString();
        value = this.arabicToPersian(value);
        /** @type {?} */
        var regex;
        for (var i = 0; i < PersianNumberService.persianNumbersTable.length; i++) {
            // language=JSRegexp
            regex = new RegExp("[" + PersianNumberService.englishNumbersTable[i] + "]", 'g');
            value = value.replace(regex, PersianNumberService.persianNumbersTable[i]);
        }
        return value;
    };
    /**
     * Convert persian numbers in input value to the english numbers.
     * @param value
     */
    /**
     * Convert persian numbers in input value to the english numbers.
     * @param {?} value
     * @return {?}
     */
    PersianNumberService.prototype.toEnglish = /**
     * Convert persian numbers in input value to the english numbers.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === undefined || value === null) {
            throw new InvalidServiceInputError();
        }
        /** @type {?} */
        var regex;
        for (var i = 0; i < PersianNumberService.englishNumbersTable.length; i++) {
            // language=JSRegexp
            regex = new RegExp("[" + PersianNumberService.persianNumbersTable[i] + "]", 'g');
            value = value.replace(regex, PersianNumberService.englishNumbersTable[i]);
        }
        return value;
    };
    PersianNumberService.persianNumberPattern = '\u06F0-\u06F9';
    PersianNumberService.persianNumbersTable = ['\u06F0', '\u06F1', '\u06F2', '\u06F3', '\u06F4', '\u06F5', '\u06F6', '\u06F7', '\u06F8', '\u06F9'];
    PersianNumberService.englishNumbersTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    PersianNumberService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ PersianNumberService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function PersianNumberService_Factory() { return new PersianNumberService(); }, token: PersianNumberService, providedIn: "root" });
    return PersianNumberService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PersianLetterService = /** @class */ (function () {
    function PersianLetterService() {
    }
    /**
     * According to the options values, returns a RegExp object. The regex pattern of it contains regex of finding each of
     * elements those specified in the options object plus persian letters.
     * @return a RegExp object that can use in searching a string for special characters (persian letters and others specified in the options)
     * @param options
     */
    /**
     * According to the options values, returns a RegExp object. The regex pattern of it contains regex of finding each of
     * elements those specified in the options object plus persian letters.
     * @private
     * @param {?} options
     * @return {?} a RegExp object that can use in searching a string for special characters (persian letters and others specified in the options)
     */
    PersianLetterService._stringValidationRegex = /**
     * According to the options values, returns a RegExp object. The regex pattern of it contains regex of finding each of
     * elements those specified in the options object plus persian letters.
     * @private
     * @param {?} options
     * @return {?} a RegExp object that can use in searching a string for special characters (persian letters and others specified in the options)
     */
    function (options) {
        /** @type {?} */
        var result = '';
        if (options.enDigits) {
            result += '0-9';
        }
        if (options.symbols) {
            result += PersianLetterService.SYMBOLS_PATTERN;
        }
        if (options.whitespaces) {
            result += PersianLetterService.WHITESPACES_PATTERN;
        }
        if (options.persianDigits) {
            result += PersianNumberService.persianNumberPattern;
        }
        // language=JSRegexp
        return new RegExp("[" + (result + PersianLetterService.PERSIAN_LETTERS_PATTERN) + "]", 'g');
    };
    /**
     * This method gets regex of persian letters and other chars specified in the options and then splits the input value by that regex.
     *
     * If match result is null - there is no match - returns 0. otherwise returns length of the match array that shows number of matched
     * occurred in the input value.
     * @param value
     * @param options
     * @return a number greater equal to 0 representing number of matches occurred in the input value.
     */
    /**
     * This method gets regex of persian letters and other chars specified in the options and then splits the input value by that regex.
     *
     * If match result is null - there is no match - returns 0. otherwise returns length of the match array that shows number of matched
     * occurred in the input value.
     * @private
     * @param {?} value
     * @param {?} options
     * @return {?} a number greater equal to 0 representing number of matches occurred in the input value.
     */
    PersianLetterService._getMatchedPatternLength = /**
     * This method gets regex of persian letters and other chars specified in the options and then splits the input value by that regex.
     *
     * If match result is null - there is no match - returns 0. otherwise returns length of the match array that shows number of matched
     * occurred in the input value.
     * @private
     * @param {?} value
     * @param {?} options
     * @return {?} a number greater equal to 0 representing number of matches occurred in the input value.
     */
    function (value, options) {
        /** @type {?} */
        var matchResult = value.match(PersianLetterService._stringValidationRegex(options));
        return matchResult ? matchResult.length : 0;
    };
    /**
     * If input value contains any persian letter or is an empty string, returns true. otherwise returns false.
     * @param value
     */
    /**
     * If input value contains any persian letter or is an empty string, returns true. otherwise returns false.
     * @param {?} value
     * @return {?}
     */
    PersianLetterService.prototype.containsPersian = /**
     * If input value contains any persian letter or is an empty string, returns true. otherwise returns false.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === undefined || value === null) {
            return false;
        }
        // language=JSRegexp
        /** @type {?} */
        var persianRegex = new RegExp("[" + PersianLetterService.PERSIAN_LETTERS_PATTERN + "]");
        return value.trim() ? persianRegex.test(value) : true;
    };
    /**
     * Checks if input value is a persian text or not. If input value contains any letter that is not persian, the output will be false.
     * Result of validation on existence  of other characters controls by options parameter.
     * @param value
     * @param options controlling validation result on existence  of other characters controls by options parameter. Fields:
     *
     *        persianDigits: if sets to true, validation result will be true if input value contains persian digits plus persian letters.
     *
     *
     *        enDigits: if sets to true, validation result will be true if input value contains english digits plus persian letters
     *
     *
     *        symbols: if sets to true, validation result will be true if input value contains specific symbols plus persian letters.
     *                 symbols list: ?$-/:؟!~"'^_-[]{}()%&*><;
     *
     *
     *        whitespaces: if sets to true, validation result will be true if input value contains white spaces plus persian letters
     *
     *
     * You can combine any number of options field together.
     */
    /**
     * Checks if input value is a persian text or not. If input value contains any letter that is not persian, the output will be false.
     * Result of validation on existence  of other characters controls by options parameter.
     * @param {?} value
     * @param {?=} options controlling validation result on existence  of other characters controls by options parameter. Fields:
     *
     *        persianDigits: if sets to true, validation result will be true if input value contains persian digits plus persian letters.
     *
     *
     *        enDigits: if sets to true, validation result will be true if input value contains english digits plus persian letters
     *
     *
     *        symbols: if sets to true, validation result will be true if input value contains specific symbols plus persian letters.
     *                 symbols list: ?$-/:؟!~"'^_-[]{}()%&*><;
     *
     *
     *        whitespaces: if sets to true, validation result will be true if input value contains white spaces plus persian letters
     *
     *
     * You can combine any number of options field together.
     * @return {?}
     */
    PersianLetterService.prototype.isPersian = /**
     * Checks if input value is a persian text or not. If input value contains any letter that is not persian, the output will be false.
     * Result of validation on existence  of other characters controls by options parameter.
     * @param {?} value
     * @param {?=} options controlling validation result on existence  of other characters controls by options parameter. Fields:
     *
     *        persianDigits: if sets to true, validation result will be true if input value contains persian digits plus persian letters.
     *
     *
     *        enDigits: if sets to true, validation result will be true if input value contains english digits plus persian letters
     *
     *
     *        symbols: if sets to true, validation result will be true if input value contains specific symbols plus persian letters.
     *                 symbols list: ?$-/:؟!~"'^_-[]{}()%&*><;
     *
     *
     *        whitespaces: if sets to true, validation result will be true if input value contains white spaces plus persian letters
     *
     *
     * You can combine any number of options field together.
     * @return {?}
     */
    function (value, options) {
        if (options === void 0) { options = {
            persianDigits: false,
            enDigits: false,
            symbols: true,
            whitespaces: true
        }; }
        if (value === undefined || value === null) {
            return false;
        }
        return value.length === PersianLetterService._getMatchedPatternLength(value, options);
    };
    /**
     * Converts arabic letters: ي and ك to persian corresponding letters.
     * @param value
     */
    /**
     * Converts arabic letters: ي and ك to persian corresponding letters.
     * @param {?} value
     * @return {?}
     */
    PersianLetterService.prototype.toPersian = /**
     * Converts arabic letters: ي and ك to persian corresponding letters.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.replace(/ي/g, 'ی').replace(/ك/g, 'ک');
    };
    PersianLetterService.PERSIAN_LETTERS_PATTERN = '\u06A9\u06AF\u06C0\u06CC\u060C\u062A\u062B\u062C\u062D\u062E\u062F\u063A\u064A\u064B\u064C' +
        '\u064D\u064E\u064F\u067E\u0670\u0686\u0698\u200C\u0621-\u0629\u0630-\u0639\u0641-\u0654';
    PersianLetterService.SYMBOLS_PATTERN = '؟$-/:-?،{-~!"^_`\\[\\]';
    PersianLetterService.WHITESPACES_PATTERN = '\\s';
    PersianLetterService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ PersianLetterService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function PersianLetterService_Factory() { return new PersianLetterService(); }, token: PersianLetterService, providedIn: "root" });
    return PersianLetterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Reactive form validator that checks form control value contains only persian numbers.
 * @param {?=} persianNumberService
 * @return {?}
 */
function persianNumbersValidator(persianNumberService) {
    if (persianNumberService === void 0) { persianNumberService = new PersianNumberService(); }
    return (/**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return persianNumberService.isPersian(control.value) ? null : { 'persianNumberValidation': control.value };
    });
}
/**
 * Reactive form validator that checks form control value contains only persian letters and allowed characters in the options parameter.
 * @param {?=} options see documents of isPersian method of the PersianLetterService for more info about options.
 * @param {?=} persianLetterService
 * @return {?}
 */
function persianLettersValidator(options, persianLetterService) {
    if (options === void 0) { options = {
        persianDigits: false,
        whitespaces: false,
        symbols: false,
        enDigits: false
    }; }
    if (persianLetterService === void 0) { persianLetterService = new PersianLetterService(); }
    return (/**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return persianLetterService.isPersian(control.value, options) ? null : { 'persianLetterValidation': control.value };
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * You can add PersianNumbersDirective property to your input tag for using persianNumbersValidator function on its value.
 *
 * [For more information also see persianNumbersValidator]{\@link persianNumbersValidator}
 */
var PersianNumbersDirective = /** @class */ (function () {
    function PersianNumbersDirective() {
    }
    /**
     * Only a wrapper for persianNumbersValidator validator function.
     * @param control
     * @return null for success or ValidationError for invalid inputs
     */
    /**
     * Only a wrapper for persianNumbersValidator validator function.
     * @param {?} control
     * @return {?} null for success or ValidationError for invalid inputs
     */
    PersianNumbersDirective.prototype.validate = /**
     * Only a wrapper for persianNumbersValidator validator function.
     * @param {?} control
     * @return {?} null for success or ValidationError for invalid inputs
     */
    function (control) {
        return persianNumbersValidator()(control);
    };
    PersianNumbersDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'PersianNumbersDirective',
                    providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: PersianNumbersDirective }]
                },] }
    ];
    return PersianNumbersDirective;
}());
/**
 * You can add PersianLetterDirective property to your input tag for using persianNumbersValidator function on its value
 * For setting options value, you can simply set PersianLetterDirective property equal to the PLOptions object.
 * [For more information also see persianLettersValidator]{\@link persianLettersValidator}
 */
var PersianLetterDirective = /** @class */ (function () {
    function PersianLetterDirective() {
    }
    /**
     * Only a wrapper for persianLettersValidator validator function.
     * @param control
     * @return null for success or ValidationError for invalid inputs
     */
    /**
     * Only a wrapper for persianLettersValidator validator function.
     * @param {?} control
     * @return {?} null for success or ValidationError for invalid inputs
     */
    PersianLetterDirective.prototype.validate = /**
     * Only a wrapper for persianLettersValidator validator function.
     * @param {?} control
     * @return {?} null for success or ValidationError for invalid inputs
     */
    function (control) {
        return persianLettersValidator(this.options)(control);
    };
    PersianLetterDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'persianLettersValidator',
                    providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: PersianLetterDirective }]
                },] }
    ];
    PersianLetterDirective.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['PersianLetterDirective',] }]
    };
    return PersianLetterDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Replaces all arabic and english numbers with persian numbers.
 * \@example {{englishTextDigit | faNum}}
 */
var FaNumPipe = /** @class */ (function () {
    function FaNumPipe(persianNumberService) {
        this.persianNumberService = persianNumberService;
    }
    /**
     *
     * @param value a number or string (probably empty).
     * @return a string that all english and arabic numbers in the input has been replaced with persian digits.
     */
    /**
     *
     * @param {?} value a number or string (probably empty).
     * @return {?} a string that all english and arabic numbers in the input has been replaced with persian digits.
     */
    FaNumPipe.prototype.transform = /**
     *
     * @param {?} value a number or string (probably empty).
     * @return {?} a string that all english and arabic numbers in the input has been replaced with persian digits.
     */
    function (value) {
        value = String(value);
        return this.persianNumberService.toPersian(value);
    };
    FaNumPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'faNum' },] }
    ];
    /** @nocollapse */
    FaNumPipe.ctorParameters = function () { return [
        { type: PersianNumberService }
    ]; };
    return FaNumPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Replaces all persian numbers in the text to the english numbers.
 * \@example {{persianTextDigit | enNum}}
 */
var EnNumPipe = /** @class */ (function () {
    function EnNumPipe(persianNumberService) {
        this.persianNumberService = persianNumberService;
    }
    /**
     * @return input value replaced all persian digits with english digits.
     * @param value a string containing one or more non-english digits. Could be an empty string.
     */
    /**
     * @param {?} value a string containing one or more non-english digits. Could be an empty string.
     * @return {?} input value replaced all persian digits with english digits.
     */
    EnNumPipe.prototype.transform = /**
     * @param {?} value a string containing one or more non-english digits. Could be an empty string.
     * @return {?} input value replaced all persian digits with english digits.
     */
    function (value) {
        value = String(value);
        return this.persianNumberService.toEnglish(value);
    };
    EnNumPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'enNum' },] }
    ];
    /** @nocollapse */
    EnNumPipe.ctorParameters = function () { return [
        { type: PersianNumberService }
    ]; };
    return EnNumPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var IRCurrencies = {
    rial: 'ریال',
    r: 'ریال',
    toman: 'تومان',
    t: 'تومان',
};
/**
 * Formats input as a currency value.
 * default type is rial. You can choose on of the following currency types:
 *
 *      r or rial for ریال
 *
 *      to or toman for تومان
 *
 *  This pipe extends DecimalPipe, so as second parameter, you can enter your desired formatting string. Default formatter is: 1.0-0
 */
var IRCurrencyPipe = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(IRCurrencyPipe, _super);
    function IRCurrencyPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param value a number of a string only contains digits
     * @param type currency type
     * @param digitInfo decimal pipe formatter
     * @example 1925100 -> 1,925,100 ریال
     */
    /**
     * \@example 1925100 -> 1,925,100 ریال
     * @param {?} value a number of a string only contains digits
     * @param {?=} type currency type
     * @param {?=} digitInfo decimal pipe formatter
     * @return {?}
     */
    IRCurrencyPipe.prototype.transform = /**
     * \@example 1925100 -> 1,925,100 ریال
     * @param {?} value a number of a string only contains digits
     * @param {?=} type currency type
     * @param {?=} digitInfo decimal pipe formatter
     * @return {?}
     */
    function (value, type, digitInfo) {
        if (type === void 0) { type = 'rial'; }
        if (digitInfo === void 0) { digitInfo = '1.0-0'; }
        value = Number(value);
        type = type.toLowerCase();
        if (isNaN(value)) {
            throw new Error(value + " is not a acceptable number");
        }
        return _super.prototype.transform.call(this, value, digitInfo) + ' ' + IRCurrencies[type];
    };
    IRCurrencyPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'irc' },] }
    ];
    return IRCurrencyPipe;
}(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Formats a 10-digit number or string to national code format.
 */
var NationalCodePipe = /** @class */ (function () {
    function NationalCodePipe() {
    }
    /**
     * @param value a 10-digit number or a string only contains 10 digits.
     * @example 001-236547-5
     * @return a formatted text from 10-digit input or an empty string if length of the input is not 10.
     */
    /**
     * \@example 001-236547-5
     * @param {?} value a 10-digit number or a string only contains 10 digits.
     * @return {?} a formatted text from 10-digit input or an empty string if length of the input is not 10.
     */
    NationalCodePipe.prototype.transform = /**
     * \@example 001-236547-5
     * @param {?} value a 10-digit number or a string only contains 10 digits.
     * @return {?} a formatted text from 10-digit input or an empty string if length of the input is not 10.
     */
    function (value) {
        value = String(value);
        if (value.length !== 10) {
            return '';
        }
        return value.substring(0, 3) + "-" + value.substring(3, 9) + "-" + value[9];
    };
    NationalCodePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'nationalCode' },] }
    ];
    return NationalCodePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This function removes fraction part of the number if exists. So, for example, it will turn -145,455 to -145 and
 * 145,455 to 145.
 * @param {?} x
 * @return {?}
 */
function round(x) {
    if (x < 0) {
        return Math.ceil(x);
    }
    else {
        return Math.floor(x);
    }
}
/**
 * This function returns integer part of division result of num1 and num2 numbers.
 *
 * For example: div (10, 3) is equal to 3.
 * @param {?} num1
 * @param {?} num2
 * @return {?}
 */
function div(num1, num2) {
    return round(num1 / num2);
}
/**
 * This function return arithmetic mod result of two inputs as a integer.
 * @param {?} num1
 * @param {?} num2
 * @return {?}
 */
function mod(num1, num2) {
    return num1 - div(num1, num2) * num2;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This Error will throw When inputted date is not a valid date according to the Jalali Calendar.
 */
var /**
 * This Error will throw When inputted date is not a valid date according to the Jalali Calendar.
 */
InvalidJalaliDateError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(InvalidJalaliDateError, _super);
    function InvalidJalaliDateError() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var _this = _super.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(params)) || this;
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        // @ts-ignore
        if (Error.captureStackTrace) {
            // @ts-ignore
            Error.captureStackTrace(_this, InvalidJalaliDateError);
        }
        _this.message = 'Invalid jalali date.';
        return _this;
    }
    return InvalidJalaliDateError;
}(Error));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Methods of this Service doing validation stuff on a Jalali date. You can use this Service using DI in all around of your app for
 * validating Jalali dates without needing to convert them to the Georgian Date.
 */
var JalaliDateValidatorService = /** @class */ (function () {
    function JalaliDateValidatorService() {
    }
    /**
     * Returns number of days in a given month counting from 1.
     * @param jYear full jalali year like 1397
     * @param jMonth number of month from 0 for Farvardin to 11 for Esfand.
     */
    /**
     * Returns number of days in a given month counting from 1.
     * @param {?} jYear full jalali year like 1397
     * @param {?} jMonth number of month from 0 for Farvardin to 11 for Esfand.
     * @return {?}
     */
    JalaliDateValidatorService.prototype.jMonthLength = /**
     * Returns number of days in a given month counting from 1.
     * @param {?} jYear full jalali year like 1397
     * @param {?} jMonth number of month from 0 for Farvardin to 11 for Esfand.
     * @return {?}
     */
    function (jYear, jMonth) {
        if (jMonth < 6) {
            return 31;
        }
        if (jMonth < 11 || this.isJYearLeap(jYear)) {
            return 30;
        }
        return 29;
    };
    /**
     * Calculates the number of the leap years in jalali Calendar.
     * @param targetJYear should be full year like: 1397 and should be between -61 to 3177.
     *
     * [Implementation in source code]{@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L71}
     */
    /**
     * Calculates the number of the leap years in jalali Calendar.
     * @param {?} targetJYear should be full year like: 1397 and should be between -61 to 3177.
     *
     * [Implementation in source code]{\@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L71}
     * @return {?}
     */
    JalaliDateValidatorService.prototype.numOfJLeapYears = /**
     * Calculates the number of the leap years in jalali Calendar.
     * @param {?} targetJYear should be full year like: 1397 and should be between -61 to 3177.
     *
     * [Implementation in source code]{\@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L71}
     * @return {?}
     */
    function (targetJYear) {
        // Jalali years starting the 33-year rule.
        /** @type {?} */
        var breaks = [
            -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210,
            1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178,
        ];
        /** @type {?} */
        var breaksLength = breaks.length;
        /** @type {?} */
        var jp = breaks[0];
        /** @type {?} */
        var jump;
        /** @type {?} */
        var leapJ = -14;
        if (!this.isValidJYear(targetJYear)) {
            throw new InvalidJalaliDateError();
        }
        // Find the limiting years for the Jalali year jy.
        for (var i = 1; i < breaksLength; i += 1) {
            /** @type {?} */
            var jm = breaks[i];
            jump = jm - jp;
            if (targetJYear < jm) {
                break;
            }
            leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
            jp = jm;
        }
        /** @type {?} */
        var n = targetJYear - jp;
        // Find the number of leap years from AD 621 to the beginning
        // of the current Jalali year in the Persian Calendar.
        leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
        if (mod(jump, 33) === 4 && jump - n === 4) {
            leapJ += 1;
        }
        return leapJ;
    };
    /**
     * If JYear is a leap year in jalali Calendar, return true. We using the fact that if a year is leap, number of leap years until that year
     * and the year after it is not equal.
     * @param jYear full jalali year like: 1397
     */
    /**
     * If JYear is a leap year in jalali Calendar, return true. We using the fact that if a year is leap, number of leap years until that year
     * and the year after it is not equal.
     * @param {?} jYear full jalali year like: 1397
     * @return {?}
     */
    JalaliDateValidatorService.prototype.isJYearLeap = /**
     * If JYear is a leap year in jalali Calendar, return true. We using the fact that if a year is leap, number of leap years until that year
     * and the year after it is not equal.
     * @param {?} jYear full jalali year like: 1397
     * @return {?}
     */
    function (jYear) {
        return this.numOfJLeapYears(jYear) !== this.numOfJLeapYears(jYear + 1);
    };
    /**
     * Checks if jalali year is in acceptable range or not.
     *
     * [Implementation in source code]{@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L27}
     * @param jYear full jalali year like 1397
     */
    /**
     * Checks if jalali year is in acceptable range or not.
     *
     * [Implementation in source code]{\@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L27}
     * @param {?} jYear full jalali year like 1397
     * @return {?}
     */
    JalaliDateValidatorService.prototype.isValidJYear = /**
     * Checks if jalali year is in acceptable range or not.
     *
     * [Implementation in source code]{\@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L27}
     * @param {?} jYear full jalali year like 1397
     * @return {?}
     */
    function (jYear) {
        return jYear >= JalaliDateValidatorService._minAcceptableYear && jYear <= JalaliDateValidatorService._maxAcceptableYear;
    };
    /**
     * Checks if jalali month is in valid range or not. In default, jMonth should start from zero.
     * If you want to start month number from one instead of zero, you should make startFromZero parameter to false.
     */
    /**
     * Checks if jalali month is in valid range or not. In default, jMonth should start from zero.
     * If you want to start month number from one instead of zero, you should make startFromZero parameter to false.
     * @param {?} jMonth
     * @param {?=} startFromZero
     * @return {?}
     */
    JalaliDateValidatorService.prototype.isValidJMonth = /**
     * Checks if jalali month is in valid range or not. In default, jMonth should start from zero.
     * If you want to start month number from one instead of zero, you should make startFromZero parameter to false.
     * @param {?} jMonth
     * @param {?=} startFromZero
     * @return {?}
     */
    function (jMonth, startFromZero) {
        if (startFromZero === void 0) { startFromZero = true; }
        /** @type {?} */
        var minMonthNumber = 0;
        /** @type {?} */
        var maxMonthNumber = 11;
        if (!startFromZero) {
            minMonthNumber++;
            maxMonthNumber++;
        }
        return jMonth >= minMonthNumber && jMonth <= maxMonthNumber;
    };
    /**
     * Checks if day number is in valid range according to the given year and month.
     * @param jYear full jalali year like 1397
     * @param jMonth month number starting from zero
     * @param jDay day number starting from one
     */
    /**
     * Checks if day number is in valid range according to the given year and month.
     * @param {?} jYear full jalali year like 1397
     * @param {?} jMonth month number starting from zero
     * @param {?} jDay day number starting from one
     * @return {?}
     */
    JalaliDateValidatorService.prototype.isValidJDay = /**
     * Checks if day number is in valid range according to the given year and month.
     * @param {?} jYear full jalali year like 1397
     * @param {?} jMonth month number starting from zero
     * @param {?} jDay day number starting from one
     * @return {?}
     */
    function (jYear, jMonth, jDay) {
        return jDay <= this.jMonthLength(jYear, jMonth) && jDay > 0;
    };
    /**
     * If Jalali date is not a valid Jalali date, return false. otherwise returns true.
     * @param jYear full year number like: 1397
     * @param jMonth starts from zero
     * @param jDay starts from one
     */
    /**
     * If Jalali date is not a valid Jalali date, return false. otherwise returns true.
     * @param {?} jYear full year number like: 1397
     * @param {?} jMonth starts from zero
     * @param {?} jDay starts from one
     * @return {?}
     */
    JalaliDateValidatorService.prototype.isValidJDate = /**
     * If Jalali date is not a valid Jalali date, return false. otherwise returns true.
     * @param {?} jYear full year number like: 1397
     * @param {?} jMonth starts from zero
     * @param {?} jDay starts from one
     * @return {?}
     */
    function (jYear, jMonth, jDay) {
        return this.isValidJYear(jYear) && this.isValidJMonth(jMonth) && this.isValidJDay(jYear, jMonth, jDay);
    };
    JalaliDateValidatorService._minAcceptableYear = -61;
    JalaliDateValidatorService._maxAcceptableYear = 3177;
    JalaliDateValidatorService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    JalaliDateValidatorService.ctorParameters = function () { return []; };
    /** @nocollapse */ JalaliDateValidatorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function JalaliDateValidatorService_Factory() { return new JalaliDateValidatorService(); }, token: JalaliDateValidatorService, providedIn: "root" });
    return JalaliDateValidatorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This class converts Jalali date to Georgian and vase versa. You can use all of the methods as static methods.
 *
 */
var JalaliDateCalculatorService = /** @class */ (function () {
    function JalaliDateCalculatorService(validator) {
        this.validator = validator;
    }
    /**
     * Calculates the Julian Day number from Gregorian or Julian calendar dates.
     *
     * Only some code cleaning applied to the source code.
     *
     * The procedure was tested to be good since 1 March, -100100 (of both calendars) up to a few million years into the future.
     *
     * @param gDate an instance of javascript date representing a Georgian date.
     *
     * [Implementation in source code]{@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L195}
  
     */
    /**
     * Calculates the Julian Day number from Gregorian or Julian calendar dates.
     *
     * Only some code cleaning applied to the source code.
     *
     * The procedure was tested to be good since 1 March, -100100 (of both calendars) up to a few million years into the future.
     *
     * @param {?} gDate an instance of javascript date representing a Georgian date.
     *
     * [Implementation in source code]{\@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L195}
     * @return {?}
     */
    JalaliDateCalculatorService.prototype.numberOfPassedGDays = /**
     * Calculates the Julian Day number from Gregorian or Julian calendar dates.
     *
     * Only some code cleaning applied to the source code.
     *
     * The procedure was tested to be good since 1 March, -100100 (of both calendars) up to a few million years into the future.
     *
     * @param {?} gDate an instance of javascript date representing a Georgian date.
     *
     * [Implementation in source code]{\@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L195}
     * @return {?}
     */
    function (gDate) {
        /** @type {?} */
        var gMonth = gDate.getMonth() - 7;
        /** @type {?} */
        var gYear = gDate.getFullYear() + 100100;
        /** @type {?} */
        var gMonthDiv = div(gMonth, 6);
        /** @type {?} */
        var result = div((gYear + gMonthDiv) * 1461, 4) + div(153 * mod(gMonth + 17, 12) + 2, 5) + gDate.getDate() - 34840408;
        return result - div(div(gYear + gMonthDiv, 100) * 3, 4) + 752;
    };
    /**
     * Returns number of passed days from source day in jalali calendar to the given jalali date.
     * @param jYear full jalali year like 1397
     * @param jMonth starts from zero
     * @param jDay day number starts from one
     */
    /**
     * Returns number of passed days from source day in jalali calendar to the given jalali date.
     * @param {?} jYear full jalali year like 1397
     * @param {?} jMonth starts from zero
     * @param {?} jDay day number starts from one
     * @return {?}
     */
    JalaliDateCalculatorService.prototype.numberOfPassedJDays = /**
     * Returns number of passed days from source day in jalali calendar to the given jalali date.
     * @param {?} jYear full jalali year like 1397
     * @param {?} jMonth starts from zero
     * @param {?} jDay day number starts from one
     * @return {?}
     */
    function (jYear, jMonth, jDay) {
        return this.numberOfPassedGDays(new Date(this.jalaliYearToGeorgianYear(jYear), 2, this.firstDayOfJYearInMarch(jYear))) +
            jMonth * 31 - div(jMonth + 1, 7) * (jMonth - 6) + jDay - 1;
    };
    /**
     * Creates a javascript Date object from number of passed days in Georgian calendar representing Georgian date.
     *
     * [Implementation in source code]{@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L213}
     */
    /**
     * Creates a javascript Date object from number of passed days in Georgian calendar representing Georgian date.
     *
     * [Implementation in source code]{\@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L213}
     * @param {?} numOfDays
     * @return {?}
     */
    JalaliDateCalculatorService.prototype.createGDateFromDays = /**
     * Creates a javascript Date object from number of passed days in Georgian calendar representing Georgian date.
     *
     * [Implementation in source code]{\@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L213}
     * @param {?} numOfDays
     * @return {?}
     */
    function (numOfDays) {
        /** @type {?} */
        var j = (4 * numOfDays + 139361631) + div(div(4 * numOfDays + 183187720, 146097) * 3, 4) * 4 - 3908;
        /** @type {?} */
        var i = div(mod(j, 1461), 4) * 5 + 308;
        /** @type {?} */
        var gDay = div(mod(i, 153), 5) + 1;
        /** @type {?} */
        var gMonth = mod(div(i, 153), 12);
        /** @type {?} */
        var gYear = div(j, 1461) - 100100 + div(7 - gMonth, 6);
        return new Date(gYear, gMonth, gDay);
    };
    /**
     * This function returns number of passed leap years from AD 621 until targetGYear.
     * @param targetGYear is full year number like 2018
     *
     * [Implementation in source code]{@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L110}
     */
    /**
     * This function returns number of passed leap years from AD 621 until targetGYear.
     * @param {?} targetGYear is full year number like 2018
     *
     * [Implementation in source code]{\@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L110}
     * @return {?}
     */
    JalaliDateCalculatorService.prototype.numOfGLeapYears = /**
     * This function returns number of passed leap years from AD 621 until targetGYear.
     * @param {?} targetGYear is full year number like 2018
     *
     * [Implementation in source code]{\@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L110}
     * @return {?}
     */
    function (targetGYear) {
        return div(targetGYear, 4) - div((div(targetGYear, 100) + 1) * 3, 4) - 150;
    };
    /**
     * first day of the Farvardin month in Jalali calendar is in March month. This method returns the day number of new jalali year in March.
     * The day number starts from 1 not zero and is equal to the real numbers in the calendar.
     * @param jYear full jalali year like 1397
     */
    /**
     * first day of the Farvardin month in Jalali calendar is in March month. This method returns the day number of new jalali year in March.
     * The day number starts from 1 not zero and is equal to the real numbers in the calendar.
     * @param {?} jYear full jalali year like 1397
     * @return {?}
     */
    JalaliDateCalculatorService.prototype.firstDayOfJYearInMarch = /**
     * first day of the Farvardin month in Jalali calendar is in March month. This method returns the day number of new jalali year in March.
     * The day number starts from 1 not zero and is equal to the real numbers in the calendar.
     * @param {?} jYear full jalali year like 1397
     * @return {?}
     */
    function (jYear) {
        /** @type {?} */
        var gYear = jYear + 621;
        return this.validator.numOfJLeapYears(jYear) - this.numOfGLeapYears(gYear) + 20;
    };
    /**
     * Converts jalali year number to the georgian year. Output year is the georgian year that jalali year starts within it, not the year
     * that starts in the winter of jalali year.
     * @param jYear full jalali year like 1397
     */
    /**
     * Converts jalali year number to the georgian year. Output year is the georgian year that jalali year starts within it, not the year
     * that starts in the winter of jalali year.
     * @param {?} jYear full jalali year like 1397
     * @return {?}
     */
    JalaliDateCalculatorService.prototype.jalaliYearToGeorgianYear = /**
     * Converts jalali year number to the georgian year. Output year is the georgian year that jalali year starts within it, not the year
     * that starts in the winter of jalali year.
     * @param {?} jYear full jalali year like 1397
     * @return {?}
     */
    function (jYear) {
        return jYear + 621;
    };
    /**
     * Converts georgian year to the jalali year. Output year is the jalali year that start within the Georgian year.
     * @param gYear full georgian year like 2018
     */
    /**
     * Converts georgian year to the jalali year. Output year is the jalali year that start within the Georgian year.
     * @param {?} gYear full georgian year like 2018
     * @return {?}
     */
    JalaliDateCalculatorService.prototype.georgianYearToJalaliYear = /**
     * Converts georgian year to the jalali year. Output year is the jalali year that start within the Georgian year.
     * @param {?} gYear full georgian year like 2018
     * @return {?}
     */
    function (gYear) {
        return gYear - 621;
    };
    /**
     * this method converts Georgian date to the jalali date. Output is an object implementing SimpleDateInterface.
     *
     * ATTENTION: month number starts from 0, but day number starts from 1. Just like native javascript Date object.
     * @param gDate Georgian date as a javascript Date object.
     *
     * [Implementation in source code]{@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L149}
     */
    /**
     * this method converts Georgian date to the jalali date. Output is an object implementing SimpleDateInterface.
     *
     * ATTENTION: month number starts from 0, but day number starts from 1. Just like native javascript Date object.
     * @param {?} gDate Georgian date as a javascript Date object.
     *
     * [Implementation in source code]{\@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L149}
     * @return {?}
     */
    JalaliDateCalculatorService.prototype.convertToJalali = /**
     * this method converts Georgian date to the jalali date. Output is an object implementing SimpleDateInterface.
     *
     * ATTENTION: month number starts from 0, but day number starts from 1. Just like native javascript Date object.
     * @param {?} gDate Georgian date as a javascript Date object.
     *
     * [Implementation in source code]{\@link https://github.com/sijad/ts-jalaali/blob/296a7c2fa1816a5bbb0b11bbe3eb03ebc17059f6/src/jalaali.ts#L149}
     * @return {?}
     */
    function (gDate) {
        /** @type {?} */
        var georgianYear = gDate.getFullYear();
        /** @type {?} */
        var jalaliYear = this.georgianYearToJalaliYear(georgianYear);
        /** @type {?} */
        var passedDays = this.numberOfPassedGDays(gDate);
        /** @type {?} */
        var numOfPassedDaysTo1Farvardin = this.numberOfPassedGDays(new Date(georgianYear, 2, this.firstDayOfJYearInMarch(jalaliYear)));
        /** @type {?} */
        var jalaliDay;
        /** @type {?} */
        var jalaliMonth;
        // Find number of days that passed since 1 Farvardin.
        /** @type {?} */
        var numOfDayInJYear = passedDays - numOfPassedDaysTo1Farvardin;
        if (numOfDayInJYear >= 0) {
            if (numOfDayInJYear <= 185) {
                // The first 6 months.
                jalaliMonth = div(numOfDayInJYear, 31);
                jalaliDay = mod(numOfDayInJYear, 31) + 1;
                return { year: jalaliYear, month: jalaliMonth, day: jalaliDay };
            }
            else {
                // The remaining months.
                numOfDayInJYear -= 186;
            }
        }
        else {
            // Previous Jalali year.
            jalaliYear -= 1;
            numOfDayInJYear += 179;
            if (this.validator.isJYearLeap(jalaliYear)) {
                numOfDayInJYear += 1;
            }
        }
        jalaliMonth = 6 + div(numOfDayInJYear, 30);
        jalaliDay = mod(numOfDayInJYear, 30) + 1;
        return { year: jalaliYear, month: jalaliMonth, day: jalaliDay };
    };
    /**
     * Converts a valid jalali date to a javascript Date object representing a equivalent Georgian date.
     * @param jYear a full Jalali year like 1397
     * @param jMonth starts from zero
     * @param jDay starts from 1
     * @throws InvalidJalaliDateError when inputted date is not a valid Jalali date.
     */
    /**
     * Converts a valid jalali date to a javascript Date object representing a equivalent Georgian date.
     * @throws InvalidJalaliDateError when inputted date is not a valid Jalali date.
     * @param {?} jYear a full Jalali year like 1397
     * @param {?} jMonth starts from zero
     * @param {?} jDay starts from 1
     * @return {?}
     */
    JalaliDateCalculatorService.prototype.convertToGeorgian = /**
     * Converts a valid jalali date to a javascript Date object representing a equivalent Georgian date.
     * @throws InvalidJalaliDateError when inputted date is not a valid Jalali date.
     * @param {?} jYear a full Jalali year like 1397
     * @param {?} jMonth starts from zero
     * @param {?} jDay starts from 1
     * @return {?}
     */
    function (jYear, jMonth, jDay) {
        if (!this.validator.isValidJDate(jYear, jMonth, jDay)) {
            throw new InvalidJalaliDateError();
        }
        return this.createGDateFromDays(this.numberOfPassedJDays(jYear, jMonth, jDay));
    };
    JalaliDateCalculatorService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    JalaliDateCalculatorService.ctorParameters = function () { return [
        { type: JalaliDateValidatorService }
    ]; };
    /** @nocollapse */ JalaliDateCalculatorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function JalaliDateCalculatorService_Factory() { return new JalaliDateCalculatorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(JalaliDateValidatorService)); }, token: JalaliDateCalculatorService, providedIn: "root" });
    return JalaliDateCalculatorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This class represents a complete Date object for Jalali dates. It accepts jalali Dates, converts Georgian dates to jalali and implements
 * all the behaviours of default Date object of JavaScript for Jalali Date, plus some additional methods for developers convenience.
 *
 * ATTENTION:
 *
 * UTC methods are not implemented for Jalali date. They working directly on gDate object (Corresponding date in Georgian) and changing
 * properties of this. Then new JDate object will create from the modified Georgian Date. So they may Cause unpredictable behaviour.
 * Please don't use UTC methods with "todo" tag on them unless you are sure about the behaviour.
 * Recreating objects are safer than working with UTC methods.
 */
var JDate = /** @class */ (function () {
    /**
     * For creating a JDate object, you have 5 different options.
     *
     * 1- If you want to have current date and time, you can simply call new JDate() without any parameter.
     *
     * 2- If you want to create JDate object from a jalali date string as described in the `pars` method document, you can pass that string as
     *    first parameter and leave others empty.
     *
     * 3 - If you want to create JDate object from number of passed milliseconds from UNIX epoch (for example creating a Jalali date object
     *     from result of getTime method of another Date object), you can pass the number as first parameter and leave others alone.
     *
     * 4 - If you want to create JDate object from a Georgian Date object, you can simply pass that Date object as first parameter and leave
     *     others empty.
     *
     * 5- If you want to create JDate object from date and time values, you can simply fill corresponding parameters of each date and time
     * value to the constructor. You don't have to fill all of the parameters. only those you need. other parameters will fill with zero.
     * Examples of all of those scenarios:
     *
     * @example new JDate()
     * @example new JDate('11 دی 1348 00:00:00')
     * @example new JDate(-12600000)
     * @example new JDate(new Date(2018, 0, 1))
     * @example new JDate(1397, 0, 25)
     * @example new JDate(1397, 11, 25, 12, 32, 45, 123)
     * @param jYear
     * @param jMonth Month number starting from 0 and should be LESSER than 12.
     * @param jDay
     * @param hours
     * @param minutes
     * @param seconds
     * @param milliseconds
     * @throws InvalidJalaliDateError
     */
    function JDate(jYear, jMonth, jDay, hours, minutes, seconds, milliseconds) {
        if (hours === void 0) { hours = 0; }
        if (minutes === void 0) { minutes = 0; }
        if (seconds === void 0) { seconds = 0; }
        if (milliseconds === void 0) { milliseconds = 0; }
        this._calculator = new JalaliDateCalculatorService(new JalaliDateValidatorService());
        if (!jYear) {
            this._createFromDate(new Date());
        }
        else if (typeof jYear === 'string' && jMonth === undefined) {
            this._createFromDate(new Date(JDate.parse(jYear)));
        }
        else if (typeof jYear === 'number' && jMonth === undefined) {
            this._createFromDate(new Date(jYear));
        }
        else if (jYear instanceof Date && jMonth === undefined) {
            this._createFromDate(jYear);
        }
        else {
            // @ts-ignore
            this._gDate = this._calculator.convertToGeorgian(jYear, jMonth, jDay);
            // @ts-ignore
            this._jYear = jYear;
            this._jMonth = jMonth;
            this._jDay = jDay;
            this._gDate.setHours(hours, minutes, seconds, milliseconds);
        }
        this._check_date_validity();
    }
    /**
     * If input value length is shorter than desiredLength, adds zeros at the beginning of it until meets desired length.
     * @param value a number or string that we want have a specific length
     * @param desiredLength length of output string. If be shorter than input length, input will return.
     */
    /**
     * If input value length is shorter than desiredLength, adds zeros at the beginning of it until meets desired length.
     * @param {?} value a number or string that we want have a specific length
     * @param {?} desiredLength length of output string. If be shorter than input length, input will return.
     * @return {?}
     */
    JDate.zeroPadding = /**
     * If input value length is shorter than desiredLength, adds zeros at the beginning of it until meets desired length.
     * @param {?} value a number or string that we want have a specific length
     * @param {?} desiredLength length of output string. If be shorter than input length, input will return.
     * @return {?}
     */
    function (value, desiredLength) {
        value = value.toString();
        while (value.length < desiredLength) {
            value = '0' + value;
        }
        return value;
    };
    /**
     * Extracts Georgian Date object from a Jalali date string.
     * @param dateString a Jalali date string following this pattern:
     *
     *        "yyyy mmm dd HH:MM:SS"
     *        or this pattern:
     *
     *        "yyyy mmmm dd HH:MM:SS".
     * @example 11 دی 1348 00:00:00
     * @example 11 Dey 1348 00:00:00
     * @return a Georgian Date object.
     */
    /**
     * Extracts Georgian Date object from a Jalali date string.
     * \@example 11 دی 1348 00:00:00 / 11 Dey 1348 00:00:00
     * @param {?} dateString a Jalali date string following this pattern:
     *
     *        "yyyy mmm dd HH:MM:SS"
     *        or this pattern:
     *
     *        "yyyy mmmm dd HH:MM:SS".
     * @return {?} a Georgian Date object.
     */
    JDate.parse = /**
     * Extracts Georgian Date object from a Jalali date string.
     * \@example 11 دی 1348 00:00:00 / 11 Dey 1348 00:00:00
     * @param {?} dateString a Jalali date string following this pattern:
     *
     *        "yyyy mmm dd HH:MM:SS"
     *        or this pattern:
     *
     *        "yyyy mmmm dd HH:MM:SS".
     * @return {?} a Georgian Date object.
     */
    function (dateString) {
        /** @type {?} */
        var calculator = new JalaliDateCalculatorService(new JalaliDateValidatorService());
        /** @type {?} */
        var dateArray = dateString.split(' ');
        if (dateArray.length < 3) {
            throw new InvalidJalaliDateError();
        }
        /** @type {?} */
        var day = parseInt(dateArray[0]);
        /** @type {?} */
        var month = JDate.FA_MONTHS.indexOf(dateArray[1]);
        if (month === -1) {
            month = JDate.EN_MONTHS.indexOf(dateArray[1]);
        }
        if (month === -1) {
            throw new InvalidJalaliDateError();
        }
        /** @type {?} */
        var year = parseInt(dateArray[2]);
        /** @type {?} */
        var timeArray = dateArray.length > 3 ? dateArray[3].split(':') : ['0', '0', '0'];
        /** @type {?} */
        var hour = parseInt(timeArray[0]);
        /** @type {?} */
        var min = parseInt(timeArray[1]);
        /** @type {?} */
        var sec = parseInt(timeArray[2]);
        /** @type {?} */
        var gDate = calculator.convertToGeorgian(year, month, day);
        gDate.setHours(hour, min, sec);
        return gDate.getTime();
    };
    /**
     * This method recalculates the gDate value with private attributes those storing Jalali date parts.
     */
    /**
     * This method recalculates the gDate value with private attributes those storing Jalali date parts.
     * @private
     * @return {?}
     */
    JDate.prototype._renewGDate = /**
     * This method recalculates the gDate value with private attributes those storing Jalali date parts.
     * @private
     * @return {?}
     */
    function () {
        this._gDate = this._calculator.convertToGeorgian(this._jYear, this._jMonth, this._jDay);
    };
    Object.defineProperty(JDate.prototype, "jYear", {
        /**
         * Sets Jalali year value to the input parameter and recalculates gDate attribute.
         * @param value full Jalali year like 1397
         */
        set: /**
         * Sets Jalali year value to the input parameter and recalculates gDate attribute.
         * @private
         * @param {?} value full Jalali year like 1397
         * @return {?}
         */
        function (value) {
            this._jYear = value;
            this._check_date_validity();
            this._renewGDate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JDate.prototype, "jMonth", {
        /**
         * Sets Jalali month value to the input parameter and recalculates gDate attribute.
         * @param value month number starting from zero
         */
        set: /**
         * Sets Jalali month value to the input parameter and recalculates gDate attribute.
         * @private
         * @param {?} value month number starting from zero
         * @return {?}
         */
        function (value) {
            this._jMonth = value;
            this._check_date_validity();
            this._renewGDate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JDate.prototype, "jDay", {
        /**
         * Sets Jalali day value to the input parameter and recalculates gDate attribute.
         * @param value day number starting from 1.
         */
        set: /**
         * Sets Jalali day value to the input parameter and recalculates gDate attribute.
         * @private
         * @param {?} value day number starting from 1.
         * @return {?}
         */
        function (value) {
            this._jDay = value;
            this._check_date_validity();
            this._renewGDate();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * throws InvalidJalaliDateError when date values of this object won't represent a valid Jalali date.
     * Otherwise nothing happens.
     * @throws InvalidJalaliDateError
     */
    /**
     * throws InvalidJalaliDateError when date values of this object won't represent a valid Jalali date.
     * Otherwise nothing happens.
     * @throws InvalidJalaliDateError
     * @private
     * @return {?}
     */
    JDate.prototype._check_date_validity = /**
     * throws InvalidJalaliDateError when date values of this object won't represent a valid Jalali date.
     * Otherwise nothing happens.
     * @throws InvalidJalaliDateError
     * @private
     * @return {?}
     */
    function () {
        if (!this._calculator.validator.isValidJDate(this._jYear, this._jMonth, this._jDay)) {
            throw new InvalidJalaliDateError();
        }
    };
    /**
     * Calculates Jalali year from Georgian Date object and sets the attributes of the object to proper values.
     * @param gDate
     */
    /**
     * Calculates Jalali year from Georgian Date object and sets the attributes of the object to proper values.
     * @private
     * @param {?} gDate
     * @return {?}
     */
    JDate.prototype._createFromDate = /**
     * Calculates Jalali year from Georgian Date object and sets the attributes of the object to proper values.
     * @private
     * @param {?} gDate
     * @return {?}
     */
    function (gDate) {
        /** @type {?} */
        var conversionResult = this._calculator.convertToJalali(gDate);
        this._jYear = conversionResult.year;
        this._jMonth = conversionResult.month;
        this._jDay = conversionResult.day;
        this._gDate = gDate;
    };
    /**
     * @param {?} hint
     * @return {?}
     */
    JDate.prototype[Symbol.toPrimitive] = /**
     * @param {?} hint
     * @return {?}
     */
    function (hint) {
        return undefined;
    };
    /**
     * @return a regular javascript Date object representing Georgian date corresponding to the Jalili date of the JDate object.
     */
    /**
     * @return {?} a regular javascript Date object representing Georgian date corresponding to the Jalili date of the JDate object.
     */
    JDate.prototype.getGeorgianDate = /**
     * @return {?} a regular javascript Date object representing Georgian date corresponding to the Jalili date of the JDate object.
     */
    function () {
        return this._gDate;
    };
    /**
     * @return the day of the month for the specified date according to local time.
     */
    /**
     * @return {?} the day of the month for the specified date according to local time.
     */
    JDate.prototype.getDate = /**
     * @return {?} the day of the month for the specified date according to local time.
     */
    function () {
        return this._jDay;
    };
    /**
     *  @return the day of the week for the specified date according to local time, where 0 represents Friday and 6 is Thursday.
     */
    /**
     * @return {?} the day of the week for the specified date according to local time, where 0 represents Friday and 6 is Thursday.
     */
    JDate.prototype.getDay = /**
     * @return {?} the day of the week for the specified date according to local time, where 0 represents Friday and 6 is Thursday.
     */
    function () {
        return (this._gDate.getDay() + 2) % 7;
    };
    /**
     * @return the year (4 digits for years greater than 999) of the specified date according to local time
     * @example 1397
     * @example 100
     * */
    /**
     * \@example 1397 / 100
     *
     * @return {?} the year (4 digits for years greater than 999) of the specified date according to local time
     */
    JDate.prototype.getFullYear = /**
     * \@example 1397 / 100
     *
     * @return {?} the year (4 digits for years greater than 999) of the specified date according to local time
     */
    function () {
        return this._jYear;
    };
    /**
     * @return the hour for the specified date, according to local time.
     * @example 10
     */
    /**
     * \@example 10
     * @return {?} the hour for the specified date, according to local time.
     */
    JDate.prototype.getHours = /**
     * \@example 10
     * @return {?} the hour for the specified date, according to local time.
     */
    function () {
        return this._gDate.getHours();
    };
    /**
     * Converts default 24-hour clock hour value to the 12-hour clock version.
     * @return a number between 1 to 12
     */
    /**
     * Converts default 24-hour clock hour value to the 12-hour clock version.
     * @return {?} a number between 1 to 12
     */
    JDate.prototype.getHours12hourClock = /**
     * Converts default 24-hour clock hour value to the 12-hour clock version.
     * @return {?} a number between 1 to 12
     */
    function () {
        /** @type {?} */
        var result = this.getHours() % 12;
        return result ? result : 12;
    };
    /**
     * @return the milliseconds in the specified date according to local time.
     */
    /**
     * @return {?} the milliseconds in the specified date according to local time.
     */
    JDate.prototype.getMilliseconds = /**
     * @return {?} the milliseconds in the specified date according to local time.
     */
    function () {
        return this._gDate.getMilliseconds();
    };
    /**
     * @Return the minutes in the specified date according to local time.
     */
    /**
     * \@Return the minutes in the specified date according to local time.
     * @return {?}
     */
    JDate.prototype.getMinutes = /**
     * \@Return the minutes in the specified date according to local time.
     * @return {?}
     */
    function () {
        return this._gDate.getMinutes();
    };
    /**
     * @return the month in the specified date according to local time, as a zero-based value
     * where zero indicates the first month of the year.
     */
    /**
     * @return {?} the month in the specified date according to local time, as a zero-based value
     * where zero indicates the first month of the year.
     */
    JDate.prototype.getMonth = /**
     * @return {?} the month in the specified date according to local time, as a zero-based value
     * where zero indicates the first month of the year.
     */
    function () {
        return this._jMonth;
    };
    /**
     * @return the seconds in the specified date according to local time.
     */
    /**
     * @return {?} the seconds in the specified date according to local time.
     */
    JDate.prototype.getSeconds = /**
     * @return {?} the seconds in the specified date according to local time.
     */
    function () {
        return this._gDate.getSeconds();
    };
    /**
     * JavaScript uses milliseconds as the unit of measurement, whereas Unix Time is in seconds.
     *
     * getTime() always uses UTC for time representation. For example, a client browser in one timezone, getTime() will be the same as a
     * client browser in any other timezone.
     *
     *You can use this method to help assign a date and time to another Date object. This method is functionally equivalent to the valueOf() method.
     * @return the number of milliseconds since the Unix Epoch.
     */
    /**
     * JavaScript uses milliseconds as the unit of measurement, whereas Unix Time is in seconds.
     *
     * getTime() always uses UTC for time representation. For example, a client browser in one timezone, getTime() will be the same as a
     * client browser in any other timezone.
     *
     * You can use this method to help assign a date and time to another Date object. This method is functionally equivalent to the valueOf() method.
     * @return {?} the number of milliseconds since the Unix Epoch.
     */
    JDate.prototype.getTime = /**
     * JavaScript uses milliseconds as the unit of measurement, whereas Unix Time is in seconds.
     *
     * getTime() always uses UTC for time representation. For example, a client browser in one timezone, getTime() will be the same as a
     * client browser in any other timezone.
     *
     * You can use this method to help assign a date and time to another Date object. This method is functionally equivalent to the valueOf() method.
     * @return {?} the number of milliseconds since the Unix Epoch.
     */
    function () {
        return this._gDate.getTime();
    };
    /**
     * Attention: Not implemented
     * @return the time zone difference, in minutes, from current locale (host system settings) to UTC
     * @todo add implementation
     */
    /**
     * Attention: Not implemented
     * \@todo add implementation
     * @return {?} the time zone difference, in minutes, from current locale (host system settings) to UTC
     */
    JDate.prototype.getTimezoneOffset = /**
     * Attention: Not implemented
     * \@todo add implementation
     * @return {?} the time zone difference, in minutes, from current locale (host system settings) to UTC
     */
    function () {
        return this._gDate.getTimezoneOffset();
    };
    /**
     * Output is not jalali day.
     * @return getUTCDate of the corresponding Georgian date.
     * @todo add implementation
     */
    /**
     * Output is not jalali day.
     * \@todo add implementation
     * @return {?} getUTCDate of the corresponding Georgian date.
     */
    JDate.prototype.getUTCDate = /**
     * Output is not jalali day.
     * \@todo add implementation
     * @return {?} getUTCDate of the corresponding Georgian date.
     */
    function () {
        return this._gDate.getUTCDate();
    };
    /**
     * Output is not jalali day.
     * @return getUTCDay of the corresponding Georgian date.
     * @todo add implementation
     */
    /**
     * Output is not jalali day.
     * \@todo add implementation
     * @return {?} getUTCDay of the corresponding Georgian date.
     */
    JDate.prototype.getUTCDay = /**
     * Output is not jalali day.
     * \@todo add implementation
     * @return {?} getUTCDay of the corresponding Georgian date.
     */
    function () {
        return this._gDate.getUTCDay();
    };
    /**
     * Output is not a Jalali Year.
     * @return getUTCFullYear of the corresponding Georgian date.
     * @todo add implementation
     */
    /**
     * Output is not a Jalali Year.
     * \@todo add implementation
     * @return {?} getUTCFullYear of the corresponding Georgian date.
     */
    JDate.prototype.getUTCFullYear = /**
     * Output is not a Jalali Year.
     * \@todo add implementation
     * @return {?} getUTCFullYear of the corresponding Georgian date.
     */
    function () {
        return this._gDate.getUTCFullYear();
    };
    /**
     * @return getUTCHours of the corresponding Georgian date.
     * @todo add implementation
     */
    /**
     * \@todo add implementation
     * @return {?} getUTCHours of the corresponding Georgian date.
     */
    JDate.prototype.getUTCHours = /**
     * \@todo add implementation
     * @return {?} getUTCHours of the corresponding Georgian date.
     */
    function () {
        return this._gDate.getUTCHours();
    };
    /**
     * @return getUTCMilliseconds of the corresponding Georgian date.
     * @todo add implementation
     */
    /**
     * \@todo add implementation
     * @return {?} getUTCMilliseconds of the corresponding Georgian date.
     */
    JDate.prototype.getUTCMilliseconds = /**
     * \@todo add implementation
     * @return {?} getUTCMilliseconds of the corresponding Georgian date.
     */
    function () {
        return this._gDate.getUTCMilliseconds();
    };
    /**
     * @return getUTCMinutes of the corresponding Georgian date.
     * @todo add implementation
     */
    /**
     * \@todo add implementation
     * @return {?} getUTCMinutes of the corresponding Georgian date.
     */
    JDate.prototype.getUTCMinutes = /**
     * \@todo add implementation
     * @return {?} getUTCMinutes of the corresponding Georgian date.
     */
    function () {
        return this._gDate.getUTCMinutes();
    };
    /**
     * Output is not a Jalali Year.
     * @return getUTCMonth of the corresponding Georgian date.
     * @todo add implementation
     */
    /**
     * Output is not a Jalali Year.
     * \@todo add implementation
     * @return {?} getUTCMonth of the corresponding Georgian date.
     */
    JDate.prototype.getUTCMonth = /**
     * Output is not a Jalali Year.
     * \@todo add implementation
     * @return {?} getUTCMonth of the corresponding Georgian date.
     */
    function () {
        return this._gDate.getUTCMonth();
    };
    /**
     * @return getUTCSeconds of the corresponding Georgian date.
     * @todo add implementation
     */
    /**
     * \@todo add implementation
     * @return {?} getUTCSeconds of the corresponding Georgian date.
     */
    JDate.prototype.getUTCSeconds = /**
     * \@todo add implementation
     * @return {?} getUTCSeconds of the corresponding Georgian date.
     */
    function () {
        return this._gDate.getUTCSeconds();
    };
    /**
     * sets the day of the JDate object relative to the beginning of the currently set month.
     * @param date day number starts from 1.
     * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the given date (the Date object is also changed in place).
     */
    /**
     * sets the day of the JDate object relative to the beginning of the currently set month.
     * @param {?} date day number starts from 1.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the given date (the Date object is also changed in place).
     */
    JDate.prototype.setDate = /**
     * sets the day of the JDate object relative to the beginning of the currently set month.
     * @param {?} date day number starts from 1.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the given date (the Date object is also changed in place).
     */
    function (date) {
        this.jDay = date;
        return this.getTime();
    };
    /**
     * sets the full year for a specified date according to local time. Returns new timestamp.
     * @param year full Jalali year like 1397
     * @param month number of month starting from 0
     * @param date number of day starting from 1
     */
    /**
     * sets the full year for a specified date according to local time. Returns new timestamp.
     * @param {?} year full Jalali year like 1397
     * @param {?=} month number of month starting from 0
     * @param {?=} date number of day starting from 1
     * @return {?}
     */
    JDate.prototype.setFullYear = /**
     * sets the full year for a specified date according to local time. Returns new timestamp.
     * @param {?} year full Jalali year like 1397
     * @param {?=} month number of month starting from 0
     * @param {?=} date number of day starting from 1
     * @return {?}
     */
    function (year, month, date) {
        this.jYear = year;
        if (month) {
            this.jMonth = month;
        }
        if (date) {
            this.jDay = date;
        }
        return this.getTime();
    };
    /**
     * Sets the hours for a specified date according to local time, and returns the number of milliseconds since
     * January 1, 1970 00:00:00 UTC until the time represented by the updated JDate instance.
     * @param hours An integer between 0 and 23, representing the hour
     * @param min An integer between 0 and 59, representing the minutes.
     * @param sec An integer between 0 and 59, representing the seconds.
     * @param ms A number between 0 and 999, representing the milliseconds.
     * @return The number of milliseconds between January 1, 1970 00:00:00 UTC and the updated date.
     */
    /**
     * Sets the hours for a specified date according to local time, and returns the number of milliseconds since
     * January 1, 1970 00:00:00 UTC until the time represented by the updated JDate instance.
     * @param {?} hours An integer between 0 and 23, representing the hour
     * @param {?=} min An integer between 0 and 59, representing the minutes.
     * @param {?=} sec An integer between 0 and 59, representing the seconds.
     * @param {?=} ms A number between 0 and 999, representing the milliseconds.
     * @return {?} The number of milliseconds between January 1, 1970 00:00:00 UTC and the updated date.
     */
    JDate.prototype.setHours = /**
     * Sets the hours for a specified date according to local time, and returns the number of milliseconds since
     * January 1, 1970 00:00:00 UTC until the time represented by the updated JDate instance.
     * @param {?} hours An integer between 0 and 23, representing the hour
     * @param {?=} min An integer between 0 and 59, representing the minutes.
     * @param {?=} sec An integer between 0 and 59, representing the seconds.
     * @param {?=} ms A number between 0 and 999, representing the milliseconds.
     * @return {?} The number of milliseconds between January 1, 1970 00:00:00 UTC and the updated date.
     */
    function (hours, min, sec, ms) {
        this._gDate.setHours(hours);
        if (min !== undefined) {
            this.setMinutes(min);
        }
        if (sec !== undefined) {
            this.setSeconds(sec);
        }
        if (ms !== undefined) {
            this.setMilliseconds(ms);
        }
        return this.getTime();
    };
    /**
     * Sets the milliseconds for a specified date according to local time.
     * @param ms A number between 0 and 999, representing the milliseconds.
     * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    /**
     * Sets the milliseconds for a specified date according to local time.
     * @param {?} ms A number between 0 and 999, representing the milliseconds.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    JDate.prototype.setMilliseconds = /**
     * Sets the milliseconds for a specified date according to local time.
     * @param {?} ms A number between 0 and 999, representing the milliseconds.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    function (ms) {
        this._gDate.setMilliseconds(ms);
        return this.getTime();
    };
    /**
     * Sets the minutes for a specified date according to local time.
     * @param min An integer between 0 and 59, representing the minutes.
     * @param sec An integer between 0 and 59, representing the seconds.
     * @param ms A number between 0 and 999, representing the milliseconds.
     * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    /**
     * Sets the minutes for a specified date according to local time.
     * @param {?} min An integer between 0 and 59, representing the minutes.
     * @param {?=} sec An integer between 0 and 59, representing the seconds.
     * @param {?=} ms A number between 0 and 999, representing the milliseconds.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    JDate.prototype.setMinutes = /**
     * Sets the minutes for a specified date according to local time.
     * @param {?} min An integer between 0 and 59, representing the minutes.
     * @param {?=} sec An integer between 0 and 59, representing the seconds.
     * @param {?=} ms A number between 0 and 999, representing the milliseconds.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    function (min, sec, ms) {
        this._gDate.setMinutes(min);
        if (sec !== undefined) {
            this.setSeconds(sec);
        }
        if (ms !== undefined) {
            this.setMilliseconds(ms);
        }
        return this.getTime();
    };
    /**
     * Sets the month for a specified date according to the currently set year.
     * @param month An integer between 0 and 11, representing the months Farvardin through Esfand.
     * @param date An integer from 1 to 31, representing the day of the month.
     * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    /**
     * Sets the month for a specified date according to the currently set year.
     * @param {?} month An integer between 0 and 11, representing the months Farvardin through Esfand.
     * @param {?=} date An integer from 1 to 31, representing the day of the month.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    JDate.prototype.setMonth = /**
     * Sets the month for a specified date according to the currently set year.
     * @param {?} month An integer between 0 and 11, representing the months Farvardin through Esfand.
     * @param {?=} date An integer from 1 to 31, representing the day of the month.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    function (month, date) {
        this.jMonth = month;
        if (date !== undefined) {
            this.jDay = date;
        }
        return this.getTime();
    };
    /**
     * Sets the seconds for a specified date according to local time.
     * @param sec An integer between 0 and 59, representing the seconds.
     * @param ms A number between 0 and 999, representing the milliseconds.
     * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    /**
     * Sets the seconds for a specified date according to local time.
     * @param {?} sec An integer between 0 and 59, representing the seconds.
     * @param {?=} ms A number between 0 and 999, representing the milliseconds.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    JDate.prototype.setSeconds = /**
     * Sets the seconds for a specified date according to local time.
     * @param {?} sec An integer between 0 and 59, representing the seconds.
     * @param {?=} ms A number between 0 and 999, representing the milliseconds.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    function (sec, ms) {
        this._gDate.setSeconds(sec);
        if (ms !== undefined) {
            this.setMilliseconds(ms);
        }
        return this.getTime();
    };
    /**
     * Sets the JDate object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
     * @param time sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
     * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    /**
     * Sets the JDate object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
     * @param {?} time sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    JDate.prototype.setTime = /**
     * Sets the JDate object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
     * @param {?} time sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    function (time) {
        this._createFromDate(new Date(time));
        return time;
    };
    /**
     * sets the day of the month for a specified date according to universal time.
     * Then recreate the JDate object from new Georgian object.
     * @param  date An integer from 1 to 31, representing the day of the month.
     * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     * @todo add implementation
     */
    /**
     * sets the day of the month for a specified date according to universal time.
     * Then recreate the JDate object from new Georgian object.
     * \@todo add implementation
     * @param {?} date An integer from 1 to 31, representing the day of the month.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    JDate.prototype.setUTCDate = /**
     * sets the day of the month for a specified date according to universal time.
     * Then recreate the JDate object from new Georgian object.
     * \@todo add implementation
     * @param {?} date An integer from 1 to 31, representing the day of the month.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    function (date) {
        this._gDate.setUTCDate(date);
        this._createFromDate(this._gDate);
        return this.getTime();
    };
    /**
     * Sets the full year for a specified date according to universal time.
     * Then recreate the JDate object from new Georgian object.
     * @param year  An integer specifying the numeric value of the year, for example, 1995.
     * @param month  Optional. An integer between 0 and 11 representing the months January through December.
     * @param date An integer between 1 and 31 representing the day of the month. If you specify the dayValue parameter, you must also
     * specify the monthValue.
     * @todo add implementation
     */
    /**
     * Sets the full year for a specified date according to universal time.
     * Then recreate the JDate object from new Georgian object.
     * \@todo add implementation
     * @param {?} year  An integer specifying the numeric value of the year, for example, 1995.
     * @param {?=} month  Optional. An integer between 0 and 11 representing the months January through December.
     * @param {?=} date An integer between 1 and 31 representing the day of the month. If you specify the dayValue parameter, you must also
     * specify the monthValue.
     * @return {?}
     */
    JDate.prototype.setUTCFullYear = /**
     * Sets the full year for a specified date according to universal time.
     * Then recreate the JDate object from new Georgian object.
     * \@todo add implementation
     * @param {?} year  An integer specifying the numeric value of the year, for example, 1995.
     * @param {?=} month  Optional. An integer between 0 and 11 representing the months January through December.
     * @param {?=} date An integer between 1 and 31 representing the day of the month. If you specify the dayValue parameter, you must also
     * specify the monthValue.
     * @return {?}
     */
    function (year, month, date) {
        this._gDate.setUTCFullYear(year, month, date);
        this._createFromDate(this._gDate);
        return this.getTime();
    };
    /**
     * Sets the hour for a specified date according to universal time, and returns the number of milliseconds since
     * January 1, 1970 00:00:00 UTC until the time represented by the updated Date instance.
     * Then recreate the JDate object from new Georgian object.
     * @param hours  An integer between 0 and 23, representing the hour.
     * @param min Optional. An integer between 0 and 59, representing the minutes.
     * @param sec Optional. An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter,
     *        you must also specify the minutesValue.
     * @param ms Optional. A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter,
     *        you must also specify the minutesValue and secondsValue.
     * @return The number of milliseconds between January 1, 1970 00:00:00 UTC and the updated date.
     * @todo add implementation
     */
    /**
     * Sets the hour for a specified date according to universal time, and returns the number of milliseconds since
     * January 1, 1970 00:00:00 UTC until the time represented by the updated Date instance.
     * Then recreate the JDate object from new Georgian object.
     * \@todo add implementation
     * @param {?} hours  An integer between 0 and 23, representing the hour.
     * @param {?=} min Optional. An integer between 0 and 59, representing the minutes.
     * @param {?=} sec Optional. An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter,
     *        you must also specify the minutesValue.
     * @param {?=} ms Optional. A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter,
     *        you must also specify the minutesValue and secondsValue.
     * @return {?} The number of milliseconds between January 1, 1970 00:00:00 UTC and the updated date.
     */
    JDate.prototype.setUTCHours = /**
     * Sets the hour for a specified date according to universal time, and returns the number of milliseconds since
     * January 1, 1970 00:00:00 UTC until the time represented by the updated Date instance.
     * Then recreate the JDate object from new Georgian object.
     * \@todo add implementation
     * @param {?} hours  An integer between 0 and 23, representing the hour.
     * @param {?=} min Optional. An integer between 0 and 59, representing the minutes.
     * @param {?=} sec Optional. An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter,
     *        you must also specify the minutesValue.
     * @param {?=} ms Optional. A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter,
     *        you must also specify the minutesValue and secondsValue.
     * @return {?} The number of milliseconds between January 1, 1970 00:00:00 UTC and the updated date.
     */
    function (hours, min, sec, ms) {
        this._gDate.setUTCHours(hours, min, sec, ms);
        this._createFromDate(this._gDate);
        return this.getTime();
    };
    /**
     * Sets the milliseconds for a specified date according to universal time.
     *
     * Then recreate the JDate object from new Georgian object.
     * @param ms A number between 0 and 999, representing the milliseconds.
     * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     * @todo add implementation
     */
    /**
     * Sets the milliseconds for a specified date according to universal time.
     *
     * Then recreate the JDate object from new Georgian object.
     * \@todo add implementation
     * @param {?} ms A number between 0 and 999, representing the milliseconds.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    JDate.prototype.setUTCMilliseconds = /**
     * Sets the milliseconds for a specified date according to universal time.
     *
     * Then recreate the JDate object from new Georgian object.
     * \@todo add implementation
     * @param {?} ms A number between 0 and 999, representing the milliseconds.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    function (ms) {
        this._gDate.setUTCMilliseconds(ms);
        this._createFromDate(this._gDate);
        return this.getTime();
    };
    /**
     * Sets the minutes for a specified date according to universal time.
     *
     * Then recreate the JDate object from new Georgian object.
     * @param min An integer between 0 and 59, representing the minutes.
     * @param sec Optional. An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter,
     *        you must also specify the minutesValue.
     * @param ms Optional. A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter,
     *        you must also specify the minutesValue and secondsValue.
     * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     * @todo add implementation
     */
    /**
     * Sets the minutes for a specified date according to universal time.
     *
     * Then recreate the JDate object from new Georgian object.
     * \@todo add implementation
     * @param {?} min An integer between 0 and 59, representing the minutes.
     * @param {?=} sec Optional. An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter,
     *        you must also specify the minutesValue.
     * @param {?=} ms Optional. A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter,
     *        you must also specify the minutesValue and secondsValue.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    JDate.prototype.setUTCMinutes = /**
     * Sets the minutes for a specified date according to universal time.
     *
     * Then recreate the JDate object from new Georgian object.
     * \@todo add implementation
     * @param {?} min An integer between 0 and 59, representing the minutes.
     * @param {?=} sec Optional. An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter,
     *        you must also specify the minutesValue.
     * @param {?=} ms Optional. A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter,
     *        you must also specify the minutesValue and secondsValue.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    function (min, sec, ms) {
        this._gDate.setUTCMinutes(min, sec, ms);
        this._createFromDate(this._gDate);
        return this.getTime();
    };
    /**
     * Sets the month for a specified date according to universal time.
     *
     * Then recreate the JDate object from new Georgian object.
     * @param month An integer between 0 and 11, representing the months January through December.
     * @param date Optional. An integer from 1 to 31, representing the day of the month.
     * @return The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     * @todo add implementation
     */
    /**
     * Sets the month for a specified date according to universal time.
     *
     * Then recreate the JDate object from new Georgian object.
     * \@todo add implementation
     * @param {?} month An integer between 0 and 11, representing the months January through December.
     * @param {?=} date Optional. An integer from 1 to 31, representing the day of the month.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    JDate.prototype.setUTCMonth = /**
     * Sets the month for a specified date according to universal time.
     *
     * Then recreate the JDate object from new Georgian object.
     * \@todo add implementation
     * @param {?} month An integer between 0 and 11, representing the months January through December.
     * @param {?=} date Optional. An integer from 1 to 31, representing the day of the month.
     * @return {?} The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
     */
    function (month, date) {
        this._gDate.setUTCMonth(month, date);
        this._createFromDate(this._gDate);
        return this.getTime();
    };
    /**
     * Sets the seconds for a specified date according to universal time.
     *
     * Then recreate the JDate object from new Georgian object.
     * @param sec An integer between 0 and 59, representing the seconds.
     * @param ms Optional. A number between 0 and 999, representing the milliseconds.
     * @todo add implementation
     */
    /**
     * Sets the seconds for a specified date according to universal time.
     *
     * Then recreate the JDate object from new Georgian object.
     * \@todo add implementation
     * @param {?} sec An integer between 0 and 59, representing the seconds.
     * @param {?=} ms Optional. A number between 0 and 999, representing the milliseconds.
     * @return {?}
     */
    JDate.prototype.setUTCSeconds = /**
     * Sets the seconds for a specified date according to universal time.
     *
     * Then recreate the JDate object from new Georgian object.
     * \@todo add implementation
     * @param {?} sec An integer between 0 and 59, representing the seconds.
     * @param {?=} ms Optional. A number between 0 and 999, representing the milliseconds.
     * @return {?}
     */
    function (sec, ms) {
        this._gDate.setUTCSeconds(sec, ms);
        this._createFromDate(this._gDate);
        return this.getTime();
    };
    /**
     * @return name of the day of the week in persian.
     * @example دوشنبه
     */
    /**
     * \@example دوشنبه
     * @return {?} name of the day of the week in persian.
     */
    JDate.prototype.getNameOfTheDay = /**
     * \@example دوشنبه
     * @return {?} name of the day of the week in persian.
     */
    function () {
        return JDate.DAYS_OF_WEEK[this.getDay()];
    };
    /**
     * @return name of the month in persian.
     * @example مهر
     */
    /**
     * \@example مهر
     * @return {?} name of the month in persian.
     */
    JDate.prototype.getNameOfTheMonth = /**
     * \@example مهر
     * @return {?} name of the month in persian.
     */
    function () {
        return JDate.FA_MONTHS[this.getMonth()];
    };
    /**
     * returns the date portion of a Date object in human readable form in Persian.
     * @return a string following this pattern: "nameOfTheDay nameOfTheMonth dayNumber fullYear".
     * @example پنج‌شنبه اسفند 30 1375
     */
    /**
     * returns the date portion of a Date object in human readable form in Persian.
     * \@example پنج‌شنبه اسفند 30 1375
     * @return {?} a string following this pattern: "nameOfTheDay nameOfTheMonth dayNumber fullYear".
     */
    JDate.prototype.toDateString = /**
     * returns the date portion of a Date object in human readable form in Persian.
     * \@example پنج‌شنبه اسفند 30 1375
     * @return {?} a string following this pattern: "nameOfTheDay nameOfTheMonth dayNumber fullYear".
     */
    function () {
        return this.getNameOfTheDay() + " " + this.getNameOfTheMonth() + " " + this.getDate() + " " + this.getFullYear();
    };
    /**
     * Returns time marker of object time. all hour numbers lesser than 12 are before noon and all greater than 12 are after noon.
     * @param shortVersion controls output. if be true, output will be in short format like: ب.ظ if be false, output will be in complete format like: بعد از ظهر
     * @return time marker for showing if time is before noon or after it
     */
    /**
     * Returns time marker of object time. all hour numbers lesser than 12 are before noon and all greater than 12 are after noon.
     * @param {?=} shortVersion controls output. if be true, output will be in short format like: ب.ظ if be false, output will be in complete format like: بعد از ظهر
     * @return {?} time marker for showing if time is before noon or after it
     */
    JDate.prototype.getTimeMarker = /**
     * Returns time marker of object time. all hour numbers lesser than 12 are before noon and all greater than 12 are after noon.
     * @param {?=} shortVersion controls output. if be true, output will be in short format like: ب.ظ if be false, output will be in complete format like: بعد از ظهر
     * @return {?} time marker for showing if time is before noon or after it
     */
    function (shortVersion) {
        if (shortVersion === void 0) { shortVersion = false; }
        if (this.getHours() < 12) {
            return shortVersion ? JDate.SHORT_BEFORE_NOON : JDate.COMPLETE_BEFORE_NOON;
        }
        return shortVersion ? JDate.SHORT_AFTER_NOON : JDate.COMPLETE_AFTER_NOON;
    };
    /**
     * Replace patterns of date formatting with corresponding strings from JDate object values.
     * In bi-character pattern parts, missed digits will fill with zero.
     * @param pattern a pattern string with replaceable parts:
     *
     *        yyyy -> Year number in 4-digit representation. ex: 1397
     *
     *        yy -> Year number in 2-digit representation. ex: 97
     *
     *        mmmm -> Name of the month in English representation. ex: Esfand
     *
     *        mmm -> Name of the month in Persian representation. ex: اسفند
     *
     *        mm -> 2-digit number of the month starting from 1
     *
     *        m -> non zero-padding number of the month starting from 1
     *
     *        dddd -> Name of the day in the week in English representation. ex: Shanbe
     *
     *        ddd -> Name of the day in the week id Persian representation. ex: شنبه
     *
     *        dd -> 2-digit number of the day in the month starting from 1
     *
     *        d -> non zero-padding number of the day in the month starting from 1
     *
     * @return A formatted string that all Date pattern parts has been replaced. Other characters of the pattern will left unchanged.
     */
    /**
     * Replace patterns of date formatting with corresponding strings from JDate object values.
     * In bi-character pattern parts, missed digits will fill with zero.
     * @private
     * @param {?} pattern a pattern string with replaceable parts:
     *
     *        yyyy -> Year number in 4-digit representation. ex: 1397
     *
     *        yy -> Year number in 2-digit representation. ex: 97
     *
     *        mmmm -> Name of the month in English representation. ex: Esfand
     *
     *        mmm -> Name of the month in Persian representation. ex: اسفند
     *
     *        mm -> 2-digit number of the month starting from 1
     *
     *        m -> non zero-padding number of the month starting from 1
     *
     *        dddd -> Name of the day in the week in English representation. ex: Shanbe
     *
     *        ddd -> Name of the day in the week id Persian representation. ex: شنبه
     *
     *        dd -> 2-digit number of the day in the month starting from 1
     *
     *        d -> non zero-padding number of the day in the month starting from 1
     *
     * @return {?} A formatted string that all Date pattern parts has been replaced. Other characters of the pattern will left unchanged.
     */
    JDate.prototype._format_date = /**
     * Replace patterns of date formatting with corresponding strings from JDate object values.
     * In bi-character pattern parts, missed digits will fill with zero.
     * @private
     * @param {?} pattern a pattern string with replaceable parts:
     *
     *        yyyy -> Year number in 4-digit representation. ex: 1397
     *
     *        yy -> Year number in 2-digit representation. ex: 97
     *
     *        mmmm -> Name of the month in English representation. ex: Esfand
     *
     *        mmm -> Name of the month in Persian representation. ex: اسفند
     *
     *        mm -> 2-digit number of the month starting from 1
     *
     *        m -> non zero-padding number of the month starting from 1
     *
     *        dddd -> Name of the day in the week in English representation. ex: Shanbe
     *
     *        ddd -> Name of the day in the week id Persian representation. ex: شنبه
     *
     *        dd -> 2-digit number of the day in the month starting from 1
     *
     *        d -> non zero-padding number of the day in the month starting from 1
     *
     * @return {?} A formatted string that all Date pattern parts has been replaced. Other characters of the pattern will left unchanged.
     */
    function (pattern) {
        return pattern.replace(/yyyy/g, JDate.zeroPadding(this.getFullYear(), 4))
            .replace(/\byy\b/g, (this.getFullYear() % 100).toString())
            .replace(/\bmmmm\b/g, JDate.EN_MONTHS[this.getMonth()])
            .replace(/\bmmm\b/g, JDate.FA_MONTHS[this.getMonth()])
            .replace(/\bmm\b/g, JDate.zeroPadding(this.getMonth() + 1, 2))
            .replace(/\bm\b/g, (this.getMonth() + 1).toString())
            .replace(/\bdddd\b/g, JDate.EN_DAYS_OF_WEEK[this.getDay()])
            .replace(/\bddd\b/g, JDate.DAYS_OF_WEEK[this.getDay()])
            .replace(/\bdd\b/g, JDate.zeroPadding(this.getDate(), 2))
            .replace(/\bd\b/g, this.getDate().toString());
    };
    /**
     * Replace patterns of time formatting with corresponding strings from JDate object values.
     *
     * In bi-character pattern parts, missed digits will fill with zero.
     * @param pattern a pattern string with replaceable parts:
     *
     *        HH -> 2-digit form of hour number in 24-hour clock format.
     *
     *        H -> non zero-padding form of hour number in 24-hour clock format.
     *
     *        hh -> 2-digit form of hour number in 12-hour clock format.
     *
     *        h -> non zero-padding form of hour number in 12-hour clock format.
     *
     *        H -> non zero-padding form of hour number in 12-hour clock format.
     *
     *        MM -> 2-digit form of minutes number.
     *
     *        M -> non zero-padding form of minutes number
     *
     *        SS -> 2-digit form of seconds number.
     *
     *        S -> non zero-padding form of seconds number.
     *
     *        l -> number of milliseconds
     *
     *        T -> Time marker in full format like: قبل از ظهر
     *
     *        t -> Time marker in short format like: ق.ظ
     */
    /**
     * Replace patterns of time formatting with corresponding strings from JDate object values.
     *
     * In bi-character pattern parts, missed digits will fill with zero.
     * @private
     * @param {?} pattern a pattern string with replaceable parts:
     *
     *        HH -> 2-digit form of hour number in 24-hour clock format.
     *
     *        H -> non zero-padding form of hour number in 24-hour clock format.
     *
     *        hh -> 2-digit form of hour number in 12-hour clock format.
     *
     *        h -> non zero-padding form of hour number in 12-hour clock format.
     *
     *        H -> non zero-padding form of hour number in 12-hour clock format.
     *
     *        MM -> 2-digit form of minutes number.
     *
     *        M -> non zero-padding form of minutes number
     *
     *        SS -> 2-digit form of seconds number.
     *
     *        S -> non zero-padding form of seconds number.
     *
     *        l -> number of milliseconds
     *
     *        T -> Time marker in full format like: قبل از ظهر
     *
     *        t -> Time marker in short format like: ق.ظ
     * @return {?}
     */
    JDate.prototype._format_time = /**
     * Replace patterns of time formatting with corresponding strings from JDate object values.
     *
     * In bi-character pattern parts, missed digits will fill with zero.
     * @private
     * @param {?} pattern a pattern string with replaceable parts:
     *
     *        HH -> 2-digit form of hour number in 24-hour clock format.
     *
     *        H -> non zero-padding form of hour number in 24-hour clock format.
     *
     *        hh -> 2-digit form of hour number in 12-hour clock format.
     *
     *        h -> non zero-padding form of hour number in 12-hour clock format.
     *
     *        H -> non zero-padding form of hour number in 12-hour clock format.
     *
     *        MM -> 2-digit form of minutes number.
     *
     *        M -> non zero-padding form of minutes number
     *
     *        SS -> 2-digit form of seconds number.
     *
     *        S -> non zero-padding form of seconds number.
     *
     *        l -> number of milliseconds
     *
     *        T -> Time marker in full format like: قبل از ظهر
     *
     *        t -> Time marker in short format like: ق.ظ
     * @return {?}
     */
    function (pattern) {
        return pattern.replace(/\bHH\b/g, JDate.zeroPadding(this.getHours(), 2))
            .replace(/\bH\b/g, this.getHours().toString())
            .replace(/\bhh\b/g, JDate.zeroPadding(this.getHours12hourClock(), 2))
            .replace(/\bh\b/g, this.getHours12hourClock().toString())
            .replace(/\bMM\b/g, JDate.zeroPadding(this.getMinutes(), 2))
            .replace(/\bM\b/g, this.getMinutes().toString())
            .replace(/\bSS\b/g, JDate.zeroPadding(this.getSeconds(), 2))
            .replace(/\bS\b/g, this.getSeconds().toString())
            .replace(/\bl\b/g, this.getMilliseconds().toString())
            .replace(/\bT\b/g, this.getTimeMarker(false))
            .replace(/\bt\b/g, this.getTimeMarker(true));
    };
    /**
     * This method format date and time stored in the JDate object according to the entered pattern.
     *
     * Only masks will replace and all other characters will be unchanged after formatting.
     *
     * You can use masks several times in a pattern but be careful because if some of masks written immediately, they create new masks with
     * different meaning. It's better to always have some splitter characters between different masks.
     * @param pattern a string containing zero or more formatting mask.
     *
     * Masks:
     *
     *        yyyy -> Year number in 4-digit representation. Leading zero for years lesser than 1000 ex: 1397
     *
     *        yy -> Year number in 2-digit representation without Leading zeros. ex: 97
     *
     *        mmmm -> Name of the month in English representation. ex: Esfand
     *
     *        mmm -> Name of the month in Persian representation. ex: اسفند
     *
     *        mm -> 2-digit number of the month starting from 1. Leading zero for single-digit months.
     *
     *        m -> number of the month starting from 1 without Leading zeros.
     *
     *        dddd -> Name of the day in the week in English representation. ex: Shanbe
     *
     *        ddd -> Name of the day in the week id Persian representation. ex: شنبه
     *
     *        dd -> 2-digit number of the day in the month starting from 1. Leading zero for single-digit days.
     *
     *        d -> number of the day in the month starting from 1 without Leading zeros.
     *
     *        HH -> 2-digit form of hour number in 24-hour clock format. Leading zero for single-digit hours.
     *
     *        H -> non zero-padding form of hour number in 24-hour clock format without Leading zeros.
     *
     *        hh -> 2-digit form of hour number in 12-hour clock format. Leading zero for single-digit hours.
     *
     *        H -> non zero-padding form of hour number in 12-hour clock format without Leading zeros.
     *
     *        MM -> 2-digit form of minutes number. Leading zero for single-digit minutes.
     *
     *        M -> non zero-padding form of minutes number without Leading zeros.
     *
     *        SS -> 2-digit form of seconds number. Leading zero for single-digit seconds.
     *
     *        S -> non zero-padding form of seconds number without Leading zeros.
     *
     *        l -> number of milliseconds without Leading zeros.
     *
     *        T -> Time marker in full format like: قبل از ظهر
     *
     *        t -> Time marker in short format like: ق.ظ
     *@return formatted dateTime string.
     */
    /**
     * This method format date and time stored in the JDate object according to the entered pattern.
     *
     * Only masks will replace and all other characters will be unchanged after formatting.
     *
     * You can use masks several times in a pattern but be careful because if some of masks written immediately, they create new masks with
     * different meaning. It's better to always have some splitter characters between different masks.
     * @param {?} pattern a string containing zero or more formatting mask.
     *
     * Masks:
     *
     *        yyyy -> Year number in 4-digit representation. Leading zero for years lesser than 1000 ex: 1397
     *
     *        yy -> Year number in 2-digit representation without Leading zeros. ex: 97
     *
     *        mmmm -> Name of the month in English representation. ex: Esfand
     *
     *        mmm -> Name of the month in Persian representation. ex: اسفند
     *
     *        mm -> 2-digit number of the month starting from 1. Leading zero for single-digit months.
     *
     *        m -> number of the month starting from 1 without Leading zeros.
     *
     *        dddd -> Name of the day in the week in English representation. ex: Shanbe
     *
     *        ddd -> Name of the day in the week id Persian representation. ex: شنبه
     *
     *        dd -> 2-digit number of the day in the month starting from 1. Leading zero for single-digit days.
     *
     *        d -> number of the day in the month starting from 1 without Leading zeros.
     *
     *        HH -> 2-digit form of hour number in 24-hour clock format. Leading zero for single-digit hours.
     *
     *        H -> non zero-padding form of hour number in 24-hour clock format without Leading zeros.
     *
     *        hh -> 2-digit form of hour number in 12-hour clock format. Leading zero for single-digit hours.
     *
     *        H -> non zero-padding form of hour number in 12-hour clock format without Leading zeros.
     *
     *        MM -> 2-digit form of minutes number. Leading zero for single-digit minutes.
     *
     *        M -> non zero-padding form of minutes number without Leading zeros.
     *
     *        SS -> 2-digit form of seconds number. Leading zero for single-digit seconds.
     *
     *        S -> non zero-padding form of seconds number without Leading zeros.
     *
     *        l -> number of milliseconds without Leading zeros.
     *
     *        T -> Time marker in full format like: قبل از ظهر
     *
     *        t -> Time marker in short format like: ق.ظ
     * @return {?} formatted dateTime string.
     */
    JDate.prototype.format = /**
     * This method format date and time stored in the JDate object according to the entered pattern.
     *
     * Only masks will replace and all other characters will be unchanged after formatting.
     *
     * You can use masks several times in a pattern but be careful because if some of masks written immediately, they create new masks with
     * different meaning. It's better to always have some splitter characters between different masks.
     * @param {?} pattern a string containing zero or more formatting mask.
     *
     * Masks:
     *
     *        yyyy -> Year number in 4-digit representation. Leading zero for years lesser than 1000 ex: 1397
     *
     *        yy -> Year number in 2-digit representation without Leading zeros. ex: 97
     *
     *        mmmm -> Name of the month in English representation. ex: Esfand
     *
     *        mmm -> Name of the month in Persian representation. ex: اسفند
     *
     *        mm -> 2-digit number of the month starting from 1. Leading zero for single-digit months.
     *
     *        m -> number of the month starting from 1 without Leading zeros.
     *
     *        dddd -> Name of the day in the week in English representation. ex: Shanbe
     *
     *        ddd -> Name of the day in the week id Persian representation. ex: شنبه
     *
     *        dd -> 2-digit number of the day in the month starting from 1. Leading zero for single-digit days.
     *
     *        d -> number of the day in the month starting from 1 without Leading zeros.
     *
     *        HH -> 2-digit form of hour number in 24-hour clock format. Leading zero for single-digit hours.
     *
     *        H -> non zero-padding form of hour number in 24-hour clock format without Leading zeros.
     *
     *        hh -> 2-digit form of hour number in 12-hour clock format. Leading zero for single-digit hours.
     *
     *        H -> non zero-padding form of hour number in 12-hour clock format without Leading zeros.
     *
     *        MM -> 2-digit form of minutes number. Leading zero for single-digit minutes.
     *
     *        M -> non zero-padding form of minutes number without Leading zeros.
     *
     *        SS -> 2-digit form of seconds number. Leading zero for single-digit seconds.
     *
     *        S -> non zero-padding form of seconds number without Leading zeros.
     *
     *        l -> number of milliseconds without Leading zeros.
     *
     *        T -> Time marker in full format like: قبل از ظهر
     *
     *        t -> Time marker in short format like: ق.ظ
     * @return {?} formatted dateTime string.
     */
    function (pattern) {
        return this._format_time(this._format_date(pattern));
    };
    /**
     * @return a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (yyyy-mm-ddTHH:MM:SS.lZ).
     *        Be careful because that T in the middle of the pattern is not a format Mask and is a simple character.
     */
    /**
     * @return {?} a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (yyyy-mm-ddTHH:MM:SS.lZ).
     *        Be careful because that T in the middle of the pattern is not a format Mask and is a simple character.
     */
    JDate.prototype.toISOString = /**
     * @return {?} a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (yyyy-mm-ddTHH:MM:SS.lZ).
     *        Be careful because that T in the middle of the pattern is not a format Mask and is a simple character.
     */
    function () {
        return this.format('yyyy-mm-dd') + 'T' + this.format('HH:MM:SS.l') + 'Z';
    };
    /**
     * @return a string representation of the Date object.
     * [see toString method]{@link toString}
     * @param key
     */
    /**
     * @param {?=} key
     * @return {?} a string representation of the Date object.
     * [see toString method]{\@link toString}
     */
    JDate.prototype.toJSON = /**
     * @param {?=} key
     * @return {?} a string representation of the Date object.
     * [see toString method]{\@link toString}
     */
    function (key) {
        return this.toString();
    };
    /**
     * returns formatted date with following pattern: 'ddd mmm d yyyy HH:MM:SS'
     */
    /**
     * returns formatted date with following pattern: 'ddd mmm d yyyy HH:MM:SS'
     * @return {?}
     */
    JDate.prototype.toString = /**
     * returns formatted date with following pattern: 'ddd mmm d yyyy HH:MM:SS'
     * @return {?}
     */
    function () {
        return this.format('ddd mmm d yyyy HH:MM:SS');
    };
    /**
     * @param {?=} locales
     * @param {?=} options
     * @return {?}
     */
    JDate.prototype.toLocaleDateString = /**
     * @param {?=} locales
     * @param {?=} options
     * @return {?}
     */
    function (locales, options) {
        return this._gDate.toLocaleDateString(locales, options);
    };
    /**
     * @param {?=} locales
     * @param {?=} options
     * @return {?}
     */
    JDate.prototype.toLocaleTimeString = /**
     * @param {?=} locales
     * @param {?=} options
     * @return {?}
     */
    function (locales, options) {
        return this._gDate.toLocaleTimeString(locales, options);
    };
    /**
     * @return toTimeString of Georgian date
     *
     * [For more information see javascript Date object documentation about this method]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString}
     */
    /**
     * @return {?} toTimeString of Georgian date
     *
     * [For more information see javascript Date object documentation about this method]{\@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString}
     */
    JDate.prototype.toTimeString = /**
     * @return {?} toTimeString of Georgian date
     *
     * [For more information see javascript Date object documentation about this method]{\@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString}
     */
    function () {
        return this._gDate.toTimeString();
    };
    /**
     * @return toUTCString of Georgian date.
     *
     * [For more information see javascript Date object documentation about this method]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString}
     * @todo add implementation
     */
    /**
     * \@todo add implementation
     * @return {?} toUTCString of Georgian date.
     *
     * [For more information see javascript Date object documentation about this method]{\@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString}
     */
    JDate.prototype.toUTCString = /**
     * \@todo add implementation
     * @return {?} toUTCString of Georgian date.
     *
     * [For more information see javascript Date object documentation about this method]{\@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString}
     */
    function () {
        return this._gDate.toUTCString();
    };
    /**
     * Similar to the getTime method.
     *
     * [For more information also see getTime method]{@link getTime}
     */
    /**
     * Similar to the getTime method.
     *
     * [For more information also see getTime method]{\@link getTime}
     * @return {?}
     */
    JDate.prototype.valueOf = /**
     * Similar to the getTime method.
     *
     * [For more information also see getTime method]{\@link getTime}
     * @return {?}
     */
    function () {
        return this.getTime();
    };
    /**
     * @param {?} incValue
     * @return {?}
     */
    JDate.prototype.addMonth = /**
     * @param {?} incValue
     * @return {?}
     */
    function (incValue) {
        // let newMonth: number = (this.getMonth() + incValue) % 11;
        // let passedYears: number = this.getFullYear() + newMonth / 11;
        // let newYear: number = newMonth === 0 ? ;
        // this.setFullYear(newYear);
        // this.setMonth(newMonth % 11);
    };
    JDate.EN_MONTHS = ['Farvardin', 'Ordibehesht', 'Khordad', 'Tir', 'Mordad', 'Shahrivar', 'Mehr', 'Aban', 'Azar', 'Dey', 'Behman', 'Esfand'];
    JDate.FA_MONTHS = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    JDate.DAYS_OF_WEEK = ['جمعه', 'شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه'];
    JDate.EN_DAYS_OF_WEEK = ['Jom\'e', 'Shanbe', 'Yekshanbe', 'Doshanbe', 'Seshanbe', 'Cheharshanbe', 'Panjshanbe'];
    JDate.COMPLETE_BEFORE_NOON = 'قبل از ظهر';
    JDate.COMPLETE_AFTER_NOON = 'بعد از ظهر';
    JDate.SHORT_BEFORE_NOON = 'ق.ظ';
    JDate.SHORT_AFTER_NOON = 'ب.ظ';
    return JDate;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var FromatNames = {
    'short': 'yy/m/d h:M t',
    'shortDate': 'yy/m/d h:M t',
    'medium': 'd mmm yyyy، h:M t',
    'mediumDate': 'd mmm yyyy، h:M t',
    'long': 'd mmm yyyy، h:M:S T',
    'longDate': 'd mmm yyyy، h:M:S T',
    'shortTime': 'h:M t',
    'mediumTime': 'h:M:S t',
    'longTime': 'h:M:S.l T',
};
/**
 * Formats JDate objects or convert Date objects (or any instance of classes those implement that interface) to a `JDate` object and format
 * that according to the given format.
 *
 * The result of this pipe is not reevaluated when the input is mutated. To avoid the need to reformat the date on every change-detection
 * cycle, treat the date as an immutable object and change the reference when the pipe needs to run again.
 *
 * You can pass a format pattern string like [JDate format method]{\@link https://alihoseiny.github.io/ngx-persian/classes/JDate.html#format}
 *
 * Also you can use pre-defined format names described below:
 *
 *        'short': equivalent to yy/m/d h:M t {\@example '97/2/23 12:12 ب.ظ'}
 *
 *        'shortDate': same as short
 *
 *        'medium': equivalent to 'd mmm yyyy، h:M t' {\@example '23 اردیبهشت 1397، 12:12 ب.ظ'}
 *
 *        'mediumDate': same as medium
 *
 *        'long': equivalent to 'd mmm yyyy، h:M:S T' {\@example '23 اردیبهشت 1397، 12:12:30 بعد از ظهر'}
 *
 *        'longDate': same as long
 *
 *        'shortTime': equivalent to 'h:M t' {\@example '12:12 ب.ظ'}
 *
 *        'mediumTime': equivalent to 'h:M:S t' {\@example '12:12:30 ب.ظ'}
 *
 *        'longTime': equivalent to 'h:M:S.l T' {\@example '12:12:30.300 بعد از ظهر'}
 *
 *  Default format is `medium`.
 */
var JdatePipe = /** @class */ (function () {
    function JdatePipe() {
    }
    /**
     * Checks if `formatName` is in the `FromatNames` enum. If it is, returns related format string. Else returns `formatName` string
     * without any change.
     * @param formatName format name or format pattern string
     * @return formatting pattern string
     */
    /**
     * Checks if `formatName` is in the `FromatNames` enum. If it is, returns related format string. Else returns `formatName` string
     * without any change.
     * @private
     * @param {?} formatName format name or format pattern string
     * @return {?} formatting pattern string
     */
    JdatePipe.convertNameToFormat = /**
     * Checks if `formatName` is in the `FromatNames` enum. If it is, returns related format string. Else returns `formatName` string
     * without any change.
     * @private
     * @param {?} formatName format name or format pattern string
     * @return {?} formatting pattern string
     */
    function (formatName) {
        if (!FromatNames[formatName]) {
            return formatName;
        }
        return FromatNames[formatName];
    };
    /**
     * Formatting the date using `format` method of it with proper formatting pattern created from `format`
     * @param value a Jalali Date object or an instance of `Date` object or any class implementing that interface
     * @param format format name or format pattern string
     */
    /**
     * Formatting the date using `format` method of it with proper formatting pattern created from `format`
     * @param {?} value a Jalali Date object or an instance of `Date` object or any class implementing that interface
     * @param {?=} format format name or format pattern string
     * @return {?}
     */
    JdatePipe.prototype.transform = /**
     * Formatting the date using `format` method of it with proper formatting pattern created from `format`
     * @param {?} value a Jalali Date object or an instance of `Date` object or any class implementing that interface
     * @param {?=} format format name or format pattern string
     * @return {?}
     */
    function (value, format) {
        if (format === void 0) { format = 'mediumDate'; }
        if (!(value instanceof JDate)) {
            value = new JDate(value);
        }
        // @ts-ignore
        return value.format(JdatePipe.convertNameToFormat(format));
    };
    JdatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'jdate'
                },] }
    ];
    return JdatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPersianModule = /** @class */ (function () {
    function NgxPersianModule() {
    }
    NgxPersianModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [PersianLetterDirective, PersianNumbersDirective, FaNumPipe, EnNumPipe, IRCurrencyPipe, NationalCodePipe, JdatePipe],
                    imports: [],
                    exports: [PersianLetterDirective, PersianNumbersDirective, FaNumPipe, EnNumPipe, IRCurrencyPipe, NationalCodePipe, JdatePipe]
                },] }
    ];
    return NgxPersianModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * When mobile phone number is not valid this error will throw.
 */
var /**
 * When mobile phone number is not valid this error will throw.
 */
InvalidMobilePhoneNumberError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(InvalidMobilePhoneNumberError, _super);
    function InvalidMobilePhoneNumberError() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var _this = _super.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(params)) || this;
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        // @ts-ignore
        if (Error.captureStackTrace) {
            // @ts-ignore
            Error.captureStackTrace(_this, InvalidMobilePhoneNumberError);
        }
        _this.message = 'This phone number is not valid.';
        return _this;
    }
    return InvalidMobilePhoneNumberError;
}(Error));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This error will throw when there is no valid mobile operator for inputted mobile phone number.
 */
var /**
 * This error will throw when there is no valid mobile operator for inputted mobile phone number.
 */
InvalidMobileOperatorError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(InvalidMobileOperatorError, _super);
    function InvalidMobileOperatorError() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var _this = _super.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(params)) || this;
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        // @ts-ignore
        if (Error.captureStackTrace) {
            // @ts-ignore
            Error.captureStackTrace(_this, InvalidMobileOperatorError);
        }
        _this.message = 'Operator of this number is not recognizable.';
        return _this;
    }
    return InvalidMobileOperatorError;
}(Error));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var operatorsNames = {
    irancell: 'ایرانسل',
    mci: 'همراه اول',
    talia: 'تالیا',
    rightel: 'رایتل',
    spadan: 'اسپادان',
    tkc: 'شبکه مستقل تلفن همراه کیش',
    shatel: 'شاتل',
    aptel: 'آپتل',
    azartel: 'آذرتل',
    samantel: 'سامانتل',
    lotustel: 'لوتوس‌تل',
    anarestan: 'انارستان',
};
/**
 * A constant object. Keys are Mobile operator names and values are arrays those keep mobile codes.
 * @type {?}
 */
var MobileCodes = {
    irancell: ['0901', '0902', '0903', '0904', '0905', '0930', '0933', '0935', '0936', '0937', '0938', '0939', '0941'],
    mci: ['0910', '0911', '0912', '0913', '0914', '0915', '0916', '0917', '0918', '0919', '0990', '0991', '0992'],
    talia: ['0932'],
    rightel: ['0920', '0921', '0922'],
    spadan: ['0931'],
    tkc: ['0934'],
    shatel: ['099810', '099811', '099812'],
    aptel: ['099910', '099911', '099913'],
    azartel: ['099914'],
    samantel: ['099996', '099997', '099998', '099999'],
    lotustel: ['09990'],
    anarestan: ['09944']
};
/**
 * This service using for validating phone numbers sold by Iranian Mobile operators.
 *
 * You can get operator name and validation result of a phone number by methods of this service.
 */
var MobilePhoneNumberService = /** @class */ (function () {
    function MobilePhoneNumberService() {
    }
    /**
     * This method only checks if phoneNumber follows valid pattern. means starting by +98 or 0, then a 9 digit and then 9 digits.
     * This method will not check validity of the phoneNumber code and can accept invalid strings those only locking like phone numbers and
     * in reality are not a valid phone number.
     * @link isValidPhoneNumber
     * @param phoneNumber Digits in this string should be english digits.
     */
    /**
     * This method only checks if phoneNumber follows valid pattern. means starting by +98 or 0, then a 9 digit and then 9 digits.
     * This method will not check validity of the phoneNumber code and can accept invalid strings those only locking like phone numbers and
     * in reality are not a valid phone number.
     * @link isValidPhoneNumber
     * @param {?} phoneNumber Digits in this string should be english digits.
     * @return {?}
     */
    MobilePhoneNumberService.prototype.isPhoneNumberPatternValid = /**
     * This method only checks if phoneNumber follows valid pattern. means starting by +98 or 0, then a 9 digit and then 9 digits.
     * This method will not check validity of the phoneNumber code and can accept invalid strings those only locking like phone numbers and
     * in reality are not a valid phone number.
     * @link isValidPhoneNumber
     * @param {?} phoneNumber Digits in this string should be english digits.
     * @return {?}
     */
    function (phoneNumber) {
        /** @type {?} */
        var generalRegex = new RegExp(/^((\+98|0)9\d{9})$/);
        return generalRegex.test(phoneNumber);
    };
    /**
     * Removes +98 from the phoneNumber and replaces it with a 0 character.
     * @param phoneNumber Digits in this string should be english digits.
     */
    /**
     * Removes +98 from the phoneNumber and replaces it with a 0 character.
     * @param {?} phoneNumber Digits in this string should be english digits.
     * @return {?}
     */
    MobilePhoneNumberService.prototype.normalizePhoneNumber = /**
     * Removes +98 from the phoneNumber and replaces it with a 0 character.
     * @param {?} phoneNumber Digits in this string should be english digits.
     * @return {?}
     */
    function (phoneNumber) {
        return phoneNumber.replace('+98', '0');
    };
    /**
     * Checks all codes of all operators in MobileCodes object. IF finds a matched code, returns persian or english name of that operator from
     * operatorsNames enum.
     * @return operator name in english or persian according to the nameInEnglish parameter
     * @throws InvalidMobileOperatorError if pattern is correct but operator code is not valid.
     * @throws InvalidMobilePhoneNumberError If pattern is not correct
     * @param phoneNumber Digits in this string should be english digits.
     * @param nameInEnglish if true, operator name will return in English. if false operator name will return in persian
     * @link MobileCodes
     * @link operatorsNames
     */
    /**
     * Checks all codes of all operators in MobileCodes object. IF finds a matched code, returns persian or english name of that operator from
     * operatorsNames enum.
     * @throws InvalidMobileOperatorError if pattern is correct but operator code is not valid. / InvalidMobilePhoneNumberError If pattern is not correct
     * @link MobileCodes / operatorsNames
     * @param {?} phoneNumber Digits in this string should be english digits.
     * @param {?=} nameInEnglish if true, operator name will return in English. if false operator name will return in persian
     * @return {?} operator name in english or persian according to the nameInEnglish parameter
     */
    MobilePhoneNumberService.prototype.getPhoneNumberOperator = /**
     * Checks all codes of all operators in MobileCodes object. IF finds a matched code, returns persian or english name of that operator from
     * operatorsNames enum.
     * @throws InvalidMobileOperatorError if pattern is correct but operator code is not valid. / InvalidMobilePhoneNumberError If pattern is not correct
     * @link MobileCodes / operatorsNames
     * @param {?} phoneNumber Digits in this string should be english digits.
     * @param {?=} nameInEnglish if true, operator name will return in English. if false operator name will return in persian
     * @return {?} operator name in english or persian according to the nameInEnglish parameter
     */
    function (phoneNumber, nameInEnglish) {
        var e_1, _a, e_2, _b;
        if (nameInEnglish === void 0) { nameInEnglish = false; }
        if (!this.isPhoneNumberPatternValid(phoneNumber)) {
            throw new InvalidMobilePhoneNumberError();
        }
        phoneNumber = this.normalizePhoneNumber(phoneNumber);
        try {
            for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(Object.keys(MobileCodes)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var operator = _d.value;
                try {
                    for (var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(MobileCodes[operator]), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var code = _f.value;
                        if (phoneNumber.indexOf(code) === 0) {
                            return nameInEnglish ? operator : operatorsNames[operator];
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        throw new InvalidMobileOperatorError();
    };
    /**
     * @return If phoneNumber follows correct pattern and has valid operator, return true. Otherwise returns false.
     * @param phoneNumber Digits in this string should be english digits.
     * @link getPhoneNumberOperator
     */
    /**
     * @link getPhoneNumberOperator
     * @param {?} phoneNumber Digits in this string should be english digits.
     * @return {?} If phoneNumber follows correct pattern and has valid operator, return true. Otherwise returns false.
     */
    MobilePhoneNumberService.prototype.isValidPhoneNumber = /**
     * @link getPhoneNumberOperator
     * @param {?} phoneNumber Digits in this string should be english digits.
     * @return {?} If phoneNumber follows correct pattern and has valid operator, return true. Otherwise returns false.
     */
    function (phoneNumber) {
        try {
            this.getPhoneNumberOperator(phoneNumber);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    MobilePhoneNumberService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ MobilePhoneNumberService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MobilePhoneNumberService_Factory() { return new MobilePhoneNumberService(); }, token: MobilePhoneNumberService, providedIn: "root" });
    return MobilePhoneNumberService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * When mobile phone number is not valid this error will throw.
 */
var /**
 * When mobile phone number is not valid this error will throw.
 */
InvalidNationalCodeError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(InvalidNationalCodeError, _super);
    function InvalidNationalCodeError(nationalCode) {
        if (nationalCode === void 0) { nationalCode = ''; }
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var _this = _super.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(params)) || this;
        _this.nationalCode = nationalCode;
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        // @ts-ignore
        if (Error.captureStackTrace) {
            // @ts-ignore
            Error.captureStackTrace(_this, InvalidNationalCodeError);
        }
        _this.message = "The national code value (" + _this.nationalCode + ") is not a valid national code.";
        return _this;
    }
    return InvalidNationalCodeError;
}(Error));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * For validating Iranian National code (number), you can use this service in your components or every other places using DI or not.
 */
var NationalCodeService = /** @class */ (function () {
    function NationalCodeService() {
    }
    /**
     *
     * [We are using for loop instead of match or split because it has better performance according to this link]{@link https://stackoverflow.com/a/46312614/5400597}
     * @return true if all characters of the `input` are equal and input length is greater than 1. Otherwise returns false.
     * @param input
     */
    /**
     *
     * [We are using for loop instead of match or split because it has better performance according to this link]{\@link https://stackoverflow.com/a/46312614/5400597}
     * @private
     * @param {?} input
     * @return {?} true if all characters of the `input` are equal and input length is greater than 1. Otherwise returns false.
     */
    NationalCodeService.prototype._is_repetitive = /**
     *
     * [We are using for loop instead of match or split because it has better performance according to this link]{\@link https://stackoverflow.com/a/46312614/5400597}
     * @private
     * @param {?} input
     * @return {?} true if all characters of the `input` are equal and input length is greater than 1. Otherwise returns false.
     */
    function (input) {
        if (input.length < 2) {
            return false;
        }
        /** @type {?} */
        var firstChar = input.charAt(0);
        for (var i = 1; i < input.length; i++) {
            if (input.charAt(i) !== firstChar) {
                return false;
            }
        }
        return true;
    };
    /**
     * This method adds zero character at the beginning of the input until the length of the result reach to 10.
     *
     * This method removes spaces from right and left sides of the input.
     *
     * ATTENTION: This method doesn't any validation about correctness of the input if it has correct length (between 8 and 10).
     * @param nationalCode a number with at most 10 digits or a string with at most 10 character.
     * @return a string with length equal to 10.
     * @throws InvalidNationalCodeError when length of the input value is greater than 10.
     */
    /**
     * This method adds zero character at the beginning of the input until the length of the result reach to 10.
     *
     * This method removes spaces from right and left sides of the input.
     *
     * ATTENTION: This method doesn't any validation about correctness of the input if it has correct length (between 8 and 10).
     * @throws InvalidNationalCodeError when length of the input value is greater than 10.
     * @param {?} nationalCode a number with at most 10 digits or a string with at most 10 character.
     * @return {?} a string with length equal to 10.
     */
    NationalCodeService.prototype.normalize = /**
     * This method adds zero character at the beginning of the input until the length of the result reach to 10.
     *
     * This method removes spaces from right and left sides of the input.
     *
     * ATTENTION: This method doesn't any validation about correctness of the input if it has correct length (between 8 and 10).
     * @throws InvalidNationalCodeError when length of the input value is greater than 10.
     * @param {?} nationalCode a number with at most 10 digits or a string with at most 10 character.
     * @return {?} a string with length equal to 10.
     */
    function (nationalCode) {
        if (!nationalCode) {
            throw new InvalidNationalCodeError();
        }
        nationalCode = nationalCode.toString();
        nationalCode = nationalCode.trim();
        /** @type {?} */
        var nationalCodeLength = nationalCode.length;
        if (nationalCodeLength > 10 || nationalCodeLength < 8) {
            throw new InvalidNationalCodeError(nationalCode);
        }
        return '0'.repeat(10 - nationalCodeLength) + nationalCode;
    };
    /**
     * This method first normalizes the input using `normalize` method and implicitly checks input length, So you DO NOT NEED to
     * normalize input before, but this will not make any bad effect.
     *
     * [Then checking validation of the input using algorithm described in this link]{@link http://www.aliarash.com/article/codemeli/codemeli.htm}
     * @param nationalCode
     */
    /**
     * This method first normalizes the input using `normalize` method and implicitly checks input length, So you DO NOT NEED to
     * normalize input before, but this will not make any bad effect.
     *
     * [Then checking validation of the input using algorithm described in this link]{\@link http://www.aliarash.com/article/codemeli/codemeli.htm}
     * @param {?} nationalCode
     * @return {?}
     */
    NationalCodeService.prototype.isValid = /**
     * This method first normalizes the input using `normalize` method and implicitly checks input length, So you DO NOT NEED to
     * normalize input before, but this will not make any bad effect.
     *
     * [Then checking validation of the input using algorithm described in this link]{\@link http://www.aliarash.com/article/codemeli/codemeli.htm}
     * @param {?} nationalCode
     * @return {?}
     */
    function (nationalCode) {
        if (!nationalCode) {
            return false;
        }
        nationalCode = nationalCode.toString();
        if (this._is_repetitive(nationalCode)) {
            return false;
        }
        try {
            nationalCode = this.normalize(nationalCode); // Normalizing the input and checking input length validation implicitly.
        }
        catch (e) {
            return false; // Input length is not in the valid range.
        }
        /** @type {?} */
        var multiplicationResult = 0;
        for (var i = 0; i < 9; i++) {
            multiplicationResult += parseInt(nationalCode.charAt(i), 10) * (10 - i);
        }
        /** @type {?} */
        var reminder = multiplicationResult % 11;
        /** @type {?} */
        var controlNum = parseInt(nationalCode.charAt(9));
        /** @type {?} */
        var desiredControlNum = reminder;
        if (reminder > 1) {
            desiredControlNum = 11 - reminder;
        }
        return desiredControlNum === controlNum;
    };
    NationalCodeService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ NationalCodeService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NationalCodeService_Factory() { return new NationalCodeService(); }, token: NationalCodeService, providedIn: "root" });
    return NationalCodeService;
}());


//# sourceMappingURL=ngx-persian.js.map


/***/ }),

/***/ "./node_modules/persian-time-ago-pipe/esm5/persian-time-ago-pipe.js":
/*!**************************************************************************!*\
  !*** ./node_modules/persian-time-ago-pipe/esm5/persian-time-ago-pipe.js ***!
  \**************************************************************************/
/*! exports provided: PersianTimeAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersianTimeAgoPipe", function() { return PersianTimeAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PersianTimeAgoPipe = /** @class */ (function () {
    /**
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     */
    function PersianTimeAgoPipe(changeDetectorRef, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    PersianTimeAgoPipe.prototype.transform = function (value) {
        var _this = this;
        this.removeTimer();
        var /** @type {?} */ d = new Date(value);
        var /** @type {?} */ now = new Date();
        var /** @type {?} */ seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        var /** @type {?} */ timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.ngZone.run(function () { return _this.changeDetectorRef.markForCheck(); });
                }, timeToUpdate);
            }
            return null;
        });
        var /** @type {?} */ minutes = Math.round(Math.abs(seconds / 60));
        var /** @type {?} */ hours = Math.round(Math.abs(minutes / 60));
        var /** @type {?} */ days = Math.round(Math.abs(hours / 24));
        var /** @type {?} */ months = Math.round(Math.abs(days / 30.416));
        var /** @type {?} */ years = Math.round(Math.abs(days / 365));
        if (Number.isNaN(seconds)) {
            return '';
        }
        else if (seconds <= 45) {
            return 'چند ثانیه قبل';
        }
        else if (seconds <= 90) {
            return 'دقیقه ای پیش';
        }
        else if (minutes <= 45) {
            return minutes + ' دقیقه پیش';
        }
        else if (minutes <= 90) {
            return 'ساعتی پیش';
        }
        else if (hours <= 22) {
            return hours + ' ساعت پیش';
        }
        else if (hours <= 36) {
            return 'روزی پیش';
        }
        else if (days <= 25) {
            return days + ' روز پیش';
        }
        else if (days <= 45) {
            return 'یک ماه پیش';
        }
        else if (days <= 345) {
            return months + ' ماه پیش';
        }
        else if (days <= 545) {
            return 'یک سال پیش';
        }
        else {
            // (days > 545)
            return years + ' سال پیش';
        }
    };
    /**
     * @return {?}
     */
    PersianTimeAgoPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    /**
     * @return {?}
     */
    PersianTimeAgoPipe.prototype.removeTimer = function () {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    };
    /**
     * @param {?} seconds
     * @return {?}
     */
    PersianTimeAgoPipe.prototype.getSecondsUntilUpdate = function (seconds) {
        var /** @type {?} */ min = 60;
        var /** @type {?} */ hr = min * 60;
        var /** @type {?} */ day = hr * 24;
        if (seconds < min) {
            // less than 1 min, update every 2 secs
            return 2;
        }
        else if (seconds < hr) {
            // less than an hour, update every 30 secs
            return 30;
        }
        else if (seconds < day) {
            // less then a day, update every 5 mins
            return 300;
        }
        else {
            // update every hour
            return 3600;
        }
    };
    return PersianTimeAgoPipe;
}());
PersianTimeAgoPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'persianTimeAgo',
                pure: false
            },] },
];
/** @nocollapse */
PersianTimeAgoPipe.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=persian-time-ago-pipe.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@cms/cmsComponents/core/site/add/coreSiteAdd.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@cms/cmsComponents/core/site/add/coreSiteAdd.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"form-action-layouts\">\r\n    <div class=\"row text-left\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"content-header\">\r\n        ساخت وب سایت جدید    \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row text-left\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h4 class=\"card-title\" id=\"from-actions-top-left\">اطلاعات وب سایت</h4>\r\n            <div class=\"alert alert-info\" role=\"alert\">\r\n              <strong>در ساخت وب سایت  دقت کنید.</strong>\r\n            </div>\r\n            <p class=\"mb-0\">\r\n              به صورت \r\n              پیش فرض هر کاربر می تواند یک وب سایت داشته باشد ولی در چندین سایت کاربر یاشد\r\n            </p>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <div class=\"px-3\">\r\n              <form *ngIf=\"dataModel?.Item\"  #SiteAddForm=\"ngForm\" (ngSubmit)=\"onSubmit()\"  class=\"form\">\r\n                <div class=\"form-actions top\">\r\n                  <button type=\"button\" class=\"btn btn-raised btn-warning mr-1\">\r\n                    <i class=\"ft-x\"></i> انصراف\r\n                  </button>\r\n                  <button type=\"submit\" class=\"btn btn-raised btn-primary\">\r\n                    <i class=\"fa fa-check-square-o\"></i> ذخیره\r\n                  </button>\r\n                </div>\r\n                \r\n                <div class=\"form-body\">\r\n                  <h4 class=\"form-section\"><i class=\"ft-user\"></i> اطلاعات اولیه</h4>\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group col-md-6 mb-2\">\r\n                      <label for=\"projectinput1\">عنوان وب سایت</label>\r\n                      <input type=\"text\" [(ngModel)]=\"dataModel.Item.Title\" id=\"Title\" class=\"form-control\" placeholder=\"وب سایت شرکت ....\" name=\"Title\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group col-md-12 mb-2\">\r\n                      <label for=\"projectinput3\">توضیحات</label>\r\n                      <textarea type=\"text\"  [(ngModel)]=\"dataModel.Item.Description\"  id=\"Description\" class=\"form-control\" name=\"Description\">\r\n                        \r\n                          </textarea>\r\n                    </div>\r\n                    \r\n                  </div>\r\n  \r\n                  <h4 class=\"form-section\"><i class=\"ft-file-text\"></i> دامنه</h4>\r\n  \r\n                  <div class=\"row\">\r\n                    <div *ngIf=\"dataModelLoad\"  class=\"form-group col-md-4 mb-2 \" style=\"   direction: ltr;\">\r\n                        <label for=\"projectinput6\">نوع وب سایت</label>\r\n                        <select #SiteCategory [(ngModel)]=\"dataModel.Item.LinkSiteCategoryId\"  id=\"projectinput6\" name=\"interested\" class=\"form-control \" (change)='clickSelectSiteCategory(SiteCategory.value)' >\r\n                          <option *ngFor=\"let item of dataModelCategory.ListItems; index as i;\" value=\"{{item.Id}}\" >{{item.Title}}</option>\r\n   \r\n                        </select>\r\n                      </div>\r\n                  </div>\r\n  \r\n                  <div class=\"row\">\r\n                    <div class=\"form-group col-md-4 mb-2 \" style=\"   direction: ltr;\">\r\n                      <label for=\"projectinput6\">دامنه</label>\r\n                      <select  [(ngModel)]=\"dataModel.Item.Domain\" id=\"Domain\" name=\"Domain\" class=\"form-control \">\r\n                        <option value=\"\" selected >انتخاب کنید</option>\r\n                        <option *ngFor=\"let item of dataModelDomains;\" value=\"{{item.Domain}}\">{{item.Domain}}</option>\r\n                      </select>\r\n                     \r\n                    </div>\r\n  \r\n                    <div class=\"form-group col-md-4 mb-2\" style=\"   direction: ltr;\">\r\n                        <label for=\"projectinput5\">زیر دامنه</label>\r\n                        <input  [(ngModel)]=\"dataModel.Item.SubDomain\"  type=\"text\" id=\"SubDomain\" class=\"form-control\" placeholder=\"test\" name=\"SubDomain\">\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 mb-2 \" style=\"   direction: ltr;\">\r\n                        <label for=\"projectinput6\">-</label>\r\n                        <select id=\"projectinput6\" name=\"interested\" class=\"form-control \">\r\n                          <option value=\"http\">http://</option>\r\n                          <option value=\"https\">https://</option>\r\n                          \r\n                        </select>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"form-actions button\">\r\n                    <button type=\"button\" class=\"btn btn-raised btn-warning mr-1\">\r\n                      <i class=\"ft-x\"></i> انصراف\r\n                    </button>\r\n                    <button type=\"submit\" class=\"btn btn-raised btn-primary\">\r\n                      <i class=\"fa fa-check-square-o\"></i> ذخیره\r\n                    </button>\r\n                  </div>\r\n    \r\n               \r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"col-md-6\">\r\n        <div *ngIf=\"dataModelModule?.ListItems\" class=\"card\" >\r\n          <div class=\"card-header\">\r\n            <h4 class=\"card-title\" id=\"from-actions-bottom-right\">پروفایل کاربر</h4>\r\n            <div class=\"alert alert-info\" role=\"alert\">\r\n              <strong>ماژول های پیش فرض برای نوع وب سایت </strong>\r\n            </div>\r\n  \r\n            <p class=\"mb-0\">در انتخاب نوع وب سایت دقت لازم را داشته باشید</p>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <div class=\"px-3\">\r\n  \r\n                <div class=\"form-body\">\r\n                  <h4 class=\"form-section\"><i class=\"ft-info\"></i> لیست ماژول ها</h4>\r\n                  <ul  class=\"list-group\">\r\n                    <li *ngFor=\"let item of dataModelModule.ListItems; index as i; \" class=\"list-group-item\">{{item.Title}}</li>\r\n                   \r\n                  </ul>\r\n                </div>\r\n  \r\n                \r\n  \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@cms/cmsComponents/core/site/edit/coreSiteEdit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@cms/cmsComponents/core/site/edit/coreSiteEdit.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@cms/cmsComponents/core/site/list/coreSiteList.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@cms/cmsComponents/core/site/list/coreSiteList.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\r\n<section id=\"filter\" class=\"mb-3\">\r\n  <div class=\"row text-left\">\r\n      <div class=\"col-12\">\r\n          <div class=\"content-header\">گزینه فیلتر</div>\r\n      </div>\r\n  </div>\r\n  <div class=\"row\">\r\n      <div *ngIf=\"dataModelSite?.IsSuccess\" class=\"col-sm-12\" >\r\n          <input type='text' style='padding:8px;margin:15px auto;width:30%;' placeholder='ستون نام را فیلتر کنید' \r\n          />\r\n          <ngx-datatable #table class='bootstrap' [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n              [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='dataModelSite.ListItems'>\r\n          </ngx-datatable>\r\n          <!-- <ngx-datatable\r\n          class=\"material\"\r\n          [rows]=\"dataModelSite.ListItems\"\r\n          [columns]=\"columns\"\r\n          [columnMode]=\"ColumnMode.force\"\r\n          [headerHeight]=\"50\"\r\n          [summaryRow]=\"true\"\r\n          [summaryHeight]=\"55\"\r\n          [footerHeight]=\"50\"\r\n          rowHeight=\"auto\"\r\n          [externalPaging]=\"true\"\r\n          [count]=\"page.totalElements\"\r\n          [offset]=\"page.pageNumber\"\r\n          [limit]=\"page.size\"\r\n          (page)=\"setPage($event)\"\r\n        >\r\n        </ngx-datatable> -->\r\n      </div>\r\n  </div>\r\n</section>\r\n<!-- Filter Datatable Options Ends -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@cms/cmsComponents/core/site/select/select.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@cms/cmsComponents/core/site/select/select.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Columns section start -->\r\n<section id=\"columns\">\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-12 mt-3 mb-1\">\r\n      <div class=\"content-header\">انتخاب وب سایت</div>\r\n      <div *ngIf=\"!(dataModel?.ListItems)\" >\r\n        در حال بررسی سایتهایی که شما در آن عضویت دارید\r\n\r\n      </div>\r\n      <div *ngIf=\"dataModel?.ListItems?.length == 0\">\r\n        <p  class=\"content-sub-header\">\r\n          حساب کاربری شما در هیچ وب سایتی عضویت ندارد\r\n          <br>\r\n         برای خود وب سایت ایجاد کنید\r\n\r\n        </p>\r\n        <app-cms-site-add [dateInput]=\"{AddFirstSite:true,onActionAddFirstSite:onActionAddFirstSite}\"></app-cms-site-add>\r\n\r\n      </div>\r\n      <div *ngIf=\"dataModel?.ListItems?.length > 0\" >\r\n\r\n        <p class=\"content-sub-header\">\r\n          حساب کاربری شما در کلیه وب سایتهای زیر عضویت دارد\r\n          <br>\r\n          نسبت به دسترسی شما در آن وب سایت و فعالیتی که در نظر دارید وب سایت را انتخاب کنید\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row text-left\">\r\n    <div class=\"col-md-12 mt-1\">\r\n\r\n      <div *ngIf=\"dataModel?.ListItems?.length > 0\"class=\"card-columns\">\r\n        <div *ngFor=\"let item of dataModel.ListItems; index as i; trackBy: trackByFn\" class=\"card\">\r\n          <div class=\"card-content\">         \r\n            <div class=\"card-body\">\r\n              <h4 class=\"card-title\">{{item.Title}}</h4>\r\n              <p class=\"card-text\">\r\n               {{item.Description}}\r\n              </p>\r\n                <br>\r\n                <p class=\"bg-info\">شناسه :{{item.Id}}</p>\r\n                <p class=\"bg-success\">ساخت :{{item.CreatedDate | persianTimeAgo}}</p>\r\n                <p class=\"bg-danger\">انقضا :{{item.ExpirationDate | jdate }}</p>\r\n          \r\n                <br>{{item.SubDomain}}.{{item.Domain}}\r\n                <br>\r\n              \r\n              <a (click)=\"clickSelectSite(item)\" class=\"btn btn-outline-warning\">وارد شوید</a>\r\n            </div>\r\n            <img (click)=\"clickSelectSite(item)\" class=\"card-img-top img-fluid\" src=\"{{item.MainImageSrc}}\" alt=\"Card image cap\" >\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- Columns section end -->"

/***/ }),

/***/ "./src/app/@cms/cmsCommon/pipe/PersianDatePipe/persian-date.pipe.ts":
/*!**************************************************************************!*\
  !*** ./src/app/@cms/cmsCommon/pipe/PersianDatePipe/persian-date.pipe.ts ***!
  \**************************************************************************/
/*! exports provided: PersianDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersianDate", function() { return PersianDate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _persian_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persian-date.service */ "./src/app/@cms/cmsCommon/pipe/PersianDatePipe/persian-date.service.ts");



/*
  Generated class for the PersianDate pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
// tslint:disable-next-line: use-pipe-transform-interface
var PersianDate = /** @class */ (function () {
    /**
     *
     */
    function PersianDate(persianCalendarService) {
        this.persianCalendarService = persianCalendarService;
    }
    /*
      Takes a value and convert it to
     */
    PersianDate.prototype.transform = function (value) {
        var d = new Date(value);
        return this.persianCalendarService.PersianCalendar(d);
    };
    PersianDate.ctorParameters = function () { return [
        { type: _persian_date_service__WEBPACK_IMPORTED_MODULE_2__["PersianCalendarService"] }
    ]; };
    PersianDate = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'persianDate'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_persian_date_service__WEBPACK_IMPORTED_MODULE_2__["PersianCalendarService"]])
    ], PersianDate);
    return PersianDate;
}());



/***/ }),

/***/ "./src/app/@cms/cmsCommon/pipe/PersianDatePipe/persian-date.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/@cms/cmsCommon/pipe/PersianDatePipe/persian-date.service.ts ***!
  \*****************************************************************************/
/*! exports provided: PersianCalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersianCalendarService", function() { return PersianCalendarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PersianCalendarService = /** @class */ (function () {
    function PersianCalendarService() {
        this.weekDayNames = ['شنبه', 'یکشنبه', 'دوشنبه',
            'سه شنبه', 'چهارشنبه',
            'پنج شنبه', 'جمعه'];
        this.monthNames = [
            'فروردین',
            'اردیبهشت',
            'خرداد',
            'تیر',
            'مرداد',
            'شهریور',
            'مهر',
            'آبان',
            'آذر',
            'دی',
            'بهمن',
            'اسفند'
        ];
        this.strWeekDay = null;
        this.strMonth = null;
        this.day = null;
        this.month = null;
        this.myMonth = null;
        this.year = null;
        this.ld = null;
        this.farsiDate = null;
        this.today = new Date();
        this.gregorianYear = null;
        this.gregorianMonth = null;
        this.gregorianDate = null;
        this.WeekDay = null;
        this.buf1 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        this.buf2 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    }
    PersianCalendarService.prototype.PersianCalendar = function (gregorianDate) {
        this.today = new Date(gregorianDate);
        this.gregorianYear = this.today.getFullYear();
        this.gregorianMonth = this.today.getMonth() + 1;
        this.gregorianDate = this.today.getDate();
        this.WeekDay = this.today.getDay();
        this.toPersian(gregorianDate);
        return this.strWeekDay + ' ' + this.day + ' ' + this.strMonth + ' ' + this.year;
    };
    PersianCalendarService.prototype.PersianCalendarSmall = function (gregorianDate) {
        this.today = new Date(gregorianDate);
        this.gregorianYear = this.today.getFullYear();
        this.gregorianMonth = this.today.getMonth() + 1;
        this.gregorianDate = this.today.getDate();
        this.WeekDay = this.today.getDay();
        this.toPersian(gregorianDate);
        return this.day + '-' + this.myMonth + '-' + this.year;
    };
    PersianCalendarService.prototype.PersianCalendarVerySmall = function (gregorianDate) {
        this.today = new Date(gregorianDate);
        this.gregorianYear = this.today.getFullYear();
        this.gregorianMonth = this.today.getMonth() + 1;
        this.gregorianDate = this.today.getDate();
        this.WeekDay = this.today.getDay();
        this.toPersian(gregorianDate);
        return this.day + ' ' + this.strMonth;
    };
    PersianCalendarService.prototype.PersianCalendarMonth = function (gregorianDate) {
        this.today = new Date(gregorianDate);
        this.gregorianYear = this.today.getFullYear();
        this.gregorianMonth = this.today.getMonth() + 1;
        this.gregorianDate = this.today.getDate();
        this.WeekDay = this.today.getDay();
        this.toPersian(gregorianDate);
        return this.strMonth;
    };
    PersianCalendarService.prototype.toPersian = function (gregorianDate) {
        if ((this.gregorianYear % 4) !== 0) {
            this.farsiDate = this.func1();
        }
        else {
            this.farsiDate = this.func2();
        }
        this.strMonth = this.monthNames[Math.floor(this.month - 1)];
        this.myMonth = Math.floor(this.month);
        // this.strWeekDay = this.weekDayNames[this.WeekDay + 1];
        if (this.WeekDay === 6) {
            this.strWeekDay = this.weekDayNames[0];
        }
        else {
            this.strWeekDay = this.weekDayNames[this.WeekDay + 1];
        }
    };
    PersianCalendarService.prototype.func1 = function () {
        this.day = this.buf1[this.gregorianMonth - 1] + this.gregorianDate;
        if (this.day > 79) {
            this.day = this.day - 79;
            if (this.day <= 186) {
                var day2 = this.day;
                this.month = (day2 / 31) + 1;
                this.day = (day2 % 31);
                if (day2 % 31 === 0) {
                    this.month--;
                    this.day = 31;
                }
                this.year = this.gregorianYear - 621;
            }
            else {
                var day2 = this.day - 186;
                this.month = (day2 / 30) + 7;
                this.day = (day2 % 30);
                if (day2 % 30 === 0) {
                    this.month = (day2 / 30) + 6;
                    this.day = 30;
                }
                this.year = this.gregorianYear - 621;
            }
        }
        else {
            this.ld = this.gregorianYear > 1996 && this.gregorianYear % 4 === 1 ? 11 : 10;
            var day2 = this.day + this.ld;
            this.month = (day2 / 30) + 10;
            this.day = (day2 % 30);
            if (day2 % 30 === 0) {
                this.month--;
                this.day = 30;
            }
            this.year = this.gregorianYear - 622;
        }
        var fullDate = this.day + '/' + Math.floor(this.month) + '/' + this.year;
        return fullDate;
    };
    PersianCalendarService.prototype.func2 = function () {
        this.day = this.buf2[this.gregorianMonth - 1] + this.gregorianDate;
        this.ld = this.gregorianYear >= 1996 ? 79 : 80;
        if (this.day > this.ld) {
            this.day = this.day - this.ld;
            if (this.day <= 186) {
                var day2 = this.day;
                this.month = (day2 / 31) + 1;
                this.day = (day2 % 31);
                if (day2 % 31 === 0) {
                    this.month--;
                    this.day = 31;
                }
                this.year = this.gregorianYear - 621;
            }
            else {
                var day2 = this.day - 186;
                this.month = (day2 / 30) + 7;
                this.day = (day2 % 30);
                if (day2 % 30 === 0) {
                    this.month--;
                    this.day = 30;
                }
                this.year = this.gregorianYear - 621;
            }
            var fullDate = this.day + '/' + Math.floor(this.month) + '/' + this.year;
            return fullDate;
        }
        else {
            var day2 = this.day + 10;
            this.month = (day2 / 30) + 10;
            this.day = (day2 % 30);
            if (day2 % 30 === 0) {
                this.month--;
                this.day = 30;
            }
            this.year = this.gregorianYear - 622;
        }
    };
    PersianCalendarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PersianCalendarService);
    return PersianCalendarService;
}());



/***/ }),

/***/ "./src/app/@cms/cmsComponents/core/site/add/coreSiteAdd.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/@cms/cmsComponents/core/site/add/coreSiteAdd.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-content .tab-pane {\n  padding-top: 20px; }\n\n.alert {\n  padding: 8px;\n  margin-bottom: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQGNtcy9jbXNDb21wb25lbnRzL2NvcmUvc2l0ZS9hZGQvRDpcXFNvdXJjZV9LYXJhdmlcXEdpdEh1YlxcTnRrQ21zLkNsaWVudC5XZWIuQ29udHJvbFBhbmVsXFxjcGFuZWx2NFNvdXJjZS9zcmNcXGFwcFxcQGNtc1xcY21zQ29tcG9uZW50c1xcY29yZVxcc2l0ZVxcYWRkXFxjb3JlU2l0ZUFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNFLFlBQVk7RUFDWixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0BjbXMvY21zQ29tcG9uZW50cy9jb3JlL3NpdGUvYWRkL2NvcmVTaXRlQWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1jb250ZW50IC50YWItcGFuZXtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/@cms/cmsComponents/core/site/add/coreSiteAdd.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/@cms/cmsComponents/core/site/add/coreSiteAdd.component.ts ***!
  \***************************************************************************/
/*! exports provided: CoreSiteAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSiteAddComponent", function() { return CoreSiteAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_cms_cmsModels_base_filterModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@cms/cmsModels/base/filterModel */ "./src/app/@cms/cmsModels/base/filterModel.ts");
/* harmony import */ var app_cms_cmsModels_base_errorExcptionResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@cms/cmsModels/base/errorExcptionResult */ "./src/app/@cms/cmsModels/base/errorExcptionResult.ts");
/* harmony import */ var app_cms_cmsCommon_helper_publicHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@cms/cmsCommon/helper/publicHelper */ "./src/app/@cms/cmsCommon/helper/publicHelper.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _cmsService_core_coreSite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../cmsService/core/coreSite.service */ "./src/app/@cms/cmsService/core/coreSite.service.ts");
/* harmony import */ var _cmsService_core_coreSiteCategoryModule_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../cmsService/core/coreSiteCategoryModule.service */ "./src/app/@cms/cmsService/core/coreSiteCategoryModule.service.ts");
/* harmony import */ var _cmsService_core_coreModule_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../cmsService/core/coreModule.service */ "./src/app/@cms/cmsService/core/coreModule.service.ts");
/* harmony import */ var _cmsService_core_coreSiteCategory_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../cmsService/core/coreSiteCategory.service */ "./src/app/@cms/cmsService/core/coreSiteCategory.service.ts");











var CoreSiteAddComponent = /** @class */ (function () {
    function CoreSiteAddComponent(alertService, publicHelper, coreSiteService, coreSiteCategoryModuleService, coreModuleService, coreSiteCategoryService) {
        this.alertService = alertService;
        this.publicHelper = publicHelper;
        this.coreSiteService = coreSiteService;
        this.coreSiteCategoryModuleService = coreSiteCategoryModuleService;
        this.coreModuleService = coreModuleService;
        this.coreSiteCategoryService = coreSiteCategoryService;
        this.subManager = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.filteModel = new app_cms_cmsModels_base_filterModel__WEBPACK_IMPORTED_MODULE_3__["FilterModel"]();
        this.dataModel = new app_cms_cmsModels_base_errorExcptionResult__WEBPACK_IMPORTED_MODULE_4__["ErrorExcptionResult"]();
        this.dataModelLoad = false;
        this.dataModelDomains = [];
    }
    Object.defineProperty(CoreSiteAddComponent.prototype, "dateInput", {
        get: function () {
            return this.dateModleInput;
        },
        set: function (model) {
            this.dateModleInput = model;
        },
        enumerable: true,
        configurable: true
    });
    CoreSiteAddComponent.prototype.ngOnInit = function () {
        this.GetModelInfo();
        this.GetDomainList();
        this.CoreSiteCategoryGetAll();
    };
    CoreSiteAddComponent.prototype.GetDomainList = function () {
        var _this = this;
        this.coreSiteService.ServiceDomains(0).subscribe(function (next) {
            if (next.IsSuccess) {
                _this.dataModelDomains = next.ListItems;
            }
        }, function (error) {
            _this.alertService.error(_this.publicHelper.CheckError(error), "خطا در دریافت لیست دامنه های قابل استفاده");
        });
    };
    CoreSiteAddComponent.prototype.GetModelInfo = function () {
        var _this = this;
        this.coreSiteService.ServiceViewModel().subscribe(function (next) {
            if (next.IsSuccess) {
                _this.dataModel = next;
            }
        }, function (error) {
            _this.alertService.error(_this.publicHelper.CheckError(error), "خطا در دریافت مدل");
        });
    };
    CoreSiteAddComponent.prototype.CoreSiteCategoryGetAll = function () {
        var _this = this;
        this.subManager.add(this.coreSiteCategoryService.ServiceGetAll(this.filteModel).subscribe(function (next) {
            if (next.IsSuccess) {
                _this.dataModelCategory = next;
                _this.dataModelLoad = true;
                _this.alertService.info("اطلاعات دریافت شد", "توجه");
            }
        }, function (error) {
            _this.alertService.error(_this.publicHelper.CheckError(error), "خطا در دریافت اطلاعات وب سایتها");
        }));
    };
    CoreSiteAddComponent.prototype.clickSelectSiteCategory = function (Id) {
        var _this = this;
        var filterModel = new app_cms_cmsModels_base_filterModel__WEBPACK_IMPORTED_MODULE_3__["FilterModel"]();
        filterModel.RowPerPage = 50;
        this.dataModelModule = new app_cms_cmsModels_base_errorExcptionResult__WEBPACK_IMPORTED_MODULE_4__["ErrorExcptionResult"]();
        this.subManager.add(this.coreModuleService
            .ServiceGetAllByCategorySiteId(Id, filterModel)
            .subscribe(function (next2) {
            if (next2.IsSuccess) {
                _this.dataModelModule = next2;
                _this.dataModelLoad = true;
                _this.alertService.info("اطلاعات دریافت شد", "توجه");
            }
        }, function (error2) {
            _this.alertService.error(_this.publicHelper.CheckError(error2), "خطا در دریافت اطلاعات وب سایتها");
        }));
    };
    CoreSiteAddComponent.prototype.onSubmit = function () {
        var _this = this;
        var AddFirstSite = false;
        if (this.dateModleInput && this.dateModleInput.AddFirstSite)
            AddFirstSite = true;
        if (AddFirstSite) {
            this.subManager.add(this.coreSiteService.ServiceAddFirstSite(this.dataModel.Item).subscribe(function (next) {
                _this.dateModleInput.onActionAddFirstSite(next);
            }, function (error) {
                _this.alertService.error(_this.publicHelper.CheckError(error), "خطا در ساخت وب سایت");
            }));
        }
        else {
            this.subManager.add(this.coreSiteService.ServiceAdd(this.dataModel.Item).subscribe(function (next) {
                if (next.IsSuccess) {
                }
            }, function (error) {
                _this.alertService.error(_this.publicHelper.CheckError(error), "خطا در ساخت وب سایت");
            }));
        }
    };
    CoreSiteAddComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: app_cms_cmsCommon_helper_publicHelper__WEBPACK_IMPORTED_MODULE_5__["PublicHelper"] },
        { type: _cmsService_core_coreSite_service__WEBPACK_IMPORTED_MODULE_7__["CoreSiteService"] },
        { type: _cmsService_core_coreSiteCategoryModule_service__WEBPACK_IMPORTED_MODULE_8__["CoreSiteCategoryModuleService"] },
        { type: _cmsService_core_coreModule_service__WEBPACK_IMPORTED_MODULE_9__["CoreModuleService"] },
        { type: _cmsService_core_coreSiteCategory_service__WEBPACK_IMPORTED_MODULE_10__["CoreSiteCategoryService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], CoreSiteAddComponent.prototype, "dateInput", null);
    CoreSiteAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-cms-site-add",
            template: __webpack_require__(/*! raw-loader!./coreSiteAdd.component.html */ "./node_modules/raw-loader/index.js!./src/app/@cms/cmsComponents/core/site/add/coreSiteAdd.component.html"),
            styles: [__webpack_require__(/*! ./coreSiteAdd.component.scss */ "./src/app/@cms/cmsComponents/core/site/add/coreSiteAdd.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            app_cms_cmsCommon_helper_publicHelper__WEBPACK_IMPORTED_MODULE_5__["PublicHelper"],
            _cmsService_core_coreSite_service__WEBPACK_IMPORTED_MODULE_7__["CoreSiteService"],
            _cmsService_core_coreSiteCategoryModule_service__WEBPACK_IMPORTED_MODULE_8__["CoreSiteCategoryModuleService"],
            _cmsService_core_coreModule_service__WEBPACK_IMPORTED_MODULE_9__["CoreModuleService"],
            _cmsService_core_coreSiteCategory_service__WEBPACK_IMPORTED_MODULE_10__["CoreSiteCategoryService"]])
    ], CoreSiteAddComponent);
    return CoreSiteAddComponent;
}());



/***/ }),

/***/ "./src/app/@cms/cmsComponents/core/site/coreSite.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/@cms/cmsComponents/core/site/coreSite.module.ts ***!
  \*****************************************************************/
/*! exports provided: CoreSiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSiteModule", function() { return CoreSiteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _coreSite_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coreSite.routing */ "./src/app/@cms/cmsComponents/core/site/coreSite.routing.ts");
/* harmony import */ var _list_coreSiteList_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/coreSiteList.component */ "./src/app/@cms/cmsComponents/core/site/list/coreSiteList.component.ts");
/* harmony import */ var _add_coreSiteAdd_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add/coreSiteAdd.component */ "./src/app/@cms/cmsComponents/core/site/add/coreSiteAdd.component.ts");
/* harmony import */ var _edit_coreSiteEdit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/coreSiteEdit.component */ "./src/app/@cms/cmsComponents/core/site/edit/coreSiteEdit.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select/select.component */ "./src/app/@cms/cmsComponents/core/site/select/select.component.ts");
/* harmony import */ var persian_time_ago_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! persian-time-ago-pipe */ "./node_modules/persian-time-ago-pipe/esm5/persian-time-ago-pipe.js");
/* harmony import */ var ngx_persian__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-persian */ "./node_modules/ngx-persian/fesm5/ngx-persian.js");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-archwizard */ "./node_modules/angular-archwizard/fesm5/angular-archwizard.js");
/* harmony import */ var _siteCategory_select_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../siteCategory/select/select.component */ "./src/app/@cms/cmsComponents/core/siteCategory/select/select.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var app_cms_cmsCommon_pipe_PersianDatePipe_persian_date_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/@cms/cmsCommon/pipe/PersianDatePipe/persian-date.pipe */ "./src/app/@cms/cmsCommon/pipe/PersianDatePipe/persian-date.pipe.ts");

















var CoreSiteModule = /** @class */ (function () {
    function CoreSiteModule() {
    }
    CoreSiteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _coreSite_routing__WEBPACK_IMPORTED_MODULE_5__["CoreSiteRoutes"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular_archwizard__WEBPACK_IMPORTED_MODULE_12__["ArchwizardModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_15__["NgxDatatableModule"]
            ],
            declarations: [
                _list_coreSiteList_component__WEBPACK_IMPORTED_MODULE_6__["CoreSiteListComponent"],
                _add_coreSiteAdd_component__WEBPACK_IMPORTED_MODULE_7__["CoreSiteAddComponent"],
                _edit_coreSiteEdit_component__WEBPACK_IMPORTED_MODULE_8__["CoreSiteEditComponent"],
                _select_select_component__WEBPACK_IMPORTED_MODULE_9__["CoreSiteSelectComponent"],
                app_cms_cmsCommon_pipe_PersianDatePipe_persian_date_pipe__WEBPACK_IMPORTED_MODULE_16__["PersianDate"],
                persian_time_ago_pipe__WEBPACK_IMPORTED_MODULE_10__["PersianTimeAgoPipe"],
                ngx_persian__WEBPACK_IMPORTED_MODULE_11__["JdatePipe"],
                _siteCategory_select_select_component__WEBPACK_IMPORTED_MODULE_13__["CoreSiteCategorySelectComponent"],
            ]
        })
    ], CoreSiteModule);
    return CoreSiteModule;
}());



/***/ }),

/***/ "./src/app/@cms/cmsComponents/core/site/coreSite.routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/@cms/cmsComponents/core/site/coreSite.routing.ts ***!
  \******************************************************************/
/*! exports provided: CoreSiteRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSiteRoutes", function() { return CoreSiteRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select/select.component */ "./src/app/@cms/cmsComponents/core/site/select/select.component.ts");
/* harmony import */ var _edit_coreSiteEdit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/coreSiteEdit.component */ "./src/app/@cms/cmsComponents/core/site/edit/coreSiteEdit.component.ts");
/* harmony import */ var _list_coreSiteList_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/coreSiteList.component */ "./src/app/@cms/cmsComponents/core/site/list/coreSiteList.component.ts");
/* harmony import */ var _add_coreSiteAdd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/coreSiteAdd.component */ "./src/app/@cms/cmsComponents/core/site/add/coreSiteAdd.component.ts");







var routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: _list_coreSiteList_component__WEBPACK_IMPORTED_MODULE_5__["CoreSiteListComponent"],
                data: {
                    title: 'login to Panle',
                },
            },
            {
                path: 'add',
                component: _add_coreSiteAdd_component__WEBPACK_IMPORTED_MODULE_6__["CoreSiteAddComponent"],
                data: {
                    title: 'Register New Acount',
                },
            },
            {
                path: 'edit',
                component: _edit_coreSiteEdit_component__WEBPACK_IMPORTED_MODULE_4__["CoreSiteEditComponent"],
                data: {
                    title: 'forgot password You Acount',
                },
            },
            {
                path: 'select',
                component: _select_select_component__WEBPACK_IMPORTED_MODULE_3__["CoreSiteSelectComponent"],
                data: {
                    title: 'forgot password You Acount',
                },
            },
        ],
    },
];
var CoreSiteRoutes = /** @class */ (function () {
    function CoreSiteRoutes() {
    }
    CoreSiteRoutes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CoreSiteRoutes);
    return CoreSiteRoutes;
}());



/***/ }),

/***/ "./src/app/@cms/cmsComponents/core/site/edit/coreSiteEdit.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/@cms/cmsComponents/core/site/edit/coreSiteEdit.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BjbXMvY21zQ29tcG9uZW50cy9jb3JlL3NpdGUvZWRpdC9jb3JlU2l0ZUVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/@cms/cmsComponents/core/site/edit/coreSiteEdit.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/@cms/cmsComponents/core/site/edit/coreSiteEdit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CoreSiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSiteEditComponent", function() { return CoreSiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoreSiteEditComponent = /** @class */ (function () {
    function CoreSiteEditComponent() {
    }
    CoreSiteEditComponent.prototype.ngOnInit = function () {
    };
    CoreSiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cms-site-edit',
            template: __webpack_require__(/*! raw-loader!./coreSiteEdit.component.html */ "./node_modules/raw-loader/index.js!./src/app/@cms/cmsComponents/core/site/edit/coreSiteEdit.component.html"),
            styles: [__webpack_require__(/*! ./coreSiteEdit.component.scss */ "./src/app/@cms/cmsComponents/core/site/edit/coreSiteEdit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoreSiteEditComponent);
    return CoreSiteEditComponent;
}());



/***/ }),

/***/ "./src/app/@cms/cmsComponents/core/site/list/coreSiteList.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/@cms/cmsComponents/core/site/list/coreSiteList.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BjbXMvY21zQ29tcG9uZW50cy9jb3JlL3NpdGUvbGlzdC9jb3JlU2l0ZUxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/@cms/cmsComponents/core/site/list/coreSiteList.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/@cms/cmsComponents/core/site/list/coreSiteList.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CoreSiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSiteListComponent", function() { return CoreSiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var app_cms_cmsCommon_helper_publicHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@cms/cmsCommon/helper/publicHelper */ "./src/app/@cms/cmsCommon/helper/publicHelper.ts");
/* harmony import */ var _cmsService_core_coreSite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../cmsService/core/coreSite.service */ "./src/app/@cms/cmsService/core/coreSite.service.ts");
/* harmony import */ var _cmsService_core_coreSiteCategoryModule_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../cmsService/core/coreSiteCategoryModule.service */ "./src/app/@cms/cmsService/core/coreSiteCategoryModule.service.ts");
/* harmony import */ var _cmsService_core_coreModule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../cmsService/core/coreModule.service */ "./src/app/@cms/cmsService/core/coreModule.service.ts");
/* harmony import */ var _cmsService_core_coreSiteCategory_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../cmsService/core/coreSiteCategory.service */ "./src/app/@cms/cmsService/core/coreSiteCategory.service.ts");
/* harmony import */ var app_cms_cmsModels_base_filterModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@cms/cmsModels/base/filterModel */ "./src/app/@cms/cmsModels/base/filterModel.ts");
/* harmony import */ var app_cms_cmsModels_base_errorExcptionResult__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@cms/cmsModels/base/errorExcptionResult */ "./src/app/@cms/cmsModels/base/errorExcptionResult.ts");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_10__);











var CoreSiteListComponent = /** @class */ (function () {
    function CoreSiteListComponent(alertService, publicHelper, coreSiteService, coreSiteCategoryModuleService, coreModuleService, coreSiteCategoryService) {
        this.alertService = alertService;
        this.publicHelper = publicHelper;
        this.coreSiteService = coreSiteService;
        this.coreSiteCategoryModuleService = coreSiteCategoryModuleService;
        this.coreModuleService = coreModuleService;
        this.coreSiteCategoryService = coreSiteCategoryService;
        // Table Column Titles
        this.columns = [
            {
                prop: "Title",
            },
            {
                name: "Domain",
            },
            {
                name: "SubDomain",
            },
        ];
        this.filteModel = new app_cms_cmsModels_base_filterModel__WEBPACK_IMPORTED_MODULE_8__["FilterModel"]();
        this.dataModelSite = new app_cms_cmsModels_base_errorExcptionResult__WEBPACK_IMPORTED_MODULE_9__["ErrorExcptionResult"]();
    }
    CoreSiteListComponent.prototype.ngOnInit = function () {
        this.DataGetAll();
    };
    CoreSiteListComponent.prototype.DataGetAll = function () {
        var _this = this;
        this.coreSiteService.ServiceGetAll(this.filteModel).subscribe(function (next) {
            if (next.IsSuccess) {
                _this.dataModelSite = next;
            }
        }, function (error) {
            _this.alertService.error(_this.publicHelper.CheckError(error), "برروی خطا در دریافت اطلاعات");
        });
    };
    CoreSiteListComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: app_cms_cmsCommon_helper_publicHelper__WEBPACK_IMPORTED_MODULE_3__["PublicHelper"] },
        { type: _cmsService_core_coreSite_service__WEBPACK_IMPORTED_MODULE_4__["CoreSiteService"] },
        { type: _cmsService_core_coreSiteCategoryModule_service__WEBPACK_IMPORTED_MODULE_5__["CoreSiteCategoryModuleService"] },
        { type: _cmsService_core_coreModule_service__WEBPACK_IMPORTED_MODULE_6__["CoreModuleService"] },
        { type: _cmsService_core_coreSiteCategory_service__WEBPACK_IMPORTED_MODULE_7__["CoreSiteCategoryService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_10__["DatatableComponent"])
    ], CoreSiteListComponent.prototype, "table", void 0);
    CoreSiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-cms-site-list",
            template: __webpack_require__(/*! raw-loader!./coreSiteList.component.html */ "./node_modules/raw-loader/index.js!./src/app/@cms/cmsComponents/core/site/list/coreSiteList.component.html"),
            styles: [__webpack_require__(/*! ./coreSiteList.component.scss */ "./src/app/@cms/cmsComponents/core/site/list/coreSiteList.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            app_cms_cmsCommon_helper_publicHelper__WEBPACK_IMPORTED_MODULE_3__["PublicHelper"],
            _cmsService_core_coreSite_service__WEBPACK_IMPORTED_MODULE_4__["CoreSiteService"],
            _cmsService_core_coreSiteCategoryModule_service__WEBPACK_IMPORTED_MODULE_5__["CoreSiteCategoryModuleService"],
            _cmsService_core_coreModule_service__WEBPACK_IMPORTED_MODULE_6__["CoreModuleService"],
            _cmsService_core_coreSiteCategory_service__WEBPACK_IMPORTED_MODULE_7__["CoreSiteCategoryService"]])
    ], CoreSiteListComponent);
    return CoreSiteListComponent;
}());



/***/ }),

/***/ "./src/app/@cms/cmsComponents/core/site/select/select.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/@cms/cmsComponents/core/site/select/select.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BjbXMvY21zQ29tcG9uZW50cy9jb3JlL3NpdGUvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/@cms/cmsComponents/core/site/select/select.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/@cms/cmsComponents/core/site/select/select.component.ts ***!
  \*************************************************************************/
/*! exports provided: CoreSiteSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSiteSelectComponent", function() { return CoreSiteSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cmsService_core_coreSite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../cmsService/core/coreSite.service */ "./src/app/@cms/cmsService/core/coreSite.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_cms_cmsModels_base_filterModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@cms/cmsModels/base/filterModel */ "./src/app/@cms/cmsModels/base/filterModel.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var app_cms_cmsCommon_helper_publicHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@cms/cmsCommon/helper/publicHelper */ "./src/app/@cms/cmsCommon/helper/publicHelper.ts");
/* harmony import */ var app_cms_cmsModels_core_authModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@cms/cmsModels/core/authModel */ "./src/app/@cms/cmsModels/core/authModel.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_cms_cmsService_core_coreCpMainMenu_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/@cms/cmsService/core/coreCpMainMenu.service */ "./src/app/@cms/cmsService/core/coreCpMainMenu.service.ts");











var CoreSiteSelectComponent = /** @class */ (function () {
    function CoreSiteSelectComponent(coreSiteService, alertService, publicHelper, router, coreCpMainMenuService) {
        this.coreSiteService = coreSiteService;
        this.alertService = alertService;
        this.publicHelper = publicHelper;
        this.router = router;
        this.coreCpMainMenuService = coreCpMainMenuService;
        this.subManager = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.filteModel = new app_cms_cmsModels_base_filterModel__WEBPACK_IMPORTED_MODULE_4__["FilterModel"]();
    }
    CoreSiteSelectComponent.prototype.ngOnDestroy = function () {
        this.subManager.unsubscribe();
    };
    CoreSiteSelectComponent.prototype.ngOnInit = function () {
        this.CoreSiteGetAll();
    };
    CoreSiteSelectComponent.prototype.CoreSiteGetAll = function () {
        var _this = this;
        this.subManager.add(this.coreSiteService.ServiceGetAll(this.filteModel).subscribe(function (next) {
            if (next.IsSuccess) {
                _this.dataModel = next;
                _this.alertService.info("اطلاعات دریافت شد", "توجه");
            }
        }, function (error) {
            _this.alertService.error(_this.publicHelper.CheckError(error), "خطا در دریافت اطلاعات وب سایتها");
        }));
    };
    CoreSiteSelectComponent.prototype.trackByFn = function () { };
    CoreSiteSelectComponent.prototype.clickSelectSite = function (model) {
        var _this = this;
        var AuthModel;
        AuthModel = new app_cms_cmsModels_core_authModel__WEBPACK_IMPORTED_MODULE_7__["AuthRenewTokenModel"]();
        AuthModel.SiteId = model["Id"];
        this.subManager.add(this.coreSiteService.ServiceSelectSite(AuthModel).subscribe(function (next) {
            if (next.IsSuccess) {
                _this.router.navigate([environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].cmsUiConfig.Pathdashboard]);
                _this.coreCpMainMenuService.ServiceGetMenu(null);
            }
        }, function (error) {
            _this.alertService.error(_this.publicHelper.CheckError(error), "خطا در ورود");
        }));
    };
    CoreSiteSelectComponent.prototype.onActionAddFirstSite = function (model) {
        var _this = this;
        if (model.IsSuccess) {
            var AuthModel = void 0;
            AuthModel = new app_cms_cmsModels_core_authModel__WEBPACK_IMPORTED_MODULE_7__["AuthRenewTokenModel"]();
            AuthModel.SiteId = model["Id"];
            this.subManager.add(this.coreSiteService.ServiceSelectSite(AuthModel).subscribe(function (next) {
                if (next.IsSuccess) {
                    _this.router.navigate([environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].cmsUiConfig.Pathdashboard]);
                    _this.coreCpMainMenuService.ServiceGetMenu(null);
                }
            }, function (error) {
                _this.alertService.error(_this.publicHelper.CheckError(error), "خطا در ورود");
            }));
        }
    };
    CoreSiteSelectComponent.ctorParameters = function () { return [
        { type: _cmsService_core_coreSite_service__WEBPACK_IMPORTED_MODULE_2__["CoreSiteService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: app_cms_cmsCommon_helper_publicHelper__WEBPACK_IMPORTED_MODULE_6__["PublicHelper"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: app_cms_cmsService_core_coreCpMainMenu_service__WEBPACK_IMPORTED_MODULE_10__["CoreCpMainMenuService"] }
    ]; };
    CoreSiteSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-cms-site-select",
            template: __webpack_require__(/*! raw-loader!./select.component.html */ "./node_modules/raw-loader/index.js!./src/app/@cms/cmsComponents/core/site/select/select.component.html"),
            styles: [__webpack_require__(/*! ./select.component.scss */ "./src/app/@cms/cmsComponents/core/site/select/select.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cmsService_core_coreSite_service__WEBPACK_IMPORTED_MODULE_2__["CoreSiteService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            app_cms_cmsCommon_helper_publicHelper__WEBPACK_IMPORTED_MODULE_6__["PublicHelper"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            app_cms_cmsService_core_coreCpMainMenu_service__WEBPACK_IMPORTED_MODULE_10__["CoreCpMainMenuService"]])
    ], CoreSiteSelectComponent);
    return CoreSiteSelectComponent;
}());



/***/ }),

/***/ "./src/app/@cms/cmsService/core/coreSite.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/@cms/cmsService/core/coreSite.service.ts ***!
  \**********************************************************/
/*! exports provided: CoreSiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSiteService", function() { return CoreSiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _base_apiServerBase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_base/apiServerBase.service */ "./src/app/@cms/cmsService/_base/apiServerBase.service.ts");
/* harmony import */ var app_cms_cmsModels_base_filterModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@cms/cmsModels/base/filterModel */ "./src/app/@cms/cmsModels/base/filterModel.ts");






var CoreSiteService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CoreSiteService, _super);
    function CoreSiteService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subManager = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        return _this;
    }
    CoreSiteService.prototype.getModuleCotrolerUrl = function () {
        return 'CoreSite';
    };
    CoreSiteService.prototype.ngOnDestroy = function () {
        this.subManager.unsubscribe();
    };
    CoreSiteService.prototype.ServiceSelectSite = function (model) {
        return this.cmsAuthService.ServiceRenewToken(model);
    };
    CoreSiteService.prototype.ServiceWebScreenshot = function (model) {
        var _this = this;
        return this.http
            .post(this.baseUrl + this.getModuleCotrolerUrl() + "/WebScreenshot/", model, { headers: this.getHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ret) {
            return _this.errorExcptionResultCheck(ret);
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)));
    };
    CoreSiteService.prototype.ServiceAddFirstSite = function (model) {
        var _this = this;
        return this.http
            .post(this.baseUrl + this.getModuleCotrolerUrl() + "/AddFirstSite/", model, { headers: this.getHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ret) {
            return _this.errorExcptionResultCheck(ret);
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)));
    };
    CoreSiteService.prototype.ServiceGetAllWithAlias = function (model) {
        var _this = this;
        if (model == null)
            model = new app_cms_cmsModels_base_filterModel__WEBPACK_IMPORTED_MODULE_5__["FilterModel"]();
        return this.http
            .post(this.baseUrl + this.getModuleCotrolerUrl() + "/GetAllWithAlias", model, {
            headers: this.getHeaders(),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(this.configApiRetry), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ret) {
            return _this.errorExcptionResultCheck(ret);
        }));
    };
    CoreSiteService.prototype.ServiceGetAllChildWithAlias = function (model) {
        var _this = this;
        if (model == null)
            model = new app_cms_cmsModels_base_filterModel__WEBPACK_IMPORTED_MODULE_5__["FilterModel"]();
        return this.http
            .post(this.baseUrl + this.getModuleCotrolerUrl() + "/GetAllChildWithAlias", model, {
            headers: this.getHeaders(),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(this.configApiRetry), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ret) {
            return _this.errorExcptionResultCheck(ret);
        }));
    };
    CoreSiteService.prototype.ServiceSearchNew = function (model) {
        var _this = this;
        if (model == null)
            model = new app_cms_cmsModels_base_filterModel__WEBPACK_IMPORTED_MODULE_5__["FilterModel"]();
        return this.http
            .post(this.baseUrl + this.getModuleCotrolerUrl() + "/SearchNew", model, {
            headers: this.getHeaders(),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(this.configApiRetry), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ret) {
            return _this.errorExcptionResultCheck(ret);
        }));
    };
    CoreSiteService.prototype.ServiceSearch = function (model) {
        var _this = this;
        return this.http
            .post(this.baseUrl + this.getModuleCotrolerUrl() + "/Search", model, {
            headers: this.getHeaders(),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(this.configApiRetry), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ret) {
            return _this.errorExcptionResultCheck(ret);
        }));
    };
    CoreSiteService.prototype.ServiceDomain = function () {
        var _this = this;
        return this.http
            .get(this.baseUrl + this.getModuleCotrolerUrl() + "/Domain", {
            headers: this.getHeaders(),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(this.configApiRetry), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ret) {
            return _this.errorExcptionResultCheck(ret);
        }));
    };
    CoreSiteService.prototype.ServiceDomains = function (id) {
        var _this = this;
        return this.http
            .get(this.baseUrl + this.getModuleCotrolerUrl() + "/Domains/" + id, { headers: this.getHeaders() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ret) {
            return _this.errorExcptionResultCheck(ret);
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError)));
    };
    CoreSiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], CoreSiteService);
    return CoreSiteService;
}(_base_apiServerBase_service__WEBPACK_IMPORTED_MODULE_4__["ApiServerBaseService"]));



/***/ })

}]);
//# sourceMappingURL=core-site-coreSite-module.js.map