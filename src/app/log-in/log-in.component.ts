import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators,FormGroup,FormControl,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  
  
  constructor(private http:HttpClient,private router:Router,private Service: AuthService) { }

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
    this.Service.userlogin(this.loginform.value).subscribe(res=>{
      // localStorage.setItem('token',res.token);
      // console.log(res.token); 
      console.log(this.loginform.value);
      if(this.loginform.value.EmailId=='admin@gmail.com'&& this.loginform.value.Role=='Admin')
       {  
         this.router.navigate(['adminpage']);
       }
      else if(this.loginform.value.Role=='user')
       {
         this.router.navigate(['userpage']);  
       }
       else if (this.loginform.value.Role=='seller')
       {
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
  



