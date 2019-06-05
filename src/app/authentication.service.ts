import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { ILogin } from './Models/ilogin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  APIEndpoint = environment.APIEndpoint;
  constructor(private http: HttpClient) {}

  Login(body: ILogin){
    console.log("Login from Service");
    console.log(body);
    var response = this.http.post(this.APIEndpoint+"/api/auth/login", body); 
    return response;
  }
}
