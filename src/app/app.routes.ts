import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {CalendarCompanyComponent} from "./pages/details/calendar_company.component";

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'homepage',
        component: HomepageComponent
    },
    {
        path: 'calendar/:name',
        component: CalendarCompanyComponent
    }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);