import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboared',
  templateUrl: './dashboared.component.html',
  styleUrls: ['./dashboared.component.css']
})
export class DashboaredComponent {
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
    
  logout(){
    this.auth.logout();
  }
}
