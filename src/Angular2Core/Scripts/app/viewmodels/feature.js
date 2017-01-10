System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Feature;
    return {
        setters:[],
        execute: function() {
            Feature = (function () {
                function Feature(FeatureId, Name) {
                    this.FeatureId = FeatureId;
                    this.Name = Name;
                }
                return Feature;
            }());
            exports_1("Feature", Feature);
        }
    }
});
