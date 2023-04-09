import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path:'shop', component: ShopComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
