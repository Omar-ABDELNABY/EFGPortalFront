import { Component, OnInit } from '@angular/core';
import { ILogin } from '../Models/ilogin';
import {AuthenticationService} from '../Authentication/Services/authentication.service';
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
      localStorage.setItem("username", resp["claims"][1].value );
      localStorage.setItem("hubId", resp["claims"][3].value );
      console.log(resp);
      this.router.navigate(['/']);
    });
  }

}
