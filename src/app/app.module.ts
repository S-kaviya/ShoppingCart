import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {MatMenuModule} from '@angular/material/menu';
 import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from '../app/Component/home/home.component';
 import { ShopComponent } from '../app/Component/shop/shop.component';
import { BlogComponent } from '../app/Component/blog/blog.component';
 import { PagesComponent } from '../app/Component/pages/pages.component';
 import { ContactComponent } from '../app/Component/contact/contact.component';
import { FooterComponent } from '../app/Component/footer/footer.component';
import { HeaderComponent } from '../app/Component/header/header.component';
import { LoginComponent } from './Component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenClothingComponent } from './men-clothing/men-clothing.component';
import { WomenClothingComponent } from './women-clothing/women-clothing.component';
import { KidsClothingComponent } from './kids-clothing/kids-clothing.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
     ShopComponent,
     BlogComponent,
     PagesComponent,
     ContactComponent,
     FooterComponent,
     HeaderComponent,
     LoginComponent,
     MenClothingComponent,
     WomenClothingComponent,
     KidsClothingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   MatToolbarModule,
     BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule

    
  
  
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
