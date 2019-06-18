import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { ConnectionTimelineComponent } from './connection-timeline/connection-timeline.component';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { CreateConnectionComponent } from './Connections/create-connection/create-connection.component';
import { AuthInterceptor } from './auth-interceptor';
import { ConnectionService } from './connection.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    LoginComponent,
    IndexComponent,
    ConnectionTimelineComponent,
    CreateConnectionComponent
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
