import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public auth : AuthService, private router: Router) { }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  notificationsRoute = {
    link: '/dashboard',
    label: 'Notifications',
    icon: 'notifications',
  }

  mainNavLinks = [
    { link: 'login', label: 'login', icon: 'login' },
    { link: 'dahboard', label: 'dashboard', icon: 'home' },
    { link: 'register', label: 'Register', icon: 'register' },
  ]

  logout(){
    this.auth.logout();
  }

  go () {
    this.router.navigateByUrl('/friends');
    console.log("freinds")
  }


}
