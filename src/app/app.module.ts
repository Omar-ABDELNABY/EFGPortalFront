import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { ConnectionTimelineComponent } from './Connections/connection-timeline/connection-timeline.component';
import { AuthenticationService } from './Authentication/Services/authentication.service';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { CreateConnectionComponent } from './Connections/create-connection/create-connection.component';
import { AuthInterceptor } from './Interceptor/auth-interceptor';
import { ConnectionService } from './Connections/Services/connection.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthGuardService } from './Guards/auth-guard.service';
import { CreateUserComponent } from './Admin/create-user/create-user.component';
import { BasicTableComponent } from './Connections/basic-table/basic-table.component';
import { RoleGuardService } from './Guards/role-guard.service';
import { SpecificConnectionsComponent } from './connections/specific-connections/specific-connections.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    LoginComponent,
    IndexComponent,
    ConnectionTimelineComponent,
    CreateConnectionComponent,
    CreateUserComponent,
    BasicTableComponent,
    SpecificConnectionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    ConnectionService,
    AuthGuardService,
    RoleGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
