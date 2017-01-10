import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Tenant} from "../../viewmodels/tenant";
import {AppService} from "../../services/app.service";

@Component({
    selector: "tenant-list",
    template: `
            <h2>{{title}}</h2>
            <ul class="items">
                <li *ngFor="let tenant of tenants" 
                    [class.selected]="tenant === selectedTenant"
                    (click)="onSelect(tenant)">
                    <span>{{tenant.Name}}</span>
                </li>
            </ul>
        <div>
     <button (click)='onCreate()'>Create New</button>
    </div>
    `,
    styles: [`
        ul.items li { 
            cursor: pointer;
        }
        ul.items li:hover { 
            background-color: #E8FAEC; 
        }
    `]
})

export class TenantListComponent implements OnInit {
    title: string;
    selectedTenant: Tenant;
    tenants: Tenant[];
    errorMessage: string;

    constructor(private AppService: AppService, private router: Router) { }

    ngOnInit() {
        this.title = "Tenant";
        var service = this.AppService.getAllTenants();

        service.subscribe(
            alltenants => this.tenants = alltenants,
            error => this.errorMessage = <any>error
        );

    }

    onSelect(tenant: Tenant) {
        this.selectedTenant = tenant;
        var link = ['/tenant', this.selectedTenant.TenantId];
        this.router.navigate(link);
    }
    onCreate() {
        this.router.navigate(['/addtenant']);
    }
}