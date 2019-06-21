import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/connection.service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit {

  userHasConnections;
  userConnections$ = null;
  constructor(private connectionService: ConnectionService) { 
    this.userConnections$ = connectionService.getUsersConnections();
    this.userConnections$.subscribe(resp=>{
      if (resp["length"] == 0)
        this.userHasConnections = false;
      else
        this.userHasConnections = true;
      console.log(resp);
    });
  }

  ngOnInit() {
  }

}
