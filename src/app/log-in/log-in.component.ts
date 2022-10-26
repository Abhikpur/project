import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators,FormGroup,FormControl,AbstractControl } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/Services/auth.service';
import { AuthGuard } from 'src/Services/Guard.guard';
import { of } from 'rxjs';
import { UserDetails } from 'src/Models/UserDetails.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  
  public user!:UserDetails;
  public email!:any;
  public id!:any;
  constructor(private http:HttpClient,private router:Router,private Service: AuthService,private gservice:AuthGuard,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  loginform=new FormGroup(
    {      
      EmailId: new FormControl("",[Validators.required,Validators.email]), 
      Role: new FormControl("",[Validators.required]),
      Password:new FormControl("",[Validators.required])
    }
  )
  
  
  get EmailId():FormControl {
    return this.loginform.get("EmailId") as FormControl;
  }
  
  get Role():FormControl {
    return this.loginform.get("Role") as FormControl;
  }
  
  get Password():FormControl {
    return this.loginform.get("Password") as FormControl;
  }

  onsubmit(){
    this.Service.userlogin(this.loginform.value).subscribe((res:any)=>{
      // localStorage.setItem('token',res?.token);
      // console.log(res.token); 
      console.log(res);
      this.email=res;
    
      if(this.loginform.value.EmailId=='admin@gmail.com'&& this.loginform.value?.Role=='Admin')
       { 
         this.Service.GetUserDetailsbyEmail(res).subscribe(res2=>
          {
            console.log(res);
            console.log(res2);
            this.user=res2;
            this.email=res2.emailId;
            this.id=res2.userId;
          })
         localStorage.setItem('Email',this.email);
         const navigationExtras: NavigationExtras = {state: { email: this.email}};
         this.toastr.success("Login Successfully");
         this.router.navigate(['adminpage'],navigationExtras);
       }
      else if(this.loginform.value.Role=='user')
       {
         this.Service.GetUserDetailsbyEmail(res).subscribe(res1=>
         {
            this.user=res1;
            this.email=res1.emailId;
            this.id=res1.userId;         
          })
           localStorage.setItem('Email',this.email);
        //this.router.navigate(['userpage']); 
        this.toastr.success("Login Successfully");
         const navigationExtras: NavigationExtras = {state: { email: this.email}};        
         this.router.navigate(['userpage'],navigationExtras); 
       }
       else if (this.loginform.value.Role=='seller')
       {
        this.Service.GetUserDetailsbyEmail(res).subscribe(res3=>
          {
            this.user=res3;
            this.email=res3.emailId;
            this.id=res3.userId;
          })
        localStorage.setItem('Email',this.email);
        this.toastr.success("Login Successfully"); 
        this.router.navigate(['sellerpage']); 
       }
       
    },
    err=>{
      if(err.status==400)
      alert("Authentication Failed!! Invalid Credentails");
      else
      console.log(err);
      this.loginform.reset();
      
    })
  }

}
  



