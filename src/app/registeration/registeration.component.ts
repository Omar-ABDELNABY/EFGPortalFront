import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Authentication/Services/authentication.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    console.log(this.authenticationService.isAuthenticated());
  }

}
