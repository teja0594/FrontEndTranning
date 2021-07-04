import { Component,OnInit } from '@angular/core';

interface Product
{
  id:any,
  name:string,
  price:number,
  description:string,
  image:any
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  funnel:any="a-z"
  filter:any="all"

  products:Product[]=[
    {id:'Pd2353xd',name:'Samsung Galaxy S8+',price:15899,description:"4/64GB",image:"../assets/images/p1.png"},
    {id:'Pd4563gy',name:'Sony Tv',price:47000,description:"55inchs",image:"../assets/images/p2.png"},
    {id:'Pd8433hl',name:'Rubiks Cube',price:250,description:"Toy",image:"../assets/images/p3.png"},
    {id:'Pd4673nj',name:'Cannon Camera',price:64738,description:"DSLR",image:"../assets/images/p4.png"},
    {id:'Pd9533mw',name:'Table',price:12000,description:"Wooden",image:"../assets/images/p5.png"},
    {id:'Pd6323qw',name:'Apple IPad',price:9899,description:"7inch",image:"../assets/images/p6.png"},
    {id:'Pd0234dq',name:'Amazon FireStick',price:3999,description:"OTT",image:"../assets/images/p7.png"}]
  constructor() { }

  ngOnInit(): void {

  }


}
