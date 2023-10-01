import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  headers:any={
    token:localStorage.getItem('userToken')
  }
  addToCart(productId:string):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',{productId:productId},{headers:this.headers})
  }
  getUserCart():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',{headers:this.headers})
  }
  deleteCartItem(productId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers:this.headers});
  }
  updateQuantety(productId:string,count:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count:count},{headers:this.headers})

  }
  onlinePayment(shipingAddress:any,cartId:string){
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {
      shipingAddress:shipingAddress,
    },
    {headers:this.headers})

  }
  constructor(private _HttpClient:HttpClient) { }

}
