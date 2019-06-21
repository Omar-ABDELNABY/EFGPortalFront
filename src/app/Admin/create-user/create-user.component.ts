import { Component, OnInit } from '@angular/core';
import { IRegister } from 'src/app/Models/i-register';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  types;
  newUserData = {} as IRegister;
  constructor(private authenticationService: AuthenticationService, private router: Router) { 
    this.types = authenticationService.getRoles();
  }

  ngOnInit() {
  }
  createNewUser(){
    this.authenticationService.createUser(this.newUserData).subscribe(resp => {
      this.router.navigate(['/']);
    },
    error =>{
      console.log(error);
    }
    );
    console.log(this.newUserData);
  }

}
