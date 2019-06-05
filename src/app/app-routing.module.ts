import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RegisterationComponent} from "./registeration/registeration.component";
import {LoginComponent} from "./login/login.component";
import {IndexComponent} from "./index/index.component";
import {ConnectionTimelineComponent} from "./connection-timeline/connection-timeline.component"

const routes: Routes = [
  { path: "", redirectTo: "Register", pathMatch: "full" },
  { path: "Register", component:RegisterationComponent},
  {path:"Login",component:LoginComponent},
  {path:"portal",component:IndexComponent,
  children: [
    { path: "x", component: ConnectionTimelineComponent }
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
