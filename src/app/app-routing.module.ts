import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RegisterationComponent} from "./registeration/registeration.component";
import {LoginComponent} from "./login/login.component";
import {IndexComponent} from "./index/index.component";


const routes: Routes = [
  { path: "", redirectTo: "Register", pathMatch: "full" },
  { path: "Register", component:RegisterationComponent},
  {path:"portal",component:IndexComponent,
  children: [
    { path: "", redirectTo: "x", pathMatch: "full" },
    { path: "x", component: RegisterationComponent }
  ]},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
