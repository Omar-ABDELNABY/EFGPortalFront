import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConnectionService } from 'src/app/Connections/Services/connection.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.userConnectionsSub.unsubscribe();
  }

  userHasConnections;
  userConnections$ = null;
  
  userConnectionsSub: Subscription = null;
  constructor(private connectionService: ConnectionService) { 
    this.userConnections$ = connectionService.getUsersConnections();
    this.userConnectionsSub = this.userConnections$.subscribe(resp=>{
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
