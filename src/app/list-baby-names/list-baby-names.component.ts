import { Component, OnInit } from '@angular/core';
import { BabyName } from './../models/baby-name';
import { BabyNameService } from './../services/baby-name.service'
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-list-baby-names',
  templateUrl: './list-baby-names.component.html',
  styleUrls: ['./list-baby-names.component.css']
})
export class ListBabyNamesComponent implements OnInit {
  names: BabyName[]
  msg: string = "hello"
  message: string
  boyNames: BabyName[] = []
  girlNames: BabyName[]= []
  babyName: BabyName
  
    constructor(
      private babyNameService: BabyNameService,
      private authService: AuthService,
      private router : Router
    ) { }
  
    ngOnInit() {
      this.refreshBabyNames();
    }

    refreshBabyNames(){
      this.babyNameService.retrieveAllBabyNames(sessionStorage.getItem("username")).subscribe(
        response => {
          console.log(response);
          this.girlNames = []
          this.boyNames = []
          response.forEach( name => {
            console.log("Is girl " + name.girl);
            if(name.girl){
              console.log("Sorting list - sent name to girlNames");
              this.girlNames.push(name);
            }
            else {
              console.log("Sorting list - sent name to boyNames");
              
              this.boyNames.push(name);
              
            }
          });
        }
      )
    }


    deleteBabyName(id) {
      console.log(`delete baby name ${id}` )
      this.babyNameService.deleteBabyName(sessionStorage.getItem("username"), id).subscribe (
        response => {
          console.log(response);
          this.message = `Delete of Baby Name ${id} Successful!`;
          this.refreshBabyNames();
        }
      )
    }
  
    updateBabyName(id) {
      console.log(`update ${id}`)
      this.router.navigate(['baby-name',id])
    }
  
    addBabyName() {
      this.router.navigate(['baby-name',-1])
    }



    // addBabyName(){
    //   this.babyNameService.createBabyName(
    //     sessionStorage.getItem("username"),
    //     this.babyName)
    //     .subscribe(
    //     response => {
    //       alert("Baby Name created successfully.");
    //       this.refreshBabyNames()
    //     }
    //   );
      
    // }
      
    getGreeting(){
      this.babyNameService.retrieveGreeting().subscribe(
        response => {
          console.log(response);
          this.msg = response.message;
        }
      )
    }
  }
  