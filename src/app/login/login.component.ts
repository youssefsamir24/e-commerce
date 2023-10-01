import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router ){
    if(localStorage.getItem('userToken')!==null){
      this._Router.navigate(['/home']) ;
    }
  }
  loadingStatus:boolean = false;
  apiError:string = '';
  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required , Validators.email]),
    password: new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{5}$/)]),
  })

  handelLogin(loginForm:FormGroup){
    this.loadingStatus = true
    if(loginForm.valid){
      //register call
      // console.log(registerForm.value);
      this._AuthService.Login(loginForm.value).subscribe({

        next:(response)=>{
          if(response.message === 'success'){
            localStorage.setItem('userToken',response.token);
            this._AuthService.decodeUserData();
            this.loadingStatus = false;
            this._Router.navigate(['/home'])            
          }},

        error:(err)=>{
          this.loadingStatus = false;
          this.apiError = err.error.message;
        }  
        
      })
    }    
  }

}
