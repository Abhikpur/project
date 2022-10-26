import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  productId!:any;
  category!:any;
  productName!:any;
  price!:any;
  description!:any;
  productImage!:any;
  constructor(public auth:AuthService,public router:Router,private location:Location,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
