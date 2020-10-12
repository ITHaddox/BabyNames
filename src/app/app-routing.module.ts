import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserHubComponent } from './user-hub/user-hub.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardGuard } from './services/route-guard.guard';
import { ListBabyNamesComponent } from './list-baby-names/list-baby-names.component';
import { BabyNameComponent } from './baby-name/baby-name.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'hub', component: UserHubComponent, canActivate:[RouteGuardGuard]},
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardGuard]},
  { path: 'list-baby-names', component: ListBabyNamesComponent, canActivate:[RouteGuardGuard]},
  { path: 'baby-name/:id', component: BabyNameComponent, canActivate:[RouteGuardGuard]},
  // { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
