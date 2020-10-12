import { Component, OnInit } from '@angular/core';
import { BabyName } from './../models/baby-name';
import { BabyNameService } from './../services/baby-name.service'
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';



@Component({
  selector: 'app-user-hub',
  templateUrl: './user-hub.component.html',
  styleUrls: ['./user-hub.component.css']
})
export class UserHubComponent implements OnInit {

  constructor(
    private babyNameService: BabyNameService,
    private authService: AuthService,
    private router : Router
  ) { }

  ngOnInit() {
  }


 
}
