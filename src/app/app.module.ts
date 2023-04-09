import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgModule } from '@angular/compiler/src/core';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {MatMenuModule} from '@angular/material/menu';
 import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
 import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
 import { PagesComponent } from './pages/pages.component';
 import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
     ShopComponent,
     BlogComponent,
     PagesComponent,
     ContactComponent,
     FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   MatToolbarModule,
     BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
    
  
  
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
