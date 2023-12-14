import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';
import { LayoutsUserComponent } from './layouts-user/layouts-user.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { ChangePasswordComponent } from './layouts/change-password/change-password.component';
import { AuthGuard } from './shared/guard/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'change-pass', component: ChangePasswordComponent , canActivate: [AuthGuard] },
  { path: 'welcome-user', component: WelcomeUserComponent  , canActivate: [AuthGuard]},
  {
    path: 'admin',
    component: LayoutsComponent,  canActivate: [AuthGuard],
    children: [{
      path: '',
      loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule)
    }]
  },
  {
    path: 'user',
    component: LayoutsUserComponent, canActivate: [AuthGuard],
    children: [{
      path: '',
      loadChildren: () => import('./layouts-user/layouts-user.module').then(m => m.LayoutsUserModule)
    }]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
