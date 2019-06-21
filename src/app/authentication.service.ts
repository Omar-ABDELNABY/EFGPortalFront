import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { ILogin } from './Models/ilogin';
import * as moment from "moment";
import { JwtHelperService } from '@auth0/angular-jwt';
import { IRegister } from './Models/i-register';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  APIEndpoint = environment.APIEndpoint;
  tokenStr: string = "token";
  expirationStr: string = "expiration";
  constructor(private http: HttpClient,private jwtHelper: JwtHelperService) {}

  Login(body: ILogin){
    return this.http.post(this.APIEndpoint+"/api/auth/login", body)
  }

  logout() {
      localStorage.removeItem(this.tokenStr);
      localStorage.removeItem(this.expirationStr);
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem(this.expirationStr);
      //const expiresAt = JSON.parse(expiration);
      return moment(expiration);
  }
  isTokenValid(){
    const expiration = localStorage.getItem(this.expirationStr);
    var timeDifference = moment(expiration).toDate().getTime() - new Date().getTime();
    return timeDifference>0;
  }  
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
  public getUserName(): string {
    return localStorage.getItem('username');
  }
  getRoles(){
    return [
      {"Id": 1, "Name": "Admin"},
      {"Id": 2, "Name": "Client"},
      {"Id": 3, "Name": "Hub"},
      {"Id": 4, "Name": "Subhub"},
    ];
  }
  createUser(body: IRegister){
    return this.http.post(this.APIEndpoint+"/api/auth/register", body);
  }
}
