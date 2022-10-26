import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/Models/Product.model';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public nameForm!:FormGroup;
  search: string = "";
  public products !: Product[];
  
  constructor(public auth:AuthService,public router:Router,private route:ActivatedRoute,private formBuilder: FormBuilder,private toastr: ToastrService) { 
    this.nameForm = this.formBuilder.group({
      name: ''
    });
  }

  ngOnInit(): void {
  }

  clickme()
  {
    this.search=this.nameForm.get('name')?.value;
    //console.log(this.nameForm.get('name'));
    console.log(this.search);
    this.auth.GetByCategory(this.search).subscribe(res=>
      {
        this.products=res;
        console.log(this.products);
      })

  }
  addToCart(prod:any)
  {
    this.toastr.warning("You have to login first");

  }

}
