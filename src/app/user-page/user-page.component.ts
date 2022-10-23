import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  userDetails:any;
  constructor(public auth:AuthService) {}

  ngOnInit(): void {
    this.auth.getUserProfile().subscribe((res:any)=>{
       this.userDetails=res;
       console.log(this.userDetails);
       console.log(this.userDetails.UserId);
       localStorage.setItem('UserId',this.userDetails.UserId);
      },
      err =>{
       console.log(err);
      },
    );
  }

}
