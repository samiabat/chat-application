import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboared',
  templateUrl: './dashboared.component.html',
  styleUrls: ['./dashboared.component.css']
})
export class DashboaredComponent {
  constructor(private router: Router,  private auth : AuthService) { }

  ngOnInit(): void {
    if (!this.auth.logged()){
      this.router.navigateByUrl('/login');
    }
  }
}
