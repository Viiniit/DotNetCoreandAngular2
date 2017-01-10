import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Feature} from "../../viewmodels/feature";
import {AppService} from "../../services/app.service";

@Component({
    selector: "feature-list",
    template: `
            <h2>{{title}}</h2>
            <ul class="items">
                <li *ngFor="let feature of features" 
                    [class.selected]="feature === selectedFeature"
                    (click)="onSelect(feature)">
                    <span>{{feature.Name}}</span>
                </li>
            </ul>
     <button (click)='onCreate()'>Create New</button>

    `,
    styles: [`
        ul.items li { 
            cursor: pointer;
        }
        ul.items li:hover { 
            background-color: #E8FAEC; 
        }
    `]
})

export class FeatureListComponent implements OnInit {
    title: string;
    selectedFeature: Feature;
    features: Feature[];
    errorMessage: string;

    constructor(private AppService: AppService, private router: Router) { }

    ngOnInit() {
        this.title = "Feature";
        var service = this.AppService.getAllFeatures();

        service.subscribe(
            response => this.features = response,
            error => this.errorMessage = <any>error
        );

    }

    onSelect(feature: Feature) {
        this.selectedFeature = feature;
        var link = ['/feature', this.selectedFeature.FeatureId];
        this.router.navigate(link);
    }
    onCreate() {
        this.router.navigate(['/addfeature']);
    }
}