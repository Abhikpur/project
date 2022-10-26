import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from 'src/Models/UserDetails.model';
import { AuthService } from 'src/Services/auth.service';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/Models/Product.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user !:UserDetails;
  email : any;
  id:any;
  Role:any;
  fname:any;
  lname:any;
  phone:any;
  address:any;
  City:any;
  State:any;
  Pincode:any;
  Password:any;
  createdate:any;
  public displayvalue:any;
  public navigation!:any;
  public nameForm!:FormGroup;
  search: string = "";
  public products !: Product[];
  public products1 !: Product[];
  public userdetails!:any;
 // navigation!:any ;
  constructor(public auth:AuthService,public router:Router,private location:Location,private route:ActivatedRoute,private formBuilder: FormBuilder,private toastr: ToastrService) 
  {
    // this.name=this.router.getCurrentNavigation()?.extras.state; 
    // console.log(this.name.example);
   // console.log(this.router.getCurrentNavigation());
     
   // console.log(this.router.getCurrentNavigation()?.extras.state);
    // console.log(history.state.example);
    this.nameForm = this.formBuilder.group({
      name: ''
    });
  }
  userid=new FormControl("");
  role=new FormControl("");
  emailid=new FormControl("");
  firstName = new FormControl("");
  lastName = new FormControl();
  mobileNumber = new FormControl();
  addressInfo= new FormControl();
  city = new FormControl();
  state = new FormControl();
  pincode = new FormControl();
  password=new FormControl("");
  createdDate=new FormControl("");
  public registerform=this.formBuilder.group(
    {
      userid: [''],
      role: [''],
      emailid: [''],
      firstName: [''],
      lastName: [''],
      mobileNumber: [''],
      addressInfo: [''],
      city : [''] ,
      state : [''] ,
      pincode: [''],
      password: [''],
      createdDate:['']
    }
  )
  
   
  //  console.log(navigation?.state?.email);
   
  ngOnInit(): void {
    this.getAllProducts();
     this.email = localStorage.getItem("Email");
     this.auth.GetUserDetailsbyEmail(this.email).subscribe(res1=>
      {
       // console.log(res1);
        this.user=res1;
        this.email=res1.emailId;
        this.id=res1.userId;
        this.Role=res1.role;
        this.fname=res1.firstName;
        this.lname=res1.lastName;
        this.phone=res1.mobileNumber;
        this.address=res1.addressInfo;
        this.City=res1.city;
        this.State=res1.state;
        this.Pincode=res1.pincode;
        this.createdate=res1.createdDate;
        this.Password=res1.password;
      })
    
      
  }

  getAllProducts()
  {
    this.auth.GetAllProduct().subscribe((res :Product[])=>{
    this.products1=res;
    console.log(this.products1);
  }); 
  }

  clickme() {
    this.search=this.nameForm.get('name')?.value;
    //console.log(this.nameForm.get('name'));
    console.log(this.search);
    this.auth.GetByCategory(this.search).subscribe(res=>
      {
        this.products=res;
        console.log(this.products);
      })
  }
  addToCart(products:Product)
  {
    //console.log(products);
    this.auth.addToCart(products).subscribe(res=>{
       console.log(res);
       this.toastr.success("Added to Cart Successfully"); 

        
    });
  }

  Edit()
  {
    this.registerform.patchValue({
      userid:this.id,
      role: this.Role,
      emailid:this.email,
      firstName: this.fname,
      lastName: this.lname,
      mobileNumber: this.phone,
      addressInfo: this.address,
      city : this.City,
      state : this.State ,
      pincode: this.Pincode,
      password: this.Password ,
      createdDate:this.createdate
      
    });
  }

  async updateUserDetails()
  {
    console.log(this.registerform.value);
    // this.userdetails=this.registerform.value;
    this.auth.EditUserDetails(this.id,this.registerform.value).subscribe(res=>{
      console.log(res);
      let ref=document.getElementById('cancel');
      ref?.click();
      this.refreshList();
      this.toastr.success("Updated Successfully,");
    })
    
}
 refreshList(){
  this.auth.GetUserDetailsbyEmail(this.email).subscribe(res1=>
    {
     // console.log(res1);
      this.user=res1;
      this.email=res1.emailId;
      this.id=res1.userId;
      this.Role=res1.role;
      this.fname=res1.firstName;
      this.lname=res1.lastName;
      this.phone=res1.mobileNumber;
      this.address=res1.addressInfo;
      this.City=res1.city;
      this.State=res1.state;
      this.Pincode=res1.pincode;
      this.createdate=res1.createdDate;
      this.Password=res1.password;
    });
  }

 
      // }
    // this.navigation= this.router.getCurrentNavigation();
    // this.email=this.navigation?.state?.email;
    // console.log(this.email);
    // this.auth.GetUserDetailsbyId(user:).subscribe((res:any)=>{
    //    this.userDetails=res;
    //    console.log(this.userDetails);
    //    console.log(this.userDetails.UserId);
    //    localStorage.setItem('UserId',this.userDetails.UserId);
    //   },
    //   err =>{
    //    console.log(err);
    //   },
    // );
    // console.log(this.location.getState());
    //console.log(this.user);
    
  }





