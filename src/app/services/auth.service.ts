import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  executeJWTAuthenticationService(username, password) {
    return this.http.post<any>(
      `${API_URL}/authenticate`,{username, password})
      .pipe(
        map(
        data => {
          sessionStorage.setItem("username", username);
          sessionStorage.setItem("token", "Bearer " + data.token);
          console.log(`Token = ${data.token}`);
          return data;
          }
       )
      );        
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem("username")
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem("token")
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username")
    console.log(!(user===null))
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("token")
  }

}
