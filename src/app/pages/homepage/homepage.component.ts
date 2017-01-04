import {Component, OnInit} from "@angular/core";
import {UtilityService} from "../../services/utility.service";
import {Router} from "@angular/router";
import { COMPANIES } from '../../mock/companies.mock';
import {Company} from "../../model/company.model";

@Component({
    templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit{
    private indextab: number = -1;
    private companies: Company[];

    constructor(private utility: UtilityService, private router: Router) {

    }

    ngOnInit():void {
        this.utility.isLogged().then((result: boolean) => {
            if(!result) {
                this.router.navigate(['/login']);
            }
        });
        this.companies = COMPANIES;
    }

    onTabOpen(event): void {
        this.indextab = event.index;
    }

    public goToCalendar(): void {
        this.router.navigate(['/calendar', this.companies[this.indextab].name]);
    }
}