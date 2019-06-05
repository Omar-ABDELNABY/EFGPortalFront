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
    private router: Router,) {
      this.loginData  = {Username:"", Password:""};
     }

    loginData : ILogin;
  ngOnInit() {
  }
  Login(){
    console.log("Login from component");
    this.authenticationService.Login(this.loginData).subscribe(resp => {
      console.log("resp");
      console.log(resp);
      this.router.navigate(['/']);
    });
  }

}
