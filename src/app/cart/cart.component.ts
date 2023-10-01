import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDetails:any = null;
  constructor(private _CartService:CartService ,private _ToastrService:ToastrService){

  }
  removeItem(productId:string){
    this._CartService.deleteCartItem(productId).subscribe({
      next:(response)=>{
        this.cartDetails = response.data;
        this.deleted();
        console.log(response)
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }
  updateCount(productId:string,count:number){
    if(count<=0){
      count=1
      this.countDefulat();
      this.removeItem(productId);
    }
    if(count>=6){
      count=count-1;
      this.countDefulat();
    }
    this._CartService.updateQuantety(productId,count).subscribe({
      next:(response)=>{
        this.cartDetails = response.data;
        this.quantetyUpdated();
        console.log(response)
      },
      error:(err)=>{
        console.log(err)
      }

    })

  }
  deleted() {
    this._ToastrService.show('Item has been removed from your cart','Item removed');
  }
  quantetyUpdated() {
    this._ToastrService.success('Item quantity has been updated !','Item update');
  }
  countDefulat(){
    this._ToastrService.info('Item quantity minmum value is 1 and max value is 5','Item update');

  }

  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next:(response)=>{this.cartDetails=response.data},
      error:(err)=>{console.log(err)}
    })
  }
}
