import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable ,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient ,private _Router:Router) {
    if(localStorage.getItem('userToken')!==null){
       this.decodeUserData();
    }else{
      this._Router.navigate(['/login'])
    }
    setTimeout(()=>{
      this.logOut();
    },300000)
   }
  
  logOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login'])

  }

  decodeUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any = jwtDecode(encodedToken);
    console.log(decodedToken);
    this.userData.next(decodedToken);
    
  }

  register(userData:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData)
  }

  Login(userData:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userData)
  }


}
