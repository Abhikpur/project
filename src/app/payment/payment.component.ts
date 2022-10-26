import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Payment } from 'src/Models/Payment.model';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  Paymentform=new FormGroup({

    FullName:new FormControl('', Validators.required),
    transactionAmount:new FormControl('',),
    Cardnumber : new FormControl('',[Validators.required , Validators.minLength(16) , Validators.maxLength(16)]),
    CardCVV : new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(3)]),
    Mode: new FormControl('',),
  });
  submitted=false;
  get FullName() {
    return this.Paymentform.get('Fullname');
  }
  get transactionAmount() {
    return this.Paymentform.get('TransactionAmount');
  }
  get Mode() {
    return this.Paymentform.get('Mode');
  }
  get Cardnumber() {
    return this.Paymentform.get('Cardnumber');
  }
  get CardCVV() {
    return this.Paymentform.get('CardCVV');
  }



  public payment!:Payment[];
  readonly APIUrl ="https://localhost:7275";
  constructor(private shared:AuthService,private router :Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    if (this.Paymentform.invalid) {
      return;
  }
   console.log(this.Paymentform.value);
   
}
}
