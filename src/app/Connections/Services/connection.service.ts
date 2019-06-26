import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Iconnection } from '../../Models/iconnection';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  APIEndpoint = environment.APIEndpoint;
  constructor(private http: HttpClient) { }

  createNewConnection(body: Iconnection){
    return this.http.post(this.APIEndpoint+"/api/connections", body)
  }
  getUsersConnections(){
    return this.http.get(this.APIEndpoint+"/api/connections/userConnections")
  }

  getHubs(){
    return this.http.get(this.APIEndpoint+"/api/hubs");
  }
  getSubhubs(){
    return this.http.get(this.APIEndpoint+"/api/subhubs");
  }
  getClients(){
    return this.http.get(this.APIEndpoint+"/api/clients");
  }

  getClientConnectionsByAdmin(clientID){
    return this.http.get(this.APIEndpoint+"/api/connections/clientConnectionsBYAdmin/"+clientID)
  }

  getClientConnectionsByHub(clientID){
    return this.http.get(this.APIEndpoint+"/api/connections/clientConnectionsByHub/"+clientID)
  }
  

}
