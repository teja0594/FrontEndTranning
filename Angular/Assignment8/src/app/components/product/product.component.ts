import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  funnel:any="a-z"
  filter:any="all"
products:any=[];
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts():any{
     this.products=this.service.getAllProducts();
  }

}
