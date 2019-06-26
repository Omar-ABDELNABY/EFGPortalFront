import { Component, OnInit } from '@angular/core';
import { Iconnection } from 'src/app/Models/iconnection';
import { ConnectionService } from 'src/app/Connections/Services/connection.service';
import { Router } from '@angular/router';
import { RoleGuardService } from 'src/app/Guards/role-guard.service';

@Component({
  selector: 'app-create-connection',
  templateUrl: './create-connection.component.html',
  styleUrls: ['./create-connection.component.css']
})
export class CreateConnectionComponent implements OnInit {
  newConnData = {} as Iconnection;
  subhubs$;
  hubs$;
  clients$;
  private _showHideSubhub: boolean = false;
    get showHideSubhub():boolean {
      return this._showHideSubhub;
    }
    set showHideSubhub(val:boolean) {
      if(val==false)
        this.newConnData.subhubID=null;
      this._showHideSubhub = val;
    }


    get hubID():number {
      return this.newConnData.hubID;
    }
    set hubID(val:number) {
      if(val==1 || val == 4)
        this.setConnectionsTags();
        this.newConnData.hubID = val;
    }

    private setConnectionsTags(){
      this.newConnData.tag1 = 
      this.newConnData.tag100 = 
      this.newConnData.tag115 = 
      this.newConnData.tag207 = 
      this.newConnData.tag21 = 
      this.newConnData.tag30 = 
      this.newConnData.tag48 = 
      this.newConnData.tag55 = null;
    }
    isAdmin: boolean = false;
    isClient: boolean = false;
    isHub: boolean = false;
    isSubhub: boolean = false;

    isBloomberg: boolean = false;
    isReuters: boolean = false;
    isFidessa: boolean = false;

  
  constructor(private connectionService: ConnectionService,
              private roleGuardService: RoleGuardService,
              private router: Router) { 
      this.subhubs$ = connectionService.getSubhubs();
      this.hubs$ = connectionService.getHubs();
      this.clients$ = connectionService.getClients();
      this.isAdmin = roleGuardService.isAdmin();
      this.isClient = roleGuardService.isClient();
      this.isHub = roleGuardService.isHub();
      this.isSubhub = roleGuardService.isSubhub();
      
      this.isBloomberg = roleGuardService.isBloomberg();
      this.isReuters = roleGuardService.isReuters();
      this.isFidessa = roleGuardService.isFidessa();
    }



  createNewConnection(){
    console.log(this.newConnData);
    this.connectionService.createNewConnection(this.newConnData).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
  }

}
