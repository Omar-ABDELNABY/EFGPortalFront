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
  isClient(): boolean{
    if (!this.authenticationService.isAuthenticated() || 
        this.getRole() !== "Client")
      return false;
    return true;
  }
  isHub(): boolean{
    if (!this.authenticationService.isAuthenticated() || 
        this.getRole() !== "Hub")
      return false;
    return true;
  }
  isSubhub(): boolean{
    if (!this.authenticationService.isAuthenticated() || 
        this.getRole() !== "Subhub")
      return false;
    return true;
  }

  getRole() : string {
    const roleStr = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
    const token = localStorage.getItem('token');
    const tokenPayload = decode(token);
    return tokenPayload[roleStr];
  }
  
  isBloomberg():boolean{
    var hubId = localStorage.getItem("hubId");
    if(hubId=="1" || hubId =="2")
      return true;
    return false;
  }
  isReuters():boolean{
    var hubId = localStorage.getItem("hubId");
    if(hubId=="3" || hubId =="4")
      return true;
    return false;
  }
  isFidessa():boolean{
    var hubId = localStorage.getItem("hubId");
    if(hubId=="5")
      return true;
    return false;
  }

}
