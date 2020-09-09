import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpIntercepterAuthService } from './services/http-intercepter-auth.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserHubComponent } from './user-hub/user-hub.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    LoginComponent,
    UserHubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterAuthService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
