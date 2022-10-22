import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
import { ProfileComponent } from './admin-page/Account/profile/profile.component';
import { SellerProfileComponent } from './seller-page/Account/seller-profile/seller-profile.component';

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
    SellerProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
