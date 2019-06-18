import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { ILogin } from './Models/ilogin';
import * as moment from "moment";
import {tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  APIEndpoint = environment.APIEndpoint;
  tokenStr: string = "token";
  expirationStr: string = "expiration";
  constructor(private http: HttpClient) {}

  Login(body: ILogin){
    return this.http.post(this.APIEndpoint+"/api/auth/login", body)
    //.pipe(tap(res => this.setSession))
    //.do(res => this.setSession) 
            //.shareReplay();
  }

  // private setSession(authResult) {
  //   console.log("tap");
  //   const expiresAt = moment().add(authResult.expiresIn,'second');
  //   console.log("moment: "+moment());
  //   localStorage.setItem(this.tokenStr, authResult["token"]);
  //   localStorage.setItem(this.expirationStr, JSON.stringify(expiresAt.valueOf()) );
  // }          

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
}
