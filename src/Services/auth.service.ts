import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/Models/Product.model';
import { UserDetails } from 'src/Models/UserDetails.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  constructor(private http:HttpClient) { }

  public userService = UserDetails;
  public products !: Product[];
  public product !: Product;
  readonly APIUrl="https://localhost:7275";

  //UserServices
  addUserDetails(val:any)
  {
    console.log(val);
    return this.http.post<UserDetails>(this.APIUrl+'/api/UserDetails/AddUserDetails',val);
  }
  userlogin(val:any){
    console.log(val);
    return this.http.post<UserDetails>(this.APIUrl+'/api/UserDetails/LogIn',val);
  }
  GetAllUserDetails():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/api/UserDetails/GetAllUserDetails');
  }
  GetUserDetailsbyId(val:any):Observable<any>{
    return this.http.get<UserDetails>(this.APIUrl+'/api/UserDetails/GetUserDetailsbyId');
  }
  GetUserDetailsbyEmail(val:any):Observable<any>{
    return this.http.get<UserDetails>(this.APIUrl+'/api/UserDetails/GetUserDetailsbyEmail');
  }
  DeleteUserDetails(val:any)
  {
    console.log(val);
    return this.http.post<UserDetails>(this.APIUrl+'/api/UserDetails/DeleteUserDetails',val);
  }
  EditUserDetails(val:any)
  {
    console.log(val);
    return this.http.post<UserDetails>(this.APIUrl+'/api/UserDetails/EditUserDetails',val);
  }

  //ProductServices
  GetAllProduct():Observable<Product[]>{
    
    return this.http.get<Product[]>(this.APIUrl+'/api/Product/GetAllProduct');
  }

  
  SaveProduct(val:any){
    console.log(val);
    return this.http.post(this.APIUrl+'/api/Product/SaveProduct',val);
  }
  
  UpdateProduct(val:any){
    return this.http.put<Product[]>(this.APIUrl+'/api/Product/UpdateProduct',val);
  }
  DeleteProduct(val:any){
    return this.http.delete<Product[]>(this.APIUrl+'/api/Product/DeleteProduct',val);
  }
  GetProduct(val:any){
    return this.http.post(this.APIUrl+'api/Product/GetProduct',val);
  }
  GetByCategory(val:any){
    return this.http.get(this.APIUrl+'/api/Product/GetByCategory',val);
  }
 
}
