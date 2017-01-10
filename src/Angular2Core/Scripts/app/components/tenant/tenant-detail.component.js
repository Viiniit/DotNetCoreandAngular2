System.register(["@angular/core", "@angular/router", "../../services/app.service", "../../viewmodels/tenant"], function(exports_1, context_1) {
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
    var core_1, router_1, app_service_1, tenant_1;
    var TenantDetailComponent;
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
            }],
        execute: function() {
            TenantDetailComponent = (function () {
                function TenantDetailComponent(AppService, router, route) {
                    this.AppService = AppService;
                    this.router = router;
                    this.route = route;
                }
                TenantDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.route.params.subscribe(function (params) {
                        var id = +params['id'];
                        console.log("selected id " + id);
                        if (id.toString() == "NaN") {
                            //   this.item = new Tenant();
                            _this.tenant = new tenant_1.Tenant(0, null, null);
                        }
                        else {
                            _this.AppService.getTenant(id).subscribe(function (tenantresponse) { return _this.tenant = tenantresponse; });
                        }
                    });
                };
                TenantDetailComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var tenantId = this.tenant.TenantId;
                    if (tenantId == 0) {
                        this.AppService.createTenant(this.tenant).subscribe(function (tenant) { return _this.tenant = tenant; });
                    }
                    else {
                        this.AppService.updateTenant(tenantId, this.tenant).subscribe(function (tenant) { return _this.tenant = tenant; });
                    }
                };
                TenantDetailComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                TenantDetailComponent.prototype.onBack = function () {
                    this.router.navigate(['/home']);
                };
                TenantDetailComponent = __decorate([
                    core_1.Component({
                        selector: "tenant-detail",
                        template: "\n        <div *ngIf=\"tenant\" class=\"item-details\">\n          <ul>\n              <li>\n                  <label>Name:</label>\n                  <input [(ngModel)]=\"tenant.Name\" placeholder=\"Insert the title...\"/>\n              </li>\n              <li>\n                  <label>Url:</label>\n                  <textarea [(ngModel)]=\"tenant.Url\" placeholder=\"Insert a url...\"></textarea>\n              </li>\n          </ul>\n\n        <div>\n               <button (click)='onSubmit()'>Save</button>\n        </div>\n        </div>\n\n        <div>\n               <button (click)='onBack()'>Back to Home</button>\n        </div>\n    ",
                        styles: ["\n        .item-details {\n            margin: 5px;\n            padding: 5px 10px;\n            border: 1px solid 9BCCE0;\n            background-color: #DDF0D5;\n            width: 500px;\n        }\n        .item-details * {\n            vertical-align: middle;\n        }\n        .item-details ul li {\n            padding: 5px 0;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService, router_1.Router, router_1.ActivatedRoute])
                ], TenantDetailComponent);
                return TenantDetailComponent;
            }());
            exports_1("TenantDetailComponent", TenantDetailComponent);
        }
    }
});
