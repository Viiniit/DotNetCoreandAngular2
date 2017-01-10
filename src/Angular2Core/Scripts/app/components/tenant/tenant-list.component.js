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
    var TenantListComponent;
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
            TenantListComponent = (function () {
                function TenantListComponent(AppService, router) {
                    this.AppService = AppService;
                    this.router = router;
                }
                TenantListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.title = "Tenant";
                    var service = this.AppService.getAllTenants();
                    service.subscribe(function (alltenants) { return _this.tenants = alltenants; }, function (error) { return _this.errorMessage = error; });
                };
                TenantListComponent.prototype.onSelect = function (tenant) {
                    this.selectedTenant = tenant;
                    var link = ['/tenant', this.selectedTenant.TenantId];
                    this.router.navigate(link);
                };
                TenantListComponent.prototype.onCreate = function () {
                    this.router.navigate(['/addtenant']);
                };
                TenantListComponent = __decorate([
                    core_1.Component({
                        selector: "tenant-list",
                        template: "\n            <h2>{{title}}</h2>\n            <ul class=\"items\">\n                <li *ngFor=\"let tenant of tenants\" \n                    [class.selected]=\"tenant === selectedTenant\"\n                    (click)=\"onSelect(tenant)\">\n                    <span>{{tenant.Name}}</span>\n                </li>\n            </ul>\n        <div>\n     <button (click)='onCreate()'>Create New</button>\n    </div>\n    ",
                        styles: ["\n        ul.items li { \n            cursor: pointer;\n        }\n        ul.items li:hover { \n            background-color: #E8FAEC; \n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService, router_1.Router])
                ], TenantListComponent);
                return TenantListComponent;
            }());
            exports_1("TenantListComponent", TenantListComponent);
        }
    }
});
