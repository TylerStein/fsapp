webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container p-4 text-center mw-100 headboard\">\n  <h1 class=\"display-1\">FSApp</h1>\n  <p class=\"lead\">An environment for testing FreeSwitch</p>\n</div>\n<app-navbar></app-navbar>\n<alert></alert>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Quicksand:300,400,700);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  color: #FFFCC4;\n  background: #00585F;\n  font-family: \"Open Sans\", \"sans-serif\"; }\n\np {\n  font-family: \"Open Sans\", \"sans-serif\"; }\n\nh1, h2, h3, h4 {\n  font-family: \"Quicksand\", \"sans-serif\"; }\n\na, a:link, a:visited {\n  color: #FFFCC4;\n  transition: color 0.16s; }\n\na:hover, a:active {\n  color: #FF3800;\n  text-decoration: none; }\n\n.headboard {\n  color: #F0EDBB;\n  background: #009393;\n  box-shadow: 0 6px 12px 4px rgba(0, 0, 0, 0.3); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_alert_alert_component__ = __webpack_require__("../../../../../src/app/components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_phone_phone_component__ = __webpack_require__("../../../../../src/app/components/phone/phone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_web_socket_service__ = __webpack_require__("../../../../../src/app/services/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_phone_service__ = __webpack_require__("../../../../../src/app/services/phone.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Modules




//Components









//Guards

//Services





//Set up routes for the app
var appRoutes = [
    //Homepage path as default
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */] },
    //Other component paths
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */] },
    //Add AuthGuard activation when trying to navigate to these pages
    //Prevents access when the user is not logged in
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_11__components_search_search_component__["a" /* SearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'phone', component: __WEBPACK_IMPORTED_MODULE_12__components_phone_phone_component__["a" /* PhoneComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_alert_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_phone_phone_component__["a" /* PhoneComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__services_web_socket_service__["a" /* WebSocketService */],
            __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_16__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_17__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_18__services_phone_service__["a" /* PhoneService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\n  {{alert.message}}\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/alert/alert.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\n  margin-bottom: 0;\n  margin-top: 0; }\n\n.close {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_alert_model__ = __webpack_require__("../../../../../src/app/models/alert.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                //Clear alerts when empty alert is received
                _this.alerts = [];
                return;
            }
            //Add alert to array
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        //Set this.alerts to equal all alert that do not match the given object
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        switch (alert.type) {
            case __WEBPACK_IMPORTED_MODULE_1__models_alert_model__["a" /* AlertType */].Success:
                return 'alert alert-success';
            case __WEBPACK_IMPORTED_MODULE_1__models_alert_model__["a" /* AlertType */].Info:
                return 'alert alert-info';
            case __WEBPACK_IMPORTED_MODULE_1__models_alert_model__["a" /* AlertType */].Error:
                return 'alert alert-danger';
            case __WEBPACK_IMPORTED_MODULE_1__models_alert_model__["a" /* AlertType */].Warning:
                return 'alert alert-warning';
        }
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'alert',
        template: __webpack_require__("../../../../../src/app/components/alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/alert/alert.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4 \">\n  <h2>Welcome to your Dashboard</h2>\n  <div class=\"card mt-4\">\n    <div class=\"card-header\"><h4 class=\"mb-0\">User Details</h4></div>\n    <div class=\"card-body pb-0\">\n      <p>id: {{user.id}}</p>\n      <p>Name: {{user.name}}</p>\n      <p>Email: {{user.email}}</p>\n    </div>\n    <div class=\"card-footer\">\n      <button class=\"btn btn-danger w-100\" (click)=\"onDeleteAccount()\">Delete Account</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  color: #00585F; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(authService, alertService, router) {
        this.authService = authService;
        this.alertService = alertService;
        this.router = router;
        this.user = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (!this.user) {
            var userData = JSON.parse(localStorage.getItem('user'));
            this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]();
            this.user.id = userData.id;
            this.user.email = userData.email;
            this.user.name = userData.name;
            this.user.password = "";
        }
    };
    DashboardComponent.prototype.onDeleteAccount = function () {
        var _this = this;
        //Verify this account login
        this.authService.verifyUser(this.user, localStorage.getItem('token'), function (isVerified) {
            if (isVerified) {
                _this.authService.deleteUser(_this.user, function (success) {
                    if (success) {
                        _this.alertService.success('User account has been deleted', true);
                        _this.router.navigate(['/login']);
                    }
                    else {
                        _this.alertService.error('There was a problem deleting this user');
                    }
                });
            }
            else {
                _this.alertService.error('User data could not be verified, you do not have permission to delete this account!', false);
            }
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(validateService, authService, alertService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.alertService = alertService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* User */]();
        user.email = this.user.email;
        user.password = this.user.password;
        //Clear existing alerts
        this.alertService.clear();
        //Validate login inputs
        if (this.validateService.validateLogin(user)) {
            this.authService.logInUser(user, function (result) {
                console.log('authServiceLogIn res : ' + result);
                if (!result.success) {
                    //Problem with login info, display error
                    _this.alertService.error(result.message);
                }
                else {
                    _this.alertService.success('You are now logged in', true);
                    _this.router.navigate(['/dashboard']);
                }
            });
        }
        else {
            //Problem with login info, display error
            this.alertService.error('Please enter all fields', false);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark nav-shadow\">\n  <a class=\"navbar-brand\" href=\"#\">FSApp</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto navbar-left\">\n      <li class=\"nav-item\" >\n        <a class=\"nav-link\"[routerLink]=\"['/']\">Home</a>\n      </li>\n    </ul>\n\n    <ul class=\"navbar-nav  navbar-right\">\n      <li class=\"nav-item\" *ngIf=\"authService.isUserLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/phone']\">Phone</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.isUserLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/search']\">Search</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.isUserLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authService.isUserLoggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" (click)=\"logOutUser()\" [routerLink]=\"['/login']\">Logout</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.isUserLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.isUserLoggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Quicksand:300,400,700);", ""]);

// module
exports.push([module.i, "nav {\n  font-family: \"Quicksand\", \"sans-serif\";\n  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logOutUser = function () {
        this.authService.logOutUser();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/phone/phone.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ml-2 mr-2 mt-2\">\n<div class=\"row mb-2\">\n  <div class=\"col-1\">\n    <label for=\"dest_user\" class=\"m-0 p-0 lead float-right align-middle\">Recipent: </label>\n  </div>\n  <div class=\"col-11\">\n    <!-- Header -->\n    <input type=\"text\" id=\"dest_user\" #outuser class=\"m-0 p-0 w-100 h-100\">\n  </div>\n</div>\n<div class=\"row mb-2\">\n  <div class=\"col-6\">\n    <!-- Local Video -->\n    <video #videolocal class=\"video-local float-right border border-light\"></video>\n    <audio #audiolocal></audio>\n  </div>\n  <div class=\"col-6\">\n    <!-- Remote Video -->'\n    <video #videoremote class=\"video-remote float-left border border-light\"></video>\n    <audio #audioremote></audio>\n  </div>\n</div>\n<div class=\"row mb-2\">\n      <!-- Setting Buttons -->\n  <div class=\"col-6\">\n    <button class=\"btn btn-primary w-100 float-right\">Audio Call</button>\n  </div>\n  <div class=\"col-6\">\n    <button class=\"btn btn-primary w-100 float-left\">Video Call</button>\n  </div>\n</div>\n<div class=\"row mb-2\">\n  <div class=\"col-12\">\n    <!-- Chat Box -->\n    <div class=\"w-100 border border-light rounded message-box\">\n      <ul class=\"message-list mt-3\">\n        <li *ngFor=\"let message of messageLog\">\n          {{message}}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n  <div class=\"row\">\n    <div class=\"col-9\">\n      <input type=\"text\" id=\"txt_outmessage\" #outmessage class=\"w-100 h-100\">\n    </div>\n    <div class=\"col-3\">\n      <button class=\"btn btn-primary w-100 h-100\" id=\"btn_send\" (click)=\"OnClickSend(outuser.value, outmessage.value)\">Send</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/phone/phone.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".phone-border, .video {\n  border-radius: 4px;\n  border-color: #FFFCC4;\n  border-style: solid; }\n\n.message-box {\n  overflow-y: scroll;\n  max-height: 10em; }\n\n.video {\n  max-width: 75%;\n  max-height: 75%;\n  min-width: 25%;\n  min-height: 25%; }\n\n.video-local {\n  background-color: #807f7f; }\n\n.video-remote {\n  background-color: #666666; }\n\n.message-list li {\n  list-style: none;\n  margin-left: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/phone/phone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_phone_service__ = __webpack_require__("../../../../../src/app/services/phone.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhoneComponent = (function () {
    function PhoneComponent(phoneService) {
        this.phoneService = phoneService;
        this.messageLog = [];
        this.messageLog.push('Beginning of messages');
    }
    PhoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.phoneService.hasUserAgent()) {
            this.phoneService.initUserAgent();
        }
        this.phoneService.subscribeToMessages(function (sender, message) {
            _this.OnReceiveMessage(sender, message);
        });
    };
    PhoneComponent.prototype.OnClickSend = function (recipentName, messageText) {
        if (messageText != undefined && messageText != ""
            && recipentName != undefined && recipentName != "") {
            //todo: get recipent id from database based on name or something
            this.phoneService.sendMessage(this.phoneService.appendDomain(recipentName), messageText);
            this.messageLog.push('You: ' + messageText);
        }
    };
    PhoneComponent.prototype.OnClickClear = function () {
        this.messageLog = [];
    };
    PhoneComponent.prototype.OnReceiveMessage = function (senderUri, messageBody) {
        this.messageLog.push(senderUri + ' : ' + messageBody);
    };
    return PhoneComponent;
}());
PhoneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-phone',
        template: __webpack_require__("../../../../../src/app/components/phone/phone.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/phone/phone.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_phone_service__["a" /* PhoneService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_phone_service__["a" /* PhoneService */]) === "function" && _a || Object])
], PhoneComponent);

