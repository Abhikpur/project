import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './admin-page/Account/profile/profile.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomesearchComponent } from './home-page/homesearch/homesearch.component';
import { LogInComponent } from './log-in/log-in.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { SellerProfileComponent } from './seller-page/Account/seller-profile/seller-profile.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartuserComponent } from './user-page/cartuser/cartuser.component';
import { SearchComponent } from './user-page/search/search.component';
//import { SearchComponent } from './user-page/search/search.component';
import { UserPageComponent } from './user-page/user-page.component';
//import { MaterialModule } from './material.module';

const routes: Routes = [
  {path:'login',component:LogInComponent},
  {path: 'homepage',component:HomePageComponent },
  {path:'sign-up',component:SignUpComponent},
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'userpage',component:UserPageComponent},
  {path:'adminpage',component:AdminPageComponent},
  {path:'sellerpage',component:SellerPageComponent},
  {path:'adminprofile',component:ProfileComponent},
  {path:'sellerprofile',component:SellerProfileComponent},
  {path:'searchuser',component:SearchComponent},
  {path:'homesearch',component:HomesearchComponent},
  {path:'cartuser',component:CartuserComponent},
  {path:'cartpage',component:CartComponent},
  {path:'orderpage',component:OrderComponent},
  {path:'paymentpage',component:PaymentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
