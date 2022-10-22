import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/Models/Product.model';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.css']
})
export class SellerPageComponent implements OnInit {

  showAdd !: boolean;
  showUpdate !: boolean;
  sellerProductData !:any;
  public product !: any ;
  
  public products !: Product[];
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.getAllProducts();

  }
  registerform=new FormGroup(
    {
      Category: new FormControl(""),
      ProductName: new FormControl(""),
      Price: new FormControl(""),
      Description:new FormControl(""),
      ProductImage: new FormControl("")
    }
  )
  get Category():FormControl {
    return this.registerform.get("Category") as FormControl;
  }
  get ProductName():FormControl {
    return this.registerform.get("ProductName") as FormControl;
  }
  get Price():FormControl {
    return this.registerform.get("Price") as FormControl;
  }
  get Description():FormControl {
    return this.registerform.get("Description") as FormControl;
  }
  get ProductImage():FormControl {
    return this.registerform.get("ProductImage") as FormControl;
  }
  getAllProducts()
  {
    this.authService.GetAllProduct().subscribe((res :Product[])=>{
    this.products=res;
    console.log(this.products);
  });
  }
  getProductById( val:any)
  {
   this.authService.GetProduct(val).subscribe(res=>
    {
       this.product=res;
    },
    err=>
    {
      console.log(err);
    })
  }
  registersubmitted()
  {
    console.log(this.registerform.value);
    this.authService.SaveProduct(this.registerform.value).subscribe(res=>{}),
    (error:any)=>console.log(error);
    this.registerform.reset();
  }
  clickAddProduct()
  {
    this.registerform.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  updateProductDetails()
  {
    
  }
  onEdit(prod:any)
  {
    this.showAdd = false;
    this.showUpdate = true;
    this.product=this.products.find((u: Product) => u.productId==prod);
    this.registerform.patchValue(this.product);
    
  }
  deleteProduct(val:any)
  {

  }
}
  