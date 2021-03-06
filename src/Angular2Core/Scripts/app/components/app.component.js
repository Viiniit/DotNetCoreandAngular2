System.register(["@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.subTitle = "ASP.NET Core with angular2 and web api";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "angularjs2demo",
                        template: "\n        <h3>{{subTitle}}</h3>\n            <div class=\"menu\">\n                <a class=\"home\" [routerLink]=\"['/home']\">Home</a> |\n                <a class=\"home\" [routerLink]=\"['/feature']\">Features</a> |\n                <a class=\"home\" [routerLink]=\"['/tenant']\">Tenants</a> |\n                <a class=\"home\" [routerLink]=\"['/assign']\">Assign</a> |\n            </div>\n        <router-outlet></router-outlet>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
