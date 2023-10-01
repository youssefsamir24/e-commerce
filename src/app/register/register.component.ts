import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService , private _Router:Router ){
    if(localStorage.getItem('userToken')!==null){
      this._Router.navigate(['/home']) ;
    }
  }
  loadingStatus:boolean = false;
  apiError:string = '';
  registerForm:FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    email: new FormControl(null,[Validators.required , Validators.email]),
    password: new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{5}$/)]),
    rePassword: new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{5}$/)]),
    phone: new FormControl(null,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
  })

  handelRegister(registerForm:FormGroup){
    this.loadingStatus = true
    if(registerForm.valid){
      //register call
      // console.log(registerForm.value);
      this._AuthService.register(registerForm.value).subscribe({

        next:(response)=>{
          if(response.message === 'success'){
            this.loadingStatus = false;
            this._Router.navigate(['/login'])            
          }},

        error:(err)=>{
          this.loadingStatus = false;
          this.apiError = err.error.message;
        }  

      })
    }
    
  }

}
