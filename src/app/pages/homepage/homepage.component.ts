
import {Component, OnInit} from "@angular/core";
import {UtilityService} from "../../services/utility.service";
import {Router} from "@angular/router";
@Component({
    templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit{
    private indextab: number = -1;

    constructor(private utility: UtilityService, private router: Router) {

    }

    ngOnInit():void {
        this.utility.isLogged().then((result: boolean) => {
            if(!result) {
                this.router.navigate(['/login']);
            }
        })
    }

    onTabOpen(event): void {
        this.indextab = event.index;
    }

    public goToCalendar(): void {
        alert("Questo è l'indice aperto: " + this.indextab);
    }
}