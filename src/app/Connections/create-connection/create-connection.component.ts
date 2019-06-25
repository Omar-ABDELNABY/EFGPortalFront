import { Component, OnInit } from '@angular/core';
import { Iconnection } from 'src/app/Models/iconnection';
import { ConnectionService } from 'src/app/Connections/Services/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-connection',
  templateUrl: './create-connection.component.html',
  styleUrls: ['./create-connection.component.css']
})
export class CreateConnectionComponent implements OnInit {

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

  newConnData = {} as Iconnection;
  subhubs$;
  hubs$;
  clients$;
  constructor(private connectionService: ConnectionService,
    private router: Router) { 
      this.subhubs$ = connectionService.getSubhubs();
      this.hubs$ = connectionService.getHubs();
      this.clients$ = connectionService.getClients();
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
