import { Component, OnInit } from '@angular/core';
import { IRegister } from 'src/app/Models/i-register';
import { AuthenticationService } from 'src/app/Authentication/Services/authentication.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { ConnectionService } from 'src/app/Connections/Services/connection.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  types;
  subhubs$;
  hubs$;
  clients$;
  newUserData = {} as IRegister;
  constructor(private authenticationService: AuthenticationService,
     private router: Router,
     private connectionService: ConnectionService) { 
    this.types = authenticationService.getRoles();
  }

  ngOnInit() {
      this.subhubs$ = this.connectionService.getSubhubs();
      this.hubs$ = this.connectionService.getHubs();
      this.clients$ = this.connectionService.getClients();
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