var _a;
//# sourceMappingURL=phone.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"user.name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, alertService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.alertService = alertService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* User */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        //Store user input data
        var user = new __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* User */]();
        user.email = this.user.email;
        user.name = this.user.name;
        user.password = this.user.password;
        this.validateService.validateRegister(user, function (success, message) {
            //Clear existing alert messages
            _this.alertService.clear();
            if (!success) {
                //Show message 'message'
                _this.alertService.error(message, false);
                return;
            }
            else {
                //Validated, register
                _this.authService.registerUser(user, function (success, message) {
                    if (success) {
                        //Successful register
                        _this.alertService.success(message, true);
                        _this.router.navigate(['/login']);
                    }
                    else {
                        //Show register problem error
                        _this.alertService.error(message, true);
                        _this.router.navigate(['/register']);
                    }
                });
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n  <form class=\"form-inline\">\n    <label for=\"searchTerm\" class=\"mr-2\">Search</label>\n    <input type=\"text\" class=\"form-control mr-2\" #searchTerm>\n    <label for=\"searchBy\" class=\"mr-2\">By</label>\n    <select class=\"form-control mr-2\" #searchSelect>\n      <option *ngFor=\"let type of searchTypes\">{{type}}</option>\n    </select>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmitSearch(searchSelect.value, searchTerm.value)\">Search</button>\n  </form>\n</div>\n<div class=\"container mt-4\">\n  <h3 *ngIf=\"!hasData\">Search results will appear here</h3>\n  <div *ngIf=\"hasData\">\n    <div class=\"card\" *ngFor=\"let user of searchResult\">\n      <div class=\"card-header\">\n        <h3><strong>Name:</strong> {{user.name}}</h3>\n      </div>\n      <div class=\"card-body\">\n        <strong>ID:</strong> {{user.id}} <br/>\n        <strong>Email:</strong> {{user.email}}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card, .card-header, .card-body {\n  color: #00585F; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = (function () {
    function SearchComponent(authService, alertService) {
        this.authService = authService;
        this.alertService = alertService;
        this.hasData = false;
        this.searchTypes = ['Name', 'Email', 'ID'];
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.onSubmitSearch = function (searchBy, searchTerm) {
        var _this = this;
        console.log('searching for ' + searchTerm + ' by ' + searchBy);
        this.authService.searchQuery(searchBy, searchTerm, function (res) {
            if (res.success) {
                _this.searchResult = [];
                var userList = res.data;
                if (userList.length > 0) {
                    for (var i = 0; i < userList.length; i++) {
                        var newUser = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */]();
                        newUser.name = userList[i].name;
                        newUser.email = userList[i].email;
                        newUser.id = userList[i].id;
                        _this.searchResult.push(newUser);
                    }
                    _this.hasData = true;
                }
                else {
                    _this.hasData = false;
                }
            }
            else {
                _this.alertService.error(res.message);
            }
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/config/config.json":
/***/ (function(module, exports) {

module.exports = {"default":{"api_ws_domain":"ws://192.168.0.23:3000","api_port":"3000","fs_ws_domain":"ws://192.168.0.23:5066","fs_domain":"192.168.0.23","fs_password":"1234","fs_port":"5066"}}

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, router, alertService) {
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isUserLoggedIn()) {
            return true;
        }
        else {
            this.alertService.info('You must be logged in to view that page', true);
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/models/alert.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Alert */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertType; });
var Alert = (function () {
    function Alert() {
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
//# sourceMappingURL=alert.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* unused harmony export Status */
var User = (function () {
    function User() {
    }
    return User;
}());

var Status;
(function (Status) {
    Status[Status["Online"] = 0] = "Online";
    Status[Status["Away"] = 1] = "Away";
    Status[Status["Busy"] = 2] = "Busy";
})(Status || (Status = {}));
//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_alert_model__ = __webpack_require__("../../../../../src/app/models/alert.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterRouterChange = false;
        //Clear alert messages on route change if keepAfterRouteChange is false
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]) {
                if (_this.keepAfterRouterChange) {
                    //Don't clear, but only keep for a single route change
                    _this.keepAfterRouterChange = false;
                }
                else {
                    //Clear on route change
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert_model__["a" /* AlertType */].Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert_model__["a" /* AlertType */].Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert_model__["a" /* AlertType */].Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__models_alert_model__["a" /* AlertType */].Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouterChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        //clear alerts
        this.subject.next();
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web_socket_service__ = __webpack_require__("../../../../../src/app/services/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config_json__ = __webpack_require__("../../../../../src/app/config/config.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__config_config_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WS_URL = __WEBPACK_IMPORTED_MODULE_4__config_config_json__["default"].api_ws_domain;
var AuthService = (function () {
    function AuthService(wsService) {
        this.wsService = wsService;
        this.user = null;
        this.authToken = null;
        wsService.easyCreate(WS_URL);
        /*userSessionSerivce.subject.subscribe(res => {
          console.log("Response from Websocket @ auth.service: " + res);
        });*/
    }
    AuthService.prototype.isUserLoggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logOutUser = function () {
        this.user = null;
        this.authToken = null;
        localStorage.clear();
        //Tell database to log this user out
    };
    AuthService.prototype.verifyUser = function (user, token, callback) {
        var data = {
            token: token,
            id: user.id,
            name: user.name,
            email: user.email
        };
        this.wsService.easySend('verify', data).easyBind('verify', function (res) {
            if (res.success) {
                callback(true);
            }
            else {
                callback(false);
            }
        });
    };
    AuthService.prototype.logInUser = function (user, callback) {
        var _this = this;
        //this.user = new User();
        var loginData = {
            email: user.email,
            password: user.password
        };
        this.wsService.easySend('authenticate', loginData)
            .easyBind('authenticate', function (res) {
            if (res.success) {
                _this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]();
                _this.user.id = res.user.id;
                _this.user.name = res.user.name;
                _this.user.email = res.user.email;
                _this.storeUserData(_this.user, res.token);
                callback({ success: true });
            }
            else {
                callback({ success: false, message: res.message });
            }
        });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (user, token) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getUserData = function () {
        this.loadToken();
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]();
        var localData = JSON.parse(localStorage.getItem('user'));
        this.user.email = localData.email;
        this.user.name = localData.name;
        this.user.id = localData.id;
        this.user.password = "";
    };
    //Takes in user data for Registration
    //Callback(boolean, message)
    AuthService.prototype.registerUser = function (user, callback) {
        var userData = {
            name: user.name,
            email: user.email,
            password: user.password
        };
        //Send register data and listen for a response
        this.wsService.easySend('register', userData)
            .easyBind('register', function (res) {
            //let resJson = JSON.parse(res);
            if (res.success) {
                callback(true, 'Registration successful');
            }
            else {
                callback(false, 'Registration failed');
            }
        });
    };
    AuthService.prototype.deleteUser = function (user, callback) {
        var _this = this;
        this.loadToken();
        var data = {
            token: this.authToken,
            id: user.id,
            name: user.name,
            email: user.email
        };
        this.wsService.easySend('delete', data).easyBind('delete', function (res) {
            if (res.success) {
                _this.logOutUser();
                callback(true);
            }
            else {
                callback(false);
            }
        });
    };
    AuthService.prototype.searchQuery = function (searchBy, searchTerm, callback) {
        this.getUserData();
        var data = {
            token: this.authToken,
            user: {
                name: this.user.name,
                email: this.user.email
            },
            searchTerm: searchTerm,
            searchBy: searchBy
        };
        this.wsService.easySend('searchQuery', data).easyBind('searchQuery', function (res) {
            if (res.success) {
                console.log('searchQuery success, data: ' + res.data);
                callback({ success: true, data: res.data });
            }
            else {
                callback({ success: false, message: res.message });
            }
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__web_socket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__web_socket_service__["a" /* WebSocketService */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/phone.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sip_js__ = __webpack_require__("../../../../sip.js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sip_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sip_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config_json__ = __webpack_require__("../../../../../src/app/config/config.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config_config_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var defaultServer = __WEBPACK_IMPORTED_MODULE_3__config_config_json__["default"].fs_ws_domain;
var defaultDomain = __WEBPACK_IMPORTED_MODULE_3__config_config_json__["default"].fs_domain;
var defaultPassword = __WEBPACK_IMPORTED_MODULE_3__config_config_json__["default"].fs_password;
//Connection types, each type includes the last
var connectionType = ['text', 'audio', 'video'];
var UserConfig = (function () {
    function UserConfig() {
        this.uri = '';
        this.wsServers = [''];
        this.authorizationUser = '';
        this.password = '';
        this.register = true;
    }
    UserConfig.prototype.AsJSON = function () {
        return {
            uri: this.uri,
            wsServers: this.wsServers,
            authorizationUser: this.authorizationUser,
            password: this.password,
            register: this.register
        };
    };
    return UserConfig;
}());
var PhoneService = (function () {
    function PhoneService(authService) {
        this.authService = authService;
        this.userConfig = new UserConfig();
        if (authService.isUserLoggedIn()) {
            this.initUserAgent();
        }
    }
    PhoneService.prototype.subscribeToMessages = function (listener) {
        this.messageListener = listener;
    };
    PhoneService.prototype.unsubscribeFromMessages = function (listener) {
        this.messageListener = undefined;
    };
    PhoneService.prototype.isSubscribedToMessages = function (listener) {
        return (this.messageListener === listener);
    };
    PhoneService.prototype.initUserAgent = function () {
        var _this = this;
        //Get logged user data
        console.log('initUserAgent: Creating config');
        this.loadUserConfig();
        this.clearSession();
        console.log('Preparing to create new user agent');
        //Create a new user agent based on this data
        this.userAgent = new __WEBPACK_IMPORTED_MODULE_2_sip_js__["UA"](this.userConfig.AsJSON());
        console.log('Created user agent with config: ' + JSON.stringify(this.userConfig.AsJSON()));
        this.userAgent.start();
        this.userAgent.on('connected', function () { return _this.onConnected(); });
        this.userAgent.on('disconnected', function () { return _this.onDisconnected(); });
        this.userAgent.on('registered', function () { return _this.onRegistered(); });
        this.userAgent.on('unregistered', function () { return _this.onUnregistered(); });
        this.userAgent.on('invite', function (session) { return _this.onReceiveInvite(session); });
        this.userAgent.on('message', function (message) { return _this.onReceiveMessage(message); });
    };
    PhoneService.prototype.clearSession = function () {
        if (this.userSession != undefined) {
            this.userSession.terminate();
            this.userSession = undefined;
        }
    };
    PhoneService.prototype.stopUserAgent = function () {
        this.userAgent.stop();
    };
    PhoneService.prototype.hasUserAgent = function () {
        return (this.userAgent != undefined);
    };
    PhoneService.prototype.isUserAgentConnected = function () {
        return this.userAgent.isConnected();
    };
    PhoneService.prototype.isUserAgentRegistered = function () {
        return this.userAgent.isRegistered();
    };
    PhoneService.prototype.getUserConfig = function () {
        return this.userConfig;
    };
    PhoneService.prototype.onConnected = function () {
        console.log('[' + this.userConfig.uri + '] received onConnected');
    };
    PhoneService.prototype.onDisconnected = function () {
        console.log('[' + this.userConfig.uri + '] received onDisconnected');
    };
    PhoneService.prototype.onRegistered = function () {
        console.log('[' + this.userConfig.uri + '] received onRegistered');
    };
    PhoneService.prototype.onUnregistered = function () {
        console.log('[' + this.userConfig.uri + '] received onUnregistered');
    };
    PhoneService.prototype.onReceiveInvite = function (session) {
        //Present dialogue box
        //On accept -> session.accept(), userSession = session
        //else -> session.reject();
        var senderUri = session.remoteIdentity.uri.toString();
        console.log('[' + senderUri + '] => [' + this.userConfig.uri + '] : [session invitation]');
        session.accept();
        this.userSession = session;
    };
    PhoneService.prototype.onReceiveMessage = function (message) {
        var messageData = message.body;
        var messageUser = message.remoteIdentity.uri.user;
        var messageHost = message.remoteIdentity.uri.host;
        var senderUri = messageUser + '@' + messageHost;
        console.log('[' + senderUri + '] => [' + this.userConfig.uri + '] : ' + messageData);
        if (this.messageListener != undefined) {
            this.messageListener(senderUri, messageData);
        }
    };
    PhoneService.prototype.sendMessage = function (clientUri, message) {
        console.log('[' + this.userConfig.uri + '] => [' + clientUri + '] : ' + message);
        this.userAgent.message(clientUri, message);
    };
    PhoneService.prototype.sendInvite = function (clientUri) {
        console.log('[' + this.userConfig.uri + '] => [' + clientUri + '] : [session invitation]');
        this.userSession = this.userAgent.invite(clientUri);
    };
    PhoneService.prototype.appendDomain = function (username) {
        return (username + '@' + defaultDomain);
    };
    //Sets sip user config to match the logged in user
    PhoneService.prototype.loadUserConfig = function () {
        //Tell authservice to load in user data just in case
        this.authService.getUserData();
        //Grab the user data
        var userData = this.authService.user;
        console.log('loadUserConfig: loaded user: ' + userData.name + ' /id: ' + userData.id);
        //Update sip sip config
        this.applyUserConfig(userData.id.toString(), defaultPassword);
    };
    //Resets sip user config to default
    PhoneService.prototype.resetUserConfig = function () {
        this.applyUserConfig('default', defaultPassword);
    };
    //Changes sip user config to use given user and password combo
    PhoneService.prototype.applyUserConfig = function (userName, userPassword) {
        this.userConfig.uri = userName + '@' + defaultDomain;
        this.userConfig.wsServers = [defaultServer];
        this.userConfig.authorizationUser = userName;
        this.userConfig.password = userPassword;
        this.userConfig.register = true;
    };
    return PhoneService;
}());
PhoneService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], PhoneService);

var _a;
//# sourceMappingURL=phone.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    //Validate registration input
    //Callback(bool, string) tells if successful and provides error prompt if not
    ValidateService.prototype.validateRegister = function (user, callback) {
        //Validate user details
        if (!this.validateExists(user)) {
            callback(false, 'Please enter all fields');
        }
        else if (!this.validateEmail(user.email)) {
            callback(false, 'Please enter a valid email');
        }
        else {
            callback(true, 'User registered successfully');
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateExists = function (user) {
        if (user.name == undefined || user.email == undefined || user.password == undefined
            || user.name == "" || user.email == "" || user.password == "") {
            return false;
        }
        return true;
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.email == undefined || user.email == "" || user.password == undefined || user.password == "") {
            return false;
        }
        return true;
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/web-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*export interface WebSocketData {
  type: string;
  body: {};
}*/
var WebSocketService = (function () {
    function WebSocketService() {
    }
    /*public connect(url): Rx.Subject<MessageEvent> {
      if (!this.subject) {
        this.subject = this.create(url);
        console.log("Successfully connected: " + url);
      }
      return this.subject;
    }
  
    private create(url):  Rx.Subject<MessageEvent> {
      let ws = new WebSocket(url);
  
      let observable = Rx.Observable.create(
        (obs: Rx.Observer<MessageEvent>) => {
          ws.onmessage = obs.next.bind(obs);
          ws.onerror = obs.error.bind(obs);
          ws.onclose = obs.complete.bind(obs);
          return ws.close.bind(ws);
       })
       let observer = {
               next: (data: Object) => {
                      if (ws.readyState === WebSocket.OPEN) {
                     ws.send(JSON.stringify(data));
                }
               }
        }
          return Rx.Subject.create(observer, observable);
    }*/
    WebSocketService.prototype.easyCreate = function (url) {
        var _this = this;
        if (!this.ws) {
            this.ws = new WebSocket(url);
            this.callbacks = new Array();
            this.ws.onopen = function () { return _this.easyDispatch('open', null); };
            this.ws.onclose = function () { return _this.easyDispatch('close', null); };
            this.ws.onmessage = function (event) {
                //Get the JSON data from the MessageEvent object sent over WebSocket
                var messageData = JSON.parse(event.data);
                //Dispatch to find any callbacks binded to the event type and give returned data
                _this.easyDispatch(messageData.event, messageData.data);
            };
        }
    };
    WebSocketService.prototype.easyBind = function (eventName, callback) {
        this.callbacks[eventName] = this.callbacks[eventName] || [];
        this.callbacks[eventName].push(callback);
        return this;
    };
    WebSocketService.prototype.easySend = function (eventName, eventData) {
        var data = JSON.stringify({ event: eventName, data: eventData });
        this.ws.send(data);
        return this;
    };
    WebSocketService.prototype.easyDispatch = function (eventName, message) {
        var chain = this.callbacks[eventName];
        if (!chain) {
            return;
        }
        for (var i = 0; i < chain.length; i++) {
            chain[i](message);
        }
    };
    return WebSocketService;
}());
WebSocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], WebSocketService);

//# sourceMappingURL=web-socket.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map