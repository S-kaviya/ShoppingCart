import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ShopComponent } from './Component/shop/shop.component';
import { BlogComponent } from './Component/blog/blog.component';
import { PagesComponent } from '../app/Component/pages/pages.component';
import { ContactComponent } from '../app/Component/contact/contact.component';
import { LoginComponent } from './Component/login/login.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path:'shop', component: ShopComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'contact', component: ContactComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
