import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any []=[];
  constructor(private _ProductService:ProductService, private _CartService:CartService ){

  }
  addToCart(productId:string){
    this._CartService.addToCart(productId).subscribe({
      next:(response)=>{console.log(response)},
      error:(err)=>{console.log(err)}
    })

  }


  ngOnInit(): void {
    this._ProductService.getProducts().subscribe({
      next:(response)=>{
        this.products = response.data
      }
    })
  }
}
