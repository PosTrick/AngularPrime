import {Component, OnInit} from "@angular/core";
import {User} from "../../model/user.model";
import {AuthService} from "../../services/auth.service";

import {Message} from 'primeng/primeng';
import {Router} from "@angular/router";
import {UtilityService} from "../../services/utility.service";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
    private username: string;
    private password: string;
    private msgs: Message[] = [];

    constructor(private authService: AuthService, private router: Router, private utility:UtilityService) {

    }

    ngOnInit():void {
        this.utility.isLogged().then((result: boolean) => {
            if(result) {
                this.router.navigate(['/homepage']);
            }
        })
    }

    public login(): void {
        let user: User = {
            username: this.username,
            password: this.password
        }
        this.authService.login(user).then((result:boolean) => {
            if(result) {
                if(typeof (Storage) !== 'undefined') {
                    sessionStorage.setItem('User',user.username);
                }
                this.router.navigate(['/homepage']);
            } else {
                this.msgs.push({severity:'error', summary:'Attenzione', detail:'Le credenziali sono errate'});
            }
        })

    }
}