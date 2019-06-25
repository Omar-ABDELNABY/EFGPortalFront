import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RegisterationComponent} from "./registeration/registeration.component";
import {LoginComponent} from "./login/login.component";
import {IndexComponent} from "./index/index.component";
import {ConnectionTimelineComponent} from "./Connections/connection-timeline/connection-timeline.component"
import {CreateConnectionComponent} from "./Connections/create-connection/create-connection.component"
import { AuthGuardService } from './Guards/auth-guard.service';
import { CreateUserComponent } from './Admin/create-user/create-user.component';
import { BasicTableComponent } from './Connections/basic-table/basic-table.component';
import { RoleGuardService } from './Guards/role-guard.service';

const routes: Routes = [
  { path: "", redirectTo: "portal/home", pathMatch: "full" },
  { path: "register", component:RegisterationComponent},
  {path:"login",component:LoginComponent},
  {path:"portal",component:IndexComponent, canActivate: [AuthGuardService],
  children: [
    { path: "x", component: ConnectionTimelineComponent },
    { path: "createconnection", component: CreateConnectionComponent},
    { path: "createuser", component: CreateUserComponent, canActivate: [RoleGuardService],data: {expectedRole: 'Admin'}  },
    { path: "home", component: BasicTableComponent }
  ]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
