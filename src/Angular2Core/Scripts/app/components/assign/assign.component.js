System.register(["@angular/core", "@angular/router", "../../services/app.service", "../../viewmodels/tenant", "../../viewmodels/feature", "../../viewmodels/tenantfeatures"], function(exports_1, context_1) {
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
    var core_1, router_1, app_service_1, tenant_1, feature_1, tenantfeatures_1;
    var AssignComponent;
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
            function (tenant_1_1) {
                tenant_1 = tenant_1_1;
            },
            function (feature_1_1) {
                feature_1 = feature_1_1;
            },
            function (tenantfeatures_1_1) {
                tenantfeatures_1 = tenantfeatures_1_1;
            }],
        execute: function() {
            AssignComponent = (function () {
                function AssignComponent(AppService, router, route) {
                    this.AppService = AppService;
                    this.router = router;
                    this.route = route;
                    this.selectedTenant = new tenant_1.Tenant(0, null, null);
                    this.selectedFeature = new feature_1.Feature(0, null);
                }
                AssignComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.AppService.getAllTenants().subscribe(function (alltenants) { return _this.tenants = alltenants; }, function (error) { return _this.errorMessage = error; });
                    this.AppService.getAllFeatures().subscribe(function (response) { return _this.features = response; }, function (error) { return _this.errorMessage = error; });
                };
                AssignComponent.prototype.onSubmit = function () {
                    if (this.selectedTenant.TenantId != 0 && this.selectedFeature.FeatureId != 0) {
                        var tenantFeature = new tenantfeatures_1.TenantFeatures(this.selectedFeature.FeatureId, this.selectedTenant.TenantId);
                        this.AppService.assignTenantFeature(tenantFeature).subscribe(function (response) { console.log(response); });
                    }
                };
                AssignComponent.prototype.ngOnDestroy = function () {
                };
                AssignComponent.prototype.onBack = function () {
                    this.router.navigate(['/home']);
                };
                AssignComponent = __decorate([
                    core_1.Component({
                        selector: "tenant-detail",
                        template: "\n        <div class=\"item-details\">\n         <h2>Assign Features to Tenants</h2>\n              <div>\n                  <label>Tenants: </label>\n             <select [(ngModel)]=\"selectedTenant.TenantId\">\n              <option *ngFor=\"let tenant of tenants\" value= {{tenant.TenantId}}>\n                {{tenant.Name}}\n              </option>\n            </select>\n              </div>\n              <div>\n                  <label>Features: </label>\n                 <select [(ngModel)]=\"selectedFeature.FeatureId\">\n              <option *ngFor=\"let feature of features\" value= {{feature.FeatureId}}>\n                {{feature.Name}}\n              </option>\n              </select>\n              </div>\n         \n        <div>\n               <button (click)='onSubmit()'>Save</button>\n        </div>\n        </div>\n        <div>\n               <button (click)='onBack()'>Back to Home</button>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService, router_1.Router, router_1.ActivatedRoute])
                ], AssignComponent);
                return AssignComponent;
            }());
            exports_1("AssignComponent", AssignComponent);
        }
    }
});
