import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './admin-page/Account/profile/profile.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { SellerProfileComponent } from './seller-page/Account/seller-profile/seller-profile.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {path:'login',component:LogInComponent},
  {path: 'homepage',component:HomePageComponent },
  {path:'sign-up',component:SignUpComponent},
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'userpage',component:UserPageComponent},
  {path:'adminpage',component:AdminPageComponent},
  {path:'sellerpage',component:SellerPageComponent},
  {path:'adminprofile',component:ProfileComponent},
  {path:'sellerprofile',component:SellerProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
