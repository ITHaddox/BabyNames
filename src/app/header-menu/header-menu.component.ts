import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }



  loggedIn(){
    return this.authService.isUserLoggedIn()
  }

}
