import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ShopComponent } from './Component/shop/shop.component';
import { BlogComponent } from './Component/blog/blog.component';
import { PagesComponent } from '../app/Component/pages/pages.component';
import { ContactComponent } from '../app/Component/contact/contact.component';
import { LoginComponent } from './Component/login/login.component';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';
import { KidsClothingComponent } from './kids-clothing/kids-clothing.component';
import { RegisterComponent } from './Component/register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path:'shop', component: ShopComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'contact', component: ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'menclothing',component:MenClothingComponent},
  {path:'womenclothing',component:WomenClothingComponent},
  {path:'kidsclothing',component:KidsClothingComponent},
  {path:'register',component:RegisterComponent},
  {path:'productdetails',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
