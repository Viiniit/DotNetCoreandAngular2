System.register(["@angular/core", "@angular/router", "../../services/app.service", "../../viewmodels/feature"], function(exports_1, context_1) {
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
    var core_1, router_1, app_service_1, feature_1;
    var FeatureDetailComponent;
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
            },
            function (feature_1_1) {
                feature_1 = feature_1_1;
            }],
        execute: function() {
            FeatureDetailComponent = (function () {
                function FeatureDetailComponent(AppService, router, route) {
                    this.AppService = AppService;
                    this.router = router;
                    this.route = route;
                }
                FeatureDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.route.params.subscribe(function (params) {
                        var id = +params['id'];
                        console.log("selected id " + id);
                        if (id.toString() == "NaN") {
                            //   this.item = new Tenant();
                            _this.feature = new feature_1.Feature(0, null);
                        }
                        else {
                            _this.AppService.getFeature(id).subscribe(function (response) { return _this.feature = response; });
                        }
                    });
                };
                FeatureDetailComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var featureId = this.feature.FeatureId;
                    if (featureId == 0) {
                        this.AppService.createFeature(this.feature).subscribe(function (response) { return _this.feature = response; });
                    }
                    else {
                        this.AppService.updateFeature(featureId, this.feature).subscribe(function (response) { return _this.feature = response; });
                    }
                };
                FeatureDetailComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                FeatureDetailComponent.prototype.onBack = function () {
                    this.router.navigate(['/home']);
                };
                FeatureDetailComponent = __decorate([
                    core_1.Component({
                        selector: "feature-detail",
                        template: "\n        <div *ngIf=\"feature\" class=\"item-details\">\n          <div>\n                  <label>Feature Name:</label>\n                  <input [(ngModel)]=\"feature.Name\" placeholder=\"Insert the name...\"/>\n          </div>\n        </div>\n\n        <div>\n               <button (click)='onSubmit()'>Save</button>\n        </div>\n        <div>\n               <button (click)='onBack()'>Back to Home</button>\n        </div>\n    ",
                        styles: ["\n        .item-details {\n            margin: 5px;\n            padding: 5px 10px;\n            border: 1px solid 9BCCE0;\n            background-color: #DDF0D5;\n            width: 500px;\n        }\n        .item-details * {\n            vertical-align: middle;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService, router_1.Router, router_1.ActivatedRoute])
                ], FeatureDetailComponent);
                return FeatureDetailComponent;
            }());
            exports_1("FeatureDetailComponent", FeatureDetailComponent);
        }
    }
});
