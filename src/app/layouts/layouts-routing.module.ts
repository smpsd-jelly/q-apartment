import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './pages/admin-homepage/admin-homepage.component';
import { FixPageComponent } from './pages/fix-page/fix-page.component';
import { CleanPageComponent } from './pages/clean-page/clean-page.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ElectricityMeterComponent } from './pages/electricity-meter/electricity-meter.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { AllElectricityMeterComponent } from './pages/all-electricity-meter/all-electricity-meter.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  { path: 'home', component: AdminHomepageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'fix-page', component: FixPageComponent },
  { path: 'clean-page', component: CleanPageComponent },
  { path: 'payment-page', component: PaymentComponent },
  { path: 'meter-page', component: ElectricityMeterComponent },
  { path: 'meter-page/:ID', component: ElectricityMeterComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'user-list', component: UserListComponent},
  { path: 'all-meter', component: AllElectricityMeterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
