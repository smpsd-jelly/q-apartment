import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixUserPageComponent } from './pages/fix-user-page/fix-user-page.component';

const routes: Routes = [
  { path: 'fix-user', component: FixUserPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsUserRoutingModule { }
