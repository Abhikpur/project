import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/Models/Product.model';
import { AuthService } from 'src/Services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.css']
})
export class SellerPageComponent implements OnInit {
  formValue !: FormGroup;
  showAdd !: boolean;
  showUpdate !: boolean;
  sellerProductData !:any;
  public product !: any ;
  public product2 !: Product ;
  public productid !:any;
  
  public products !: Product[];
  constructor(private authService:AuthService,private formbuilder: FormBuilder,private toastr: ToastrService) { }
  productName = new FormControl();
  category = new FormControl();
  description = new FormControl();
  price = new FormControl();
  productImage = new FormControl();
  public registerform=this.formbuilder.group(
    {
      productName: [''],
      category: [''],
      description: [''],
      price : [0] ,
      productImage: ['']
    }
  )

  ngOnInit(): void {
   
    this.getAllProducts();
    
  }
  
  
  get Category():FormControl {
    return this.registerform.get("category") as FormControl;
  }
  get ProductName():FormControl {
    return this.registerform.get("productName") as FormControl;
  }
  get Price():FormControl {
    return this.registerform.get("price") as FormControl;
  }
  get Description():FormControl {
    return this.registerform.get("description") as FormControl;
  }
  get ProductImage():FormControl {
    return this.registerform.get("productImage") as FormControl;
  }
  getAllProducts()
  {
    this.authService.GetAllProduct().subscribe((res :Product[])=>{
    this.products=res;
    
  });
  }

  getProductById( val:any)
  {
   
   
   this.authService.GetProduct(val).subscribe(res=>{
    console.log(res);
    
    });
    
    
  }

  registersubmitted()
  {
    //console.log(this.registerform.value);
    this.authService.SaveProduct(this.registerform.value).subscribe(res=>{}),
    (error:any)=>console.log(error);
    
    alert("Product added");
    this.registerform.reset();
    let ref=document.getElementById('cancel');
    ref?.click();
    this.getAllProducts();
    this.toastr.success('Added Successfully');
  }
  clickAddProduct()
  {
    //this.registerform.reset();
    this.showAdd = true;
    this.showUpdate = false;
    //this.refreshList();
  }
  updateProductDetails()
  {
   console.log(this.registerform.value);
     this.authService.UpdateProduct(this.productid,this.registerform.value).subscribe(res=>{
      this.toastr.success('Successfully Updated');  
      //alert("Updated Successfully");
       
    
        let ref=document.getElementById('cancel');
        ref?.click();
        this.getAllProducts();
        this.registerform.reset();
       
        
     }),
     (error:any)=>console.log(error);
     //this.toastr.error('Please try again');
         
  //  
  }
  onEdit(prod:any)
  {
    this.showAdd = false;
    this.showUpdate = true;
    //console.log(prod);
    //console.log(prod.productName);
    this.product=this.authService.GetProduct(prod.productId);
    this.productid=prod.productId;
    this.registerform.patchValue({
      productName: prod.productName,
      category: prod.category,
      description: prod.description,
      price : prod.price ,
      productImage: prod.productImage
    });
    //  console.log(prod);
    //console.log(this.registerform);
    
    //console.log(this.product); 
  }


  deleteProduct(id:any){
  if(confirm('Are you sure?'))
  { 
    
    this.authService.DeleteProduct(id).subscribe(res=>{
    
      this.getAllProducts();
     
     this.toastr.success("Deleted properly");
    }),
    (error:any)=>console.log(error);
   
  }
  
  
}
refreshList(){
  this.authService.GetAllProduct().subscribe(data=>{
    this.products=data;
    console.log(this.products)
  });
}
}
  