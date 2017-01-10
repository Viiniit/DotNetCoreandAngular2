System.register(["@angular/core", "@angular/http", "rxjs/Observable"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var AppService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            AppService = (function () {
                function AppService(http) {
                    this.http = http;
                    // URL to web api
                    this.featureBaseUrl = 'api/feature/';
                    this.placeBaseUrl = 'api/place/';
                    this.tenantBaseUrl = 'api/Tenants/';
                    this.tenantfeaturesBaseUrl = 'api/TenantFeatures/';
                }
                AppService.prototype.getLatestDiscussion = function (num) {
                    var url = this.featureBaseUrl + "GetLatestDiscussion/";
                    if (num != null)
                        url += num;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.getAllTenants = function () {
                    var url = this.tenantBaseUrl;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.getTenant = function (id) {
                    if (id == null)
                        throw new Error("id is required.");
                    var url = this.tenantBaseUrl + id;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.createTenant = function (tenant) {
                    var url = this.tenantBaseUrl + "AddTenant";
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    var options = new http_1.RequestOptions({ headers: headers });
                    var body = JSON.stringify(tenant);
                    return this.http.post(url, body, options).map(function (response) { return response.json(); }).catch(this.handleError);
                };
                AppService.prototype.updateTenant = function (id, tenant) {
                    var url = this.tenantBaseUrl + id;
                    var body = JSON.stringify(tenant);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(url, body, options)
                        .map(function (response) { return response.json().message; })
                        .catch(this.handleError);
                };
                AppService.prototype.getAllFeatures = function () {
                    var url = this.featureBaseUrl;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.getFeature = function (id) {
                    if (id == null)
                        throw new Error("id is required.");
                    var url = this.featureBaseUrl + id;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.createFeature = function (feature) {
                    var url = this.featureBaseUrl + "AddFeature";
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    var options = new http_1.RequestOptions({ headers: headers });
                    var body = JSON.stringify(feature);
                    return this.http.post(url, body, options).map(function (response) { return response.json(); }).catch(this.handleError);
                };
                AppService.prototype.updateFeature = function (id, feature) {
                    var url = this.featureBaseUrl + id;
                    var body = JSON.stringify(feature);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(url, body, options)
                        .map(function (response) { return response.json().message; })
                        .catch(this.handleError);
                };
                AppService.prototype.assignTenantFeature = function (tenantfeature) {
                    var url = this.tenantfeaturesBaseUrl;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                    var options = new http_1.RequestOptions({ headers: headers });
                    var body = JSON.stringify(tenantfeature);
                    return this.http.post(url, body, options).map(function (response) { return response.json(); }).catch(this.handleError);
                };
                AppService.prototype.getTenantFeatures = function () {
                    var url = this.tenantfeaturesBaseUrl;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || "Server error");
                };
                AppService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppService);
                return AppService;
            }());
            exports_1("AppService", AppService);
        }
    }
});
