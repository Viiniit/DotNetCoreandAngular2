import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {AppService} from "../../services/app.service";
import {Tenant} from "../../viewmodels/tenant";

@Component({
    selector: "tenant-detail",
    template: `
        <div *ngIf="tenant" class="item-details">
          <ul>
              <li>
                  <label>Name:</label>
                  <input [(ngModel)]="tenant.Name" placeholder="Insert the title..."/>
              </li>
              <li>
                  <label>Url:</label>
                  <textarea [(ngModel)]="tenant.Url" placeholder="Insert a url..."></textarea>
              </li>
          </ul>

        <div>
               <button (click)='onSubmit()'>Save</button>
        </div>
        </div>

        <div>
               <button (click)='onBack()'>Back to Home</button>
        </div>
    `,
    styles: [`
        .item-details {
            margin: 5px;
            padding: 5px 10px;
            border: 1px solid 9BCCE0;
            background-color: #DDF0D5;
            width: 500px;
        }
        .item-details * {
            vertical-align: middle;
        }
        .item-details ul li {
            padding: 5px 0;
        }
    `]
})

export class TenantDetailComponent implements OnInit {
    tenant: Tenant;
    sub: any;

    constructor(private AppService: AppService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            var id = +params['id'];
            console.log("selected id " + id);
            if (id.toString() == "NaN") {
                //   this.item = new Tenant();
                this.tenant = new Tenant(0, null, null);
            }
            else {
                this.AppService.getTenant(id).subscribe(tenantresponse => this.tenant = tenantresponse);
            }
        });
    }
    onSubmit() {
        var tenantId = this.tenant.TenantId;
        if (tenantId == 0) {
            this.AppService.createTenant(this.tenant).subscribe(tenant => this.tenant = tenant);
        }
        else {
            this.AppService.updateTenant(tenantId, this.tenant).subscribe(tenant => this.tenant = tenant);
        }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onBack(): void {
        this.router.navigate(['/home']);
    }

}