System.register(["@angular/router", "./components/home/home.component", "./components/feature/feature-list.component", "./components/feature/feature-detail.component", "./components/tenant/tenant-list.component", "./components/tenant/tenant-detail.component", "./components/assign/assign.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, feature_list_component_1, feature_detail_component_1, tenant_list_component_1, tenant_detail_component_1, assign_component_1;
    var routes, AppRoutingProviders, AppRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (feature_list_component_1_1) {
                feature_list_component_1 = feature_list_component_1_1;
            },
            function (feature_detail_component_1_1) {
                feature_detail_component_1 = feature_detail_component_1_1;
            },
            function (tenant_list_component_1_1) {
                tenant_list_component_1 = tenant_list_component_1_1;
            },
            function (tenant_detail_component_1_1) {
                tenant_detail_component_1 = tenant_detail_component_1_1;
            },
            function (assign_component_1_1) {
                assign_component_1 = assign_component_1_1;
            }],
        execute: function() {
            routes = [
                {
                    path: '',
                    redirectTo: '/home',
                    pathMatch: 'full'
                },
                {
                    path: 'home',
                    component: home_component_1.HomeComponent
                },
                {
                    path: 'feature/:id',
                    component: feature_detail_component_1.FeatureDetailComponent
                },
                {
                    path: 'feature',
                    component: feature_list_component_1.FeatureListComponent
                },
                {
                    path: 'addfeature',
                    component: feature_detail_component_1.FeatureDetailComponent
                },
                {
                    path: 'tenant/:id',
                    component: tenant_detail_component_1.TenantDetailComponent
                },
                {
                    path: 'addtenant',
                    component: tenant_detail_component_1.TenantDetailComponent
                },
                {
                    path: 'tenant',
                    component: tenant_list_component_1.TenantListComponent
                },
                {
                    path: 'assign',
                    component: assign_component_1.AssignComponent
                }
            ];
            exports_1("AppRoutingProviders", AppRoutingProviders = []);
            exports_1("AppRouting", AppRouting = router_1.RouterModule.forRoot(routes));
        }
    }
});
