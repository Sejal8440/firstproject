import { Routes, RouterModule } from "@angular/router";
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import {UserguardService} from './userguard.service'
import { CanDeactivateGuardService } from './contact-form/can-deactivate-guard.service';

const arr: Routes=[
{path: '', redirectTo: '/home', pathMatch:'full'},
{path: 'contact form', component: ContactFormComponent, canDeactivate: [CanDeactivateGuardService]},
{path: 'dashboard header', component: DashboardHeaderComponent},
{path: 'registration form', canActivate:[UserguardService], component: RegistrationFormComponent},
{path: 'login form', component: LoginComponent},
{path: '**', component: PageNotFoundComponent}
];

export const routing = RouterModule.forRoot(arr);