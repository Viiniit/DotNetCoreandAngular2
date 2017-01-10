System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Tenant;
    return {
        setters:[],
        execute: function() {
            Tenant = (function () {
                function Tenant(TenantId, Name, Url) {
                    this.TenantId = TenantId;
                    this.Name = Name;
                    this.Url = Url;
                }
                return Tenant;
            }());
            exports_1("Tenant", Tenant);
        }
    }
});
