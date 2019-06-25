import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import {AuthenticationService} from '../Authentication/Services/authentication.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate  {

  constructor(public authenticationService: AuthenticationService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
    const roleStr = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
    // decode the token to get its payload
    const tokenPayload = decode(token);
    if (
      !this.authenticationService.isAuthenticated() || 
      tokenPayload[roleStr] !== expectedRole
    ) {
      this.router.navigate(['/portal/home']);
      return false;
    }
    return true;
  }

  isAdmin(): boolean{
    const token = localStorage.getItem('token');
    const roleStr = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
    const tokenPayload = decode(token);
    if (!this.authenticationService.isAuthenticated() || 
        tokenPayload[roleStr] !== "Admin")
      return false;
    return true;

  }

  getRole() : string {
    const roleStr = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
    const token = localStorage.getItem('token');
    const tokenPayload = decode(token);
    return tokenPayload[roleStr];
  }
}
