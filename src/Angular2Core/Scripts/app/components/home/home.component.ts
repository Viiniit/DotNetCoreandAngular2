import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {AppService} from "../../services/app.service";
import {Feature} from "../../viewmodels/feature";
import {AssignedTenantFeature} from "../../viewmodels/tenantassigned";

@Component({
    selector: "home",
    template: `
        <div class="div-wrapper">
            <div class="div-lounge">
        <table>
            <tr>
            <td></td>
            <td *ngFor="let feature of features"><span>{{feature.Name}}</span></td>
            </tr>
            <tr *ngFor="let item of assignedtenantfeatures">
            <td>{{item.Tenant.Name}}</td>
            <td *ngFor="let feature of features">
            <span class="checkmark" *ngIf = "getValue(item.Features,feature)">
                 <div class="checkmark_stem"></div>
                 <div class="checkmark_kick"></div>
            </span>
            <span *ngIf = "!getValue(item.Features,feature)">
            <svg>
                 <path stroke="black" stroke-width="2" fill="none" d="M6.25,6.25,17.75,17.75" />
                 <path stroke="black" stroke-width="2" fill="none" d="M6.25,17.75,17.75,6.25" />
            </svg>
            </span>
            </td>
            </tr>
        </table>
        </div>
    `,
    styles: [`
        .div-wrapper {
          margin-right: 300px;
        }
        .div-lounge {
          float: left;
          width: 100%;

        }
        .div-lounge div{
           margin:0 0 10px 0;
           border: 1px solid #9BCCE0;
           background-color: #DDF0D5;
        }
.checkmark {
    display:inline-block;
    width: 22px;
    height:22px;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);
}

.checkmark_stem {
    position: absolute;
    width:3px;
    height:9px;
    background-color:#ccc;
    left:11px;
    top:6px;
}

.checkmark_kick {
    position: absolute;
    width:3px;
    height:3px;
    background-color:#ccc;
    left:8px;
    top:12px;
}
svg {
    height: 20px;
    width: 20px;
}
    `]
})

export class HomeComponent implements OnInit {
    errorMessage: string;
    features: Feature[];
    assignedtenantfeatures: AssignedTenantFeature[];
    constructor(private AppService: AppService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.AppService.getAllFeatures().subscribe(
            response => this.features = response,
            error => this.errorMessage = <any>error
        );
        this.AppService.getTenantFeatures().subscribe(
            response => this.assignedtenantfeatures = response,
            error => this.errorMessage = <any>error
        );
    }
    getValue(item: Feature[], feature: Feature) {
        let isPresent: boolean = false;
        item.forEach(function (value, index) {
            if (value.FeatureId == feature.FeatureId) {
                console.log("FeatureArray: " + JSON.stringify(value));
                console.log("Feature: " + JSON.stringify(feature));
                isPresent = true;
            }
        });
        return isPresent;
    }
}