import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {AppService} from "../../services/app.service";
import {Feature} from "../../viewmodels/feature";

@Component({
    selector: "feature-detail",
    template: `
        <div *ngIf="feature" class="item-details">
          <div>
                  <label>Feature Name:</label>
                  <input [(ngModel)]="feature.Name" placeholder="Insert the name..."/>
          </div>
        </div>

        <div>
               <button (click)='onSubmit()'>Save</button>
        </div>
        <div>
               <button (click)='onBack()'>Back to Home</button>
        </div>
    `,
    styles: [`
        .item-details {
            margin: 5px;
            padding: 5px 10px;
            border: 1px solid 9BCCE0;
            background-color: #DDF0D5;
            width: 500px;
        }
        .item-details * {
            vertical-align: middle;
        }
    `]
})

export class FeatureDetailComponent implements OnInit {
    feature: Feature;
    sub: any;

    constructor(private AppService: AppService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            var id = +params['id'];
            console.log("selected id " + id);
            if (id.toString() == "NaN") {
                //   this.item = new Tenant();
                this.feature = new Feature(0, null);
            }
            else {
                this.AppService.getFeature(id).subscribe(response => this.feature = response);
            }
        });
    }
    onSubmit() {
        var featureId = this.feature.FeatureId;
        if (featureId == 0) {
            this.AppService.createFeature(this.feature).subscribe(response => this.feature = response);
        }
        else {
            this.AppService.updateFeature(featureId, this.feature).subscribe(response => this.feature = response);
        }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onBack(): void {
        this.router.navigate(['/home']);
    }
}