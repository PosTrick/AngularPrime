import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LoginComponent} from "./pages/login/login.component";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {HeaderComponent} from "./pages/common/header.component";
import {CalendarCompanyComponent} from "./pages/details/calendar_company.component";

import {RoutingModule} from './app.routes';

//Services
import {AuthService} from './services/auth.service';
import {UtilityService} from './services/utility.service';
import {CalendarService} from "./services/calendar.service";

//Componenti Primeng
import {InputTextModule, ButtonModule, GrowlModule, AccordionModule} from 'primeng/primeng';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomepageComponent,
        HeaderComponent,
        CalendarCompanyComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RoutingModule,
        InputTextModule,
        ButtonModule,
        GrowlModule,
        AccordionModule
    ],
    providers: [AuthService, UtilityService, CalendarService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
