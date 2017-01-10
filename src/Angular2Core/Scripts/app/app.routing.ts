import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { FeatureListComponent } from "./components/feature/feature-list.component";
import { FeatureDetailComponent } from "./components/feature/feature-detail.component";
import { TenantListComponent } from "./components/tenant/tenant-list.component";
import { TenantDetailComponent } from "./components/tenant/tenant-detail.component";
import { AssignComponent } from "./components/assign/assign.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'feature/:id',
        component: FeatureDetailComponent
    },
    {
        path: 'feature',
        component: FeatureListComponent
    },
    {
        path: 'addfeature',
        component: FeatureDetailComponent
    },
    {
        path: 'tenant/:id',
        component: TenantDetailComponent
    },
    {
        path: 'addtenant',
        component: TenantDetailComponent
    },
    {
        path: 'tenant',
        component: TenantListComponent
    },
    {
        path: 'assign',
        component: AssignComponent
    }   
];

export const AppRoutingProviders: any[] = [
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);