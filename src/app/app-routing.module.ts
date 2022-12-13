import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboaredComponent } from './components/dashboared/dashboared.component';
import { FriendRequestsComponent } from './components/friend-requests/friend-requests.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboaredComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'friends', component: FriendRequestsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
