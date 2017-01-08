import {Injectable} from "@angular/core";
import {CalCompanies} from "../model/cal_companies.model";
import {CALCOMPANIES} from "../mock/cal_companies.mock";

@Injectable()
export class CalendarService {

    getCalendar(name: string): Promise<CalCompanies> {

        let company: CalCompanies = null;
        CALCOMPANIES.forEach(element => {
            if(element.name_company === name) {
                company = element;
                return false;
            }
        });
        return Promise.resolve(company);
    }

}