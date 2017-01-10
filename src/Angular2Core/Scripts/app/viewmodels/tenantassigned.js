System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AssignedTenantFeature;
    return {
        setters:[],
        execute: function() {
            AssignedTenantFeature = (function () {
                function AssignedTenantFeature(Tenant, Features) {
                    this.Tenant = Tenant;
                    this.Features = Features;
                }
                return AssignedTenantFeature;
            }());
            exports_1("AssignedTenantFeature", AssignedTenantFeature);
        }
    }
});
