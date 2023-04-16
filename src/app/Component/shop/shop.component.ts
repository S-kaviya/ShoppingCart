import { Component, OnInit } from '@angular/core';
import { ProductservicesService } from 'src/app/productservices.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

//   products:any[] = [
//     {
//       name: 'Quartz Belt Watch',
//       price: 1399,
//       image: 'https://themewagon.github.io/aroma/img/product/product1.png',
//       category:'Accessories'
//     },
//     {
//       name: 'Women Facewash',
//       price: 1299,
//       image: 'https://themewagon.github.io/aroma/img/product/product2.png',
//       category:'Beauty'
//     },
//     {
//       name: 'Charging Car',
//       price: 1199,
//       image: 'https://themewagon.github.io/aroma/img/product/product6.png',
//       category:'Kids'
//     },
//     {
//       name: 'Bluetooth Speaker',
//       price: 1199,
//       image: 'https://themewagon.github.io/aroma/img/product/product7.png',
//       category:'Accessories'
//     },
//   ];

//   productFilter: any = { category: ''};

//   get categories (){
//     return Array.from(new Set(this.products.map(product => product.category)));
//   }
//   selectedCategory = '';

//   get filteredProducts() {
//     return this.products.filter(product => !this.selectedCategory || product.category === this.selectedCategory);
//   }
  

// }
allProducts:any[]=[];
  category:any[]=[];
  title:string="";
 price:number=0;
//  description:string="";
  image: string="";
  searchText:string="";
getTotalProducts: any;
  
    //  private _customerService: any;
  constructor(private ProductservicesService:ProductservicesService){}
   
    ngOnInit():void{
  
    
    this.allProducts=this. ProductservicesService.getTotalProducts();
    }

}