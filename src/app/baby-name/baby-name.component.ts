import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BabyName } from '../models/baby-name';
import { BabyNameService } from '../services/baby-name.service';

@Component({
  selector: 'app-baby-name',
  templateUrl: './baby-name.component.html',
  styleUrls: ['./baby-name.component.css']
})
export class BabyNameComponent implements OnInit {

  id: number
  babyName: BabyName

  constructor(private babyNameService: BabyNameService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.babyName = new BabyName(this.id,'','',0,new Date(),true);
    
    if(this.id!=-1) {
      this.babyNameService.retrieveBabyName(sessionStorage.getItem("username"), this.id)
          .subscribe (
            data => this.babyName = data
          )
    }
  }


  saveBabyName() {
    if(this.id == -1) { //=== ==
      this.babyNameService.createBabyName(sessionStorage.getItem("username"), this.babyName)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['list-baby-names'])
            }
          )
    } else {
      this.babyNameService.updateBabyName(sessionStorage.getItem("username"), this.id, this.babyName)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['list-baby-names'])
            }
          )
    }
  }
}
