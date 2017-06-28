import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './account/logout.component';
import { UserDetailComponent } from './user/detail.component';
import { AdduserComponent } from './adduser/adduser.component'

const mainRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'addusers', component: AdduserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }