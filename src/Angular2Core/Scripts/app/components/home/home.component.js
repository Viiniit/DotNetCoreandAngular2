System.register(["@angular/core", "@angular/router", "../../services/app.service"], function(exports_1, context_1) {
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
    var core_1, router_1, app_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(AppService, router, route) {
                    this.AppService = AppService;
                    this.router = router;
                    this.route = route;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.AppService.getAllFeatures().subscribe(function (response) { return _this.features = response; }, function (error) { return _this.errorMessage = error; });
                    this.AppService.getTenantFeatures().subscribe(function (response) { return _this.assignedtenantfeatures = response; }, function (error) { return _this.errorMessage = error; });
                };
                HomeComponent.prototype.getValue = function (item, feature) {
                    var isPresent = false;
                    item.forEach(function (value, index) {
                        if (value.FeatureId == feature.FeatureId) {
                            console.log("FeatureArray: " + JSON.stringify(value));
                            console.log("Feature: " + JSON.stringify(feature));
                            isPresent = true;
                        }
                    });
                    return isPresent;
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: "home",
                        template: "\n        <div class=\"div-wrapper\">\n            <div class=\"div-lounge\">\n        <table>\n            <tr>\n            <td></td>\n            <td *ngFor=\"let feature of features\"><span>{{feature.Name}}</span></td>\n            </tr>\n            <tr *ngFor=\"let item of assignedtenantfeatures\">\n            <td>{{item.Tenant.Name}}</td>\n            <td *ngFor=\"let feature of features\">\n            <span class=\"checkmark\" *ngIf = \"getValue(item.Features,feature)\">\n                 <div class=\"checkmark_stem\"></div>\n                 <div class=\"checkmark_kick\"></div>\n            </span>\n            <span *ngIf = \"!getValue(item.Features,feature)\">\n            <svg>\n                 <path stroke=\"black\" stroke-width=\"2\" fill=\"none\" d=\"M6.25,6.25,17.75,17.75\" />\n                 <path stroke=\"black\" stroke-width=\"2\" fill=\"none\" d=\"M6.25,17.75,17.75,6.25\" />\n            </svg>\n            </span>\n            </td>\n            </tr>\n        </table>\n        </div>\n    ",
                        styles: ["\n        .div-wrapper {\n          margin-right: 300px;\n        }\n        .div-lounge {\n          float: left;\n          width: 100%;\n\n        }\n        .div-lounge div{\n           margin:0 0 10px 0;\n           border: 1px solid #9BCCE0;\n           background-color: #DDF0D5;\n        }\n.checkmark {\n    display:inline-block;\n    width: 22px;\n    height:22px;\n    -ms-transform: rotate(45deg); /* IE 9 */\n    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */\n    transform: rotate(45deg);\n}\n\n.checkmark_stem {\n    position: absolute;\n    width:3px;\n    height:9px;\n    background-color:#ccc;\n    left:11px;\n    top:6px;\n}\n\n.checkmark_kick {\n    position: absolute;\n    width:3px;\n    height:3px;\n    background-color:#ccc;\n    left:8px;\n    top:12px;\n}\nsvg {\n    height: 20px;\n    width: 20px;\n}\n    "]
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService, router_1.Router, router_1.ActivatedRoute])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
