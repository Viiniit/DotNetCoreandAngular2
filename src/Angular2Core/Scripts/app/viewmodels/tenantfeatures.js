System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TenantFeatures;
    return {
        setters:[],
        execute: function() {
            TenantFeatures = (function () {
                function TenantFeatures(FeatureId, TenantId) {
                    this.FeatureId = FeatureId;
                    this.TenantId = TenantId;
                }
                return TenantFeatures;
            }());
            exports_1("TenantFeatures", TenantFeatures);
        }
    }
});
