import {Tenant} from "../viewmodels/tenant";
import {Feature} from "../viewmodels/feature";

export class AssignedTenantFeature {
    constructor(
        public Tenant: Tenant,
        public Features: Feature[]
    ) { }
}