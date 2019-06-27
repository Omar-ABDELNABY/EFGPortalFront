import { Component, OnInit } from '@angular/core';
import { RoleGuardService } from 'src/app/Guards/role-guard.service';
import { ConnectionService } from 'src/app/Connections/Services/connection.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specific-connections',
  templateUrl: './specific-connections.component.html',
  styleUrls: ['./specific-connections.component.css']
})
export class SpecificConnectionsComponent implements OnInit {
  isAdmin: boolean = false;
  isHub: boolean = false;
  isSubhub: boolean = false;
  clientID;
  ClientConnections$  = null;
  constructor(private roleGuardService: RoleGuardService,
    private connectionService: ConnectionService,
    private route:ActivatedRoute) {
         
  this.isAdmin=roleGuardService.isAdmin();
  this.isHub=roleGuardService.isHub();
  this.isSubhub=roleGuardService.isSubhub();
  }

  ngOnInit() {
    console.log(localStorage.getItem("hubId"));
    this.route.paramMap.subscribe(data=>{
      this.clientID=data.get("clientID");
    })
    console.log(this.isAdmin);
    console.log(this.isHub);
    if(this.isAdmin)
    {
     this.ClientConnections$ = this.connectionService.getClientConnectionsByAdmin( this.clientID);
     
    }
    else if (this.isHub)
    {
      this.ClientConnections$ = this.connectionService.getClientConnectionsByHub( this.clientID);
    }
    else if (this.isSubhub)
    {
      this.ClientConnections$ = this.connectionService.getClientConnectionsBySubhub( this.clientID);
    }
  
  }

}
