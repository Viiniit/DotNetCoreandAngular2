///&lt;reference path="../../typings/index.d.ts"/>
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {RouterModule}  from "@angular/router";
import {FormsModule} from "@angular/forms";
import "rxjs/Rx";

import {AppComponent} from "./components/app.component";
import {HomeComponent} from "./components/home/home.component";
import {FeatureListComponent} from "./components/feature/feature-list.component";
import {FeatureDetailComponent} from "./components/feature/feature-detail.component";
import {TenantListComponent} from "./components/tenant/tenant-list.component";
import {TenantDetailComponent} from "./components/tenant/tenant-detail.component";
import {AssignComponent} from "./components/assign/assign.component";

import {AppRouting} from "./app.routing";
import {AppService} from "./services/app.service";

@NgModule({
    // directives, components, and pipes
    declarations: [
        AppComponent,
        HomeComponent,
        FeatureListComponent,
        FeatureDetailComponent,
        TenantListComponent,
        TenantDetailComponent,
        AssignComponent
    ],
    // modules
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        AppRouting
    ],
    // providers
    providers: [
        AppService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }