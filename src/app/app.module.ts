import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminHomepageComponent } from './layouts/pages/admin-homepage/admin-homepage.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FixPageComponent } from './layouts/pages/fix-page/fix-page.component';
import { CleanPageComponent } from './layouts/pages/clean-page/clean-page.component';
import { PaymentComponent } from './layouts/pages/payment/payment.component';
import { ElectricityMeterComponent } from './layouts/pages/electricity-meter/electricity-meter.component';
import { LayoutsUserComponent } from './layouts-user/layouts-user.component';
import { FixUserPageComponent } from './layouts-user/pages/fix-user-page/fix-user-page.component';
import { FixUserHistoryComponent } from './layouts-user/pages/fix-user-history/fix-user-history.component';
import { CleanUserHistoryComponent } from './layouts-user/pages/clean-user-history/clean-user-history.component';
import { CleanUserComponent } from './layouts-user/pages/clean-user/clean-user.component';
import { PaymentUserComponent } from './layouts-user/pages/payment-user/payment-user.component';
import { RegisterComponent } from './register/register.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { AddUserComponent } from './layouts/pages/add-user/add-user.component';
import { AllElectricityMeterComponent } from './layouts/pages/all-electricity-meter/all-electricity-meter.component';
import { PaymentInfoUserComponent } from './layouts-user/pages/payment-info-user/payment-info-user.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { ChangePasswordComponent } from './layouts/change-password/change-password.component';
import { UserListComponent } from './layouts/pages/user-list/user-list.component';

const config: SocketIoConfig = { url: environment.socketEndpoint, options: {} }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminHomepageComponent,
    LayoutsComponent,
    SidebarComponent,
    FixPageComponent,
    CleanPageComponent,
    PaymentComponent,
    ElectricityMeterComponent,
    FixUserPageComponent,
    LayoutsUserComponent,
    PaymentUserComponent,
    CleanUserComponent,
    CleanUserHistoryComponent,
    FixUserHistoryComponent,
    RegisterComponent,
    AddUserComponent,
    AllElectricityMeterComponent,
    PaymentInfoUserComponent,
    WelcomeUserComponent,
    ChangePasswordComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    NgbPaginationModule,
    SocketIoModule.forRoot(config),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
