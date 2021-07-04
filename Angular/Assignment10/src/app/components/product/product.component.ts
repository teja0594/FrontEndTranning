import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    this. service.getAllProducts().subscribe(
      data =>
      {
        this.products = data
        console.log(data)
      },
      error => console.log(error));
  }

}
