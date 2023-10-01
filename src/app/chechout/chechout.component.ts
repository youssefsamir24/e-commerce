import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-chechout',
  templateUrl: './chechout.component.html',
  styleUrls: ['./chechout.component.css']
})
export class ChechoutComponent {
  constructor(private _CartService:CartService){
    
  }
  shippingAddress:FormGroup = new FormGroup({
    details:new FormControl(null),
    phone:new FormControl(null),
    city:new FormControl(null)
  });
  getUrl(url:string){
    window.location.href=url
  }

  paymentHandle(shippingAddress:FormGroup){
    console.log(shippingAddress.value);
    this._CartService.onlinePayment(shippingAddress.value,'6519798445ba2b4d48dcc0f7').subscribe({
      next:(response:any)=>{
        this.getUrl(response.session.url);
        console.log(response.session.url);
      },
      error:(err)=>{
        console.log(err)
        
      }
    })
    
  }

}
