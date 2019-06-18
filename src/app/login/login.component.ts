import { Component, OnInit } from '@angular/core';
import { ILogin } from '../Models/ilogin';
import {AuthenticationService} from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
    private router: Router) {
      this.loginData  = {Username:"", Password:"", RememberMe:false};
     }

    loginData : ILogin;
  ngOnInit() {
  }
  Login(){
    this.authenticationService.Login(this.loginData).subscribe(resp => {
      localStorage.setItem('token', resp["token"]);
      localStorage.setItem("expiration", resp["expiration"] );
      this.router.navigate(['/']);
    });
  }

}
