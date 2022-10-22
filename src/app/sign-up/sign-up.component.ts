import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  registerform=new FormGroup(
    {
      FirstName: new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z].*')]),
      LastName: new FormControl("",[Validators.required]),
      EmailId: new FormControl("",[Validators.required,Validators.email]),
      MobileNumber:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      AddressInfo: new FormControl("",[Validators.required]),
      Role: new FormControl("",[Validators.required]),
      City: new FormControl("",[Validators.required]),
      State: new FormControl("",[Validators.required]),
      Pincode:new FormControl("",[Validators.required]),
      Password:new FormControl("",[Validators.required,Validators.minLength(6)])
    }
  )
  
  get FirstName():FormControl {
    return this.registerform.get("FirstName") as FormControl;
  }
  get LastName():FormControl {
    return this.registerform.get("LastName") as FormControl;
  }
  get EmailId():FormControl {
    return this.registerform.get("EmailId") as FormControl;
  }
  get MobileNumber():FormControl {
    return this.registerform.get("MobileNumber") as FormControl;
  }
  get AddressInfo():FormControl {
    return this.registerform.get("AddressInfo") as FormControl;
  }
  get Role():FormControl {
    return this.registerform.get("Role") as FormControl;
  }
  get City():FormControl {
    return this.registerform.get("City") as FormControl;
  }
  get State():FormControl {
    return this.registerform.get("State") as FormControl;
  }
  get Pincode():FormControl {
    return this.registerform.get("Pincode") as FormControl;
  }
  get Password():FormControl {
    return this.registerform.get("Password") as FormControl;
  }

  registersubmitted()
  {
   this.authService.addUserDetails(this.registerform.value).subscribe(res=>{});
   
   alert("Signup Successful");
   this.registerform.reset();
   this.router.navigate(['login']);
  }

}
