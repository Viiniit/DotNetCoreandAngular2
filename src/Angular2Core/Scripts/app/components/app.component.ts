import {Component} from "@angular/core";
@Component({
    selector: "angularjs2demo",
    template: `
        <h3>{{subTitle}}</h3>
            <div class="menu">
                <a class="home" [routerLink]="['/home']">Home</a> |
                <a class="home" [routerLink]="['/feature']">Features</a> |
                <a class="home" [routerLink]="['/tenant']">Tenants</a> |
                <a class="home" [routerLink]="['/assign']">Assign</a> |
            </div>
        <router-outlet></router-outlet>
    `
})


export class AppComponent {
    subTitle = "ASP.NET Core with angular2 and web api";
}
