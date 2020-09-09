import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'tyler'
  password = 'pass'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleJWTAuthLogin(){
    this.authService.executeJWTAuthenticationService(this.username, this.password)
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate(['hub'])
        this.invalidLogin = false
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }

}
