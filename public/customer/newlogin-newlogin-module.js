(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newlogin-newlogin-module"],{

/***/ "./src/app/newlogin/newlogin-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/newlogin/newlogin-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: NewloginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewloginRoutingModule", function() { return NewloginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _newlogin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newlogin.component */ "./src/app/newlogin/newlogin.component.ts");





const routes = [{ path: '', component: _newlogin_component__WEBPACK_IMPORTED_MODULE_2__["NewloginComponent"] }];
class NewloginRoutingModule {
}
NewloginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NewloginRoutingModule });
NewloginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NewloginRoutingModule_Factory(t) { return new (t || NewloginRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewloginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewloginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/newlogin/newlogin.component.ts":
/*!************************************************!*\
  !*** ./src/app/newlogin/newlogin.component.ts ***!
  \************************************************/
/*! exports provided: NewloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewloginComponent", function() { return NewloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NewloginComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewloginComponent.ɵfac = function NewloginComponent_Factory(t) { return new (t || NewloginComponent)(); };
NewloginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewloginComponent, selectors: [["app-newlogin"]], decls: 2, vars: 0, template: function NewloginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "newlogin works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld2xvZ2luL25ld2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewloginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-newlogin',
                templateUrl: './newlogin.component.html',
                styleUrls: ['./newlogin.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/newlogin/newlogin.module.ts":
/*!*********************************************!*\
  !*** ./src/app/newlogin/newlogin.module.ts ***!
  \*********************************************/
/*! exports provided: NewloginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewloginModule", function() { return NewloginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _newlogin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newlogin-routing.module */ "./src/app/newlogin/newlogin-routing.module.ts");
/* harmony import */ var _newlogin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newlogin.component */ "./src/app/newlogin/newlogin.component.ts");





class NewloginModule {
}
NewloginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NewloginModule });
NewloginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NewloginModule_Factory(t) { return new (t || NewloginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _newlogin_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewloginRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewloginModule, { declarations: [_newlogin_component__WEBPACK_IMPORTED_MODULE_3__["NewloginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _newlogin_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewloginRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewloginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_newlogin_component__WEBPACK_IMPORTED_MODULE_3__["NewloginComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _newlogin_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewloginRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=newlogin-newlogin-module.js.map