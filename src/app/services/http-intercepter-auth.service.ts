import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterAuthService implements HttpInterceptor{

  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let authHeaderString = this.authService.getAuthenticatedToken();
    // let username = this.authService.getAuthenticatedUser();

    // console.log("token is this" + authHeaderString);

    if(sessionStorage.getItem('username') && sessionStorage.getItem('token')){
      request = request.clone({
        setHeaders:{
          Authorization: sessionStorage.getItem('token')          
        }
      })
    }
    return next.handle(request);
  }
}
