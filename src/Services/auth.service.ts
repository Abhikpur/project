import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import Cart from 'src/Models/Cart.model';
import { Product } from 'src/Models/Product.model';
import { UserDetails } from 'src/Models/UserDetails.model';
import { AuthGuard } from './Guard.guard';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  constructor(private http:HttpClient,private gservice:AuthGuard) { }
  public res:any;
  public userService = UserDetails;
  public user !: UserDetails;
  public products !: Product[];
  public product !: Product;
  readonly APIUrl="https://localhost:7275";
  public cart !:Cart[];

  //UserServices
  addUserDetails(val:any)
  {
    console.log(val);
    return this.http.post<UserDetails>(this.APIUrl+'/api/UserDetails/AddUserDetails',val);
  }
  userlogin(val:any){
    console.log(val);
    return this.http.post(this.APIUrl+'/api/UserDetails/LogIn',val,{responseType: 'text'});
  }
  GetAllUserDetails():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/api/UserDetails/GetAllUserDetails');
  }
  GetUserDetailsbyId(val:any):Observable<any>{
    return this.http.get<UserDetails>(this.APIUrl+'/api/UserDetails/GetUserDetailsbyId');
  }
  GetUserDetailsbyEmail(val:any):Observable<any>{
    return this.http.get(this.APIUrl+'/api/UserDetails/GetUserDetailsbyEmail?Email='+val);
  }
  DeleteUserDetails(val:any)
  {
    return this.http.post<UserDetails>(this.APIUrl+'/api/UserDetails/DeleteUserDetails',val);
  }
  EditUserDetails(id:any,val:any)
  {
    // val.userId=id;
    // this.GetUserDetailsbyId(id).subscribe(res=>
    //   {
    //     this.user=res;
    //   })
    //   console.log(this.user.Role);
      
    // val.role=this.user.Role;
    // val.emailId=this.user.EmailId;
    // val.password=this.user.Password;
    // val.createdDate=this.user.CreatedDate; 
    console.log(id);
    return this.http.put(this.APIUrl+'/api/UserDetails/EditUserDetails/'+id,val,{responseType: 'text'});
  }
  getUserProfile(){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer'+localStorage.getItem('token')})
    console.log(tokenHeader);
    return this.http.get(this.APIUrl+'/api/UserDetails/GetUserDetails?UserId=',{headers : tokenHeader});
  }
  getUserProfile1(){
   // var tokenHeader = new HttpHeaders({'Authorization':'Bearer'+localStorage.getItem('token')})
    //console.log(tokenHeader);
   // return this.http.get(this.APIUrl+'/api/UserDetails/GetUserDetails?UserId=');
  }
    //ProductServices
  GetAllProduct():Observable<Product[]>
  {  
    return this.http.get<Product[]>(this.APIUrl+'/api/Product/GetAllProduct');
  }

  SaveProduct(val:any)
  {
    return this.http.post(this.APIUrl+'/api/Product/SaveProduct',val,{responseType: 'text'});
  }
  
  UpdateProduct(id:any,val:any)
  {
    val.productId=id;
    return this.http.put(this.APIUrl+'/api/Product/UpdateProduct/'+id,val,{responseType: 'text'});
  }

  DeleteProduct(val:any)
  {
    return this.http.delete(this.APIUrl+'/api/Product/DeleteProduct?ProductId='+val,{responseType: 'text'});
  }

  GetProduct(val:any)
  {
    return this.http.get(this.APIUrl+'/api/Product/GetProduct/'+val);
  }

  GetByCategory(val:any):Observable<Product[]>
  {
    return this.http.get<Product[]>(this.APIUrl+'/api/Product/GetByCategory?Category='+val);
  }

//Cart Service
UpdateCart(val:any){
  return this.http.put(this.APIUrl+'/api/Cart/UpdateCart',val);
}
addToCart(val:any){
  return this.http.post(this.APIUrl+'/api/Cart/SaveCart',val,{responseType: 'text'});
}
GetAllCart():Observable<Cart[]>
{
return this.http.get<Cart[]>(this.APIUrl+'/api/Cart/GetAllCart');
}
DeleteFromCart(id:number)
{ return this.http.delete<Cart[]>(this.APIUrl+'/api/Cart/DeleteCart?CartId='+id)
}

//Order Service
addOrderDetails(val:any){
  console.log(val);
  return this.http.post<Cart[]>(this.APIUrl+'/api/Order/SaveOrderDetails',val)
}
 
}
