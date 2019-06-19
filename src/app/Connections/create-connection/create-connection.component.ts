import { Component, OnInit } from '@angular/core';
import { Iconnection } from 'src/app/Models/iconnection';
import { ConnectionService } from 'src/app/connection.service';
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
