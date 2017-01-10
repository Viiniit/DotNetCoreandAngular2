import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Feature} from "../viewmodels/feature";
import {Tenant} from "../viewmodels/tenant";
import {TenantFeatures} from "../viewmodels/tenantfeatures";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AppService {
    constructor(private http: Http) { }

    // URL to web api
    private featureBaseUrl = 'api/feature/';
    private placeBaseUrl = 'api/place/';
    private tenantBaseUrl = 'api/Tenants/';
    private tenantfeaturesBaseUrl = 'api/TenantFeatures/';

    getLatestDiscussion(num?: number) {
        var url = this.featureBaseUrl + "GetLatestDiscussion/";
        if (num != null) url += num;
        return this.http.get(url)
            .map(response => response.json())
            .catch(this.handleError);
    }
    getAllTenants() {
        var url = this.tenantBaseUrl;
        return this.http.get(url)
            .map(response => response.json())
            .catch(this.handleError);
    }
    getTenant(id: number) {
        if (id == null) throw new Error("id is required.");
        var url = this.tenantBaseUrl + id;
        return this.http.get(url)
            .map(response => <Tenant> response.json())
            .catch(this.handleError);
    }
    createTenant(tenant: Tenant) {
        var url = this.tenantBaseUrl + "AddTenant";
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(tenant);
        return this.http.post(url, body, options).map((response: Response) => response.json()).catch(this.handleError);
    }
    updateTenant(id: number, tenant:Tenant) {
        var url = this.tenantBaseUrl + id;
        var body = JSON.stringify(tenant);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.put(url, body, options)
            .map(response => response.json().message)
            .catch(this.handleError);
    }
    getAllFeatures() {
        var url = this.featureBaseUrl;
        return this.http.get(url)
            .map(response => response.json())
            .catch(this.handleError);
    }
    getFeature(id: number) {
        if (id == null) throw new Error("id is required.");
        var url = this.featureBaseUrl + id;
        return this.http.get(url)
            .map(response => <Feature>response.json())
            .catch(this.handleError);
    }
    createFeature(feature: Feature) {
        var url = this.featureBaseUrl + "AddFeature";
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(feature);
        return this.http.post(url, body, options).map((response: Response) => response.json()).catch(this.handleError);
    }
    updateFeature(id: number, feature: Feature) {
        var url = this.featureBaseUrl + id;
        var body = JSON.stringify(feature);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.put(url, body, options)
            .map(response => response.json().message)
            .catch(this.handleError);
    }
    assignTenantFeature(tenantfeature: TenantFeatures) {
        var url = this.tenantfeaturesBaseUrl;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(tenantfeature);
        return this.http.post(url, body, options).map((response: Response) => response.json()).catch(this.handleError);
    }
    getTenantFeatures() {
        var url = this.tenantfeaturesBaseUrl;
        return this.http.get(url)
            .map(response => response.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}