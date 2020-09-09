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
    let authHeaderString = this.authService.getAuthenticatedToken();
    let username = this.authService.getAuthenticatedUser();

    if(authHeaderString && username){
      request = request.clone({
        setHeaders:{
          Authorization : authHeaderString
        }
      })
    }
    return next.handle(request);
  }
}
