import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CalendarService {

    constructor(private http: Http) {

    }

    getCalendar(): Promise<any> {
        return this.http.get('http://www.mocky.io/v2/586c2fb1110000f51c2e0ea7')
            .toPromise();
    }

}