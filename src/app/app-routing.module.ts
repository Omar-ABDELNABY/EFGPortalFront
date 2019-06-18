import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RegisterationComponent} from "./registeration/registeration.component";
import {LoginComponent} from "./login/login.component";
import {IndexComponent} from "./index/index.component";
import {ConnectionTimelineComponent} from "./connection-timeline/connection-timeline.component"
import {CreateConnectionComponent} from "./Connections/create-connection/create-connection.component"

const routes: Routes = [
  { path: "", redirectTo: "register", pathMatch: "full" },
  { path: "register", component:RegisterationComponent},
  {path:"login",component:LoginComponent},
  {path:"portal",component:IndexComponent,
  children: [
    { path: "x", component: ConnectionTimelineComponent },
    { path: "createconnection", component: CreateConnectionComponent }
  ]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
