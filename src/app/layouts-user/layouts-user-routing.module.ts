import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixUserPageComponent } from './pages/fix-user-page/fix-user-page.component';
import { FixUserHistoryComponent } from './pages/fix-user-history/fix-user-history.component';
import { CleanUserComponent } from './pages/clean-user/clean-user.component';
import { CleanUserHistoryComponent } from './pages/clean-user-history/clean-user-history.component';
import { PaymentUserComponent } from './pages/payment-user/payment-user.component';




const routes: Routes = [
  { path: 'fix-user', component: FixUserPageComponent },
  { path: 'fix-user-history', component: FixUserHistoryComponent },
  { path: 'clean-user', component: CleanUserComponent },
  { path: 'clean-user-history', component: CleanUserHistoryComponent },
  { path: 'payment-user', component: PaymentUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsUserRoutingModule { }
