import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Cart from 'src/Models/Cart.model';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  Editform = new FormGroup({
  quantity: new FormControl('', Validators.required),});
  submitted=false;
  get quantity() {
    return this.Editform.get('quantity');
  }
  public Cart!:Cart[];
  readonly APIUrl ="https://localhost:7275";
  constructor(private shared:AuthService ,public http :HttpClient,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.refreshCartList();
  }
  isActive = true;
  refreshCartList(){
  this.shared.GetAllCart().subscribe(data=>{
    this.Cart=data;
    console.log(this.Cart)
  });

  }
  DeleteCart(id:number){
    if(confirm('Are you sure?')){
      this.shared.DeleteFromCart(id).subscribe(data=>{
        console.log(data);
        
      });
      this.toastr.success("Item removed");
      location.reload();
     
    }
    
}
onSubmit() {
  this.submitted = true;
  if (this.Editform.invalid) {
    return;
}
// this.shared.UpdateCart(this.Editform.value).subscribe((result)=>{

// });
}

   incrementQuantity(cartId:number){
    this.Cart = this.Cart.map((Cart:Cart) => {
      if (Cart.cartId === cartId) {
        return {
          ...Cart,
          quantity: Cart.quantity + 1, 
        };
      }
      return Cart;
    });
  }

  decrementQuantity(cartId:number){
    this.Cart = this.Cart.map((Cart:Cart) => {
      if (Cart.cartId === cartId) {
        return {
          ...Cart,
         quantity: Cart.quantity > 1 ? Cart.quantity - 1 : 1
        };
      }
      return Cart;
    });  
  }
  public grandTotal():number{
    let total : number = 0;
    for(let cart of this.Cart){
      total+= cart.quantity* cart.price;
    }
    return total;
  }
  
// addOrder(Cart:Cart){
//   console.log(Cart);
//   this.shared.addOrderDetails(this.Cart).subscribe(res=>{

//   });
//   alert('Order successful!');
//   this.router.navigate(['order']);
// }

}
