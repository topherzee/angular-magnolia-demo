webpackJsonp([1,4],{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "div{\n  font-family: sans-serif;\n  border:solid 2px blue;\n}\nlabel{\n  font-size: 0.7em;\n  text-transform: uppercase;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "div{\n  font-family: sans-serif;\n  border:solid 2px yellow;\n}\nlabel{\n  font-size: 0.7em;\n  text-transform: uppercase;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Comp 1</h3>\n  <label>Title:</label> {{title}}<br/>\n  <label>Price:</label> {{price}}<br/>\n</div>\n"

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Comp 2</h3>\n  <label>Title:</label> {{title}}<br/>\n  <label>Description:</label> {{description}}<br/>\n  <label>Price:</label> {{price}}<br/>\n</div>\n"

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comp1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Comp1Component = (function () {
    function Comp1Component(el) {
        this.el = el;
        var native = this.el.nativeElement;
        this.title = native.getAttribute("title");
        this.price = +native.getAttribute("price");
    }
    return Comp1Component;
}());
Comp1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: '[data-component]="comp1"',
        template: __webpack_require__(137),
        styles: [__webpack_require__(135)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _a || Object])
], Comp1Component);

var _a;
//# sourceMappingURL=comp1.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comp2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Comp2Component = (function () {
    function Comp2Component(el) {
        this.el = el;
        var native = this.el.nativeElement;
        this.title = native.getAttribute("title");
        this.description = native.getAttribute("description");
        this.price = +native.getAttribute("price");
    }
    Comp2Component.prototype.ngOnInit = function () {
        console.log("TEST:" + this.title);
    };
    return Comp2Component;
}());
Comp2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: '[data-component]="comp2"',
        template: __webpack_require__(138),
        styles: [__webpack_require__(136)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _a || Object])
], Comp2Component);

var _a;
//# sourceMappingURL=comp2.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 71;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_multi_loader__ = __webpack_require__(80);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
Promise.resolve(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]))
    .then(function (appModule) {
    var loader = new __WEBPACK_IMPORTED_MODULE_4__app_multi_loader__["a" /* MultiLoader */](appModule);
    loader.initialize();
});
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comp1_comp1_component__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comp2_comp2_component__ = __webpack_require__(49);
/* unused harmony export BOOTSTRAP_COMPONENTS_TOKEN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BOOTSTRAP_COMPONENTS_TOKEN = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["f" /* OpaqueToken */]('bootstrap_components');
var AppModule = (function () {
    function AppModule(resolver) {
        this.resolver = resolver;
    }
    AppModule.prototype.ngDoBootstrap = function () { };
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["g" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__comp1_comp1_component__["a" /* Comp1Component */],
            __WEBPACK_IMPORTED_MODULE_5__comp2_comp2_component__["a" /* Comp2Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__comp1_comp1_component__["a" /* Comp1Component */],
            __WEBPACK_IMPORTED_MODULE_5__comp2_comp2_component__["a" /* Comp2Component */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["h" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["h" /* ComponentFactoryResolver */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comp2_comp2_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comp1_comp1_component__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiLoader; });



var MultiLoader = (function () {
    function MultiLoader(appModule) {
        this.appModule = appModule;
        /*
        Ideally this would not be necessary.
        But I could not find a way to instantiate the class based on the
        data-component attribute.
        I tried eval() - but somehow the imports were not loaded yet or something.
        */
        this.COMPONENT_NAME_TO_CLASS_MAPPING = {
            "comp1": __WEBPACK_IMPORTED_MODULE_2__comp1_comp1_component__["a" /* Comp1Component */],
            "comp2": __WEBPACK_IMPORTED_MODULE_1__comp2_comp2_component__["a" /* Comp2Component */]
        };
    }
    MultiLoader.prototype.initialize = function () {
        var componentsWrapper = 'body';
        var content = document.querySelector(componentsWrapper);
        if (content) {
            var componentElements = document.querySelectorAll('[data-component]');
            this.bootstrapComponents(componentElements);
        }
    };
    MultiLoader.prototype.bootstrapComponents = function (els) {
        var _this = this;
        console.log("checkElements l=" + els.length);
        var _loop_1 = function () {
            console.log("el i:" + i);
            var el = els[i];
            var elID = el.getAttribute("id");
            var elCompName = el.getAttribute("data-component");
            console.log("el comp:" + elCompName + " id:" + elID);
            var appRef = this_1.appModule.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* ApplicationRef */]);
            var initStatus = this_1.appModule.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ApplicationInitStatus */]);
            initStatus.donePromise.then(function () {
                // Get the component factory and create it
                var compFactory = _this.appModule.componentFactoryResolver
                    .resolveComponentFactory(_this.COMPONENT_NAME_TO_CLASS_MAPPING[elCompName]);
                compFactory["factory"].selector = "#" + elID;
                appRef.bootstrap(compFactory);
            });
        };
        var this_1 = this;
        for (var i = 0; i < els.length; ++i) {
            _loop_1();
        }
    };
    return MultiLoader;
}());

//# sourceMappingURL=multi-loader.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[163]);
//# sourceMappingURL=main.bundle.js.map