import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{
  productId:any;
  productDetails:any;
  constructor(private _ActivatedRoute:ActivatedRoute ,private _ProductService:ProductService){

  }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.productId  = params.get('id')
      this._ProductService.getProductDetails(this.productId).subscribe({
        next:(response)=>{
          this.productDetails = response.data
        }
      })
    })
  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

}
