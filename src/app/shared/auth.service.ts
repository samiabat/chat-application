import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }



  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email, password).then((res)=>{
      localStorage.setItem('token',JSON.stringify(res.user?.uid));
      this.router.navigate(['dashboard']);
    }, err=>{
      console.log(err.message)
      // this.router.navigate(['/login']);
    },);
  }


  register(email: string, password: string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then(()=>{
      alert("User registered successfully");
      this.router.navigate(['/login']);
    }, err=>{
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err=>{
      alert(err.message)
    });
  }

  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {
      this.router.navigate(['/dashboard']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    })
  }
}
