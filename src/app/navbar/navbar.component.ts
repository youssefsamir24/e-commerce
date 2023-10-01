import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogin:boolean=false;
  constructor(private _AuthService:AuthService){
    _AuthService.userData.subscribe({
      next:()=>{
        if(_AuthService.userData.getValue()!==null){
          this.isLogin = true;

        }
        else{
          this.isLogin = false;
        }
      }
    })
  }
  navbarLogOut(){
    this._AuthService.logOut();
  }

}
