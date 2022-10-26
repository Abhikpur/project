import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from 'src/Models/UserDetails.model';
import { AuthService } from 'src/Services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.css']
})
export class SellerProfileComponent implements OnInit {
  user !:UserDetails;
  email : any;
  id:any;
  fname:any;
  lname:any;
  phone:any;
  address:any;
  city:any;
  state:any;
  createdate:any;

  constructor(public auth:AuthService,public router:Router,private location:Location,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("Email");
    this.auth.GetUserDetailsbyEmail(this.email).subscribe(res1=>
     {
      // console.log(res1);
       this.user=res1;
       this.email=res1.emailId;
       this.id=res1.userId;
       this.fname=res1.firstName;
       this.lname=res1.lastName;
       this.phone=res1.mobileNumber;
       this.address=res1.addressInfo;
       this.city=res1.city;
       this.state=res1.state;
       this.createdate=res1.createdDate;
     })
  }

}
