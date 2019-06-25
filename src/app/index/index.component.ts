import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Authentication/Services/authentication.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { RoleGuardService } from '../Guards/role-guard.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isAdmin: boolean = false;
   
  constructor(private authenticationService: AuthenticationService,
    private router: Router, private roleGuardService: RoleGuardService) {
    this.username = this.authenticationService.getUserName();
    this.isAdmin = roleGuardService.isAdmin();
     }

    username;
  ngOnInit() {
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
