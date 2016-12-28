import {Injectable} from "@angular/core";
import {User} from "../model/user.model";
import {USER} from "../mock/user.mock";

@Injectable()
export class AuthService {

    login(user: User): Promise<boolean> {
        if(user.username === USER.username && user.password === USER.password) {
            return Promise.resolve(true);
        } else {
            return Promise.resolve(false);
        }
    }

}