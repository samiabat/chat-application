import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  email : string = '';
  password : string = '';

  constructor(private router: Router, private auth : AuthService) { }

  ngOnInit(): void {
    if (this.auth.logged()){
      this.router.navigateByUrl('/dashboard');
    }
  }

  login() {
    if(this.email == '') {
      alert('Please enter email');
      return;
    }
    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email,this.password);
    
    this.email = '';
    this.password = '';
  }


  signInWithGoogle() {
    this.auth.googleSignIn();
  }

}
