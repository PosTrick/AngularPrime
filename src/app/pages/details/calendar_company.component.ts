import {Component, OnInit} from "@angular/core";
import { Subscription } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: './calendar_company.component.html'
})
export class CalendarCompanyComponent implements OnInit {

    private calendarName: string;
    private subscription: Subscription;

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    }

    ngOnInit(): void {
        this.subscription = this.activatedRoute.params.subscribe(
            (param: any) => {
                this.calendarName = param['name'];
            })
    }
}