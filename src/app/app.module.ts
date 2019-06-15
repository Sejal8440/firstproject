import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { MyErrorDirective } from './my-error.directive';
import { SqrtPipe } from './sqrt.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { routing } from './app.routing';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveLoginFormComponent } from './reactive-login-form/reactive-login-form.component';
import { LoginComponent } from './login/login.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardHeaderComponent,
    MyErrorDirective,
    SqrtPipe,
    ContactFormComponent,
    RegistrationFormComponent,
    NavigationBarComponent,
    PageNotFoundComponent,
    ReactiveLoginFormComponent,
    LoginComponent,
    AddemployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, RegistrationFormComponent]
})
export class AppModule { }
