import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/Services/auth.service';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { AdminAccountComponent } from './admin-page/MyAccount/admin-account/admin-account.component';
import { SellerProfileComponent } from './seller-page/Account/seller-profile/seller-profile.component';
import { ProfileComponent } from './admin-page/Account/profile/profile.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
// import{ MatIconmodule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrService } from 'ngx-toastr';
import {ToastrModule, ToastrService} from 'ngx-toastr';
//import { SearchComponent } from './user-page/search/search.component';
import { HomesearchComponent } from './home-page/homesearch/homesearch.component';
import { CartuserComponent } from './user-page/cartuser/cartuser.component';
import { SearchComponent } from './user-page/search/search.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    HomePageComponent,
    UserPageComponent,
    AdminPageComponent,
    SellerPageComponent,
    AdminAccountComponent,
    ProfileComponent,
    SellerProfileComponent,
    ProductComponent,
    CartComponent,
    SearchComponent,
    HomesearchComponent,
    CartuserComponent,
    OrderComponent,
    PaymentComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    // MatIconModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass :'toast-top-right'
    })
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
