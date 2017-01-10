import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {AppService} from "../../services/app.service";
import {Tenant} from "../../viewmodels/tenant";
import {Feature} from "../../viewmodels/feature";
import {TenantFeatures} from "../../viewmodels/tenantfeatures";
@Component({
    selector: "tenant-detail",
    template: `
        <div class="item-details">
         <h2>Assign Features to Tenants</h2>
              <div>
                  <label>Tenants: </label>
             <select [(ngModel)]="selectedTenant.TenantId">
              <option *ngFor="let tenant of tenants" value= {{tenant.TenantId}}>
                {{tenant.Name}}
              </option>
            </select>
              </div>
              <div>
                  <label>Features: </label>
                 <select [(ngModel)]="selectedFeature.FeatureId">
              <option *ngFor="let feature of features" value= {{feature.FeatureId}}>
                {{feature.Name}}
              </option>
              </select>
              </div>
         
        <div>
               <button (click)='onSubmit()'>Save</button>
        </div>
        </div>
        <div>
               <button (click)='onBack()'>Back to Home</button>
        </div>
    `
})

export class AssignComponent implements OnInit {
    tenants: Tenant[];
    selectedTenant: Tenant = new Tenant(0, null, null);
    features: Feature[];
    selectedFeature: Feature = new Feature(0, null);
    errorMessage: string;

    constructor(private AppService: AppService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.AppService.getAllTenants().subscribe(
            alltenants => this.tenants = alltenants,
            error => this.errorMessage = <any>error
        );
        this.AppService.getAllFeatures().subscribe(
            response => this.features = response,
            error => this.errorMessage = <any>error
        );
    }
    onSubmit() {
        if (this.selectedTenant.TenantId != 0 && this.selectedFeature.FeatureId != 0) {
            var tenantFeature = new TenantFeatures(this.selectedFeature.FeatureId, this.selectedTenant.TenantId);
            this.AppService.assignTenantFeature(tenantFeature).subscribe(response => { console.log(response); });
        }
    }
    ngOnDestroy() {
    }

    onBack(): void {
        this.router.navigate(['/home']);
    }

}