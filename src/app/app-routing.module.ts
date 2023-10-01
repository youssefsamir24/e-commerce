import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { authGuard } from './auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ChechoutComponent } from './chechout/chechout.component';

const routes: Routes = [
  {path:'', redirectTo:'home' , pathMatch:'full'},
  {path:'home',canActivate:[authGuard] ,component:HomeComponent ,title:'Home'},
  {path:'about',canActivate:[authGuard] ,component:AboutComponent ,title:'About'},
  {path:'categories',canActivate:[authGuard] ,component:CategoriesComponent ,title:'Categories'},
  {path:'cart',canActivate:[authGuard] ,component:CartComponent ,title:'Cart'},
  {path:'checkout',canActivate:[authGuard] ,component:ChechoutComponent ,title:'Checkout'},
  {path:'products',canActivate:[authGuard] ,component:ProductsComponent ,title:'Products'},
  {path:'productdetails/:id',canActivate:[authGuard] ,component:ProductdetailsComponent ,title:'Products details'},
  {path:'brands',canActivate:[authGuard] ,component:BrandsComponent ,title:'Brands'},
  {path:'login',component:LoginComponent ,title:'Login'},
  {path:'register',component:RegisterComponent ,title:'Register'},
  {path:'**',component:NotFoundComponent ,title:'Not-Found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
