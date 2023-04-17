import { Component, OnInit } from '@angular/core';
import { ProductservicesService } from '../productservices.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  allProducts:any[]=[];
  category:any[]=[];
  title:string="";
 price:number=0;
//  description:string="";
  image: string="";
  searchText:string="";
getMensProduct: any;
getWomensProduct:any;
getKidsProduct:any;
  
    //  private _customerService: any;
  constructor(private ProductservicesService:ProductservicesService){}
   
    ngOnInit():void{
  
    
    this.allProducts=this. ProductservicesService.getMensProduct();
    this.allProducts=this.ProductservicesService.getWomenProduct();
    this.allProducts=this.ProductservicesService.getKidsProduct();
    }


}
