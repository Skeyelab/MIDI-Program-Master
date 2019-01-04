(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <p>What is this? This is a browser based MIDI Program Change 'scratch pad' for your whole studio.\n        It will display program change data for all available MIDI inputs in real time, allow you store a snapshot, then\n        restore it.\n        When restore the snapshot, it will be sent to all available MIDI outputs.</p>\n      <p>\n        It uses <a href=\"http://djipco.github.io/webmidi/latest/classes/WebMidi.html\" target=\"_blank\">WebMidi.js</a> and\n        is running 100% in your browser. You can read the code on <a\n        href=\"https://github.com/Skeyelab/MIDI-Program-Master\" target=\"_blank\">GitHub</a> if you like.\n      </p>\n    </div>\n  </div>\n  <app-io-list (webMidiActive)=\"webMidiActive($event)\"></app-io-list>\n  <app-settings-live [ioConfig]=\"ioConfig\" [settings]=\"restoredSettings\" (settingsStored)=\"storedSettings = $event\"></app-settings-live>\n  <app-settings-stored [ioConfig]=\"ioConfig\" [settings]=\"storedSettings\" (settingsRestored)=\"restoredSettings = $event\"></app-settings-stored>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <button class=\"btn btn-secondary\" (click)=\"importJson()\">Import JSON file</button>\n      <input #fileInput accept=\"application/json\" type=\"file\" name=\"settings\" hidden (change)=\"fileChosen($event)\"/>\n    </div>\n  </div>\n\n</div>\n<footer class=\"container\">\n  <p>\n    <small>\n      Please report bugs here: <a href=\"https://github.com/Skeyelab/MIDI-Program-Master/issues\" target=\"_blank\">https://github.com/Skeyelab/MIDI-Program-Master/issues</a>\n    </small>\n  </p>\n  <p>\n    <small>Version 2.0</small>\n  </p>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.webMidiActive = function ($event) {
        this.ioConfig = $event;
    };
    AppComponent.prototype.importJson = function () {
        this.fileInput.nativeElement.click();
    };
    AppComponent.prototype.fileChosen = function () {
        var _this = this;
        if (this.fileInput.nativeElement.files && this.fileInput.nativeElement.files.length > 0) {
            var file = this.fileInput.nativeElement.files[0];
            var reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = function (event) {
                _this.storedSettings = JSON.parse(event.target['result']);
            };
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "fileInput", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_io_list_io_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/io-list/io-list.component */ "./src/app/components/io-list/io-list.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_settings_stored_setting_stored_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/settings-stored/setting-stored.component */ "./src/app/components/settings-stored/setting-stored.component.ts");
/* harmony import */ var _components_settings_live_settings_live_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/settings-live/settings-live.component */ "./src/app/components/settings-live/settings-live.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_io_list_io_list_component__WEBPACK_IMPORTED_MODULE_4__["IoListComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _components_settings_stored_setting_stored_component__WEBPACK_IMPORTED_MODULE_6__["SettingStoredComponent"],
                _components_settings_live_settings_live_component__WEBPACK_IMPORTED_MODULE_7__["SettingsLiveComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/io-list/io-list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/io-list/io-list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"enabled\">\n  <div class=\"col-12\">\n    <h2>IO</h2>\n  </div>\n  <div class=\"col-12 col-md-6\">\n    <table class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>Inputs</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let input of inputs\">\n        <td>{{input.name}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"col-12 col-md-6\">\n    <table class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>Outputs</th>\n      </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let output of outputs\">\n          <td>{{output.name}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"!enabled && error\">\n  <div class=\"col-12 col-md-6\">\n    <div class=\"alert-danger\">\n      <p>{{error}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/io-list/io-list.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/io-list/io-list.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW8tbGlzdC9pby1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/io-list/io-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/io-list/io-list.component.ts ***!
  \*********************************************************/
/*! exports provided: IoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IoListComponent", function() { return IoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var webmidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webmidi */ "./node_modules/webmidi/webmidi.min.js");
/* harmony import */ var webmidi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webmidi__WEBPACK_IMPORTED_MODULE_2__);



var IoListComponent = /** @class */ (function () {
    function IoListComponent() {
        this.inputs = [];
        this.outputs = [];
        this.webMidiActive = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    IoListComponent.prototype.ngOnInit = function () {
        this.enable();
    };
    IoListComponent.prototype.enable = function () {
        var _this = this;
        webmidi__WEBPACK_IMPORTED_MODULE_2__["enable"](function (err) {
            err ? _this.showError(err) : _this.success();
        });
    };
    IoListComponent.prototype.success = function () {
        this.enabled = true;
        this.inputs = webmidi__WEBPACK_IMPORTED_MODULE_2__["inputs"];
        this.outputs = webmidi__WEBPACK_IMPORTED_MODULE_2__["outputs"];
        this.webMidiActive.emit({
            inputs: this.inputs,
            outputs: this.outputs,
        });
    };
    IoListComponent.prototype.showError = function (err) {
        this.enabled = false;
        this.error = err;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], IoListComponent.prototype, "webMidiActive", void 0);
    IoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-io-list',
            template: __webpack_require__(/*! ./io-list.component.html */ "./src/app/components/io-list/io-list.component.html"),
            styles: [__webpack_require__(/*! ./io-list.component.scss */ "./src/app/components/io-list/io-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IoListComponent);
    return IoListComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"/\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-4\">\n          <img src=\"assets/images/apple-touch-icon.png\"/>\n        </div>\n        <div class=\"col-8\">\n          <h2>{{title}}</h2>\n        </div>\n      </div>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.title = 'Midi Program Master';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/settings-live/settings-live.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/settings-live/settings-live.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\" *ngIf=\"settings\">\n  <div class=\"col-12\">\n    <h2>Live settings</h2>\n    <table class=\"table table-striped\">\n      <thead>\n      <tr><th scope=\"col\"></th>\n        <ng-container *ngFor=\"let setting of settings\">\n          <th scope=\"col\" class=\"text-center font-weight-bold\" [ngClass]=\"{'bg-success text-white': setting.active}\">\n            {{setting.channel}}\n          </th>\n        </ng-container>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <th scope=\"row\" class=\"text-center font-weight-bold\">PC</th>\n        <td class=\"text-center\" *ngFor=\"let setting of settings\" [ngClass]=\"{'bg-success text-white': setting.active}\">\n          {{setting.programChange}}\n        </td>\n      </tr>\n      <tr>\n        <th scope=\"row\" class=\"text-center font-weight-bold\">MSB</th>\n        <td class=\"text-center\" *ngFor=\"let setting of settings\" [ngClass]=\"{'bg-success text-white': setting.active}\">\n          {{setting.bankSelectCoarse}}\n        </td>\n      </tr>\n      <tr>\n        <th scope=\"row\" class=\"text-center font-weight-bold\">LSB</th>\n        <td class=\"text-center\" *ngFor=\"let setting of settings\" [ngClass]=\"{'bg-success text-white': setting.active}\">\n          {{setting.bankSelectFine}}\n        </td>\n      </tr>\n      <tr>\n        <th scope=\"row\" class=\"text-center font-weight-bold\">CC</th>\n        <td class=\"text-center\" *ngFor=\"let setting of settings\" [ngClass]=\"{'bg-success text-white': setting.active}\">\n          {{setting.ccs.length}}\n        </td>\n      </tr>\n      </tbody>\n    </table>\n    <button class=\"btn btn-primary\" (click)=\"storeSettings()\">Store Settings</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/settings-live/settings-live.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/settings-live/settings-live.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MtbGl2ZS9zZXR0aW5ncy1saXZlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/settings-live/settings-live.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/settings-live/settings-live.component.ts ***!
  \*********************************************************************/
/*! exports provided: SettingsLiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsLiveComponent", function() { return SettingsLiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsLiveComponent = /** @class */ (function () {
    function SettingsLiveComponent(cd) {
        this.cd = cd;
        this.settings = [];
        this.amountOfChannels = 16;
        this.settingsStored = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SettingsLiveComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('ioConfig')) {
            this.generateChannels();
        }
    };
    SettingsLiveComponent.prototype.generateChannels = function () {
        var _this = this;
        this.settings = [];
        Array.from(Array(this.amountOfChannels).keys()).forEach(function (index) {
            _this.settings.push({
                channel: index + 1,
                ccs: [],
                active: false,
            });
        });
        this.enableInputListeners();
    };
    SettingsLiveComponent.prototype.enableInputListeners = function () {
        var _this = this;
        if (this.ioConfig) {
            this.ioConfig.inputs.forEach(function (input) {
                input.addListener('controlchange', 'all', function (e) {
                    var setting = this.settings.find(function (setting) { return setting.channel === e.channel; });
                    setting.active = true;
                    switch (e.controller.name) {
                        case 'bankselectcoarse':
                            if (setting) {
                                setting.bankSelectCoarse = e.value;
                            }
                            break;
                        case 'bankselectfine':
                            if (setting) {
                                setting.bankSelectFine = e.value;
                            }
                            break;
                        default:
                            var cc = setting.ccs.find(function (cc) { return cc.number === e.controller.number; });
                            if (cc) {
                                cc.value = e.value;
                            }
                            else {
                                setting.ccs.push({
                                    number: e.controller.number,
                                    value: e.value
                                });
                            }
                    }
                    this.cd.detectChanges();
                    //Force change detection inside event listener otherwise changes are not reflected in the view
                }.bind(_this));
                input.addListener('programchange', 'all', function (e) {
                    var setting = this.settings.find(function (setting) { return setting.channel === e.channel; });
                    if (setting) {
                        setting.programChange = e.value;
                        setting.ccs = [];
                        setting.active = true;
                    }
                    this.cd.detectChanges();
                    //Force change detection inside event listener otherwise changes are not reflected in the view
                }.bind(_this));
            });
        }
    };
    SettingsLiveComponent.prototype.storeSettings = function () {
        this.settingsStored.emit(JSON.parse(JSON.stringify(this.settings)));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SettingsLiveComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SettingsLiveComponent.prototype, "ioConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SettingsLiveComponent.prototype, "settingsStored", void 0);
    SettingsLiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings-live',
            template: __webpack_require__(/*! ./settings-live.component.html */ "./src/app/components/settings-live/settings-live.component.html"),
            styles: [__webpack_require__(/*! ./settings-live.component.scss */ "./src/app/components/settings-live/settings-live.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SettingsLiveComponent);
    return SettingsLiveComponent;
}());



/***/ }),

/***/ "./src/app/components/settings-stored/setting-stored.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/settings-stored/setting-stored.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\" *ngIf=\"settings && settings.length > 0\">\n  <div class=\"col-12\">\n    <h2>Stored settings</h2>\n    <table class=\"table table-striped\">\n      <thead>\n      <tr><th scope=\"col\"></th>\n        <ng-container *ngFor=\"let setting of settings\">\n          <th scope=\"col\" class=\"text-center font-weight-bold\" [ngClass]=\"{'bg-success text-white': setting.active}\">\n            {{setting.channel}}\n          </th>\n        </ng-container>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <th scope=\"row\" class=\"text-center font-weight-bold\">PC</th>\n        <td class=\"text-center\" *ngFor=\"let setting of settings\" [ngClass]=\"{'bg-success text-white': setting.active}\">\n          {{setting.programChange}}\n        </td>\n      </tr>\n      <tr>\n        <th scope=\"row\" class=\"text-center font-weight-bold\">MSB</th>\n        <td class=\"text-center\" *ngFor=\"let setting of settings\" [ngClass]=\"{'bg-success text-white': setting.active}\">\n          {{setting.bankSelectCoarse}}\n        </td>\n      </tr>\n      <tr>\n        <th scope=\"row\" class=\"text-center font-weight-bold\">LSB</th>\n        <td class=\"text-center\" *ngFor=\"let setting of settings\" [ngClass]=\"{'bg-success text-white': setting.active}\">\n          {{setting.bankSelectFine}}\n        </td>\n      </tr>\n      <tr>\n        <th scope=\"row\" class=\"text-center font-weight-bold\">CC</th>\n        <td class=\"text-center\" *ngFor=\"let setting of settings\" [ngClass]=\"{'bg-success text-white': setting.active}\">\n          {{setting.ccs.length}}\n        </td>\n      </tr>\n      </tbody>\n    </table>\n    <button class=\"btn btn-primary mr-2\" (click)=\"restoreSettings()\">Restore Settings</button>\n    <button class=\"btn btn-secondary mr-2\" (click)=\"downloadJson()\">Export JSON file</button>\n    <button class=\"btn btn-danger\" (click)=\"reset()\">Clear</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/settings-stored/setting-stored.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/settings-stored/setting-stored.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mtc3RvcmVkL3NldHRpbmctc3RvcmVkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/settings-stored/setting-stored.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/settings-stored/setting-stored.component.ts ***!
  \************************************************************************/
/*! exports provided: SettingStoredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingStoredComponent", function() { return SettingStoredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);



var SettingStoredComponent = /** @class */ (function () {
    function SettingStoredComponent() {
        this.settings = [];
        this.settingsRestored = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SettingStoredComponent.prototype.restoreSettings = function () {
        var _this = this;
        this.ioConfig.outputs.forEach(function (output) {
            _this.settings.forEach(function (setting) {
                if (setting.bankSelectCoarse) {
                    output.sendControlChange(0, setting.bankSelectCoarse, setting.channel);
                }
                if (setting.bankSelectFine) {
                    output.sendControlChange(32, setting.bankSelectFine, setting.bankSelectFine);
                }
                if (setting.programChange) {
                    output.sendProgramChange(setting.programChange, setting.channel);
                }
                setting.ccs.forEach(function (cc) {
                    output.sendControlChange(cc.number, cc.value, setting.channel);
                });
            });
            _this.settingsRestored.emit(_this.settings);
        });
    };
    SettingStoredComponent.prototype.downloadJson = function () {
        var blob = new Blob([JSON.stringify(this.settings)], { type: 'application/json;charset=utf-8' });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](blob, 'settings.json');
    };
    SettingStoredComponent.prototype.reset = function () {
        this.settings = [];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SettingStoredComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SettingStoredComponent.prototype, "ioConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SettingStoredComponent.prototype, "settingsRestored", void 0);
    SettingStoredComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings-stored',
            template: __webpack_require__(/*! ./setting-stored.component.html */ "./src/app/components/settings-stored/setting-stored.component.html"),
            styles: [__webpack_require__(/*! ./setting-stored.component.scss */ "./src/app/components/settings-stored/setting-stored.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingStoredComponent);
    return SettingStoredComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fraa/Git/MIDI-Program-Master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map